import React from 'react';
import Button from '../Button';
import Arrow from '../icons/Arrow';
import withStyles from '../styles/withStyles';

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


export default withStyles({
  root: {
    minWidth: 50
  },
  arrow: {
    display: 'block',
    width: 15,
    height: 15,
    color: '#c7c7c7',
    transform: 'rotate(180deg)'
  }
})(BackButton);