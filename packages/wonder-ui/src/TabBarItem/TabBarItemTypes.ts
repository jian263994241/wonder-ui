import { ButtonBaseProps } from '../ButtonBase';
import { TabBarItemClasses } from './TabBarItemClasses';
import { TabBarProps } from '../TabBar/TabBarTypes';

export interface TabBarItemProps extends ButtonBaseProps {
  /**
   * 徽记
   */
  badge?: boolean | string;
  /**
   * Css api
   */
  classes?: Partial<TabBarItemClasses>;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 图标
   */
  icon?: JSX.Element;
  /**
   * ActiveKey
   */
  itemKey?: string | number;
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

export interface TabBarItemStyleProps extends TabBarItemProps {
  isActive: boolean;
  variant: TabBarProps['variant'];
  textColor?: string;
}
