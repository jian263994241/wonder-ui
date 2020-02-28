export default theme => ({
  root: {
    textAlign: 'center',
    lineHeight: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(13),
    marginLeft: theme.spacing(1),
    alignSelf: 'center'
  },
  vertical: {
    flexDirection: 'column',
    '& $text': {
      marginLeft: 0,
      marginTop: theme.spacing(1),
    }
  },
})