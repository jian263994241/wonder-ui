import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase  from '../ButtonBase';
import { withStyles } from '@wonder-ui/styles';
import ArrowDropDownOutlined from '@wonder-ui/icons/ArrowDropDownOutlined';
import clsx from 'clsx';

const styles = theme =>({
  root: {
    width: '100%',
    position: 'relative',
    zIndex: 900,
    display: 'flex',
    backgroundColor: '#fff',
    transition: theme.transitions.create(['color']),
    ...theme.typography.body2,
    ...theme.hairline.create('bottom'),
    '& > span': {
      position: 'relative',
      width: '100%',
    },
    '& + & > span': {
      ...theme.hairline.create('left')
    }
  },
  icon: {
    transition: theme.transitions.create(['transform', 'fill']),
    position: 'relative',
    top: -1,
  },
  buttonActive: {
    color: '#237EFF',
    '& $icon': {
      transform: 'rotate(180deg)'
    },
  }
});

function DropdownMenuItem(props){
  const { 
    className,
    classes,
    title,
    visible,
    onClick,
    children,
  } = props;
  

  return (
    <ButtonBase
      className={clsx({
        [classes.root]: true, 
        [classes.buttonActive]: visible
      }, className)}
      onClick={onClick}
    >
      <span>{title}<ArrowDropDownOutlined className={classes.icon}/></span>
    </ButtonBase>
  )
}

DropdownMenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ]),
  classes: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.node,
  visible: PropTypes.bool,
};


export default withStyles(styles, { name: 'DropdownMenuItem' })(DropdownMenuItem);