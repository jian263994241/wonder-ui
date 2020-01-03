import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../withStyles';

const Typography = React.forwardRef(function Typography(props, ref) {
  const { 
    classes, 
    className, 
    component = 'div', 
    error, 
    inline, 
    primary, 
    secondary, 
    type, 
    ...rest 
  } = props;
  return React.createElement(component, {
    ref,
    className: clsx(
      classes.root, 
      classes[type],
      {
        [classes.inline]: inline,
        [classes.colorPrimary]: primary,
        [classes.colorSecondary]: secondary,
        [classes.colorError]: error,
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
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  error: PropTypes.bool,
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
  colorPrimary: {
    '&&':{
      color: theme.palette.primary.main,
    }
  },
  colorSecondary: {
   '&&':{
      color: theme.palette.secondary.main,
    }
  },
  colorError: {
    '&&': {
      color: theme.palette.error.main,
    }
  },
  h1: {
    ...theme.typography.h1,
    color: theme.palette.text.primary,
    
  },
  h2: {
    ...theme.typography.h2,
    color: theme.palette.text.primary,
  },
  h3: {
    ...theme.typography.h3,
    color: theme.palette.text.primary,
  },
  h4: {
    ...theme.typography.h4,
    color: theme.palette.text.primary,
  },
  h5: {
    ...theme.typography.h5,
    color: theme.palette.text.primary,
  },
  h6: {
    ...theme.typography.h6,
    color: theme.palette.text.primary,
  },
  subtitle1: {
    ...theme.typography.subtitle1,
    color: theme.palette.text.primary,
  },
  subtitle2: {
    ...theme.typography.subtitle2,
    color: theme.palette.text.primary,
  },
  caption : {
    ...theme.typography.caption,
    color: theme.palette.text.hint,
  },
  default : {
    ...theme.typography.body2,
    color: theme.palette.text.primary,
  }
}))(Typography);