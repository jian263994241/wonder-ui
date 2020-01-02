import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List, areEqual } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import PullToRefresh from '../PullToRefresh';

const ListViewRow = React.memo(function ListViewRow(props){
  const { data: passProps, index,  ...rest} = props;
  const { renderRow, dataSource } = passProps;
  return React.createElement(renderRow, { data: dataSource[index], index, ...rest})
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
    data = [],
    isItemLoaded = index => true ,
    itemSize = 44,
    loadMoreItems,
    renderRow,
    useIsScrolling = false,
    initialScrollOffset = 0,
    itemKey,
    layout = 'vertical',
    PullToRefresh = false,
    PullToRefreshProps = {}
  } = props;

  const itemCount = data.length;
  const passProps = { dataSource: data, renderRow };

  const renderInfiniteList = ({width, height})=> (
    <InfiniteLoader
      ref={ref}
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {
        ({onItemsRendered, ref})=>{
          return (
            <List
              ref={ref}
              useIsScrolling={useIsScrolling}
              height={height}
              itemCount={itemCount}
              itemSize={itemSize}
              width={width}
              initialScrollOffset={initialScrollOffset}
              onItemsRendered={onItemsRendered}
              itemData={passProps}
              itemKey={itemKey}
              layout={layout}
            >
              {ListViewRow}
            </List>
          )
        }
      }
    </InfiniteLoader>
  );
  if(PullToRefresh){
    return (
      <AutoSizer>
        {
          ({width, height})=>(
            <PullToRefresh style={{height, width}} {...PullToRefreshProps}>
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
  data: PropTypes.array,
  isItemLoaded: PropTypes.func,
  itemKey: PropTypes.func,
  itemSize: PropTypes.number,
  loadMoreItems: PropTypes.func,
  renderRow: PropTypes.func,
  useIsScrolling: PropTypes.bool,
  PullToRefresh: PropTypes.bool,
  PullToRefreshProps: PropTypes.object,
};

ListView.displayName = 'ListView';

export default ListView;
