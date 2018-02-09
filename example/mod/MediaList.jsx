import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/Core';
import Button, {ButtonsRow} from '../../src/Button';
import {BlockTitle} from '../../src/ContentBlock';

import {List, ListItem, GroupTitle} from '../../src/ListView';



export default class ListDemo extends Component {

  render (){

    return (
      <Page>
        <PageContent>
          <BlockTitle>Songs</BlockTitle>
          <List mediaList>
            <ListItem
              title="Yellow Submarine"
              subTitle="Beatles"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              media={<img src="http://lorempixel.com/160/160/people/1" width="80" alt=""/>}
              after="$15"
            />
            <ListItem
              title="Don't Stop Me Now"
              subTitle="Queen"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              media={<img src="http://lorempixel.com/160/160/people/2" width="80" alt=""/>}
              after="$22"
              arrow
            />
          </List>

          <BlockTitle>Mail App (With Swipe to delete and overswipes)</BlockTitle>
          <List mediaList>
            <ListItem
              title="Facebook"
              subTitle="New messages from John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              after="17:14"
              arrow
            />
            <ListItem
              title="John Doe (via Twitter)"
              subTitle="John Doe (@_johndoe) mentioned you on Twitter!"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              after="17:14"
              arrow
            />
          </List>

          <BlockTitle>Something more simple</BlockTitle>
          <List mediaList>
            <ListItem
              title="Facebook"
              subTitle="New messages from John Doe"
              media={<img src="http://lorempixel.com/160/160/people/1" width="44" alt=""/>}
              arrow
            />
            <ListItem
              title="John Doe (via Twitter)"
              subTitle="John Doe (@_johndoe) mentioned you on Twitter!"
              media={<img src="http://lorempixel.com/160/160/people/2" width="44" alt=""/>}
              arrow
            />
          </List>

          <BlockTitle>Inset</BlockTitle>
          <List mediaList inset>
            <ListItem
              title="Facebook"
              subTitle="New messages from John Doe"
              media={<img src="http://lorempixel.com/160/160/people/1" width="44" alt=""/>}
              arrow
            />
            <ListItem
              title="John Doe (via Twitter)"
              subTitle="John Doe (@_johndoe) mentioned you on Twitter!"
              media={<img src="http://lorempixel.com/160/160/people/2" width="44" alt=""/>}
              arrow
            />
          </List>

        </PageContent>
      </Page>
    )
  }
}
