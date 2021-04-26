import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import Manager from './Manager';
import Dialog, { DialogProps } from '../Dialog';
import { createChainedFunction } from '@wonder-ui/utils';

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
      const [dialogProps, setDialogProps] = React.useState<DialogProps>({});

      const makeDialog = (props: DialogProps = {}) => {
        const { buttons = [], ModalProps = {}, ...rest } = props;

        manager.run((clearQueue) => {
          const customProps = {
            ...rest,
            buttons: buttons.map((button) => {
              return {
                ...button,
                onClick: createChainedFunction(button.onClick, () => {
                  setDialogProps({ ...customProps, visible: false });
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
        }
      };

      return (
        <React.Fragment>
          <Component {...props} dialog={dialog} ref={ref} />
          <Dialog visible={false} {...dialogProps} />
        </React.Fragment>
      );
    }
  );

  hoistNonReactStatics(returnComponent, Component);

  return returnComponent;
}
