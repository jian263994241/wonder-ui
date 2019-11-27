import React from 'react';
import styled from 'styled-components';
import { fade } from '../styles/colorManipulator';
import utils from '../../utils/utils';
import ButtonBase from '../ButtonBase';

const Button = React.forwardRef(({spacing, ...props}, ref)=> <ButtonBase ref={ref} {...props}/>);

export const WUI_toggle_button_root = styled(Button)(({
  theme, selected, disabled, size, spacing
})=>({
  ...theme.typography.button,
  boxSizing: 'border-box',
  height: 40,
  minWidth: 50,
  padding: '0px 11px 0px 12px',
  border: `1px solid ${fade(theme.palette.action.active, 0.05)}`,
  color: fade(theme.palette.action.active, 0.38),
  whiteSpace: 'nowrap',
  '&:not(:first-child)': {
    marginLeft: -1,
    borderLeft: '1px solid transparent',
  },
  '&:hover': {
    textDecoration: 'none',
    // Reset on mouse devices
    backgroundColor: fade(theme.palette.text.primary, 0.05),
    '@media (hover: none)': {
      backgroundColor: 'transparent',
    },
    '&[disabled]': {
      backgroundColor: 'transparent',
    },
  },
  '&:first-child': {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  '&:last-child': {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    paddingLeft: 12,
  },
  ...utils.equal([selected, true], {
    color: '#4C7DFF',
    backgroundColor: fade('#4C7DFF', 0.12),
    border: `1px solid ${fade('#4C7DFF', 0.05)}`,
    '&:hover': {
      backgroundColor: fade('#4C7DFF', 0.15),
    },
    '& + &': utils.unequal([spacing, true], {
      borderLeft: 0,
      marginLeft: 0,
    }),
  }),
  ...utils.equal([disabled, true], {
    color: fade(theme.palette.action.disabled, 0.35),
  }),
  ...utils.equal([size, 'small'], {
    height: 30,
    minWidth: 40,
    fontSize: theme.typography.pxToRem(12),
  }),
  ...utils.equal([size, 'large'], {
    height: 50,
    minWidth: 60,
    fontSize: theme.typography.pxToRem(15),
  }),
  ...utils.equal([spacing, true], {
    borderRadius: '4px',
    '&:not(:first-child)': {
      marginLeft: theme.spacing(1),
      border: `1px solid ${fade(theme.palette.action.active, 0.05)}`,
    },
    '&:first-child': {
      borderRadius: '4px',
    },
    '&:last-child': {
      borderRadius: '4px',
    }
  })
}))

const Div = React.forwardRef(({spacing, ...props}, ref)=> <div ref={ref} {...props}/>)

export const WUI_toggle_button_group = styled(Div)(({theme, spacing})=>({
  backgroundColor: spacing ? 'transparent' : theme.palette.background.paper,
  borderRadius: 2,
  display: 'inline-flex'
}))