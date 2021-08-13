import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Snackbar, { SnackbarProps } from './Snackbar';
import useTheme from '../styles/useTheme';
import { createId, DialogManager, nextTick } from '@wonder-ui/utils';
import { ThemeProvider } from '@wonder-ui/styled';
import { useConst, useReactive, useSafeState } from '@wonder-ui/hooks';

const defaultManager = new DialogManager();

export type SnackbarHookOptions = {
  autoHideDuration?: number;
  anchorOrigin?: SnackbarProps['anchorOrigin'];
  manager?: InstanceType<typeof DialogManager>;
  onRender?: (element: JSX.Element) => JSX.Element;
};

export type SnackbarOptions = {
  autoHideDuration?: number;
  anchorOrigin?: SnackbarProps['anchorOrigin'];
  onClose?: () => void;
};

const SnackbarWrap = (props: SnackbarProps) => {
  const { onClose, ...rest } = props;
  const [visible, setVisible] = useSafeState(true);

  return (
    <Snackbar
      visible={visible}
      {...rest}
      onClose={(e, r) => {
        setVisible(false);
        nextTick(() => {
          onClose?.(e, r);
        });
      }}
    />
  );
};

export function useSnackbar(options: SnackbarHookOptions = {}) {
  const {
    anchorOrigin: anchorOriginProp = {
      vertical: 'center',
      horizontal: 'center'
    },
    autoHideDuration: autoHideDurationProp = 2000,
    manager = defaultManager,
    onRender
  } = options;

  const container = useConst(() => document.createElement('div'));
  const modals = useReactive<JSX.Element[]>([]);
  const theme = useTheme();

  const destroy = (item: JSX.Element) => {
    const index = modals.indexOf(item);
    modals.splice(index, 1);
  };

  React.useEffect(
    () => () => {
      manager.reset();
      modals.splice(0, modals.length);
    },
    []
  );

  React.useEffect(() => {
    const rendered = (
      <ThemeProvider theme={theme}>{modals.map((item) => item)}</ThemeProvider>
    );

    ReactDOM.render(onRender ? onRender(rendered) : rendered, container);
  }, [modals.length, theme, onRender]);

  const showSnackbar = (message: string, options: SnackbarOptions = {}) => {
    const {
      anchorOrigin = anchorOriginProp,
      autoHideDuration = autoHideDurationProp,
      onClose
    } = options;

    const customProps = {
      message,
      autoHideDuration,
      anchorOrigin,
      key: createId()
    };

    manager.run((clearQueue) => {
      const rendered = (
        <SnackbarWrap
          {...customProps}
          onClose={() => {
            destroy(rendered);
            clearQueue();
            onClose?.();
          }}
        />
      );

      modals.push(rendered);
    });
  };

  return showSnackbar;
}
