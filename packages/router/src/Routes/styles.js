export default (theme) => ({
  '@global': {
    'html, body, #root': {
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0,
    },
  },
  root: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
    userSelect: 'none',
    highlight: 'none',
    textSizeAdjust: '100%',
    fontSmoothing: 'antialiased',
    WebkitTouchCallout: 'none',
    WebkitTapHighlightColor: 'transparent',
    background: theme.palette.background.default,
    fontSize: theme.typography.fontSize,
  },
});
