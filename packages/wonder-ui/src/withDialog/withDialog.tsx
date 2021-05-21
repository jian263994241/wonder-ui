import * as React from 'react';
import Dialog, { DialogProps } from '../Dialog';
import Manager from './Manager';
import Snackbar, { SnackbarProps } from '../Snackbar';
import { createChainedFunction, hoistStatics } from '@wonder-ui/utils';
import { useSafeState } from '@wonder-ui/hooks';

const StackContext = React.createContext({
  manager: new Manager()
});

interface Dialogs {
  custom: (props: DialogProps) => void;
  alert: (props: {
    title?: React.ReactNode;
    text?: React.ReactNode;
    content?: React.ReactNode;
    onOk?: () => void;
    okText?: string;
  }) => void;
  confirm: (props: {
    title?: React.ReactNode;
    text?: React.ReactNode;
    content?: React.ReactNode;
    onOk?: () => void;
    okText?: string;
    onCancel?: () => void;
    cancelText?: string;
  }) => void;
  toast: (
    message: React.ReactNode,
    options?: {
      stack?: boolean;
      onClose?: () => void;
      autoHideDuration?: number;
      anchorOrigin?: {
        vertical?: 'top' | 'center' | 'bottom';
        horizontal?: 'left' | 'center' | 'right';
      };
    }
  ) => void;
}

export default function withDialog<P>(
  Component: React.ComponentType<
    P & {
      dialog: Dialogs;
    }
  >
) {
  const returnComponent = React.forwardRef<React.ComponentType<P>, P>(
    (props, ref) => {
      const { manager } = React.useContext(StackContext);
      const [dialogProps, setDialogProps] = useSafeState<DialogProps>({});
      const [toastProps, setToastProps] = useSafeState<SnackbarProps>({});

      const makeDialog = (props: DialogProps = {}) => {
        const { buttons = [], ModalProps = {}, ...rest } = props;

        manager.run((clearQueue) => {
          const customProps = {
            ...rest,
            buttons: buttons.map((button) => {
              return {
                ...button,
                onClick: createChainedFunction(button.onClick, () => {
                  setDialogProps((prev) => ({ ...prev, visible: false }));
                })
              };
            }),
            ModalProps: {
              ...ModalProps,
              onTransitionExited: createChainedFunction(() => {
                clearQueue();
              }, ModalProps.onTransitionExited)
            },
            key: new Date().getTime()
          };
          setDialogProps({ ...customProps, visible: true });
        });
      };

      const dialog: Dialogs = {
        custom: makeDialog,
        alert: (props = {}) => {
          const { okText = '确定', onOk, ...rest } = props;

          makeDialog({
            ...rest,
            buttons: [{ text: okText, primary: true, onClick: onOk }]
          });
        },
        confirm: (props = {}) => {
          const {
            okText = '确定',
            onOk,
            cancelText = '取消',
            onCancel,
            ...rest
          } = props;

          makeDialog({
            ...rest,
            buttons: [
              { children: cancelText, onClick: onCancel },
              { children: okText, primary: true, onClick: onOk }
            ]
          });
        },
        toast: (message, options = {}) => {
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
            key: new Date().getTime()
          };

          if (stack) {
            manager.run((clearQueue) => {
              setToastProps({
                ...customProps,
                visible: true,
                onClose: () => {
                  setToastProps((prev) => ({ ...prev, visible: false }));
                  clearQueue();
                  onClose && onClose();
                }
              });
            });
          } else {
            setToastProps({
              ...customProps,
              visible: true,
              onClose: () => {
                setToastProps((prev) => ({ ...prev, visible: false }));
                onClose && onClose();
              }
            });
          }
        }
      };

      return (
        <React.Fragment>
          <Component {...props} dialog={dialog} ref={ref} />
          <Dialog visible={false} {...dialogProps} />
          <Snackbar visible={false} {...toastProps} />
        </React.Fragment>
      );
    }
  );

  hoistStatics(Component, returnComponent);

  return returnComponent;
}
