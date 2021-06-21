/**
 * title: 交互式
 * desc: 一些常见交互样式
 * background: '#f5f5f5'
 */
import {
  Badge,
  Container,
  List,
  ListHeader,
  ListItem,
  ListItemExtra,
  ListItemMedia,
  ListItemText
} from '@wonder-ui/core';
import { InfoCircleFill, PersonCircle, TrashFill } from '@wonder-ui/icons';

export default () => (
  <Container size="sm">
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
      <ListItem divider>
        <ListItemMedia>
          <PersonCircle />
        </ListItemMedia>
        <ListItemText>Item 1</ListItemText>
        <ListItemExtra>CEO</ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemMedia>
          <PersonCircle />
        </ListItemMedia>
        <ListItemText>Item 2</ListItemText>
        <ListItemExtra>
          <Badge color="secondary" text="5" />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemMedia>
          <PersonCircle />
        </ListItemMedia>
        <ListItemText>Item 3</ListItemText>
        <ListItemExtra>
          <Badge color="secondary" text="5" />
        </ListItemExtra>
      </ListItem>
    </List>

    <List>
      <ListHeader>Data list, with button</ListHeader>
      <ListItem divider>
        <ListItemMedia>
          <PersonCircle />
        </ListItemMedia>
        <ListItemText>Item 1</ListItemText>
        <ListItemExtra>
          <InfoCircleFill fontSize="inherit" />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemMedia>
          <PersonCircle />
        </ListItemMedia>
        <ListItemText>Item 2</ListItemText>
        <ListItemExtra>
          <InfoCircleFill fontSize="inherit" />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemMedia>
          <PersonCircle />
        </ListItemMedia>
        <ListItemText>Item 3</ListItemText>
        <ListItemExtra>
          <TrashFill fontSize="inherit" />
        </ListItemExtra>
      </ListItem>
    </List>

    <List>
      <ListHeader>Links</ListHeader>
      <ListItem button divider arrow="horizontal">
        <ListItemText>Item 1</ListItemText>
        <ListItemExtra>CEO</ListItemExtra>
      </ListItem>
      <ListItem button divider arrow="horizontal">
        <ListItemText>Item 2</ListItemText>
        <ListItemExtra>CEO</ListItemExtra>
      </ListItem>
      <ListItem button divider arrow="horizontal">
        <ListItemText>Item 3</ListItemText>
      </ListItem>
    </List>

    <List>
      <ListHeader>Links, Secondary text</ListHeader>
      <ListItem button divider arrow="horizontal">
        <ListItemMedia>
          <PersonCircle />
        </ListItemMedia>
        <ListItemText primary={'Primary text'} secondary={'Secondary text'} />
        <ListItemExtra>CEO</ListItemExtra>
      </ListItem>
      <ListItem button divider arrow="horizontal">
        <ListItemMedia>
          <PersonCircle />
        </ListItemMedia>
        <ListItemText primary={'Primary text'} secondary={'Secondary text'} />
        <ListItemExtra>CEO</ListItemExtra>
      </ListItem>
      <ListItem button divider arrow="horizontal">
        <ListItemMedia>
          <PersonCircle />
        </ListItemMedia>
        <ListItemText primary={'Primary text'} secondary={'Secondary text'} />
      </ListItem>
    </List>
  </Container>
);
