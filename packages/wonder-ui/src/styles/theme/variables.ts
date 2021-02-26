export const containerSizeKeys = ['sm', 'md', 'lg', 'xl', 'xxl'] as const;

export const breakpointsKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export type ContainerSizeType = typeof containerSizeKeys[number];
export type Breakpoints = typeof breakpointsKeys[number];

export type ZIndexType =
  | 'dropdown'
  | 'sticky'
  | 'fixed'
  | 'drawer'
  | 'modal'
  | 'popover'
  | 'tooltip';

export interface Variables {
  containerMaxWidths: Record<ContainerSizeType, number>;
  breakpoints: Record<Breakpoints, number>;
  zIndex: Record<ZIndexType, number>;
}

const variables: Variables = {
  containerMaxWidths: {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
    xxl: 1320
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    drawer: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070
  }
};

export default variables;
