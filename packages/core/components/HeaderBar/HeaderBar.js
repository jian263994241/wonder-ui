import React from 'react';
import PropTypes from 'prop-types';
import useDisabledRefTouchMove from '@wonder-ui/utils/useDisabledRefTouchMove';
import useForkRef from '@wonder-ui/utils/useForkRef';
import {
  HeaderBarRoot,
  HeaderBarTitle,
  HeaderBarLeft,
  HeaderBarRight
} from './styles';

const HeaderBar = React.forwardRef(function HeaderBar(props, ref){
  const {
    classes = {},
    title,
    barLeft,
    barRight,
    spacing = 10,
    bordered = true,
    ...rest
  } = props;
  const rootRef = React.useRef(null);
  const handleRef = useForkRef(rootRef, ref);

  useDisabledRefTouchMove(rootRef);

  return (
    <HeaderBarRoot className={classes.root} ref={handleRef} spacing={spacing} bordered={bordered} {...rest}>
      <HeaderBarLeft className={classes.left}>{barLeft}</HeaderBarLeft>
      <HeaderBarTitle className={classes.title}>{title}</HeaderBarTitle>
      <HeaderBarRight  className={classes.right}>{barRight}</HeaderBarRight>
    </HeaderBarRoot>
  )
});

HeaderBar.propTypes = {
  classes: PropTypes.object,
  barLeft: PropTypes.node,
  barRight: PropTypes.node,
  spacing: PropTypes.number,
  bordered: PropTypes.bool,
}

export default HeaderBar;
