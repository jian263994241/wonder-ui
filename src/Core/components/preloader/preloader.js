import React from 'react';
import ReactDOM from 'react-dom';
import { WUI_preloader, WUI_poreloader_overlay, WUI_preloader_root } from './styles';
import SvgIcon from '../svgIcon/svgIcon';
import $ from 'dom7';

const stage = document.createElement('div');

const indicator = ({color = '#6c6c6c'})=>(
  <SvgIcon 
    viewBox="0 0 120 120"
    width="35"
  >
    <defs>
      <line id='a1' x1='60' x2='60' y1='7' y2='27' stroke={color} strokeWidth='11' strokeLinecap='round'/>
    </defs>
    <g>
      <use xlinkHref='#a1' opacity='.27'/>
      <use xlinkHref='#a1' opacity='.27' transform='rotate(30 60,60)'/>
      <use xlinkHref='#a1' opacity='.27' transform='rotate(60 60,60)'/>
      <use xlinkHref='#a1' opacity='.27' transform='rotate(90 60,60)'/>
      <use xlinkHref='#a1' opacity='.27' transform='rotate(120 60,60)'/>
      <use xlinkHref='#a1' opacity='.27' transform='rotate(150 60,60)'/>
      <use xlinkHref='#a1' opacity='.37' transform='rotate(180 60,60)'/>
      <use xlinkHref='#a1' opacity='.46' transform='rotate(210 60,60)'/>
      <use xlinkHref='#a1' opacity='.56' transform='rotate(240 60,60)'/>
      <use xlinkHref='#a1' opacity='.66' transform='rotate(270 60,60)'/>
      <use xlinkHref='#a1' opacity='.75' transform='rotate(300 60,60)'/>
      <use xlinkHref='#a1' opacity='.85' transform='rotate(330 60,60)'/>
    </g>
  </SvgIcon>
)

const Preloader = React.forwardRef((props, ref)=>{

  const {
    indicator: Indicator = indicator,
    container = 'body',
    color = '#fff',
    navbarHeight = 0
  } = props;

  return ReactDOM.createPortal(
    <>
      <WUI_poreloader_overlay
        onTouchMove={e=>e.preventDefault()}
      />
      <WUI_preloader_root navbarHeight={navbarHeight}>
        <WUI_preloader>
          <Indicator color={color}/>
        </WUI_preloader>
      </WUI_preloader_root>
    </>,
    $(container)[0]
  )
})

Preloader.show = (props)=> ReactDOM.render(<Preloader {...props}/>, stage)

Preloader.hide = ()=> ReactDOM.unmountComponentAtNode(stage);


export default Preloader;