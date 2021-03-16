import * as React from 'react';

type Ref<T> = React.MutableRefObject<T> | React.RefCallback<T> | null;

export default function setRef(ref: Ref<any>, value: any) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
