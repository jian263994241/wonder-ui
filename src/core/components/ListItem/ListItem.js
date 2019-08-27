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
} from '../List/styles';
import SvgIcon from '../SvgIcon';
import useTheme from '../styles/useTheme';

/**
 * 列表项
 * 
 * @see [List组件](/#/组件?id=list)的子元素
 * 
 * `ListItem` 下提供了辅助组件 `ListItem.Brief` 用做辅助说明
 * 
 * @visibleName ListItem 列表项
 */
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
    theme,
    ...rest
  } = props;
  
  const [ThemeProvider] = useTheme(props);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
})

ListItem.defaultProps = {
  wrap: false,
  disabled: undefined,
  thumb: undefined,
  extra: undefined,
  children: undefined,
  arrow: undefined,
  align: 'center'
}

ListItem.propTypes = {
  /** 箭头方向(右,上,下) */
  arrow: PropTypes.oneOf(['horizontal', 'vertical', 'vertical-up']),
  /** 子元素垂直对齐 */
  align: PropTypes.oneOf(['top', 'center']),
  /** 内容 */
  children: PropTypes.any,
  /** 禁用 */
  disabled: PropTypes.bool,
  /** 右边内容 */
  extra: PropTypes.any,
  /** 缩略图 */
  thumb: PropTypes.any,
  /** 是否换行，默认情况下，文字超长会被隐藏 */
  wrap: PropTypes.bool,
}

ListItem.Brief = WUI_list_item_brief;

export default ListItem;