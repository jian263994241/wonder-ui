import * as React from 'react';
import EmptyIconDefault from './EmptyIconDefault';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css, forwardRef } from '@wonder-ui/utils';
import { EmptyProps } from './EmptyTypes';
import { useClasses } from './EmptyClasses';

const EmptyRoot = styled('div', {
  name: 'WuiEmpty',
  slot: 'Root'
})(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(0, 1),
  color: theme.palette.text.secondary
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

/**
 * Empty
 */
const Empty = forwardRef<HTMLElement, EmptyProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiEmpty' });

  const {
    className,
    children,
    image,
    description = '暂无数据',
    ...rest
  } = props;

  const styleProps = props;

  const classes = useClasses(styleProps);

  return (
    <EmptyRoot
      ref={ref as React.Ref<HTMLDivElement>}
      className={css(classes.root, className)}
      {...rest}
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
