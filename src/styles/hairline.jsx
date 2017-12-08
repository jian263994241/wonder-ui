import styled, { css } from 'styled-components';
import device from '../CreateApp/device';

function hairline(position, color) {
  let result = '';
  switch (position) {
    case 'top':
     result = css `
       &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: auto;
          right: auto;
          height: 1px;
          width: 100%;
          background-color: ${color};
          display: block;
          z-index: 15;
          transform-origin: 50% 0%;
          html.pixel-ratio-2 & {
              transform: scaleY(0.5);
          }
          html.pixel-ratio-3 & {
              transform: scaleY(0.33);
          }
      }
     `
      break;
    case 'left':
      result = css `
        &:before {
           content: '';
           position: absolute;
           left: 0;
           top: 0;
           bottom: auto;
           right: auto;
           width: 1px;
           height: 100%;
           background-color: ${color};
           display: block;
           z-index: 15;
           transform-origin: 0% 50%;
           html.pixel-ratio-2 & {
               transform: scaleX(0.5);
           }
           html.pixel-ratio-3 & {
               transform: scaleX(0.33);
           }
       }
      `
      break;
    case 'bottom':
      result = css `
        &:before {
           content: '';
           position: absolute;
           left: 0;
           bottom: 0;
           right: auto;
           top: auto;
           height: 1px;
           width: 100%;
           background-color: ${color};
           display: block;
           z-index: 15;
           transform-origin: 50% 100%;
           html.pixel-ratio-2 & {
               transform: scaleY(0.5);
           }
           html.pixel-ratio-3 & {
               transform: scaleY(0.33);
           }
       }
      `
      break;
    case 'right':
      result = css `
        &:before {
           content: '';
           position: absolute;
           right: 0;
           top: 0;
           left: auto;
           bottom: auto;
           width: 1px;
           height: 100%;
           background-color: ${color};
           display: block;
           z-index: 15;
           transform-origin: 100% 50%;
           html.pixel-ratio-2 & {
               transform: scaleX(0.5);
           }
           html.pixel-ratio-3 & {
               transform: scaleX(0.33);
           }
       }
      `
      break;

  }
  return result;
}

export function removeHairline(position){
  let result = '';
  switch (position) {
    case 'left':
    case 'top':
      result = css `
        &:after {
           display: none;
        }
      `
      break;
    case 'right':
    case 'bottom':
      result = css `
        &:before {
           display: none;
        }
      `
      break;
  }
  return result;
}

export default hairline;
