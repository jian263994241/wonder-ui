import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiList';

export const listClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'card'
]);

export const listCssVars = createCssVars(COMPONENT_NAME, [
  'alignItems',
  'bgColor',
  'cardBorderRadius',
  'cardMarginHorizontal',
  'divider',
  'extraMaxWidth',
  'extraPaddingLeft',
  'paddingHorizontal',
  'paddingVertical',
  'prefixPaddingRight',
  'prefixWidth',
  'titleBgColor'
]);

export const useListCssVars = () => {
  useRootCssVars((theme) =>
    listCssVars.style({
      alignItems: 'center',
      bgColor: theme.palette.background.paper,
      cardBorderRadius: theme.shape.borderRadius * 2,
      cardMarginHorizontal: theme.spacing(2),
      divider: `thin solid ${theme.palette.divider}`,
      extraMaxWidth: '70%',
      extraPaddingLeft: theme.spacing(1.5),
      paddingHorizontal: theme.spacing(1.5),
      paddingVertical: theme.spacing(1.5),
      prefixPaddingRight: theme.spacing(1.5),
      prefixWidth: 'auto',
      titleBgColor: theme.palette.background.default
    })
  );
};

export type ListClassesType = typeof listClasses;
