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
import SvgIcon from '../svgIcon';

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
    <WUI_list_item ref={ref}  activeState={arrow!=undefined} disabled={disabled} {...rest}>
      { thumb ? ( <WUI_list_item_media>{thumb}</WUI_list_item_media> ): null }
      <WUI_list_item_line>
        { children ? (<WUI_list_item_content wrap={wrap} align={align}>{children}</WUI_list_item_content>): null }
        { extra ? ( <WUI_list_item_extra align={align}> {extra} </WUI_list_item_extra> ): null }
        { arrow && (
            <WUI_list_item_arrow arrow={arrow} align={align} aria-hidden="true">
              <SvgIcon viewBox="0 0 16 26" width={15} height={15}>
                <g id="UI-KIT_基础元件" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="9.9基础元件" transform="translate(-5809.000000, -8482.000000)" fill="#C7C7CC">
                    <polygon id="Disclosure-Indicator" points="5811 8482 5809 8484 5820.5 8495 5809 8506 5811 8508 5825 8495"></polygon>
                  </g>
                </g>
              </SvgIcon>
            </WUI_list_item_arrow>
          )
        }
      </WUI_list_item_line>
    </WUI_list_item>
  )
})

ListItem.defaultProps = {

}

ListItem.propTypes = {
  arrow: PropTypes.oneOf(['horizontal', 'vertical', 'vertical-up']),
  align: PropTypes.oneOf(['top', 'center']),
  children: PropTypes.any,
  disabled: PropTypes.bool,
  extra: PropTypes.any,
  thumb: PropTypes.any,
}

ListItem.Brief = WUI_list_item_brief;

export default ListItem;