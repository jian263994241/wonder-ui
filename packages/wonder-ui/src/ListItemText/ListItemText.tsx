import * as React from 'react';
import styled from '../styles/styled';
import Typography, { TypographyProps } from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import { listItemTextClasses, useClasses } from './ListItemTextClasses';

export interface ListItemTextProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
  /**
   *  Css api
   */
  classes?: Partial<typeof listItemTextClasses>;
  /**
   * Root element
   */
  component?: React.ElementType;
  /**
   * @description Primary text
   */
  primary?: React.ReactNode;
  /**
   * @description Primary TypographyProps
   */
  primaryTypographyProps?: TypographyProps;
  /**
   * @description Secondary text
   */
  secondary?: React.ReactNode;
  /**
   * @description Secondary TypographyProps
   */
  secondaryTypographyProps?: TypographyProps;
  /**
   * @description Disable Typography
   * @default false
   */
  disableTypography?: boolean;
  /**
   * @ignore
   */
  ref?: React.Ref<any>;
}

const ListItemTextRoot = styled('div', {
  name: 'WuiListItemText',
  slot: 'Root'
})(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: 'inherit',
  verticalAlign: 'middle',
  userSelect: 'none',
  flex: '1 1 auto'
}));

const ListItemText = React.forwardRef<HTMLElement, ListItemTextProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiListItemText' });
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

    const styleProps = { ...props };

    const classes = useClasses(styleProps);

    if (primary != null && primary.type !== Typography && !disableTypography) {
      primary = (
        <Typography
          variant="body1"
          classes={{ root: classes.textPrimary }}
          component="span"
          color="textPrimary"
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
          classes={{ root: classes.textSecondary }}
          color="textSecondary"
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
        ref={ref as React.Ref<HTMLDivElement>}
        {...rest}
      >
        {primary}
        {secondary}
      </ListItemTextRoot>
    );
  }
);

export default ListItemText;
