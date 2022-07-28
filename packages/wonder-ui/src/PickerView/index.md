---
nav:
  path: /components
group:
  path: /data-input
  title: 数据录入
  order: 3
---

# PickerView 选择器视图

提供多个选项集合供用户选择，支持单列选择和多列级联。


## 代码演示


### 基本使用

<code src="./demo/demo1.tsx"></code>

### 动态设置选项

<code src="./demo/demo2.tsx"></code>



## 内置方法

通过 `actionRef` 可以获取到 PickerView 内置方法 `PickerAction`

```ts prue
export type PickerViewAction = {
  getValues(): PickerOption[];
  getIndexes(): number[];
  getColumnValue(columnIndex: number): PickerOption | undefined;
  getColumnIndex(index: number): number | undefined;
  setColumnIndex(columnIndex: number, optionIndex: number): void;
  getColumnOptions(index: number): PickerOption[] | undefined;
  setColumnOptions(index: number, options: PickerOption[]): void;
};

```


<API src="./PickerView.tsx" ></API>
