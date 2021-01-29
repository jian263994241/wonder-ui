import * as React from 'react';
import styledDefault, { CreateStyled } from '@emotion/styled';
import { CreateStyled as CreateStyledBase } from '@emotion/styled/types/base';
import { useTheme } from '@emotion/react';
import { tags } from './tags';

export interface CreateStyledOptions<Theme extends object = any> {
  defaultTheme?: Theme;
}

export default function createStyled(options: CreateStyledOptions = {}) {
  const { defaultTheme = {} } = options;

  const styled: CreateStyledBase = (C: any, options: any) => {
    const styledFunc = styledDefault(C, options);

    return function StyledComponent(...styles: any[]) {
      const Target = styledFunc(...styles);

      return React.forwardRef<
        typeof Target,
        React.ComponentProps<typeof Target>
      >(function DefaultThemeInjector(props, ref) {
        const { theme: themeInput, ...rest } = props;
        const outerTheme = useTheme();

        const theme = themeInput || { ...defaultTheme, ...outerTheme };

        return <Target ref={ref} theme={theme} {...rest} />;
      }) as any;
    };
  };

  const newStyled: any = styled.bind(undefined);

  tags.forEach(function (tagName) {
    newStyled[tagName] = newStyled(tagName);
  });

  return newStyled as CreateStyled;
}
