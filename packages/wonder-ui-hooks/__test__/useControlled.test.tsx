import * as React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useControlled } from '../src';

describe('useControlled', () => {
  test('works correctly when is not controlled', () => {
    const { result } = renderHook(() =>
      useControlled({ defaultValue: 1, name: 'test-hook' })
    );

    const [, setValue] = result.current;

    expect(result.current[0]).toBe(1);

    act(() => {
      setValue(2);
    });

    expect(result.current[0]).toBe(2);
  });

  test('works correctly when is controlled', () => {
    const { result } = renderHook(() =>
      useControlled({ value: 1, name: 'test-hook' })
    );
    const [, setValue] = result.current;

    expect(result.current[0]).toBe(1);

    setValue(2);

    expect(result.current[0]).toBe(1);
  });

  test('warns when switching from uncontrolled to controlled', () => {
    const consoleMock = (console.error = jest.fn());

    const { rerender } = renderHook((props: any = {}) =>
      useControlled({ value: props.value, name: 'test-hook' })
    );
    expect(consoleMock).not.toHaveBeenCalled();

    act(() => {
      rerender({ value: 1 });
    });

    expect(consoleMock).toHaveBeenCalledWith(
      [
        `A component is changing the uncontrolled value state of test-hook to be controlled.`,
        'Elements should not switch from uncontrolled to controlled (or vice versa).',
        `Decide between using a controlled or uncontrolled test-hook ` +
          'element for the lifetime of the component.',
        "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
        'More info: https://fb.me/react-controlled-components'
      ].join('\n')
    );
  });

  test('warns when changing the defaultValue prop after initial rendering', () => {
    const consoleMock = (console.error = jest.fn());

    const { rerender } = renderHook((props: any = {}) =>
      useControlled({ defaultValue: props.defaultValue, name: 'test-hook' })
    );
    expect(consoleMock).not.toHaveBeenCalled();

    act(() => {
      rerender({ defaultValue: 1 });
    });

    expect(consoleMock).toHaveBeenCalledWith(
      [
        `A component is changing the default value state of an uncontrolled component after being initialized. ` +
          `To suppress this warning opt to use a controlled test-hook.`
      ].join('\n')
    );
  });

  test('should not raise a warning if changing the defaultValue when controlled', () => {
    const consoleMock = (console.error = jest.fn());

    const { rerender } = renderHook(
      (props: any = {}) =>
        useControlled({
          defaultValue: props.defaultValue,
          value: props.value,
          name: 'test-hook'
        }),
      {
        initialProps: {
          defaultValue: 0,
          value: 1
        }
      }
    );

    act(() => {
      rerender({ defaultValue: 1, value: 1 });
    });

    expect(consoleMock).not.toHaveBeenCalled();
  });
});
