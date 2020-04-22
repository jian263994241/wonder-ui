export default theme => {
  const defaultValue = (a,b) => theme.spacing(a != undefined ? a : b);
  return {
    root: {
      
    },
    header: {
      width: '100%',
      width: '100%',
      boxSizing: 'border-box',
      color: theme.palette.text.hint,
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      display: 'flex',
      justifyContent: 'start',
      ...theme.typography.subtitle2,
      paddingLeft: props => defaultValue(props.left, props.blank),
      paddingRight: props => defaultValue(props.right, props.blank),
    },
    body: {
      ...theme.typography.body2,
      paddingTop: props => defaultValue(props.top, props.space),
      paddingBottom: props => defaultValue(props.bottom, props.space),
      paddingLeft: props => defaultValue(props.left, props.blank),
      paddingRight: props => defaultValue(props.right, props.blank),
      boxSizing: 'border-box',
    },
    strong: {
      background: theme.palette.background.paper
    },
    inset: {
      borderRadius: theme.spacing(1),
      margin: `0 ${theme.spacing(2)}px`
    }
  }
}