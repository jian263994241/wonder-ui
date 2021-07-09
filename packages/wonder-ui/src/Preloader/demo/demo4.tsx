/**
 * title: 替换图标
 * desc:
 */
import {
  Button,
  showPreloader,
  hidePreloader,
  Indicator
} from '@wonder-ui/core';

export default () => {
  const open = () => {
    showPreloader({
      indicator: <Indicator fontSize="medium" />
    });
    setTimeout(() => {
      hidePreloader();
    }, 2000);
  };

  return (
    <Button variant="contained" onClick={() => open()}>
      Open
    </Button>
  );
};
