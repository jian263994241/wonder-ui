---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /fb
  title: 反馈
  order: 5
---
# Snackbar 消息条

展示操作反馈信息。 提供成功、警告和错误等简短的通知信息。


## 代码演示

### 基本使用


<code src="./demo/demo1.tsx"></code>

### 消息条的位置

通过指定 `anchorOrigin` 的属性，您可以控制消息条的位置

<code src="./demo/demo2.tsx"></code>

### 使用Hook (Toast提示)

 使用`useSnackbar`来显示一个带警告提示组件的, 默认 2000ms 后消失,  通过属性 `autoHideDuration` 改变设置

<code src="./demo/demo3.tsx"></code>



## API

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| classes | css | `'root', 'content', 'anchorTopLeft', 'anchorTopCenter', 'anchorTopRight', 'anchorBottomLeft', 'anchorBottomCenter', 'anchorBottomRight', 'anchorCenter'` |
| TransitionComponent | 过渡动画组件 | `React.ComponentType<BaseTransitionProps>` | Grow
| TransitionProps | 过渡动画组件属性 | `BaseTransitionProps` |
| actions | 操作区 | `ReactNode` |
| anchorOrigin | 定位 |  `{ vertical?: 'top' \| 'center' \| 'bottom'; horizontal?: 'left' \| 'center' \| 'right'; }` | `{ vertical: 'bottom', horizontal: 'left' }`
| autoHideDuration | 自动关闭持续时间 | `number \| null` | null
| message | 内容 | `ReactNode` |
| onClose | 关闭回调事件 | `(event: Event, reason: 'timeout' \| 'clickaway') => void` |
| resumeHideDuration | 暂停持续时间 | `boolean \| null` |
| transitionDuration | 过渡动画持续时间 | `TransitionTimeout` |
| visible | 是否显示 | `boolean` |
