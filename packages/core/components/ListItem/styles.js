import { fade } from '@wonder-ui/styles/colorManipulator';

export default theme => ({
  root: {
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    marginBottom: -1,
    minHeight: 44,
    overflow: 'hidden',
    paddingLeft: 15,
    position: 'relative',
    transition: 'background-color 200ms',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    '&[disabled], &[disabled] $extra, &[disabled] [role=brief]': {
      pointerEvents: 'none',
      cursor: 'default',
      color: theme.palette.action.disabled,
    },
    // '&:last-child $line': {
    //   ...theme.hairline.remove('bottom'),
    // }
  },
  activeState: {
    '&:active, &.active-state': {
      backgroundColor : theme.palette.action.hover
    }
  },
  media: {
    '&:first-child': { marginRight: 15 },
    '&:last-child': { marginLeft: 10 }
  },
  arrowVertical: { transform: 'rotate(90deg)' },
  arrowHorizontal: { transform: 'rotate(0deg)' },
  'arrowVertical-up' : { transform: 'rotate(270deg)' },
  arrowAlignTop: {
    alignSelf: 'baseline',
    position: 'relative',
    top: 3,
    marginLeft: 3,
  },
  arrowAlignCenter: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 3,
  },
  arrow: {
    display: 'block',
    width: 15,
    height: 15,
    marginLeft: 8,
    color: fade(theme.palette.text.primary, 0.3),
  },
  line: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingRight: 15,
    overflow: 'hidden',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    ...theme.hairline.create('bottom')
  },
  content: {
    flex: 1,
    textAlign: 'left',
  },
  alignTop: {
    alignSelf: 'baseline',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  ellipsis: {
    ...theme.typography.ellipsis
  },
  extra: {
    color: theme.palette.text.secondary,
    textAlign: 'right',
    paddingLeft: theme.spacing(0.5),
  }
})