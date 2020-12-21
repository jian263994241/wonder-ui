export interface SwitchProps {
  /**
   * 颜色
   */
  color?: string;
  /**
   * 事件回调
   */
  onChange?: (value: any) => void;
  /**
   * 是否选中
   */
  checked?: boolean;

  classes?: object;
}

export default function Switch(props: SwitchProps): JSX.Element;
