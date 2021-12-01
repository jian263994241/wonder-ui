import * as defaultIcons from './defaultIcons';
import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME, resultClasses } from './ResultClasses';
import { ResultProps } from './ResultTypes';
import { composeClasses, css } from '@wonder-ui/utils';

const useClasses = (styleProps: ResultProps) => {
  const { classes, status } = styleProps;
  const slots = {
    root: ['root', status],
    icon: ['icon'],
    title: ['title'],
    description: ['description']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const ResultRoot = styled('div', {
  slot: 'Root',
  name: COMPONENT_NAME
})(({ theme }) => ({
  ...theme.typography.body1,
  padding: '32px 12px'
}));

const ResultIcon = styled('div', {
  slot: 'Icon',
  name: COMPONENT_NAME
})(({ theme }) => ({
  boxSizing: 'border-box',
  width: 64,
  height: 64,
  margin: '0 auto 20px',
  padding: 6,
  fontSize: 52,
  [`.${resultClasses.success} &`]: {
    color: theme.palette.primary.main
  },
  [`.${resultClasses.error} &`]: {
    color: theme.palette.error.main
  },
  [`.${resultClasses.info} &`]: {
    color: theme.palette.info.main
  },
  [`.${resultClasses.warning} &`]: {
    color: theme.palette.warning.main
  },
  [`.${resultClasses.waiting} &`]: {
    color: theme.palette.success.main
  }
}));

const ResultTitle = styled('div', {
  slot: 'Title',
  name: COMPONENT_NAME
})(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  textAlign: 'center',
  color: theme.palette.text.primary
}));

const ResultDescription = styled('div', {
  slot: 'Description',
  name: COMPONENT_NAME
})(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  textAlign: 'center',
  marginTop: 8,
  color: theme.palette.text.secondary
}));

const Result = React.forwardRef<HTMLDivElement, ResultProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const { status, title, description, icon, children, className, ...rest } =
    props;

  if (!status) return null;

  const classes = useClasses(props);

  const resultIcon =
    icon ||
    (defaultIcons[status] ? React.createElement(defaultIcons[status]) : null);

  return (
    <ResultRoot ref={ref} className={css(classes.root, className)} {...rest}>
      <ResultIcon className={classes.icon}>{resultIcon}</ResultIcon>
      <ResultTitle className={classes.title}>{title}</ResultTitle>
      {description && (
        <ResultDescription className={classes.description}>
          {description}
        </ResultDescription>
      )}
      {children}
    </ResultRoot>
  );
});

export default Result;
