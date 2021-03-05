/**
 * title: radio 按钮
 * desc: 改变`checked`prop设定激活状态
 */
/** @jsx jsx */
import { Button, ButtonGroup, jsx, Space } from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';

const list = [0, 1, 2];

export default function Example() {
  const { isSelected, setSelected } = useSelections(list, [0]);

  return (
    <ButtonGroup>
      {list.map((item, index) => (
        <Button
          key={index}
          checked={isSelected(item)}
          onClick={() => setSelected([item])}
          variant="outlined"
        >
          Button-{index}
        </Button>
      ))}
    </ButtonGroup>
  );
}