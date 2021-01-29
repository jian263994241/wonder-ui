import * as React from 'react';
import styledDefault from '@emotion/styled';
import { CreateStyled } from '@emotion/styled/types/base';
import { useTheme } from '@emotion/react';

export interface CreateStyledOptions<Theme extends object = any> {
  defaultTheme?: Theme;
}

export default function createStyled(options: CreateStyledOptions = {}) {
  const { defaultTheme = {} } = options;

  const styled: CreateStyled = (C: any, options: any) => {
    const styledFunc = styledDefault(C, options);

    return function StyledComponent(...arg: any[]) {
      const Target = styledFunc(...arg);

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

  return styled;
}
