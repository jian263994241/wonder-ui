import styled, { css } from 'styled-components';
import utils from '../../utils/utils';

export const WUI_flexItem = styled.div `
  box-sizing: border-box;
  flex: 1;
`

const justify = css(props=>{
  const { justify } = props;

  const start = utils.equal(
    [justify, 'start'],
    { justifyContent: 'flex-start' }
  );

  const center = utils.equal(
    [justify, 'center'],
    { justifyContent: 'center' }
  );

  const end = utils.equal(
    [justify, 'end'],
    { justifyContent: 'flex-end' }
  );

  const between = utils.equal(
    [justify, 'between'],
    { justifyContent: 'space-between' }
  );

  const around = utils.equal(
    [justify, 'around'],
    { justifyContent: 'space-around' }
  );
  
  return {
    ...start,
    ...center,
    ...end,
    ...between,
    ...around
  }
})

const align = css(props=>{
  const { align } = props;

  const start = utils.equal(
    [align, 'start'],
    { alignItems: 'flex-start' }
  );

  const center = utils.equal(
    [align, 'center'],
    { alignItems: 'center' }
  );

  const end = utils.equal(
    [align, 'end'],
    { alignItems: 'flex-end' }
  );

  const stretch = utils.equal(
    [align, 'stretch'],
    { alignItems: 'stretch' }
  );

  const baseline = utils.equal(
    [align, 'baseline'],
    { alignItems: 'baseline' }
  );

  return {
    ...start,
    ...center,
    ...end,
    ...stretch,
    ...baseline
  }
})

const alignContent = css(props=>{
  const { alignContent } = props;

  const start = utils.equal(
    [alignContent, 'start'],
    { alignContent: 'flex-start' }
  );

  const center = utils.equal(
    [alignContent, 'center'],
    { alignContent: 'center' }
  );

  const end = utils.equal(
    [alignContent, 'end'],
    { alignContent: 'flex-end' }
  );

  const between = utils.equal(
    [alignContent, 'between'],
    { alignContent: 'space-between' }
  );

  const around = utils.equal(
    [alignContent, 'around'],
    { alignContent: 'space-around' }
  );

  const stretch = utils.equal(
    [align, 'stretch'],
    { alignContent: 'stretch' }
  );
  
  return {
    ...start,
    ...center,
    ...end,
    ...between,
    ...around,
    ...stretch
  }
})

const flexWrap = css(props=>{

  const { wrap } = props;

  const _wrap = utils.equal(
    [wrap, 'wrap'],
    { flexWrap: 'wrap' }
  );

  const nowrap = utils.equal(
    [wrap, 'nowrap'],
    { flexWrap: 'nowrap' }
  );

  const reverse = utils.equal(
    [wrap, 'wrap-reverse'],
    { flexWrap: 'wrap-reverse' }
  );

  return {
    ..._wrap,
    ...nowrap,
    ...reverse
  }
})

const flexDirection = css(props=>{
  const { direction } = props;

  const row = utils.equal(
    [direction, 'row'],
    { flexDirection: 'row' }
  );

  const rowReverse = utils.equal(
    [direction, 'row-reverse'],
    { flexDirection: 'row-reverse' }
  );

  const column = utils.equal(
    [direction, 'column'],
    { 
      flexDirection: 'column',
      [WUI_flexItem]: {
        marginLeft: 0
      } 
    }
  );

  const columnReverse = utils.equal(
    [direction, 'column-reverse'],
    { 
      flexDirection: 'column-reverse',
      [WUI_flexItem]: {
        marginLeft: 0
      }  
    }
  );

  return {
    ...row,
    ...rowReverse,
    ...column,
    ...columnReverse
  }
})

const itemGutter = css(props=>{
  const { gutter } = props;
  return {
    [WUI_flexItem]: {
      marginLeft: gutter,
      '&:first-child':{
        marginLeft: 0
      }
    }
  }
})

const fullWidth = css (props=>{
  return utils.equal(
    [props.fullWidth, true],
    { 
      width: '100%'
    }
  );
})

export const WUI_flex = styled.div `
  text-align: left;
  overflow: hidden;
  display: flex;
  ${fullWidth}
  ${itemGutter}
  ${justify}
  ${align}
  ${alignContent}
  ${flexWrap}
  ${flexDirection}
`