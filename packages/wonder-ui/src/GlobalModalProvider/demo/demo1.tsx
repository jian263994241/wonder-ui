/**
 * title: 基本用法
 * desc: 打开 `modalStack` , 管理Modal队列
 */
/** @jsx jsx */
import {
  jsx,
  Button,
  styled,
  Modal,
  Typography,
  GlobalModalProvider,
  useGlobalModal,
  GlobalModalContextProps
} from '@wonder-ui/core';
import * as React from 'react';

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

const GlobalModal = React.createRef<GlobalModalContextProps | null>();

function App() {
  const { runModal } = useGlobalModal();

  return (
    <div>
      <Button
        onClick={() => {
          runModal({ message: 'Alert Message 1111111' });
          //or
          GlobalModal.current?.runModal({ message: 'Alert Message 2222222' });
        }}
      >
        Alert
      </Button>
    </div>
  );
}

export default function Example() {
  return (
    <GlobalModalProvider
      ref={GlobalModal}
      modalStack
      component={({ visible, onClose, message }) => {
        return (
          <Modal visible={visible} onClose={onClose}>
            <Demo>
              <Typography gutterBottom>{message}</Typography>
              <Button onClick={() => onClose()}>确定</Button>
            </Demo>
          </Modal>
        );
      }}
    >
      <App />
    </GlobalModalProvider>
  );
}
