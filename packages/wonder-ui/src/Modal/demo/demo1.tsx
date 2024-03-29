import * as React from 'react';
import { Button, Fade, Modal, ModalContent, Typography } from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <div>
      <Button onClick={show}>模态框</Button>

      <Modal visible={visible} onClose={hide}>
        <Fade in>
          <ModalContent
            title="Modal Title"
            onOk={hide}
            onClose={hide}
            onCancel={hide}
          >
            <Typography>some contents...</Typography>
            <Typography>some contents...</Typography>
            <Typography>some contents...</Typography>
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
};
