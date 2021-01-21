import * as React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useStepper } from '../src';

test('Use Stepper', () => {
  const { result } = renderHook(() => useStepper({ total: 3 }));

  act(() => {
    result.current.next();
    result.current.next();
  });

  expect(result.current.step).toBe(2);
});
