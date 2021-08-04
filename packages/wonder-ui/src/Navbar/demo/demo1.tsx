import {
  ArrowForward,
  Button,
  CloseButton,
  IconButton,
  Navbar,
  Page,
  Space
} from '@wonder-ui/core';
import { Search, ThreeDotsVertical } from '@wonder-ui/icons';

export default () => {
  return (
    <Page>
      <Space direction="vertical" nowrap>
        <Navbar right={<CloseButton />} />

        <Navbar
          left={
            <IconButton>
              <ArrowForward direction="left" />
            </IconButton>
          }
        />

        <Navbar title="超长的导航栏, 超长的导航栏, 超长的导航栏, 超长的导航栏, 超长的导航栏, 超长的导航栏" />

        <Navbar
          title="超长的导航栏, 超长的导航栏, 超长的导航栏, 超长的导航栏, 超长的导航栏, 超长的导航栏"
          left={
            <IconButton>
              <ArrowForward direction="left" />
            </IconButton>
          }
        />

        <Navbar
          title="导航栏"
          left={
            <IconButton>
              <ArrowForward direction="left" />
            </IconButton>
          }
          right={
            <IconButton>
              <ThreeDotsVertical />
            </IconButton>
          }
        />

        <Navbar
          title="导航栏"
          left={
            <IconButton>
              <ArrowForward direction="left" />
            </IconButton>
          }
          right={
            <div>
              <IconButton>
                <Search />
              </IconButton>
              <IconButton>
                <ThreeDotsVertical />
              </IconButton>
            </div>
          }
        />

        <Navbar title="导航栏" subTitle="副标题" right={<CloseButton />} />

        <Navbar
          title="导航栏"
          subTitle="副标题"
          left={
            <Button
              startIcon={<ArrowForward direction="left" />}
              variant="text"
            >
              返回
            </Button>
          }
          right={<Button variant="text">关闭</Button>}
        />
      </Space>
    </Page>
  );
};
