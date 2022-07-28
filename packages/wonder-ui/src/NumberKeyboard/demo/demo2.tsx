import { Page, NumberKeyboard, InputNumber } from '@wonder-ui/core';

export default () => (
  <Page title="请往下滑动">
    <div style={{ paddingTop: 600, paddingBottom: 310 }}>
      <NumberKeyboard extraKey="." showSlidebar showCloseKey>
        <InputNumber
          disableStepHandler
          placeholder="测试键盘弹起"
          precision={2}
        />
      </NumberKeyboard>
    </div>
  </Page>
);
