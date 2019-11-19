# @wonder-ui/styles

## css prop

    To enable support for the css prop you have to use the Babel plugin.

```base
npm install --save-dev babel-plugin-styled-components
```

babel config

```js
{
  plugins: [
    ['styled-components', { displayName: true, fileName: false }]
  ]
}
```


## example 

### createStyles

```js
import { createStyles } from '@wonder-ui/styles';

const MyApp = ({classes})=>{
  return (
    <div css={classes.blue}>
      <span css={[classes.bold, classes.fontLarge]}>text</span>
    </div>
  )
}
const Demo = createStyles({
  blue: {
    color: 'blue'
  },
  bold: {
    fontWeight: 'bold'
  },
  fontLarge: {
    fontSize: 32
  }
})(MyApp);
```

### useStyles

```js
import { useStyles } from '@wonder-ui/styles';

const MyApp = ()=>{
  const classes = useStyles({
    blue: {
      color: 'blue'
    },
    bold: {
      fontWeight: 'bold'
    },
    fontSize: {
      fontSize: 32
    }
  });
  return (
    <div css={classes.blue}>
      <span css={[classes.bold, classes.fontSize]}>text</span>
    </div>
  )
}
```