import * as React from 'react';
import hoist from 'hoist-non-react-statics';
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

    return (...styles: any[]) => {
      const SourceComponent = styledFunc(...styles);

      const Target = React.forwardRef<
        typeof SourceComponent,
        React.ComponentProps<typeof SourceComponent>
      >((props, ref) => {
        const { theme: themeInput, ...rest } = props;
        const outerTheme = useTheme();

        const theme = themeInput || { ...defaultTheme, ...outerTheme };

        return <SourceComponent ref={ref} theme={theme} {...rest} />;
      });

      Target.displayName = SourceComponent.displayName;

      hoist(Target, SourceComponent);

      return Target as any;
    };
  };

  const newStyled: any = styled.bind(undefined);

  tags.forEach(function (tagName) {
    newStyled[tagName] = newStyled(tagName);
  });

  return newStyled as CreateStyled;
}
