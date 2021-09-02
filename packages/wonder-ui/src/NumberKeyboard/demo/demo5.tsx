import { NumberKeyboard, Space, message } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical" gap={20}>
    <NumberKeyboard
      showCloseKey
      showEnterKey
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

    <NumberKeyboard
      showCloseKey
      extraKey="."
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

    <NumberKeyboard
      showEnterKey
      showCloseKey
      extraKey="."
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

    <NumberKeyboard
      showSlidebar
      showCloseKey
      extraKey="."
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

    <NumberKeyboard
      showCloseKey
      showSlidebar
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
  </Space>
);
