import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useForkRef from '@wonder-ui/utils/useForkRef';
import withStyles from '../withStyles';

const ScrollContent = React.forwardRef(function ScrollContent(props, ref){
  const { 
    children,
    classes,
    className,
    ...rest
  } = props;

  const blockTouchMove = React.useRef(false);

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
          blockTouchMove.current = false;
          return scrollToEnd(el);
      }
      // Else block touchmove
      else {
          blockTouchMove.current = true;
      }

  }

  const onTouchMove = (e) => {
    if (blockTouchMove.current) {
        e.preventDefault();
    }
  }

  const onTouchEnd = (e) => {
    blockTouchMove.current = false;
  }

  const handleEvents = { 
    onTouchStart, 
    onTouchMove, 
    onTouchEnd, 
    onTouchCancel: onTouchEnd 
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
      {...handleEvents}
      ref={handleRef}
    >
      <div className={classes.body}>{children}</div>
    </div>
  )
});

ScrollContent.componentClass = {
  className: PropTypes.string
};


ScrollContent.displayName = 'ScrollContent';

export default withStyles({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    boxSizing: 'border-box',
    willChange: 'scroll-position',
    touchAction: 'pan-x pan-y',
    position: 'relative',
    zIndex: 1,
  },
  body: {
    width: '100%',
    minHeight: '100%',
    '.device-ios &': {
      minHeight: '100.3%',
    }
  }
})(ScrollContent);