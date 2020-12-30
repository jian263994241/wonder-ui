import * as React from 'react';
import {
  List,
  WindowScroller,
  InfiniteLoader,
  AutoSizer
} from 'react-virtualized';
import { createStyles, withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';

const styles = createStyles({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    boxSizing: 'border-box',
    willChange: 'scroll-position',
    touchAction: 'pan-x pan-y',
    position: 'relative'
  }
});

export interface VirtualizedListDataItem {
  height?: number;
  [k: string]: any;
}

export interface VirtualizedListProps {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;

  //	Used to estimate the total height of a List before all of its rows have actually been measured. The estimated total height is adjusted as rows are rendered.
  estimatedRowSize?: number;

  loadMoreRows?: () => void;

  data: VirtualizedListDataItem[];

  //total
  rowCount?: number;

  rowHeight: number;

  renderHeader?: () => React.ReactNode;

  renderFooter?: () => React.ReactNode;

  noRowsRenderer?: () => React.ReactNode;

  rowRenderer: (props: {
    key: any;
    index: number;
    isScrolling?: boolean;
    isVisible: boolean;
    style: object;
    rowData: VirtualizedListDataItem;
  }) => React.ReactNode;
}

function VirtualizedList(props: VirtualizedListProps) {
  const {
    estimatedRowSize = 44,
    rowCount = 0,
    data = [],
    rowHeight,
    loadMoreRows,
    renderHeader,
    renderFooter,
    noRowsRenderer,
    rowRenderer: rowRendererInput,
    classes
  } = props;

  const scrollContentRef = React.useRef<HTMLDivElement>(null);

  const hasNextPage = () => rowCount > 0 && data.length != rowCount;

  const isRowLoaded = (row: { index: number }) => {
    return !hasNextPage() || row.index < data.length;
  };

  const getRowHeight = (row: { index: number }) => {
    return data[row.index].height || rowHeight;
  };

  const rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style
  }: any) => {
    if (!data[index]) return null;

    if (rowRendererInput) {
      return rowRendererInput({
        key,
        index,
        isScrolling,
        isVisible,
        style,
        rowData: data[index]
      });
    }
  };

  return (
    <div className={classes?.root} ref={scrollContentRef}>
      <InfiniteLoader
        threshold={10}
        rowCount={rowCount}
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
      >
        {({ onRowsRendered, registerChild }) => (
          <WindowScroller scrollElement={scrollContentRef.current}>
            {({ height, isScrolling, scrollTop }) => (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <div style={{ width }}>
                    {renderHeader && renderHeader()}
                    <List
                      ref={registerChild}
                      height={height}
                      width={width}
                      style={{ outline: 'none' }}
                      isScrolling={isScrolling}
                      estimatedRowSize={estimatedRowSize}
                      rowHeight={getRowHeight}
                      rowCount={rowCount}
                      rowRenderer={rowRenderer}
                      scrollTop={
                        scrollTop - (rowHeight || estimatedRowSize) - 10
                      }
                      onRowsRendered={onRowsRendered}
                      noRowsRenderer={noRowsRenderer}
                    ></List>
                    {data.length > 0 && isRowLoaded({ index: data.length }) && (
                      <div
                        style={{
                          padding: 10,
                          textAlign: 'center',
                          color: '#bbb',
                          fontSize: 12
                        }}
                      >
                        没有更多数据
                      </div>
                    )}
                    {renderFooter && renderFooter()}
                  </div>
                )}
              </AutoSizer>
            )}
          </WindowScroller>
        )}
      </InfiniteLoader>
    </div>
  );
}

export default withStyles(styles)(VirtualizedList);
