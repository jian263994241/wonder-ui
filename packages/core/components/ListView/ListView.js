import React from 'react';
import PropTypes from 'prop-types';
import { VariableSizeList as List, areEqual } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Flex from '../Flex';
import Indicator from '../Indicator';
import InfiniteLoader from 'react-window-infinite-loader';
import PullToRefresh from '../PullToRefresh';
import useForkRef from '@wonder-ui/utils/useForkRef';

const defaultRenderIndicator = () => (
  <Flex justify="center" style={{ height: 44 }}>
    <Indicator spin />
  </Flex>
);

const getScrollHeight = (ele) => {
  const originHeight = ele.style.height;
  ele.style.height = 0;
  const height = ele.scrollHeight;
  ele.style.height = originHeight;
  return height;
};

const ListViewRow = React.memo(
  React.forwardRef(function ListViewRow(props, ref) {
    const { data: passProps, index, style, isScrolling } = props;
    const {
      renderItem,
      dataSource,
      isItemLoaded,
      indicator,
      listFooter,
      listRef,
      itemHeights,
    } = passProps;

    const rootRef = React.useRef();
    const handleRef = useForkRef(rootRef, ref);
    const list = listRef.current;
    const rootElement = rootRef.current;
    const [heightFix, setHeight] = React.useState();

    const dataItem = dataSource[index];

    let content = null;

    React.useEffect(
      () => {
        if (rootElement) {
          const height = getScrollHeight(rootElement);
          itemHeights.current[index] = height;
          setHeight(height);
          list.resetAfterIndex(index);
        }
      },
      [rootElement, dataSource],
    );

    if (dataItem) {
      const row = renderItem({ data: dataItem, index, isScrolling, ref });

      if (!row) {
        console.error(`ListView: renderItem must return a single element.`);
      }

      content = row;
    } else if (!isItemLoaded(index)) {
      content = indicator;
    } else if (listFooter) {
      content = listFooter;
    }

    return (
      <div key={index} style={{ ...style, height: heightFix }} ref={handleRef}>
        {content}
      </div>
    );
  }, areEqual),
);

ListViewRow.propTypes = {
  data: PropTypes.shape({
    renderRow: PropTypes.func,
    dataSource: PropTypes.array,
  }),
};

/**
 * 一个无限长的虚拟列表, 支持下拉刷新.
 * @visibleName ListView 长列表
 */
const ListView = React.forwardRef(function ListView(props, ref) {
  const {
    data = [],
    hasNextPage,
    initialScrollOffset = 0,
    itemKey,
    itemSize,
    layout = 'vertical',
    loadMoreItems: loadMoreItemsCallback,
    onRefresh,
    pageSize = 10,
    pullToRefresh: allowPullToRefresh = false,
    pullToRefreshProps = {},
    refreshing: refreshingInput = false,
    renderIndicator = defaultRenderIndicator,
    renderFooter,
    renderItem = () => null,
    threshold = 0,
    useIsScrolling = false,
    ...rest
  } = props;

  const listFooter = renderFooter && renderFooter();
  const indicator = renderIndicator && renderIndicator();

  const itemCount = hasNextPage || listFooter ? data.length + 1 : data.length;
  const refreshing = pullToRefreshProps.refreshing || refreshingInput;

  const itemHeights = React.useRef([]);
  const listRef = React.useRef();
  const handleRef = useForkRef(listRef, ref);

  const [scrollDirection, setscrollDirection] = React.useState();

  const handleScroll = (scrollDirection) => {
    setscrollDirection(scrollDirection);
  };

  const isItemLoaded = (index) => !hasNextPage || index < data.length;
  const getItemSize = (index) => {
    return itemHeights.current[index] || itemSize;
  };

  const loadMoreItems = (startIndex, stopIndex) => {
    if (!refreshing && loadMoreItemsCallback) {
      return loadMoreItemsCallback(startIndex, stopIndex);
    }
  };

  const passProps = {
    dataSource: data,
    renderItem,
    isItemLoaded,
    indicator,
    listFooter,
    listRef,
    itemHeights,
  };

  const renderInfiniteList = ({ width, height }) => (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      minimumBatchSize={pageSize}
      threshold={threshold}
    >
      {({ onItemsRendered, ref }) => {
        ref(listRef);
        return (
          <List
            height={height}
            initialScrollOffset={initialScrollOffset}
            itemCount={itemCount}
            itemData={passProps}
            itemKey={itemKey}
            itemSize={getItemSize}
            layout={layout}
            onItemsRendered={onItemsRendered}
            onScroll={handleScroll}
            ref={handleRef}
            useIsScrolling={useIsScrolling}
            width={width}
          >
            {ListViewRow}
          </List>
        );
      }}
    </InfiniteLoader>
  );

  if (allowPullToRefresh) {
    return (
      <AutoSizer>
        {({ width, height }) => (
          <div style={{ overflow: 'hidden', height, width }}>
            <PullToRefresh
              style={{ height, width }}
              {...pullToRefreshProps}
              onRefresh={onRefresh}
              refreshing={refreshing}
              data-scroll-direction={scrollDirection}
            >
              {renderInfiniteList({ width, height })}
            </PullToRefresh>
          </div>
        )}
      </AutoSizer>
    );
  }

  return (
    <AutoSizer>
      {({ width, height }) => renderInfiniteList({ width, height })}
    </AutoSizer>
  );
});

ListView.defaultProps = {
  itemSize: 44,
};

ListView.propTypes = {
  /**
   * 自定义加载指示器
   */
  renderIndicator: PropTypes.func,
  /**
   * 自定义脚部
   */
  renderFooter: PropTypes.func,
  /**
   * 渲染每个节点
   */
  renderItem: PropTypes.func,
  /**
   * 列表数据 []
   */
  data: PropTypes.array,
  /**
   * 自定义子项的key, 默认index
   */
  itemKey: PropTypes.func,
  /**
   * 默认item容器高度, 实际会根据内容计算内容高度
   */
  itemSize: PropTypes.number.isRequired,
  /**
   * 加载更多内容
   */
  loadMoreItems: PropTypes.func,
  /**
   * 每次加载的长度
   */
  pageSize: PropTypes.number.isRequired,
  /**
   * 是否有更多内容
   */
  hasNextPage: PropTypes.bool,
  /**
   * 刷新callback
   */
  onRefresh: PropTypes.func,
  /**
   * 是否开启下拉刷新
   */
  pullToRefresh: PropTypes.bool,
  /**
   * @see 查看[PullToRefresh](./#/组件/数据展示/PullToRefresh)组件
   */
  pullToRefreshProps: PropTypes.object,
  /**
   * 是否正在刷新
   */
  refreshing: PropTypes.bool,
  /**
   * 预加载数据, 默认15条
   */
  threshold: PropTypes.number,
  /**
   * 是否检测滚动状态
   */
  useIsScrolling: PropTypes.bool,
};

ListView.displayName = 'ListView';

export default ListView;
