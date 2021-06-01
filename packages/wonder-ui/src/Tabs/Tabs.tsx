import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { useMount, useEventCallback } from '@wonder-ui/hooks';

export interface TabsProps extends Omit<React.HTMLProps<HTMLElement>, 'as'> {
  // centered?: boolean;
  // fixed?: boolean;
  // hideScrollbar?: boolean;
  // indicatorColor?: 'primary' | 'secondary';
  // onChange?(value: any): void;
  // orientation?: 'horizontal' | 'vertical';
  // scrollButtonsHideMobile?: boolean;
  // scrollButtons?: 'auto' | boolean;
  // selectionFollowsFocus?: boolean;
  // visibleScrollbar?: boolean;
  // scrollableX?: boolean;
  // scrollableY?: boolean;
  // value?: any;
  // variant?: 'fullWidth' | 'scrollable' | 'standard';
  // vertical?: boolean;
  // textColor?: 'inherit' | 'primary' | 'secondary';
}

type StyleProps = {
  styleProps: TabsProps;
};

const TabsRoot = styled('div', { name: 'WuiTabs', slot: 'Root' })<StyleProps>(
  ({ styleProps, theme }) => ({
    overflow: 'hidden',
    minHeight: 48,
    WebkitOverflowScrolling: 'touch',
    display: 'flex'
    // ...(styleProps.vertical && {
    //   flexDirection: 'column'
    // }),
    // ...(styleProps.scrollButtonsHideMobile && {
    //   [`& .scrollButtons`]: {
    //     [theme.breakpoints.down('sm')]: {
    //       display: 'none'
    //     }
    //   }
    // })
  })
);

const FlexContainer = styled('div', {
  name: 'WuiTabs',
  slot: 'FlexContainer'
})<StyleProps>(({ styleProps }) => ({
  display: 'flex'
  // ...(styleProps.vertical && {
  //   flexDirection: 'column'
  // }),
  // ...(styleProps.centered && {
  //   justifyContent: 'center'
  // })
}));

const TabsIndicator = styled('span', {
  name: 'WuiTabs',
  slot: 'Indicator'
})<StyleProps>(({ styleProps, theme }) => ({
  position: 'absolute',
  height: 2,
  bottom: 0,
  width: '100%',
  transition: theme.transitions.create()
  // ...(styleProps.indicatorColor === 'primary' && {
  //   backgroundColor: theme.palette.primary.main
  // }),
  // ...(styleProps.indicatorColor === 'secondary' && {
  //   backgroundColor: theme.palette.secondary.main
  // })
  // ...(styleProps.vertical && {
  //   height: '100%',
  //   width: 2,
  //   right: 0
  // })
}));

const Tabs = React.forwardRef<HTMLElement, TabsProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiTabs' });

  return null;
  // const {
  //   allowScrollButtonsMobile = false,
  //   centered = false,
  //   children,
  //   component = 'div',
  //   indicatorColor = 'primary',
  //   onChange,
  //   orientation = 'horizontal',
  //   scrollButtons,
  //   textColor = 'primary',
  //   theme,
  //   variant = 'standard',
  //   visibleScrollbar = false,
  //   value,
  //   ...rest
  // } = props;

  // const isRtl = theme.direction === 'rtl';
  // const scrollable = variant === 'scrollable';
  // const vertical = orientation === 'vertical';

  // const scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  // const start = vertical ? 'top' : 'left';
  // const end = vertical ? 'bottom' : 'right';
  // const clientSize = vertical ? 'clientHeight' : 'clientWidth';
  // const size = vertical ? 'height' : 'width';

  // const styleProps = {
  //   ...props,
  //   component,
  //   allowScrollButtonsMobile,
  //   indicatorColor,
  //   orientation,
  //   vertical,
  //   scrollButtons,
  //   textColor,
  //   variant,
  //   visibleScrollbar,
  //   fixed: !scrollable,
  //   hideScrollbar: scrollable && !visibleScrollbar,
  //   scrollableX: scrollable && !vertical,
  //   scrollableY: scrollable && vertical,
  //   centered: centered && !scrollable,
  //   scrollButtonsHideMobile: !allowScrollButtonsMobile
  // };

  // return (
  //   <TabsRoot as={component} ref={ref} styleProps={styleProps}>
  //     <FlexContainer styleProps={styleProps} role="tablist">
  //       {children}
  //     </FlexContainer>
  //   </TabsRoot>
  // );
});

export default Tabs;
