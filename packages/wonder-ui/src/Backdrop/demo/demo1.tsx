import {
  Button,
  Backdrop,
  CircularProgress,
  ContentBlock
} from '@wonder-ui/core';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <ContentBlock title="基本使用">
      <Button onClick={() => setVisible(true)} variant="contained">
        Show Backdrop
      </Button>

      <Backdrop visible={visible} onClick={() => setVisible(false)}>
        <CircularProgress color="light" size={44} />
      </Backdrop>
    </ContentBlock>
  );
};
