import * as React from 'react';
import { useControlled, useEventCallback } from '@wonder-ui/hooks';
import { warn } from '@wonder-ui/utils';

function isValueSelected(value: any, candidate: any[]) {
  if (candidate === undefined || value === undefined) {
    return false;
  }

  if (Array.isArray(candidate)) {
    return candidate.indexOf(value) >= 0;
  }

  return value === candidate;
}

type TValue = any | any[];

type ItemObjectOption = { value: TValue; [k: string]: any };

interface CheckableGroupItemProps {
  checked: boolean;
  data: ItemObjectOption;
  emitOnChange(): void;
  key: number;
}

export interface CheckableGroupProps {
  /**
   * 默认值
   */
  defaultValue?: TValue;
  /**
   * 单选
   */
  exclusive?: boolean;
  /**
   * 值改变时回调
   */
  onChange?(value: TValue): void;
  /**
   * 配置选项
   */
  options?: ItemObjectOption[];
  /**
   * 渲染项
   */
  onRenderItem?(props: CheckableGroupItemProps): React.ReactNode;
  /**
   * 值
   */
  value?: TValue;
}

/**
 * 单选, 多选. 类似radio, checkbox逻辑
 */

export default function CheckableGroup(props: CheckableGroupProps) {
  const {
    options = [],
    exclusive = false,
    onChange,
    onRenderItem,
    value: valueProp,
    defaultValue
  } = props;

  const [value, setValueIfunContralled] = useControlled({
    value: valueProp,
    defaultValue
  });

  const handleChange = useEventCallback(function (itemValue) {
    const index = value && value.indexOf(itemValue);

    let newValue;

    if (value && !Array.isArray(value)) {
      return warn('CheckableGroup: Value must be array when exclusive=false');
    }

    if (value && index >= 0) {
      newValue = [...value];
      newValue.splice(index, 1);
    } else {
      newValue = value ? [...value, itemValue] : [itemValue];
    }

    setValueIfunContralled(newValue);

    if (onChange) {
      onChange(newValue);
    }
  });

  const handleExclusiveChange = useEventCallback((itemValue) => {
    const newValue = value === itemValue ? value : itemValue;
    setValueIfunContralled(newValue);

    if (onChange) {
      onChange(newValue);
    }
  });

  if (typeof onRenderItem === 'function') {
    return (
      <React.Fragment>
        {options.map((dataItem, index) => {
          const dataValue = dataItem.value || dataItem;

          return onRenderItem({
            data: dataItem,
            key: index,
            checked: isValueSelected(dataValue, value),
            emitOnChange: exclusive
              ? handleExclusiveChange.bind(null, dataValue)
              : handleChange.bind(null, dataValue)
          });
        })}
      </React.Fragment>
    );
  }

  return null;
}
