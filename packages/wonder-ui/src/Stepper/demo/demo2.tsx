/**
 * title: 自定义
 */

/** @jsx jsx */
import * as React from 'react';
import {
  jsx,
  defaultTheme,
  Badge,
  Stepper,
  styled,
  Space
} from '@wonder-ui/core';

const UIStepper = styled(Stepper)`
  .WuiStepper-button {
    border-radius: 50%;
    background-color: ${defaultTheme.palette.colors.blue.A400};
    color: #fff;
  }

  .WuiStepper-input {
    background-color: transparent;
  }
`;

export default function Example() {
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
}
