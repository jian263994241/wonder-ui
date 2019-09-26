import React from 'react';
import PropTypes from 'prop-types';
import { WUI_view } from './styles';
import { withRouter } from 'react-router-dom';
import AppContext from '../AppContext';
import Pages from './Pages';

/**
 * 用来包裹所有Page
 * @visibleName View 视图
 */
const View =  (props) => {
  const {
    history, 
    location, 
    fallback,
    noAnimation,
  } = props;
  const app = React.useContext(AppContext);
  const [action, setAction] = React.useState('PUSH');

  const search = decodeURIComponent(location.search);
  const pathname = location.pathname;
  const routes = app.routes;
  
  React.useEffect(()=>{
    setAction(history.action); 
  }, [search, pathname]);

  const [mainRoutes, subRoutes] = React.useMemo(() => {
    const main = [];
    let sub = [];
    routes.forEach((route, i)=>{
      main.push(route);
      if(route.routes){
        sub = sub.concat(route.routes);
      }
    })
    return [main, sub];
  }, [routes.length]); 

  
  return (
    <WUI_view>
      <Pages 
        routes={mainRoutes} 
        classNames="previous" 
        action={action} 
        fallback={fallback} 
        noAnimation={noAnimation}
      />
      <Pages 
        routes={subRoutes} 
        classNames="next" 
        action={action} 
        fallback={fallback} 
        noAnimation={noAnimation}
      />
    </WUI_view>
  )
}


View.propTypes = {
 /**
  * 异步加载时的等待状态
  */
  fallback: PropTypes.element
}

export default withRouter(View);