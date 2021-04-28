/**
 * title: 基础栅格
 * desc: Page组件内已包含Navbar
 */

/** @jsx jsx */
import {
  jsx,
  ArrowForward,
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
        <Navbar right={<CloseButton edge="end" disabledTouchState />} />

        <Navbar
          left={
            <IconButton edge="start" disabledTouchState>
              <ArrowForward direction="left" />
            </IconButton>
          }
        />

        <Navbar title="导航栏" />

        <Navbar
          title="导航栏"
          left={
            <IconButton edge="start" disabledTouchState>
              <ArrowForward direction="left" />
            </IconButton>
          }
        />

        <Navbar
          title="导航栏"
          left={
            <IconButton edge="start" disabledTouchState>
              <ArrowForward direction="left" />
            </IconButton>
          }
          right={
            <IconButton edge="end" disabledTouchState>
              <ThreeDotsVertical />
            </IconButton>
          }
        />

        <Navbar
          title="导航栏"
          left={
            <IconButton edge="start" disabledTouchState>
              <ArrowForward direction="left" />
            </IconButton>
          }
          right={
            <div>
              <IconButton size="small" disabledTouchState>
                <Search />
              </IconButton>
              <IconButton size="small" edge="end" disabledTouchState>
                <ThreeDotsVertical />
              </IconButton>
            </div>
          }
        />

        <Navbar
          title="导航栏"
          right={<CloseButton edge="end" disabledTouchState />}
        />
      </Space>
    </Container>
  );
}
