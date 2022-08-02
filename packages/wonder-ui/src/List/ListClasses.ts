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
  'headerBgColor',
  'headerMarginTop',
  'headerMarginBottom'
]);

export const useListCssVars = () => {
  useRootCssVars((theme) =>
    listCssVars.style({
      alignItems: 'center',
      headerBgColor: theme.palette.background.default,
      headerMarginTop: theme.shape.distanceVerticalSmall,
      headerMarginBottom: theme.shape.distanceVerticalSmall,
      bgColor: theme.palette.background.paper,
      cardBorderRadius: theme.shape.borderRadius[3],
      cardMarginHorizontal: theme.shape.distanceHorizontal,
      divider: `thin solid ${theme.palette.divider}`,
      extraMaxWidth: '70%',
      extraPaddingLeft: theme.shape.distanceHorizontal,
      paddingHorizontal: theme.shape.distanceHorizontal,
      paddingVertical: theme.shape.distanceVertical,
      prefixPaddingRight: theme.shape.distanceHorizontal,
      prefixWidth: 'auto'
    })
  );
};

export type ListClassesType = typeof listClasses;
