import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dialog, { DialogProps } from './Dialog';
import useTheme from '../styles/useTheme';
import {
  createChainedFunction,
  createId,
  DialogManager,
  nextTick
} from '@wonder-ui/utils';
import { ThemeProvider } from '@wonder-ui/styled';
import { useCreation, useReactive, useSafeState } from '@wonder-ui/hooks';

type AlertOptions = {
  title?: React.ReactNode;
  text?: React.ReactNode;
  content?: React.ReactNode;
  onOk?: () => void;
  okText?: string;
};

type ConfirmOptions = {
  title?: React.ReactNode;
  text?: React.ReactNode;
  content?: React.ReactNode;
  onOk?: () => void;
  okText?: string;
  onCancel?: () => void;
  cancelText?: string;
};

type DialogHookOptions = {
  manager?: InstanceType<typeof DialogManager>;
  onRender?: (element: JSX.Element) => JSX.Element;
};

const DialogWrap = (props: DialogProps) => {
  const { buttons = [], ...rest } = props;
  const [visible, setVisible] = useSafeState(true);
  return (
    <Dialog
      {...rest}
      visible={visible}
      buttons={buttons.map((button) => {
        return {
          ...button,
          onClick: createChainedFunction(button.onClick, () => {
            nextTick(() => {
              setVisible(false);
            });
          })
        };
      })}
    />
  );
};

const defaultManager = new DialogManager();

export function useDialog(options: DialogHookOptions = {}) {
  const { manager = defaultManager, onRender } = options;

  const container = useCreation(() => document.createElement('div'), []);
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

  const custom = (props: DialogProps) => {
    const id = createId();

    manager.run((clearQueue) => {
      const rendered = (
        <DialogWrap
          {...props}
          key={id}
          ModalProps={{
            onTransitionExited: () => {
              destroy(rendered);
              clearQueue();
            }
          }}
        />
      );

      modals.push(rendered);
    });
  };

  const alert = (props: AlertOptions) => {
    const { okText = '确定', onOk, ...rest } = props;

    custom({
      buttons: [{ text: okText, primary: true, onClick: onOk }],
      ...rest
    });
  };

  const confirm = (props: ConfirmOptions) => {
    const {
      okText = '确定',
      onOk,
      cancelText = '取消',
      onCancel,
      ...rest
    } = props;

    custom({
      buttons: [
        { children: cancelText, onClick: onCancel },
        { children: okText, primary: true, onClick: onOk }
      ],
      ...rest
    });
  };

  return { custom, alert, confirm };
}
