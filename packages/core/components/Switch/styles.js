export const creatColor = color => color && {
  background: color,
}

export default theme => ({
  root: {
    width: 51,
    height: 31,
    display: 'inline-block',
    borderRadius: 31,
    background: theme.palette.background.default,
    zIndex: 0,
    margin: 0,
    padding: 0,
    appearance: 'none',
    border: 0,
    transition: 'all .3s',
    boxSizing: 'border-box',
    position: 'relative',
    cursor: 'pointer',
    '&:before': {
      width: 48,
      height: 28,
      boxSizing: 'border-box',
      zIndex: 1,
      content: '" "',
      position: 'absolute',
      left: 1.5,
      top: 1.5,
      borderRadius: 28,
      background: '#fff',
      transition: 'all .2s',
      transform: 'scale(1)',
    },
    '&:after': {
      width: 28,
      height: 28,
      boxSizing: 'border-box',
      zIndex: 2,
      content: '" "',
      position: 'absolute',
      left: 1.5,
      top: 1.5,
      borderRadius: 28,
      background: '#fff',
      transition: 'all .2s',
      transform: 'translateX(0)',
      boxShadow: theme.shadows[1]
    }
  },
  checked: {
    ...creatColor(theme.palette.primary.main),
    '&:before': {
      transform: 'scale(0)',
    },
    '&:after': {
      transform: 'translateX(20px)'
    }
  }
})