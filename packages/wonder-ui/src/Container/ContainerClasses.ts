import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const containerClasses = generateUtilityClasses('WuiContainer', [
  'root',
  'sizeSm',
  'sizeMd',
  'sizeLg',
  'sizeXl'
]);

export interface ContainerStyleProps {
  classes?: Partial<typeof containerClasses>;
  gutter: number;
  size: 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
}

export const useClasses = (styleProps: ContainerStyleProps) => {
  const { size, classes } = styleProps;
  const slot = {
    root: ['root', size !== 'fluid' && `size${capitalize(size)}`]
  };

  return composeClasses('WuiContainer', slot, classes);
};
