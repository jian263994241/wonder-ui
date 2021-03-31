/**
 * title: 自定义图标
 * desc:
 *
 */
/** @jsx jsx */
import { jsx, Toggle, Space, useTheme } from '@wonder-ui/core';
import {
  ToggleOff,
  ToggleOn,
  CheckCircle,
  CheckCircleFill,
  CheckSquare,
  CheckSquareFill
} from '@wonder-ui/icons';

export default function Example() {
  const theme = useTheme();
  return (
    <Space>
      <Toggle
        css={{ color: theme.palette.blue[300] }}
        icon={<ToggleOff size="large" />}
        checkedIcon={<ToggleOn size="large" />}
      />
      <Toggle
        css={{ color: theme.palette.pink[400] }}
        icon={<CheckCircle />}
        checkedIcon={<CheckCircleFill />}
      />
      <Toggle
        css={{ color: theme.palette.orange[600] }}
        icon={<CheckSquare />}
        checkedIcon={<CheckSquareFill />}
      />
    </Space>
  );
}
