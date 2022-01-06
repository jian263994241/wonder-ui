import { createSnackbarAction } from '../Snackbar/expose';
import { showDialog, hideDialog } from '../Dialog/expose';
import { DialogManager, createChainedFunction } from '@wonder-ui/utils';
import { SnackbarProps } from '../Snackbar/SnackbarTypes';

const { showSnackbar, hideSnackbar } = createSnackbarAction({
  autoHideDuration: 1500,
  maskClickable: true
});

type SetupOption = {
  toastOption?: SnackbarProps;
};

class Message {
  private _toastOption: SnackbarProps;

  private _manager = new DialogManager();

  constructor() {
    this._toastOption = {
      anchorOrigin: { vertical: 'center', horizontal: 'center' }
    };
  }

  setup(options: SetupOption = {}) {
    Object.assign(this._toastOption, options.toastOption);
  }

  alert(props: {
    title?: React.ReactNode;
    text?: React.ReactNode;
    content?: React.ReactNode;
    onOk?: () => void;
    okText?: string;
  }) {
    this._manager.run((next) => {
      showDialog({
        title: props.title,
        text: props.text,
        content: props.content,
        buttons: [
          {
            text: props.okText || '确定',
            primary: true,
            onClick: createChainedFunction(props.onOk, hideDialog)
          }
        ],
        ModalProps: {
          onTransitionExited: () => {
            next();
          }
        }
      });
    });
  }

  confirm(props: {
    title?: React.ReactNode;
    text?: React.ReactNode;
    content?: React.ReactNode;
    onOk?: () => void;
    okText?: string;
    onCancel?: () => void;
    cancelText?: string;
    danger?: boolean;
  }) {
    this._manager.run((next) => {
      showDialog({
        title: props.title,
        text: props.text,
        content: props.content,
        buttons: [
          {
            text: props.cancelText || '取消',
            onClick: createChainedFunction(props.onOk, hideDialog)
          },
          {
            text: props.okText || '确定',
            primary: true,
            danger: props.danger,
            onClick: createChainedFunction(props.onOk, hideDialog)
          }
        ],
        ModalProps: {
          onTransitionExited: () => {
            next();
          }
        }
      });
    });
  }

  toast(text: string, options: SnackbarProps = {}) {
    this._manager.run((next) => {
      showSnackbar({
        ...this._toastOption,
        ...options,
        message: text,
        onClose: (...args) => {
          options.onClose?.(...args);
          next();
        }
      });
    });
  }

  hideToast() {
    hideSnackbar();
  }
}

const message = new Message();

export default message;
