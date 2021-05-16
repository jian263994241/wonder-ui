import { useForkRef, useTouchFeedback } from '@wonder-ui/hooks';
import { getDevice } from '@wonder-ui/utils';
import * as React from 'react';
import Grow from '../Grow';
import Popper, { PopperProps } from '../Popper';
import { alpha } from '../styles/colorManipulator';
import styled from '../styles/styled';
import { ClassNameMap, RestProps } from '../styles/types';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';

function round(value: number) {
  return Math.round(value * 1e5) / 1e5;
}

export interface TooltipProps {
  arrow?: boolean;
  className?: string;
  classes?: ClassNameMap<'root' | 'tooltip' | 'arrow'>;
  style?: React.CSSProperties;
  children: React.ReactElement & React.RefAttributes<React.ReactElement>;
  placement?: PopperProps['placement'];
  ref?: React.Ref<any>;
  title?: React.ReactNode;
  visible?: boolean;
}

type StyleProps = {
  styleProps: Partial<TooltipProps>;
};

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
})<StyleProps>(({ theme, styleProps }) => ({
  backgroundColor: alpha(theme.palette.colors.grey[700], 0.92),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  lineHeight: `${round(16 / 12)}em`,
  padding: '4px 8px',
  fontSize: theme.typography.pxToRem(12),
  maxWidth: 300,
  margin: 2,
  wordWrap: 'break-word',

  ...(styleProps.arrow && {
    position: 'relative',
    margin: 0,
    [`&[data-popper-placement*="left"]`]: {
      transformOrigin: 'right center',
      marginRight: '8px'
    },
    [`&[data-popper-placement*="right"]`]: {
      transformOrigin: 'left center',
      marginLeft: '8px'
    },
    [`&[data-popper-placement*="top"]`]: {
      transformOrigin: 'center bottom',
      marginBottom: '8px'
    },
    [`&[data-popper-placement*="bottom"]`]: {
      transformOrigin: 'center top',
      marginTop: '8px'
    }
  })
}));

const TooltipArrow = styled('div', {
  name: 'WuiTooltip',
  slot: 'Arrow'
})<StyleProps>(({ theme }) => ({
  /* Styles applied to the arrow element. */
  overflow: 'hidden',
  position: 'absolute',
  width: '1em',
  height: '0.71em' /* = width / sqrt(2) = (length of the hypotenuse) */,
  boxSizing: 'border-box',
  color: alpha(theme.palette.colors.grey[700], 0.9),
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
}));

const Tooltip: React.FC<TooltipProps & RestProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiTooltip' });
    const {
      arrow = false,
      children,
      placement = 'top',
      title,
      theme,
      visible: visibleProp,
      onOpen,
      onClose,
      ...rest
    } = props;

    const { current: device } = React.useRef(getDevice());

    const referenceElementRef = React.useRef<HTMLDivElement>(null);
    const handleReferenceElementRef = useForkRef(
      referenceElementRef,
      children.ref
    );

    const { current: referenceElement } = referenceElementRef;

    const [visible, handleEvents] = useTouchFeedback({
      ...children.props,
      type: device.desktop ? 'hover' : 'touch'
    });

    const styleProps = { arrow, placement };
    const classes = useClasses({ ...props, styleProps, name: 'WuiTooltip' });

    return (
      <React.Fragment>
        {children &&
          React.cloneElement(children, {
            ref: handleReferenceElementRef,
            ...handleEvents
          })}

        <TooltipRoot
          anchorEl={referenceElement}
          className={classes.root}
          placement={placement}
          ref={ref}
          role="tooltip"
          theme={theme}
          transition
          visible={visible}
          {...rest}
        >
          {({ TransitionProps, attributes, styles }) => (
            <Grow
              timeout={theme.transitions.duration.shorter}
              {...TransitionProps}
            >
              <TooltipTooltip
                styleProps={styleProps}
                className={classes.tooltip}
                theme={theme}
                {...attributes.popper}
              >
                {title}
                {arrow ? (
                  <TooltipArrow
                    data-popper-arrow
                    className={classes.arrow}
                    styleProps={styleProps}
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
  }
);

export default Tooltip;
