import React from 'react';
import PropTypes from 'prop-types';
import { idxx } from '../../utils/helpers';

const SlotContext = React.createContext({});

const Slot = (props)=>{
  const { name, children } = props;
  const slotContext = React.useContext(SlotContext);
  const id = React.useMemo(()=> idxx(), []);
  const { dispatch } = slotContext;

  React.useEffect(()=>{
    if(name && dispatch){
      dispatch({ type: 'add', data: { id, name, component: children } })
    }
    return ()=>{
      dispatch({ type: 'remove', data: { id, name, component: children } })
    }
  }, [name, children]);

  if(!dispatch || !name) return children;
  return null;
};

Slot.propTypes = {
  name: PropTypes.string,
};

Slot.Content = (props)=> {
  const slotContext = React.useContext(SlotContext);
  const { state = [] } = slotContext;
  return state.map((item)=>{
    if(item.name === props.name) return item.component;
    return null;
  });
};

Slot.Group = (props)=>{
  const [state, dispatch] = React.useReducer(reducer, []);
  return (
    <SlotContext.Provider value={{state, dispatch}}>
      {props.children}
    </SlotContext.Provider>
  );

  function reducer(state, action) {
    const _state = [].concat(state);
    const data = action.data;

    switch (action.type) {
      case 'add':
        const target = _state.find((item)=> data.id === item.id);
        if(target){
          Object.assign(target, data);
        }else{
          _state.push(data);
        }
        return _state;
      case 'remove':
          const index = _state.findIndex((item)=> item.id == data.id);
          _state.splice(index, 1);
          return _state;
      default:
        return state;
    }
  }
}

export default Slot;