export default theme => {
  const defaultValue = (a,b) => theme.spacing(a != undefined ? a : b);
  return {
    root: {
      ...theme.typography.body2,
      paddingTop: props => defaultValue(props.top, props.space),
      paddingBottom: props => defaultValue(props.bottom, props.space),
      paddingLeft: props => defaultValue(props.left, props.blank),
      paddingRight: props => defaultValue(props.right, props.blank),
      boxSizing: 'border-box',
    }
  }
}