export default theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    textDecoration: 'none',
    outline: 'none',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none',
    color: 'inherit',
    fontSize: 'inherit',
    background: 'transparent',
    WebkitTapHighlightColor: 'transparent',
    '&[disabled]': {
      pointerEvents: 'none',
      cursor: 'not-allowed'
    }
  }
})