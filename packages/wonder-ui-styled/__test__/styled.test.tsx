import * as React from 'react';
import { createStyled, ThemeProvider } from '../src';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';

expect.extend(matchers);

const styled = createStyled({
  defaultTheme: {
    color: 'red'
  }
});

describe('styled', () => {
  test('classnames', () => {
    const Button = styled('button')({
      color: 'red'
    });

    const { getByText } = render(
      <Button className="my-button">styledButton</Button>
    );

    expect(getByText('styledButton').classList[0]).toStrictEqual('my-button');

    console.log(getByText('styledButton').className);
  });

  test('default theme without theme prop.', () => {
    const Button = styled('button')<any>(({ theme }) => {
      return {
        color: theme.color
      };
    });

    const ButtonCssString = styled('button')<any>`
      color: ${(props) => props.theme.color};
    `;

    const { getByText, rerender } = render(<Button>styledButton</Button>);

    expect(getByText('styledButton')).toHaveStyleRule('color', 'red');

    rerender(<ButtonCssString>styledButton</ButtonCssString>);

    expect(getByText('styledButton')).toHaveStyleRule('color', 'red');
  });

  test('default theme with theme prop.', () => {
    const Button = styled('button')<any>(({ theme }) => {
      return {
        color: theme.color
      };
    });

    const ButtonCssString = styled('button')<any>`
      color: ${(props) => props.theme.color};
    `;

    const { getByText, rerender } = render(
      <Button theme={{ color: 'blue' }}>styledButton</Button>
    );

    expect(getByText('styledButton')).toHaveStyleRule('color', 'blue');

    rerender(
      <ButtonCssString theme={{ color: 'pink' }}>styledButton</ButtonCssString>
    );

    expect(getByText('styledButton')).toHaveStyleRule('color', 'pink');
  });

  test('theme prop with ThemeProvider', () => {
    const Button = styled('button')<any>(({ theme }) => {
      return {
        color: theme.color
      };
    });

    const ButtonCssString = styled('button')<any>`
      color: ${(props) => props.theme.color};
    `;

    const { getByText, rerender } = render(
      <ThemeProvider theme={{ color: 'blue' }}>
        <Button>styledButton</Button>
      </ThemeProvider>
    );

    expect(getByText('styledButton')).toHaveStyleRule('color', 'blue');

    rerender(
      <ThemeProvider theme={{ color: 'blue' }}>
        <ButtonCssString theme={{ color: 'pink' }}>
          styledButton
        </ButtonCssString>
      </ThemeProvider>
    );

    expect(getByText('styledButton')).toHaveStyleRule('color', 'pink');
  });

  test('styled.tags', () => {
    const Button = styled.button<any>`
      color: ${(props) => props.theme.color};
    `;
    const { getByText } = render(<Button>styledButton</Button>);

    expect(getByText('styledButton')).toHaveStyleRule('color', 'red');
  });
});
