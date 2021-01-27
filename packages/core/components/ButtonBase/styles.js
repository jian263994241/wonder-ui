import device from '@wonder-ui/utils/device';

export default (theme) => {
  const iOS10 = device.ios && device.osVersion.split('.')[0] === '10';
  return {
    root: {
      ...theme.typography.button,
      display: iOS10 ? 'inline-block' : 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
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
      },
    },
  };
};
