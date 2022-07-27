import * as React from 'react';
import {
  Button,
  ContentBlock,
  Space,
  ThemeProvider,
  createTheme
} from '@wonder-ui/core';

const appTheme = createTheme({
  palette: {
    primary: {
      main: '#ff0119'
    },
    secondary: {
      main: '#9dd1ff'
    }
  },
  components: {
    WuiButton: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default () => (
  <div>
    <ThemeProvider theme={appTheme}>
      <ContentBlock title="主题方式">
        <Space>
          <Button color="primary" variant="contained">
            Primary
          </Button>
          <Button color="secondary" variant="contained">
            Secondary
          </Button>
        </Space>
      </ContentBlock>
    </ThemeProvider>

    <ContentBlock
      title="CSS变量方式"
      style={
        {
          '--wui-button-color': '#03a9f4'
        } as React.CSSProperties
      }
    >
      <Space>
        <Button variant="contained">Custom Button</Button>
        <Button variant="outlined">Custom Button</Button>
        <Button variant="text">Custom Button</Button>
      </Space>
    </ContentBlock>
  </div>
);
