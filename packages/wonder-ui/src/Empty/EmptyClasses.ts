import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';
import { EmptyClasses, EmptyProps } from './EmptyTypes';

export const emptyClasses: EmptyClasses = generateUtilityClasses('WuiEmpty', [
  'root',
  'footer',
  'image',
  'description'
]);

export const useClasses = (styleProps: EmptyProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    image: ['image'],
    description: ['description'],
    footer: ['footer']
  };

  return composeClasses('WuiEmpty', slots, classes);
};
