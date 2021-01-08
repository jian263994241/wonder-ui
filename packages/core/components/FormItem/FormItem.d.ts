import * as React from 'react';

import { InternalFieldProps } from 'rc-field-form/lib/Field';
import { NamePath } from 'rc-field-form/lib/interface';

export interface FormItemProps
  extends Omit<InternalFieldProps, 'name' | 'fieldContext'> {
  name?: NamePath;
}

export default function FormItem(props: FormItemProps): JSX.Element;
