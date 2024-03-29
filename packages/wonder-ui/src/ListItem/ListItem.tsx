import * as React from 'react';
import ArrowForward from '../ArrowForward';
import ButtonBase from '../ButtonBase';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { css, forwardRef } from '@wonder-ui/utils';
import {
  ListItemClassesType,
  listItemClasses,
  useClasses
} from './ListItemClasses';
import Typography from '../Typography';

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * 水平对齐
   */
  alignItems?: 'flex-start' | 'center';
  /**
   * 箭头
   */
  arrow?: 'empty' | 'horizontal' | 'vertical' | 'vertical-up';
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * Css api
   */
  classes?: Partial<ListItemClassesType>;
  /**
   * Root element
   */
  component?: React.ElementType;
  /**
   * 分割线
   */
  divider?: boolean;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Disabled ripple
   */
  disableRipple?: boolean;
  /**
   * 选中状态
   * @default false
   */
  selected?: boolean;
  /**
   * 是否展示点击状态
   * @default false
   */
  button?: boolean;
  /**
   * 主要文字
   */
  primary?: React.ReactNode;
  /**
   * 次要文字
   */
  secondary?: React.ReactNode;
  /**
   * 前面的类容
   */
  media?: React.ReactNode;
  /**
   * 额外的类容
   */
  extra?: React.ReactNode;
}

interface ListItemStyleProps extends ListItemProps {}

const ListItemRoot = styled('li', {
  name: 'WuiListItem',
  slot: 'Root'
})<{ styleProps: ListItemStyleProps }>(({ theme, styleProps }) => ({
  overflow: 'hidden',
  position: 'relative',
  transition: 'background-color 200ms',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  outline: 0,
  border: 0,
  display: 'flex',
  alignItems: styleProps.alignItems || 'center',
  textDecoration: 'none',
  paddingLeft: theme.spacing(2),
  cursor: 'auto',
  whiteSpace: 'unset',
  ...(styleProps.button && {
    cursor: 'pointer'
  }),
  ...(styleProps.disabled && {
    opacity: theme.palette.action.disabledOpacity,
    pointerEvents: 'none'
  })
}));

const ListItemInner = styled('div', {
  name: 'WuiListItem',
  slot: 'Inner'
})<{ styleProps: ListItemStyleProps }>(({ theme, styleProps }) => ({
  width: '100%',
  minHeight: theme.typography.pxToRem(44),
  display: 'flex',
  alignItems: 'inherit',
  alignSelf: 'stretch',
  color: 'inherit',
  boxSizing: 'border-box',
  paddingRight: 12,
  ...(styleProps.divider && {
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    borderBottomWidth: 'thin'
  })
}));

const ListItemBody = styled('div', {
  name: 'WuiListItem',
  slot: 'Body'
})(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  width: '100%',
  boxSizing: 'border-box'
}));

const ListItemArrow = styled('span', {
  name: 'WuiListItem',
  slot: 'Arrow'
})(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.3),
  pointerEvents: 'none',
  width: 8,
  height: 18,
  display: 'flex',
  alignItems: 'center',

  margin: theme.spacing(1, 0, 1, 0.5),
  '& > svg': {
    display: 'block',
    fontSize: theme.typography.pxToRem(14)
  }
}));

const ListItemMedia = styled('div', {
  name: 'WuiListItem',
  slot: 'Media'
})(({ theme }) => ({
  userSelect: 'none',
  display: 'flex',
  flexShrink: 0,
  flexWrap: 'nowrap',
  alignItems: 'center',
  boxSizing: 'border-box',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  marginRight: theme.spacing(2),
  minHeight: theme.typography.pxToRem(44),

  [`.${listItemClasses.disabled} &`]: {
    opacity: theme.palette.action.disabledOpacity
  }
}));

const ListItemExtra = styled('span', {
  name: 'WuiListItem',
  slot: 'Extra'
})(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  flexShrink: 0,
  display: 'flex',
  verticalAlign: 'middle',
  userSelect: 'none',
  padding: theme.spacing(1, 0, 1, 1)
}));

const direction = {
  horizontal: 'right',
  vertical: 'down',
  'vertical-up': 'up'
} as const;

const ListItem = forwardRef<HTMLElement, ListItemProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiListItem' });

  const {
    alignItems = 'center',
    arrow = 'empty',
    button = false,
    children,
    className,
    divider = false,
    disabled = false,
    disableRipple = false,
    component = 'li',
    selected = false,
    primary,
    secondary,
    extra,
    media,
    ...rest
  } = props;

  const styleProps = {
    ...props,
    alignItems,
    button,
    divider,
    disabled,
    selected
  };

  const classes = useClasses(styleProps);

  let rootProps: any = {};

  if (button) {
    rootProps = {
      as: ButtonBase,
      component,
      disableRipple,
      disabled,
      selected,
      ...rest
    };
  }

  return (
    <ListItemRoot
      as={component}
      className={css(classes.root, className)}
      styleProps={styleProps}
      ref={ref as React.Ref<any>}
      {...rest}
      {...rootProps}
    >
      {media && (
        <ListItemMedia className={classes.media}>{media}</ListItemMedia>
      )}

      <ListItemInner styleProps={styleProps} className={classes.inner}>
        <ListItemBody className={classes.body}>
          {primary && (
            <Typography
              variant="body1"
              classes={{ root: classes.textPrimary }}
              component="span"
              color="textPrimary"
            >
              {primary}
            </Typography>
          )}
          {secondary && (
            <Typography
              variant="body2"
              component="div"
              classes={{ root: classes.textSecondary }}
              color="textSecondary"
            >
              {secondary}
            </Typography>
          )}
          {children}
        </ListItemBody>

        {extra && (
          <ListItemExtra className={classes.extra}>{extra}</ListItemExtra>
        )}

        {arrow && arrow != 'empty' && (
          <ListItemArrow className={classes.arrow}>
            <ArrowForward direction={direction[arrow]} />
          </ListItemArrow>
        )}
      </ListItemInner>
    </ListItemRoot>
  );
});

export default ListItem;
