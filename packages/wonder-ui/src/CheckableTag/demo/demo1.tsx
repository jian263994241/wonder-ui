import { Space, CheckableTag } from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';

const tags = ['Movies', 'Books', 'Music', 'Sports'];

export default () => {
  const { selected, unSelect, isSelected, select } = useSelections(tags);

  return (
    <Space direction="vertical">
      <div>Selected: {selected.join(',')}</div>
      <Space>
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
    </Space>
  );
};
