import { ContentBlock, NumberKeyboard, Space, message } from '@wonder-ui/core';
import { shield } from './icons';

export default () => (
  <>
    <ContentBlock title="整数键盘">
      <NumberKeyboard />
    </ContentBlock>

    <ContentBlock title="小数键盘">
      <NumberKeyboard extraKey="." />
    </ContentBlock>

    <ContentBlock title="身份证键盘">
      <NumberKeyboard extraKey="X" />
    </ContentBlock>

    <ContentBlock title="金额键盘">
      <NumberKeyboard showSlidebar extraKey={['00', '.']} />
    </ContentBlock>

    <ContentBlock title="安全键盘">
      <NumberKeyboard
        randomKeyOrder
        showCloseKey
        title={<Space>{shield}安全键盘</Space>}
      />
    </ContentBlock>

    <ContentBlock title="事件">
      <NumberKeyboard
        showSlidebar
        showCloseKey
        extraKey={['00', '.']}
        onInput={(key) => {
          message.toast(`Input: ${key}`);
        }}
        onDelete={() => {
          message.toast('Delete');
        }}
        onEnter={() => {
          message.toast('Enter');
        }}
        onClose={() => {
          message.toast('Close');
        }}
      />
    </ContentBlock>
  </>
);
