import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const skeletonClasses = generateUtilityClasses('WuiSkeleton', [
  'root',
  'avatar',
  'avatarRound',
  'content',
  'title',
  'row'
]);

export interface SkeletonStyleProps {
  classes?: Partial<typeof skeletonClasses>;
  avatar?: boolean;
  avatarRound?: boolean;
}

export const useClasses = (styleProps: SkeletonStyleProps) => {
  const { classes, avatar, avatarRound } = styleProps;

  const slots = {
    root: ['root'],
    content: ['content'],
    avatar: ['avatar', avatar && avatarRound && 'avatarRound'],
    title: ['title'],
    row: ['row']
  };

  return composeClasses('WuiSkeleton', slots, classes);
};
