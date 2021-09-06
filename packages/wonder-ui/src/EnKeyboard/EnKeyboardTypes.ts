export type EnKeyboardClasses = Record<
  | 'root'
  | 'header'
  | 'body'
  | 'keys'
  | 'key'
  | 'close'
  | 'delete'
  | 'enter'
  | 'number'
  | 'space'
  | 'shift',
  string
>;

export type KeyType = '' | 'delete' | 'close' | 'enter';

export type KeyConfig = {
  text?: string;
  type?: KeyType;
};

export interface EnKeyboardProps {
  /**
   * 输入框
   */
  children?: JSX.Element;

  classes?: Partial<EnKeyboardClasses>;

  className?: string;
  /**
   * 关闭按钮文字，空则不展示
   */
  closeButtonText?: string;
  /**
   * 关闭事件
   */
  onClose?(): void;
  /**
   * 删除事件
   */
  onDelete?(): void;
  /**
   * 完成事件
   */
  onEnter?(): void;
  /**
   * 输入事件
   */
  onInput?(key: string | number): void;
  /**
   * 删除按钮文字，空则展示删除图标
   */
  deleteButtonText?: string;
  /**
   * 完成按钮文字
   * @default 完成
   */
  enterButtonText?: string;
  /**
   * 是否显示关闭按钮
   */
  showCloseKey?: boolean;
  /**
   * 空格按钮文字
   */
  spaceButtonText?: string;

  style?: React.CSSProperties;
  /**
   * 键盘标题
   */
  title?: React.ReactNode;
  /**
   * 输入框属性名
   * @default value
   */
  triggerName?: string;
  /**
   * 输入框触发键盘显示的事件名
   * @default onClick
   */
  valuePropName?: string;
}
