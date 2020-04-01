import { fade } from "@wonder-ui/styles/colorManipulator";

export function createColor(color = ''){
  if(color.charAt(0) != '#') return null;
  return {
    color: color,
    backgroundColor: fade(color, 0.1),
    borderColor: fade(color, 0.6),
  }
}

export default theme =>({
  root: {
    ...theme.typography.body2,
    ...theme.typography.ellipsis,
    display: 'inline-block',
    padding: '2px 8px',
    cursor: 'default',
    verticalAlign: 'middle',
    opacity: 1,
    border: '1px solid #ddd',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    transition: theme.transitions.create('all'),
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    '& + &': {
      marginLeft: theme.spacing(1),
    }
  },
  colorPrimary: {
    ...createColor(theme.palette.primary.main),
  },
  colorSecondary: {
    ...createColor(theme.palette.secondary.main),
  },
  clickable: {
    backgroundColor: theme.palette.background.default,
    borderColor: 'transparent',
    '&.active-state': {
      opacity: 0.8,
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