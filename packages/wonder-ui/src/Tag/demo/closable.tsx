/**
 * title: 可关闭标签
 * desc: 通过添加 closable 变为可关闭标签。可关闭标签具有 onClose 事件
 */

/** @jsx jsx */
import { jsx, Space, Button, Tag, WhiteSpace } from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';
import { createArray } from '@wonder-ui/utils';

const tags = createArray(7, (index) => index);

export default function Example() {
  const { selected, toggle, selectAll } = useSelections(tags, tags);

  return (
    <div>
      <Button variant="contained" onClick={selectAll}>
        Reset
      </Button>
      <WhiteSpace />
      <Space wrap>
        {selected.map((tag, index) => (
          <Tag closable key={index} onClose={() => toggle(tag)}>
            Tag {tag}
          </Tag>
        ))}
      </Space>
    </div>
  );
}
