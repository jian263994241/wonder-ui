const fontSize = 17;

export default theme =>({
  root: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(fontSize),
    lineHeight: theme.typography.pxToRem(fontSize),
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    marginBottom: -1,
    height: theme.typography.pxToRem(44),
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
    // },
  },
  multiline: {
    height: 'auto',
    minHeight: 44,
  },
  line: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingRight: 15,
    overflow: 'hidden',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    ...theme.hairline.create('bottom')
  },
  label: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(fontSize),
    marginLeft: 0,
    marginRight: theme.spacing(1),
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    padding: '4px 0',
    flexShrink: 0,
    '& + *': {
      width: '100%',
    },
    '&.label-size-2': {
      width: 2 * fontSize,
    },
    '&.label-size-3': {
      width: 3 * fontSize,
    },
    '&.label-size-4': {
      width: 4 * fontSize,
    },
    '&.label-size-5': {
      width: 5 * fontSize,
    },
    '&.label-size-6': {
      width: 6 * fontSize,
    },
    '&.label-size-7': {
      width: 7 * fontSize,
    },
  },
  input: {
    // lineHeight: theme.typography.pxToRem(fontSize),
    // height: theme.typography.pxToRem(fontSize),
    alignSelf: 'center',
  },
  extra: {
    color: theme.palette.text.secondary,
    textAlign: 'right',
    paddingLeft: theme.spacing(0.5),
    alignSelf: 'center',
  }
})