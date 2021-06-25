/**
 * title: 列表链接
 * desc: 渲染为A标签
 * background: '#f5f5f5'
 */
import * as React from 'react';
import {
  Page,
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  ListItemExtra
} from '@wonder-ui/core';

interface LinkProps extends ListItemProps {
  href?: string;
  target?: string;
}

const ListItemLink: React.FC<LinkProps> = React.forwardRef((props, ref) => (
  <ListItem {...props} ref={ref} component="a" button divider />
));

export default () => (
  <Page title="Link">
    <List component="div">
      <ListItemLink href="#列表链接">
        <ListItemText>Link 1</ListItemText>
      </ListItemLink>

      <ListItemLink href="#列表链接">
        <ListItemText>Link 2</ListItemText>
        <ListItemExtra>CEO</ListItemExtra>
      </ListItemLink>

      <ListItemLink href="#列表链接" arrow="horizontal">
        <ListItemText>Link 3</ListItemText>
      </ListItemLink>

      <ListItemLink href="#列表链接" arrow="horizontal">
        <ListItemText>Link 4</ListItemText>
        <ListItemExtra>CEO</ListItemExtra>
      </ListItemLink>
    </List>
  </Page>
);
