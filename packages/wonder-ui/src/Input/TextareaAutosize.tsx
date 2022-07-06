import * as React from 'react';
import styled from '../styles/styled';
import Typography from '../Typography';
import {
  css,
  debounce,
  generateUtilityClasses,
  nextTick,
  ownerWindow
} from '@wonder-ui/utils';
import { useForkRef, useReactive } from '@wonder-ui/hooks';
import type { TextareaAutosizeProps } from './InputTypes';

function getStyleValue(computedStyle: Record<string, any>, property: string) {
  return parseInt(computedStyle[property], 10) || 0;
}

const styles: Record<string, React.CSSProperties> = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};

const COMPONENT_NAME = 'WuiTextareaAutosize';

const classes = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'textarea',
  'count'
]);

const TextareaAutosizeRoot = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  // display: 'inline-flex',
  // alignItems: 'center',
  paddingTop: 4,
  width: '100%',
  '& > textarea': {
    border: 0,
    padding: 0,
    resize: 'inherit',
    width: 'inherit',
    outline: 'inherit',
    lineHeight: 'inherit',
    font: 'inherit',
    fontSize: 'inherit',
    color: 'inherit',
    backgroundColor: 'transparent'
  }
});

const TextareaAutosize = React.forwardRef<
  HTMLTextAreaElement,
  TextareaAutosizeProps
>((props, ref) => {
  const {
    onChange,
    value,
    maxRows,
    minRows = 1,
    className,
    style,
    showCount,
    maxLength,
    ...rest
  } = props;

  const { current: isControlled } = React.useRef(value != null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const handleRef = useForkRef(ref, inputRef);
  const shadowRef = React.useRef<HTMLTextAreaElement>(null);
  const renders = React.useRef(0);

  const state = useReactive({
    outerHeightStyle: 0,
    overflow: false
  });

  const syncHeight = React.useCallback(() => {
    const input = inputRef.current!;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);

    // If input's width is shrunk and it's not visible, don't sync height.
    if (computedStyle.width === '0px') {
      return;
    }

    const inputShallow = shadowRef.current!;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || 'x';
    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }
    //@ts-expect-error
    const boxSizing = computedStyle['box-sizing'];
    const padding =
      getStyleValue(computedStyle, 'padding-bottom') +
      getStyleValue(computedStyle, 'padding-top');
    const border =
      getStyleValue(computedStyle, 'border-bottom-width') +
      getStyleValue(computedStyle, 'border-top-width');

    // The height of the inner content
    const innerHeight = inputShallow.scrollHeight;

    // Measure height of a textarea with a single row
    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight;

    // The height of the outer content
    let outerHeight = innerHeight;

    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    // Take the box sizing into account for applying this value as a style.
    const outerHeightStyle =
      outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;

    // Need a large enough difference to update the height.
    // This prevents infinite rendering loop.
    if (
      renders.current < 20 &&
      ((outerHeightStyle > 0 &&
        Math.abs((state.outerHeightStyle || 0) - outerHeightStyle) > 1) ||
        state.overflow !== overflow)
    ) {
      renders.current += 1;

      state.outerHeightStyle = outerHeightStyle;
      state.overflow = overflow;
    }
  }, [maxRows, minRows]);

  React.useEffect(() => {
    const handleResize = debounce(() => {
      renders.current = 0;
      syncHeight();
    });

    const containerWindow = ownerWindow(inputRef.current);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.cancel();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);

  React.useEffect(() => {
    nextTick(() => {
      syncHeight();
    });
  });

  React.useEffect(() => {
    renders.current = 0;
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  const conut = value ? value.length : 0;
  const countDisplay = maxLength ? `${conut}/${maxLength}` : conut;

  return (
    <TextareaAutosizeRoot className={css(classes.root, className)}>
      <textarea
        className={classes.textarea}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        ref={handleRef}
        // Apply the rows prop to get a "correct" first SSR paint
        rows={minRows}
        style={{
          ...style,
          height: state.outerHeightStyle,
          // Need a large enough different to allow scrolling.
          // This prevents infinite rendering loop.
          overflow: state.overflow ? 'hidden' : undefined
        }}
        {...rest}
      />
      <textarea
        aria-hidden
        maxLength={maxLength}
        readOnly
        ref={shadowRef}
        tabIndex={-1}
        style={styles.shadow}
      />

      {showCount && (
        <Typography
          className={classes.count}
          variant="body2"
          color="textSecondary"
          align="right"
        >
          {countDisplay}
        </Typography>
      )}
    </TextareaAutosizeRoot>
  );
});

export default TextareaAutosize;
