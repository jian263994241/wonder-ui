import { css } from 'styled-components';

export function createHairline(position, color = '#000') {
  let style = {};

  const commomStyle = {
    content: '""',
    position: 'absolute',
    backgroundColor: color,
    display: 'block',
    zIndex: 15,
  };

  const scaleY = {
    'html.device-pixel-ratio-2 &': {
      transform: 'scaleY(0.5)'
    },
    'html.device-pixel-ratio-3 &': {
      transform: 'scaleY(0.33)'
    },
  };

  const scaleX = {
    'html.device-pixel-ratio-2 &': {
      transform: 'scaleX(0.5)'
    },
    'html.device-pixel-ratio-3 &': {
      transform: 'scaleX(0.33)'
    },
  };

  switch (position) {
    case 'top':
        style = {
          '&::before' :{
            ...commomStyle,
            ...scaleY,
            left: 0,
            top: 0,
            bottom: 'auto',
            right: 'auto',
            height: 1,
            width: '100%'
          }
        }
      break;
    case 'left':
      style = {
        '&:before': {
          ...commomStyle,
          ...scaleX,
          left: 0,
          top: 0,
          bottom: 'auto',
          right: 'auto',
          width: 1,
          height: '100%',
        }
      }
      break;
    case 'bottom':
      style = {
        '&:after': {
          ...commomStyle,
          ...scaleY,
          left: 0,
          bottom: 0,
          right: 'auto',
          top: 'auto',
          height: 1,
          width: '100%',
        }
      }
      break;
    case 'right':
      style = {
        '&:after': {
          ...commomStyle,
          ...scaleX,
          right: 0,
          top: 0,
          left: 'auto',
          bottom: 'auto',
          width: 1,
          height: '100%',
        }
      }
      break;
  }

  return {
    object: style,
    css: ()=> css(style)
  };
}

export function removeHairline(position){
  let result = {};
  switch (position) {
    case 'left':
    case 'top':
        result = {
          '&:before': {
            display: 'none'
          }
        }
      break;
    case 'right':
    case 'bottom':
        result = {
          '&:after': {
            display: 'none'
          }
        }
      break;
  }
  return result;
}

