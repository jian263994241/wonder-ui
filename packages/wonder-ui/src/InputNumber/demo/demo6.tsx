/**
 * title: 自定义
 * desc: 内部提供 `focus`, `blur` , `onInternalStep` 三个方法
 */
import * as React from 'react';
import {
  Button,
  InputNumber,
  InputNumberAction,
  Space,
  StepButton
} from '@wonder-ui/core';

const UIButton = StepButton.withComponent(Button);

export default () => {
  const actionRef = React.useRef<InputNumberAction>(null);
  return (
    <Space>
      <UIButton
        variant="contained"
        onStep={() => {
          actionRef.current?.onInternalStep(false);
        }}
      >
        -
      </UIButton>
      <InputNumber
        actionRef={actionRef}
        placeholder="Basic"
        defaultValue={1}
        min={1}
        max={10}
        disableStepHandler
        style={{ textAlign: 'center', width: 80 }}
      />
      <UIButton
        variant="contained"
        onStep={() => {
          actionRef.current?.onInternalStep(true);
        }}
      >
        +
      </UIButton>
    </Space>
  );
};
