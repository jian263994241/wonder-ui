/**
 * title: 自定义图标
 * desc:
 *
 */
import { Container, Toggle, Space, useTheme } from '@wonder-ui/core';
import {
  ToggleOff,
  ToggleOn,
  CheckCircle,
  CheckCircleFill,
  CheckSquare,
  CheckSquareFill
} from '@wonder-ui/icons';

export default () => {
  const theme = useTheme();
  return (
    <Container>
      <Space>
        <Toggle
          style={{ color: theme.palette.colors.blue[300] }}
          icon={<ToggleOff fontSize="large" />}
          checkedIcon={<ToggleOn fontSize="large" />}
        />
        <Toggle
          style={{ color: theme.palette.colors.pink[400] }}
          icon={<CheckCircle />}
          checkedIcon={<CheckCircleFill />}
        />
        <Toggle
          style={{ color: theme.palette.colors.orange[600] }}
          icon={<CheckSquare />}
          checkedIcon={<CheckSquareFill />}
        />
      </Space>
    </Container>
  );
};
