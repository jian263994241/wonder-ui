# @wonder-ui/styles

fix react-jss ts types


## Example

```tsx
import * as React from 'react';
import { createStyles, withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';

const styles = createStyles({
  root: {
    color: 'red'
  }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classes: ClassKeysOfStyles<typeof styles>;
}

const Button = React.forwardRef(function Button(props: ButtonProps){
  const { classes, className, ...rest } = props;
  return <button className={classes.root + ' ' + className} {...rest}/>
})

export default withStyles(styles)(Button);

```
