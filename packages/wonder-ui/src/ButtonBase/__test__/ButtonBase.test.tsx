import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonBase from '../ButtonBase';
import styled from '../../styles/styled';

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
    const Button = styled(ButtonBase)({
      color: 'red'
    });

    const { getByText } = render(<Button>button</Button>);

    const button = getByText('button');

    const buttonStyles = window.getComputedStyle(button);

    expect(buttonStyles['color']).toBe('red');
  });
});
