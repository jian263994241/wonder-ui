import React from 'react';
import { Page, Button, Picker, ContentBlock, Form } from '@wonder-ui/core';
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



export default Form.create()(function PickerExamples(props) {
  const { form } = props;
  return (
    <Page name="Picker" navbar>
      <ContentBlock header={<span>LcnPicker & Button</span>}>
        {
          form.getFieldDecorator('group', {

          })(
            <LcnPicker><ExtraButton/></LcnPicker>
          )
        }
      </ContentBlock>
    </Page>
  )
})