import { EnKeyboard, message } from '@wonder-ui/core';

export default () => {
  return (
    <EnKeyboard
      onInput={(keyText) => {
        message.toast(`Input: ${keyText}`);
      }}
      onDelete={() => {
        message.toast(`Delete`);
      }}
      onEnter={() => {
        message.toast(`Done`);
      }}
    />
  );
};
