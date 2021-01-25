import * as React from 'react';
import { render } from '@testing-library/react';
import { styled } from '../src';

describe('styled', () => {
  test('html element render', () => {
    const Button = styled('button')({
      color: 'red'
    });

    const { getByText } = render(
      <Button className="test-button">button</Button>
    );

    const button = getByText('button');

    expect(button.classList.contains('test-button')).toBeTruthy();
    expect(button.classList.contains('Styled(button)-root-0-1-1')).toBeTruthy();
  });

  test('react component render', () => {
    const Button = styled((props) => <button {...props} />)({ color: 'red' });

    const { getByText } = render(
      <Button className="test-button">button</Button>
    );

    const button = getByText('button');

    expect(button.classList.contains('test-button')).toBeTruthy();
    expect(button.classList.contains('Styled(button)-root-0-1-1')).toBeTruthy();
  });
});
