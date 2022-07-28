import * as React from 'react';
import ArrowForward from '../ArrowForward';
import ButtonBase from '../ButtonBase';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME, listItemClasses } from './ListItemClasses';
import { composeClasses, css, forwardRef } from '@wonder-ui/utils';
import { listCssVars } from '../List/ListClasses';
import { listHeaderClasses } from '../ListHeader/ListHeaderClasses';
import { svgIconCssVars } from '../SvgIcon/SvgIconClasses';
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
  backgroundColor: listCssVars.value('bgColor'),
  paddingLeft: listCssVars.value('paddingHorizontal'),
  minHeight: 44,

  ...(styleProps.card && {
    [`&:first-of-type, .${listHeaderClasses.root} + &, .${whiteSpaceClasses.root} + &`]:
      {
        borderTopLeftRadius: listCssVars.value('cardBorderRadius'),
        borderTopRightRadius: listCssVars.value('cardBorderRadius')
      },

    [`&:last-of-type`]: {
      borderBottomLeftRadius: listCssVars.value('cardBorderRadius'),
      borderBottomRightRadius: listCssVars.value('cardBorderRadius')
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

const ListItemContent = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Content'
})({
  display: 'flex',
  alignItems: listCssVars.value('alignItems'),
  paddingRight: listCssVars.value('paddingHorizontal'),
  borderTop: listCssVars.value('divider'),

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
  alignSelf: 'flex-start',
  paddingTop: listCssVars.value('paddingVertical'),
  paddingBottom: listCssVars.value('paddingVertical')
});

const ListItemPrefix = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Prefix'
})({
  flex: 'none',
  paddingRight: listCssVars.value('prefixPaddingRight'),
  width: listCssVars.value('prefixWidth')
});

const ListItemExtra = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Extra'
})(({ theme }) => ({
  color: theme.palette.text.secondary,
  flex: 'none',
  paddingLeft: listCssVars.value('extraPaddingLeft'),
  maxWidth: listCssVars.value('extraMaxWidth'),
  paddingTop: listCssVars.value('paddingVertical'),
  paddingBottom: listCssVars.value('paddingVertical')
}));

const ListItemArrow = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Arrow'
})(({ theme }) => ({
  flex: 'none',
  marginLeft: 4,
  paddingTop: listCssVars.value('paddingVertical'),
  paddingBottom: listCssVars.value('paddingVertical'),
  ...svgIconCssVars.style({
    color: theme.palette.text.icon,
    size: 19
  })
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
    card: context?.card
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
      <ListItemContent className={classes.content} variant="subtitle1">
        {prefix && (
          <ListItemPrefix className={classes.prefix}>{prefix}</ListItemPrefix>
        )}
        <ListItemBody className={classes.body}>
          {primary && (
            <Typography
              variant="subtitle1"
              className={classes.textPrimary}
              color="textPrimary"
            >
              {primary}
            </Typography>
          )}
          {secondary && (
            <Typography
              variant="body1"
              className={classes.textSecondary}
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
        {renderArrow()}
      </ListItemContent>
    </ListItemRoot>
  );
});

export default ListItem;
