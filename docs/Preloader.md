
```js
import { Preloader, Button } from '@wonder-ui/core';

const showPreloader = ()=> {
  Preloader.show();
  setTimeout(()=> Preloader.hide(), 1000);
};

<Button onClick={showPreloader}>Show Preloader</Button>

```
