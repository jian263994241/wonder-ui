import * as React from 'react';
import EmptyIconDefault from './EmptyIconDefault';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { css, forwardRef } from '@wonder-ui/utils';
import { EmptyProps } from './EmptyTypes';
import { useClasses } from './EmptyClasses';
import { typographyCssVars } from '../Typography/TypographyClasses';
import { svgIconCssVars } from '../SvgIcon/SvgIconClasses';

const EmptyRoot = styled('div', {
  name: 'WuiEmpty',
  slot: 'Root'
})(({ theme }) => ({
  userSelect: 'none',
  textAlign: 'center',
  ...typographyCssVars.style({
    color: theme.palette.text.icon
  }),
  ...svgIconCssVars.style({
    color: theme.palette.text.icon,
    size: 64
  })
}));

const EmptyFooter = styled('div', {
  name: 'WuiEmpty',
  slot: 'Footer'
})(({ theme }) => ({
  marginTop: theme.shape.distanceVertical
}));

const EmptyImage = styled('div', {
  name: 'WuiEmpty',
  slot: 'Image'
})({});

const EmptyText = styled(Typography, {
  name: 'WuiEmpty',
  slot: 'Text'
})(({ theme }) => ({
  // marginTop: theme.shape.distanceVerticalSmall
}));

/**
 * Empty
 */
const Empty = forwardRef<HTMLDivElement, EmptyProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiEmpty' });

  const { className, children, image, description, ...rest } = props;

  const styleProps = props;

  const classes = useClasses(styleProps);

  return (
    <EmptyRoot ref={ref} className={css(classes.root, className)} {...rest}>
      <EmptyImage className={classes.image}>
        {image || <EmptyIconDefault />}
      </EmptyImage>
      <EmptyText className={classes.description} variant="caption">
        {description}
      </EmptyText>
      {children && (
        <EmptyFooter className={classes.footer}>{children}</EmptyFooter>
      )}
    </EmptyRoot>
  );
});

export default Empty;
