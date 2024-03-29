import * as React from 'react';
import {
  Button,
  Fade,
  Modal,
  styled,
  Typography,
  WhiteSpace,
  Space,
  message
} from '@wonder-ui/core';

const Demo = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 220px;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(0, 0, 0);
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 32px;
`;

export default () => {
  const [visible, setVisible] = React.useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div>
      <Button onClick={show}>自定义模态框</Button>

      <Modal visible={visible} onClose={hide}>
        <Fade in>
          <Demo>
            <Typography variant="h2" gutterBottom>
              模态框标题
            </Typography>
            <Typography gutterBottom style={{ height: 60, overflow: 'auto' }}>
              模态框文字文字, 模态框文字文字, 模态框文字文字, 模态框文字文字,
              模态框文字文字, 模态框文字文字, 模态框文字文字, 模态框文字文字,
              模态框文字文字, 模态框文字文字, 模态框文字文字, 模态框文字文字
            </Typography>
            <WhiteSpace />
            <Space>
              <Button
                variant="contained"
                onClick={() => message.alert({ text: 'Dialog alert message' })}
              >
                确定
              </Button>
              <Button onClick={hide} color="secondary">
                取消
              </Button>
            </Space>
          </Demo>
        </Fade>
      </Modal>
    </div>
  );
};
