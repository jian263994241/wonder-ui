/**
 * title: 对齐列表项
 * desc: 将 `alignItems` 属性值设置为 "flex-start"
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import * as React from 'react';
import {
  Container,
  jsx,
  List,
  ListItem,
  ListItemText,
  ListItemMedia,
  Typography
} from '@wonder-ui/core';

export default function Example() {
  return (
    <Container size="sm">
      <List>
        <ListItem alignItems="flex-start">
          <ListItemMedia>
            <img
              width="70"
              src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
              alt=""
            />
          </ListItemMedia>
          <ListItemText
            primary="Yellow Submarine"
            secondary={
              <React.Fragment>
                <Typography variant="body2" color="primary">
                  Beatles
                </Typography>
                <Typography variant="body2" lineClamp={2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sagittis tellus ut turpis condimentum, ut dignissim lacus
                  tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet, pharetra sodales eros. Phasellus vel felis tellus.
                  Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet,
                  commodo augue id, pulvinar lacus.
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemMedia>
            <img
              width="70"
              src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
              alt=""
            />
          </ListItemMedia>
          <ListItemText
            primary="Yellow Submarine"
            secondary={
              <Typography variant="body2" lineClamp={2} color="secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sagittis tellus ut turpis condimentum, ut dignissim lacus
                tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris
                rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo
                augue id, pulvinar lacus.
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Container>
  );
}