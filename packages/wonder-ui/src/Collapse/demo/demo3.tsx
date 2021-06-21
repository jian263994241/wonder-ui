/**
 * title: 水平方向折叠
 * desc: 通过 `direction=horizontal, collapsedSize` 改变折叠方向
 */
import {
  Button,
  Space,
  Collapse,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';
import { useBoolean } from '@wonder-ui/hooks';

export default () => {
  const [visible, { setTrue, setFalse, toggle }] = useBoolean(false);

  return (
    <div>
      <Space>
        <Button variant="contained" onClick={() => setTrue()}>
          Open
        </Button>
        <Button variant="contained" onClick={() => setFalse()}>
          Close
        </Button>
        <Button variant="contained" onClick={() => toggle()}>
          Toggle
        </Button>
      </Space>
      <WhiteSpace />
      <Collapse in={visible} direction="horizontal" timeout={500}>
        <div
          style={{
            width: 300,
            padding: 16,
            boxSizing: 'border-box'
          }}
        >
          <Typography>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </Typography>
        </div>
      </Collapse>
    </div>
  );
};
