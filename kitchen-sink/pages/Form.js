import React from 'react';
import { 
  Block, 
  Button, 
  CheckableTagGroup, 
  Dialog, 
  Flex, 
  Form, 
  InputItem, 
  List, 
  ListItem, 
  Page, 
  Picker, 
} from '@wonder-ui/core';

const fruit = [
  { label: '苹果', value: '0' },
  { label: '橘子', value: '1' },
  { label: '香蕉', value: '2' },
];

export default Form.create()(function FormExamples(props) {
  const { form } = props;
  const { getFieldDecorator, validateFields, resetFields } = form;
  
  const handleSubmit = React.useCallback(()=>{
    validateFields((errors, _values)=>{
      if(errors){
        let err = Form.getHeadError(errors);
        return Dialog.toast(err.message);
      }

      console.log(_values);
    })
  }, []);

  const reset = React.useCallback(()=>{
    resetFields()
  }, []);

  return (
    <Page name="Form" navbar >
      <List renderHeader={()=>'基本'}>
        {
          getFieldDecorator('field_1', {
            rules: [{
              required: true,
              message: `请填写[基本]字段`
            }]
          })(
            <InputItem placeholder="请输入">基本</InputItem>
          )
        }
        {
          getFieldDecorator('field_2', {
            rules: [{
              required: true,
              message: `请填写[多行]字段`
            }]
          })(
            <InputItem placeholder="请输入" multiline>多行</InputItem>
          )
        }
        {
          form.getFieldDecorator('group2', {
            initialValue: '0',
            rules: [{
              required: true,
              message: `请选择[性质]字段`
            }]
          })(
            <InputItem
              renderInput={({onChange, value}, ref)=>(
                <CheckableTagGroup 
                  ref={ref}
                  exclusive
                  data={[
                    {label: '公司', value: '0'},
                    {label: '个人', value: '1'},
                  ]}
                  onChange={onChange}
                  value={value}
                />
              )}
            > 企业性质 </InputItem>
          )
        }
        {
          getFieldDecorator('field_3', {
            rules: [{
              required: true,
              message: `请选择[选择]字段`
            }]
          })(
            <Picker extra="请选择" data={fruit} cols={1}>
              <ListItem arrow="horizontal">选择</ListItem>
            </Picker>
          )
        }
        {
          getFieldDecorator('field_4', {
            rules: [{
              required: true,
              message: `请填写[数字]字段`
            }]
          })(
            <InputItem extra="元" placeholder="请输入" alignRight type="number">数字</InputItem>
          )
        }
        
      </List>

      <List renderHeader={()=>`禁用字段`}>
        <InputItem value="不可编辑" readOnly>只读</InputItem>
        <InputItem value="不可编辑" disabled>禁用</InputItem>
      </List>
      <Block top={5} blank={1}>
        <Flex>
          <Button fullWidth size="large" onClick={reset}>重置</Button>
          <Button fullWidth size="large" color="primary" onClick={handleSubmit}>提交</Button>
        </Flex>
        
      </Block>
      
    </Page>
  )
})