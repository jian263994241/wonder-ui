import * as React from 'react';
import { Badge, ContentBlock, Stepper, styled } from '@wonder-ui/core';

const UIStepper = styled(Stepper)`
  --wui-stepper-font-size: 20px;
  --wui-stepper-height: 44px;
  --wui-stepper-border-radius: 20px;
  --wui-stepper-bg-color: #000;
  --wui-stepper-button-color: #fff;
  --wui-stepper-text-color: #fff;
`;

export default () => {
  const [value, setValue] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  return (
    <>
      <ContentBlock title="购物车单品数量">
        <UIStepper
          value={value}
          hideInput={value === 0}
          hideMinusButton={value === 0}
          onChange={(val) => {
            setValue(val);
          }}
        />
      </ContentBlock>
      <ContentBlock title="纯按钮">
        <Badge text={value2} color="danger" hideContent={value2 == 0}>
          <UIStepper
            value={value2}
            hideInput
            hideMinusButton
            onChange={(val) => {
              setValue2(val);
            }}
          />
        </Badge>
      </ContentBlock>
    </>
  );
};
