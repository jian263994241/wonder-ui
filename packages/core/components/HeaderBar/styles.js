export default theme => ({
  root: {
    width: '100%',
    height: 44,
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    position: 'relative',
    boxSizing: 'border-box',
  },
  hairline: {
    ...theme.hairline.create('bottom')
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    alignSelf: 'center',
    wordBreak: 'keep-all',
    fontSize: 17,
    flex: 2,
  },
  left: {
    textAlign: 'left',
    alignSelf: 'center',
    wordBreak: 'keep-all',
    flex: 1,
  },
  right: {
    textAlign: 'right',
    alignSelf: 'center',
    wordBreak: 'keep-all',
    flex: 1,
  }
})