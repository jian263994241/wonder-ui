import * as React from 'react';
import CheckList from '../CheckList';
import CheckListItem from '../CheckListItem';
import styled from '../styles/styled';
import Tab from '../Tab';
import TabContext from '../TabContext';
import TabPane from '../TabPane';
import Tabs from '../Tabs';
import useCascader from './useCascader';
import useThemeProps from '../styles/useThemeProps';
import { CascaderViewProps, StyleProps } from './CascaderViewTypes';
import { COMPONENT_NAME } from './CascaderViewClasses';
import { composeClasses, css } from '@wonder-ui/utils';

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
      fieldNames,
      style,
      value,
      defaultValue,
      options = [],
      placeholder = '请选择',
      onChange,
      onFinish,
      cascader: cascaderProp
    } = props;

    const cascader: ReturnType<typeof useCascader> =
      cascaderProp ??
      useCascader({
        defaultValue,
        value,
        options,
        fieldNames,
        onChange,
        onFinish
      });

    React.useImperativeHandle(actionRef, () => cascader);

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
          value={cascader.tabIndex}
          onChange={cascader.switchTab}
        >
          {cascader.tabs.map(({ selected }, index) => (
            <Tab value={index} key={index}>
              {selected ? selected[cascader.fieldNames.label] : placeholder}
            </Tab>
          ))}
        </Tabs>
        <TabContext value={cascader.tabIndex}>
          {cascader.tabs.map((tab, tabIndex) => (
            <CascaderTabPanel
              value={tabIndex}
              key={tabIndex}
              className={classes.tabPanel}
            >
              <CheckList
                activeIcon={activeIcon}
                disableRipple
                onChange={(value) => cascader.select(value[0])}
                className={classes.content}
                value={tab.selected?.[cascader.fieldNames.value]}
              >
                {tab.options.map((option, index) => (
                  <CheckListItem
                    disabled={option.disabled}
                    value={option[cascader.fieldNames.value]}
                    key={index}
                    divider={index === tab.options.length - 1 ? false : divider}
                    className={css(classes.item, option.className)}
                    style={option.style}
                    meta={option}
                    primary={option[cascader.fieldNames.label]}
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
