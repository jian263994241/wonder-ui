import { ArrowClockwise, Share } from '@wonder-ui/icons';
import {
  ArrowForward,
  IconButton,
  Searchbar,
  Space,
  styled
} from '@wonder-ui/core';
import * as React from 'react';

const MySearch = styled(Searchbar)`
  .WuiSearchbar-bg {
    background-color: rgb(79, 192, 141);
  }
  .WuiSvgIcon-root {
    color: #fff;
  }
  .WuiSearchbar-input {
    border-radius: 999px;
  }
`;

export default () => {
  const actionRef = React.useRef<any>();

  console.log(actionRef);
  return (
    <MySearch
      InputProps={{
        readOnly: true,
        actionRef: actionRef,
        onClick: () => alert('Link to Search Page')
      }}
      placeholder="点击跳转搜索页"
      barRight={
        <Space nowrap gap={0}>
          <IconButton>
            <Share fontSize="small" />
          </IconButton>

          <IconButton edge="end">
            <ArrowClockwise fontSize="small" />
          </IconButton>
        </Space>
      }
      barLeft={
        <IconButton edge="start">
          <ArrowForward direction="left" fontSize="small" />
        </IconButton>
      }
    />
  );
};
