---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /data-input
  title: 数据录入
  order: 3
---
# CascaderView 级联选择器

级联选择器视图


## 代码演示

### 基本使用

通过设置css变量`--cascader-content-height`改变滚动选项内容高度

<code src="./demo/demo1.tsx"></code>





<API src="./CascaderView.tsx" ></API>


## 类型

```tsx | pure
// 内置方法
export type CascaderAction = {
  getSelected(params: { final?: boolean }): CascaderOption[] | undefined;
  getValues(params: { final?: boolean }): any[] | undefined;
};

//选项
export type CascaderOption = {
  textKey?: React.ReactNode;
  value?: string | number;
  disabled?: boolean;
  children?: CascaderOption[];
  className?: string;
  style?: React.CSSProperties;
  description?: string;
  // for custom filed names
  [key: string]: any;
};
```
