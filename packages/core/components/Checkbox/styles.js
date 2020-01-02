export default theme=>({
  root: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 21,
    height: 21,
    '&[disabled]': {
      opacity: 0.45
    }
  },
  body: {
    position: 'absolute',
    right: 0,
    width: 21,
    height: 21,
    border: '1px solid #ccc',
    borderRadius: '50%',
    transform: 'rotate(0deg)',
    boxSizing: 'border-box',
  },
  checked: {
    borderColor: theme.palette.primary.main,
    background: theme.palette.primary.main,
    '&::after': {
      position: 'absolute',
      display: 'block',
      top: 1.5,
      right: 6,
      zIndex: 999,
      width: 5,
      height: 11,
      borderStyle: 'solid',
      borderWidth: '0 1px 1px 0',
      content: '\'\\0020\'',
      transform: 'rotate(45deg)',
      borderColor: '#fff',
    },
  }
})