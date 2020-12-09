import '@testing-library/jest-dom';
import * as React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { createUseStyles } from '../src';

describe('createUseStyles', () => {
  it('styles', () => {
    const useStyle = createUseStyles({
      root: {
        color: 'blue'
      }
    });

    const { result } = renderHook(() => useStyle());

    console.log(result.current);
  });

  it('dynamicStyles', () => {
    const useStyle = createUseStyles({
      root: {
        color: () => 'blue'
      }
    });

    const { result } = renderHook(() => useStyle());

    console.log(result.current);
  });

  it('theme', () => {
    const useStyle = createUseStyles((theme) => {
      return {
        root: {
          color: () => theme.colors.blue[400]
        },
        body: {
          color: theme.colors.blue[400]
        }
      };
    });

    const { result } = renderHook(() => useStyle());

    console.log(result.current);
  });
});
