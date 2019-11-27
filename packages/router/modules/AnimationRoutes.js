import React from 'react';
import PropTypes from 'prop-types';
import Route from './AnimationRoute';
import resolve from '@wonder-ui/utils/resolvePath';
import { matchPath, Redirect } from 'react-router-dom';
import useRouterContext from './useRouterContext';
import getPropTypes from '../utils/getPropTypes';
import flatMap from '@wonder-ui/utils/flatMap';

const AnimationRoutes = (props)=>{
  const {
    dataSource = [],
    animation,
    animationDisabled,
    fallback,
    className,
    style,
    noMatch = '/404',
  } = props;

  const context = useRouterContext();
  const location = context.location;

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
  
  const routeList = React.useMemo(()=>{
    if(dataSource){
      return renderRoutes(dataSource);
    }
    return [];
  }, [dataSource]);

  const matched = React.useMemo(()=>{
    let match;
    routeList.forEach((child)=>{
      const path = child.path || child.from;

      const _match = path
          ? matchPath(location.pathname, { ...child, path })
          : context.match;
     
      if(_match) {
        match = _match;
      }
    });
    return match;
  }, [routeList, location]);
  
  return (
    <>
      {
        routeList.map((routeConf, index)=> (
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
      {
        !matched && (<Redirect to={noMatch}/>)
      }
    </>
  )
}

AnimationRoutes.defaultProps = {
  noMatch: '/404'
};

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
      redirect: PropTypes.string,
      /**
       * route name
       */
      name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
      ])
    })
  ).isRequired,
  /**
   * 404
   */
  noMatch: getPropTypes(Redirect, 'to')
}

export default AnimationRoutes;