import * as React from 'react';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import type { BaseProps, PickStyleProps, ClassNameMap } from '../styles/types';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import Modal, { ModalProps } from '../Modal';
import Typography, { TypographyProps } from '../Typography';
import { alpha } from '../styles/colorManipulator';
import { createChainedFunction } from '@wonder-ui/utils';
import { duration } from '../styles/transitions';
import Grow from '../Grow';
import { TransitionTimeout, BaseTransitionProps } from '../Transition';
import { useControlled } from '@wonder-ui/hooks';
import clsx from 'clsx';

export interface DialogButtonProps extends ButtonBaseProps {
  primary?: boolean;
  text?: React.ReactNode;
}

export interface DialogProps extends BaseProps {
  /**
   * Target element
   */
  children?: React.ReactElement;
  /**
   * Css api
   */
  classes?: ClassNameMap<
    'root' | 'body' | 'title' | 'text' | 'buttonGroup' | 'button'
  >;
  /**
   * Visible
   */
  visible?: boolean;
  /**
   * Title
   */
  title?: React.ReactNode;
  /**
   * Title props
   */
  titleTypographyProps?: TypographyProps;
  /**
   * Text
   */
  text?: React.ReactNode;
  /**
   * Text props
   */
  textTypographyProps?: TypographyProps;
  /**
   * After text node
   */
  content?: React.ReactNode;
  /**
   * Buttons
   */
  buttons?: DialogButtonProps[];
  /**
   * Buttons vertical
   */
  buttonsVertical?: boolean;
  /**
   * 动画过渡组件
   */
  TranstionComponent?: React.ComponentType<BaseTransitionProps>;
  /**
   * 动画过渡组件属性
   */
  TranstionComponentProps?: BaseTransitionProps;
  /**
   * Transtion timeout
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

const DialogContentRoot = styled('div', {
  name: 'WuiDialog',
  slot: 'ContentRoot'
})(({ theme }) => ({
  boxSizing: 'border-box',
  outline: 0,
  position: 'relative',
  borderRadius: 13,
  boxShadow: theme.shadows[4],
  backgroundColor: alpha(theme.palette.background.paper, 0.95),
  width: 295,
  display: 'block',
  textAlign: 'left',
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
  slot: 'button'
})<
  DialogButtonProps &
    PickStyleProps<DialogProps, 'buttonsVertical', { primary: boolean }>
>(({ theme, styleProps }) => ({
  width: '100%',
  height: 44,
  color: theme.palette.primary.main,
  fontWeight: styleProps.primary ? 600 : 400,
  fontSize: theme.typography.pxToRem(16),
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
  '&.active-state': {
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  '&:focus': {
    // boxShadow: theme.shadows[2]
  },
  '&:last-child': {
    borderWidth: 0
  }
}));

const Dialog: React.FC<DialogProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDialog' });

  const {
    buttons = [],
    children: childrenProp,
    className,
    theme,
    ModalProps = {},
    visible: visibleProp = false,
    title,
    titleTypographyProps,
    text,
    textTypographyProps,
    content,
    style,
    buttonsVertical = false,
    TranstionComponent = Grow,
    TranstionComponentProps,
    transitionDuration = defaultTransitionDuration,
    ...rest
  } = props;

  const children = childrenProp || ModalProps.children;

  if (children) {
    React.Children.only(children);
  }

  const [visible, setVisible] = useControlled({
    value: !!children ? undefined : visibleProp,
    defaultValue: false
  });

  const toogleVisibleIfUncontroled = () => setVisible(!visible);

  const styleProps = { buttonsVertical };

  const classes = useClasses({ ...props, styleProps, name: 'WuiDialog' });

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
        BackdropProps={{ transitionDuration, ...ModalProps.BackdropProps }}
        {...ModalProps}
      >
        <TranstionComponent
          appear
          in={visible}
          timeout={transitionDuration}
          role="presentation"
          {...TranstionComponentProps}
        >
          <DialogContentRoot className={classes.root} theme={theme} {...rest}>
            <DialogContentBody theme={theme} className={classes.body}>
              {title && (
                <Typography
                  variant="subtitle1"
                  align="center"
                  noWrap
                  gutterBottom={!!text || !!content}
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

              {content}
            </DialogContentBody>

            {buttons.length > 0 && (
              <DialogButtonGroup
                styleProps={styleProps}
                theme={theme}
                className={classes.buttonGroup}
              >
                {buttons.map((props, index) => {
                  const {
                    className,
                    children,
                    onClick,
                    text,
                    primary = false,
                    ...rest
                  } = props;

                  return (
                    <DialogButton
                      key={index}
                      theme={theme}
                      className={clsx({ primary }, classes.button, className)}
                      styleProps={{ ...styleProps, primary }}
                      onClick={createChainedFunction(
                        onClick,
                        toogleVisibleIfUncontroled
                      )}
                      {...rest}
                    >
                      {text || children}
                    </DialogButton>
                  );
                })}
              </DialogButtonGroup>
            )}
          </DialogContentRoot>
        </TranstionComponent>
      </DialogRoot>
    </React.Fragment>
  );
});

export default Dialog;
