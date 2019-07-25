import React from 'react';
import { WUI_preloader, WUI_poreloader_overlay, WUI_preloader_root } from './styles';
import defaultIndicator from './Indicator';
import { usePortal, createContainer } from '../../utils/reactUtils';
import Backdrop from '../backdrop';

const Preloader = (props)=>{
  const {
    indicator: Indicator = defaultIndicator,
    color = '#fff',
    containerId = 'wonder-modal',
    navbarHeight = 0,
    styles = {},
    visible = true,
  } = props;
  
  const createPortal = usePortal(containerId);

  return createPortal(
    <>
      <Backdrop visible={visible} invisible/>  
      {
        visible && (
          <WUI_preloader_root aria-hidden="true" navbarHeight={navbarHeight} css={styles.root}>
            <WUI_preloader color={color} css={styles.content}/>
          </WUI_preloader_root>
        )
      } 
    </>
  );
}

const render = createContainer('preloader');

Preloader.show = ()=> {
  render(<Preloader visible/>);
}

Preloader.hide = ()=> {
  render(<Preloader visible={false}/>);
}

export default Preloader;