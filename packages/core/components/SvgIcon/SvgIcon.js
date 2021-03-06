import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';

const SvgIcon = React.forwardRef((props, ref) => {
  const {
    children,
    classes,
    className,
    color = 'inherit',
    component: Component = 'svg',
    fontSize = 'default',
    size: sizeInput,
    htmlColor,
    spin,
    titleAccess,
    viewBox = '0 0 24 24',
    ...rest
  } = props;

  const size = sizeInput || fontSize;

  return (
    <Component
      className={clsx(
        classes.root,
        {
          [`fontSize${capitalize(size)}`]: size !== 'default',
          [`color${capitalize(color)}`]: color !== 'inherit',
          spin: !!spin,
        },
        className,
      )}
      color={htmlColor}
      focusable="false"
      viewBox={viewBox}
      aria-hidden={titleAccess ? 'false' : 'true'}
      role={titleAccess ? 'img' : 'presentation'}
      ref={ref}
      {...rest}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
});

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'action',
    'warning',
    'info',
    'success',
    'error',
    'disabled',
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  size: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this property.
   */
  shapeRendering: PropTypes.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string,
};

SvgIcon.displayName = 'SvgIcon';

export default withStyles(styles)(SvgIcon);
