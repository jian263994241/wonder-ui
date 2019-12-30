
export default theme => {

  const textColor = {
    inherit: 'inherit',
    default: '#333',
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
  };
  
  const bgColor = {
    inherit: theme.palette.grey[300],
    default: theme.palette.grey[300],
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
  };
  

  return {
    root: {
      lineHeight: 1.75,
      textAlign: 'center',
      boxSizing: 'border-box',
      minWidth: 56,
      borderRadius: theme.shape.borderRadius,
      transition: 'opacity ease 200ms', 
      '&:active': {
        opacity: 0.75
      },
      '&[disabled]': {
        opacity: 0.38,
        pointerEvents: 'none', // Disable link interactions
        cursor: 'not-allowed',
      }
    },
    body: {
      alignSelf: 'center',
      wordBreak: 'keep-all',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    sizeSmall: {
      padding: '0px 4px',
      fontSize: theme.typography.pxToRem(13),
    },
    sizeMedium: {
      padding: '4px 16px',
      fontSize: theme.typography.pxToRem(14),
    },
    sizeLarge: {
      padding: '8px 24px',
      fontSize: theme.typography.pxToRem(15),
    },
    variantText: {
      color: props => textColor[props.color]
    },
    variantOutlined: {
      color: props => textColor[props.color],
      border: props => `1px solid ${textColor[props.color]}`
    },
    variantContained: {
      color: props => theme.palette.getContrastText(bgColor[props.color]),
      backgroundColor: props => bgColor[props.color],
    },
    fullWidth: {
      width: '100%'
    },
    full: {
      width: '100%',
      height: '100%',
      borderRadius: 0
    }
  }
}

