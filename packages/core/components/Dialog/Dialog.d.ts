import * as React from 'react';

type fnType = () => void;

export interface DialogProps {
  visible?: boolean;
  toast?: boolean;
  title?: React.ReactNode;
  text?: React.ReactNode;
  content?:
    | React.ReactNode
    | ((data: { ref: React.Ref<any> }) => React.ReactNode);
  actions?: {
    text: string;
    primary?: boolean;
    onClick?: fnType;
  }[];
}

declare function Dialog(props: DialogProps): JSX.Element;

declare namespace Dialog {
  export function toast(m: string, time?: number): void;
  export function alert(data: {
    title?: string;
    text?: string;
    onOk?: fnType;
    okText?: fnType;
  }): void;
  export function confirm(data: {
    title?: string;
    text?: string;
    onOk?: fnType;
    okText?: string;
    onCancel?: fnType;
    cancelText?: string;
  }): void;

  export function custom(data: {
    title?: string;
    text?: string;
    content?:
      | React.ReactNode
      | ((data: { ref: React.Ref<any> }) => React.ReactNode);
    actions?: {
      text: string;
      primary?: boolean;
      onClick?: (e: any, data: { ref: React.Ref<any> }) => void;
    };
  }): void;
}

export default Dialog;
