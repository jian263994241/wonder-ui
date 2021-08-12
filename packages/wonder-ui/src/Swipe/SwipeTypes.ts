export type SwipeClasses = Record<
  'root' | 'vertical' | 'container' | 'item' | 'indicators' | 'indicator',
  string
>;

export type SwipeState = {
  rect: { width: number; height: number } | null;
  width: number;
  height: number;
  offset: number;
  active: number;
  swiping: boolean;
};

export type SwipeToOptions = {
  immediate?: boolean;
};

export type SwipeAction = {
  prev: () => void;
  next: () => void;
  resize: () => void;
  swipeTo: (index: number, options?: SwipeToOptions) => void;
};

export interface SwipeProps {
  /**
   * 内置方法
   */
  actionRef?: React.Ref<SwipeAction | null>;

  classes?: Partial<SwipeClasses>;

  className?: string;
  /**
   * 内容
   */
  children?: React.ReactNode;

  style?: React.CSSProperties;

  containerStyle?: React.CSSProperties;
  /**
   * 禁用逐步加载图像或渲染组件
   * @default false
   */
  disableLazyLoading?: boolean;
  /**
   * 是否可以通过手势滑动
   * @default true
   */
  touchable?: boolean;
  /**
   * 初始位置索引值
   * @default 0
   */
  initialSlide?: number;

  slideStyle?: React.CSSProperties;
  /**
   * 是否显示指示器
   * @default true
   */
  showIndicators?: boolean;
  /**
   * 是否阻止滑动事件冒泡
   * @default true
   */
  stopPropagation?: boolean;
  /**
   * 自动滚动
   */
  autoplay?: boolean;
  /**
   * 自动时间间隔(ms)
   * @default 3000
   */
  interval?: number;
  /**
   * 是否为纵向滚动
   * @default false
   */
  vertical?: boolean;
  /**
   * 动画时长，单位为 ms
   * @default 500
   */
  duration?: number;
  /**
   * 滑块宽度，单位为px
   */
  width?: number;
  /**
   * 滑块高度，单位为px
   */
  height?: number;
  /**
   * 是否开启循环播放
   * @default true
   */
  loop?: boolean;
  /**
   * 自定义指示器
   */
  onRenderIndicator?(activeIndex: number): React.ReactNode;
  /**
   * 每一页轮播结束后触发
   */
  onChange?(index: number): void;
}

export type SwipeItemAction = {
  setOffset: (offset: number) => void;
};

export interface SwipeItemProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  size?: number;
  vertical?: boolean;
  loop?: boolean;
  disableLazyLoading?: boolean;
  activeIndex: number;
  count?: number;
  actionRef?: React.Ref<SwipeItemAction>;
}