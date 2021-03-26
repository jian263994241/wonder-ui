/**
 * title: 交互式
 * desc: 一些常见交互样式
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  ArrowForward,
  Badge,
  Button,
  jsx,
  List,
  ListHeader,
  ListItem,
  ListItemText,
  ListItemMedia,
  ListItemTextAfter,
  Container
} from '@wonder-ui/core';
import { PersonCircle, InfoCircleFill, TrashFill } from '@wonder-ui/icons';

export default function Example() {
  return (
    <Container size="sm">
      <List>
        <ListHeader>Simple List</ListHeader>
        <ListItem>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Item 2</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Item 3</ListItemText>
        </ListItem>
      </List>

      <List>
        <ListHeader>Data list, with icons</ListHeader>
        <ListItem>
          <ListItemMedia>
            <PersonCircle />
          </ListItemMedia>
          <ListItemText>Item 1</ListItemText>
          <ListItemTextAfter>CEO</ListItemTextAfter>
        </ListItem>
        <ListItem>
          <ListItemMedia>
            <PersonCircle />
          </ListItemMedia>
          <ListItemText>Item 2</ListItemText>
          <ListItemTextAfter>
            <Badge color="secondary" rounded>
              5
            </Badge>
          </ListItemTextAfter>
        </ListItem>
        <ListItem>
          <ListItemMedia>
            <PersonCircle />
          </ListItemMedia>
          <ListItemText>Item 3</ListItemText>
          <ListItemTextAfter>
            <Badge color="secondary">5</Badge>
          </ListItemTextAfter>
        </ListItem>
      </List>

      <List>
        <ListHeader>Data list, with button</ListHeader>
        <ListItem>
          <ListItemMedia>
            <PersonCircle />
          </ListItemMedia>
          <ListItemText>Item 1</ListItemText>
          <Button color="secondary" size="small" variant="text">
            <InfoCircleFill size="inherit" />
          </Button>
        </ListItem>
        <ListItem>
          <ListItemMedia>
            <PersonCircle />
          </ListItemMedia>
          <ListItemText>Item 2</ListItemText>
          <Button color="secondary" size="small" variant="text">
            <InfoCircleFill size="inherit" />
          </Button>
        </ListItem>
        <ListItem>
          <ListItemMedia>
            <PersonCircle />
          </ListItemMedia>
          <ListItemText>Item 3</ListItemText>
          <Button color="secondary" size="small" variant="text">
            <TrashFill size="inherit" />
          </Button>
        </ListItem>
      </List>

      <List>
        <ListHeader>Links</ListHeader>
        <ListItem button>
          <ListItemText>Item 1</ListItemText>
          <ListItemTextAfter>CEO</ListItemTextAfter>
          <ArrowForward />
        </ListItem>
        <ListItem button>
          <ListItemText>Item 2</ListItemText>
          <ListItemTextAfter>CEO</ListItemTextAfter>
          <ArrowForward />
        </ListItem>
        <ListItem button>
          <ListItemText>Item 3</ListItemText>
          <ArrowForward />
        </ListItem>
      </List>

      <List>
        <ListHeader>Links, Secondary text</ListHeader>
        <ListItem button>
          <ListItemMedia>
            <PersonCircle />
          </ListItemMedia>
          <ListItemText primary={'Primary text'} secondary={'Secondary text'} />
          <ListItemTextAfter>CEO</ListItemTextAfter>
          <ArrowForward />
        </ListItem>
        <ListItem button>
          <ListItemMedia>
            <PersonCircle />
          </ListItemMedia>
          <ListItemText primary={'Primary text'} secondary={'Secondary text'} />
          <ListItemTextAfter>CEO</ListItemTextAfter>
          <ArrowForward />
        </ListItem>
        <ListItem button>
          <ListItemMedia>
            <PersonCircle />
          </ListItemMedia>
          <ListItemText primary={'Primary text'} secondary={'Secondary text'} />
          <ArrowForward />
        </ListItem>
      </List>
    </Container>
  );
}
