export default theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'inline-block',
  },
  /* Styles applied to the root element if `variant="static"`. */
  static: {
    transition: theme.transitions.create('transform'),
  },
  /* Styles applied to the root element if `variant="indeterminate"`. */
  indeterminate: {
    animation: '$circular-rotate 1.4s linear infinite',
  },
  /* Styles applied to the root element if `color="primary"`. */
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  /* Styles applied to the root element if `color="secondary"`. */
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  /* Styles applied to the `svg` element. */
  svg: {
    display: 'block', // Keeps the progress centered
  },
  /* Styles applied to the `circle` svg path. */
  circle: {
    stroke: 'currentColor',
    // Use butt to follow the specification, by chance, it's already the default CSS value.
    // strokeLinecap: 'butt',
  },
  /* Styles applied to the `circle` svg path if `variant="static"`. */
  circleStatic: {
    transition: theme.transitions.create('stroke-dashoffset'),
  },
  /* Styles applied to the `circle` svg path if `variant="indeterminate"`. */
  circleIndeterminate: {
    animation: '$circular-dash 1.4s ease-in-out infinite',
    // Some default value that looks fine waiting for the animation to kicks in.
    strokeDasharray: '80px, 200px',
    strokeDashoffset: '0px', // Add the unit to fix a Edge 16 and below bug.
  },
  '@keyframes circular-rotate': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  '@keyframes circular-dash': {
    '0%': {
      strokeDasharray: '1px, 200px',
      strokeDashoffset: '0px',
    },
    '50%': {
      strokeDasharray: '100px, 200px',
      strokeDashoffset: '-15px',
    },
    '100%': {
      strokeDasharray: '100px, 200px',
      strokeDashoffset: '-125px',
    },
  },
  /* Styles applied to the `circle` svg path if `disableShrink={true}`. */
  circleDisableShrink: {
    animation: 'none',
  },
});