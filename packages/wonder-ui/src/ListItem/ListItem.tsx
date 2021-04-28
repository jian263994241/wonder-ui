import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import { useTouchFeedback } from '@wonder-ui/hooks';
import { groupBy } from '@wonder-ui/utils';
import { alpha, darken } from '../styles/colorManipulator';
import ArrowForward, { ArrowForwardProps } from '../ArrowForward';
import ListItemMedia from '../ListItemMedia';
import ListItemExtra from '../ListItemExtra';
import type { BaseProps, ClassNameMap, PickStyleProps } from '../styles/types';
import { getDevice } from '@wonder-ui/utils';

const device = getDevice();
export interface ListItemProps extends BaseProps {
  alignItems?: 'flex-start' | 'center';
  /**
   * arrow
   */
  arrow?: 'empty' | 'horizontal' | 'vertical' | 'vertical-up';

  /**
   * @description Css api
   */
  classes?: ClassNameMap<'root' | 'body'>;
  /**
   * divider
   */
  divider?: boolean;
  /**
   * @description 选中状态
   * @default false
   */
  selected?: boolean;
  /**
   * @description 是否展示点击状态
   * @default false
   */
  button?: boolean;
}

const ListItemRoot = styled('li', {
  name: 'WuiListItem',
  slot: 'Root'
})<PickStyleProps<ListItemProps, 'alignItems' | 'selected' | 'button'>>(
  ({ theme, styleProps }) => ({
    overflow: 'hidden',
    position: 'relative',
    transition: 'background-color 200ms',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    outline: 0,
    display: 'flex',
    alignItems: styleProps.alignItems || 'center',
    textDecoration: 'none',
    paddingLeft: theme.spacing(2),
    ...(styleProps.selected && {
      backgroundColor: alpha(theme.palette.primary.main, 0.1)
    }),

    ...(styleProps.button && {
      cursor: 'pointer'
    }),

    '&.state-active': {
      backgroundColor: darken(theme.palette.background.paper, 0.1)
    },

    ...(device.desktop &&
      styleProps.button &&
      !styleProps.selected && {
        '&:hover': {
          backgroundColor: darken(theme.palette.background.paper, 0.1)
        }
      }),

    [`&:last-of-type > ${ListItemInner}`]: {
      border: 'none'
    }
  })
);

const ListItemInner = styled('div', {
  name: 'WuiListItem',
  slot: 'Inner'
})<PickStyleProps<ListItemProps, 'divider'>>(({ theme, styleProps }) => ({
  width: '100%',
  minHeight: 44,
  display: 'flex',
  alignItems: 'inherit',
  alignSelf: 'stretch',
  color: 'inherit',
  boxSizing: 'border-box',
  padding: theme.spacing(1, 1.5, 1, 0),
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
})(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'inherit',
  boxSizing: 'border-box',
  color: 'inherit'
}));

const ListItemArrow = styled(ArrowForward, {
  name: 'WuiListItem',
  slot: 'Arrow'
})<ArrowForwardProps>(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.3),
  alignItems: 'inherit',
  pointerEvents: 'none',
  fontSize: 15
}));

const direction = {
  horizontal: 'right',
  vertical: 'down',
  'vertical-up': 'up'
} as const;

const ListItem: React.FC<ListItemProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiListItem' });

  const {
    alignItems = 'center',
    arrow = 'empty',
    button = false,
    children,
    className,
    divider = true,
    component,
    selected = false,
    ...rest
  } = props;

  const styleProps = { alignItems, button, divider, selected };

  const classes = useClasses({ ...props, styleProps, name: 'WuiListItem' });

  const containerProps = useTouchFeedback({
    ...props,
    prefixClassName: classes.root,
    activeClassName: 'state-active',
    disabled: !button
  });

  const childGroup = React.useMemo(
    () =>
      groupBy(React.Children.toArray(children), (child) => {
        if (React.isValidElement(child)) {
          if (child.type === ListItemMedia) {
            return 'media';
          }

          if (child.type === ListItemExtra) {
            return 'extra';
          }

          return 'body';
        }
        return 'body';
      }),
    [children]
  );

  return (
    <ListItemRoot
      as={component}
      styleProps={styleProps}
      ref={ref}
      {...rest}
      {...containerProps}
    >
      {childGroup.media}
      <ListItemInner styleProps={styleProps}>
        <ListItemBody className={classes.body}>{childGroup.body}</ListItemBody>
        {childGroup.extra}
        {arrow && arrow != 'empty' && (
          <ListItemArrow direction={direction[arrow]} />
        )}
      </ListItemInner>
    </ListItemRoot>
  );
});

export default ListItem;
