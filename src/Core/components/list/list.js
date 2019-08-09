import React from 'react';
import PropTypes from 'prop-types';
import {
  WUI_list_header,
  WUI_list_footer,
  WUI_list_body,
  WUI_list
} from './styles';
import ListItem from './list-item';

const List = React.forwardRef((props, ref)=>{
  const { 
    children,
    renderHeader,
    renderFooter,
    ...rest
  } = props;

  return (
    <WUI_list ref={ref} {...rest}>
      {
        renderHeader ? (
          <WUI_list_header>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
          </WUI_list_header>
        ) : null
      }
      {
        children? (
          <WUI_list_body>{children}</WUI_list_body>
        ): null
      }
      {
        renderFooter ? (
          <WUI_list_footer>
          {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
          </WUI_list_footer>
        ) : null
      }
    </WUI_list>
  )
})

List.Item = ListItem;

List.propTypes = {
  renderHeader: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  renderFooter: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  children: PropTypes.any
}


export default List;