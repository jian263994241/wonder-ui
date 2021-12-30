import { Badge, List, ListHeader, ListItem } from '@wonder-ui/core';
import { InfoCircleFill, PersonCircle, TrashFill } from '@wonder-ui/icons';

export default () => (
  <List>
    <ListHeader>Simple List</ListHeader>
    <ListItem divider>Item 1</ListItem>
    <ListItem divider>Item 2</ListItem>
    <ListItem divider>Item 3</ListItem>

    <ListHeader>Data list, with icons</ListHeader>
    <ListItem divider media={<PersonCircle />} extra={<span>CEO</span>}>
      Item 1
    </ListItem>
    <ListItem
      divider
      media={<PersonCircle />}
      extra={<Badge color="secondary" text="5" />}
    >
      Item 2
    </ListItem>
    <ListItem
      divider
      media={<PersonCircle />}
      extra={<Badge color="secondary" text="5" />}
    >
      Item 3
    </ListItem>

    <ListHeader>Data list, with button</ListHeader>
    <ListItem
      divider
      media={<PersonCircle />}
      extra={<InfoCircleFill fontSize="inherit" />}
    >
      Item 1
    </ListItem>
    <ListItem
      divider
      media={<PersonCircle />}
      extra={<InfoCircleFill fontSize="inherit" />}
    >
      Item 2
    </ListItem>
    <ListItem
      divider
      media={<PersonCircle />}
      extra={<TrashFill fontSize="inherit" />}
    >
      Item 3
    </ListItem>

    <ListHeader>Links</ListHeader>
    <ListItem button divider arrow="horizontal" extra={<span>CEO</span>}>
      Item 1
    </ListItem>
    <ListItem button divider arrow="horizontal" extra={<span>CEO</span>}>
      Item 2
    </ListItem>
    <ListItem button divider arrow="horizontal">
      Item 3
    </ListItem>

    <ListHeader>Links, Secondary text</ListHeader>
    <ListItem
      button
      divider
      arrow="horizontal"
      media={<PersonCircle />}
      extra={<span>CEO</span>}
      primary={'Primary text'}
      secondary={'Secondary text'}
    ></ListItem>
    <ListItem
      button
      divider
      arrow="horizontal"
      media={<PersonCircle />}
      extra={<span>CEO</span>}
      primary={'Primary text'}
      secondary={'Secondary text'}
    ></ListItem>
    <ListItem
      button
      arrow="horizontal"
      media={<PersonCircle />}
      primary={'Primary text'}
      secondary={'Secondary text'}
    ></ListItem>
  </List>
);
