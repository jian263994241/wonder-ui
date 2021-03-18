# Container 容器

Container 是最基本的布局元素，它包含，填充和对齐给定设备或视口中的内容。

在使用我们的默认网格系统时是必需的。 容器用于在其中容纳，填充和（有时）使内容居中。 尽管可以嵌套容器，但是大多数布局都不需要嵌套容器。 `Row`内已用`Container`包含。

## 响应式宽度

|  | Extra small (<576px) | Small (≥576px) | Medium (≥768px) | Large (≥992px) | X-Large (≥1200px) | XX-Large (≥1400px)
| --- | --- | --- | --- | --- | --- | ---
| \- 	| 100%	| 540px | 720px | 960px	| 1140px | 1320px
| sm	| 100%	| 540px | 720px	| 960px	| 1140px | 1320px
| md	| 100%	| 100%	| 720px | 960px	| 1140px | 1320px
| lg	| 100%	| 100%	| 100% | 960px | 1140px | 1320px
| xl	| 100%	| 100%	| 100% | 100%	| 1140px | 1320px
| xxl	| 100%	| 100%	| 100% | 100%	| 100%| 1320px
| fluid	| 100% | 100% |	100% | 100%	|100% |	100%


## 配置

可以通过`createTheme`创建一个新的主题覆盖`Container`的 `max-widths` 配置

```js | pure
// 默认的 max-widths
theme.containerMaxWidths = {
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
  xxl: 1320
}
```

## API

<embed src="../../packages/wonder-ui/src/Container/index.md"></embed>
