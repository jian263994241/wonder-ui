import * as React from 'react';
import { getOptionValue } from './PickerColumn';
import { isObject } from '@wonder-ui/utils';
import { useControlled, useEventCallback, useReactive } from '@wonder-ui/hooks';
import type {
  PickerFieldNames,
  PickerObjectColumn,
  PickerColumns,
  PickerColumn,
  PickerObjectOption,
  PickerOption
} from './PickerViewTypes';

const defaultFieldNames = {
  label: 'label',
  value: 'value',
  values: 'values',
  children: 'children'
};

type PickerDataType = 'cascade' | 'object' | 'plain';

interface usePickerProps {
  fieldNames?: Partial<PickerFieldNames>;
  value?: any[];
  defaultValue?: any[];
  columns?: PickerColumns | ((values: any[]) => PickerColumns);
  onConfirm?(values: any[]): void;
}

export default function usePicker(props: usePickerProps) {
  const {
    fieldNames: fieldNamesProp,
    defaultValue = [],
    value: valueProp,
    columns = [],
    onConfirm
  } = props;
  const [value, setValueIfUncontrolled] = useControlled({
    defaultValue,
    value: valueProp
  });

  const fieldNames = React.useMemo(
    () => Object.assign({}, defaultFieldNames, fieldNamesProp),
    [fieldNamesProp]
  );

  const state = useReactive({
    selected: undefined as PickerOption[] | undefined,
    indexes: [] as number[],
    columns: [] as PickerObjectColumn[],
    dataType: 'plain' as PickerDataType
  });

  const setColumns = (
    columns: PickerColumns | ((values: any[]) => PickerColumns)
  ) => {
    if (typeof columns === 'function') {
      columns = columns(getValues());
    } else if (!Array.isArray(columns)) {
      columns = [columns as PickerObjectColumn].filter(Boolean);
    }

    const firstColumn = (columns as PickerColumn[] | PickerObjectColumn[])[0];

    let dataType = 'plain' as PickerDataType,
      formattedColumns = [] as PickerObjectColumn[];

    if (isObject(firstColumn)) {
      if (fieldNames.children in firstColumn) {
        dataType = 'cascade';
        formattedColumns = formatCascade(columns);
      }
      if (fieldNames.values in firstColumn) {
        dataType = 'object';
        formattedColumns = columns as PickerObjectColumn[];
      } else {
        formattedColumns = [{ [fieldNames.values]: columns }];
      }
    } else {
      formattedColumns = [{ [fieldNames.values]: columns }];
    }

    state.dataType = dataType;
    state.columns = formattedColumns;
  };

  // get options of column
  const getColumnOptions = (columnIndex: number) => {
    return state.columns[columnIndex]?.[fieldNames.values] || [];
  };
  // get columns index
  const getIndexes = () => {
    const result = [];
    for (
      let columnIndex = 0;
      columnIndex < state.columns.length;
      columnIndex++
    ) {
      const { defaultIndex = 0 } = state.columns[columnIndex];
      result[columnIndex] = state.indexes[columnIndex] ?? defaultIndex;
    }

    return result;
  };

  const getIndexesByValue = (value: any[]) => {
    const indexes = state.columns.map((column, columnIndex) => {
      const { defaultIndex = 0, values = [] } = column;
      const index = values.findIndex(
        (item) => getOptionValue(item, fieldNames) === value[columnIndex]
      )!;
      return index > -1 ? index : defaultIndex;
    });

    return indexes;
  };

  const getSlectedOptions = useEventCallback(() => {
    const indexes = getIndexes();
    const result = [];

    for (let columnIndex = 0; columnIndex < indexes.length; columnIndex++) {
      const options = getColumnOptions(columnIndex);
      result[columnIndex] = options[indexes[columnIndex]];
    }

    return result;
  });

  // get values of all columns
  const getValues = useEventCallback(() => {
    const options = getSlectedOptions();
    return options.map((item) => getOptionValue(item, fieldNames));
  });

  // set options of column by index
  const setColumnOptions = (columnIndex: number, options: PickerOption[]) => {
    const target = state.columns[columnIndex];
    if (
      options &&
      target &&
      JSON.stringify(options) != JSON.stringify(target[fieldNames.values])
    ) {
      target[fieldNames.values] = options;
      state.indexes[columnIndex] = state.columns[columnIndex].defaultIndex ?? 0;
    }
  };

  const setColumnIndex = (columnIndex: number, index: number) => {
    const indexes = getIndexes();
    indexes[columnIndex] = index;
    state.indexes = indexes;

    if (state.dataType === 'cascade') {
      onCascadeChange(columnIndex);
    }
  };

  React.useEffect(() => {
    setColumns(columns);
  }, [columns, value]);

  React.useEffect(() => {
    const nextIndexes = getIndexesByValue(value);

    if (JSON.stringify(nextIndexes) != JSON.stringify(state.indexes)) {
      state.indexes = nextIndexes;
    }
  }, [value]);

  const confirm = () => {
    const values = getValues();

    setValueIfUncontrolled(values);
    return onConfirm?.(values);
  };

  React.useEffect(() => {
    const selected = getSlectedOptions();

    if (value.length > 0) {
      state.selected = selected;
    } else {
      state.selected = undefined;
    }
  }, [value]);

  return {
    value,
    fieldNames,
    indexes: state.indexes,
    columns: state.columns,
    selected: state.selected,
    confirm,
    getSlectedOptions,
    getValues,
    setColumns,
    setColumnIndex,
    setColumnOptions,
    getColumnOptions
  };

  function formatCascade(columns: PickerColumns) {
    const formatted: PickerObjectColumn[] = [];

    let cursor: PickerObjectColumn = { [fieldNames.children]: columns };

    let columnIndex = 0;

    while (cursor && cursor[fieldNames.children]) {
      const children = cursor[fieldNames.children];
      let defaultIndex = cursor.defaultIndex ?? +0;

      formatted.push({
        [fieldNames.values]: children,
        className: cursor.className,
        defaultIndex
      });

      let index;
      if (state.indexes[columnIndex]) {
        index = state.indexes[columnIndex];
      } else if (value[columnIndex]) {
        index = children.findIndex((item: PickerOption) => {
          return getOptionValue(item, fieldNames) === value[columnIndex];
        });
      }

      index = index > -1 ? index : defaultIndex;

      cursor = children[index];

      columnIndex++;
    }

    return formatted;
  }

  function onCascadeChange(columnIndex: number) {
    let cursor: PickerObjectOption = {
      [fieldNames.children]: columns
    };

    for (let i = 0; i <= columnIndex; i++) {
      cursor = cursor[fieldNames.children]?.[state.indexes[i]];

      if (!cursor) {
        break;
      }
    }

    for (let i = 0; i < state.indexes.length; i++) {
      if (i > columnIndex && !cursor[fieldNames.children]) {
        setColumnOptions(i, []);
      }
    }

    while (cursor && cursor[fieldNames.children]) {
      columnIndex++;
      setColumnOptions(columnIndex, cursor[fieldNames.children]);
      cursor = cursor[fieldNames.children][cursor.defaultIndex || 0];
    }
  }
}
