export default theme => ({
  root: {
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    height: '100%',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    '&.white': {
      background: theme.palette.background.paper
    }
  },
  body: {
    flexShrink: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  }
})
