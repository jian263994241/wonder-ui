import { fade } from '../styles/colorManipulator';

export default theme => ({
  root: {
    width: '100%',
    height: theme.typography.pxToRem(44),
    display: 'flex',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
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
    fontSize: theme.typography.pxToRem(17),
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
  },
  defaultIcon: {
    color: fade(theme.palette.text.primary, 0.3),
    marginLeft: theme.spacing(1),
    lineHeight: 1
  }
})