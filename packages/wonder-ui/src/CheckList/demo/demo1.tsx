import React from 'react';
import { CheckList, CheckListItem, Avatar } from '@wonder-ui/core';
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
    <CheckList defaultValue={['B']} header="基本使用">
      <CheckListItem value="A">A</CheckListItem>
      <CheckListItem value="B">B</CheckListItem>
      <CheckListItem value="C">C</CheckListItem>
    </CheckList>

    <CheckList multiple defaultValue={['B', 'C']} header="多选">
      <CheckListItem value="A">A</CheckListItem>
      <CheckListItem value="B">B</CheckListItem>
      <CheckListItem value="C">C</CheckListItem>
    </CheckList>

    <CheckList defaultValue={['A']} header="完成显示">
      <CheckListItem
        divider
        value="A"
        prefix={<Avatar src={image} />}
        primary="Novalee Spicer A"
        secondary="Deserunt dolor ea eaque eos"
      />
      <CheckListItem
        divider
        value="B"
        prefix={<Avatar src={image} />}
        primary="Novalee Spicer B"
        secondary="Deserunt dolor ea eaque eos"
      />
      <CheckListItem
        value="C"
        prefix={<Avatar src={image} />}
        primary="Novalee Spicer C"
        secondary="Deserunt dolor ea eaque eos"
      />
    </CheckList>

    <CheckList disabled defaultValue={['A']} header="整组禁用">
      <CheckListItem value="A">A</CheckListItem>
      <CheckListItem value="B">B</CheckListItem>
      <CheckListItem value="C">C</CheckListItem>
    </CheckList>

    <CheckList defaultValue={['A']} header="局部禁用">
      <CheckListItem value="A">A</CheckListItem>
      <CheckListItem value="B" disabled>
        B
      </CheckListItem>
      <CheckListItem value="C">C</CheckListItem>
    </CheckList>

    <CheckList
      defaultValue={['B']}
      activeIcon={<EmojiDizzyFill color="primary" fontSize="medium" />}
      header="自定义选中图标"
    >
      <CheckListItem value="A">A</CheckListItem>
      <CheckListItem value="B">B</CheckListItem>
      <CheckListItem value="C">C</CheckListItem>
    </CheckList>
  </div>
);
