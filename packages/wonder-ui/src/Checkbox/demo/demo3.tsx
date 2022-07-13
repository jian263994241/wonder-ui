/**
 * background: '#f5f5f5'
 */
import {
  Checkbox,
  CheckboxGroup,
  List,
  ListItem,
  ListHeader
} from '@wonder-ui/core';

const items = ['Apple', 'Orange', 'Banana'];

export default () => (
  <List>
    <ListHeader>配合 List 使用</ListHeader>
    <CheckboxGroup
      onChange={(value) => {
        console.log(value);
      }}
    >
      {items.map((item) => (
        <ListItem
          key={item}
          component="label"
          prefix={<Checkbox value={item} />}
        >
          {item}
        </ListItem>
      ))}
    </CheckboxGroup>
  </List>
);
