import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
import Mounter from 'rc-mounter';
import withRouter from 'react-router-dom/withRouter';
import {StylePopup} from '../Popup/Styled';
import AnimatedRoute from './transition/AnimatedRoute';
import spring from 'react-motion/lib/spring';
const fade = { stiffness: 330, damping: 33, precision: 1 };

const PopupRoute = ({component, path, bgColor})=>(
  <Mounter>
    <AnimatedRoute
      atEnter={{ offset: 100 }}
      atLeave={{ offset: spring(100, fade) }}
      atActive={{ offset: spring(0, fade) }}
      mapStyles={(styles) => ({
        transform: `translateY(${styles.offset}%)`,
      })}
      path={path}
      wrapperComponent={false}
      component={({style, ...props})=>(
        <StylePopup style={style} bgColor={bgColor}>{createElement(component, props)}</StylePopup>
      )}
    />
  </Mounter>
)

export default PopupRoute;
