import React from 'react';
import PropTypes from 'prop-types';
import { WUI_tag, WUI_tag_label } from './styles';
import { ThemeProvider } from 'styled-components';
import useTheme from '../styles/useTheme';
import { htmlProp } from '../../utils/reactHelpers';

/**
 * @visibleName Tag 标签
 */
const Tag = React.forwardRef((props, ref)=>{
  const {
    children,
    clickable,
    ...rest
  } = props;
  const theme = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <WUI_tag {...htmlProp('clickable', props)} ref={ref} {...rest}>
        <WUI_tag_label>{children}</WUI_tag_label>
      </WUI_tag>
    </ThemeProvider>
  )
})

Tag.propTypes = {
  /** 标签颜色 `primary`, `secondary`, 或者 自定颜色'#ccc' */
  color: PropTypes.string,
  /** 标签大小 */
  size: PropTypes.oneOf(['large', 'small']),
  /** 是否空心标签 */
  outlined: PropTypes.bool,
  /** 是否可点击 */
  clickable: PropTypes.bool,
}

// Tag.defaultProps = {
//   clickable: true
// }


export default Tag;