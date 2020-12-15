import * as React from 'react';
import type { HookOptions, Styles, ClassNameMap, AnyProps } from './types';
import { isBrowser } from './utils/isBrowser';
import JssContext from './JssContext';
import { ThemeContext as DefaultThemeContext } from 'theming';
import defaultTheme_, { DefaultTheme } from './theme/defaultTheme';
import {
  createStyleSheet,
  addDynamicRules,
  updateDynamicRules,
  removeDynamicRules
} from './utils/sheets';
import getSheetIndex from './utils/getSheetIndex';
import getSheetClasses from './utils/getSheetClasses';
import { manageSheet, unmanageSheet } from './utils/managers';

const useEffectOrLayoutEffect = isBrowser
  ? React.useLayoutEffect
  : React.useEffect;

export default function createUseStyles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, AnyProps<Props>, ClassKey>,
  options: HookOptions<Theme> = {}
) {
  const {
    defaultTheme = defaultTheme_,
    index = getSheetIndex(),
    name,
    theming,
    ...sheetOptions
  } = options;

  const ThemeContext = (theming && theming.context) || DefaultThemeContext;
  const useTheme =
    typeof styles === 'function'
      ? () => React.useContext<any>(ThemeContext) || defaultTheme
      : () => defaultTheme;

  return function useStyles(
    props: Partial<Props> = {}
  ): ClassNameMap<ClassKey> {
    const isFirstMount = React.useRef(true);
    const context = React.useContext(JssContext);
    const theme = useTheme();

    const [sheet, dynamicRules] = React.useMemo(() => {
      const newSheet = createStyleSheet({
        context,
        styles,
        name,
        theme,
        index,
        ...sheetOptions
      });

      const newDynamicRules = newSheet
        ? addDynamicRules(newSheet, props)
        : null;

      if (newSheet) {
        manageSheet({
          index,
          context,
          sheet: newSheet,
          theme
        });
      }

      return [newSheet, newDynamicRules];
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context, theme]);

    useEffectOrLayoutEffect(() => {
      // We only need to update the rules on a subsequent update and not in the first mount
      if (sheet && dynamicRules && !isFirstMount.current) {
        updateDynamicRules(props, sheet, dynamicRules);
      }
    }, [props]);

    useEffectOrLayoutEffect(
      () =>
        // cleanup only
        () => {
          if (sheet) {
            unmanageSheet({
              index,
              context,
              sheet,
              theme
            });
          }

          if (sheet && dynamicRules) {
            removeDynamicRules(sheet, dynamicRules);
          }
        },
      [sheet]
    );

    const classes =
      sheet && dynamicRules ? getSheetClasses(sheet, dynamicRules) : {};

    React.useEffect(() => {
      isFirstMount.current = false;
    });

    return classes;
  };
}
