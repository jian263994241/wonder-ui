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

### 地址选择器

<code src="./demo/demo7.tsx"></code>


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

通过 `actionRef` 可以获取到 Picker 内置方法

| 方法名 |	说明 |	参数 |	返回值
| --- | --- | --- | ---
| getValues	| 获取所有列选中的值 |	-	| values
| setValues	| 设置所有列选中的值 |	values	| -
| getIndexes	| 获取所有列选中值对应的索引 |	-	| indexes
| setIndexes	| 设置所有列选中值对应的索引 |	indexes	| -
| getColumnValue	| 获取对应列选中的值 |	columnIndex	| value
| setColumnValue	| 设置对应列选中的值 |	columnIndex, value	| -
| getColumnIndex	| 获取对应列选中项的索引 |	columnIndex	| optionIndex
| setColumnIndex	| 设置对应列选中项的索引 |	columnIndex, optionIndex	| -
| getColumnValues	| 获取对应列中所有选项 |	columnIndex	| values
| setColumnValues	| 设置对应列中所有选项 |	columnIndex, values	| -
| confirm	| 停止惯性滚动并触发 confirm 事件 |	-	| -


<API src="./PickerView.tsx" ></API>
