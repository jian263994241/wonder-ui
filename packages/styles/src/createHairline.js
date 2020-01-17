
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
          height: '100%'
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
          width: '100%'
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
          height: '100%'
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