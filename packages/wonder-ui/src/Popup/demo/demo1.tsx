import * as React from 'react';
import {
  ContentBlock,
  Popup,
  Typography,
  List,
  ListItem,
  ListHeader
} from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const [autoHeight, setAutoHeight] = React.useState(false);

  const show = (autoHeight: boolean = false) => {
    setAutoHeight(autoHeight);
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
  };

  return (
    <React.Fragment>
      <List>
        <ListHeader>基本使用</ListHeader>
        <ListItem primary="弹窗" arrow="horizontal" onClick={() => show()} />
        <ListItem
          primary="自动高度弹窗"
          arrow="horizontal"
          onClick={() => show(true)}
        />
      </List>

      <Popup
        title="标题"
        visible={visible}
        autoHeight={autoHeight}
        onClose={hide}
      >
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
