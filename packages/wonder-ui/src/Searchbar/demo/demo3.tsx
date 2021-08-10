import { ArrowClockwise, Share } from '@wonder-ui/icons';
import {
  ArrowForward,
  IconButton,
  Searchbar,
  Space,
  styled
} from '@wonder-ui/core';

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
  return (
    <MySearch
      InputProps={{
        readOnly: true,
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
