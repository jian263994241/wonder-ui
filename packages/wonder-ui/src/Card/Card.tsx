import * as React from 'react';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { cardCssVars, COMPONENT_NAME, useCardCssVars } from './CardClasses';
import { composeClasses, css } from '@wonder-ui/utils';
import { typographyCssVars } from '../Typography/TypographyClasses';
import type { CardProps } from './CardTypes';

const useClasses = (props: CardProps) => {
  const { classes } = props;

  const slots = {
    root: ['root'],
    header: ['header'],
    title: ['title'],
    body: ['body']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const CardRoot = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  backgroundColor: cardCssVars.value('bgColor'),
  borderRadius: cardCssVars.value('borderRadius')
});

const CardHeader = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Header'
})({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: `${cardCssVars.value('headerPaddingVertical')} ${cardCssVars.value(
    'headerPaddingHorizontal',
    cardCssVars.value('paddingHorizontal')
  )}`,
  '&:not(:last-of-type)': {
    borderBottom: `thin solid ${cardCssVars.value('dividerColor')}`
  }
});

const CardTitle = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Title'
})({
  fontWeight: cardCssVars.value('titleFontWeight', 500),
  fontSize: cardCssVars.value(
    'titleFontSize',
    typographyCssVars.value('subtitle2')
  )
});

const CardBody = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Body'
})({
  padding: `${cardCssVars.value('bodyPaddingVertical')} ${cardCssVars.value(
    'bodyPaddingHorizontal',
    cardCssVars.value('paddingHorizontal')
  )}`,
  fontSize: typographyCssVars.value('body2'),
  '&:not(:last-of-type)': {
    borderBottom: `thin solid ${cardCssVars.value('dividerColor')}`
  }
});

const CardFooter = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Footer'
})({
  padding: `${cardCssVars.value('footerPaddingVertical')} ${cardCssVars.value(
    'footerPaddingHorizontal',
    cardCssVars.value('paddingHorizontal')
  )}`
});

const Card = React.forwardRef<HTMLDivElement, CardProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    title,
    extra,
    children,
    className,
    footer,
    onHeaderClick,
    onBodyClick,
    onFooterClick,
    ...rest
  } = props;

  const classes = useClasses(props);

  useCardCssVars();

  return (
    <CardRoot
      ref={ref}
      className={css(classes.root, className)}
      variant="body1"
      {...rest}
    >
      {(title || extra) && (
        <CardHeader className={classes.header} onClick={onHeaderClick}>
          <CardTitle className={classes.title}>{title}</CardTitle>
          {extra}
        </CardHeader>
      )}
      {children && (
        <CardBody className={classes.body} onClick={onBodyClick}>
          {children}
        </CardBody>
      )}
      {footer && <CardFooter onClick={onFooterClick}>{footer}</CardFooter>}
    </CardRoot>
  );
});

export default Card;
