import * as React from 'react';
import Dialog, { DialogProps } from '../Dialog';
import Manager from './Manager';
import Snackbar, { SnackbarProps } from '../Snackbar';
import {
  createChainedFunction,
  createId,
  hoistStatics,
  nextTick
} from '@wonder-ui/utils';
import { useConst, useReactive, useSafeState } from '@wonder-ui/hooks';

type AlertProps = {
  title?: React.ReactNode;
  text?: React.ReactNode;
  content?: React.ReactNode;
  onOk?: () => void;
  okText?: string;
};

type ConfirmProps = {
  title?: React.ReactNode;
  text?: React.ReactNode;
  content?: React.ReactNode;
  onOk?: () => void;
  okText?: string;
  onCancel?: () => void;
  cancelText?: string;
};

type ToastOption = {
  stack?: boolean;
  onClose?: () => void;
  autoHideDuration?: number;
  anchorOrigin?: {
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
  };
};

interface Dialogs {
  custom: (props: DialogProps) => void;
  alert: (props: AlertProps) => void;
  confirm: (props: ConfirmProps) => void;
  toast: (message: string, options?: ToastOption) => void;
}

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

const SnackbarWrap = (props: SnackbarProps) => {
  const { onClose, ...rest } = props;
  const [visible, setVisible] = useSafeState(true);

  return (
    <Snackbar
      visible={visible}
      {...rest}
      onClose={(e, r) => {
        setVisible(false);
        onClose?.(e, r);
      }}
    />
  );
};

export default function withDialog<P>(
  Component: React.ComponentType<
    P & {
      dialog: Dialogs;
    }
  >
) {
  const ComponentMemo = React.memo(Component) as React.ComponentType<any>;

  const returnComponent = React.forwardRef<React.ComponentType<P>, P>(
    (props, ref) => {
      const manager = useConst(() => new Manager());

      const dialogs = useReactive<JSX.Element[]>([]);

      const destroy = (item: JSX.Element) => {
        const index = dialogs.indexOf(item);
        dialogs.splice(index, 1);
      };

      React.useEffect(
        () => () => {
          manager.reset();
          dialogs.splice(0, dialogs.length);
        },
        []
      );

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

          dialogs.push(rendered);
        });
      };

      const alert = (props: AlertProps) => {
        const { okText = '确定', onOk, ...rest } = props;

        custom({
          buttons: [{ text: okText, primary: true, onClick: onOk }],
          ...rest
        });
      };

      const confirm = (props: ConfirmProps) => {
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

      const toast = (message: string, options: ToastOption = {}) => {
        const {
          autoHideDuration = 2000,
          stack = true,
          onClose,
          anchorOrigin = {
            vertical: 'center',
            horizontal: 'center'
          }
        } = options;

        const customProps = {
          message,
          autoHideDuration,
          anchorOrigin,
          key: createId()
        };

        if (stack) {
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

            dialogs.push(rendered);
          });
        } else {
          const rendered = (
            <SnackbarWrap
              {...customProps}
              onClose={() => {
                destroy(rendered);
                onClose?.();
              }}
            />
          );

          dialogs.push(rendered);
        }
      };

      const dialogRef = React.useRef({ custom, alert, confirm, toast });

      return (
        <React.Fragment>
          <ComponentMemo {...props} dialog={dialogRef.current} ref={ref} />
          {dialogs.map((item) => item)}
        </React.Fragment>
      );
    }
  );

  hoistStatics(Component, returnComponent);

  return returnComponent;
}
