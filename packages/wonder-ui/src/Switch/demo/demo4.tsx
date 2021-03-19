/**
 * title: 自定义图标
 * desc:
 *
 */

/** @jsx jsx */

import { jsx, Switch, Space, useTheme } from '@wonder-ui/core';
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
      <Switch
        css={{ color: theme.palette.blue[300] }}
        icon={<ToggleOff size="large" />}
        checkedIcon={<ToggleOn size="large" />}
      />
      <Switch
        css={{ color: theme.palette.pink[400] }}
        icon={<CheckCircle />}
        checkedIcon={<CheckCircleFill />}
      />
      <Switch
        css={{ color: theme.palette.orange[600] }}
        icon={<CheckSquare />}
        checkedIcon={<CheckSquareFill />}
      />
    </Space>
  );
}
