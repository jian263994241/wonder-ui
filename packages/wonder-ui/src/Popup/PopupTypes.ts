import type { PageProps } from '../Page';
import type { PopupClassesType } from './PopupClasses';
import type { SlideProps } from '../Slide/Slide';
import React from 'react';

export interface PopupProps
  extends Omit<PageProps, 'classes'>,
    Pick<SlideProps, 'onExited'> {
  classes?: Partial<PopupClassesType>;
  /**
   * 自动高度
   */
  autoHeight?: boolean;
  /**
   * 关闭时触发事件
   */
  onClose?: () => void;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 是否显示
   * @default false
   */
  visible?: boolean;
  /**
   * 是否默认显示
   */
  defaultVisible?: boolean;
  /**
   * 保持节点
   */
  keepMounted?: boolean;
  /**
   * 点击蒙层自身触发
   */
  onBackdropClick?: (event: React.MouseEvent) => void;
  /**
   * Root Element
   * ref被占用,原 `ref -> htmlRef`
   */
  htmlRef?: React.ForwardedRef<HTMLDivElement>;
}

export interface PopupAction {
  show: () => void;
  hide: () => void;
}

export interface PopupStyleProps extends PopupProps {}
