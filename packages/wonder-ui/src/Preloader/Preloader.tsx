import * as React from 'react';
import ReactDOM from 'react-dom';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import { BaseProps, PickStyleProps } from '../styles/types';
import CircularProgress from '../CircularProgress';
import Typography from '../Typography';
import Modal, { ModalProps } from '../Modal';
import WhiteSpace from '../WhiteSpace';
import { useControlled } from '@wonder-ui/hooks';
import { createChainedFunction, isPromise } from '@wonder-ui/utils';
import Fade from '../Fade';
import { emphasize, darken } from '../styles/colorManipulator';

export interface PreloaderProps extends BaseProps {
  /**
   *  Trigger Element
   */
  children?: React.ReactElement;
  /**
   * ModalProps
   * @default false
   */
  ModalProps?: Partial<ModalProps>;
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

const PreloaderRoot = styled(Modal, {
  name: 'WuiPreloader',
  slot: 'Root'
})<ModalProps>(({ theme }) => ({
  zIndex: theme.zIndex.dialog + 5
}));

const PreloaderInner = styled('div', {
  name: 'WuiPreloader',
  slot: 'Inner'
})<PickStyleProps<PreloaderProps, 'middleLength'>>(({ theme, styleProps }) => {
  const emphasis = theme.palette.mode === 'light' ? 0.75 : 0.98;
  const backgroundColor = emphasize(theme.palette.background.default, emphasis);

  return {
    boxSizing: 'border-box',
    position: 'fixed',
    top: `calc(50% + ${styleProps.middleLength}px)`,
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    contain: 'content',
    willChange: 'transform, opacity',
    color: theme.palette.getContrastText(backgroundColor),
    display: 'block',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: backgroundColor,
    padding: 12,
    outline: 'none',
    textAlign: 'center',
    fontSize: 0
  };
});

export type PreloaderActions = {
  show: (props?: PreloaderProps) => void;
  hide: () => void;
};

const Preloader: React.FC<PreloaderProps> &
  Partial<PreloaderActions> = React.forwardRef((inProps, ref) => {
  const {
    children,
    component,
    ModalProps = {},
    theme,
    visible: visibleProp,
    middleLength = 0,
    text,
    onLoad,
    ...rest
  } = useThemeProps({
    props: inProps,
    name: 'WuiPreloader'
  });

  const [visible, setVisibleOnControl] = useControlled({
    defaultValue: false,
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

      <PreloaderRoot
        component={component}
        theme={theme}
        ref={ref}
        visible={visible}
        disableScrollLock
        disableFocusLock
        BackdropProps={{ invisible: true }}
        {...ModalProps}
        {...rest}
      >
        <Fade>
          <PreloaderInner styleProps={styleProps} theme={theme}>
            <CircularProgress size={34} color="light" theme={theme} />
            {text && (
              <React.Fragment>
                <WhiteSpace size="sm" />
                <Typography theme={theme}>{text}</Typography>
              </React.Fragment>
            )}
          </PreloaderInner>
        </Fade>
      </PreloaderRoot>
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
