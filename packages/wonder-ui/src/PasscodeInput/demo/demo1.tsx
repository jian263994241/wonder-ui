import * as React from 'react';
import { ContentBlock, PasscodeInput, NumberKeyboard } from '@wonder-ui/core';

export default () => {
  const [error, setError] = React.useState(false);

  const onChange = (value: string) => {
    setError(value.length >= 6);
  };

  return (
    <div style={{ paddingBottom: 1000 }}>
      <ContentBlock title="基本使用">
        <PasscodeInput />
      </ContentBlock>

      <ContentBlock title="显示明文">
        <PasscodeInput clearText />
      </ContentBlock>

      <ContentBlock title="格子间距">
        <PasscodeInput seperated />
      </ContentBlock>

      <ContentBlock title="错误状态">
        <PasscodeInput seperated error={error} onChange={onChange} />
      </ContentBlock>

      <ContentBlock title="使用虚拟键盘">
        <NumberKeyboard showCloseKey>
          <PasscodeInput seperated clearText />
        </NumberKeyboard>
      </ContentBlock>
    </div>
  );
};
