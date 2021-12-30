import {
  List,
  ListItem,
  ListHeader,
  Typography,
  IconButton
} from '@wonder-ui/core';
import { InfoCircle } from '@wonder-ui/icons';

const image = (
  <img
    width="70"
    src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
    alt=""
  />
);

export default () => (
  <List>
    <ListHeader>列表对齐</ListHeader>
    <ListItem
      divider
      alignItems="flex-start"
      arrow="horizontal"
      extra={
        <IconButton size="small">
          <InfoCircle />
        </IconButton>
      }
      media={image}
      primary="Yellow Submarine"
    >
      <Typography variant="body2" color="textPrimary">
        Beatles
      </Typography>
      <Typography variant="body2" lineClamp={2} color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis
        tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor
        metus, ultrices condimentum sodales sit amet, pharetra sodales eros.
        Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
        vel dui laoreet, commodo augue id, pulvinar lacus.
      </Typography>
    </ListItem>
    <ListItem
      arrow="horizontal"
      extra={<InfoCircle />}
      media={image}
      primary="Yellow Submarine"
    >
      <Typography variant="body2" lineClamp={4} color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis
        tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor
        metus, ultrices condimentum sodales sit amet, pharetra sodales eros.
        Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In
        vel dui laoreet, commodo augue id, pulvinar lacus.
      </Typography>
    </ListItem>
  </List>
);
