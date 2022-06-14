import React from 'react';
import {
  CheckList,
  CheckListItem,
  ContentBlock,
  Avatar
} from '@wonder-ui/core';
import { EmojiDizzyFill } from '@wonder-ui/icons';

const image =
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9';

export default () => (
  <div
    style={
      {
        '--wui-content-block-padding-vertical': '0px',
        '--wui-content-block-padding-horizontal': '0px'
      } as React.CSSProperties
    }
  >
    <ContentBlock title="基本使用">
      <CheckList defaultValue={['B']}>
        <CheckListItem value="A">A</CheckListItem>
        <CheckListItem value="B">B</CheckListItem>
        <CheckListItem value="C">C</CheckListItem>
      </CheckList>
    </ContentBlock>

    <ContentBlock title="多选">
      <CheckList multiple defaultValue={['B', 'C']}>
        <CheckListItem value="A">A</CheckListItem>
        <CheckListItem value="B">B</CheckListItem>
        <CheckListItem value="C">C</CheckListItem>
      </CheckList>
    </ContentBlock>

    <ContentBlock title="完成显示">
      <CheckList defaultValue={['A']}>
        <CheckListItem
          divider
          value="A"
          media={<Avatar src={image} />}
          primary="Novalee Spicer A"
          secondary="Deserunt dolor ea eaque eos"
        />
        <CheckListItem
          divider
          value="B"
          media={<Avatar src={image} />}
          primary="Novalee Spicer B"
          secondary="Deserunt dolor ea eaque eos"
        />
        <CheckListItem
          value="C"
          media={<Avatar src={image} />}
          primary="Novalee Spicer C"
          secondary="Deserunt dolor ea eaque eos"
        />
      </CheckList>
    </ContentBlock>

    <ContentBlock title="整组禁用">
      <CheckList disabled defaultValue={['A']}>
        <CheckListItem value="A">A</CheckListItem>
        <CheckListItem value="B">B</CheckListItem>
        <CheckListItem value="C">C</CheckListItem>
      </CheckList>
    </ContentBlock>

    <ContentBlock title="局部禁用">
      <CheckList defaultValue={['A']}>
        <CheckListItem value="A">A</CheckListItem>
        <CheckListItem value="B" disabled>
          B
        </CheckListItem>
        <CheckListItem value="C">C</CheckListItem>
      </CheckList>
    </ContentBlock>

    <ContentBlock title="自定义选中图标">
      <CheckList
        defaultValue={['B']}
        activeIcon={<EmojiDizzyFill color="primary" fontSize="medium" />}
      >
        <CheckListItem value="A">A</CheckListItem>
        <CheckListItem value="B">B</CheckListItem>
        <CheckListItem value="C">C</CheckListItem>
      </CheckList>
    </ContentBlock>
  </div>
);
