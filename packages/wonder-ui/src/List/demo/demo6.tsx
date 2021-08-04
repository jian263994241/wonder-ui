import * as React from 'react';
import {
  Page,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton
} from '@wonder-ui/core';
import { InfoCircle } from '@wonder-ui/icons';

export default () => (
  <Page title="Meida list">
    <List>
      <ListItem
        divider
        alignItems="flex-start"
        arrow="horizontal"
        extra={
          <IconButton size="small">
            <InfoCircle />
          </IconButton>
        }
        media={
          <img
            width="70"
            src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
            alt=""
          />
        }
      >
        <ListItemText
          primary="Yellow Submarine"
          secondary={
            <React.Fragment>
              <Typography variant="body2" color="textPrimary">
                Beatles
              </Typography>
              <Typography variant="body2" lineClamp={2} color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sagittis tellus ut turpis condimentum, ut dignissim lacus
                tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris
                rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo
                augue id, pulvinar lacus.
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem
        arrow="horizontal"
        extra={<InfoCircle />}
        media={
          <img
            width="70"
            src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
            alt=""
          />
        }
      >
        <ListItemText
          primary="Yellow Submarine"
          secondary={
            <Typography variant="body2" lineClamp={4} color="textSecondary">
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
  </Page>
);
