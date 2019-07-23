import React from 'react';
import ReactDOM from 'react-dom';
import { WUI_preloader, WUI_poreloader_overlay, WUI_preloader_root } from './styles';
import defaultIndicator from './Indicator';

const stage = document.createElement('div');

const Preloader = React.forwardRef((props, ref)=>{
  const {
    indicator: Indicator = defaultIndicator,
    container = document.body,
    color = '#fff',
    navbarHeight = 0
  } = props;

  return ReactDOM.createPortal(
    <>
      <WUI_poreloader_overlay onTouchMove={e=>e.preventDefault()} />    
      <WUI_preloader_root navbarHeight={navbarHeight}>
        <WUI_preloader>
          <Indicator color={color}/>
        </WUI_preloader>
      </WUI_preloader_root>
    </>,
    container
  )
})

Preloader.show = (props)=> ReactDOM.render(<Preloader {...props}/>, stage)

Preloader.hide = ()=> ReactDOM.unmountComponentAtNode(stage);

export default Preloader;