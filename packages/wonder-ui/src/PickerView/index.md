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

### 多列选择

<code src="./demo/demo2.tsx"></code>

### 级联选择

<code src="./demo/demo3.tsx"></code>

### 禁用选项

<code src="./demo/demo4.tsx"></code>

### 动态设置选项

<code src="./demo/demo5.tsx"></code>

### 加载状态

<code src="./demo/demo6.tsx"></code>

### 默认值

<code src="./demo/demo7.tsx"></code>

### 地址选择器

<code src="./demo/demo8.tsx"></code>


## Column 数据结构

### 单列

```tsx pure
const data = ['杭州', '宁波', '温州', '绍兴', '湖州']

const data2 = {
  values: ['杭州', '宁波', '温州', '绍兴', '湖州']
  defaultIndex: 2
}

```

### 多列

```tsx pure
const data = [
  {
    values: ['周一', '周二', '周三', '周四', '周五'],
    defaultIndex: 2
  },
  {
    values: ['上午', '下午', '晚上'],
    defaultIndex: 1
  }
]
```

### 级联

```tsx pure
const data = [
  {
    text: '浙江',
    children: [
      {
        text: '杭州',
        children: [{ text: '西湖区' }, { text: '余杭区' }]
      },
      {
        text: '温州',
        children: [{ text: '鹿城区' }, { text: '瓯海区' }]
      }
    ]
  },
  {
    text: '福建',
    children: [
      {
        text: '福州',
        children: [{ text: '鼓楼区' }, { text: '台江区' }]
      },
      {
        text: '厦门',
        children: [{ text: '思明区' }, { text: '海沧区' }]
      }
    ]
  }
];

// textKey = label
const data2 = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '杭州',
        value: '杭州'
      },
      {
        label: '宁波',
        value: '宁波'
      }
    ]
  },
  {
    label: '江苏',
    value: '江苏',
    children: [
      {
        label: '南京',
        value: '南京'
      },
      {
        label: '苏州',
        value: '苏州'
      }
    ]
  }
];
```

## 内置方法

通过 `actionRef` 可以获取到 PickerView 内置方法 `PickerAction`

```ts prue
export type PickerAction = {
  getValues(): PickerOption[];
  setValues(values: string[]): void;
  getIndexes(): number[];
  setIndexes(indexes: number[]): void;
  getColumnValue(columnIndex: number): PickerOption | undefined;
  setColumnValue(index: number, value: string): void;
  getColumnIndex(index: number): number | undefined;
  setColumnIndex(columnIndex: number, optionIndex: number): void;
  getColumnValues(index: number): PickerOption[] | undefined;
  setColumnValues(index: number, options: PickerOption[]): void;
  confirm(): void;
};

```


<API src="./PickerView.tsx" ></API>
