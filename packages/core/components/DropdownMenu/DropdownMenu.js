import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop';
import Slide from '../Slide';
import { withStyles } from '@wonder-ui/styles';
import clsx from 'clsx';

const styles = theme =>({
  root: {
    width: '100%',
    height: theme.shape.barHeight,
    display: 'flex',
    ...theme.hairline.create('top'),
    position: 'relative',
  },
  content: {
    position: 'absolute',
    width: '100%',
    top: theme.shape.barHeight,
    left: 0,
    zIndex: 889,
  },
  backdrop: {
    zIndex: 888,
  },
  hidden: {
    display: 'none'
  }
});

function DropdownMenu(props) {
  const { 
    classes,
    className,
    children,
    overlay = true,
  } = props;

  const [ currentIndex, setCurrentIndex ] = React.useState('');
  const handleVisible = (visibleIndex)=>{
    if(currentIndex === visibleIndex){
      setCurrentIndex('')
    }else{
      setCurrentIndex(visibleIndex);
    }
  };

  const handleCancel = ()=>{
    setCurrentIndex('')
  };

  
  return (
    <div className={clsx(classes.root, className)}>
      {
        React.Children.toArray(children).map((child, index)=>{
          return React.cloneElement(child, { 
            itemIndex: index,
            onClick: handleVisible.bind(null, index),
            visible: currentIndex === index,
          })
        })
      }
      {
        React.Children.toArray(children).map((child, index)=>{
          const isVisible = currentIndex === index;
          const isOtherVisible = !isVisible && currentIndex !== '';
          
          return (
            <Slide 
              key={index} 
              in={isVisible}
              direction="down"
            >
              <div 
                className={classes.content}
                style={{display: isOtherVisible ? 'none': 'block'}}
              >{
                typeof child.props.children === 'function' ? 
                  child.props.children({visible: isVisible, onCancel: handleCancel}) : 
                  child.props.children
              }</div>
            </Slide>
          )
        })
      }
      {
        overlay && (
          <Backdrop 
            classes={{root: classes.backdrop}} 
            visible={currentIndex!==''}
            onClick={handleCancel}
          />
        )
      }
    </div>
  )
};

DropdownMenu.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  overlay: PropTypes.bool,
};


export default withStyles(styles, { name: 'DropdownMenu' })(DropdownMenu);