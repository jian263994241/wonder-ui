# @wonder-ui/styles

Jss style rules


style:  jssRules | (theme) => jssRules

## createUseStyles


createUseStyles(styles)


```jsx
import { createUseStyles } from '@wonder-ui/styles';

const useStyles = createUseStyles({
  root: {
    width: 100,
    height: 100
  }
})

export default function ComponentWithHook(){
  const classes = useStyles();
  return (
    <div className={classes.root}>...</div>
  )
}

```

## withStyles

withStyles(styles)(Component)

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



##  TS 写法


`createUseStyles` 在ts和js下写法差不多

`withStyles` 例子:


```tsx
import { withStyles, createStyles, ClassKeysOfStyles } from '@wonder-ui/styles';

const styles = createStyles({
  root: {
    color: 'red'
  },
  body: {}
});

type Props = {
  options?: object;
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
};

function Example_Origin(props: Props) {
  const { classes = {}, object } = props;

  return <div className={classes.root}>Example</div>;
}

withStyles(styles)(Example_Origin)

```
