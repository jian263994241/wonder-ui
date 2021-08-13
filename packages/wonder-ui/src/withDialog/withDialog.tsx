import * as React from 'react';
import { DialogManager } from '@wonder-ui/utils';
import { DialogProps } from '../Dialog';
import { hoistStatics } from '@wonder-ui/utils';
import { useConst } from '@wonder-ui/hooks';
import { useDialog } from '../Dialog/useDialog';
import { useSnackbar } from '../Snackbar/useSnackbar';

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
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
};

interface Dialogs {
  custom: (props: DialogProps) => void;
  alert: (props: AlertProps) => void;
  confirm: (props: ConfirmProps) => void;
  toast: (message: string, options?: ToastOption) => void;
}

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
      const manager = useConst(() => new DialogManager());

      const dialog = useDialog({ manager });
      const toast = useSnackbar({ manager });

      const dialogRef = React.useRef({ ...dialog, toast });

      return <ComponentMemo {...props} dialog={dialogRef.current} ref={ref} />;
    }
  );

  hoistStatics(Component, returnComponent);

  return returnComponent;
}
