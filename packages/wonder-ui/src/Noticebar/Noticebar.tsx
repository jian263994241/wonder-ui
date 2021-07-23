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
import { useEventCallback, useSafeState } from '@wonder-ui/hooks';

const COMPONENT_NAME = 'NoticeBar';

export const noticebarClasses = generateUtilityClasses(COMPONENT_NAME, [
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
  return composeClasses(COMPONENT_NAME, slots, classes);
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

const NoticebarRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })<{
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

const NoticebarIcon = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Icon'
})(({ theme }) => ({
  alignSelf: 'flex-start',
  padding: theme.spacing(1, 1, 0, 2),
  marginTop: 1,
  flexShrink: 0
}));

const NoticebarText = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Text'
})<{
  styleProps: NoticebarProps;
}>(({ styleProps, theme }) => ({
  width: '99%',
  boxSizing: 'border-box',
  padding: theme.spacing(1, 2),
  alignSelf: 'center',
  ...(!!styleProps.icon && {
    paddingLeft: 0
  }),
  ...((!!styleProps.closable || !!styleProps.actions) && {
    paddingRight: 0
  })
}));

const NoticebarActions = styled(Space, {
  name: COMPONENT_NAME,
  slot: 'Actions'
})({
  flexShrink: 0
});

const Noticebar = React.forwardRef<HTMLDivElement, NoticebarProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
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

    const [visible, setVisible] = useSafeState(true);

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
