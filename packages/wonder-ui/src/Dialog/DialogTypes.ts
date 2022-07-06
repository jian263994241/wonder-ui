import React from 'react';
import {
  DialogContentClassesType,
  DialogContentProps
} from '../DialogContent/DialogContentTypes';
import { ModalProps } from '../Modal';

export interface DialogProps
  extends Omit<DialogContentProps, 'classes' | 'children'> {
  ModalProps?: Partial<ModalProps>;
  /**
   * dialog content classes
   */
  contentClasses?: Partial<DialogContentClassesType>;
  /**
   * 触发按钮
   */
  children?: React.ReactElement;
  /**
   * 是否显示
   */
  visible?: boolean;
}
