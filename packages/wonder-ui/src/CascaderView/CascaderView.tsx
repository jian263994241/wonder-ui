import * as React from 'react';
import CheckList from '../CheckList';
import CheckListItem from '../CheckListItem';
import styled from '../styles/styled';
import Tab from '../Tab';
import TabContext from '../TabContext';
import TabPane from '../TabPane';
import Tabs from '../Tabs';
import useThemeProps from '../styles/useThemeProps';
import {
  CascaderOption,
  CascaderTab,
  CascaderViewProps,
  StyleProps
} from './CascaderViewTypes';
import { COMPONENT_NAME } from './CascaderViewClasses';
import { composeClasses, css, isControlled, isObject } from '@wonder-ui/utils';
import { useCreation, useEventCallback } from '@wonder-ui/hooks';

const useClasses = (styleProps: StyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    tabs: ['tabs'],
    tabPanel: ['tabPanel'],
    content: ['content'],
    item: ['item']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const CascaderViewRoot = styled('div', {
  slot: 'Root',
  name: COMPONENT_NAME
})({});

const CascaderTabPanel = styled(TabPane, {
  name: COMPONENT_NAME,
  slot: 'TabPanel'
})({
  height: 'var(--cascader-content-height, 310px)',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch'
});

const CascaderView = React.forwardRef<HTMLDivElement, CascaderViewProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      actionRef,
      activeIcon,
      className,
      disableRipple,
      divider,
      style,
      valueKey = 'value',
      textKey = 'label',
      childrenKey = 'children',
      value,
      defaultValue,
      options = [],
      placeholder = '请选择',
      onChange,
      onSelect
    } = props;

    const [innerValue, setInnerValue] = React.useState<CascaderOption[]>([]);
    const [activeTabIndex, setActiveTabIndex] = React.useState(0);

    React.useEffect(() => {
      if (isControlled(props, 'value') || defaultValue) {
        const val = value || defaultValue;

        if (val && val.length > 0) {
          setInnerValue(isObject(val[0]) ? val : actions.getOptions(val));
          setActiveTabIndex(val.length - 1);
        }
      }
    }, [value, defaultValue]);

    const getSelectedOptionsByValue = (
      options: CascaderOption[],
      value: string | number
    ): CascaderOption[] | undefined => {
      for (const option of options) {
        if (option[valueKey] === value) {
          return [option];
        }

        if (option[childrenKey]) {
          const selectedOptions = getSelectedOptionsByValue(
            option[childrenKey],
            value
          );
          if (selectedOptions) {
            return [option, ...selectedOptions];
          }
        }
      }
    };

    const getSelectedOptionsByValues = (
      options: CascaderOption[],
      values: any[] = []
    ): CascaderTab[] => {
      const lastValue = values[values.length - 1];
      const selectedOptions = getSelectedOptionsByValue(options, lastValue);

      if (selectedOptions) {
        let optionsCursor = options;
        const tabs: CascaderTab[] = selectedOptions.map((option) => {
          const tab = { options: optionsCursor, selected: option };
          const next = optionsCursor.find(
            (item) => item[valueKey] === option[valueKey]
          );
          if (next) {
            optionsCursor = next[childrenKey];
          }
          return tab;
        });
        if (optionsCursor) {
          tabs.push({ options: optionsCursor, selected: null });
        }
        return tabs;
      }
      return [{ options, selected: null }];
    };

    const selectedOptions = useCreation(() => {
      return getSelectedOptionsByValues(
        options,
        innerValue.map((item) => item[valueKey])
      );
    }, [innerValue, options]);

    const actions = {
      getOptions: (values?: any[]) => {
        return getSelectedOptionsByValues(options, values || innerValue)
          .map((tab) => tab.selected)
          .filter(Boolean) as CascaderOption[];
      },
      getValues: () => innerValue
    };

    React.useImperativeHandle(actionRef, () => actions);

    const handleSelect = useEventCallback(
      (tabIndex: number, value: any, meta: CascaderOption) => {
        const prevValue = innerValue[tabIndex];
        const newValue: CascaderOption[] = [];
        const hasNext = meta.children && meta.children.length > 0;

        if (hasNext) {
          setActiveTabIndex(tabIndex + 1);
        }

        if (!prevValue || prevValue[valueKey] != value[0]) {
          for (let i = 0; i < tabIndex; i++) {
            newValue[i] = innerValue[i];
          }
          newValue[tabIndex] = meta;

          setInnerValue(newValue);
          onSelect?.(newValue);

          if (!hasNext) {
            onChange?.(newValue);
          }
        }
      }
    );

    const onTabChange = (index: number) => setActiveTabIndex(index);

    const classes = useClasses(props);

    return (
      <CascaderViewRoot
        ref={ref}
        style={style}
        className={css(classes.root, className)}
      >
        <Tabs
          showIndicator
          className={classes.tabs}
          disableRipple={disableRipple}
          variant="scrollable"
          value={activeTabIndex}
          onChange={onTabChange}
        >
          {selectedOptions.map(({ selected }, index) => (
            <Tab value={index} key={index}>
              {selected ? selected[textKey] : placeholder}
            </Tab>
          ))}
        </Tabs>
        <TabContext value={activeTabIndex}>
          {selectedOptions.map((tab, index) => (
            <CascaderTabPanel
              value={index}
              key={index}
              className={classes.tabPanel}
            >
              <CheckList
                activeIcon={activeIcon}
                disableRipple={disableRipple}
                onChange={handleSelect.bind(null, index)}
                className={classes.content}
                value={tab.selected?.[valueKey]}
              >
                {tab.options.map((option, index) => (
                  <CheckListItem
                    disabled={option.disabled}
                    value={option[valueKey]}
                    key={index}
                    divider={index === tab.options.length - 1 ? false : divider}
                    className={css(classes.item, option.className)}
                    style={option.style}
                    meta={option}
                    primary={option[textKey]}
                    secondary={option.description}
                  />
                ))}
              </CheckList>
            </CascaderTabPanel>
          ))}
        </TabContext>
      </CascaderViewRoot>
    );
  }
);

export default CascaderView;
