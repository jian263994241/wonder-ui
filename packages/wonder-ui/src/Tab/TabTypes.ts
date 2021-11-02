import { ButtonBaseProps } from '../ButtonBase';
import { TabClasses } from './TabClasses';
import { TabsProps } from '../Tabs/TabsTypes';

export interface TabProps extends ButtonBaseProps {
  /**
   * 徽记
   */
  badge?: boolean | string;
  /**
   * Css api
   */
  classes?: Partial<TabClasses>;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 禁用波纹
   */
  disableRipple?: boolean;
  /**
   * 图标
   */
  icon?: JSX.Element;
  /**
   * 图标位置
   */
  iconPosition?: 'top' | 'bottom' | 'start' | 'end';
  /**
   * 值
   */
  value?: any;
  /**
   * 标签文字
   */
  label?: React.ReactNode;
  /**
   * 渲染Icon
   */
  onRenderIcon?: (isActive: boolean) => JSX.Element;
  /**
   * 换行
   */
  wrapped?: boolean;
}

export interface TabStyleProps extends TabProps {
  isActive: boolean;
  variant: TabsProps['variant'];
  textColor?: string;
}

export interface TabMeta {
  root: HTMLElement | null;
  disabled?: boolean;
}
