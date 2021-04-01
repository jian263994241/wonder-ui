import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import { useTouchFeedback } from '@wonder-ui/hooks';
import { groupBy } from '@wonder-ui/utils';
import { alpha, darken } from '../styles/colorManipulator';
import ListItemMedia from '../ListItemMedia';
import type { ClassNameMap, PickStyleProps, InProps } from '../styles/types';

export interface ListItemProps {
  alignItems?: 'flex-start' | 'center';
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default li
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * @description Css api
   */
  classes?: Partial<ClassNameMap<'root' | 'body'>>;
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
    minHeight: 44,
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
    '&:last-of-type > .WuiListItem-body': {
      border: 'none'
    }
  })
);

const ListItemBody = styled('div', {
  name: 'WuiListItem',
  slot: 'Body'
})(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'inherit',
  alignSelf: 'stretch',
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: theme.palette.divider,
  borderBottomWidth: 'thin',
  boxSizing: 'border-box',
  color: 'inherit',
  padding: theme.spacing(1, 2),
  paddingLeft: 0,
  '.WuiListItemMedia-root + &': {
    marginLeft: theme.spacing(2)
  }
}));

export default function ListItem<P extends InProps<ListItemProps>>(inProps: P) {
  const props = useThemeProps({ props: inProps, name: 'WuiListItem' });

  const {
    alignItems = 'center',
    button = false,
    children,
    className,
    component,
    selected = false,
    rootRef,
    ...rest
  } = props;

  const styleProps = { alignItems, button, selected };

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
          return child.type === ListItemMedia ? 'media' : 'body';
        }
        return 'body';
      }),
    [children]
  );

  return (
    <ListItemRoot
      as={component}
      styleProps={styleProps}
      ref={rootRef}
      {...rest}
      {...containerProps}
    >
      {childGroup.media}
      <ListItemBody className={classes.body}>{childGroup.body}</ListItemBody>
    </ListItemRoot>
  );
}
