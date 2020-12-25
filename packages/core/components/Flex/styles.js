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

export default (theme) => ({
  root: {
    display: (props) => (props.inline ? 'inline-flex' : 'flex'),
    alignContent: (props) => alias[props.alignContent],
    alignItems: (props) => alias[props.align],
    flexDirection: (props) => alias[props.direction],
    flexWrap: (props) => alias[props.wrap],
    justifyContent: (props) => alias[props.justify],
    textAlgin: 'left',
    '&& > *': {
      marginRight: (props) => theme.spacing(props.gutter) || 0,
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  flex: {
    '& > *': {
      boxSizing: 'border-box',
      flex: 1,
      width: '100%',
    },
  },
});
