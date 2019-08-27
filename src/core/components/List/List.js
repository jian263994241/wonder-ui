import React from 'react';
import PropTypes from 'prop-types';
import {
  WUI_list_header,
  WUI_list_footer,
  WUI_list_body,
  WUI_list
} from './styles';
import ListItem from '../ListItem';
import useTheme from '../styles/useTheme';

/**
 * 单个连续模块垂直排列，显示当前的内容、状态和可进行的操作
 * @visibleName List 列表
 */
const List = React.forwardRef((props, ref)=>{
  const { 
    children,
    renderHeader,
    renderFooter,
    theme,
    ...rest
  } = props;

  const [ThemeProvider] = useTheme(props);

  return (
    <ThemeProvider>
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
    </ThemeProvider> 
  )
})

List.Item = ListItem;

List.propTypes = {
  /** 列表头部 */
  renderHeader: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  /** 脚步 */
  renderFooter: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  /** 子元素 */
  children: PropTypes.any
}


List.Header = React.forwardRef((props, ref)=> {
  const { theme, ...rest} = props;
  const [ThemeProvider] = useTheme(props);
  return (
    <ThemeProvider>
      <WUI_list_header ref={ref} {...rest}/>
    </ThemeProvider>
  )
});

List.Body = React.forwardRef((props, ref)=> {
  const { theme, ...rest} = props;
  const [ThemeProvider] = useTheme(props);
  return (
    <ThemeProvider>
      <WUI_list_body ref={ref} {...rest}/>
    </ThemeProvider>
  )
});

List.Footer = React.forwardRef((props, ref)=> {
  const { theme, ...rest} = props;
  const [ThemeProvider] = useTheme(props);
  return (
    <ThemeProvider>
      <WUI_list_footer ref={ref} {...rest}/>
    </ThemeProvider>
  )
});

export default List;