export interface ZIndex {
  dropdown: number;
  sticky: number;
  fixed: number;
  drawer: number;
  modal: number;
  popover: number;
  tooltip: number;
  snackbar: number;
}

export default {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  drawer: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  snackbar: 1080
} as ZIndex;
