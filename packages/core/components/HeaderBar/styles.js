import { fade } from '@wonder-ui/styles/colorManipulator';

export default theme => ({
  root: {
    width: '100%',
    height: theme.shape.barHeight,
    display: 'flex',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'space-between',
    position: 'relative',
    boxSizing: 'border-box',
    userSelect: 'none',
    zIndex: theme.zIndex.appBar,
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
  },
  left: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    wordBreak: 'keep-all',
    flex: 1,
    flexShrink: 0,
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    wordBreak: 'keep-all',
    flex: 1,
    flexShrink: 0,
  },
  defaultIcon: {
    color: fade(theme.palette.text.primary, 0.3),
    marginLeft: theme.spacing(1),
    lineHeight: 1
  }
})