import { generateUtilityClasses, createCssVars } from '@wonder-ui/utils';
import useRootCssVars from '../styles/useRootCssVars';
import { listCssVars } from '../List/ListClasses';

export const COMPONENT_NAME = 'WuiForm';

export const formClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'horizontal',
  'vertical',
  'list',
  'footer'
]);

export const formCssVars = createCssVars(COMPONENT_NAME, [
  'footerVerticalPadding',
  'footerHorizontalPadding'
]);

export const useFormCssVars = () => {
  useRootCssVars((theme) =>
    formCssVars.style({
      footerVerticalPadding: theme.shape.distanceVerticalLarge,
      footerHorizontalPadding: listCssVars.value(
        'paddingHorizontal',
        theme.shape.distanceHorizontal
      )
    })
  );
};

export type FormLabelClassesType = typeof formClasses;
