/**
 * title: 列表链接
 * desc: 渲染为A标签
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import * as React from 'react';
import {
  ArrowForward,
  jsx,
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemTextAfter,
  Container
} from '@wonder-ui/core';

interface LinkProps extends ListItemProps {
  href?: string;
  target?: string;
}

const ListItemLink: React.FC<LinkProps> = React.forwardRef((props, ref) => (
  <ListItem {...props} ref={ref} component="a" button />
));

export default function Example() {
  return (
    <Container size="sm">
      <List component="div">
        <ListItemLink href="#列表链接">
          <ListItemText>Link 1</ListItemText>
        </ListItemLink>

        <ListItemLink href="#列表链接">
          <ListItemText>Link 2</ListItemText>
          <ListItemTextAfter>CEO</ListItemTextAfter>
        </ListItemLink>

        <ListItemLink href="#列表链接">
          <ListItemText>Link 3</ListItemText>
          <ArrowForward />
        </ListItemLink>

        <ListItemLink href="#列表链接">
          <ListItemText>Link 4</ListItemText>
          <ListItemTextAfter>CEO</ListItemTextAfter>
          <ArrowForward />
        </ListItemLink>
      </List>
    </Container>
  );
}
