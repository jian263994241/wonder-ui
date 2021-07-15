/**
 * title: 替换图标
 * desc:
 */
import {
  Button,
  showPreloader,
  hidePreloader,
  Space,
  LinearProgress,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';

export default () => {
  const open = (type: 'spinner' | 'circular' | 'custom') => {
    if (type === 'spinner' || type === 'circular') {
      showPreloader({
        type,
        text: `type - ${type}`
      });
    } else {
      showPreloader({
        indicator: (
          <div style={{ width: 200, paddingTop: 20 }}>
            <LinearProgress />
            <WhiteSpace />
            <Typography>加载中...</Typography>
          </div>
        )
      });
    }

    setTimeout(() => {
      hidePreloader();
    }, 2000);
  };

  return (
    <Space>
      <Button variant="contained" onClick={() => open('spinner')}>
        Open(spinner)
      </Button>

      <Button variant="contained" onClick={() => open('circular')}>
        Open(circular)
      </Button>

      <Button variant="contained" onClick={() => open('custom')}>
        Open(custom)
      </Button>
    </Space>
  );
};
