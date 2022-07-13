---
hide: true
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /data-input
  title: 数据录入
  order: 3
---

# CheckableGroup 可选项

控制`单选`, `多选`逻辑, 自定义UI

## 代码演示

### 按钮选项组

<code src="../ButtonGroup/demo/demo4.tsx"></code>

### 单选选项组

<code src="../ButtonGroup/demo/demo5.tsx"></code>

## 类型

```ts
type TValue = any | any[];

interface CheckableGroupItemProps {
  checked: boolean;
  data: { value: TValue; [k: string]: any };
  emitOnChange(): void;
  key: number;
}
```

<API src="./CheckableGroup.tsx" ></API>



