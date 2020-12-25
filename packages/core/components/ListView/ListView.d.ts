import * as React from 'react';

export interface ListViewProps {
  /**
   * 自定义加载指示器
   */
  renderIndicator?: () => React.ReactNode;
  /**
   * 自定义脚部
   */
  renderFooter?: () => React.ReactNode;
  /**
   * 渲染每个节点
   */
  renderItem?: (data: any) => React.ReactNode;
  /**
   * 列表数据 []
   */
  data: any[];
  /**
   * 自定义子项的key, 默认index
   */
  itemKey?: (index: string, data: object) => any;
  /**
   * 默认item容器高度, 实际会根据内容计算内容高度
   */
  itemSize?: number;
  /**
   * 加载更多内容
   */
  loadMoreItems?: () => any;
  /**
   * 每次加载的长度
   */
  pageSize?: number;
  /**
   * 是否有更多内容
   */
  hasNextPage?: boolean;
  /**
   * 刷新callback
   */
  onRefresh?: () => void;
  /**
   * 是否开启下拉刷新
   */
  pullToRefresh?: boolean;
  /**
   * @see 查看[PullToRefresh](./#/组件/数据展示/PullToRefresh)组件
   */
  pullToRefreshProps?: object;
  /**
   * 是否正在刷新
   */
  refreshing?: boolean;
  /**
   * 预加载数据, 默认15条
   */
  threshold?: number;
  /**
   * 是否检测滚动状态
   */
  useIsScrolling?: boolean;
}

export default function ListView(props: ListViewProps): JSX.Element;
