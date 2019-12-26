export default theme => ({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontSize: theme.typography.fontSize,
      touchAction: 'manipulation',
      userSelect: 'none',
      highlight: 'none',  
      textSizeAdjust: '100%',
      fontSmoothing: 'antialiased',
      WebkitTouchCallout: 'none',
      tapHighlightColor: 'transparent',
    }
  }
})