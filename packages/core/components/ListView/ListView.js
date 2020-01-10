import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List, areEqual } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import PullToRefresh from '../PullToRefresh';
import ActivityIndicator from '../ActivityIndicator';
import Flex from '../Flex';

const ListViewRow = React.memo(function ListViewRow(props){
  const { data: passProps, index, style, isScrolling} = props;
  const { renderItem, dataSource, isItemLoaded, renderActivityIndicator } = passProps;
  if(!isItemLoaded(index)){
    return (
      <div key={index} style={style}>
        { renderActivityIndicator ? renderActivityIndicator() : (
          <Flex 
            style={{height: '100%', width: '100%' }}
            alignContent="center"
            justify="center"
          >
            <ActivityIndicator text="加载中..."/>
          </Flex>
        )}
      </div>
    )
  }

  return React.createElement(renderItem, { data: dataSource[index], index, style, isScrolling });
  
}, areEqual);
ListViewRow.displayName = 'ListViewRow';
ListViewRow.propTypes =  {
  data: PropTypes.shape({
    renderRow: PropTypes.func,
    dataSource: PropTypes.array
  })
};

/**
 * 
 * @visibleName ListView 长列表
 */
const ListView = React.forwardRef(function ListView(props, ref) {
  const {
    renderActivityIndicator,
    data = [],
    hasNextPage,
    initialScrollOffset = 0,
    itemKey,
    itemSize,
    layout = 'vertical',
    loadMoreItems: loadMoreItemsInput,
    minimumBatchSize = 10,
    onRefresh,
    PullToRefresh: allowPullToRefresh = false,
    PullToRefreshProps = {},
    refreshing: refreshingInput = false,
    renderItem,
    threshold = 0,
    useIsScrolling = false,
  } = props;

  const itemCount = hasNextPage ? data.length + 1 : data.length;
  const refreshing = PullToRefreshProps.refreshing || refreshingInput;

  const isItemLoaded = index => !hasNextPage || index < data.length;

  const loadMoreItems = (startIndex, stopIndex)=>{
    if(!refreshing && loadMoreItemsInput){
      return loadMoreItemsInput(startIndex, stopIndex);
    }
  };

  const passProps = { 
    dataSource: data, 
    renderItem, 
    isItemLoaded, 
    renderActivityIndicator 
  };

  const [scrollDirection, setscrollDirection] = React.useState();

  const handleScroll = (scrollDirection)=>{
    setscrollDirection(scrollDirection);
  }

  const renderInfiniteList = ({width, height})=> (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      minimumBatchSize={minimumBatchSize}
      ref={ref}
      threshold={threshold}
    >
      {
        ({onItemsRendered, ref})=>{
          return (
            <List
              height={height}
              initialScrollOffset={initialScrollOffset}
              itemCount={itemCount}
              itemData={passProps}
              itemKey={itemKey}
              itemSize={itemSize}
              layout={layout}
              onItemsRendered={onItemsRendered} 
              onScroll={handleScroll}
              ref={ref}
              useIsScrolling={useIsScrolling}
              width={width}
            >
              {ListViewRow}
            </List>
          )
        }
      }
    </InfiniteLoader>
  );

  if(allowPullToRefresh){
    return (
      <AutoSizer>
        {
          ({width, height})=>(
            <PullToRefresh 
              style={{height, width}} 
              {...PullToRefreshProps}
              onRefresh={onRefresh} 
              refreshing={refreshing}
              data-scroll-direction={scrollDirection}
            > 
              {renderInfiniteList({width, height})}
            </PullToRefresh>
          )
        }
      </AutoSizer>
    );
  }

  return (
    <AutoSizer>
      { ({width, height})=> renderInfiniteList({width, height}) }
    </AutoSizer>
  ); 
  
});

ListView.propTypes = {
  renderActivityIndicator: PropTypes.func,
  data: PropTypes.array,
  itemKey: PropTypes.func,
  itemSize: PropTypes.number.isRequired,
  loadMoreItems: PropTypes.func,
  minimumBatchSize: PropTypes.number,
  hasNextPage: PropTypes.bool,
  /**
   * 刷新callback
   */
  onRefresh: PropTypes.func,
  /**
   * 是否开启下拉刷新
   */
  PullToRefresh: PropTypes.bool,
  /**
   * @ignore
   */
  PullToRefreshProps: PropTypes.object,
  /**
   * 是否正在刷新
   */
  refreshing: PropTypes.bool,
  /**
   * 渲染每个节点
   */
  renderItem: PropTypes.func,
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
