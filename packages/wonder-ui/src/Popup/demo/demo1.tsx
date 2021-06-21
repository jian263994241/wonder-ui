/**
 * title: 基本使用
 * desc: 弹出窗口来了。您可以在此处放置任何内容，甚至可以使用其自己的独立视图导航。也不是，默认情况下，在
            iPhone / iPod 和 iPad 上看起来有点不同的弹出窗口，iPhone
            它是全屏的。
 */
import * as React from 'react';
import { Button, Popup, Typography } from '@wonder-ui/core';

export default () => {
  const [popVisible, setVisible] = React.useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setVisible(true)}>
        打开弹窗
      </Button>

      <Popup
        title="Popup"
        visible={popVisible}
        onClose={() => setVisible(false)}
      >
        <div style={{ padding: '30px  16px' }}>
          <Typography gutterBottom>
            弹出窗口来了。您可以在此处放置任何内容，甚至可以使用其自己的独立视图导航。也不是，默认情况下，在
            iPhone / iPod 和 iPad 上看起来有点不同的弹出窗口，iPhone
            它是全屏的。
          </Typography>

          <Typography>...</Typography>
        </div>
      </Popup>
    </div>
  );
};
