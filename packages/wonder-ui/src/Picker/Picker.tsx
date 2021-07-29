import * as React from 'react';
import ActivityIndicator from '../ActivityIndicator';
import Backdrop from '../Backdrop';
import Button from '../Button';
import Column, {
  PickerColumnAction,
  PickerObjectColumn,
  PickerOption
} from './PickerColumn';
import Navbar, { NavbarProps } from '../Navbar';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import {
  composeClasses,
  css,
  generateUtilityClasses,
  isObject,
  preventDefault
} from '@wonder-ui/utils';
import {
  useDebounceFn,
  useEventCallback,
  useEventListener,
  useSafeState
} from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiPicker';

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
  'readOnly',
  'showNavbar',
  'navbar',
  'drawer'
]);

const useClasses = (styleProps: PickerProps) => {
  const { classes, readOnly, showNavbar } = styleProps;
  const slots = {
    root: ['root', readOnly && 'readOnly', showNavbar && 'showNavbar'],
    columns: ['columns'],
    cloumnRoot: ['cloumnRoot'],
    cloumnInner: ['cloumnInner'],
    cloumnItem: ['cloumnItem'],
    mask: ['mask'],
    indicator: ['indicator'],
    loading: ['loading'],
    drawer: ['drawer'],
    navbar: ['navbar']
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

const PickerColumns = styled('div', { name: COMPONENT_NAME, slot: 'Columns ' })(
  {
    display: 'flex',
    position: 'relative'
  }
);

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

const PickerLoading = styled(Backdrop, {
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

export type PickerAction = {
  getValues(): PickerOption[];
  setValues(values: (string | number)[]): void;
  getIndexes(): number[];
  setIndexes(indexes: number[]): void;
  getColumnValue(columnIndex: number): PickerOption | undefined;
  setColumnValue(index: number, value: string | number): void;
  getColumnIndex(index: number): number | undefined;
  setColumnIndex(columnIndex: number, optionIndex: number): void;
  getColumnValues(index: number): PickerOption[] | undefined;
  setColumnValues(index: number, options: PickerOption[]): void;
  confirm(): void;
};

export interface PickerProps {
  actionRef?: React.Ref<PickerAction | null>;

  className?: string;
  style?: React.CSSProperties;
  classes?: Partial<typeof pickerClasses>;

  itemHeight?: number;

  textKey?: string;
  valuesKey?: string;
  childrenKey?: string;

  columns?: PickerOption[] | PickerObjectColumn[];

  visibleItemCount?: number;
  defaultIndex?: number;
  swipeDuration?: number;
  readOnly?: boolean;

  showNavbar?: boolean;

  navbarPosition?: 'top' | 'bottom';

  NavbarProps?: Partial<NavbarProps>;

  title?: string;
  subTitle?: string;
  cancelText?: string;
  confirmText?: string;

  loading?: boolean;

  onChange?(value: PickerOption | PickerOption[], columnIndex: number): void;
  onConfirm?(
    value: PickerOption | PickerOption[],
    columnIndex: number | number[]
  ): void;
  onCancel?(
    value: PickerOption | PickerOption[],
    columnIndex: number | number[]
  ): void;
}

const Picker = React.forwardRef<HTMLDivElement, PickerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    NavbarProps,
    actionRef,
    className,
    style,
    itemHeight = 44,
    textKey = 'text',
    valuesKey = 'values',
    childrenKey = 'children',
    columns = [],
    defaultIndex: defaultIndexProp = 0,
    swipeDuration = 600,
    readOnly = false,
    loading = false,
    visibleItemCount = 6,
    showNavbar = true,
    navbarPosition = 'top',
    title,
    subTitle,
    cancelText = '取消',
    confirmText = '确定',
    onChange,
    onConfirm,
    onCancel
  } = props;

  const styleProps = {
    ...props,
    readOnly,
    loading,
    swipeDuration,
    showNavbar,
    navbarPosition
  };

  const [formattedColumns, setFormattedColumns] = useSafeState<
    PickerObjectColumn[]
  >([]);
  const childrenRefs = React.useRef<PickerColumnAction[]>([]);

  const dataType = React.useMemo(() => {
    const firstColumn = columns[0];
    if (isObject(firstColumn)) {
      if (childrenKey in firstColumn) return 'cascade';
      if (valuesKey in firstColumn) return 'object';
    }
    return 'plain';
  }, [columns]);

  const formatCascade = () => {
    const formatted: PickerObjectColumn[] = [];

    let cursor: PickerObjectColumn = { [childrenKey]: columns };

    while (cursor && cursor[childrenKey]) {
      const children = cursor[childrenKey];
      let defaultIndex = cursor.defaultIndex ?? +defaultIndexProp;

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

    setFormattedColumns(formatted);
  };

  const format = () => {
    if (dataType === 'plain') {
      setFormattedColumns([{ [valuesKey]: columns }]);
    } else if (dataType === 'cascade') {
      formatCascade();
    } else {
      setFormattedColumns(columns as PickerObjectColumn[]);
    }
  };

  // get indexes of all columns
  const getIndexes = () =>
    childrenRefs.current.map((child) => child.state.index);

  // set options of column by index
  const setColumnValues = (index: number, options: PickerOption[]) => {
    const column = childrenRefs.current[index];
    if (column) {
      column.setOptions(options);
    }
  };

  const onCascadeChange = (columnIndex: number) => {
    let cursor: PickerObjectColumn = {
      [childrenKey]: columns
    };
    const indexes = getIndexes();

    for (let i = 0; i <= columnIndex; i++) {
      cursor = cursor[childrenKey]?.[indexes[i]];
      if (!cursor) {
        break;
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
  const setColumnValue = (index: number, value: string | number) => {
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
      return column.state.index;
    }
  };

  // get values of all columns
  const getValues = () => childrenRefs.current.map((child) => child.getValue());

  // set values of all columns
  const setValues = (values: (string | number)[]) => {
    values.forEach((value, index) => {
      setColumnValue(index, value);
    });
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
      return column.state.options;
    }
  };

  React.useEffect(format, [dataType, columns]);

  const emitEvent = (
    callback?: (value: PickerOption, columnIndex: number | number[]) => void
  ) => {
    if (dataType === 'plain') {
      callback?.(getColumnValue(0)!, getColumnIndex(0)!);
    } else {
      callback?.(getValues(), getIndexes());
    }
  };

  const handleChange = useEventCallback((columnIndex: number) => {
    if (dataType === 'cascade') {
      onCascadeChange(columnIndex);
    }

    if (dataType === 'plain') {
      onChange?.(getColumnValue(0)!, getColumnIndex(0)!);
    } else {
      onChange?.(getValues(), columnIndex);
    }
  });

  const confirm = useEventCallback(() => {
    childrenRefs.current.forEach((child) => child.stopMomentum());
    emitEvent(onConfirm);
  });

  const cancel = () => emitEvent(onCancel);

  const classes = useClasses(styleProps);

  const renderColumnItems = () => {
    return formattedColumns.map((item, columnIndex) => {
      return (
        <Column
          actionRef={(action) => {
            childrenRefs.current[columnIndex] = action!;
          }}
          key={columnIndex}
          textKey={textKey}
          readOnly={readOnly}
          className={item.className}
          itemHeight={itemHeight}
          defaultIndex={item.defaultIndex ?? +defaultIndexProp}
          swipeDuration={swipeDuration}
          initialOptions={item[valuesKey]}
          visibleItemCount={visibleItemCount}
          onChange={() => handleChange(columnIndex)}
          classes={{
            root: classes.cloumnRoot,
            inner: classes.cloumnInner,
            item: classes.cloumnItem
          }}
        />
      );
    });
  };

  const columnsWrapRef = React.useRef<HTMLDivElement>(null);

  useEventListener(columnsWrapRef, 'ontouchmove', preventDefault);

  const renderColumns = () => {
    const wrapHeight = itemHeight * +visibleItemCount;
    const frameStyle = { height: itemHeight };
    const columnsStyle = { height: wrapHeight };
    const maskStyle = {
      backgroundSize: `100% ${(wrapHeight - itemHeight) / 2}px`
    };
    return (
      <PickerColumns
        className={classes.columns}
        ref={columnsWrapRef}
        style={columnsStyle}
      >
        {renderColumnItems()}
        <PickerMask style={maskStyle} className={classes.mask} />
        <PickerIndicator style={frameStyle} className={classes.indicator} />
      </PickerColumns>
    );
  };

  const renderNavbar = () =>
    showNavbar ? (
      <Navbar
        title={title}
        subTitle={subTitle}
        left={
          <Button variant="text" onClick={cancel}>
            {cancelText}
          </Button>
        }
        right={
          <Button variant="text" onClick={confirm}>
            {confirmText}
          </Button>
        }
        {...NavbarProps}
        className={css(classes.navbar, NavbarProps?.className)}
      />
    ) : null;

  React.useImperativeHandle(
    actionRef,
    () => ({
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
    }),
    [columns]
  );

  return (
    <PickerRoot
      ref={ref}
      className={css(classes.root, className)}
      style={style}
    >
      {navbarPosition === 'top' && renderNavbar()}
      <PickerLoading visible={loading} className={classes.loading}>
        <ActivityIndicator color="primary" iconSize="medium" />
      </PickerLoading>
      {renderColumns()}
      {navbarPosition === 'bottom' && renderNavbar()}
    </PickerRoot>
  );
});

export default Picker;
