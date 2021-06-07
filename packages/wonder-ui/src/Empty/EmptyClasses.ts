import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const emptyClasses = generateUtilityClasses('WuiEmpty', [
  'root',
  'footer',
  'image',
  'description'
]);

export interface EmptyStyleProps {
  classes?: Partial<typeof emptyClasses>;
}

export const useClasses = (styleProps: EmptyStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    image: ['image'],
    description: ['description'],
    footer: ['footer']
  };

  return composeClasses('WuiEmpty', slots, classes);
};
