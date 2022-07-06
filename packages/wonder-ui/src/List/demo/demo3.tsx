import { List, ListHeader, ListItem, Avatar } from '@wonder-ui/core';
import { users } from './users';

export default () => (
  <List>
    <ListHeader>用户列表</ListHeader>

    {users.map((data) => (
      <ListItem
        key={data.id}
        prefix={<Avatar size={40} fit="cover" src={data.avatar} />}
        primary={data.name}
        secondary={data.description}
      />
    ))}
  </List>
);
