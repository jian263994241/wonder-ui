import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { skeletonClasses, useClasses } from './SkeletonClasses';
import { css, createArray } from '@wonder-ui/utils';
import { keyframes } from '@wonder-ui/styled';
import { emphasize } from '../styles/colorManipulator';

export interface SkeletonProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'title'> {
  avatar?: boolean;
  avatarRound?: boolean;
  classes?: Partial<typeof skeletonClasses>;
  ref?: React.Ref<any>;
  row?: number;
  title?: boolean;
}

const skeletonBlink = keyframes`
  50% {
    opacity: 0.6;
  }
`;

const SkeletonRoot = styled('div', {
  name: 'WuiSkeleton',
  slot: 'Root'
})(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: theme.spacing(0, 2),
  boxSizing: 'border-box',
  animation: `${skeletonBlink} 1.2s ease-in-out infinite`
}));

const SkeletonContent = styled('div', {
  name: 'WuiSkeleton',
  slot: 'Content'
})(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1)
}));

const commomBlockStyle = (theme: any) => ({
  backgroundColor: emphasize(theme.palette.background.default, 0.08),
  borderRadius: theme.shape.borderRadius
});

const SkeletonAvatar = styled('div', {
  name: 'WuiSkeleton',
  slot: 'Avatar'
})(({ theme }) => ({
  ...commomBlockStyle(theme),
  flexShrink: 0,
  width: 32,
  height: 32,
  marginRight: 16,

  [`&.${skeletonClasses.avatarRound}`]: {
    borderRadius: '50%'
  }
}));

const SkeletonTitle = styled('div', {
  name: 'WuiSkeleton',
  slot: 'Title'
})(({ theme }) => ({
  ...commomBlockStyle(theme),
  width: '40%',
  height: 16,
  margin: 0
}));

const SkeletonRow = styled('div', {
  name: 'WuiSkeleton',
  slot: 'Row'
})(({ theme }) => ({
  ...commomBlockStyle(theme),
  width: '100%',
  height: 16,
  marginTop: 16,

  '& + &': {
    marginTop: 12
  },
  '&:last-of-type': {
    width: '60%'
  }
}));

const Skeleton = React.forwardRef<HTMLElement, SkeletonProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiSkeleton' });
    const {
      avatar = false,
      avatarRound = true,
      className,
      row = 3,
      title = false,
      ...rest
    } = props;

    const styleProps = { ...props, avatar, avatarRound };

    const classes = useClasses(styleProps);

    return (
      <SkeletonRoot
        ref={ref as React.Ref<HTMLDivElement>}
        className={css(classes.root, className)}
        {...rest}
      >
        {avatar && <SkeletonAvatar className={classes.avatar} />}
        <SkeletonContent className={classes.content}>
          {title && <SkeletonTitle className={classes.title} />}

          {createArray(row, (index) => (
            <SkeletonRow className={classes.row} key={index} />
          ))}
        </SkeletonContent>
      </SkeletonRoot>
    );
  }
);

export default Skeleton;
