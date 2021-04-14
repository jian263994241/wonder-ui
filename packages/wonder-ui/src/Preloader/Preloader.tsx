import * as React from 'react';
import ReactDOM from 'react-dom';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import { BaseProps, PickStyleProps } from '../styles/types';
import CircularProgress from '../CircularProgress';
import Typography from '../Typography';
import Backdrop from '../Backdrop';
import Portal from '../Portal';
import WhiteSpace from '../WhiteSpace';
import { useControlled } from '@wonder-ui/hooks';
import { createChainedFunction, isPromise } from '@wonder-ui/utils';

export interface PreloaderProps extends BaseProps {
  /**
   *  Trigger Element
   */
  children?: React.ReactElement;
  /**
   * default visible
   */
  defaultVisible?: boolean;
  /**
   * Disable portal
   * @default false
   */
  disablePortal?: boolean;
  /**
   * Vertical middle fix top length
   * @default 0
   */
  middleLength?: number;
  /**
   * Async callback
   */
  onLoad?: () => Promise<any>;
  /**
   * Show text
   */
  text?: string;
  /**
   * visible
   */
  visible?: boolean;
}

const PreloaderRoot = styled('div', {
  name: 'WuiPreloader',
  slot: 'Root'
})(({ theme }) => ({
  zIndex: theme.zIndex.dialog + 5,
  position: 'fixed'
}));

const PreloaderInner = styled('div', {
  name: 'WuiPreloader',
  slot: 'Inner'
})<PickStyleProps<PreloaderProps, 'middleLength'>>(({ theme, styleProps }) => ({
  boxSizing: 'border-box',
  position: 'fixed',
  top: `calc(50% + ${styleProps.middleLength}px)`,
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  contain: 'content',
  willChange: 'transform, opacity',
  color: '#fff',
  display: 'block',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(0,0,0,0.7)',
  padding: 16,
  outline: 'none',
  textAlign: 'center',
  fontSize: 0
}));

export type PreloaderActions = {
  show: (props?: PreloaderProps) => void;
  hide: () => void;
};

const Preloader: React.FC<PreloaderProps> &
  Partial<PreloaderActions> = React.forwardRef((inProps, ref) => {
  const {
    children,
    component,
    disablePortal = false,
    theme,
    visible: visibleProp,
    defaultVisible = false,
    middleLength = 0,
    text,
    onLoad,
    ...rest
  } = useThemeProps({
    props: inProps,
    name: 'WuiPreloader'
  });

  const [visible, setVisibleOnControl] = useControlled({
    defaultValue: defaultVisible,
    value: visibleProp
  });

  const styleProps = { middleLength };

  const handleClick = () => {
    if (onLoad) {
      setVisibleOnControl(true);

      const called = onLoad();

      if (isPromise(called)) {
        called
          .then(() => {
            setVisibleOnControl(false);
          })
          .catch(() => {
            setVisibleOnControl(false);
          });
      }
    }
  };

  return (
    <React.Fragment>
      {children &&
        React.cloneElement(children, {
          ...children.props,
          onClick: createChainedFunction(handleClick, children.props.onClick)
        })}
      {visible && (
        <Portal disablePortal={disablePortal}>
          <PreloaderRoot as={component} theme={theme} ref={ref} {...rest}>
            <Backdrop visible invisible theme={theme} />
            <PreloaderInner styleProps={styleProps} theme={theme}>
              <CircularProgress size={34} color="light" theme={theme} />
              {text && (
                <React.Fragment>
                  <WhiteSpace size="sm" />
                  <Typography theme={theme}>{text}</Typography>
                </React.Fragment>
              )}
            </PreloaderInner>
          </PreloaderRoot>
        </Portal>
      )}
    </React.Fragment>
  );
});

const container = document.createElement('div');

let count = 0;
Preloader.show = (props: PreloaderProps = {}) => {
  ++count;
  if (count <= 1) {
    ReactDOM.render(<Preloader visible {...props} />, container);
  }
};

Preloader.hide = () => {
  if (count > 0) {
    --count;
  }
  if (count <= 0) {
    ReactDOM.render(<Preloader visible={false} />, container);
  }
};

export default Preloader as React.FC<PreloaderProps> & PreloaderActions;
