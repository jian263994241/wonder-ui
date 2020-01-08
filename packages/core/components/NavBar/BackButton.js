import React from 'react';
import Arrow from '../icons/Arrow';
import Button from '../Button';
import withStyles from '../withStyles';
import { fade } from '../styles/colorManipulator';

function BackButton({classes}) {
  return (
    <Button 
      back 
      variant="text" 
      size="small"
      className={classes.root}
    > 
      <Arrow className={classes.arrow}/> 
    </Button>
  )
}


export default withStyles(theme=>({
  root: {
    minWidth: 50
  },
  arrow: {
    display: 'block',
    width: 15,
    height: 15,
    color: fade(theme.palette.text.primary, 0.3),
    transform: 'rotate(180deg)'
  }
}))(BackButton);