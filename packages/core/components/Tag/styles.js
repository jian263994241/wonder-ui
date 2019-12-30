export default theme =>({
  root: {
    ...theme.typography.body2,
    ...theme.typography.ellipsis,
    display: 'inline-block',
    padding: '0 7px',
    cursor: 'default',
    verticalAlign: 'middle',
    opacity: 1,
    border: '1px solid #ddd',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary.main,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    transition: theme.transitions.create('all'),
    marginLeft: theme.spacing(1),
    '&:firstChild': {
      marginLeft: 0
    }
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    userSelect: 'none',
    whiteSpace: 'nowrap',
    cursor: 'inherit',
  },
  clickable: {
    '&.active-state': {
      opacity: 0.8,
    },
  },
  outlined: {
    backgroundColor: 'transparent'
  },
  checked: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  }
})