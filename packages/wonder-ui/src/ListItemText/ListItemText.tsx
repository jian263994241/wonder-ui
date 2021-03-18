import * as React from 'react';
import styled from '../styles/styled';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import type { StyleProps, ClassNameMap } from '../styles/types';
import Typography, { TypographyProps } from '../Typography';

export interface ListItemTextStyleProps {
  primary?: boolean;
  secondary?: boolean;
}

const ListItemTextRoot = styled('div', {
  name: 'WuiListItemText',
  slot: 'Root'
})<StyleProps<ListItemTextStyleProps>>(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: 'inherit',
  verticalAlign: 'middle',
  userSelect: 'none',
  flex: '1 1 auto'
}));

export interface ListItemTextProps {
  children?: React.ReactNode;
  classes?: Partial<ClassNameMap<'root' | 'primary' | 'secondary'>>;
  primary?: React.ReactNode;
  primaryTypographyProps?: TypographyProps;
  secondary?: React.ReactNode;
  secondaryTypographyProps?: TypographyProps;
  disableTypography?: boolean;
}

const ListItemText = createFCWithTheme<ListItemTextProps>(
  'WuiListItemText',
  (props, ref) => {
    const {
      children,
      className,
      component,
      disableTypography = false,
      primary: primaryProp,
      primaryTypographyProps,
      secondary: secondaryProp,
      secondaryTypographyProps,
      ...rest
    } = props;

    let primary: any = primaryProp != null ? primaryProp : children;
    let secondary: any = secondaryProp;

    const styleProps = { primary: !!primary, secondary: !!secondary };

    const classes = useClasses({
      ...props,
      styleProps,
      name: 'WuiListItemText'
    });

    if (primary != null && primary.type !== Typography && !disableTypography) {
      primary = (
        <Typography
          variant="body1"
          className={classes.primary}
          component="span"
          color="primary"
          {...primaryTypographyProps}
        >
          {primary}
        </Typography>
      );
    }

    if (
      secondary != null &&
      secondary.type !== Typography &&
      !disableTypography
    ) {
      secondary = (
        <Typography
          variant="body2"
          component="div"
          className={classes.secondary}
          color="secondary"
          {...secondaryTypographyProps}
        >
          {secondary}
        </Typography>
      );
    }

    return (
      <ListItemTextRoot
        as={component}
        className={classes.root}
        styleProps={styleProps}
        ref={ref}
        {...rest}
      >
        {primary}
        {secondary}
      </ListItemTextRoot>
    );
  }
);

export default ListItemText;
