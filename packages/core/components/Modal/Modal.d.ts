export interface ModalProps {
  /**
   * 关闭后回调
   */
  afterClose?: () => void;
  /**
   * 是否需要`backdrop`
   */
  hideBackdrop?: boolean;
  /**
   * Backdrop props
   */
  BackdropProps?: object;
  /**
   * 内容
   */
  children: React.ReactNode;
  /**
   * 挂载的节点
   */
  container?:
    | Element
    | React.ComponentType<any>
    | (() => Element | React.ComponentType<any>);

  /**
   * @ignore
   */
  manager?: any;
  /**
   * 是否过渡
   */
  hasTransition?: boolean;
  /**
   * 过渡后关闭
   */
  closeAfterTransition?: boolean;
  /**
   * 保持节点
   */
  keepMounted?: boolean;
  /**
   * 点击背景关闭浮层
   */
  onCancel?: () => void;
  /**
   * 渲染后回调
   */
  onRendered?: () => void;
  /**
   * 是否显示
   */
  visible: boolean;
}

export default function (props: ModalProps): JSX.Element;
