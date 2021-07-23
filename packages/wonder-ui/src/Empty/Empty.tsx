import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import EmptyIconDefault from './EmptyIconDefault';
import { emptyClasses, useClasses } from './EmptyClasses';
import { css } from '@wonder-ui/utils';

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<typeof emptyClasses>;
  image?: React.ReactElement;
  description?: React.ReactNode;
  ref?: React.Ref<any>;
}

const EmptyRoot = styled('div', {
  name: 'WuiEmpty',
  slot: 'Root'
})(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(0, 1),
  color: '#969799'
}));

const EmptyFooter = styled('div', {
  name: 'WuiEmpty',
  slot: 'Footer'
})(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

const EmptyImage = styled('div', {
  name: 'WuiEmpty',
  slot: 'Image'
})(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: '3.5em',
  lineHeight: 0,
  userSelect: 'none'
}));

const EmptyDescription = styled('div', {
  name: 'WuiDescription',
  slot: 'Description'
})(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  lineHeight: 1.5,
  userSelect: 'none'
}));

const Empty = React.forwardRef<HTMLElement, EmptyProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiEmpty' });

  const { className, children, image, description = '暂无数据' } = props;

  const styleProps = props;

  const classes = useClasses(styleProps);

  return (
    <EmptyRoot
      ref={ref as React.Ref<HTMLDivElement>}
      className={css(classes.root, className)}
    >
      <EmptyImage className={classes.image}>
        {image || <EmptyIconDefault fontSize="inherit" color="inherit" />}
      </EmptyImage>
      <EmptyDescription className={classes.description}>
        {description}
      </EmptyDescription>
      {children && (
        <EmptyFooter className={classes.footer}>{children}</EmptyFooter>
      )}
    </EmptyRoot>
  );
});

export default Empty;
