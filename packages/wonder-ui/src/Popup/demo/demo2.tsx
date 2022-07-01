import * as React from 'react';
import {
  ContentBlock,
  Popup,
  PopupAction,
  Typography,
  List,
  ListItem,
  ListHeader,
  Form,
  FormItem
} from '@wonder-ui/core';

export default () => {
  const actionRef = React.useRef<PopupAction>();

  return (
    <React.Fragment>
      <List>
        <ListHeader>基本使用</ListHeader>
        <ListItem
          primary="弹窗"
          arrow="horizontal"
          onClick={() => actionRef.current.show()}
        />
      </List>

      <Form>
        <ListHeader>Form内使用</ListHeader>

        <FormItem
          label="弹窗"
          arrow="horizontal"
          onClick={(_, childRef: React.RefObject<PopupAction>) => {
            childRef.current.show();
          }}
        >
          <Popup autoHeight>
            <ContentBlock title="基本使用">
              <Typography gutterBottom>
                弹出窗口来了。您可以在此处放置任何内容，甚至可以使用其自己的独立视图导航。也不是，默认情况下，在
                iPhone / iPod 和 iPad 上看起来有点不同的弹出窗口，iPhone
                它是全屏的。
              </Typography>
            </ContentBlock>
          </Popup>
        </FormItem>
      </Form>

      <Popup title="标题" ref={actionRef}>
        <ContentBlock title="基本使用">
          <Typography gutterBottom>
            弹出窗口来了。您可以在此处放置任何内容，甚至可以使用其自己的独立视图导航。也不是，默认情况下，在
            iPhone / iPod 和 iPad 上看起来有点不同的弹出窗口，iPhone
            它是全屏的。
          </Typography>
        </ContentBlock>
        ...
      </Popup>
    </React.Fragment>
  );
};
