export default {
  root: {
    boxSizing: 'border-box',
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#F4F5F7',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    '& > *': {
      flexShrink: 0
    }
  },
  body: {
    flexShrink: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  }
}

