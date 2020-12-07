import * as React from 'react';
import type { HookOptions, Styles, ClassNameMap } from './types';
import { isBrowser } from './utils/isBrowser';
import JssContext from './JssContext';
import useTheme from './useTheme';
import {
  createStyleSheet,
  addDynamicRules,
  updateDynamicRules,
  removeDynamicRules
} from './utils/sheets';
import getSheetIndex from './utils/getSheetIndex';
import getSheetClasses from './utils/getSheetClasses';
import { manageSheet, unmanageSheet } from './utils/managers';
import { DefaultTheme } from './defaultTheme';

const useEffectOrLayoutEffect = isBrowser
  ? React.useLayoutEffect
  : React.useEffect;

export default function createUseStyles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, keyof Props extends never ? any : Props, ClassKey>,
  options?: HookOptions<Theme>
) {
  return function useStyles(
    props?: keyof Props extends never ? any : Props,
    overwrite?: HookOptions<Theme>
  ): ClassNameMap<ClassKey> {
    const {
      defaultTheme = {},
      index = getSheetIndex(),
      name,
      themeContext,
      ...sheetOptions
    } = { ...options, ...overwrite };
    const isFirstMount = React.useRef(true);
    const context = React.useContext(JssContext);

    const theme = {
      ...defaultTheme,
      ...(themeContext
        ? // eslint-disable-next-line react-hooks/rules-of-hooks
          React.useContext<any>(themeContext)
        : // eslint-disable-next-line react-hooks/rules-of-hooks
          useTheme())
    };

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

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useDebugValue(classes);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useDebugValue(theme);
    }

    React.useEffect(() => {
      isFirstMount.current = false;
    });

    return classes;
  };
}
