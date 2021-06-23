/**
 * title: 自定义
 */
import * as React from 'react';
import { Badge, Space, styled } from '@wonder-ui/core';
import Stepper from '../Stepper';

const sizeValues = { sm: 20, md: 30, lg: 40 };

type SizeKey = keyof typeof sizeValues;

const UIStepper = styled(Stepper)<{ size?: SizeKey }>`
  .WuiStepper-button {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: #fff;
    width: ${({ size = 'md' }) => sizeValues[size] + 'px'};
    height: ${({ size = 'md' }) => sizeValues[size] + 'px'};
  }

  .WuiStepper-minus {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }

  .WuiStepper-input {
    background-color: transparent;
  }
`;

export default () => {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  return (
    <Space gap={20} direction="vertical">
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

      <Badge text={value2} color="danger" hideContent={value2 == 0}>
        <UIStepper
          size="lg"
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
