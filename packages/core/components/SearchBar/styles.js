export default theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: 44,
    display: 'flex',
    position: 'relative',
  },
  bordered: {
    ...theme.hairline.create('bottom', '#ddd')
  },
  body: {
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    padding: '5px 0 5px 10px',
    boxSizing: 'border-box'
  },
  input: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    borderRadius: 8,
    display: 'flex',
    paddingRight: 10,
    paddingLeft: 10,
    width: '100%',
    flex: 1,
    transition: theme.transitions.create('all'),
    '& > input': {
      ...theme.typography.body2,
      width: '100%',
      height: '100%',
      border: 0,
      boxSizing: 'border-box',
      padding: '0 5px',
      outline: 'none',
      backgroundColor: 'transparent',
      appearance: 'none',
    },
    '& input::-webkit-search-decoration, & input::-webkit-search-cancel-button': {
      display: 'none'
    }
  },
  inputStart: {
    marginRight: 68
  },
  iconSearch: {
    display: 'inline-block',
    width: 20,
    height: 15,
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '15px auto',
    alignSelf: 'center',
    backgroundImage: theme.svg.create(`<svg width="38" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M29.05 25.23a15.81 15.81 0 0 0 3.004-9.294c0-8.8-7.17-15.934-16.017-15.934C7.192.002.02 7.136.02 15.936c0 8.802 7.172 15.937 16.017 15.937a16 16 0 0 0 10.772-4.143l8.873 8.232 2.296-2.45-8.927-8.282zM16.2 28.933c-7.19 0-13.04-5.788-13.04-12.903 0-7.113 5.85-12.904 13.04-12.904 7.19 0 12.9 5.79 12.9 12.904 0 7.115-5.71 12.903-12.9 12.903z" fill="#bbb" fill-rule="evenodd"/></svg>`),
  },
  iconClear: {
    width: 20,
    height: '100%',
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '15px 15px',
    position: 'relative',
    alignSelf: 'center',
    backgroundImage: theme.svg.create(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#ccc"/><path stroke="#fff" stroke-width="2" stroke-miterlimit="10" d="M8 8l12 12"/><path fill="none" stroke="#fff" stroke-width="2" stroke-miterlimit="10" d="M20 8L8 20"/></svg>`),
  },
  cancelText: {
    display: 'block',
    alignSelf: 'center',
    color: theme.palette.primary.main,
    transition: theme.transitions.create('opacity'),
    padding: '0 20px',
    position: 'absolute',
    right: 0,
    opacity: 1,
  },
  extra: {
    alignSelf: 'center'
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0
  },
  hide: {
    display: 'none'
  },
  end: {
    paddingLeft: 10
  }
})