# @wonder-ui/styles

Jss style rules

## createUseStyles
```jsx
import { createUseStyles } from '@wonder-ui/styles';

const useStyles = createUseStyles({
  root: {
    width: 100,
    height: 100
  }
})

export default function ComponentWithHook(props){
  const classes = useStyles(props);
  return (
    <div className={classes.root}>...</div>
  )
}

```

## withStyles


```jsx
import { withStyles, createStyles } from '@wonder-ui/styles';

class Component extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>...</div>
    )
  }
}

const styles = createStyles({
  root: {
    width: 100,
    height: 100
  }
})

export default withStyles(styles)(Component);
```
