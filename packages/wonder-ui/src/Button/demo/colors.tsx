import { Button, Space, Paper } from '@wonder-ui/core';

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'inherit'
] as const;

export default () => (
  <Paper>
    <Space direction="vertical" gap={20}>
      <Space>
        {colors.map((color, index) => (
          <Button color={color} variant="contained" key={index}>
            {color}
          </Button>
        ))}
      </Space>

      <Space>
        {colors.map((color, index) => (
          <Button color={color} variant="outlined" key={index}>
            {color}
          </Button>
        ))}
      </Space>

      <Space>
        {colors.map((color, index) => (
          <Button color={color} variant="text" key={index}>
            {color}
          </Button>
        ))}
      </Space>
    </Space>
  </Paper>
);
