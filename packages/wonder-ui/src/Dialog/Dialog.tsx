import * as React from 'react';
import DialogContent, { DialogContentProps } from '../DialogContent';
import Grow from '../Grow';
import Modal, { ModalProps } from '../Modal';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { BaseTransitionProps, TransitionTimeout } from '../Transition';
import { createChainedFunction, css } from '@wonder-ui/utils';
import { dialogClasses, useClasses } from './DialogClasses';
import { duration } from '../styles/transitions';
import { useControlled } from '@wonder-ui/hooks';

export interface DialogProps
  extends Omit<DialogContentProps, 'classes' | 'children'> {
  classes?: Partial<typeof dialogClasses>;
  /**
   * 触发节点
   */
  children?: JSX.Element;
  /**
   * 是否显示, 受控组件
   * @default false
   */
  visible?: boolean;
  /**
   * 动画过渡组件
   */
  TranstionComponent?: React.ComponentType<BaseTransitionProps>;
  /**
   * 动画过渡组件属性
   */
  TranstionComponentProps?: BaseTransitionProps;
  /**
   * 过渡动画时长(ms)
   */
  transitionDuration?: TransitionTimeout;
  /**
   * Modal props
   * @ignore
   */
  ModalProps?: Partial<ModalProps>;
}

const defaultTransitionDuration = duration.area.medium;

const DialogRoot = styled(Modal, {
  name: 'WuiDialog',
  slot: 'Root'
})<ModalProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: theme.zIndex.dialog
}));

const Dialog: React.FC<DialogProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDialog' });

  const {
    buttons = [],
    children,
    className,
    theme,
    ModalProps = {},
    visible: visibleProp = false,
    style,
    buttonsVertical = false,
    TranstionComponent = Grow,
    TranstionComponentProps,
    transitionDuration = defaultTransitionDuration,
    ...rest
  } = props;

  if (children) {
    React.Children.only(children);
  }

  const [visible, setVisible] = useControlled({
    value: !!children ? undefined : visibleProp,
    defaultValue: false
  });

  const toogleVisibleIfUncontroled = () => setVisible(!visible);

  const styleProps = { ...props };

  const classes = useClasses(styleProps);

  return (
    <React.Fragment>
      {children &&
        React.cloneElement(children, {
          onClick: createChainedFunction(
            toogleVisibleIfUncontroled,
            children.props.onClick
          )
        })}
      <DialogRoot
        autoFocus={false}
        visible={visible}
        theme={theme}
        className={css(classes.root, className)}
        BackdropProps={{ transitionDuration, ...ModalProps.BackdropProps }}
        {...ModalProps}
        ref={ref}
      >
        <TranstionComponent
          appear
          in={visible}
          timeout={transitionDuration}
          {...TranstionComponentProps}
        >
          <DialogContent
            {...rest}
            role="presentation"
            classes={{ root: classes.content }}
            buttonsVertical={buttonsVertical}
            style={{ marginLeft: 10, marginRight: 10 }}
            buttons={buttons.map((props) => ({
              ...props,
              onClick: createChainedFunction(
                props.onClick,
                toogleVisibleIfUncontroled
              )
            }))}
          ></DialogContent>
        </TranstionComponent>
      </DialogRoot>
    </React.Fragment>
  );
});

export default Dialog;
