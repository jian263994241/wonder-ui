# @wonder-ui/styles

Jss style rules

## createUseStyles
```js
import { createUseStyles } from '@wonder-ui/styles';

const useStyles = createUseStyles({
  root: {
    width: 100,
    height: 100
  }
})

function ComponentWithHook(props){
  const classes = useStyles(props);
  return (
    <div className={classes.root}>...</div>
  )
}


```

## withStyles

```js
import { withStyles } from '@wonder-ui/styles';

class Component extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>...</div>
    )
  }
}

withStyles({
  root: {
    width: 100,
    height: 100
  }
})(Component)


```
