import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiImage';

export const imageClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'img',
  'circular',
  'rounded',
  'square'
]);

export const imageCssVars = createCssVars(COMPONENT_NAME, [
  'width',
  'height',
  'roundedRadius',
  'objectFit'
]);

export const useImageCssVars = () => {
  useRootCssVars((theme) =>
    imageCssVars.style({
      width: 'auto',
      height: 'auto',
      roundedRadius: theme.shape.borderRadius,
      objectFit: 'cover'
    })
  );
};

export type ImageClassesType = typeof imageClasses;
