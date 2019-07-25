import React from 'react';
import { WUI_backdrop } from './styles';
import Fade from '../fade';

const Backdrop = React.forwardRef(({ visible, timeout, ...rest}, ref)=> {

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
        ref={backdropRef}
      />
    </Fade>
  )
})



export default Backdrop;