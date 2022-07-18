import * as React from 'react';
import statusIcons from './defaultIcons';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME, resultClasses } from './ResultClasses';
import { composeClasses, css } from '@wonder-ui/utils';
import { ResultProps } from './ResultTypes';

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
})({
  padding: '32px 12px'
});

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

const ResultTitle = styled(Typography, {
  slot: 'Title',
  name: COMPONENT_NAME
})({});

const ResultDescription = styled(Typography, {
  slot: 'Description',
  name: COMPONENT_NAME
})(({ theme }) => ({
  marginTop: 8
}));

const Result = React.forwardRef<HTMLDivElement, ResultProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const { status, title, description, icon, children, className, ...rest } =
    props;

  if (!status) return null;

  const classes = useClasses(props);

  const resultIcon =
    icon ||
    (statusIcons[status] ? React.createElement(statusIcons[status]) : null);

  return (
    <ResultRoot ref={ref} className={css(classes.root, className)} {...rest}>
      <ResultIcon className={classes.icon}>{resultIcon}</ResultIcon>
      <ResultTitle
        className={classes.title}
        variant="subtitle1"
        color="textPrimary"
        align="center"
      >
        {title}
      </ResultTitle>
      {description && (
        <ResultDescription
          className={classes.description}
          variant="caption"
          color="textSecondary"
          align="center"
        >
          {description}
        </ResultDescription>
      )}
      {children}
    </ResultRoot>
  );
});

export default Result;
