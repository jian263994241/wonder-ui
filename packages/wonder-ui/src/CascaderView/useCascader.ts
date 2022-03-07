import * as React from 'react';
import { useControlled, useReactive } from '@wonder-ui/hooks';
import type {
  PickerFieldNames,
  CascaderOption,
  CascaderTab
} from './CascaderViewTypes';

const defaultFieldNames = {
  label: 'label',
  value: 'value',
  children: 'children'
};

interface useCascaderProps {
  fieldNames?: Partial<PickerFieldNames>;
  value?: any[];
  defaultValue?: any[];
  options?: CascaderOption[];
  onChange?: (value: CascaderOption[]) => void;
  onFinish?: (value: CascaderOption[]) => void;
  onConfirm?: (value: any[]) => void;
}

export default function useCascader(props: useCascaderProps) {
  const {
    fieldNames: fieldNamesProp,
    options = [],
    value: valueProp,
    defaultValue,
    onChange,
    onFinish,
    onConfirm
  } = props;

  const [value, setValueIfUncontrolled] = useControlled({
    value: valueProp,
    defaultValue
  });

  const fieldNames = React.useMemo(
    () => Object.assign({}, defaultFieldNames, fieldNamesProp),
    [fieldNamesProp]
  );

  const state = useReactive({
    selected: undefined as CascaderOption[] | undefined,
    tabIndex: 0,
    tabs: [] as CascaderTab[]
  });

  const getSelected = (params: { final?: boolean } = {}) => {
    const options = state.tabs.map((tab) => tab.selected);
    if (params.final && options.includes(null)) {
      return undefined;
    }
    return options.filter(Boolean) as CascaderOption[];
  };

  const getValues = (params: { final?: boolean } = {}) => {
    const selected = getSelected(params);
    if (selected) {
      return selected.map((item) => item?.[fieldNames.value]);
    }
  };

  const switchTab = (index: number) => {
    state.tabIndex = index;
  };

  const select = (value: any) => {
    const tab = state.tabs[state.tabIndex];
    const option = tab.options.find((item) => item[fieldNames.value] === value);

    if (option) {
      tab.selected = option;

      const children = tab.selected[fieldNames.children];
      if (children && children.length > 0) {
        const newTab = [
          {
            options: children,
            selected: null
          }
        ];

        state.tabs = state.tabs.slice(0, state.tabIndex + 1).concat(newTab);
        state.tabIndex++;
      } else {
        state.tabs = state.tabs.slice(0, state.tabIndex + 1);
      }

      const selected = state.tabs.map((tab) => tab.selected);
      const selectedValues = selected.map((item) => item?.[fieldNames.value]);

      onChange?.(selectedValues.filter(Boolean));

      if (!selected.includes(null)) {
        onFinish?.(selectedValues);
      }
    }
  };

  const confirm = () => {
    const selected = getSelected({ final: true });
    if (selected) {
      const values = selected.map((item) => item?.[fieldNames.value]);

      state.selected = selected;

      setValueIfUncontrolled(values);
      return onConfirm?.(values);
    }
  };

  React.useEffect(() => {
    if (!options || options.length === 0) {
      return;
    }

    if (
      value &&
      value.length > 0 &&
      JSON.stringify(getValues({ final: true })) === JSON.stringify(value)
    ) {
      return;
    }

    const tabs: CascaderTab[] = [
      {
        options,
        selected: null
      }
    ];

    if (value && value.length > 0) {
      value.forEach((valueItem, index) => {
        if (tabs[index]) {
          const selected = tabs[index].options.find(
            (item) => item[fieldNames.value] == valueItem
          );

          if (selected) {
            tabs[index].selected = selected;

            if (selected.children) {
              tabs.push({
                options: selected.children,
                selected: null
              });
            }
          }
        }
      });

      state.tabs = tabs;
      state.tabIndex = tabs.length - 1;
      state.selected = tabs.map((item) => item.selected as CascaderOption);
    } else {
      state.tabs = tabs;
      state.selected = undefined;
    }
  }, [value, options]);

  return {
    fieldNames,
    tabIndex: state.tabIndex,
    tabs: state.tabs,
    selected: state.selected,
    switchTab,
    select,
    confirm,
    getSelected,
    getValues
  };
}
