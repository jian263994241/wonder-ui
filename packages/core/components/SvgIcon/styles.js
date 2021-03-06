export default theme =>({
  '@keyframes spin': {
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    stroke: 'currentColor',
    flexShrink: 0,
    fontSize: theme.typography.pxToRem(24),
    verticalAlign: 'middle',
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter,
    }),
    '&.spin' : {
      animation: '$spin 1s steps(12, end) infinite',
    },
    /* Styles applied to the root element if `color="primary"`. */
    '&.colorPrimary': {
      color: theme.palette.primary.main,
    },
    /* Styles applied to the root element if `color="secondary"`. */
    '&.colorSecondary': {
      color: theme.palette.secondary.main,
    },
    /* Styles applied to the root element if `color="action"`. */
    '&.colorAction': {
      color: theme.palette.action.active,
    },
    /* Styles applied to the root element if `color="warning"`. */
    '&.colorWarning': {
      color: theme.palette.warning.main,
    },
    /* Styles applied to the root element if `color="info"`. */
    '&.colorInfo': {
      color: theme.palette.info.main,
    },
    /* Styles applied to the root element if `color="success"`. */
    '&.colorSuccess': {
      color: theme.palette.success.main,
    },
    /* Styles applied to the root element if `color="error"`. */
    '&.colorError': {
      color: theme.palette.error.main,
    },
    /* Styles applied to the root element if `color="disabled"`. */
    '&.colorDisabled': {
      color: theme.palette.action.disabled,
    },
    /* Styles applied to the root element if `fontSize="inherit"`. */
    '&.fontSizeInherit': {
      fontSize: 'inherit',
    },
    /* Styles applied to the root element if `fontSize="small"`. */
    '&.fontSizeSmall': {
      fontSize: theme.typography.pxToRem(20),
    },
    /* Styles applied to the root element if `fontSize="large"`. */
    '&.fontSizeLarge': {
      fontSize: theme.typography.pxToRem(35),
    }
  }
})