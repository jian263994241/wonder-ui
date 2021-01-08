
```js
import React from 'react';
import { Page, Button, DatePicker, ContentBlock, Form, FormItem } from '@wonder-ui/core';

const ExtraButton = React.forwardRef((props, ref) => {
  const {extra='请选择', ...rest} = props;

  return (
    <Button ref={ref} {...rest}>{extra}</Button>
  )
})

const PickerExamples = function (props) {

  return (
    <Page name="DatePicker" navbar>
      <Form>
        <ContentBlock header={<span>DatePickerPicker & Button</span>}>
          <FormItem name="group">
            <DatePicker>
              <ExtraButton />
            </DatePicker>
          </FormItem>
        </ContentBlock>
      </Form>
    </Page>
  )
};

<PickerExamples/>
```
