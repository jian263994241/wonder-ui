 import palette from './palette'

 const disabledEvents = {
   pointerEvents: 'none', // Disable link interactions
   cursor: 'default',
 }

 const disabled = {
    text: {
      ...disabledEvents,
      color: palette.action.disabled
   }
 }


 export default disabled;