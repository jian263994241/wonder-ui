import * as React from 'react';
import styled from '../styles/styled';
import Typography, { TypographyProps } from '../Typography';
import useThemeProps from '../styles/useThemeProps';
import {
  COMPONENT_NAME,
  listItemTextClasses,
  useClasses
} from './ListItemTextClasses';
import { forwardRef } from '@wonder-ui/utils';

export interface ListItemTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /**
   *  Css api
   */
  classes?: Partial<typeof listItemTextClasses>;
  /**
   * Root element
   */
  component?: React.ElementType;
  /**
   * Primary text
   */
  primary?: React.ReactNode;
  /**
   * Primary TypographyProps
   */
  primaryTypographyProps?: TypographyProps;
  /**
   * Secondary text
   */
  secondary?: React.ReactNode;
  /**
   * Secondary TypographyProps
   */
  secondaryTypographyProps?: TypographyProps;
  /**
   * Disable Typography
   * @default false
   */
  disableTypography?: boolean;
}

const ListItemTextRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  color: 'inherit',
  flex: '1 1 auto'
});

const ListItemText = forwardRef<HTMLElement, ListItemTextProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
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
          variant="subtitle1"
          className={classes.textPrimary}
          component="div"
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
          variant="subtitle2"
          component="div"
          className={classes.textSecondary}
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
