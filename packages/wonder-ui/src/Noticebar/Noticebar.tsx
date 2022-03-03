import * as React from 'react';
import ArrowForward from '../ArrowForward';
import CloseButton from '../CloseButton';
import Fade from '../Fade';
import IconButton from '../IconButton';
import Space from '../Space';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  capitalize,
  composeClasses,
  css,
  doubleRaf,
  generateUtilityClasses,
  getRect,
  raf
} from '@wonder-ui/utils';
import { darken, lighten } from '../styles/colorManipulator';
import { swipeClasses } from '../Swipe/SwipeClasses';
import { swipeItemClasses } from '../SwipeItem/SwipeItemClasses';
import { useEventCallback, useReactive, useWindowSize } from '@wonder-ui/hooks';

const COMPONENT_NAME = 'Noticebar';

export const noticebarClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'textWrap',
  'text',
  'textAfter',
  'icon',
  'close',
  'closable',
  'link',
  'scrollable',
  'typeInfo',
  'typeWarning',
  'wrap'
]);

const useClasses = (styleProps: NoticebarProps) => {
  const { classes, scrollable, type, wrap, mode } = styleProps;
  const slots = {
    root: [
      'root',
      mode && mode,
      scrollable && 'scrollable',
      type && `type${capitalize(type)}`,
      wrap && 'wrap'
    ],
    icon: ['icon'],
    textWrap: ['textWrap'],
    text: ['text'],
    close: ['close'],
    textAfter: ['textAfter']
  };
  return composeClasses(COMPONENT_NAME, slots, classes);
};

export interface NoticebarProps {
  /**
   * 自定义文字后面的内容
   */
  textAfter?: React.ReactNode;
  /**
   * 类名
   */
  className?: string;

  children?: React.ReactNode;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * Css api
   */
  classes?: Partial<typeof noticebarClasses>;
  /**
   * 通知栏模式, 可选值为: 可关闭的或链接
   */
  mode?: 'closeable' | 'link';
  /**
   * 通知文本内容
   */
  text?: React.ReactNode;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * 动画延迟时间 (s)
   */
  delay?: number;
  /**
   * 滚动速率 (px/s)
   * @default 60
   */
  speed?: number;
  /**
   * 关闭通知栏时触发
   */
  onClose?(event: React.MouseEvent): void;
  /**
   * 点击通知栏时触发
   */
  onClick?(event: React.MouseEvent): void;
  /**
   * 每当滚动栏重新开始滚动时触发
   */
  onReplay?(): void;
  /**
   * 滚动
   * @default true
   */
  scrollable?: boolean;
  /**
   * 类型
   * @default warning
   */
  type?: 'info' | 'warning';
  /**
   * 换行
   */
  wrap?: boolean;
}

const NoticebarRoot = styled(Fade, { name: COMPONENT_NAME, slot: 'Root' })<{
  styleProps: NoticebarProps;
}>(({ theme, styleProps }) => {
  const color = theme.palette[styleProps.type || 'warning'].main;
  const backgroundColor = lighten(color, 0.9);
  const textColor = darken(color, 0.2);

  return {
    ...theme.typography.body2,
    margin: 0,
    boxSizing: 'border-box',
    width: '100%',
    height: 40,
    padding: theme.spacing(0, 2),
    color: textColor,
    backgroundColor,
    display: 'flex',
    alignItems: 'center',

    ...(styleProps.wrap && {
      height: 'auto',
      padding: theme.spacing(1, 2)
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

const NoticebarIcon = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})(({ theme }) => ({
  marginRight: theme.spacing(1),
  flexShrink: 0,
  display: 'flex',
  fontSize: theme.typography.pxToRem(16)
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

const NoticebarText = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Text'
})<{
  styleProps: NoticebarProps;
}>(({ styleProps }) => ({
  transitionTimingFunction: 'linear',

  ...(!styleProps.scrollable &&
    !styleProps.wrap && {
      maxWidth: '100%'
    }),
  ...(styleProps.wrap
    ? {
        position: 'relative',
        whiteSpace: 'normal',
        wordWrap: 'break-word'
      }
    : {
        position: 'absolute',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      })
}));

const NoticebarTextAfter = styled(Space, {
  name: COMPONENT_NAME,
  slot: 'TextAfter'
})(({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  fontSize: theme.typography.pxToRem(16),
  marginRight: -theme.spacing(2)
}));

const Noticebar = React.forwardRef<HTMLDivElement, NoticebarProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      className,
      children,
      type = 'warning',
      wrap = false,
      scrollable = !wrap,
      onClose,
      onClick,
      onReplay,
      style,
      icon,
      text,
      mode,
      speed = 60,
      delay = 1,
      textAfter,
      ...rest
    } = props;

    const state = useReactive({
      show: true,
      offset: 0,
      duration: 0
    });

    const styleProps = { ...props, type, scrollable, wrap };
    const classes = useClasses(styleProps);
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
        if (!wrapRef.current || !contentRef.current || scrollable === false) {
          return;
        }

        const wrapRefWidth = getRect(wrapRef.current).width;
        const contentRefWidth = getRect(contentRef.current).width;

        if (scrollable || contentRefWidth > wrapRefWidth) {
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
    }, [text, scrollable, windowWidth]);

    const handleClose = useEventCallback((e) => {
      state.show = false;
      onClose?.(e);
    });

    const trackStyle = {
      transform: state.offset ? `translateX(${state.offset}px)` : '',
      transitionDuration: `${state.duration}s`
    };

    return (
      <NoticebarRoot
        role="alert"
        in={state.show}
        className={css(classes.root, className)}
        style={style}
        styleProps={styleProps}
        ref={ref}
        {...rest}
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
            >
              {text}
            </NoticebarText>
          )}
        </NoticebarTextWrap>

        {(textAfter || mode) && (
          <NoticebarTextAfter className={classes.textAfter} itemWrap={false}>
            {textAfter}
            {mode === 'closeable' && (
              <CloseButton
                className={classes.close}
                color="inherit"
                onClick={handleClose}
              />
            )}
            {mode === 'link' && (
              <IconButton
                className={classes.close}
                color="inherit"
                onClick={onClick}
              >
                <ArrowForward fontSize="small" />
              </IconButton>
            )}
          </NoticebarTextAfter>
        )}
      </NoticebarRoot>
    );
  }
);

export default Noticebar;
