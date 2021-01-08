
```js
import React from 'react';
import { Page, Button, Picker, ContentBlock, Form, FormItem } from '@wonder-ui/core';
import lcnForm from 'lcn/lcn-form';

const ExtraButton = React.forwardRef((props, ref) => {
  const {extra='请选择', ...rest} = props;

  return (
    <Button ref={ref} {...rest}>{extra}</Button>
  )
})

const LcnPicker = React.forwardRef(function LcnPicker(props, ref) {
  return (
    <Picker ref={ref} data={lcnForm} cols={3} {...props}/>
  )
});

const PickerExamples = function (props) {

  return (
    <Page name="Picker" navbar>
      <Form>
        <ContentBlock header={<span>LcnPicker & Button</span>}>
          <FormItem name="picker">
              <LcnPicker><ExtraButton/></LcnPicker>
          </FormItem>
        </ContentBlock>
      </Form>
    </Page>
  )
};

<PickerExamples/>
```

