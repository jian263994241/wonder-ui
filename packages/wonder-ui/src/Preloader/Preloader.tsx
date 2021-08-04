import * as React from 'react';
import Modal, { ModalProps } from '../Modal';
import ReactDOM from 'react-dom';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { createChainedFunction, isPromise } from '@wonder-ui/utils';
import { emphasize } from '../styles/colorManipulator';
import { useControlled } from '@wonder-ui/hooks';
import ActivityIndicator from '../ActivityIndicator';

export interface PreloaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * ModalProps
   * @default false
   */
  ModalProps?: Partial<ModalProps>;
  /**
   *  触发节点
   */
  children?: JSX.Element;
  /**
   * 自定义指示器图标
   */
  indicator?: React.ReactNode;
  /**
   * 异步回调
   */
  onLoad?: () => Promise<any>;
  /**
   * 文字
   */
  text?: string;
  /**
   * 指示器类型
   * @default circular
   */
  type?: 'spinner' | 'circular';
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 垂直排列
   */
  vertical?: boolean;
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
      ModalProps = {},
      children,
      indicator,
      theme,
      visible: visibleProp,
      text,
      onLoad,
      type,
      vertical = true,
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
          theme={theme}
          ref={ref}
          visible={visible}
          disableScrollLock
          disableFocusLock
          BackdropProps={{ invisible: true }}
          {...ModalProps}
          {...rest}
        >
          <PreloaderInner styleProps={styleProps}>
            {indicator ? (
              indicator
            ) : (
              <ActivityIndicator
                vertical={vertical}
                type={type}
                iconSize="large"
                color={theme.palette.mode}
                text={text}
              />
            )}
          </PreloaderInner>
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
