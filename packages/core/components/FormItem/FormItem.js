import * as React from 'react';
import { Field } from 'rc-field-form';

/**
 * 对`rc-field-form`的 Field 封装
 * @visibleName FormItem 表单字段
 */
export default function FormItem(props) {
  const { children, ...fieldProps } = props;

  return (
    <Field {...fieldProps}>
      {(handleProps, meta) => {
        if (typeof children === 'function') {
          return children(handleProps, meta);
        }

        if (React.isValidElement(children)) {
          return React.cloneElement(children, { ...handleProps, meta });
        }

        return children;
      }}
    </Field>
  );
}
