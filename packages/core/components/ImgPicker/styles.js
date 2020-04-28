
export default () => ({
  childrenEle: {
    position: 'relative',
    width: '30px',
    height: '30px',
    '&:before': {
      content: '""',
      width: '30px',
      height: '4px',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      background: '#ccc'
    },
    '&:after': {
      content: '""',
      width: '4px',
      height: '30px',
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: 'translateX(-50%)',
      background: '#ccc'
    }
  },
  container: {
    width: '90px',
    height: '90px',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&.auto-fill': {
      width: '100%',
      height: '100%',
    },
    '& .hide': {
      display: 'none',
    },
    '& input': {
      width: '100%',
      opacity: 0,
      zIndex: 9,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    '& .picker-img-box': {
      width: '100%',
      height: '100%',
      position: 'relative',
      zIndex: 10,
      '& img': {
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: 'cover'
      }
    },
    '& .delete-box': {
      width: '20px',
      height: '20px',
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      zIndex: 20,
      '& .delete': {
        display: 'block',
        width: '100%',
        height: '100%'
      }
    },
    '& .border-i': {
      display: 'inline-block',
      width: '7px',
      height: '7px',
      border: 'solid #dbdbdb',
      borderWidth: '2px 0 0 2px',
      position: 'absolute',
      zIndex: 11,
      '&.border-left-top': {
        top: 0,
        left: 0
      },
      '&.border-right-top': {
        top: 0,
        right: 0,
        transform: 'rotate(90deg)'
      },
      '&.border-left-bottom': {
        bottom: 0,
        left: 0,
        transform: 'rotate(-90deg)'
      },
      '&.border-right-bottom': {
        bottom: 0,
        right: 0,
        transform: 'rotate(180deg)'
      }
    },
    '& .img-dashed': {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 8,
      border: '1px dashed #d2d2d2',
      borderRadius: '5px'
    }
  },
  containerBg: {
    background: '#e8f1fc'
  },
  containerBorder: {
    padding: '5px'
  }
});
