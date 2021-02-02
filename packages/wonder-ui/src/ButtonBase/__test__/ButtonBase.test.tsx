import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonBase from './ButtonBase';
import { withStyles } from '../styles';

describe('ButtonBase', () => {
  test('click ative state', () => {
    const { container, getByText } = render(
      <ButtonBase className="my-button">Base Button</ButtonBase>
    );

    expect(container).toMatchSnapshot();

    const button = getByText('Base Button');

    fireEvent.mouseDown(button);

    expect(button.classList.contains('active')).toBeTruthy();

    fireEvent.mouseUp(button);

    expect(button.classList.contains('active')).toBeFalsy();
  });

  test('custom button', () => {
    const Button = withStyles({
      root: {
        color: 'red'
      }
    })(ButtonBase);

    const { getByText } = render(<Button>button</Button>);

    const button = getByText('button');

    const buttonStyles = window.getComputedStyle(button);

    expect(buttonStyles['color']).toBe('red');
  });
});
