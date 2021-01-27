import { colorManipulator } from '@wonder-ui/styles';

const { fade, darken } = colorManipulator;

export default (theme) => ({
  root: {
    boxSizing: 'border-box',
    position: 'fixed',
    contain: 'content',
    width: 285,
    maxWidth: '100%',
    zIndex: theme.zIndex.modal,
    borderRadius: 13,
    color: theme.palette.text.primary,
    overflow: 'hidden',
    willChange: 'transform,opacity',
    outline: 'none',
    fontFamily: theme.typography.fontFamily,
    '&.toast': {
      zIndex: theme.zIndex.snackbar,
      textAlign: 'center',
    },
    '&.toast $body': {
      display: 'inline-block',
      borderRadius: 5,
      background: 'rgba(0,0,0,0.7)',
      '& $text': {
        color: theme.palette.getContrastText('rgba(0,0,0,0.7)'),
      },
    },
  },
  body: {
    padding: 15,
    borderRadius: '13px 13px 0 0',
    position: 'relative',
    background: theme.palette.background.default,
    fontSize: theme.typography.pxToRem(14),
    ...theme.hairline.create('bottom'),
    '&.noButtons': {
      borderRadius: 13,
      ...theme.hairline.remove('bottom'),
    },
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
    textAlign: 'center',
    fontWeight: 500,
    '& + $text': {
      marginTop: 5,
    },
  },
  text: {
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    textAlign: 'center',
    minWidth: 80,
    color: theme.palette.text.secondary,
  },
  buttonGroup: {
    position: 'relative',
    display: 'flex',
    height: 44,
    '&.vertical': {
      display: 'block',
      height: 'auto',
      '& $button': {
        borderRadius: 0,
        ...theme.hairline.remove('right'),
        ...theme.hairline.remove('top'),
        ...theme.hairline.create('bottom'),
        '&:last-child': {
          borderRadius: '0 0 13px 13px',
          ...theme.hairline.remove('bottom'),
        },
      },
    },
  },
  button: {
    width: '100%',
    padding: '0 5px',
    height: 44,
    fontSize: theme.typography.pxToRem(17),
    fontWeight: 'normal',
    lineHeight: '44px',
    textAlign: 'center',
    display: 'block',
    position: 'relative',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    boxSizing: 'border-box',
    flex: 1,
    color: fade(theme.palette.primary.main, 0.8),
    background: theme.palette.background.default,
    ...theme.hairline.create('right'),
    '&:active, &.active-state': {
      backgroundColor: fade(theme.palette.background.paper, 0.85),
    },
    '&:first-child': {
      borderRadius: '0 0 0 13px',
    },
    '&:last-child': {
      borderRadius: '0 0 13px 0',
    },
    '&:first-child:last-child': {
      borderRadius: '0 0 13px 13px',
    },
    '&.primary': {
      fontWeight: 500,
    },
  },
});
