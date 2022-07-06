import * as React from 'react';
import DialogContent from '../DialogContent';
import Grow from '../Grow/Grow';
import Modal from '../Modal';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { createChainedFunction, css } from '@wonder-ui/utils';
import { DialogProps } from './DialogTypes';
import { useClasses } from './DialogClasses';
import { useControlled } from '@wonder-ui/hooks';

const DialogRoot = styled(Modal, {
  name: 'WuiDialog',
  slot: 'Root'
})(({ theme }) => ({
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
        {...ModalProps}
        hasTransition
        visible={visible}
        theme={theme}
        className={css(classes.root, className)}
        ref={ref}
        // BackdropProps={{ duration: transitionDuration, ...ModalProps.BackdropProps }}
      >
        <Grow
          style={{ marginLeft: 10, marginRight: 10 }}
          component={DialogContent}
          componentProps={{
            buttonsVertical,
            buttons: buttons.map((props) => ({
              ...props,
              onClick: createChainedFunction(
                toogleVisibleIfUncontroled,
                props.onClick
              )
            })),
            classes: contentClasses,
            ...rest
          }}
        />
      </DialogRoot>
    </React.Fragment>
  );
});

export default Dialog;
