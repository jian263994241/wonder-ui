import React from 'react';
import PropTypes from 'prop-types';
import { createStyles } from '@wonder-ui/styles';
import BackButton from './BackButton';

const styles = (theme)=>{

  const {hairline, typography, palette} = theme;
  
  const flexItem = {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  }

  return {
    root: {
      fontFamily: typography.fontFamily,
      position: 'relative',
      height: 45,
      textAlign: 'center',
      backgroundColor: '#fff',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      ...hairline.create('bottom', '#ccbfbf').object,
    },
    title: {
      ...flexItem,
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: 18,
      justifyContent: 'center',
      whiteSpace: 'nowrap'
    },
    left: {
      ...flexItem,
      fontSize: 16,
    },
    right: {
      ...flexItem,
      justifyContent: 'flex-end',
      fontSize: 16,
    }
  }
}


export function Navbar(props){
  const {
    title,
    classes,
    leftContent,
    rightContent,
    showBackButton,
    slotName,
  } = props;

  return (
    <div css={classes.root}>
      <div css={classes.left}>
        {showBackButton && <BackButton/> }
        {leftContent}
      </div>
      <div css={classes.title}>{title}</div>
      <div css={classes.right}>{rightContent}</div>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.node,
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default createStyles(styles)(Navbar);