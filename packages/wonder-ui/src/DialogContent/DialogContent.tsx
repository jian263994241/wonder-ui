import * as React from 'react';
import ButtonBase from '../ButtonBase';
import Divider from '../Divider';
import Paper, { PaperProps } from '../Paper';
import styled from '../styles/styled';
import Typography from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { dialogContentClasses, useClasses } from './DialogContentClasses';
import type {
  DialogButtonProps,
  DialogContentProps
} from './DialogContentTypes';

const DialogContentRoot = styled(Paper, {
  name: 'WuiDialogContent',
  slot: 'Root',
  shouldForwardProp: () => true
})<PaperProps>(({ theme }) => ({
  ...theme.typography.body2,
  borderRadius: theme.shape.dialogRadius,
  width: '100%',
  maxWidth: 300,
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

export const DialogButton = styled(ButtonBase, {
  name: 'WuiDialogContent',
  slot: 'button',
  shouldForwardProp: (prop) => prop != 'primary' && prop != 'danger'
})<DialogButtonProps>(({ theme, primary, danger }) => ({
  ...theme.typography.button,
  width: '100%',
  height: 44,
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(16),
  textAlign: 'center',
  backgroundColor: 'transparent',
  border: 0,
  boxSizing: 'border-box',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: `var(--dialog-button-color, ${theme.palette.text.primary})`,
  ...(primary && {
    fontWeight: 700,
    color: `var(--dialog-button-primary-color, ${theme.palette.primary.main})`
  }),
  ...(danger && {
    fontWeight: 700,
    color: `var(--dialog-button-danger-color, ${theme.palette.danger.main})`
  })
}));

const DialogContent = React.forwardRef<HTMLElement, DialogContentProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiDialogContent' });
    const {
      buttonsVertical = false,
      buttons = [],
      className,
      children,
      disableRipple,
      elevation = 1,
      text,
      textTypographyProps,
      title,
      titleTypographyProps,
      content: contentProp,
      ...rest
    } = props;

    const styleProps = { ...props, buttonsVertical };
    const classes = useClasses(styleProps);
    const content = contentProp || children;

    return (
      <DialogContentRoot
        role="presentation"
        className={css(classes.root, className)}
        elevation={elevation}
        ref={ref}
        {...rest}
      >
        {(title || text || content) && (
          <React.Fragment>
            <DialogContentInner className={classes.inner}>
              {title && (
                <Typography
                  noWrap
                  variant="subtitle1"
                  align="center"
                  gutterBottom={!!text || !!content}
                  className={classes.title}
                  {...titleTypographyProps}
                >
                  {title}
                </Typography>
              )}

              {text && (
                <Typography
                  component="div"
                  variant="body1"
                  align="center"
                  className={classes.text}
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
              const { text, ...rest } = buttonProps;
              return (
                <React.Fragment key={index}>
                  {index != 0 && (
                    <Divider
                      flexItem
                      direction={buttonsVertical ? 'horizontal' : 'vertical'}
                    />
                  )}
                  <DialogButton
                    disableRipple={disableRipple}
                    className={classes.button}
                    {...rest}
                  >
                    {text}
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
