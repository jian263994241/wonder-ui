import * as React from 'react';
import ButtonBase, { ButtonBaseProps } from '../ButtonBase';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import { dropdownMenuItemClasses, useClasses } from './DropdownMenuItemClasses';

const DropdownMenuItemRoot = styled(ButtonBase, {
  name: 'WuiDropdownMenuItem',
  slot: 'Root',
  shouldForwardProp: () => true
})<ButtonBaseProps>(({ theme }) => ({
  flex: '1 1 0',
  maxWidth: '100%',
  textAlign: 'center',
  [`&.${dropdownMenuItemClasses.active}`]: {
    color: theme.palette.primary.main
  }
}));

const DropdownMenuItemTitle = styled('span', {
  name: 'WuiDropdownMenuItem',
  slot: 'Title'
})({
  position: 'relative',
  padding: '0 9px',
  '&:after': {
    position: 'absolute',
    top: '50%',
    right: -4,
    marginTop: -5,
    border: '3px solid',
    borderColor: 'transparent transparent #dcdee0 #dcdee0',
    transform: 'rotate( -45deg )',
    opacity: 0.8,
    content: '""'
  },
  [`.${dropdownMenuItemClasses.active} > &:after`]: {
    marginTop: -1,
    transform: 'rotate(135deg)',
    borderColor: 'transparent transparent currentColor currentColor'
  }
});

export interface DropdownMenuItemProps extends ButtonBaseProps {
  active?: boolean;
  classes?: Partial<typeof dropdownMenuItemClasses>;
  component?: React.ElementType;
  disableRipple?: boolean;
  overlay?: React.ReactNode;
  ref?: React.Ref<any>;
}

const DropdownMenuItem = React.forwardRef<HTMLElement, DropdownMenuItemProps>(
  (inProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'WuiDropdownMenuItem'
    });
    const {
      active = false,
      children,
      className,
      component,
      disableRipple = false,
      overlay,
      onClick,
      ...rest
    } = props;

    const styleProps = { ...props, active };

    const classes = useClasses(styleProps);

    return (
      <DropdownMenuItemRoot
        as={component}
        disableRipple={disableRipple}
        ref={ref}
        classes={{ root: css(classes.root, className) }}
        onClick={onClick}
        {...rest}
      >
        <DropdownMenuItemTitle className={classes.title}>
          {children}
        </DropdownMenuItemTitle>
      </DropdownMenuItemRoot>
    );
  }
);

export default DropdownMenuItem;
