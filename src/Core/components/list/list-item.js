import React from 'react';
import PropTypes from 'prop-types';
import {
  WUI_list_item,
  WUI_list_item_line,
  WUI_list_item_content,
  WUI_list_item_media,
  WUI_list_item_extra,
  WUI_list_item_arrow,
  WUI_list_item_brief
} from './styles';

const ListItem = React.forwardRef((props, ref)=>{
  const {
    arrow,
    children,
    disabled,
    extra,
    thumb,
    align,
    wrap,
    multipleLine,
    ...rest
  } = props;

  return (
    <WUI_list_item ref={ref} {...rest}>
      { thumb ? ( <WUI_list_item_media>{thumb}</WUI_list_item_media> ): null }
      <WUI_list_item_line>
        { children ? (<WUI_list_item_content>{children}</WUI_list_item_content>): null }
        { extra ? ( <WUI_list_item_extra> {extra} </WUI_list_item_extra> ): null }
        { arrow && <WUI_list_item_arrow aria-hidden="true"/>}
      </WUI_list_item_line>
    </WUI_list_item>
  )
})

ListItem.propTypes = {
  children: PropTypes.any,
  
}

ListItem.Brief = WUI_list_item_brief;

export default ListItem;