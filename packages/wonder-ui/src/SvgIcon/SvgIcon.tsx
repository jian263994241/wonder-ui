import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import styled, { StyledPropsType } from '../styles/styled';

interface SvgIconStyleProps {
  size: 'inherit' | 'large' | 'medium' | 'small';
}

const SvgIconRoot = styled.svg<SvgIconStyleProps>(
  ({ theme, ...styleProps }) => ({
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter
    }),
    fontSize: {
      inherit: 'inherit',
      small: theme.typography.pxToRem(20),
      medium: theme.typography.pxToRem(24),
      large: theme.typography.pxToRem(35)
    }[styleProps.size]
  })
);

export interface SvgIconProps extends StyledPropsType<typeof SvgIconRoot> {
  titleAccess?: string;
  ref?: React.Ref<any>;
}

const SvgIcon: React.FC<SvgIconProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiSvgIcon' });
  const { titleAccess, children, component = 'svg', ...rest } = props;

  return (
    <SvgIconRoot
      as={component}
      size="inherit"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? 'img' : undefined}
      ref={ref}
      {...rest}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </SvgIconRoot>
  );
});

SvgIcon.displayName = 'WuiSvgIcon';

export default SvgIcon;
