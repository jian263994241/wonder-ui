/* eslint no-unused-vars: 0, react/no-multi-comp: 0
react/prop-types: 0, react/sort-comp: 0, no-unused-expressions: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import ListViewDataSource from 'rmc-list-view/es/ListViewDataSource';
import ScrollView from 'rmc-list-view/es/ScrollView';
import List from '../List';

const DEFAULT_PAGE_SIZE = 1;
const DEFAULT_INITIAL_ROWS = 10;
const DEFAULT_SCROLL_RENDER_AHEAD = 1000;
const DEFAULT_END_REACHED_THRESHOLD = 1000;
const DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;

class StaticRenderer extends React.Component {

  shouldComponentUpdate(nextProps) {
    if(this.props.timestamp != nextProps.timestamp){
      return true;
    }
    return nextProps.shouldUpdate;
  }
  render() {
    return this.props.render();
  }
}


/**
 * 
 * @visibleName ListView 长列表
 */
export default class ListView extends React.Component {
  static DataSource = ListViewDataSource
  static propTypes = {
    ...ScrollView.propTypes,
    /** ListView.DataSource 实例 */
    dataSource: PropTypes.instanceOf(ListViewDataSource).isRequired,
    /**
     * 如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。
     * 在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来。
     */
    renderSeparator: PropTypes.func,
    /**
     * 从数据源(data source)中接受一条数据，
     * 以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。
     * 默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器。
     * 如果某一行正在被高亮（通过调用highlightRow函数），ListView会得到相应的通知。
     * @param {object} rowData - 行数据
     * @param {string} sectionID - 块id
     * @param {string} rowID - 行id
     * @param {function} highlightRow
     */
    renderRow: PropTypes.func.isRequired,
    /**  指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据 */
    initialListSize: PropTypes.number,
    /**
     * 当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用
     * @param { object } event 
     */
    onEndReached: PropTypes.func,
    /** 调用onEndReached之前的临界值，单位是像素 */
    onEndReachedThreshold: PropTypes.number,
    /** 每次事件循环（每帧）渲染的行数 */
    pageSize: PropTypes.number,
    /** 页脚 */
    renderFooter: PropTypes.func,
    /** 页头 */
    renderHeader: PropTypes.func,
    /** 如果提供了此函数，会为每个小节(section)渲染一个标题 */
    renderSectionHeader: PropTypes.func,
    /** 
     * 指定一个函数，在其中返回一个可以滚动的组件，ListView将会在该组件内部进行渲染。
     * 默认情况下会返回一个包含指定属性的ScrollView
     */
    renderScrollComponent: PropTypes.func,
    /**
     * 当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行
     */
    scrollRenderAheadDistance: PropTypes.number,
    /**
     * @ignore
     */
    onChangeVisibleRows: PropTypes.func,
    /**
     * 控制在滚动过程中，scroll事件被调用的频率
     */
    scrollEventThrottle: PropTypes.number,
    /**
     * 自定义 body 的包裹组件
     */
    renderBodyComponent: PropTypes.func,
    /**
     * 渲染自定义的区块包裹组件
     */
    renderSectionWrapper: PropTypes.func,
    /**
     * 渲染自定义的区块 body 包裹组件
     */
    renderSectionBodyWrapper: PropTypes.func,
    /**
     * @ignore
     */
    sectionBodyClassName: PropTypes.string,
    /**
     * @ignore
     */
    listViewPrefixCls: PropTypes.string,
    /**
     * 使用 html 的 body 作为滚动容器
     */
    useBodyScroll: PropTypes.bool,
  }

  static defaultProps = {
    initialListSize: DEFAULT_INITIAL_ROWS,
    pageSize: DEFAULT_PAGE_SIZE,
    renderScrollComponent: props => <ScrollView contentContainerStyle={{ width: '100%' }} {...props} />,
    renderBodyComponent: () => <List.Body />,
    renderSectionBodyWrapper: (sectionID) => <div key={sectionID} />,
    sectionBodyClassName: 'list-view-section-body',
    listViewPrefixCls: 'wui-list-view',
    scrollRenderAheadDistance: DEFAULT_SCROLL_RENDER_AHEAD,
    onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
    scrollEventThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE,
    scrollerOptions: {},
  }

  state = {
    curRenderedRowsCount: this.props.initialListSize,
    highlightedRow: {},
    metrics: {}
  }

  /**
   * Exports some data, e.g. for perf investigations or analytics.
   */
  getMetrics = () => {
    return {
      contentLength: this.scrollProperties.contentLength,
      totalRows: this.props.dataSource.getRowCount(),
      renderedRows: this.state.curRenderedRowsCount,
      visibleRows: Object.keys(this._visibleRows).length,
    };
  }

  getInnerViewNode = () => {
    return this.ListViewRef.getInnerViewNode();
  }

  scrollTo = (...args) => {
    this.ListViewRef &&
    this.ListViewRef.scrollTo &&
    this.ListViewRef.scrollTo(...args);
  }

  componentWillMount() {
    // this data should never trigger a render pass, so don't put in state
    this.scrollProperties = {
      visibleLength: null,
      contentLength: null,
      offset: 0,
    };
    this._childFrames = [];
    this._visibleRows = {};
    this._prevRenderedRowsCount = 0;
    this._sentEndForContentLength = null;
    this.setState({metrics: this.scrollProperties});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.dataSource !== nextProps.dataSource ||
        this.props.initialListSize !== nextProps.initialListSize) {
      this.setState((state, props) => {
        this._prevRenderedRowsCount = 0;
        return {
          curRenderedRowsCount: Math.min(
            Math.max(
              state.curRenderedRowsCount,
              nextProps.initialListSize // for preact
            ),
            nextProps.dataSource.getRowCount() // for preact
          ),
        };
      }, () => this._renderMoreRowsIfNeeded());
    }
  }

  onRowHighlighted = (sectionID, rowID) => {
    this.setState({ highlightedRow: { sectionID, rowID } });
  }

  render() {
    const dataSource = this.props.dataSource;
    const timestamp = this.props.timestamp;
    const allRowIDs = dataSource.rowIdentities;
    const bodyComponents = [];
    let rowCount = 0;

    for (let sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
      const sectionID = dataSource.sectionIdentities[sectionIdx];
      const rowIDs = allRowIDs[sectionIdx];
      if (rowIDs.length === 0) {
        continue;
      }

      let renderSectionHeader;
      if (this.props.renderSectionHeader) {
        const shouldUpdateHeader = rowCount >= this._prevRenderedRowsCount &&
          dataSource.sectionHeaderShouldUpdate(sectionIdx);

        renderSectionHeader = (
          <StaticRenderer
            key={`s_${sectionID}`}
            shouldUpdate={!!shouldUpdateHeader}
            timestamp={timestamp}
            render={this.props.renderSectionHeader.bind(
              null,
              dataSource.getSectionHeaderData(sectionIdx),
              sectionID
            )}
          />
        );
      }

      const sectionBody = [];
      for (let rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
        const rowID = rowIDs[rowIdx];
        const comboID = `${sectionID}_${rowID}`;
        const shouldUpdateRow = rowCount >= this._prevRenderedRowsCount &&
          dataSource.rowShouldUpdate(sectionIdx, rowIdx);
        const row = (
          <StaticRenderer
            key={`r_${comboID}`}
            shouldUpdate={!!shouldUpdateRow}
            timestamp={timestamp}
            render={this.props.renderRow.bind(
              null,
              dataSource.getRowData(sectionIdx, rowIdx),
              sectionID,
              rowID,
              this.onRowHighlighted
            )}
          />
        );
        sectionBody.push(row);

        if (this.props.renderSeparator &&
            (rowIdx !== rowIDs.length - 1 || sectionIdx === allRowIDs.length - 1)) {
          const adjacentRowHighlighted =
            this.state.highlightedRow.sectionID === sectionID && (
              this.state.highlightedRow.rowID === rowID ||
              this.state.highlightedRow.rowID === rowIDs[rowIdx + 1]
            );
          const separator = this.props.renderSeparator(
            sectionID,
            rowID,
            adjacentRowHighlighted
          );
          if (separator) {
            sectionBody.push(separator);
          }
        }
        if (++rowCount === this.state.curRenderedRowsCount) {
          break;
        }
      }

      const rowsAndSeparators = React.cloneElement(this.props.renderSectionBodyWrapper(sectionID), {
        className: this.props.sectionBodyClassName,
      }, sectionBody);

      if (this.props.renderSectionWrapper) {
        bodyComponents.push(
          React.cloneElement(
            this.props.renderSectionWrapper(sectionID), {}, renderSectionHeader, rowsAndSeparators
          )
        );
      } else {
        bodyComponents.push(renderSectionHeader);
        bodyComponents.push(rowsAndSeparators);
      }
      if (rowCount >= this.state.curRenderedRowsCount) {
        break;
      }
    }

    const { renderScrollComponent, ...props } = this.props;

    return React.cloneElement(
      renderScrollComponent({ ...props, onScroll: this._onScroll }),
      {
        ref: el => this.ListViewRef = el,
        onContentSizeChange: this._onContentSizeChange,
        onLayout: this._onLayout,
      },
      this.props.renderHeader ? this.props.renderHeader(List.Header) : null,
      React.cloneElement(props.renderBodyComponent(), {}, bodyComponents),
      this.props.renderFooter ? this.props.renderFooter(List.Footer) : null,
      props.children
    );
  }

  _onContentSizeChange = (width, height) => {
    const contentLength = !this.props.horizontal ? height : width;
    if (contentLength !== this.scrollProperties.contentLength) {
      this.scrollProperties.contentLength = contentLength;
      this._renderMoreRowsIfNeeded();
    }
    this.props.onContentSizeChange && this.props.onContentSizeChange(width, height);
  }

  _onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    const visibleLength = !this.props.horizontal ? height : width;
    if (visibleLength !== this.scrollProperties.visibleLength) {
      this.scrollProperties.visibleLength = visibleLength;
      this._renderMoreRowsIfNeeded();
    }
    this.props.onLayout && this.props.onLayout(event);
  }

  _maybeCallOnEndReached = (event) => {
    // console.log(this.scrollProperties, this._getDistanceFromEnd(this.scrollProperties));
    if (this.props.onEndReached &&
        this.scrollProperties.contentLength !== this._sentEndForContentLength &&
        this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold &&
        this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()) {
      this._sentEndForContentLength = this.scrollProperties.contentLength;
      this.props.onEndReached(event);
      return true;
    }
    return false;
  }

  _renderMoreRowsIfNeeded = () => {
    if (this.scrollProperties.contentLength === null ||
      this.scrollProperties.visibleLength === null ||
      this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()) {
      this._maybeCallOnEndReached();
      return;
    }

    const distanceFromEnd = this._getDistanceFromEnd(this.scrollProperties);
    // console.log(distanceFromEnd, this.props.scrollRenderAheadDistance);
    if (distanceFromEnd < this.props.scrollRenderAheadDistance) {
      this._pageInNewRows();
    }
  }

  _pageInNewRows = () => {
    this.setState((state, props) => {
      const rowsToRender = Math.min(
        state.curRenderedRowsCount + props.pageSize,
        props.dataSource.getRowCount()
      );
      this._prevRenderedRowsCount = state.curRenderedRowsCount;
      return {
        curRenderedRowsCount: rowsToRender,
      };
    }, () => {
      this._prevRenderedRowsCount = this.state.curRenderedRowsCount;
    });
  }

  _getDistanceFromEnd = (scrollProperties) => {
    return scrollProperties.contentLength -
      scrollProperties.visibleLength - scrollProperties.offset;
  }

  _onScroll = (e, metrics) => {
    // when the ListView is destroyed,
    // but also will trigger scroll event after `scrollEventThrottle`
    if (!this.ListViewRef) {
      return;
    }

    this.scrollProperties = metrics;

    if (!this._maybeCallOnEndReached(e)) {
      this._renderMoreRowsIfNeeded();
    }

    if (this.props.onEndReached &&
        this._getDistanceFromEnd(this.scrollProperties) > this.props.onEndReachedThreshold) {
      // Scrolled out of the end zone, so it should be able to trigger again.
      this._sentEndForContentLength = null;
    }

    this.setState({ metrics })

    this.props.onScroll && this.props.onScroll(e);
  }
}

