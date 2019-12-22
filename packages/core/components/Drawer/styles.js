export default theme => ({
  root: {
    position: 'absolute',
    overflow: 'hidden',
    outline: 0,
    backgroundColor: '#fff',
    boxShadow: theme.shadows[16],
    zIndex: theme.zIndex.drawer,
  },
  anchorLeft: {
    top: 0,
    left: 0,
    right: 'auto',
    height: '100%',
    borderRight: theme.palette.divider
  },
  anchorRight: {
    top: 0,
    left: 'auto',
    right: 0,
    height: '100%',
    borderLeft: theme.palette.divider
  },
  anchorTop: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 'auto',
    maxHeight: '100%',
    borderBottom: theme.palette.divider
  },
  anchorBottom: {
    top: 'auto',
    left: 0,
    right: 0,
    bottom: 0,
    maxHeight: '100%',
    borderTop: theme.palette.divider
  },
})