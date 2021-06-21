/**
 * title: 基础用法
 * desc:
 */
import { Button, Preloader } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default () => {
  const [visible, { toggle }] = useToggle(false);

  const open = () => {
    toggle();

    setTimeout(() => {
      toggle();
    }, 2000);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => open()}>
        Open
      </Button>
      <Preloader visible={visible} text="加载中..." />
    </div>
  );
};
