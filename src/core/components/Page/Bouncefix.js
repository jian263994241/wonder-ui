import React from 'react';
import PropTypes from 'prop-types';
import { useForkRef } from '../../utils/reactHelpers';

const Bouncefix = React.forwardRef(function Bouncefix(props, ref){

  const { 
    componentClass,
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

  return React.createElement(componentClass, {...rest, ...handleEvents, ref: handleRef});
})

Bouncefix.componentClass = {
  componentClass: PropTypes.node
};

Bouncefix.defaultProps = {
  componentClass: 'div'
};

export default Bouncefix;