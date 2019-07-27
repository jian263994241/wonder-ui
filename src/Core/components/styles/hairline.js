import styled, { css } from 'styled-components';

export function createHairline(position, color) {
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
        &:after {
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
        &:after {
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

