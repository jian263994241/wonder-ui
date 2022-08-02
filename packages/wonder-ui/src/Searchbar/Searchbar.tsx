import * as React from 'react';
import ButtonBase from '../ButtonBase';
import DefaultSearchIcon from './SearchIcon';
import Input, { InputAction, InputProps } from '../Input';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import {
  composeClasses,
  css,
  forwardRef,
  generateUtilityClasses
} from '@wonder-ui/utils';
import {
  useControlled,
  useEventCallback,
  useForkRef,
  useSize,
  useSafeState
} from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiSearchbar';

export const searchbarClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'input',
  'bg',
  'inner',
  'cancel'
]);

export interface SearchbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Input属性
   */
  InputProps?: InputProps;
  /**
   * 取消按钮
   * @default false
   */
  allowCancel?: boolean;
  /**
   * 定义左边区域
   */
  barLeft?: React.ReactNode;
  /**
   * 定义右边区域
   */
  barRight?: React.ReactNode;
  /**
   * 取消按钮文本
   */
  cancelText?: string;

  classes?: Partial<typeof searchbarClasses>;
  /**
   * 初始值
   */
  defaultValue?: InputProps['defaultValue'];
  /**
   * 取消按钮一直存在
   */
  fixCancelButton?: boolean;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * 回调
   */
  onCancel?(): void;
  /**
   * 回调
   */
  onChange?: InputProps['onChange'];
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * 当前值
   */
  value?: InputProps['value'];
}

export interface SearchbarStyleProps extends SearchbarProps {}

const useClasses = (styleProps: SearchbarStyleProps) => {
  const { classes } = styleProps;
  const slots = {
    root: ['root'],
    input: ['input'],
    cancel: ['cancel'],
    bg: ['bg'],
    inner: ['inner']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const SearchbarRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  width: '100%',
  height: 44,
  position: 'relative',
  boxSizing: 'border-box'
});

const SearchbarInner = styled('div', {
  name: 'WuiNavbar',
  slot: 'Inner'
})({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  transform: 'translate3d(0,0,0)',
  padding:
    'env(safe-area-inset-top) calc(10px + env(safe-area-inset-right)) 0 calc(10px + env(safe-area-inset-left))',
  zIndex: 10,
  overflow: 'hidden'
});

const SearchbarBg = styled('div', { name: 'WuiNavbar', slot: 'Bg' })(
  ({ theme }) => {
    const backgroundColor = theme.palette.background.paper;

    return {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      background: alpha(backgroundColor, 0.85),
      transitionProperty: 'transform',
      backdropFilter: 'saturate(180%) blur(20px)'
    };
  }
);

const SearchbarInput = styled(Input, {
  name: COMPONENT_NAME,
  slot: 'Input'
})<{ styleProps: SearchbarStyleProps }>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius[2],
  paddingLeft: 8,
  paddingRight: 8
}));

const SearchbarCancelButton = styled(ButtonBase, {
  name: COMPONENT_NAME,
  slot: 'Button'
})<{ styleProps: SearchbarStyleProps }>(({ theme }) => ({
  whiteSpace: 'nowrap',
  padding: '0 0.5em',
  transition: theme.transitions.create(['margin-right', 'opacity']),
  position: 'relative',
  opacity: 0,
  color: theme.palette.primary.main
}));

const Searchbar = forwardRef<HTMLElement, SearchbarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    InputProps,
    className,
    cancelText = '取消',
    fixCancelButton = false,
    children,
    onCancel,
    allowCancel = false,
    barLeft,
    barRight,
    icon = <DefaultSearchIcon />,
    placeholder,
    onFocus,
    onBlur,
    onChange,
    value: valueProp,
    defaultValue,
    ...rest
  } = props;

  const [value, setValueIfUncontrolled] = useControlled({
    value: valueProp,
    defaultValue
  });
  const [focus, setFocus] = useSafeState(false);
  const cancelButtonRef = React.useRef<HTMLDivElement>(null);
  const cancelButtonSize = useSize(cancelButtonRef);
  const actionRef = React.useRef<InputAction>();
  const handleActionRef = useForkRef(actionRef, InputProps?.actionRef);

  const handleChange = useEventCallback((e) => {
    setValueIfUncontrolled(e.target.value);
    onChange?.(e);
  });

  const handleFocus = useEventCallback((e) => {
    setFocus(true);
    InputProps?.onFocus?.(e);
  });

  const handleBlur = useEventCallback((e) => {
    setFocus(false);
    InputProps?.onBlur?.(e);
  });

  const [cancalVisible, setCancalVisible] = useSafeState(false);

  const styleProps = { ...props };

  const classes = useClasses(styleProps);

  React.useEffect(() => {
    if (fixCancelButton) {
      setCancalVisible(true);
      return;
    }

    if (focus) {
      setCancalVisible(true);
    } else if (!value) {
      setCancalVisible(false);
    }
  }, [focus, value, fixCancelButton]);

  const cancelButtonStyle = React.useMemo(() => {
    if (fixCancelButton) {
      return {
        marginRight: 0,
        opacity: 1
      };
    }

    if (!cancelButtonSize.width) {
      return {
        opacity: 0,
        marginRight: -999
      };
    }

    return !cancalVisible
      ? {
          opacity: 0,
          marginRight: -cancelButtonSize.width
        }
      : {
          marginRight: 0,
          opacity: 1
        };
  }, [cancalVisible, cancelButtonSize, fixCancelButton]);

  return (
    <SearchbarRoot
      className={css(classes.root, className)}
      ref={ref as React.Ref<HTMLDivElement>}
      {...rest}
    >
      <SearchbarBg className={classes.bg} />
      <SearchbarInner className={classes.inner}>
        {barLeft}
        <SearchbarInput
          allowClear
          borderless
          type="search"
          placeholder={placeholder}
          {...InputProps}
          className={css(classes.input, InputProps?.className)}
          prefix={icon}
          styleProps={styleProps}
          onFocus={handleFocus}
          onBlur={handleBlur}
          actionRef={handleActionRef}
          value={value}
          onChange={handleChange}
        />
        {allowCancel && !barRight && (
          <SearchbarCancelButton
            disableRipple
            styleProps={styleProps}
            className={classes.cancel}
            ref={cancelButtonRef}
            onClick={onCancel}
            style={cancelButtonStyle}
          >
            {cancelText}
          </SearchbarCancelButton>
        )}
        {barRight}
      </SearchbarInner>
      {children}
    </SearchbarRoot>
  );
});

export default Searchbar;
