import React from 'react';
import PropTypes from 'prop-types';
import useForkRef from '@wonder-ui/utils/useForkRef';
import { withStyles, classnames } from '@wonder-ui/styles';

const ScrollContent = React.forwardRef(function ScrollContent(props, ref){

  const { 
    componentClass: Component,
    classes,
    className,
    ...rest
  } = props;

  const [_blockTouchMove, set_blockTouchMove] = React.useState(false);
  const root = React.useRef(null);
  const handleRef = useForkRef(root, ref);

  const scrollToEnd = (el) => {
    var curPos = el.scrollTop,
        height = el.offsetHeight,
        scroll = el.scrollHeight;

    // If at top, bump down 1px
    if(curPos <= 0) { el.scrollTop = 1; }

    // If at bottom, bump up 1px
    if(curPos + height >= scroll) {
        el.scrollTop = scroll - height - 1;
    }
  }

  const onTouchStart = (e) => {
      var el = root.current;
      var touchEl = e.target;

      //fix ios 11
      if(!el.contains(touchEl)){
        return ;
      }

      var isScrollable = el.scrollHeight > el.offsetHeight;
      
      // If scrollable, adjust
      if (isScrollable) {
          // this._blockTouchMove = false;
          set_blockTouchMove(false);
          return scrollToEnd(el);
      }
      // Else block touchmove
      else {
          // this._blockTouchMove = true;
          set_blockTouchMove(true);
      }

  }

  const onTouchMove = (e) => {
      if (_blockTouchMove) {
          e.preventDefault();
      }
  }

  const onTouchEnd = (e) => {
      // this._blockTouchMove = false;
      set_blockTouchMove(false);
  }

  const handleEvents = { 
    onTouchStart, 
    onTouchMove, 
    onTouchEnd, 
    onTouchCancel: onTouchEnd 
  };

  return (
    <Component
      className={classnames(classes.root, className)}
      {...rest}
      {...handleEvents}
      ref={handleRef}
    />
  )
})

ScrollContent.componentClass = {
  componentClass: PropTypes.node
};

ScrollContent.defaultProps = {
  componentClass: 'div'
};

export default withStyles({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    boxSizing: 'border-box',
    willChange: 'scroll-position',
    WebkitOverflowScrolling: 'touch',
  }
}, {name: 'ScrollContent'})(ScrollContent);