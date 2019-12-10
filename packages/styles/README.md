# @wonder-ui/styles

Fork on https://github.com/mui-org/material-ui/tree/master/packages/material-ui-styles

```
npm install --save @wonder-ui/styles
```

## API 

### styled

styled(Component)(styles, [options]) => Component

```js
import React from 'react';

const Button = styled('button')({
  color: 'blue'
})

const Button2 = styled.button({
  color: 'blue'
})

const Button3 = styled.button `
  color: blue;
`;

export default function Example(){
  return (
    <Button> Bule Button </Button>
  )
}

```

### ThemeProvider

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>...</ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

### withStyles

withStyles(styles, [options]) => higher-order component

```js
import React from 'react';
import { withStyles } from '@wonder-ui/styles';

const styles = {
  root: {
    color: 'blue'
  }
};

const Button = ({classes})=>{
  return (
    <div className={classes.root}> Button </div>
  )
}

export default withStyles(styles)(Button);
```

或者使用`修饰器`:

```js
import React from 'react';
import { withStyles } from '@wonder-ui/styles';

const styles = {
  root: {
    color: 'blue'
  }
};

@withStyles(styles)
export default class Button extends React.Component{
  render(){
    const {classes} = this.props;
    return (
      <div className={classes.root}> Button </div>
    )
  }
}

```

### withTheme

withTheme(Component) => Component

```js
import React from 'react';
import { withTheme } from '@wonder-ui/styles';

const Button = ({theme})=>(
  <div style={{color: theme.color}}>Button</div>
)

export default withTheme(Button);
```


### useTheme

useTheme() => theme

该钩子返回theme对象因此可以在函数组件中使用。

### makeStyles

makeStyles(styles, [options]) => hook

链路的样式表中有一个功能组件的使用钩的模式。