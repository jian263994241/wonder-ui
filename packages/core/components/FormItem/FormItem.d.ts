import * as React from 'react';

export type validatorRule = {
  type?: string;
  required?: boolean;
  pattern?: RegExp;
  transform?: (value: any) => any;
  message?: string;
  validator?: (rules: validatorRule[], value: any) => Promise<any>;
};

export interface FormItemProps {
  getValueFromEvent?: (values: any) => void;

  hidden?: boolean;

  initialValue?: any;

  normalize?: <T = any>(value: T, prevValue: T, allValues: T) => T;

  name: string;

  preserve?: boolean;

  rules?: validatorRule[];

  trigger?: string;

  validateFirst?: boolean;

  validateTrigger?: string;

  valuePropName?: string;

  children?: any;
}

export default function FormItem(props: FormItemProps): JSX.Element;
