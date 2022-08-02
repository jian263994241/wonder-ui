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
      borderRadius: theme.shape.borderRadius[3],
      bgColor: theme.palette.background.paper,
      headerPaddingVertical: theme.shape.distanceVertical,
      bodyPaddingVertical: theme.shape.distanceVertical,
      footerPaddingVertical: theme.shape.distanceVertical,
      paddingHorizontal: theme.shape.distanceHorizontal,
      dividerColor: theme.palette.divider
    })
  );
};

export type CardClasses = typeof cardClasses;
