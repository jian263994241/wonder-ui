
#### 多选按钮

```jsx
import { ToggleButtonGroup } from '@wonder-ui/core';

initialState = { value: [] }

const source = [
  {label: 'label 1', value: 1},
  {label: 'label 2', value: 2},
  {label: 'label 3', value: 3},
];

<ToggleButtonGroup
  source={source}
  value={state.value}
  onChange={(value)=> setState({value})}
/>
```

#### 间隔开的多选按钮

```jsx
import { ToggleButtonGroup } from '@wonder-ui/core';

initialState = { value: [] }

const source = [
  {label: 'label 1', value: 1},
  {label: 'label 2', value: 2},
  {label: 'label 3', value: 3},
];

<ToggleButtonGroup
  source={source}
  value={state.value}
  onChange={(value)=> setState({value})}
  spacing={1}
/>
```

#### 单选按钮

```jsx
import { ToggleButtonGroup } from '@wonder-ui/core';

initialState = { value: [] }

const source = [
  {label: 'label 1', value: 1},
  {label: 'label 2', value: 2},
  {label: 'label 3', value: 3},
];

<ToggleButtonGroup
  source={source}
  value={state.value}
  onChange={(value)=> setState({value})}
  exclusive
/>
```

#### 间隔开的单选按钮

```jsx
import { ToggleButtonGroup } from '@wonder-ui/core';

initialState = { value: [] }

const source = [
  {label: 'label 1', value: 1},
  {label: 'label 2', value: 2},
  {label: 'label 3', value: 3},
];

<ToggleButtonGroup
  source={source}
  value={state.value}
  onChange={(value)=> setState({value})}
  spacing={1}
  exclusive
/>
```