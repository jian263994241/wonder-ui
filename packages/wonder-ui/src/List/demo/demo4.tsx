/**
 * title: 交互式
 * desc: 一些常见交互样式
 * background: '#f5f5f5'
 */
import {
  Badge,
  Page,
  List,
  ListHeader,
  ListItem,
  ListItemText
} from '@wonder-ui/core';
import { InfoCircleFill, PersonCircle, TrashFill } from '@wonder-ui/icons';

export default () => (
  <Page title="Layout">
    <List>
      <ListHeader>Simple List</ListHeader>
      <ListItem divider>
        <ListItemText>Item 1</ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemText>Item 2</ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemText>Item 3</ListItemText>
      </ListItem>
    </List>

    <List>
      <ListHeader>Data list, with icons</ListHeader>
      <ListItem divider media={<PersonCircle />} extra={<span>CEO</span>}>
        <ListItemText>Item 1</ListItemText>
      </ListItem>
      <ListItem
        divider
        media={<PersonCircle />}
        extra={<Badge color="secondary" text="5" />}
      >
        <ListItemText>Item 2</ListItemText>
      </ListItem>
      <ListItem
        divider
        media={<PersonCircle />}
        extra={<Badge color="secondary" text="5" />}
      >
        <ListItemText>Item 3</ListItemText>
      </ListItem>
    </List>

    <List>
      <ListHeader>Data list, with button</ListHeader>
      <ListItem
        divider
        media={<PersonCircle />}
        extra={<InfoCircleFill fontSize="inherit" />}
      >
        <ListItemText>Item 1</ListItemText>
      </ListItem>
      <ListItem
        divider
        media={<PersonCircle />}
        extra={<InfoCircleFill fontSize="inherit" />}
      >
        <ListItemText>Item 2</ListItemText>
      </ListItem>
      <ListItem
        divider
        media={<PersonCircle />}
        extra={<TrashFill fontSize="inherit" />}
      >
        <ListItemText>Item 3</ListItemText>
      </ListItem>
    </List>

    <List>
      <ListHeader>Links</ListHeader>
      <ListItem button divider arrow="horizontal" extra={<span>CEO</span>}>
        <ListItemText>Item 1</ListItemText>
      </ListItem>
      <ListItem button divider arrow="horizontal" extra={<span>CEO</span>}>
        <ListItemText>Item 2</ListItemText>
      </ListItem>
      <ListItem button divider arrow="horizontal">
        <ListItemText>Item 3</ListItemText>
      </ListItem>
    </List>

    <List>
      <ListHeader>Links, Secondary text</ListHeader>
      <ListItem
        button
        divider
        arrow="horizontal"
        media={<PersonCircle />}
        extra={<span>CEO</span>}
      >
        <ListItemText primary={'Primary text'} secondary={'Secondary text'} />
      </ListItem>
      <ListItem
        button
        divider
        arrow="horizontal"
        media={<PersonCircle />}
        extra={<span>CEO</span>}
      >
        <ListItemText primary={'Primary text'} secondary={'Secondary text'} />
      </ListItem>
      <ListItem button arrow="horizontal" media={<PersonCircle />}>
        <ListItemText primary={'Primary text'} secondary={'Secondary text'} />
      </ListItem>
    </List>
  </Page>
);
