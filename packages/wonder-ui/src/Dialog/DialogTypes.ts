import { BaseTransitionProps, TransitionTimeout } from '../Transition';
import {
  DialogContentProps,
  DialogContentClassesType
} from '../DialogContent/DialogContentTypes';
import { ModalProps } from '../Modal';

export interface DialogProps
  extends Omit<DialogContentProps, 'classes' | 'children'> {
  ModalProps?: Partial<ModalProps>;
  TranstionComponent?: React.ComponentType<BaseTransitionProps>;
  TranstionComponentProps?: BaseTransitionProps;
  transitionDuration?: TransitionTimeout;
  /**
   * dialog content classes
   */
  contentClasses?: Partial<DialogContentClassesType>;
  /**
   * 触发按钮
   */
  children?: JSX.Element;
  /**
   * 是否显示
   */
  visible?: boolean;
}
