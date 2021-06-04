import * as React from 'react';
import CircularProgress from '../CircularProgress';
import Fade from '../Fade';
import Modal, { ModalProps } from '../Modal';
import ReactDOM from 'react-dom';
import styled from '../styles/styled';
import Typography from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import WhiteSpace from '../WhiteSpace';
import { createChainedFunction, isPromise } from '@wonder-ui/utils';
import { emphasize } from '../styles/colorManipulator';
import { useControlled } from '@wonder-ui/hooks';

export interface PreloaderProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
  /**
   *  Trigger Element
   */
  children?: React.ReactElement;
  /**
   * @ignore
   */
  component?: React.ElementType;
  /**
   * ModalProps
   * @default false
   */
  ModalProps?: Partial<ModalProps>;
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
  /**@ignore */
  ref?: React.Ref<any>;
}

const PreloaderRoot = styled(Modal, {
  name: 'WuiPreloader',
  slot: 'Root',
  shouldForwardProp: () => true
})<ModalProps>(({ theme }) => ({
  zIndex: theme.zIndex.dialog + 5
}));

const PreloaderInner = styled('div', {
  name: 'WuiPreloader',
  slot: 'Inner'
})<any>(({ theme }) => {
  const emphasis = theme.palette.mode === 'light' ? 0.75 : 0.98;
  const backgroundColor = emphasize(theme.palette.background.default, emphasis);

  return {
    boxSizing: 'border-box',
    position: 'fixed',
    top: `calc(50% + var(--modal-middle-offset, 0px))`,
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

const Preloader = React.forwardRef<HTMLElement, PreloaderProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiPreloader' });
    const {
      children,
      component,
      ModalProps = {},
      theme,
      visible: visibleProp,
      text,
      onLoad,
      ...rest
    } = props;

    const [visible, setVisibleOnControl] = useControlled({
      defaultValue: false,
      value: visibleProp
    });

    const styleProps = { ...props };

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
          <Fade in={visible}>
            <PreloaderInner styleProps={styleProps}>
              <CircularProgress size={34} color={theme.palette.mode} />
              {text && (
                <React.Fragment>
                  <WhiteSpace size="small" />
                  <Typography>{text}</Typography>
                </React.Fragment>
              )}
            </PreloaderInner>
          </Fade>
        </PreloaderRoot>
      </React.Fragment>
    );
  }
);

const container = document.createElement('div');

let count = 0;

export const showPreloader = (props: PreloaderProps = {}) => {
  ++count;
  if (count <= 1) {
    ReactDOM.render(<Preloader visible {...props} />, container);
  }
};

export const hidePreloader = () => {
  if (count > 0) {
    --count;
  }
  if (count <= 0) {
    ReactDOM.render(<Preloader visible={false} />, container);
  }
};

export default Preloader;
