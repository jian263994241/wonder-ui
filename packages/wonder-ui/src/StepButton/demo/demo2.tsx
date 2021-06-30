/**
 * title: 定义样式
 * desc: 三种定义方式
 */
import { Button, StepButton, Space, styled } from '@wonder-ui/core';

const MyStepButton = StepButton.withComponent(Button);

const CustomStepButton = styled(StepButton)`
  padding: 5px 8px;
  background: blue;
  color: #fff;
`;

export default () => {
  return (
    <Space>
      <StepButton
        component={(props) => <Button variant="contained" {...props} />}
      >
        按钮 1
      </StepButton>

      <MyStepButton variant="contained">按钮 2</MyStepButton>

      <CustomStepButton>自定义</CustomStepButton>
    </Space>
  );
};
