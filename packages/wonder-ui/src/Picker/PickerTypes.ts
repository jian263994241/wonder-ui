import { DrawerProps } from '../Drawer';
import { NavbarProps } from '../Navbar';
import { PickerViewProps, PickerOption } from '../PickerView';

export interface PickerProps extends PickerViewProps {
  DrawerProps?: Partial<DrawerProps>;
  NavbarProps?: Partial<NavbarProps>;

  children?: JSX.Element;
  /**
   * 顶部栏标题
   */
  title?: string;
  /**
   * 取消按钮问题
   */
  cancelText?: string;
  /**
   * 确定按钮文案
   */
  confirmText?: string;
  /**
   * 连接符, 多列展示用
   */
  separator?: string;
  /**
   * 浮层显示
   */
  visible?: boolean;
  /**
   * 默认浮层显示
   */
  defaultVisible?: boolean;
  /**
   * 渲染输入框
   */
  onRenderChildren?(args: {
    options: PickerOption[];
    displayText: string;
    onClick: () => void;
  }): JSX.Element;
  /**
   * 关闭浮层触发事件
   */
  onCancel?(): void;
}
