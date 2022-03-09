import * as React from 'react';
import {
  List,
  ListItem,
  ListHeader,
  PasscodeInput,
  NumberKeyboard
} from '@wonder-ui/core';

export default () => {
  const [error, setError] = React.useState(false);

  const onChange = (value: string) => {
    setError(value.length >= 6);
  };

  return (
    <div style={{ paddingBottom: 1000 }}>
      <List>
        <ListHeader>基础用法</ListHeader>
        <ListItem>
          <PasscodeInput />
        </ListItem>

        <ListHeader>显示明文</ListHeader>
        <ListItem>
          <PasscodeInput clearText />
        </ListItem>

        <ListHeader>格子间距</ListHeader>
        <ListItem>
          <PasscodeInput seperated />
        </ListItem>

        <ListHeader>错误状态</ListHeader>
        <ListItem>
          <PasscodeInput seperated error={error} onChange={onChange} />
        </ListItem>

        <ListHeader>使用虚拟键盘</ListHeader>
        <ListItem>
          <NumberKeyboard showCloseKey>
            <PasscodeInput seperated clearText />
          </NumberKeyboard>
        </ListItem>
      </List>
    </div>
  );
};
