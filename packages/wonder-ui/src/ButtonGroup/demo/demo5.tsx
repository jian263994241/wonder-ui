/**
 * title: 单选按钮
 * desc: 改变`checked`prop设定激活状态
 */
import { Button, ButtonGroup } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

const list = [0, 1, 2];

export default () => {
  const [value, { toggle }] = useToggle(0, list);

  return (
    <ButtonGroup ButtonProps={{ variant: 'outlined' }}>
      {list.map((item, index) => (
        <Button
          key={index}
          variant={value === item ? 'contained' : 'outlined'}
          onClick={() => toggle(item)}
        >
          Button-{index}
        </Button>
      ))}
    </ButtonGroup>
  );
};
