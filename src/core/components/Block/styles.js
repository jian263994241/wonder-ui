import styled from 'styled-components';
import { styledTag } from '../../utils/reactHelpers';

export const WUI_block = styled(styledTag('div', [
  'blank', 
  'space',
  'left',
  'right',
  'top',
  'bottom'
]))(({theme, ...props})=> {

  const defaultValue = (a,b) => theme.spacing(a != undefined ? a : b);

  return {
    paddingTop: defaultValue(props.top, props.space),
    paddingBottom: defaultValue(props.bottom, props.space),
    paddingLeft: defaultValue(props.left, props.blank),
    paddingRight: defaultValue(props.right, props.blank),
  }
})