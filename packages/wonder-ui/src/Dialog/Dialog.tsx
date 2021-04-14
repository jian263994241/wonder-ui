import * as React from 'react';
import useClasses from '../styles/useClasses';
import styled, { shouldForwardProp } from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import type { BaseProps, PickStyleProps, ClassNameMap } from '../styles/types';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import Modal, { ModalProps } from '../Modal';
import Transition, { TransitionProps } from '../Transition';
import Typography, { TypographyProps } from '../Typography';
import { alpha } from '../styles/colorManipulator';
import { reflow, getTransitionProps } from '../Transition/utils';
import { createChainedFunction, noop } from '@wonder-ui/utils';
import { duration } from '../styles/transitions';
import { useControlled } from '@wonder-ui/hooks';

export interface DialogButtonProps extends ButtonBaseProps {
  primary?: boolean;
}

export interface DialogProps extends BaseProps {
  /**
   * @description Target element
   */
  children?: React.ReactElement;
  /**
   * @description Css api
   */
  classes?: ClassNameMap<
    'root' | 'body' | 'title' | 'text' | 'buttonGroup' | 'button'
  >;
  /**
   * @description Visible
   */
  visible?: boolean;
  /**
   * @description Default visible
   * @default false
   */
  defaultVisible?: boolean;
  /**
   * @description Title
   */
  title?: React.ReactChild;
  /**
   * @description Title props
   */
  titleTypographyProps?: TypographyProps;
  /**
   * @description Text
   */
  text?: React.ReactChild;
  /**
   * @description Text props
   */
  textTypographyProps?: TypographyProps;
  /**
   * @description After text node
   */
  textAfter?: React.ReactChild;
  /**
   * @description Buttons
   */
  buttons?: DialogButtonProps[];
  /**
   * @description Buttons vertical
   */
  buttonsVertical?: boolean;
  /**
   * @description Modal props
   * @ignore
   */
  ModalProps?: ModalProps;
}

const styles = {
  entering: {
    opacity: 1,
    transform: 'translate3d(0,-50%,0) scale(1)'
  },
  entered: {
    opacity: 1,
    transform: 'translate3d(0,-50%,0) scale(1)'
  }
};

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};

const DialogRoot = styled(Modal, {
  name: 'WuiDialog',
  slot: 'Root'
})(({ theme }) => ({
  zIndex: theme.zIndex.dialog
}));

const DialogContentRoot = styled('div', {
  name: 'WuiDialog',
  slot: 'ContentRoot'
})(({ theme }) => ({
  boxSizing: 'border-box',
  outline: 0,
  position: 'relative',
  margin: '0 auto',
  borderRadius: 13,
  boxShadow: theme.shadows[4],
  backgroundColor: alpha(theme.palette.background.paper, 0.95),
  width: 295,
  display: 'block',
  textAlign: 'left',
  top: '50%',
  transform: 'translate3d(0,-50%,0)',
  willChange: 'transform,opacity',
  overflow: 'hidden',
  userSelect: 'none'
}));

const DialogContentBody = styled('div', {
  name: 'WuiDialog',
  slot: 'ContentBody'
})(() => ({
  padding: 15,
  '&:empty': {
    display: 'none'
  }
}));

const DialogButtonGroup = styled('div', {
  name: 'WuiDialog',
  slot: 'buttonGroup'
})<PickStyleProps<DialogProps, 'buttonsVertical'>>(({ theme, styleProps }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: styleProps.buttonsVertical ? 'column' : 'row',
  borderWidth: 0,
  borderTopWidth: 'thin',
  borderStyle: 'solid',
  borderColor: theme.palette.divider
}));

const DialogButton = styled(ButtonBase, {
  name: 'WuiDialog',
  slot: 'button',
  shouldForwardProp: (prop: string) =>
    shouldForwardProp(prop) && prop !== 'primary'
})<DialogButtonProps & PickStyleProps<DialogProps, 'buttonsVertical'>>(
  ({ theme, primary, styleProps }) => ({
    width: '100%',
    height: 44,
    color: theme.palette.primary.main,
    fontWeight: primary ? 600 : 400,
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,

    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    ...(styleProps.buttonsVertical
      ? { borderBottomWidth: 'thin', flexShrink: 0 }
      : { borderRightWidth: 'thin' }),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '&.state-active': {
      backgroundColor: 'rgba(0,0,0,0.1)'
    },
    '&:focus': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    },
    '&:last-child': {
      borderWidth: 0
    }
  })
);

const Dialog: React.FC<DialogProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDialog' });

  const {
    buttons = [],
    children,
    className,
    theme,
    ModalProps,
    visible: visibleProp,
    defaultVisible = false,
    title,
    titleTypographyProps,
    text,
    textTypographyProps,
    textAfter,
    style,
    buttonsVertical = false,
    ...rest
  } = props;

  const [visible, setVisible] = useControlled({
    value: visibleProp,
    defaultValue: defaultVisible
  });

  const toogleVisibleIfUncontroled = () => setVisible(!visible);

  if (children) {
    React.Children.only(children);
  }

  const timeout = defaultTimeout;

  const styleProps = { buttonsVertical };

  const classes = useClasses({ ...props, styleProps, name: 'WuiDialog' });

  const handleEnter: TransitionProps['onEnter'] = (node) => {
    node.style.transform = 'translate3d(0,-50%,0) scale(1.185)';
    node.style.opacity = '0';

    reflow(node); // So the animation always start from the start.

    const transitionProps = getTransitionProps(
      { style, timeout },
      {
        mode: 'enter'
      }
    );

    node.style.transition = theme.transitions.create(
      ['opacity', 'transform'],
      transitionProps
    );
  };

  const handleExit: TransitionProps['onExit'] = (node) => {
    const transitionProps = getTransitionProps(
      { style, timeout },
      {
        mode: 'exit'
      }
    );

    node.style.transition = theme.transitions.create(
      'opacity',
      transitionProps
    );
  };

  return (
    <React.Fragment>
      {children &&
        React.cloneElement(children, {
          onClick: createChainedFunction(
            toogleVisibleIfUncontroled,
            children.props.onClick
          )
        })}
      <DialogRoot visible={visible} theme={theme} {...ModalProps}>
        <Transition
          appear
          in={visible}
          ref={ref}
          onEnter={handleEnter}
          onExit={handleExit}
          timeout={timeout}
        >
          {(state, childProps) => (
            <DialogContentRoot
              {...childProps}
              {...rest}
              className={classes.root}
              theme={theme}
              style={{
                visibility:
                  state === 'exited' && !visible ? 'hidden' : undefined,
                ...(styles[state as keyof typeof styles] || {
                  opacity: 0
                }),
                ...childProps.style
              }}
            >
              <DialogContentBody theme={theme} className={classes.body}>
                {title && (
                  <Typography
                    variant="subtitle1"
                    align="center"
                    noWrap
                    gutterBottom
                    className={classes.title}
                    theme={theme}
                    {...titleTypographyProps}
                  >
                    {title}
                  </Typography>
                )}

                {text && (
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.text}
                    theme={theme}
                    gutterBottom
                    {...textTypographyProps}
                  >
                    {text}
                  </Typography>
                )}

                {textAfter}
              </DialogContentBody>

              {buttons.length > 0 && (
                <DialogButtonGroup
                  styleProps={styleProps}
                  theme={theme}
                  className={classes.buttonGroup}
                >
                  {buttons.map((props, index) => (
                    <DialogButton
                      key={index}
                      theme={theme}
                      className={classes.button}
                      {...props}
                      styleProps={styleProps}
                      onClick={createChainedFunction(
                        props.onClick || noop,
                        toogleVisibleIfUncontroled
                      )}
                    />
                  ))}
                </DialogButtonGroup>
              )}
            </DialogContentRoot>
          )}
        </Transition>
      </DialogRoot>
    </React.Fragment>
  );
});

export default Dialog;
