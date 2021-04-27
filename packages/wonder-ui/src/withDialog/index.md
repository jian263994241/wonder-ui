---
sidemenu: false
---

### withDialog


```jsx | pure

props.dialog.alert({ title, text, onOk, okText });

props.dialog.confirm({ title, text, onOk, okText, onCancel, cancelText });

props.dialog.custom(DialogProps);

{
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
    options: {
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

```
