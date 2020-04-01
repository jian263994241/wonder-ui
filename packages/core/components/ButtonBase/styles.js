export default theme => ({
  root: {
    ...theme.typography.button,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent', // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
    border: 0,
    margin: 0, // Remove the margin in Safari
    borderRadius: 0,
    padding: 0, // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none', // Reset
    textDecoration: 'none',
    fontSize: 'inherit',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&.active-state': {
      opacity: 0.8,
    },
    '&::-moz-focus-inner': {
      borderStyle: 'none', // Remove Firefox dotted outline.
    },
    '&[disabled]': {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'not-allowed',
    }
  }
})