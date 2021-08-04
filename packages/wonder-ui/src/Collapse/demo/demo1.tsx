import {
  Button,
  Collapse,
  Space,
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
      <Collapse in={visible}>
        <div
          style={{
            border: '1px solid #ccc',
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
