import { __RouterContext } from 'react-router-dom';

const useHistory = ()=>{
  const {history, location, match} = React.useContext(__RouterContext);

  return history;
}


export default useHistory;