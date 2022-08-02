import { Button, IconButton, Navbar, Space } from '@wonder-ui/core';
import { ChevronLeft, Search, ThreeDotsVertical, X } from '@wonder-ui/icons';

export default () => {
  return (
    <Space direction="vertical" nowrap>
      <Navbar
        left={
          <IconButton edge="start">
            <ChevronLeft />
          </IconButton>
        }
      />

      <Navbar
        title="超长的导航栏, 超长的导航栏, 超长的导航栏, 超长的导航栏, 超长的导航栏, 超长的导航栏"
        left={
          <IconButton edge="start">
            <ChevronLeft />
          </IconButton>
        }
      />

      <Navbar
        title="导航栏"
        left={
          <IconButton edge="start">
            <ChevronLeft />
          </IconButton>
        }
        right={
          <IconButton edge="end">
            <ThreeDotsVertical />
          </IconButton>
        }
      />

      <Navbar
        title="导航栏"
        left={
          <IconButton edge="start">
            <ChevronLeft />
          </IconButton>
        }
        right={
          <div>
            <IconButton>
              <Search />
            </IconButton>
            <IconButton edge="end">
              <ThreeDotsVertical />
            </IconButton>
          </div>
        }
      />

      <Navbar
        title="导航栏"
        subTitle="副标题, 副标题, 副标题, 副标题"
        right={
          <IconButton edge="end">
            <X />
          </IconButton>
        }
      />

      <Navbar
        title="导航栏"
        subTitle="副标题"
        left={
          <Button edge="start" startIcon={<ChevronLeft />} variant="text">
            返回
          </Button>
        }
        right={
          <Button variant="text" edge="end">
            关闭
          </Button>
        }
      />
    </Space>
  );
};
