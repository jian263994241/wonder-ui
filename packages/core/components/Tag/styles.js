import { fade, darken } from "@wonder-ui/styles/colorManipulator";

export function createColor(color = ''){
  if(color.charAt(0) != '#') return null;
  return {
    color: color,
    backgroundColor: fade(color, 0.1),
    '&:after': {
      borderColor: fade(color, 0.6),
    }
  }
}

export default theme =>({
  root: {
    ...theme.typography.body2,
    display: 'inline-block',
    padding: '2px 8px',
    cursor: 'default',
    verticalAlign: 'middle',
    opacity: 1,
    border: 0,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['background', 'color']),
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    position: 'relative',
    boxSizing: 'border-box',
    '& + &': {
      marginLeft: theme.spacing(1),
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      boxSizing: 'border-box',
      borderRadius: theme.shape.borderRadius * 2,
      border: '1px solid currentColor',
      opacity: 0.6,
      left: 0,
      top: '-50%',
      right:  '-100%',
      bottom: '-50%',
      transform: 'scale(0.5)',
      transformOrigin: 'left',
    }
  },
  colorPrimary: {
    ...createColor(theme.palette.primary.main),
  },
  colorSecondary: {
    ...createColor(theme.palette.secondary.main),
  },
  clickable: {
    backgroundColor: darken(theme.palette.background.default, 0.08),
    borderColor: 'transparent',
    '&:after': {
      display: 'none'
    },
    '&[disabled]': {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'not-allowed',
      color: theme.palette.action.disabled,
      background: theme.palette.action.disabledBackground,
    }
  },
  checked: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderColor: 'transparent',
    '&[disabled]': {
      color: theme.palette.primary.contrastText,
      background: fade(theme.palette.primary.main, 0.5),
    }
  }
})