import * as React from 'react';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './CardClasses';
import { composeClasses, css } from '@wonder-ui/utils';
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

const CardRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  padding: theme.spacing(0, 1.5)
}));

const CardHeader = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Header'
})(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: theme.spacing(1.5, 0),
  '&:not(:last-child)': {
    borderBottom: `thin solid var(--card--border-color, ${theme.palette.divider})`
  }
}));

const CardTitle = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Title'
})({});

const CardBody = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Body'
})(({ theme }) => ({
  padding: theme.spacing(1.5, 0)
}));

const Card = React.forwardRef<HTMLDivElement, CardProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    title,
    extra,
    children,
    className,
    onHeaderClick,
    onBodyClick,
    ...rest
  } = props;

  const classes = useClasses(props);

  return (
    <CardRoot ref={ref} className={css(classes.root, className)} {...rest}>
      {(title || extra) && (
        <CardHeader className={classes.header} onClick={onHeaderClick}>
          <CardTitle className={classes.title} variant="subtitle1">
            {title}
          </CardTitle>
          {extra}
        </CardHeader>
      )}
      {children && (
        <CardBody
          className={classes.body}
          onClick={onBodyClick}
          variant="body1"
        >
          {children}
        </CardBody>
      )}
    </CardRoot>
  );
});

export default Card;
