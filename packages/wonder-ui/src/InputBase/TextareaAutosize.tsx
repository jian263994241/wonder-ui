import * as React from 'react';
import { debounce, getWindow } from '@wonder-ui/utils';
import { useForkRef } from '@wonder-ui/hooks';

export interface TextareaAutosizeProps
  extends React.HTMLProps<HTMLTextAreaElement> {
  autoAdjustHeight?: boolean;
}

const TextareaAutosize = React.forwardRef<
  HTMLTextAreaElement,
  TextareaAutosizeProps
>((props, ref) => {
  const { autoAdjustHeight, onChange, value, rows = 1, ...rest } = props;

  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const handleRef = useForkRef(ref, inputRef);

  const syncHeight = React.useCallback(() => {
    const textField = inputRef.current as HTMLTextAreaElement;
    if (textField && autoAdjustHeight) {
      textField.style.height = '';
      textField.style.height = textField.scrollHeight + 'px';
    }
  }, [autoAdjustHeight]);

  React.useEffect(() => {
    const handleResize = debounce(() => {
      syncHeight();
    });

    const containerWindow = getWindow(inputRef.current);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.cancel();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    syncHeight();

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      rows={autoAdjustHeight ? 1 : rows}
      ref={handleRef}
      {...rest}
    />
  );
});

export default TextareaAutosize;
