import * as React from 'react';
import ActivityIndicator from '../ActivityIndicator';
import Modal, { ModalProps } from '../Modal';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { createChainedFunction, isPromise } from '@wonder-ui/utils';
import { emphasize, alpha } from '../styles/colorManipulator';
import { PreloaderProps } from './PreloaderTypes';
import { useControlled } from '@wonder-ui/hooks';

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
    borderRadius: theme.shape.borderRadius[3],
    backgroundColor: alpha(backgroundColor, 0.92),
    padding: 12,
    outline: 'none',
    textAlign: 'center'
  };
});

export type PreloaderActions = {
  show: (props?: PreloaderProps) => void;
  hide: () => void;
};

const Preloader = React.forwardRef<HTMLDivElement, PreloaderProps>(
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

export default Preloader;
