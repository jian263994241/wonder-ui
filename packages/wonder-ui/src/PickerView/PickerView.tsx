import * as React from 'react';
import ActivityIndicator from '../ActivityIndicator';
import Backdrop from '../Backdrop';
import Column from './PickerColumn';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { COMPONENT_NAME } from './PickerViewClasses';
import {
  composeClasses,
  css,
  generateUtilityClasses,
  isControlled,
  isObject,
  unitToPx
} from '@wonder-ui/utils';
import {
  PickerAction,
  PickerColumnAction,
  PickerObjectColumn,
  PickerObjectOption,
  PickerOption,
  PickerViewProps
} from './PickerViewTypes';
import { useCreation } from '@wonder-ui/hooks';

export const pickerClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'drawser',
  'columns',
  'mask',
  'indicator',
  'cloumnRoot',
  'cloumnInner',
  'cloumnItem',
  'loading',
  'readOnly'
]);

const useClasses = (styleProps: PickerViewProps) => {
  const { classes, readOnly } = styleProps;
  const slots = {
    root: ['root', readOnly && 'readOnly'],
    columns: ['columns'],
    cloumn: ['cloumn'],
    content: ['content'],
    item: ['item'],
    mask: ['mask'],
    indicator: ['indicator'],
    loading: ['loading']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const PickerRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })(
  ({ theme }) => ({
    position: 'relative',
    userSelect: 'none',
    backgroundColor: theme.palette.background.paper
  })
);

const PickerColumns = styled('div', { name: COMPONENT_NAME, slot: 'Columns' })({
  display: 'flex',
  position: 'relative'
});

const PickerMask = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Mask'
})(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  backgroundImage:
    theme.palette.mode == 'light'
      ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6))'
      : 'transparent',
  backgroundPosition: 'top, bottom',
  backgroundRepeat: 'no-repeat',
  transform: 'translateZ(0)',
  pointerEvents: 'none'
}));

const PickerIndicator = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Indicator'
})(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  borderTop: `thin solid ${theme.palette.divider}`,
  borderBottom: `thin solid ${theme.palette.divider}`,
  pointerEvents: 'none'
}));

const PickerViewLoading = styled(Backdrop, {
  name: COMPONENT_NAME,
  slot: 'Loading'
})(({ theme }) => ({
  position: 'absolute',
  zIndex: 101,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: alpha(theme.palette.background.paper, 0.6)
}));

const PickerView = React.forwardRef<HTMLDivElement, PickerViewProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      actionRef,
      className,
      style,
      itemHeight: itemHeightProp = 44,
      textKey = 'text',
      valuesKey = 'values',
      childrenKey = 'children',
      columns: columnsProp,
      readOnly = false,
      loading = false,
      visibleItemCount = 6,
      onChange,
      onConfirm,
      defaultValue,
      value
    } = props;

    const columns = React.useMemo(() => {
      if (Array.isArray(columnsProp)) {
        return columnsProp;
      } else {
        return [columnsProp].filter(Boolean);
      }
    }, [columnsProp]);

    const dataType = useCreation(() => {
      const firstColumn = columns[0];

      if (isObject(firstColumn)) {
        if (childrenKey in firstColumn) return 'cascade';
        if ('values' in firstColumn) return 'object';
      }

      return 'plain';
    }, [columns]);

    const styleProps = {
      ...props,
      readOnly,
      loading
    };

    const formatCascade = () => {
      const formatted: PickerObjectColumn[] = [];

      let cursor: PickerObjectColumn = { [childrenKey]: columns };

      while (cursor && cursor[childrenKey]) {
        const children = cursor[childrenKey];
        let defaultIndex = cursor.defaultIndex ?? +0;

        while (children[defaultIndex] && children[defaultIndex].disabled) {
          if (defaultIndex < children.length - 1) {
            defaultIndex++;
          } else {
            defaultIndex = 0;
            break;
          }
        }

        formatted.push({
          [valuesKey]: cursor[childrenKey],
          className: cursor.className,
          defaultIndex
        });

        cursor = children[defaultIndex];
      }

      return formatted;
    };

    const formattedColumns = useCreation<PickerObjectColumn[]>(() => {
      if (dataType === 'plain') {
        return [{ [valuesKey]: columns }];
      } else if (dataType === 'cascade') {
        return formatCascade();
      } else {
        return columns as PickerObjectColumn[];
      }
    }, [dataType, columns]);

    const childrenRefs = React.useRef<PickerColumnAction[]>([]);

    React.useEffect(() => {
      if (isControlled(props, 'value')) {
        const val = value || defaultValue;

        if (val && val.length > 0) {
          setValues(val);
        }
      }
    }, [value, defaultValue]);

    // get indexes of all columns
    const getIndexes = () =>
      childrenRefs.current.map((child) => child.getIndex());

    // set options of column by index
    const setColumnValues = (index: number, options: PickerOption[]) => {
      const column = childrenRefs.current[index];
      if (column) {
        column.setOptions(options);
      }
    };

    const onCascadeChange = (columnIndex: number) => {
      let cursor: PickerObjectOption = {
        [childrenKey]: columns
      };

      const indexes = getIndexes();

      for (let i = 0; i <= columnIndex; i++) {
        cursor = cursor[childrenKey]?.[indexes[i]];

        if (!cursor) {
          break;
        }
      }

      for (let i = 0; i < indexes.length; i++) {
        if (i > columnIndex && !cursor[childrenKey]) {
          setColumnValues(i, []);
        }
      }

      while (cursor && cursor[childrenKey]) {
        columnIndex++;
        setColumnValues(columnIndex, cursor[childrenKey]);
        cursor = cursor[childrenKey][cursor.defaultIndex || 0];
      }
    };

    // get column instance by index
    const getChild = (index: number) => childrenRefs.current[index];

    // get column value by index
    const getColumnValue = (index: number) => {
      const column = getChild(index);
      if (column) {
        return column.getValue();
      }
    };

    // set column value by index
    const setColumnValue = (index: number, value: string) => {
      const column = getChild(index);

      if (column) {
        column.setValue(value);

        if (dataType === 'cascade') {
          onCascadeChange(index);
        }
      }
    };

    // get column option index by column index
    const getColumnIndex = (index: number) => {
      const column = getChild(index);
      if (column) {
        return column.getIndex();
      }
    };

    // get values of all columns
    const getValues = () =>
      childrenRefs.current.map((child) => {
        return child.getValue();
      });

    // set values of all columns
    const setValues = (values?: string[]) => {
      if (Array.isArray(values)) {
        values.forEach((value, index) => {
          setColumnValue(index, value);
        });
      }
    };

    // set indexes of all columns
    const setIndexes = (indexes: number[]) => {
      indexes.forEach((optionIndex, columnIndex) => {
        setColumnIndex(columnIndex, optionIndex);
      });
    };

    // set column option index by column index
    const setColumnIndex = (columnIndex: number, optionIndex: number) => {
      const column = getChild(columnIndex);
      if (column) {
        column.setIndex(optionIndex);
        if (dataType === 'cascade') {
          onCascadeChange(columnIndex);
        }
      }
    };

    // get options of column by index
    const getColumnValues = (index: number) => {
      const column = getChild(index);
      if (column) {
        return column.getOptions();
      }
    };

    const emitEvent = (
      callback?: (value: PickerOption[], picker: PickerAction) => void
    ) => {
      setTimeout(() => {
        callback?.(getValues(), pickerAction);
      }, 0);
    };

    const handleChange = (columnIndex: number) => {
      if (dataType === 'cascade') {
        onCascadeChange(columnIndex);
      }

      emitEvent(onChange);
    };

    const confirm = () => {
      childrenRefs.current.forEach((child) => child.stopMomentum());
      emitEvent(onConfirm);
    };

    const classes = useClasses(styleProps);

    const styles = useCreation(() => {
      const itemHeight = unitToPx(itemHeightProp);
      const wrapHeight = itemHeight * +visibleItemCount;
      const frameStyle = { height: itemHeight };
      const columnsStyle = { height: wrapHeight };
      const maskStyle = {
        backgroundSize: `100% ${(wrapHeight - itemHeight) / 2}px`
      };
      return {
        itemHeight,
        frameStyle,
        columnsStyle,
        maskStyle
      };
    }, [itemHeightProp, visibleItemCount]);

    const pickerAction = {
      getValues,
      setValues,
      getIndexes,
      setIndexes,
      getColumnValue,
      setColumnValue,
      getColumnIndex,
      setColumnIndex,
      getColumnValues,
      setColumnValues,
      confirm
    };

    React.useImperativeHandle(actionRef, () => pickerAction);

    return (
      <PickerRoot
        ref={ref}
        className={css(classes.root, className)}
        style={style}
      >
        <PickerViewLoading visible={loading} className={classes.loading}>
          <ActivityIndicator color="primary" iconSize="medium" />
        </PickerViewLoading>
        <PickerColumns className={classes.columns} style={styles.columnsStyle}>
          <PickerMask style={styles.maskStyle} className={classes.mask} />
          <PickerIndicator
            style={styles.frameStyle}
            className={classes.indicator}
          />
          {formattedColumns.map((item, columnIndex) => {
            return (
              <Column
                actionRef={(action) => {
                  childrenRefs.current[columnIndex] = action!;
                }}
                key={columnIndex}
                textKey={textKey}
                readOnly={readOnly}
                itemHeight={styles.itemHeight}
                defaultIndex={item.defaultIndex ?? +0}
                initialOptions={item[valuesKey]}
                visibleItemCount={visibleItemCount}
                onChange={() => handleChange(columnIndex)}
                classes={{
                  root: css(classes.cloumn, item.className),
                  content: classes.content,
                  item: classes.item
                }}
              />
            );
          })}
        </PickerColumns>
      </PickerRoot>
    );
  }
);

export default PickerView;
