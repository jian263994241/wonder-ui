const alias = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  stretch: 'stretch',
  baseline: 'baseline',
  wrap: 'wrap',
  'wrap-reverse': 'wrap-reverse',
  column: 'column',
  'column-reverse': 'column-reverse',
};

export default theme =>({
  root: {
    textAlign: 'left',
    overflow: 'hidden',
    display: props => props.inline ? 'inline-flex': 'flex',
    justify: props => alias[props.justify],
    align: props => alias[props.align],
    alignContent: props => alias[props.alignContent],
    wrap: props => alias[props.wrap],
    direction: props => alias[props.direction],
    '& > *': {
      marginLeft: props => theme.spacing(props.gutter) || 0,
      '&:first-child':{
        marginLeft: 0
      }
    }
  },
  flex: {
    '& > *': {
      boxSizing: 'border-box',
      flex: 1,
      height: '100%',
      width: '100%',
    }
  }
})