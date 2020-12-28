import * as React from 'react';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  form?: any;
  children?: any;
  onFinish?: (values: any) => void;
  onFinishFailed?: (values: any) => void;
  onValuesChange?: (values: any) => void;
}

declare function Form(props: FormProps): JSX.Element;

declare namespace Form {
  export function craeteForm(): any;
  export function useForm(): any;
}

export default Form;
