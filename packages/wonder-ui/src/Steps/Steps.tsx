import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './StepsClasses';
import { composeClasses } from '@wonder-ui/utils';
import { css } from '@wonder-ui/utils';
import { StepsProps } from './StepsTypes';
import { StepsContext } from './stepsContext';

const useClasses = (styleProps: StepsProps) => {
  const { classes, direction } = styleProps;

  const slots = {
    root: ['root', direction && direction]
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const StepsRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: StepsProps }>(({ styleProps, theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  ...(styleProps.direction === 'horizontal'
    ? {
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(1)
      }
    : {
        padding: theme.spacing(1, 2)
      })
}));

const Steps = React.forwardRef<HTMLDivElement, StepsProps>((inProps, ref) => {
  const props = useThemeProps({ name: COMPONENT_NAME, props: inProps });
  const {
    children,
    className,
    current = 0,
    direction = 'horizontal',
    ...rest
  } = props;

  const styleProps = {
    ...props,
    current,
    direction
  };

  const classes = useClasses(styleProps);

  const contextValue = styleProps;

  return (
    <StepsContext.Provider value={contextValue}>
      <StepsRoot
        ref={ref}
        className={css(classes.root, className)}
        styleProps={styleProps}
        {...rest}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null;
          }

          return React.cloneElement(child, { index });
        })}
      </StepsRoot>
    </StepsContext.Provider>
  );
});

export default Steps;
