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

## 内置方法

```tsx | pure
export type CascaderAction = {
  getOptions(values?: any[]): CascaderOption[];
  getValues(): any[];
};
```

## API

```tsx | pure
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

<API src="./CascaderView.tsx" hideTitle></API>

