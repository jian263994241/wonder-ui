import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import withStyles from '../withStyles';

const Typography = React.forwardRef(function Typography(props, ref) {
  const { 
    classes, 
    className, 
    color = 'inherit',
    component = 'div', 
    inline, 
    type, 
    ...rest 
  } = props;
  return React.createElement(component, {
    ref,
    className: clsx(
      classes.root, 
      classes[type],
      classes[`color${capitalize(color)}`],
      {
        [classes.inline]: inline,
      },
      className
    ),
    ...rest
  })
})

Typography.defaultProps = {
  component: 'span',
  type: 'default'
}

Typography.propTypes = {
  component: PropTypes.string,
  classes: PropTypes.object,
  type: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','caption','default']).isRequired,
  inline: PropTypes.bool,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'warning', 'info', 'success', 'error']),
};

Typography.displayName = 'Typography';

export default withStyles(theme=>({
  root: {
    display: 'block',
    margin: 0,
  },
  inline: {
    display: 'inline-block',
  },
  colorInherit: {
    color: 'inherit',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  colorError: {
    color: theme.palette.error.main,
  },
  colorWarning: {
    color: theme.palette.warning.main,
  },
  colorSuccess: {
    color: theme.palette.success.main,
  },
  colorInfo: {
    color: theme.palette.info.main,
  },
  h1: {
    ...theme.typography.h1,
  },
  h2: {
    ...theme.typography.h2,
  },
  h3: {
    ...theme.typography.h3,
  },
  h4: {
    ...theme.typography.h4,
  },
  h5: {
    ...theme.typography.h5,
  },
  h6: {
    ...theme.typography.h6,
  },
  subtitle1: {
    ...theme.typography.subtitle1,
  },
  subtitle2: {
    ...theme.typography.subtitle2,
  },
  caption : {
    ...theme.typography.caption,
    color: theme.palette.text.hint,
  },
  default : {
    ...theme.typography.body2,
  }
}))(Typography);