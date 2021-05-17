/**
 * title: 内嵌列表
 * desc: List inset 样式
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  Collapse,
  jsx,
  List,
  ListItemMedia,
  ListItem,
  ListItemText,
  Container,
  styled
} from '@wonder-ui/core';
import { HeartFill } from '@wonder-ui/icons';
import { useToggle } from '@wonder-ui/hooks';

const Wrapper = styled(Container)`
  background-color: rgb(239, 239, 244);
  box-sizing: border-box;
  padding: 30px 0;
`;

export default function Example() {
  const [visible, { toggle }] = useToggle(true);
  return (
    <Wrapper size="sm">
      <List inset>
        <ListItem divider>
          <ListItemMedia>
            <HeartFill />
          </ListItemMedia>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem divider>
          <ListItemMedia>
            <HeartFill />
          </ListItemMedia>
          <ListItemText>Item 2</ListItemText>
        </ListItem>

        <ListItem
          onClick={() => toggle()}
          button
          arrow={visible ? 'vertical-up' : 'vertical'}
          divider
        >
          <ListItemText>Item 3</ListItemText>
        </ListItem>

        <Collapse in={visible}>
          <List>
            <ListItem divider>
              <ListItemMedia>
                <HeartFill />
              </ListItemMedia>
              <ListItemText>Item 1</ListItemText>
            </ListItem>
            <ListItem divider>
              <ListItemMedia>
                <HeartFill />
              </ListItemMedia>
              <ListItemText>Item 2</ListItemText>
            </ListItem>

            <ListItem divider>
              <ListItemText>Item 3</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        <ListItem divider>
          <ListItemText>Item 4</ListItemText>
        </ListItem>
        <ListItem divider>
          <ListItemText>Item 5</ListItemText>
        </ListItem>
      </List>
    </Wrapper>
  );
}
