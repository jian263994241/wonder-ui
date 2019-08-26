import React from 'react';
import { WUI_backdrop } from './styles';
import Fade from '../Fade';

const Backdrop = React.forwardRef((props, ref)=> {

  const { 
    visible, 
    timeout, 
    fixed, 
    ...rest
  } = props;

  const backdropRef = React.useRef();

  const touchmove = (e) => {
    e.preventDefault();
  }

  React.useEffect(()=>{

    if(ref){
      ref.current = backdropRef.current;
    }
    
    backdropRef.current.addEventListener('touchmove', touchmove, {passive: false});
  }, [])

  return (
    <Fade in={visible} timeout={timeout}>
      <WUI_backdrop 
        {...rest} 
        aria-hidden
        fixed={fixed}
        ref={backdropRef}
      />
    </Fade>
  )
})

Backdrop.defaultProps = {
  fixed: true
}



export default Backdrop;