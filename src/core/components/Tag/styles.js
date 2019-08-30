import styled from 'styled-components';
import { fade } from '../styles/colorManipulator';
import utils from '../../utils/utils';
import { styledTag } from '../../utils/reactHelpers';

export const WUI_tag_label = styled.span({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 8,
  paddingRight: 8,
  userSelect: 'none',
  whiteSpace: 'nowrap',
  cursor: 'inherit',
})

export const WUI_tag = styled(styledTag('span', ['color', 'size', 'outlined']))(({theme, ...props})=>{
  const largeHeight = 32;
  const height = 24;
  const smallHeight = 16;
  const backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[700];
  // const deleteIconColor = fade(theme.palette.text.primary, 0.26);

  const sizeSmall = utils.equal(
    [props.size, 'small'],
    {
      height: smallHeight,
      fontSize: 11,
      [WUI_tag_label]: {
        paddingLeft: 4,
        paddingRight: 4,
      }
    }
  )

  const sizeLarge = utils.equal(
    [props.size, 'large'],
    {
      height: largeHeight,
      [WUI_tag_label]: {
        paddingLeft: 12,
        paddingRight: 12,
      }
    }
  )

  const colorPrimary = utils.equal(
    [props.color, 'primary'],
    {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    }
  )

  const colorSecondary = utils.equal(
    [props.color, 'secondary'],
    {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    }
  )

  const colorCustom = utils.unequal(
    [props.color, undefined],
    [props.color, 'primary'],
    [props.color, 'secondary'],
    ()=>({
      backgroundColor: props.color,
      color: theme.palette.getContrastText(props.color),
    })
  )

  const _outlined = utils.equal(
    [props.outlined, true],
    {
      backgroundColor: 'transparent',
      color: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
      border: `1px solid ${
        theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
      }`,
      '[clickable]&:acitve, [clickable]&:focus, [deletable]&:focus': {
        backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      },
      '& [avatar]': {
        marginLeft: -1,
      },
    }
  )

  const outlinedPrimary = utils.equal(
    [props.outlined, true],
    [props.color, 'primary'],
    {
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      '[clickable]&:active, [clickable]&:focus, [deletable]&:focus': {
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      },
    }
  )

  const outlinedSecondary = utils.equal(
    [props.outlined, true],
    [props.color, 'secondary'],
    {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      '[clickable]&:active, [clickable]&:focus, [deletable]&:focus': {
        backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      },
    }
  )

  const outlinedCustom = utils.equal(
    [props.outlined, true],
    utils.unequal(
      [props.color, undefined],
      [props.color, 'primary'],
      [props.color, 'secondary'],
      ()=>({
        color: props.color,
        border: `1px solid ${props.color}`,
        '[clickable]&:active, [clickable]&:focus, [deletable]&:focus': {
          backgroundColor: fade(props.color, theme.palette.action.hoverOpacity),
        },
      })
    )
  )
  

  return {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height,
    color: theme.palette.getContrastText(backgroundColor),
    backgroundColor,
    borderRadius: theme.shape.borderRadius,
    whiteSpace: 'nowrap',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    // label will inherit this from root, then `clickable` class overrides this for both
    cursor: 'default',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
    textDecoration: 'none',
    border: 'none', // Remove `button` border
    padding: 0, // Remove `button` padding
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    ...sizeSmall,
    ...sizeLarge,
    ...colorPrimary,
    ...colorSecondary,
    ...colorCustom,
    ..._outlined,
    ...outlinedPrimary,
    ...outlinedSecondary,
    ...outlinedCustom,
    [`& + ${WUI_tag}`]: {
      marginLeft: 5
    }
  }
})


