import React from 'react';
import PropTypes from 'prop-types';
import { idxx } from '../../utils/helpers';
import hooks from '../hooks';

const SlotContext = React.createContext({});

const Slot = (props)=>{
  const { 
    name, 
    children
  } = props;
  const context = React.useContext(SlotContext);
  const id = React.useMemo(()=> idxx(), []);

  React.useEffect(()=>{
    if(context.setContent && name){
      context.setContent({
        id, name, component: children
      });
    }
    return ()=>{
      if(context.setContent && name){
        context.removeContent(id);
      }
    }
  }, [name, children]);

  if(!context.setContent){
    return children;
  }
  
  return null;
};

Slot.propTypes = {
  name: PropTypes.string,
}


Slot.Content = (props)=> {
  const { name } = props;
  const context = React.useContext(SlotContext);

  if(context.content){
    return context.content.flatMap((item)=>{
      if(item.name === name){
        return item.component;
      }
      return [];
    });
  }
  return null;
}


Slot.Group = (props)=>{
  const { children } = props;
  const [content] = React.useState([]);
  const [, forceUpdate] = hooks.useForceUpdate();
  
  const setContent = (value)=>{
    const target = content.find((item)=> value.id === item.id);
    
    if(target){
      Object.assign(target, value);
    }else{
      content.push(value);
    }
    
    forceUpdate();
  }

  const removeContent = (id)=>{
    const index = content.findIndex((item)=>{
      return item.id = id;
    });

    if(index> -1){
      content.splice(index, 1);
      forceUpdate();
    }
  }

  return (
    <SlotContext.Provider value={{content, setContent, removeContent}}>
      {children}
    </SlotContext.Provider>
  )
}


export default Slot;