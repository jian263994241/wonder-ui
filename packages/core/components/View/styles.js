export default theme => ({
  root: {
    background: theme.palette.background.default,
    fontSize: theme.typography.fontSize,
    userSelect: 'none',
    highlight: 'none',  
    textSizeAdjust: '100%',
    fontSmoothing: 'antialiased',
    WebkitTouchCallout: 'none',
    tapHighlightColor: 'transparent',
  }
})