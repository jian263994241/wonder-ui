/**
 * title: 基础栅格
 * desc: Page组件内已包含Navbar
 */

/** @jsx jsx */
import {
  jsx,
  ArrowForward,
  Button,
  IconButton,
  Navbar,
  Container,
  CloseButton,
  Space
} from '@wonder-ui/core';
import { ThreeDotsVertical, Search } from '@wonder-ui/icons';

export default function Example() {
  return (
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
              <IconButton size="small">
                <Search />
              </IconButton>
              <IconButton size="small" edge="end">
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
            >
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
    </Container>
  );
}
