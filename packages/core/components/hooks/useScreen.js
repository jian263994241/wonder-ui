import React from 'react';
import offset from 'dom-helpers/offset';
import AppContext from '../AppContext';

const getSize = (app)=>{
  if (!app.root) return { width: 0, height: 0, left: 0, top: 0 };
  const _offset = offset(app.root);
  const width = app.root.offsetWidth;
  const height = app.root.offsetHeight;
  const left = _offset.left;
  const top = _offset.top;
  return { width, height, left, top };
}

export default function useScreen(){
  const app = React.useContext(AppContext);
  const [screen , updateScreen] = React.useState(getSize(app));

  React.useEffect(()=>{
    const update = ()=> updateScreen(getSize(app));

    window.addEventListener('resize', update, false);

    return () => {
      window.removeEventListener('resize', update, false)
    }
  }, [])
  
  return screen;
}
