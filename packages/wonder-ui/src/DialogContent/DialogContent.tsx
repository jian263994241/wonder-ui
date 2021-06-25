import * as React from 'react';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import Divider from '../Divider';
import Paper, { PaperProps } from '../Paper';
import styled from '../styles/styled';
import Typography, { TypographyProps } from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import { dialogContentClasses, useClasses } from './DialogContentClasses';

const DialogContentRoot = styled(Paper, {
  name: 'WuiDialogContent',
  slot: 'Root',
  shouldForwardProp: () => true
})<PaperProps>(({ theme }) => ({
  borderRadius: theme.shape.dialogRadius,
  width: '100%',
  maxWidth: 325,
  userSelect: 'none',
  overflow: 'hidden'
}));

const DialogContentInner = styled('div', {
  name: 'WuiDialogContent',
  slot: 'Inner'
})(({ theme }) => ({
  padding: 15,
  [`& + .${dialogContentClasses.buttons}`]: {
    borderWidth: 0,
    borderTopWidth: 'thin',
    borderStyle: 'solid',
    borderColor: theme.palette.divider
  }
}));

const DialogContentButtons = styled('div', {
  name: 'WuiDialogContent',
  slot: 'Buttons'
})({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  [`&.${dialogContentClasses.buttonsVertical}`]: {
    flexDirection: 'column'
  }
});

export interface DialogButton extends ButtonBaseProps {
  primary?: boolean;
  text?: React.ReactNode;
}

export const DialogButton = styled(ButtonBase, {
  name: 'WuiDialogContent',
  slot: 'button',
  shouldForwardProp: (prop) => prop != 'primary'
})<DialogButton>(({ theme, primary }) => ({
  ...theme.typography.button,
  width: '100%',
  height: 44,
  color: theme.palette.primary.main,
  fontWeight: primary ? 600 : 400,
  fontSize: theme.typography.pxToRem(16),
  textAlign: 'center',
  backgroundColor: 'transparent',
  border: 0,
  // borderStyle: 'solid',
  // borderRightWidth: 'thin',
  // borderColor: theme.palette.divider,
  boxSizing: 'border-box',
  textOverflow: 'ellipsis',
  overflow: 'hidden',

  [`.${dialogContentClasses.buttonsVertical} > &`]: {
    // borderWidth: 0,
    // borderBottomWidth: 'thin',
    // flexShrink: 0
  },
  '&:last-child': {
    // borderWidth: 0
  }
}));

export interface DialogContentProps extends PaperProps {
  buttonsVertical?: boolean;
  buttons?: Array<DialogButton>;
  classes?: Partial<typeof dialogContentClasses>;
  content?: React.ReactNode;
  elevation?: number;
  text?: React.ReactNode;
  textTypographyProps?: TypographyProps;
  title?: React.ReactNode;
  titleTypographyProps?: TypographyProps;
}

const DialogContent = React.forwardRef<HTMLElement, DialogContentProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiDialogContent' });
    const {
      buttonsVertical = false,
      buttons = [],
      className,
      children,
      content,
      elevation = 0,
      text,
      textTypographyProps,
      title,
      titleTypographyProps,
      ...rest
    } = props;

    const styleProps = { buttonsVertical };

    const classes = useClasses(styleProps);

    return (
      <DialogContentRoot
        classes={{ root: classes.root }}
        className={className}
        elevation={elevation}
        ref={ref}
        {...rest}
      >
        {(title || text || content) && (
          <React.Fragment>
            <DialogContentInner className={classes.inner}>
              {title && (
                <Typography
                  variant="subtitle1"
                  align="center"
                  noWrap
                  gutterBottom={!!text || !!content}
                  classes={{ root: classes.title }}
                  {...titleTypographyProps}
                >
                  {title}
                </Typography>
              )}

              {text && (
                <Typography
                  variant="body1"
                  align="center"
                  classes={{ root: classes.text }}
                  gutterBottom
                  {...textTypographyProps}
                >
                  {text}
                </Typography>
              )}
              {content}
            </DialogContentInner>
            {buttons.length > 0 && <Divider />}
          </React.Fragment>
        )}

        {buttons.length > 0 && (
          <DialogContentButtons className={classes.buttons}>
            {buttons.map((buttonProps, index) => {
              const { children, text, ...rest } = buttonProps;

              return (
                <React.Fragment key={index}>
                  {index != 0 && (
                    <Divider
                      flexItem
                      direction={buttonsVertical ? 'horizontal' : 'vertical'}
                    />
                  )}
                  <DialogButton
                    focusRipple
                    classes={{ root: classes.button }}
                    {...rest}
                  >
                    {text || children}
                  </DialogButton>
                </React.Fragment>
              );
            })}
          </DialogContentButtons>
        )}
      </DialogContentRoot>
    );
  }
);

export default DialogContent;
