---
mobile: false
---
# Container 容器

Container 是最基本的布局元素，它包含，填充和对齐给定设备或视口中的内容。

在使用我们的默认网格系统时是必需的。 容器用于在其中容纳，填充和（有时）使内容居中。 尽管可以嵌套容器，但是大多数布局都不需要嵌套容器。 `Row`内已用`Container`包含。

## 代码演示

### 基础使用

```typescript
<Container size="sm">内容</Container>

```

## 响应式宽度

| - | Extra small (<576px) | Small (≥576px) | Medium (≥768px) | Large (≥992px) | X-Large (≥1200px)
| --- | --- | --- | --- | --- | ---
| sm	| 100%	| 576px | 576px	| 576px	| 576px
| md	| 100%	| 100%	| 768px | 768px	| 768px
| lg	| 100%	| 100%	| 100% | 992px | 992px
| xl	| 100%	| 100%	| 100% | 100%	| 1200px
| fluid	| 100% | 100% |	100% | 100%	|100%




## API

<embed src="../../packages/wonder-ui/src/Container/index.md"></embed>
