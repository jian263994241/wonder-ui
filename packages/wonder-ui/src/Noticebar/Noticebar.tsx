import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  css,
  generateUtilityClasses,
  composeClasses,
  capitalize
} from '@wonder-ui/utils';
import { alpha, darken, lighten } from '../styles/colorManipulator';
import CloseButton from '../CloseButton';
import Typography from '../Typography';
import Space from '../Space';
import Fade from '../Fade';
import { useEventCallback } from '@wonder-ui/hooks';

const componentName = 'NoticeBar';

export const noticebarClasses = generateUtilityClasses(componentName, [
  'root',
  'text',
  'icon',
  'actions',
  'close',
  'closable',
  'scrollable',
  'typeSuccess',
  'typeInfo',
  'typeWarning',
  'typeError',
  'wrap'
]);

const useClasses = (styleProps: NoticebarProps) => {
  const { classes, closable, scrollable, type, wrap } = styleProps;
  const slots = {
    root: [
      'root',
      closable && 'closable',
      scrollable && 'scrollable',
      type && `type${capitalize(type)}`,
      wrap && 'wrap'
    ],
    icon: ['icon'],
    text: ['text'],
    close: ['close'],
    acionts: ['actions']
  };
  return composeClasses(componentName, slots, classes);
};

export interface NoticebarProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: React.ReactNode;
  classes?: Partial<typeof noticebarClasses>;
  closable?: boolean;
  icon?: React.ReactNode;
  onClose?(): void;
  scrollable?: boolean;
  type?: 'success' | 'info' | 'warning' | 'error';
  wrap?: boolean;
}

const NoticebarRoot = styled('div', { name: componentName, slot: 'Root' })<{
  styleProps: NoticebarProps;
}>(({ theme, styleProps }) => {
  const color = theme.palette[styleProps.type || 'warning'].main;
  const backgroundColor = alpha(color, 0.3);
  const textColor =
    theme.palette.mode === 'light' ? darken(color, 0.48) : lighten(color, 0.48);

  return {
    width: '100%',
    color: textColor,
    backgroundColor,
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'flex-start'
  };
});

const NoticebarIcon = styled(Typography, { name: componentName, slot: 'Icon' })(
  {
    alignSelf: 'flex-start',
    padding: '9px 10px 0 16px',
    flexShrink: 0
  }
);

const NoticebarText = styled(Typography, {
  name: componentName,
  slot: 'Text'
})<{
  styleProps: NoticebarProps;
}>(({ styleProps }) => ({
  width: '99%',
  boxSizing: 'border-box',
  padding: '8px 16px',
  alignSelf: 'center',
  ...(!!styleProps.icon && {
    paddingLeft: 0
  }),
  ...((!!styleProps.closable || !!styleProps.actions) && {
    paddingRight: 0
  })
}));

const NoticebarActions = styled(Space, {
  name: componentName,
  slot: 'Actions'
})({
  flexShrink: 0
});

const Noticebar = React.forwardRef<HTMLDivElement, NoticebarProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: componentName });
    const {
      actions,
      closable = false,
      className,
      children,
      type = 'info',
      wrap = false,
      scrollable = false,
      onClose,
      icon,
      ...rest
    } = props;

    const [visible, setVisible] = React.useState(true);

    const styleProps = { ...props, closable, type, scrollable, wrap };
    const classes = useClasses(styleProps);

    const handleClose = useEventCallback(() => {
      setVisible(false);
      onClose?.();
    });

    return (
      <Fade in={visible} unmountOnExit>
        <NoticebarRoot
          styleProps={styleProps}
          className={css(classes.root, className)}
          ref={ref}
          {...rest}
        >
          {icon && <NoticebarIcon> {icon}</NoticebarIcon>}

          <NoticebarText
            className={classes.text}
            styleProps={styleProps}
            component={scrollable ? ('marquee' as any) : 'span'}
            noWrap={!wrap}
          >
            {children}
          </NoticebarText>
          {(actions || closable) && (
            <NoticebarActions className={classes.acionts} itemWrap={false}>
              {actions}
              {closable && (
                <CloseButton
                  className={classes.close}
                  fontSize="small"
                  onClick={handleClose}
                />
              )}
            </NoticebarActions>
          )}
        </NoticebarRoot>
      </Fade>
    );
  }
);

export default Noticebar;
