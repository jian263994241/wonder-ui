import device from '@wonder-ui/utils/device';

function create(position, color = '#999'){
  let styles;
  const base = {
    content: '""',
    position: 'absolute',
    backgroundColor: color,
    display: 'block',
    zIndex: 15,
  };
  const scaleY = {
    transform: `scaleY(${1/device.pixelRatio})`
  };

  const scaleX = {
    transform: `scaleX(${1/device.pixelRatio})`
  };


  switch (position) {
    case 'top':
        styles = {
          '&:before' :{
            ...base,
            ...scaleY,
            left: 0,
            top: 0,
            bottom: 'auto',
            right: 'auto',
            height: 1,
            width: '100%',
            transformOrigin: '50% 100%',
          }
        }
      break;
    case 'left':
      styles = {
        '&:before': {
          ...base,
          ...scaleX,
          left: 0,
          top: 0,
          bottom: 'auto',
          right: 'auto',
          width: 1,
          height: '100%',
          transformOrigin: '100% 50%',
        }
      }
      break;
    case 'bottom':
      styles = {
        '&:after': {
          ...base,
          ...scaleY,
          left: 0,
          bottom: 0,
          right: 'auto',
          top: 'auto',
          height: 1,
          width: '100%',
          transformOrigin: '50% 0%',
        }
      }
      break;
    case 'right':
      styles = {
        '&:after': {
          ...base,
          ...scaleX,
          right: 0,
          top: 0,
          left: 'auto',
          bottom: 'auto',
          width: 1,
          height: '100%',
          transformOrigin: '0% 50%',
        }
      }
      break;
  }
  

  return styles;
}


function remove(position){
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


export default function createHairline(palette) {
  
  return {
    create: (position)=> create(position, palette.divider),
    remove,
  }
}