import {
  Button,
  usePreloader,
  Space,
  LinearProgress,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';

export default () => {
  const spinner = usePreloader({
    type: 'spinner',
    text: 'type-spinner',
    timeout: 2000
  });

  const circular = usePreloader({
    type: 'circular',
    text: 'type-circular',
    timeout: 2000
  });

  const custom = usePreloader({
    timeout: 2000,
    indicator: (
      <div style={{ width: 200, paddingTop: 20 }}>
        <LinearProgress />
        <WhiteSpace />
        <Typography>加载中...</Typography>
      </div>
    )
  });

  return (
    <Space>
      <Button
        onClick={() => {
          spinner.show();
        }}
      >
        Spinner
        {spinner.rendered}
      </Button>

      <Button
        onClick={() => {
          circular.show();
        }}
      >
        Circular
        {circular.rendered}
      </Button>

      <Button
        onClick={() => {
          custom.show();
        }}
      >
        Custom
        {custom.rendered}
      </Button>
    </Space>
  );
};
