import * as React from 'react';
import ArrowForward from '../ArrowForward';
import ButtonBase from '../ButtonBase';
import ListItemText from '../ListItemText';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { COMPONENT_NAME, listItemClasses } from './ListItemClasses';
import { composeClasses, css, forwardRef } from '@wonder-ui/utils';
import { cssVars } from '../List/List';
import { listHeaderClasses } from '../ListHeader/ListHeaderClasses';
import { useListContext } from '../List/ListContext';
import { whiteSpaceClasses } from '../WhiteSpace/WhiteSpaceClasses';
import type { ListItemProps, ListItemStyleProps } from './ListItemTypes';

const useClasses = (styleProps: ListItemStyleProps) => {
  const { classes, disabled, button } = styleProps;

  const slots = {
    root: ['root', disabled && 'disabled', button && 'button'],
    content: ['content'],
    body: ['body'],
    arrow: ['arrow'],
    prefix: ['prefix'],
    extra: ['extra'],
    textPrimary: ['textPrimary'],
    textSecondary: ['textSecondary']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ListItemRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: ListItemStyleProps }>(({ theme, hidden, styleProps }) => ({
  display: hidden ? 'none' : 'block',
  position: 'relative',
  backgroundColor: cssVars.value('background'),
  paddingLeft: cssVars.value('paddingLeft'),

  ...(styleProps.mode === 'card' && {
    // borderTopLeftRadius: cssVars.value('borderRadius'),
    // borderTopRightRadius: cssVars.value('borderRadius'),
    // borderBottomLeftRadius: cssVars.value('borderRadius'),
    // borderBottomRightRadius: cssVars.value('borderRadius'),

    [`&:first-of-type, .${listHeaderClasses.root} + &, .${whiteSpaceClasses.root} + &`]:
      {
        borderTopLeftRadius: cssVars.value('borderRadius'),
        borderTopRightRadius: cssVars.value('borderRadius')
      },

    [`&:last-of-type`]: {
      borderBottomLeftRadius: cssVars.value('borderRadius'),
      borderBottomRightRadius: cssVars.value('borderRadius')
    }
  }),

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
  borderTop: cssVars.value('divider'),

  [`.${listItemClasses.root}:first-of-type > &
    , .${listHeaderClasses.root} + .${listItemClasses.root} > &
    , .${whiteSpaceClasses.root} + .${listItemClasses.root} > &
  `]: {
    border: 'none'
  }
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

  const styleProps = {
    ...props,
    disabled,
    selected,
    mode: context?.mode
  };

  const classes = useClasses(styleProps);

  let rootProps: any = { ...rest };

  if (button) {
    rootProps = {
      as: ButtonBase,
      component: component || 'div',
      disableRipple,
      disabled,
      selected,
      ...rest
    };
  }

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
      ref={ref}
      styleProps={styleProps}
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
