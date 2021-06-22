/**
 * title: 自定义
 */
import * as React from 'react';
import { Badge, Stepper, StepperProps, Space, styled } from '@wonder-ui/core';

const getSize = (small?: boolean) => (small ? '20px' : '30px');

const UIStepper = styled(Stepper)<StepperProps & { small?: boolean }>`
  .WuiStepper-button {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.colors.blue.A400};
    color: #fff;
    width: ${({ small }) => getSize(small)};
    height: ${({ small }) => getSize(small)};
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
        small
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
