import styled from 'styled-components';
import createTag from '../createTag';

export const WUI_block = styled(createTag.div)(({theme, ...props})=> {

  const defaultValue = (a,b) => theme.spacing(a != undefined ? a : b);

  const display = props.inline ? 'inline-block': 'block';

  return {
    display,
    paddingTop: defaultValue(props.top, props.space),
    paddingBottom: defaultValue(props.bottom, props.space),
    paddingLeft: defaultValue(props.left, props.blank),
    paddingRight: defaultValue(props.right, props.blank)
  }
})