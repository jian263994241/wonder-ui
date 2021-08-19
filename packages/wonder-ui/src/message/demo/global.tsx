import { Button, createTheme, message } from '@wonder-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f32',
      dark: '#2d2'
    }
  }
});

message.setup({ theme });

export default () => (
  <Button
    variant="contained"
    onClick={() => {
      message.alert({ title: '标题', text: 'dialog 1' });
      message.alert({ title: '标题', text: 'dialog 2' });
      message.confirm({ title: '标题', text: '确定这么干吗?' });
      message.alert({ title: '标题', text: 'dialog 4' });
      message.toast('队列结束');
    }}
  >
    message
  </Button>
);
