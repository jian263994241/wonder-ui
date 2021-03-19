import * as React from 'react';
import styled from '../styles/styled';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import type {
  StyleProps,
  StyledComponentProps,
  ClassNameMap
} from '../styles/types';
import { useTouchFeedback, useForkRef } from '@wonder-ui/hooks';
import { groupBy } from '@wonder-ui/utils';
import { alpha } from '../styles/colorManipulator';
import ListItemMedia from '../ListItemMedia';

export interface ListItemStyleProps {
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

  alignItems?: 'flex-start' | 'center';
}

const ListItemRoot = styled('li', {
  name: 'WuiListItem',
  slot: 'Root'
})<StyleProps<ListItemStyleProps>>(({ theme, styleProps }) => ({
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
    backgroundColor: alpha(theme.palette.background.paper, 0.5)
  },
  '&:last-of-type > .WuiListItem-body': {
    border: 'none'
  },
  '& + .WuiListHeader-root:before': {
    content: '""',
    position: 'absolute',
    top: -1,
    left: 0,
    width: '100%',
    height: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

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

export interface ListItemProps
  extends StyledComponentProps<typeof ListItemRoot> {
  /**
   * @description Css api
   */
  classes?: Partial<ClassNameMap<'root' | 'body'>>;
}

const ListItem = createFCWithTheme<ListItemProps>(
  'WuiListItem',
  (props, ref) => {
    const {
      alignItems = 'center',
      button = false,
      children,
      className,
      component,
      selected = false,
      ...rest
    } = props;

    const elementRef = useTouchFeedback({
      activeClassName: 'state-active',
      disabled: !button
    });
    const handleRef = useForkRef(elementRef, ref);

    const styleProps = { alignItems, button, selected };

    const classes = useClasses({ ...props, styleProps, name: 'WuiListItem' });

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
        className={classes.root}
        styleProps={styleProps}
        ref={handleRef}
        {...rest}
      >
        {childGroup.media}
        <ListItemBody className={classes.body}>{childGroup.body}</ListItemBody>
      </ListItemRoot>
    );
  }
);

export default ListItem;
