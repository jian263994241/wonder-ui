/**
 * title: 自定义Modal内容
 * desc:
 */

/** @jsx jsx */
import { jsx, Button, Fade, Modal, styled, Typography } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

const Demo = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(0, 0, 0);
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 32px;
`;

export default function Example() {
  const [visible, { toggle }] = useToggle();

  return (
    <div>
      <Button onClick={() => toggle()}>Show Modal</Button>

      <Modal visible={visible} keepMounted onClose={() => toggle()}>
        <Fade in>
          <Demo>
            <Typography variant="h2" gutterBottom>
              模态框标题
            </Typography>
            <Typography gutterBottom> 模态框文字文字 </Typography>
            <Button onClick={() => toggle()}>确定</Button>
          </Demo>
        </Fade>
      </Modal>
    </div>
  );
}
