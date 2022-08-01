import DefaultIcon from './DefaultIcon';
import Fade from '../Fade';
import IconButton from '../IconButton';
import React from 'react';
import Space from '../Space';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import XIcon from '../icons/X';
import { alpha } from '../styles/colorManipulator';
import { buttonCssVars } from '../Button';
import {
  capitalize,
  composeClasses,
  css,
  doubleRaf,
  getRect,
  raf
} from '@wonder-ui/utils';
import {
  COMPONENT_NAME,
  noticebarCssVars,
  useNoticebarCssVars
} from './NoticebarClasses';
import { iconButtonCssVars } from '../IconButton';
import { svgIconCssVars } from '../SvgIcon/SvgIconClasses';
import { swipeClasses } from '../Swipe/SwipeClasses';
import { swipeItemClasses } from '../SwipeItem/SwipeItemClasses';
import { typographyCssVars } from '../Typography/TypographyClasses';
import { useEventCallback, useReactive, useWindowSize } from '@wonder-ui/hooks';
import type { NoticebarProps } from './NoticebarTypes';

const useClasses = (styleProps: NoticebarProps) => {
  const { classes, type, wrap, closeable } = styleProps;
  const slots = {
    root: [
      'root',
      closeable && 'closeable',
      type && `type${capitalize(type)}`,
      wrap && 'wrap'
    ],
    icon: ['icon'],
    textWrap: ['textWrap'],
    text: ['text'],
    close: ['close'],
    extra: ['extra']
  };
  return composeClasses(COMPONENT_NAME, slots, classes);
};

const NoticebarRoot = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{
  styleProps: NoticebarProps;
}>(({ styleProps }) => {
  return {
    margin: 0,
    boxSizing: 'border-box',
    width: '100%',
    height: noticebarCssVars.value('height'),
    padding: `${noticebarCssVars.value(
      'paddignVertical'
    )} ${noticebarCssVars.value('paddingHorizontal')}`,
    color: noticebarCssVars.value('textColor'),
    backgroundColor: noticebarCssVars.value('bgColor'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `1px solid ${noticebarCssVars.value('borderColor')}`,
    borderLeft: 'none',
    borderRight: 'none',

    ...(styleProps.wrap && {
      height: 'auto'
    }),

    ...typographyCssVars.style({
      lineHeight: '1.5'
    }),

    ...svgIconCssVars.style({
      size: 18
    }),

    [`& .${swipeClasses.root}`]: {
      width: '100%',
      height: '100%'
    },
    [`& .${swipeItemClasses.root}`]: {
      display: 'flex',
      alignItems: 'center'
    }
  };
});

const NoticebarIcon = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})(({ theme }) => ({
  marginRight: theme.spacing(1),
  flexShrink: 0,
  alignSelf: 'self-start',

  '& > svg': {
    verticalAlign: 'middle'
  }
}));

const NoticebarTextWrap = styled('div', {
  name: COMPONENT_NAME,
  slot: 'TextWrap'
})({
  position: 'relative',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  overflow: 'hidden'
});

const NoticebarText = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Text'
})<{
  styleProps: NoticebarProps;
}>(({ styleProps }) => ({
  transitionTimingFunction: 'linear',

  ...(styleProps.wrap
    ? {
        position: 'relative'
      }
    : {
        position: 'absolute',
        whiteSpace: 'nowrap',
        maxWidth: 'auto'
      })
}));

const NoticebarExtra = styled(Space, {
  name: COMPONENT_NAME,
  slot: 'Extra'
})({
  ...iconButtonCssVars.style({
    edge: noticebarCssVars.value('paddingHorizontal'),
    color: noticebarCssVars.value('textColor')
  }),

  ...buttonCssVars.style({
    edge: noticebarCssVars.value('paddingHorizontal'),
    color: noticebarCssVars.value('textColor'),
    minWidth: 'auto'
  })
});

const Noticebar = React.forwardRef<HTMLDivElement, NoticebarProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      className,
      children,
      type = 'warning',
      wrap = false,
      onClose,
      onClick,
      onReplay,
      style,
      icon = <DefaultIcon />,
      text,
      closeable = false,
      speed = 60,
      delay = 1,
      extra,
      theme,
      ...rest
    } = props;

    const state = useReactive({
      show: true,
      offset: 0,
      duration: 0
    });

    const styleProps = { ...props, type, wrap };
    const classes = useClasses(styleProps);

    useNoticebarCssVars();

    const { width: windowWidth } = useWindowSize();

    const wrapRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    const wrapWidth = React.useRef(0);
    const contentWidth = React.useRef(0);
    const startTimer = React.useRef<NodeJS.Timeout>();

    const reset = useEventCallback(() => {
      const ms = typeof delay === 'number' ? +delay * 1000 : 0;

      wrapWidth.current = 0;
      contentWidth.current = 0;
      state.offset = 0;
      state.duration = 0;

      clearTimeout(startTimer.current!);
      startTimer.current = setTimeout(() => {
        if (!wrapRef.current || !contentRef.current || wrap) {
          return;
        }

        const wrapRefWidth = getRect(wrapRef.current).width;
        const contentRefWidth = getRect(contentRef.current).width;

        if (contentRefWidth > wrapRefWidth) {
          doubleRaf(() => {
            wrapWidth.current = wrapRefWidth;
            contentWidth.current = contentRefWidth;
            state.offset = -contentWidth.current;
            state.duration = contentWidth.current / +speed;
          });
        }
      }, ms);
    });

    const onTransitionEnd = () => {
      state.offset = wrapWidth.current;
      state.duration = 0;

      // wait to render offset
      // using nextTick won't work in iOS14
      raf(() => {
        // use double raf to ensure animation can start
        doubleRaf(() => {
          state.offset = -contentWidth.current;
          state.duration = (contentWidth.current + wrapWidth.current) / +speed;

          onReplay?.();
        });
      });
    };

    React.useEffect(() => {
      reset();
    }, [text, windowWidth]);

    const handleClose = useEventCallback((e) => {
      state.show = false;
      onClose?.(e);
    });

    const trackStyle = {
      transform: state.offset ? `translateX(${state.offset}px)` : '',
      transitionDuration: `${state.duration}s`
    };

    return (
      <Fade
        in={state.show}
        component={NoticebarRoot}
        componentProps={{
          variant: 'body2',
          styleProps,
          ref,
          role: 'alert',
          ...rest
        }}
        className={css(classes.root, className)}
        style={{
          ...(type === 'info' &&
            noticebarCssVars.style({
              textColor: theme.palette.primary.main,
              bgColor: alpha(theme.palette.primary.main, 0.15),
              borderColor: alpha(theme.palette.primary.main, 0.1)
            })),
          ...(type === 'error' &&
            noticebarCssVars.style({
              textColor: theme.palette.error.main,
              bgColor: alpha(theme.palette.error.main, 0.15),
              borderColor: alpha(theme.palette.error.main, 0.1)
            })),
          ...style
        }}
      >
        {icon && <NoticebarIcon className={classes.icon}>{icon}</NoticebarIcon>}

        <NoticebarTextWrap
          ref={wrapRef}
          role="marquee"
          className={classes.textWrap}
        >
          {children || (
            <NoticebarText
              ref={contentRef}
              className={classes.text}
              style={trackStyle}
              styleProps={styleProps}
              onTransitionEnd={onTransitionEnd}
              onClick={onClick}
            >
              {text}
            </NoticebarText>
          )}
        </NoticebarTextWrap>

        {(extra || closeable) && (
          <NoticebarExtra className={classes.extra} itemWrap={false}>
            {extra}
            {closeable && (
              <IconButton
                className={classes.close}
                edge="end"
                onClick={handleClose}
              >
                <XIcon />
              </IconButton>
            )}
          </NoticebarExtra>
        )}
      </Fade>
    );
  }
);

export default Noticebar;
