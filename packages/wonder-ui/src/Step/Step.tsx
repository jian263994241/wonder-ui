import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME, stepClasses } from './StepClasses';
import { composeClasses } from '@wonder-ui/utils';
import { css, warn } from '@wonder-ui/utils';
import { StepProps, StyleProps } from './StepTypes';
import { StepsContext } from '../Steps/stepsContext';
import { useCreation } from '@wonder-ui/hooks';

const useClasses = (styleProps: StyleProps) => {
  const { classes, status } = styleProps;

  const slots = {
    root: ['root', status && status],
    indicator: ['indicator'],
    iconContainer: ['iconContainer'],
    content: ['content'],
    title: ['title'],
    description: ['description'],
    iconDot: ['iconDot']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const StepRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: StyleProps }>(({ styleProps, theme }) => ({
  '--line-to-next-color': '#e5e5e5',
  '--icon-color': 'var(--line-to-next-color)',

  ...(styleProps.direction === 'horizontal'
    ? {
        '--title-font-size': theme.typography.pxToRem(14),
        flex: '1 1'
      }
    : {
        '--title-font-size': theme.typography.pxToRem(17),
        display: 'flex',
        alignItems: 'stretch'
      }),

  [`&.${stepClasses.finish}`]: {
    '--line-to-next-color': theme.palette.primary.main
  },
  [`&.${stepClasses.process}`]: {
    '--icon-color': theme.palette.primary.main,
    [`.${stepClasses.title}`]: {
      color: 'var(--icon-color)'
    }
  },
  [`&.${stepClasses.error}`]: {
    '--icon-color': theme.palette.error.main,
    [`.${stepClasses.title}`]: {
      color: 'var(--icon-color)'
    }
  },
  [`&:last-child .${stepClasses.indicator}:after`]: {
    display: 'none'
  }
}));

const StepIndicator = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Indicator'
})<{ styleProps: StyleProps }>(
  ({ styleProps, theme }) => ({
    position: 'relative',

    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      backgroundColor: 'var(--line-to-next-color)',
      transition: theme.transitions.create('background-color')
    }
  }),
  ({ styleProps, theme }) => ({
    ...(styleProps.direction === 'horizontal'
      ? {
          width: '100%',
          minHeight: 24,
          '&::after': {
            left: '50%',
            top: '50%',
            height: 1,
            transform: 'translateY(-50%)',
            width: '100%'
          },
          [`.${stepClasses.iconContainer}`]: {
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }
        }
      : {
          flex: 'none',
          minWidth: 24,
          marginRight: theme.spacing(1),
          '&::after': {
            left: '50%',
            top: 'calc(var(--title-font-size) * 1.5 / 2)',
            width: 1,
            transform: 'translateX(-50%)',
            height: '100%'
          },
          [`.${stepClasses.iconContainer}`]: {
            top: 'calc(var(--title-font-size) * 1.5 / 2)',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }
        })
  })
);

const StepIconContainer = styled('div', {
  name: COMPONENT_NAME,
  slot: 'IconContainer'
})<{ styleProps: StyleProps }>(({ styleProps, theme }) => ({
  position: 'absolute',
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  fontSize: theme.typography.pxToRem(18),
  color: 'var(--icon-color)',
  transition: theme.transitions.create('color')
}));

const StepIconDot = styled('span', {
  name: COMPONENT_NAME,
  slot: 'IconDot'
})({
  display: 'block',
  width: 8,
  height: 8,
  background: 'currentColor',
  borderRadius: 4
});

const StepContent = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Content'
})<{ styleProps: StyleProps }>(({ styleProps, theme }) => ({
  ...(styleProps.direction === 'horizontal'
    ? { textAlign: 'center' }
    : {
        flex: 'auto',
        paddingBottom: 14
      })
}));

const StepTitle = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Title'
})<{ styleProps: StyleProps }>(({ styleProps, theme }) => ({
  color: theme.palette.text.primary,
  transition: theme.transitions.create('color'),
  fontSize: 'var(--title-font-size)',
  lineHeight: 1.5
}));

const StepDescription = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Description'
})<{ styleProps: StyleProps }>(({ styleProps, theme }) => ({
  paddingTop: 2,
  color: theme.palette.text.secondary,
  fontSize: 'calc(var(--title-font-size) * 12/14)'
}));

const Step = React.forwardRef<HTMLDivElement, StepProps>((inProps, ref) => {
  const props = useThemeProps({ name: COMPONENT_NAME, props: inProps });
  const {
    className,
    title,
    description,
    icon,
    index = -1,
    status: statusProp,
    ...rest
  } = props;

  const context = React.useContext(StepsContext);

  if (!context) {
    warn('<Step> must be a child component of <Steps>.');
    return null;
  }

  const status = useCreation(() => {
    const current = context.current!;

    let status = statusProp || 'wait';

    if (index < current) {
      status = statusProp || 'finish';
    } else if (index === current) {
      status = statusProp || 'process';
    }

    return status;
  }, [statusProp, context.current, index]);

  const styleProps = {
    ...props,
    index,
    current: context.current!,
    direction: context.direction!,
    status
  };

  const classes = useClasses(styleProps);

  return (
    <StepRoot
      ref={ref}
      className={css(classes.root, className)}
      styleProps={styleProps}
      {...rest}
    >
      <StepIndicator styleProps={styleProps} className={classes.indicator}>
        <StepIconContainer
          styleProps={styleProps}
          className={classes.iconContainer}
        >
          {icon || <StepIconDot className={classes.iconDot} />}
        </StepIconContainer>
      </StepIndicator>
      <StepContent styleProps={styleProps} className={classes.content}>
        <StepTitle styleProps={styleProps} className={classes.title}>
          {title}
        </StepTitle>
        {!!description && (
          <StepDescription
            styleProps={styleProps}
            className={classes.description}
          >
            {description}
          </StepDescription>
        )}
      </StepContent>
    </StepRoot>
  );
});

export default Step;
