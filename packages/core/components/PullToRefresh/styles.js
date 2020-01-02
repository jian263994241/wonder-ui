export default theme => ({
  root: {
    '&-content': {
      transformOrigin: 'left top 0',
    },
    '&-transition': {
      transition: 'transform 0.3s',
    },
    '&-indicator': {
      ...theme.typography.body2,
      color: theme.palette.text.hint,
      textAlign: 'center',
      height: 35,
    },
    '&-down &-indicator': {
      marginTop: -35,
    },
    '&-up &-indicator': {
      marginBottom: -35,
    }
  }
})