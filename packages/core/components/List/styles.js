export default (theme) => ({
  root: {
    ...theme.typography.body2,
    userSelect: 'none',
  },
  body: {
    position: 'relative',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    ...theme.hairline.create('top'),
    ...theme.hairline.create('bottom'),
  },
  header: {
    width: '100%',
    boxSizing: 'border-box',
    color: theme.palette.text.hint,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    display: 'flex',
    justifyContent: 'start',
    ...theme.typography.subtitle2,
  },
  footer: {
    width: '100%',
    boxSizing: 'border-box',
    color: theme.palette.text.hint,
    padding: '10px 15px',
    display: 'flex',
    justifyContent: 'start',
    ...theme.typography.caption,
  },
});
