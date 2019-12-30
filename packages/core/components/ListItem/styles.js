export default theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: 15,
    minHeight: 44,
    verticalAlign: 'middle',
    overflow: 'hidden',
    transition: 'background-color 200ms',
    alignItems: 'center',
    marginBottom: -1,
    '&[disabled], &[disabled] $extra, &[disabled] [role=brief]': {
      pointerEvents: 'none',
      cursor: 'default',
      color: theme.palette.action.disabled,
    },
    '&:last-child $line': {
      ...theme.hairline.remove('bottom'),
    }
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
    color: '#c7c7c7'
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
    ...theme.typography.body1
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