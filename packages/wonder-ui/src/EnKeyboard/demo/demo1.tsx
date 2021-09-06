import { EnKeyboard, useSnackbar } from '@wonder-ui/core';

export default () => {
  const toast = useSnackbar();

  return (
    <EnKeyboard
      onInput={(keyText) => {
        toast(`Input: ${keyText}`);
      }}
      onDelete={() => {
        toast(`Delete`);
      }}
      onEnter={() => {
        toast(`Done`);
      }}
    />
  );
};
