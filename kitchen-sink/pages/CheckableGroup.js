import React from 'react';
import { 
  Block, 
  CheckableGroup, 
  CheckableTagGroup, 
  CheckboxItem, 
  ContentBlock, 
  Form, 
  List, 
  Page,
} from '@wonder-ui/core';


export default Form.create()(function CheckableGroupExamples(props) {
  const { form } = props;

  return (
    <Page name="CheckableGroup" navbar>
      <ContentBlock header="Default">
        <Block bottom={1}>
          <span>多选: </span>
          {
            form.getFieldDecorator('Default1', {
              initialValue: [],
            })(
              <CheckableGroup 
                data={[
                  {label: '公司', value: '0'},
                  {label: '个人', value: '1'},
                ]}
              />
            )
          }
        </Block> 
        
        <Block>
          <span>单选: </span>
          {
            form.getFieldDecorator('Default2', {
              initialValue: '0',
            })(
              <CheckableGroup 
                exclusive
                data={[
                  {label: '公司', value: '0'},
                  {label: '个人', value: '1'},
                ]}
              />
            )
          }
        </Block>
      </ContentBlock>


      <ContentBlock header="CheckableTagGroup"> 
        <Block bottom={1}>
          <span>多选: </span>
          {
            form.getFieldDecorator('group', {
              initialValue: [],
            })(
              <CheckableTagGroup 
                data={[
                  {label: '公司', value: '0'},
                  {label: '个人', value: '1'},
                ]}
              />
            )
          }
        </Block> 
        
        <Block>
          <span>单选: </span>
          {
            form.getFieldDecorator('group2', {
              initialValue: '0',
            })(
              <CheckableTagGroup 
                exclusive
                data={[
                  {label: '公司', value: '0'},
                  {label: '个人', value: '1'},
                ]}
              />
            )
          }
        </Block>
      </ContentBlock>
      
      <List renderHeader={()=>`Checkbox list`}>
        {
          form.getFieldDecorator('list', {
            initialValue: [],
          })(
            <CheckableGroup 
              data={[
                {label: '公司', value: '0'},
                {label: '个人', value: '1'},
              ]}
              renderItem={({label, ...props})=>(<CheckboxItem visible {...props}>{label}</CheckboxItem>)}
            />
          )
        }
      </List>
      <List renderHeader={()=>`Checkbox list exclusive`}>
        {
          form.getFieldDecorator('list2', {
            initialValue: '0',
          })(
            <CheckableGroup 
              exclusive
              data={[
                {label: '公司', value: '0'},
                {label: '个人', value: '1'},
              ]}
              renderItem={({label, ...props})=>(<CheckboxItem visible {...props}>{label}</CheckboxItem>)}
            />
          )
        }
      </List>

      <List renderHeader={()=>`Checkbox list custon icon`}>
        {
          form.getFieldDecorator('list3', {
            initialValue: '0',
          })(
            <CheckableGroup 
              data={[
                {label: '公司', value: '0'},
                {label: '个人', value: '1'},
              ]}
              renderItem={
                ({label, ...props})=>(
                  <CheckboxItem 
                    visible 
                    renderIcon={({checked})=> checked && 'selected'}
                    position="right"
                    {...props} 
                    >{label}</CheckboxItem>
                )
              }
            />
          )
        }
      </List>
    </Page>
  )
})