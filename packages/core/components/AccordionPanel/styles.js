export default theme => {

  return {
    root: {
      overflow: 'hidden',
    },
    transition: {
      transition: theme.transitions.create('height'),
    },
    hidden: {
      height: '0!important',
    }
  }
}