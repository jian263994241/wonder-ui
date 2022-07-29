import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiCard';

export const cardClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'header',
  'title',
  'body'
]);

export const cardCssVars = createCssVars(COMPONENT_NAME, [
  'bgColor',
  'borderRadius',
  'titleFontSize',
  'titleFontWeight',
  'paddingHorizontal',
  'headerPaddingVertical',
  'headerPaddingHorizontal',
  'bodyPaddingVertical',
  'bodyPaddingHorizontal',
  'footerPaddingVertical',
  'footerPaddingHorizontal',
  'dividerColor'
]);

export const useCardCssVars = () => {
  useRootCssVars((theme) =>
    cardCssVars.style({
      bgColor: theme.palette.background.paper,
      headerPaddingVertical: theme.spacing(1.5),
      bodyPaddingVertical: theme.spacing(1.5),
      footerPaddingVertical: theme.spacing(1.5),
      paddingHorizontal: theme.spacing(1.5),
      dividerColor: theme.palette.divider
    })
  );
};

export type CardClasses = typeof cardClasses;
