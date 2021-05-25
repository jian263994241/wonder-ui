import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { buttonClasses } from '../Button/ButtonClasses';
import { buttonGroupClasses, useClasses } from './ButtonGroupClasses';
import { ButtonProps } from '../Button/Button';
import { css } from '@wonder-ui/utils';

export interface ButtonGroupProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'ref'> {
  /**
   * Button Props
   */
  ButtonProps?: Partial<ButtonProps>;
  /** */
  component?: React.ElementType;
  /**
   * @description direction
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
}

const ButtonGroupRoot = styled('div', {
  name: 'ButtonGroup',
  slot: 'Root'
})(() => ({
  position: 'relative',
  display: 'inline-flex',

  [`& > .${buttonClasses.root}`]: {
    flex: '1 1 auto'
  },

  [`&.${buttonGroupClasses.directionVertical}`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    [`&>&:not(:last-child)> .${buttonClasses.root}, &>.${buttonClasses.root}:not(:last-child)`]: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    },
    [`&>&:not(:first-of-type)>.${buttonClasses.root}, &>.${buttonClasses.root}~.${buttonClasses.root}`]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },
    [`&>&:not(:first-of-type), &>.${buttonClasses.root}:not(:first-of-type)`]: {
      marginTop: -1
    },
    [`&>.${buttonClasses.root}, &>&`]: {
      width: '100%'
    }
  },
  [`&.${buttonGroupClasses.directionHorizontal}`]: {
    [`&>&:not(:last-child)>.${buttonClasses.root}, &>.${buttonClasses.root}:not(:last-child)`]: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    [`&>&:not(:first-of-type)>.${buttonClasses.root}, &>.${buttonClasses.root}:nth-of-type(n+3), &>:not(.${buttonClasses.root}-check)+.${buttonClasses.root}`]: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    [`&>&:not(:first-of-type), &>.${buttonClasses.root}:not(:first-of-type)`]: {
      marginLeft: -1
    }
  }
}));

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiButtonGroup' });
    const {
      ButtonProps,
      children,
      className,
      component,
      direction = 'horizontal',
      ...rest
    } = props;

    const styleProps = { ...props, direction };
    const classes = useClasses(styleProps);

    return (
      <ButtonGroupRoot
        as={component}
        role="group"
        className={css(classes.root, className)}
        ref={ref}
        {...rest}
      >
        {React.Children.toArray(children).map((node: any) => {
          if (React.isValidElement<any>(node)) {
            if ((node.type as any).displayName === 'WuiButton') {
              return React.cloneElement(node, {
                ...ButtonProps,
                ...node.props
              });
            }
          }
          return node;
        })}
      </ButtonGroupRoot>
    );
  }
);

export default ButtonGroup;
