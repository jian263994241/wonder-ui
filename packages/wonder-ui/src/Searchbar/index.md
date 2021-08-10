---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /data-input
  title: 数据录入
  order: 3
---

# Searchbar 搜索栏

用于搜索场景的输入框组件。

## 代码演示

### 基本使用

Searchbar可以单独使用, 也可以和`Page`, `Navbar`一起使用

<code src="./demo/demo1.tsx"></code>

### 自定义按钮和图标

通过 `barLeft`\ `barRight` 定义两边的类容, 当定义 `barRight` 内容后取消按钮不会出现 `allowCancel` 无效

<code src="./demo/demo2.tsx"></code>

### 自定义背景色

<code src="./demo/demo3.tsx"></code>

<API src="./Searchbar.tsx" props="InputProps|allowCancel|barLeft|barRight|cancelText|defaultValue|fixCancelButton|icon|onCencel|onChange|placeholder|value"></API>


