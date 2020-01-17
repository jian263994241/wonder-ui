export default theme=>({
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
})