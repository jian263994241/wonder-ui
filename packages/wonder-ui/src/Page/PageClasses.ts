import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const pageClasses = generateUtilityClasses('WuiPage', [
  'root',
  'content',
  'navbar',
  'toolbar'
]);

export interface PageStyleProps {
  classes?: Partial<typeof pageClasses>;
}

export const useClasses = (styleProps: PageStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    content: ['content'],
    navbar: ['navbar'],
    toolbar: ['toolbar']
  };

  return composeClasses('WuiPage', slots, classes);
};
