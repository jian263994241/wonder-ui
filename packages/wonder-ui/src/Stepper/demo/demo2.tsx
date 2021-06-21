/**
 * title: 自定义
 */
import * as React from 'react';
import { Badge, Stepper, Space, styled } from '@wonder-ui/core';

const UIStepper = styled(Stepper)`
  .WuiStepper-button {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.colors.blue.A400};
    color: #fff;
  }

  .WuiStepper-input {
    background-color: transparent;
  }
`;

export default () => {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  return (
    <Space>
      <UIStepper
        value={value}
        hideInput={value === 0}
        hideMinusButton={value === 0}
        onChange={(val) => {
          setValue(Number(val));
        }}
      />
      <Badge text={value2} color="danger" hideContent={value2 == 0}>
        <UIStepper
          value={value2}
          hideInput
          hideMinusButton
          onChange={(val) => {
            setValue2(Number(val));
          }}
        />
      </Badge>
    </Space>
  );
};
