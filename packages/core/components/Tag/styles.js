import { colorManipulator } from '@wonder-ui/styles';

const { fade, darken } = colorManipulator;

export function createColor(color = '') {
  if (color.charAt(0) != '#') return null;
  return {
    color: color,
    backgroundColor: fade(color, 0.1),
    borderColor: fade(color, 0.6),
    '&:after': {
      borderColor: fade(color, 0.6),
    },
  };
}

export default (theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(12),
    display: 'inline-block',
    padding: '4px 8px',
    cursor: 'default',
    verticalAlign: 'middle',
    opacity: 1,
    border: '1px solid currentColor',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['background', 'color']),
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    position: 'relative',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
  hairline: {
    border: 0,
    '&:after': {
      content: '""',
      position: 'absolute',
      boxSizing: 'border-box',
      borderRadius: theme.shape.borderRadius * 2,
      border: '1px solid currentColor',
      opacity: 0.6,
      left: 0,
      top: '-50%',
      right: '-100%',
      bottom: '-50%',
      transform: 'scale(0.5)',
      transformOrigin: 'left',
    },
  },
  colorPrimary: {
    ...createColor(theme.palette.primary.main),
  },
  colorSecondary: {
    ...createColor(theme.palette.secondary.main),
  },
  sizeSmall: {
    fontSize: theme.typography.pxToRem(10),
    padding: '2px 4px',
  },
  sizeLarge: {
    fontSize: theme.typography.pxToRem(14),
    padding: '6px 12px',
  },
  clickable: {
    backgroundColor: darken(theme.palette.background.default, 0.08),
    border: '1px solid transparent',
    '&:after': {
      display: 'none',
    },
    '&[disabled]': {
      pointerEvents: 'none', // Disable link interactions
      cursor: 'not-allowed',
      color: theme.palette.action.disabled,
      background: theme.palette.action.disabledBackground,
    },
  },
  checked: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderColor: 'transparent',
    '&[disabled]': {
      color: theme.palette.primary.contrastText,
      background: fade(theme.palette.primary.main, 0.5),
    },
  },
});
