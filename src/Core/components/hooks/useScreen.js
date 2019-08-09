import React from 'react';
import AppContext from '../app/appContext';

export default function useScreen(){
  const app = React.useContext(AppContext);
  const [ screen , forceUpdate] = React.useState({ width: app.width, height: app.height, left: app.left, top: app.top });

  React.useEffect(()=>{
    const update = ()=> forceUpdate({ width: app.width, height: app.height, left: app.left, top: app.top })

    app.on('resize', update)

    return () => {
      app.off('resize', update)
    }
  }, [])
  
  return screen;
}
