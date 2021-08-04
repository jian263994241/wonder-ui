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
  boxSizing: 'border-box',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [`&.${dropdownMenuItemClasses.active}`]: {
    color: theme.palette.primary.main
  }
}));

const DropdownMenuItemTitle = styled('span', {
  name: 'WuiDropdownMenuItem',
  slot: 'Title'
})(({ theme }) => ({
  position: 'relative',

  [`&.${dropdownMenuItemClasses.withArrow}`]: {
    paddingRight: theme.spacing(0.5)
  },
  [`&.${dropdownMenuItemClasses.withArrow}:after`]: {
    position: 'absolute',
    top: '50%',
    right: '-0.5em',
    marginTop: -5,
    border: '3px solid',
    borderColor: 'transparent transparent #dcdee0 #dcdee0',
    transform: 'rotate( -45deg )',
    opacity: 0.8,
    content: '""'
  },

  [`.${dropdownMenuItemClasses.active} > &.${dropdownMenuItemClasses.withArrow}:after`]:
    {
      marginTop: -1,
      transform: 'rotate(135deg)',
      borderColor: 'transparent transparent currentColor currentColor'
    }
}));

export interface DropdownMenuItemActions {
  onClose(): void;
}

export interface DropdownMenuItemProps extends ButtonBaseProps {
  /**
   * 激活
   */
  active?: boolean;
  /**
   * 显示箭头
   */
  arrow?: boolean;
  classes?: Partial<typeof dropdownMenuItemClasses>;
  /**
   * 按钮内容
   */
  children?: React.ReactNode;

  component?: React.ElementType;
  /**
   * 禁用波纹
   */
  disableRipple?: boolean;
  /**
   * 浮层
   */
  overlay?:
    | React.ReactNode
    | ((actions: DropdownMenuItemActions) => React.ReactNode);
}

const DropdownMenuItem = React.forwardRef<HTMLElement, DropdownMenuItemProps>(
  (inProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'WuiDropdownMenuItem'
    });
    const {
      active = false,
      arrow = false,
      children,
      className,
      component,
      disableRipple = false,
      overlay,
      onClick,
      ...rest
    } = props;

    const styleProps = { ...props, active, arrow };

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
