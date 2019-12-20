import { Link } from '@wonder-ui/router';
import styled from 'styled-components';

/**
 * UI Wrap react-router Link
 * @visibleName Link 链接
 */
export default styled(Link).withConfig({
  displayName: 'Link'
})({
  textDecoration: 'none',
  outline: 'none',
  margin: 0,
  padding: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  color: 'inherit',
  fontSize: 'inherit',
  background: 'transparent',
  WebkitTapHighlightColor: 'transparent',
  '&[disabled]': {
    pointerEvents: 'none',
    cursor: 'not-allowed'
  }
})


