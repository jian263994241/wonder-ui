import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getDisplayName from '@wonder-ui/utils/getDisplayName';
import chainPropTypes from '@wonder-ui/utils/chainPropTypes';
import makeStyles from '../makeStyles';
import clsx from '../classnames';

export default function styled(Component) {
  const componentCreator = (style, options = {}) => {
    const { name, ...stylesOptions } = options;

    if (process.env.NODE_ENV !== 'production' && Component === undefined) {
      warning(
        false,
        [
          'You are calling styled(Component)(style) with an undefined component.',
          'You may have forgotten to import it.',
        ].join('\n'),
      );
      return ;
    }

    let classNamePrefix = name;

    if (process.env.NODE_ENV !== 'production') {
      if (!name) {
        // Provide a better DX outside production.
        const displayName = getDisplayName(Component);
        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    const stylesOrCreator =
      typeof style === 'function'
        ? theme => ({ root: props => style({ theme, ...props }) })
        : { root: style };
    
    const useStyles = makeStyles(stylesOrCreator, {
      Component,
      name: name || Component.displayName,
      classNamePrefix,
      ...stylesOptions,
    });

    let filterProps;
    let propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }

    /* eslint-disable react/forbid-foreign-prop-types */
    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */

    const StyledComponent = React.forwardRef(function StyledComponent(props, ref) {
      const {
        children,
        className: classNameProp,
        clone,
        component: ComponentProp,
        ...other
      } = props;
      const classes = useStyles(props);
      const className = clsx(classes.root, classNameProp);

      let spread = other;
      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return React.cloneElement(children, {
          className: clsx(children.props.className, className),
          ...spread,
        });
      }

      if (typeof children === 'function') {
        return children({ className, ...spread });
      }

      const FinalComponent = ComponentProp || Component;

      return (
        <FinalComponent ref={ref} className={className} {...spread}>
          {children}
        </FinalComponent>
      );
    });

    StyledComponent.propTypes = {
      /**
       * A render function or node.
       */
      children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
      /**
       * @ignore
       */
      className: PropTypes.string,
      /**
       * If `true`, the component will recycle it's children DOM element.
       * It's using `React.cloneElement` internally.
       *
       * This prop will be deprecated and removed in v5
       */
      clone: chainPropTypes(PropTypes.bool, props => {
        if (props.clone && props.component) {
          return new Error('You can not use the clone and component prop at the same time.');
        }
        return null;
      }),
      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: PropTypes.elementType,
      ...propTypes,
    };

    if (process.env.NODE_ENV !== 'production') {
      StyledComponent.displayName = `Styled(${classNamePrefix})`;
    }

    hoistNonReactStatics(StyledComponent, Component);

    return StyledComponent;
  };

  return componentCreator;
}


function omit(input, fields) {
  const output = {};

  Object.keys(input).forEach(prop => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });

  return output;
}
