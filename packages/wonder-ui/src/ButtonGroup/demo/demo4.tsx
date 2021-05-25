/**
 * title: checkbox 按钮
 * desc: 改变`checked`prop设定激活状态
 */
/** @jsx jsx */
import { Button, ButtonGroup, jsx } from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';

const list = [0, 1, 2];

export default function Example() {
  const { isSelected, toggle } = useSelections(list, [0]);

  return (
    <ButtonGroup ButtonProps={{ variant: 'outlined' }}>
      {list.map((item, index) => (
        <Button
          key={index}
          variant={isSelected(item) ? 'contained' : 'outlined'}
          onClick={() => toggle(item)}
        >
          Button-{index}
        </Button>
      ))}
    </ButtonGroup>
  );
}
