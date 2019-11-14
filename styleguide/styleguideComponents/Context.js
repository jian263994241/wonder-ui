import React from 'react';
import Context from 'rsg-components/Context';

const myContext = React.createContext({});

/**
 * Merge context
 * @param {*} props 
 */
export function Provider(props){
  const {children} = props;
  const StyleGuideContext = React.useContext(Context);
  const styleguide = React.useMemo(()=> require('!!react-styleguidist/lib/loaders/styleguide-loader!./index.js'), []);
  const merge = React.useMemo(()=>{
    return {
      ...StyleGuideContext,
      ...styleguide
    }
  }, []);

  return (
    <myContext.Provider value={merge}>
      {children}
    </myContext.Provider>
  )
}

export default myContext;

