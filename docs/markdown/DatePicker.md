```js
import React from 'react';
import { Page, Button, DatePicker, ContentBlock, Form } from '@wonder-ui/core';

const ExtraButton = React.forwardRef((props, ref) => {
  const {extra='请选择', ...rest} = props;

  return (
    <Button ref={ref} {...rest}>{extra}</Button>
  )
})

const PickerExamples = Form.create()(function (props) {
  const { form } = props;
  
  return (
    <Page name="DatePicker" navbar>
      <ContentBlock header={<span>DatePickerPicker & Button</span>}>
        {
          form.getFieldDecorator('group', {

          })(
            <DatePicker><ExtraButton/></DatePicker>
          )
        }
      </ContentBlock>
    </Page>
  )
});
<PickerExamples/>
```