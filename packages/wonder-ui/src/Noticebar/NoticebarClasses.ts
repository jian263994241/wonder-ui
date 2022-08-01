import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'Noticebar';

export const noticebarClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'textWrap',
  'text',
  'extra',
  'icon',
  'close',
  'closable',
  'typeInfo',
  'typeWarning',
  'wrap'
]);

export const noticebarCssVars = createCssVars(COMPONENT_NAME, [
  'height',
  'paddingHorizontal',
  'paddignVertical',
  'bgColor',
  'borderColor',
  'textColor'
]);

export const useNoticebarCssVars = () => {
  useRootCssVars((theme) =>
    noticebarCssVars.style({
      height: 40,
      paddingHorizontal: theme.shape.distanceHorizontal,
      paddignVertical: theme.shape.distanceVerticalSmall,
      textColor: '#ff6010',
      bgColor: '#fff9ed',
      borderColor: '#fff3e9'
    })
  );
};

export type NoticebarClassesType = typeof noticebarClasses;
