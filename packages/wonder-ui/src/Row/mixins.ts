import { capitalize, generateUtilityClass } from '@wonder-ui/utils';
import { COLUMNS } from './share';
import { Theme } from '../styles/createTheme';

export const makeRow = (
  theme: Theme,
  gutterX: number,
  gutterY: number = 0
): any => ({
  '--gutter-x': theme.spacing(gutterX) + 'px',
  '--gutter-y': theme.spacing(gutterY) + 'px',
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 'calc(var(--gutter-y) * -1)',
  marginRight: 'calc(var(--gutter-x)/ -2)',
  marginLeft: 'calc(var(--gutter-x)/ -2)'
});

export const makeColReady = () => ({
  boxSizing: 'border-box',
  flexShrink: 0,
  width: '100%',
  maxWidth: '100%',
  paddingRight: 'calc(var(--gutter-x)/ 2)',
  paddingLeft: 'calc(var(--gutter-x)/ 2)',
  marginTop: 'var(--gutter-y)'
});

export const makeCol = (size: number, columns: number = COLUMNS) => {
  if (size) {
    return {
      flex: '0 0 auto',
      width: (size / columns) * 100 + '%'
    };
  } else {
    return {
      flex: '1 1 0',
      maxWidth: '100%'
    };
  }
};

export const makeColAuto = () => ({
  flex: '0 0 auto',
  width: 'auto'
});

export const makeColOffset = (size: number, columns: number = COLUMNS) => {
  const num = size / columns;
  return {
    marginLeft: num === 0 ? 0 : `${num * 100}%`
  };
};

export const rowCols = (count: number) => ({
  '& > *': {
    flex: '0 0 auto',
    width: count === 0 ? 'auto' : `${100 / count}%`
  }
});

const rowClass = (slot: string) => generateUtilityClass('WuiRow', slot);
const colClass = (slot: string) => generateUtilityClass('WuiCol', slot);

export const makeGridColumns = (
  theme: Theme,
  gutter: [number, number] = [0, 0],
  columns: number = COLUMNS
) => {
  const styles: Record<string, any> = {
    ...makeRow(theme, gutter[0], gutter[1]),
    '& > *': makeColReady()
  };

  theme.breakpoints.keys.forEach((breakpoint) => {
    const infix = capitalize(breakpoint);
    const mediaQuery = theme.breakpoints.up(breakpoint);
    styles[mediaQuery] = {};

    styles[mediaQuery][`&.${rowClass(`rowCols${infix}-auto`)}`] = rowCols(0);
    styles[mediaQuery][`&& .${colClass(`col${infix}-auto`)}`] = makeColAuto();

    for (let i = 1; i <= COLUMNS; i++) {
      styles[mediaQuery][`&.${rowClass(`rowCols${infix}-${i}`)}`] = rowCols(i);
      styles[mediaQuery][`&& .${colClass(`col${infix}-${i}`)}`] = makeCol(
        i,
        columns
      );
    }

    for (let i = 1; i <= COLUMNS - 1; i++) {
      styles[mediaQuery][
        `&& .${colClass(`offset${infix}-${i}`)}`
      ] = makeColOffset(i, columns);
    }
  });

  return styles;
};
