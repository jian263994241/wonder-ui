import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { badgeCssVars, COMPONENT_NAME, useBadgeCssVars } from './BadgeClasses';
import { css, composeClasses } from '@wonder-ui/utils';
import type { BadgeProps } from './BadgeTypes';

const useClasses = (styleProps: BadgeProps) => {
  const { classes } = styleProps;

  const slots = {
    wrapper: ['wrapper'],
    root: ['root'],
    content: ['content'],
    dot: ['dot']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const BadgeRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: BadgeProps }>(({ styleProps }) => ({
  display: 'inline-flex',
  verticalAlign: 'middle',
  ...(!!styleProps.children && {
    position: 'absolute',
    transform: 'translate(50%,-50%)',
    right: 0,
    top: 0
  })
}));

const BadgeWrapper = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Wrapper'
})({
  display: 'inline-block',
  position: 'relative'
});

const BadgeDot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Dot'
})({
  width: badgeCssVars.value('dotSize'),
  height: badgeCssVars.value('dotSize'),
  borderRadius: `calc(${badgeCssVars.value('dotSize')} / 2)`,
  backgroundColor: badgeCssVars.value('color')
});

const BadgeContent = styled('span', { name: COMPONENT_NAME, slot: 'Content' })(
  ({ theme }) => {
    return {
      color: badgeCssVars.value('textColor'),
      backgroundColor: badgeCssVars.value('color'),
      borderRadius: '100px',
      whiteSpace: 'nowrap',
      fontWeight: 400,
      textAlign: 'center',
      padding: '1px 4px',
      fontSize: badgeCssVars.value('fontSize'),
      border: `${badgeCssVars.value(
        'borderWidth',
        0
      )} solid ${badgeCssVars.value('borderColor', theme.palette.common.white)}`
    };
  }
);

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    className,
    color,
    component,
    hideContent = false,
    rounded = false,
    dot = false,
    text,
    theme,
    style,
    ...rest
  } = props;

  const styleProps = { ...props, color, rounded };
  const classes = useClasses(styleProps);

  useBadgeCssVars();

  const renderBadge = () => {
    if (hideContent) return null;
    if (!dot && !text) return null;

    return (
      <BadgeRoot
        as={component}
        className={css(classes.root, className)}
        ref={ref}
        styleProps={styleProps}
        style={{
          ...(color &&
            badgeCssVars.style({
              color: theme.palette[color!]?.main
            })),
          ...style
        }}
        {...rest}
      >
        {dot ? (
          <BadgeDot className={classes.dot} />
        ) : (
          <BadgeContent className={classes.content}>{text}</BadgeContent>
        )}
      </BadgeRoot>
    );
  };

  return !!children ? (
    <BadgeWrapper className={classes.wrapper}>
      {renderBadge()}
      {children}
    </BadgeWrapper>
  ) : (
    renderBadge()
  );
});

export default Badge;
