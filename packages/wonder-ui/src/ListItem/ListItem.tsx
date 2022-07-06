import * as React from 'react';
import ArrowForward from '../ArrowForward';
import ButtonBase from '../ButtonBase';
import ListItemText from '../ListItemText';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { COMPONENT_NAME, listItemClasses, useClasses } from './ListItemClasses';
import { css, forwardRef } from '@wonder-ui/utils';
import { cssVars } from '../List/List';
import { useForkRef, useReactive } from '@wonder-ui/hooks';
import type { ListItemProps } from './ListItemTypes';
import { useListContext } from '../List/ListContext';

const ListItemRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme, hidden }) => ({
  display: hidden ? 'none' : 'block',
  position: 'relative',
  backgroundColor: cssVars.value('background'),
  paddingLeft: cssVars.value('paddingLeft'),

  [`&.${listItemClasses.end} > .${listItemClasses.content}`]: {
    border: 'none'
  },

  [`&.${listItemClasses.disabled}`]: {
    cursor: 'not-allowed'
  },

  [`&.${listItemClasses.disabled} .${listItemClasses.content} > *`]: {
    opacity: theme.palette.action.disabledOpacity,
    pointerEvents: 'none'
  }
}));

const ListItemContent = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Content'
})({
  display: 'flex',
  alignItems: cssVars.value('alignItems'),
  paddingRight: cssVars.value('paddingRight'),
  borderBottom: cssVars.value('divider')
});

const ListItemBody = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Body'
})({
  flex: 'auto',
  paddingTop: cssVars.value('paddingTop'),
  paddingBottom: cssVars.value('paddingBottom')
});

const ListItemPrefix = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Prefix'
})({
  flex: 'none',
  paddingRight: cssVars.value('prefixPaddingRight'),
  width: cssVars.value('prefixWidth')
});

const ListItemExtra = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Extra'
})(({ theme }) => ({
  color: theme.palette.text.secondary,
  flex: 'none',
  paddingLeft: cssVars.value('extraPaddingLeft'),
  maxWidth: cssVars.value('extraMaxWidth'),
  paddingTop: cssVars.value('paddingTop'),
  paddingBottom: cssVars.value('paddingBottom')
}));

const ListItemArrow = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Arrow'
})(({ theme }) => ({
  fontSize: theme.typography.pxToRem(19),
  color: alpha(theme.palette.text.secondary, 0.3),
  flex: 'none',
  marginLeft: 4,
  paddingTop: cssVars.value('paddingTop'),
  paddingBottom: cssVars.value('paddingBottom')
}));

const direction = {
  horizontal: 'right',
  vertical: 'down',
  'vertical-up': 'up'
} as const;

const ListItem = forwardRef<HTMLElement, ListItemProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const context = useListContext();

  const {
    arrow,
    children,
    className,
    disabled = context?.disabled,
    disableRipple = context?.disableRipple,
    component,
    selected = false,
    primary,
    secondary,
    extra,
    prefix,
    button = !!arrow,
    ...rest
  } = props;

  const state = useReactive({
    start: false,
    end: false
  });

  const styleProps = {
    ...props,
    disabled,
    selected,
    end: state.end,
    start: state.start
  };

  const classes = useClasses(styleProps);

  let rootProps: any = { ...rest };

  if (button) {
    rootProps = {
      as: ButtonBase,
      component: component || 'div',
      disableRipple,
      disabled,
      selected
    };
  }

  const rootRef = React.useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(rootRef, ref);

  React.useEffect(() => {
    const { current: root } = rootRef;

    if (root) {
      const { nextElementSibling, previousElementSibling } = root;

      if (
        !previousElementSibling ||
        !previousElementSibling.classList.contains(listItemClasses.root)
      ) {
        state.start = true;
      }

      if (
        !nextElementSibling ||
        !nextElementSibling.classList.contains(listItemClasses.root)
      ) {
        state.end = true;
      }
    }
  }, []);

  const renderArrow = () => {
    if (!arrow) return null;

    let arrowElement: React.ReactElement;

    if (React.isValidElement(arrow)) {
      arrowElement = arrow;
    } else if (arrow === true) {
      arrowElement = <ArrowForward direction="right" />;
    } else {
      arrowElement = <ArrowForward direction={direction[arrow]} />;
    }

    return (
      <ListItemArrow className={classes.arrow}>{arrowElement}</ListItemArrow>
    );
  };

  return (
    <ListItemRoot
      as={component}
      className={css(classes.root, className)}
      ref={handleRef}
      {...rootProps}
    >
      <ListItemContent className={classes.content}>
        {prefix && (
          <ListItemPrefix className={classes.prefix}>{prefix}</ListItemPrefix>
        )}
        <ListItemBody className={classes.body}>
          {(primary || secondary) && (
            <ListItemText
              primary={primary}
              secondary={secondary}
              classes={{
                textPrimary: classes.textPrimary,
                textSecondary: classes.textSecondary
              }}
            />
          )}
          {children}
        </ListItemBody>
        {extra && (
          <ListItemExtra className={classes.extra}>{extra}</ListItemExtra>
        )}
        {renderArrow()}
      </ListItemContent>
    </ListItemRoot>
  );
});

export default ListItem;
