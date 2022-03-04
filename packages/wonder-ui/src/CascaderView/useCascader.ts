import * as React from 'react';
import { useControlled, useCreation, useReactive } from '@wonder-ui/hooks';
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
  onSelect?: (value: CascaderOption[]) => void;
  onConfirm?: (value: any[]) => void;
}

export default function useCascader(props: useCascaderProps) {
  const {
    fieldNames: fieldNamesProp,
    options = [],
    value: valueProp,
    defaultValue,
    onChange,
    onSelect,
    onConfirm
  } = props;

  const [value, setValueIfUncontrolled] = useControlled({
    value: valueProp,
    defaultValue
  });

  const fieldNames = useCreation(
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
      }

      const selected = state.tabs.map((tab) => tab.selected);

      onSelect?.(selected.filter(Boolean) as CascaderOption[]);

      if (!selected.includes(null)) {
        onChange?.(selected as CascaderOption[]);
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

  useCreation(() => {
    if (!options || options.length === 0) {
      return;
    }

    const tabs: CascaderTab[] = [
      {
        options,
        selected: null
      }
    ];

    if (
      value &&
      value.length > 0 &&
      JSON.stringify(getValues()) != JSON.stringify(value)
    ) {
      value.forEach((valueItem, index) => {
        if (tabs[index]) {
          const selected = tabs[index].options.find(
            (item) => item[fieldNames.value] === valueItem
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
      state.tabIndex = tabs.length - 1;
      state.tabs = tabs;
      state.selected = tabs.map((item) => item.selected as CascaderOption);
    } else if (!value) {
      state.selected = undefined;
      state.tabs = tabs;
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
