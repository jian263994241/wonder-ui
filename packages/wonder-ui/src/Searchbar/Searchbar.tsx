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
  useDebounce,
  useEventCallback,
  useForkRef,
  useSize
} from '@wonder-ui/hooks';

const componentName = 'WuiSearchbar';

export const searchbarClasses = generateUtilityClasses(componentName, [
  'root',
  'input',
  'bg',
  'inner',
  'cancel'
]);

export interface SearchbarProps extends React.HTMLAttributes<HTMLDivElement> {
  InputProps?: InputProps;
  classes?: Partial<typeof searchbarClasses>;
  icon?: React.ReactNode;
  placeholder?: string;
  cancelText?: string;
  allowCancel?: boolean;
  barLeft?: React.ReactNode;
  barRight?: React.ReactNode;
  textAlignCenter?: boolean;
  onCencel?(): void;
  onChange?: InputProps['onChange'];
  value?: InputProps['value'];
  defaultValue?: InputProps['defaultValue'];
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

  return composeClasses(componentName, slots, classes);
};

const SearchbarRoot = styled('div', {
  name: componentName,
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
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
      borderBottomWidth: 'thin',
      backdropFilter: 'saturate(180%) blur(20px)'
    };
  }
);

const SearchbarInput = styled(Input, {
  name: componentName,
  slot: 'Input'
})<{ styleProps: SearchbarStyleProps }>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius
}));

const SearchbarCancelButton = styled(ButtonBase, {
  name: componentName,
  slot: 'Button'
})<{ styleProps: SearchbarStyleProps }>(({ theme }) => ({
  whiteSpace: 'nowrap',
  padding: '0 0.5em',
  transition: theme.transitions.create(['margin-right', 'opacity']),
  position: 'relative',
  marginRight: -999,
  opacity: 1,
  color: theme.palette.primary.main
}));

const Searchbar = forwardRef<HTMLElement, SearchbarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: componentName });
  const {
    InputProps,
    className,
    cancelText = '取消',
    children,
    onCencel,
    allowCancel = false,
    barLeft,
    barRight,
    icon = <DefaultSearchIcon />,
    placeholder,
    onFocus,
    onBlur,
    onChange,
    value,
    defaultValue,
    ...rest
  } = props;

  const [focus, setFocus] = React.useState(false);
  const cancelButtonRef = React.useRef<HTMLDivElement>(null);
  const cancelButtonSize = useSize(cancelButtonRef);
  const actionRef = React.useRef<InputAction>();
  const handleActionRef = useForkRef(actionRef, InputProps?.actionRef);

  const handleFocus = useEventCallback((e) => {
    setFocus(true);
    InputProps?.onFocus?.(e);
  });

  const handleBlur = useEventCallback((e) => {
    setFocus(false);
    InputProps?.onBlur?.(e);
  });

  const styleProps = { ...props };

  const classes = useClasses(styleProps);

  const [cancalVisible, setCancalVisible] = React.useState(false);
  const focus2 = useDebounce(focus);

  React.useEffect(() => {
    if (focus2) {
      setCancalVisible(true);
    } else {
      setCancalVisible(false);
    }
  }, [focus2]);

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
          onChange={onChange}
          defaultValue={defaultValue}
        />
        {allowCancel && !barRight && (
          <SearchbarCancelButton
            disableRipple
            styleProps={styleProps}
            className={classes.cancel}
            ref={cancelButtonRef}
            onClick={onCencel}
            style={{
              ...(!cancalVisible
                ? {
                    opacity: 0,
                    marginRight: cancelButtonSize.width
                      ? -cancelButtonSize.width
                      : 0
                  }
                : {
                    marginRight: 0,
                    opacity: 1
                  })
            }}
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
