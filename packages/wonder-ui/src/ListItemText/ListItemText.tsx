import * as React from 'react';
import styled from '../styles/styled';
import Typography, { TypographyProps } from '../Typography';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import type { RestProps, ClassNameMap } from '../styles/types';

export interface ListItemTextProps {
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * @description Css api
   */
  classes?: ClassNameMap<'root' | 'primary' | 'secondary'>;
  /**
   * className
   */
  className?: string;
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
   * ref
   */
  ref?: React.Ref<any>;
  /**
   * style
   */
  style?: React.CSSProperties;
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

const ListItemText: React.FC<ListItemTextProps & RestProps> = React.forwardRef(
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

    const styleProps = {};

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
