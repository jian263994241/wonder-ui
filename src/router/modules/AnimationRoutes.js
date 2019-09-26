import React from 'react';
import PropTypes from 'prop-types';
import flatMap from 'array.prototype.flatmap';
import Route from './AnimationRoute';
import resolve from '../utils/path-resolve';

const AnimationRoutes = (props)=>{
  const {
    dataSource = [],
    animation,
    animationDisabled,
    fallback,
    className,
    style,
  } = props;
  
  const renderRoutes = (routes)=>{  
    return flatMap(routes, (route, index)=>{
      const { children, ...routeConf } = route;
      if(children){
        children.forEach((child)=>{
          if(routeConf.path && child.path){ 
            child.path = resolve(routeConf.path, child.path);
          }
        })
        return renderRoutes([routeConf, ...children]);
      }
      return routeConf;
    })
  };
  
  const [routeList, setRoute] = React.useState([]);
  React.useEffect(()=>{
    if(dataSource){
      const result = renderRoutes(dataSource);
      setRoute(result);   
    }
  }, [dataSource]);

  return routeList.map((routeConf, index)=> (
    <Route 
      key={index} 
      animation={animation} 
      animationDisabled={animationDisabled} 
      fallback={fallback}
      className={className}
      style={style}
      {...routeConf}  
    />
  ))
}


AnimationRoutes.propTypes = {
  /**
   * Animation type
   */
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  /**
   * Disable animation
   */
  animationDisabled: PropTypes.bool,
  /**
   * 路由
   */
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * 路径
       */
      path: PropTypes.string,
      /**
       * 是否准确匹配
       */
      exact: PropTypes.bool,
      /**
       * 页面组件
       * require('~/pages/some/index'),
       */
      component: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
      ]),
      /** 
       * 异步加载, 需要配合webpack import 使用
       * ()=>import('~/pages/some/index')
       */
      async: PropTypes.func,
      /** 嵌套路由 仅支持2级 */
      routes: PropTypes.array,
      /**
       * 入口重定向
       */
      redirect: PropTypes.string
    })
  ).isRequired
}

export default AnimationRoutes;