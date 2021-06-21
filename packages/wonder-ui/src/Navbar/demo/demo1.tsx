/**
 * title: 基础栅格
 * desc: Page组件内已包含Navbar
 */
import {
  ArrowForward,
  Button,
  Container,
  CloseButton,
  IconButton,
  Navbar,
  Space
} from '@wonder-ui/core';
import { ThreeDotsVertical, Search } from '@wonder-ui/icons';

export default () => (
  <Container size="sm">
    <Space direction="vertical">
      <Navbar right={<CloseButton edge="end" />} />

      <Navbar
        left={
          <IconButton edge="start">
            <ArrowForward direction="left" />
          </IconButton>
        }
      />

      <Navbar title="导航栏" />

      <Navbar
        title="导航栏"
        left={
          <IconButton edge="start">
            <ArrowForward direction="left" />
          </IconButton>
        }
      />

      <Navbar
        title="导航栏"
        left={
          <IconButton edge="start">
            <ArrowForward direction="left" />
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
            <ArrowForward direction="left" />
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
        subTitle="副标题"
        right={<CloseButton edge="end" />}
      />

      <Navbar
        title="导航栏"
        subTitle="副标题"
        left={
          <Button
            startIcon={<ArrowForward direction="left" />}
            variant="text"
            edge="start"
            disableRipple
            style={{ height: 44 }}
          >
            返回
          </Button>
        }
        right={
          <Button
            variant="text"
            edge="end"
            disableRipple
            style={{ height: 44 }}
          >
            关闭
          </Button>
        }
      />
    </Space>
  </Container>
);
