import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiAvatar';

export const avatarClasses = generateUtilityClasses(COMPONENT_NAME, ['root']);

export const avatarCssVars = createCssVars(COMPONENT_NAME, [
  'size',
  'borderRadius'
]);

export const useAvatarCssVars = () => {
  useRootCssVars((theme) =>
    avatarCssVars.style({
      size: 44,
      borderRadius: theme.shape.borderRadius
    })
  );
};
