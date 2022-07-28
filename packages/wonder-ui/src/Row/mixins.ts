import { capitalize, generateUtilityClass } from '@wonder-ui/utils';
import { Theme } from '../styles/createTheme';
import { COMPONENT_NAME } from './RowClasses';

const COLUMNS = 12;

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
    marginLeft: num === 0 ? 0 : `calc(100% * ${num})`
  };
};

export const rowCols = (count: number) => ({
  '& > *': {
    flex: '0 0 auto',
    width: count === 0 ? 'auto' : `calc(100% / ${count})`
  }
});

const rowClass = (slot: string) => generateUtilityClass(COMPONENT_NAME, slot);

const colClass = (slot: string) => generateUtilityClass('WuiCol', slot);

export const makeGridColumns = (theme: Theme, columns: number = COLUMNS) => {
  const styles: Record<string, any> = {};

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

      if (i <= COLUMNS - 1) {
        styles[mediaQuery][`&& .${colClass(`offset${infix}-${i}`)}`] =
          makeColOffset(i, columns);
      }
    }
  });

  return styles;
};
