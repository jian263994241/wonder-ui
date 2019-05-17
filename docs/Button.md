
## Button

按钮

### 基本使用

```js
// import Button from '../src/Button';
const Button = require('../src/Button').default;
const ButtonsRow = require('../src/Button/ButtonsRow').default;

<div>
  <p><Button>一般按钮</Button></p>
  <p><Button round>圆按钮</Button></p>
  <p><Button disabled>禁用</Button></p>
  <p><Button fill>默认填充颜色的按钮</Button></p>
  <p><Button fill theme={{color: 'red'}}>红色填充颜色的按钮</Button></p>
  <p><Button fill big>有填充颜色的大按钮</Button></p>

  一组按钮
  <ButtonsRow>
    <Button>Tab 1</Button>
    <Button>Tab 2</Button>
    <Button>Tab 3</Button>
    <Button>Tab 4</Button>
  </ButtonsRow>
</div>

```
