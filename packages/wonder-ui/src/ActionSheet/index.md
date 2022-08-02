---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /fb
  title: 反馈
  order: 5
---

# ActionSheet 动作面板

底部弹起的模态面板，包含与当前情境相关的多个选项。

## 代码演示

<code src="./demo/demo1.tsx"></code>



<API src="./ActionSheet.tsx" ></API>

###  ActionSheetAction 数据结构

```jsx pure
export type ActionSheetAction = {
  text: string;
  description?: string;
  disabled?: boolean;
  danger?: boolean;
  onClick?: React.MouseEventHandler<MouseEvent>;
  key?: any;
  // others
  [k: string]: any;
}
```
### useActionSheet

```tsx pure
const actionSheet = useActionSheet(Omit<ActionSheetProps, 'visible'>?)

actionSheet.show(Omit<ActionSheetProps, 'visible'>?) //显示
actionSheet.hide() //隐藏
actionSheet.rendered //渲染, 放入虚拟dom上下文中

```



