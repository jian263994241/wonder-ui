import { darken } from '@wonder-ui/styles/colorManipulator'

export default theme => ({
  root: {
    backgroundColor: 'transparent',
    backdropFilter: 'none',
    width: '100%',
    height: 44,
    display: 'flex',
    position: 'relative',
    zIndex: 200,
  },
  bordered: {
    ...theme.hairline.create('bottom', '#ddd')
  },
  body: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0 8px',
  },
  inputWrap: {
    flexShrink: 1,
    width: '100%',
    height: 32,
    position: 'relative',
  },
  input: {
    flexShrink: 1,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: darken(theme.palette.background.default, 0.07),
    paddingRight: 12,
    paddingLeft: 28, 
  },
  cancelText: {
    display: 'block',
    alignSelf: 'center',
    flexShrink: 0,
    color: theme.palette.primary.main,
    transform: 'translate3d(0,0,0)',
    transition: theme.transitions.create('all'),
    opacity: 0,
    marginRight: -80,
    fontSize: theme.typography.pxToRem(14)
  },
  inputStart: {
    '& $cancelText': {
      marginRight: 0,
      opacity: 1,
      marginLeft: 8,
    }
  },
  iconSearch: {
    width: 20,
    height: 15,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '15px auto',
    backgroundImage: theme.svg.create(`<svg width="38" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M29.05 25.23a15.81 15.81 0 0 0 3.004-9.294c0-8.8-7.17-15.934-16.017-15.934C7.192.002.02 7.136.02 15.936c0 8.802 7.172 15.937 16.017 15.937a16 16 0 0 0 10.772-4.143l8.873 8.232 2.296-2.45-8.927-8.282zM16.2 28.933c-7.19 0-13.04-5.788-13.04-12.903 0-7.113 5.85-12.904 13.04-12.904 7.19 0 12.9 5.79 12.9 12.904 0 7.115-5.71 12.903-12.9 12.903z" fill="#9D9D9D" fill-rule="evenodd"/></svg>`),
    position: 'absolute',
    left: 8,
    top: '50%',
    zIndex: 40,
    marginTop: -8
  },
  extra: {
    alignSelf: 'center',
  },
})