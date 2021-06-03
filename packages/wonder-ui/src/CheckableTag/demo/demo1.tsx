/**
 * title: 可选择标签
 * desc: 可通过 CheckableTag 实现类似 Checkbox 的效果，点击切换选中效果
 */

/** @jsx jsx */
import { jsx, Space, CheckableTag } from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';

const tags = ['Movies', 'Books', 'Music', 'Sports'];

export default function Example() {
  const { selected, unSelect, isSelected, select } = useSelections(tags);

  return (
    <div>
      <p>selected: {selected.join(',')}</p>

      <Space wrap>
        <div>Categories:</div>
        {tags.map((tag, index) => (
          <CheckableTag
            key={index}
            checked={isSelected(tag)}
            onChange={(checked) => {
              if (checked) {
                select(tag);
              } else {
                unSelect(tag);
              }
            }}
          >
            {tag}
          </CheckableTag>
        ))}
      </Space>
    </div>
  );
}
