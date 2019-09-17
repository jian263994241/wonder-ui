import React from 'react';
import PropTypes from 'prop-types';
import { WUI_view } from './styles';
import { withRouter } from 'react-router-dom';
import AppContext from '../AppContext';
import Pages from './PageSwitch';

/**
 * 用来包裹所有Page
 * @visibleName View 视图
 */
const View =  (props) => {
  const {
    history, 
    location, 
    fallback, 
    ...rest
  } = props;
  const app = React.useContext(AppContext);
  const [action, setAction] = React.useState('PUSH');

  const search = decodeURIComponent(location.search);
  const pathname = location.pathname;
  
  React.useEffect(()=>{
    setAction(history.action); 
  }, [search, pathname])
  
  return (
    <WUI_view>
      <Pages routes={app.routes} fallback={fallback} action={action} location={location} {...rest}/>
    </WUI_view>
  )
}

View.defaultProps = {
  fallback: null
}

View.propTypes = {
 /**
  * 异步加载时的等待状态
  */
  fallback: PropTypes.element
}

export default withRouter(View);