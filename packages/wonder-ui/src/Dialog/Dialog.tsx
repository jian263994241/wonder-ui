import * as React from 'react';
import DialogContent from '../DialogContent';
import Grow from '../Grow';
import Modal, { ModalProps } from '../Modal';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { createChainedFunction, css } from '@wonder-ui/utils';
import { DialogProps } from './DialogTypes';
import { duration } from '../styles/transitions';
import { useClasses } from './DialogClasses';
import { useControlled } from '@wonder-ui/hooks';

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

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDialog' });

  const {
    contentClasses,
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
            classes={contentClasses}
            className={classes.content}
            buttonsVertical={buttonsVertical}
            style={{ marginLeft: 10, marginRight: 10 }}
            buttons={buttons.map((props) => ({
              ...props,
              onClick: createChainedFunction(
                toogleVisibleIfUncontroled,
                props.onClick
              )
            }))}
          ></DialogContent>
        </TranstionComponent>
      </DialogRoot>
    </React.Fragment>
  );
});

export default Dialog;
