import React from 'react';
import ReactDOM from 'react-dom';
import { WUI_preloader, WUI_poreloader_overlay, WUI_preloader_root } from './styles';
import defaultIndicator from './Indicator';
import { usePortal, render } from '../../utils/reactUtils';


const Preloader = (props)=>{
  const {
    indicator: Indicator = defaultIndicator,
    color = '#fff',
    containerId = 'root',
    navbarHeight = 0,
    styles = {},
  } = props;
  
  const createPortal = usePortal(containerId);

  return createPortal(
    <>
      <WUI_poreloader_overlay onTouchMove={e=>e.preventDefault()} />    
      <WUI_preloader_root navbarHeight={navbarHeight} css={styles.root}>
        <WUI_preloader css={styles.content}>
          <Indicator color={color}/>
        </WUI_preloader>
      </WUI_preloader_root>
    </>
  );
}


const container = document.createElement('div');

container.setAttribute('id', 'aaaa')

let showing = false;

Preloader.show = (props)=> {
  // if(!showing){    
  //   showing = true;
  //   ReactDOM.render(React.createElement('div'), container);
  // }

  ReactDOM.render(<Preloader/>, container);
}

Preloader.hide = ()=> {
  // if(showing){
    
  //   ReactDOM.unmountComponentAtNode(container)
    
  // }
}

export default Preloader;