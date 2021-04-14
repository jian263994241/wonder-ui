import * as React from 'react';
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
  children?: React.ReactElement;
  disablePortal?: boolean;
  middleLength?: number;
  onLoad?: () => Promise<any>;
  text?: string;
  visible?: boolean;
  defaultVisible?: boolean;
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
})<PickStyleProps<PreloaderProps, 'middleLength'>>(({ styleProps }) => ({
  boxSizing: 'border-box',
  position: 'fixed',
  top: `calc(50% + ${styleProps.middleLength}px)`,
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  contain: 'content',
  willChange: 'transform, opacity',
  color: '#fff',
  display: 'block',
  borderRadius: 5,
  backgroundColor: 'rgba(0,0,0,0.7)',
  padding: 16,
  outline: 'none',
  textAlign: 'center'
}));

const Preloader: React.FC<PreloaderProps> = React.forwardRef((inProps, ref) => {
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

export default Preloader;
