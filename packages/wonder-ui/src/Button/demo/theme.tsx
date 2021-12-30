import * as React from 'react';
import {
  Button,
  Space,
  Paper,
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
  <ThemeProvider theme={appTheme}>
    <Paper>
      <Space>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>

        <Button
          color="primary"
          variant="contained"
          style={
            {
              '--button-primary-contained-color': '#03a9f4',
              '--button-primary-contained-active-color': '#0589c5',
              '--button-contrast-text-color': '#000'
            } as React.CSSProperties
          }
        >
          Primary 2
        </Button>
      </Space>
    </Paper>
  </ThemeProvider>
);
