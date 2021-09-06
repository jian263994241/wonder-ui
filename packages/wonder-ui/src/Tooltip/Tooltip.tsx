import * as React from 'react';
import Grow from '../Grow';
import Popper, { PopperProps } from '../Popper';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { emphasize } from '../styles/colorManipulator';
import { tooltipClasses, useClasses } from './TooltipClasses';
import { useForkRef, useTouchFeedback } from '@wonder-ui/hooks';

function round(value: number) {
  return Math.round(value * 1e5) / 1e5;
}

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /**
   * 显示箭头
   * @default false
   */
  arrow?: boolean;
  classes?: Partial<typeof tooltipClasses>;
  /**
   * 锚节点
   */
  children: JSX.Element;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 出现位置
   * @default top
   */
  placement?:
    | 'top'
    | 'bottom'
    | 'right'
    | 'left'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 触发类型
   * @default focus
   */
  triggerType?: 'touch' | 'hover' | 'focus';
}

const TooltipRoot = styled(Popper, {
  name: 'WuiTooltip',
  slot: 'Root'
})<PopperProps>(({ theme }) => ({
  zIndex: theme.zIndex.tooltip,
  userSelect: 'none'
}));

const TooltipTooltip = styled('div', {
  name: 'WuiTooltip',
  slot: 'Tooltip'
})(({ theme }) => {
  const emphasis = theme.palette.mode === 'light' ? 0.75 : 0.98;
  const backgroundColor = emphasize(theme.palette.background.default, emphasis);

  return {
    backgroundColor: backgroundColor,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.getContrastText(backgroundColor),
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: `${round(16 / 12)}em`,
    padding: theme.spacing(1),
    fontSize: theme.typography.pxToRem(12),
    maxWidth: 300,
    margin: 2,
    wordWrap: 'break-word',

    [`&.${tooltipClasses.withArrow}`]: {
      position: 'relative',
      margin: 0,

      [`& > .${tooltipClasses.arrow}`]: {
        color: backgroundColor
      },

      [`&[data-popper-placement*="left"]`]: {
        transformOrigin: 'right center',
        marginRight: theme.spacing(1)
      },
      [`&[data-popper-placement*="right"]`]: {
        transformOrigin: 'left center',
        marginLeft: theme.spacing(1)
      },
      [`&[data-popper-placement*="top"]`]: {
        transformOrigin: 'center bottom',
        marginBottom: theme.spacing(1)
      },
      [`&[data-popper-placement*="bottom"]`]: {
        transformOrigin: 'center top',
        marginTop: theme.spacing(1)
      }
    }
  };
});

const TooltipArrow = styled('div', {
  name: 'WuiTooltip',
  slot: 'Arrow'
})({
  /* Styles applied to the arrow element. */
  overflow: 'hidden',
  position: 'absolute',
  width: '1em',
  height: '0.71em' /* = width / sqrt(2) = (length of the hypotenuse) */,
  boxSizing: 'border-box',

  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'currentColor',
    transform: 'rotate(45deg)'
  },
  [`&[data-popper-placement*="bottom"]`]: {
    top: 0,
    left: 0,
    marginTop: '-0.71em',
    '&::before': {
      transformOrigin: '0 100%'
    }
  },
  '&[data-popper-placement*="top"]': {
    bottom: 0,
    left: 0,
    marginBottom: '-0.71em',
    '&::before': {
      transformOrigin: '100% 0'
    }
  },
  [`&[data-popper-placement*="right"]`]: {
    left: 0,
    marginLeft: '-0.71em',
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '100% 100%'
    }
  },
  [`&[data-popper-placement*="left"]`]: {
    right: 0,
    marginRight: '-0.71em',
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '0 0'
    }
  }
});

const Tooltip = React.forwardRef<HTMLElement, TooltipProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiTooltip' });
  const {
    arrow = false,
    className,
    children,
    disabled,
    placement = 'top',
    title,
    theme,
    triggerType = 'focus',
    ...rest
  } = props;

  const { active, targetRef } = useTouchFeedback({
    disabled,
    type: triggerType
  });
  const referenceElementRef = React.useRef<HTMLDivElement>(null);
  //@ts-expect-error
  const foreignRef = useForkRef(ref, children.ref);
  const handleRef = useForkRef(referenceElementRef, targetRef, foreignRef);

  const { current: referenceElement } = referenceElementRef;

  const styleProps = { ...props, arrow, placement };
  const classes = useClasses(styleProps);

  return (
    <React.Fragment>
      {children && React.cloneElement(children, { ref: handleRef })}

      <TooltipRoot
        anchorEl={referenceElement}
        className={css(classes.root, className)}
        placement={placement}
        ref={ref}
        role="tooltip"
        theme={theme}
        transition
        visible={active}
        {...rest}
      >
        {({ TransitionProps, attributes, styles }) => (
          <Grow
            timeout={theme.transitions.duration.shorter}
            {...TransitionProps}
          >
            <TooltipTooltip
              className={classes.tooltip}
              theme={theme}
              {...attributes.popper}
            >
              {title}
              {arrow ? (
                <TooltipArrow
                  data-popper-arrow
                  className={classes.arrow}
                  style={styles.arrow}
                  theme={theme}
                  {...attributes.popper}
                />
              ) : null}
            </TooltipTooltip>
          </Grow>
        )}
      </TooltipRoot>
    </React.Fragment>
  );
});

export default Tooltip;
