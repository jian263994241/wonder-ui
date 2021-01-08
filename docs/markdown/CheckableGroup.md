```js
import React from 'react';
import {
  Block,
  CheckableGroup,
  CheckableTagGroup,
  CheckboxItem,
  ContentBlock,
  Form,
  FormItem,
  List,
  Page,
} from '@wonder-ui/core';


const CheckableGroupExamples = function (props) {
  return (
    <Page name="CheckableGroup" navbar>
      <Form>
        <ContentBlock header="Default">
          <Block bottom={1}>
            <span>多选: </span>
            <FormItem name="Default1">
              <CheckableGroup
                data={[
                  { label: '公司', value: '0' },
                  { label: '个人', value: '1' },
                ]}
              />
            </FormItem>
          </Block>

          <Block>
            <span>单选: </span>
            <FormItem initialValue="0">
              <CheckableGroup
                exclusive
                data={[
                  { label: '公司', value: '0' },
                  { label: '个人', value: '1' },
                ]}
              />
            </FormItem>
          </Block>
        </ContentBlock>

        <ContentBlock header="CheckableTagGroup">
          <Block bottom={1}>
            <span>多选: </span>
            <FormItem name="group">
              <CheckableTagGroup
                data={[
                  { label: '公司', value: '0' },
                  { label: '个人', value: '1' },
                ]}
              />
            </FormItem>
          </Block>

          <Block>
            <span>单选: </span>
            <FormItem name="group2" initialValue="0">
              <CheckableTagGroup
                exclusive
                data={[
                  { label: '公司', value: '0' },
                  { label: '个人', value: '1' },
                ]}
              />
            </FormItem>
          </Block>
        </ContentBlock>

        <List renderHeader={() => `Checkbox list`}>
          <FormItem name="list">
            <CheckableGroup
              data={[
                { label: '公司', value: '0' },
                { label: '个人', value: '1' },
              ]}
              renderItem={({ label, ...props }) => (
                <CheckboxItem visible {...props}>
                  {label}
                </CheckboxItem>
              )}
            />
          </FormItem>
        </List>
        <List renderHeader={() => `Checkbox list exclusive`}>
          <FormItem name="list2">
            <CheckableGroup
              exclusive
              data={[
                { label: '公司', value: '0' },
                { label: '个人', value: '1' },
              ]}
              renderItem={({ label, ...props }) => (
                <CheckboxItem visible {...props}>
                  {label}
                </CheckboxItem>
              )}
            />
          </FormItem>
        </List>

        <List renderHeader={() => `Checkbox list custon icon`}>
          <FormItem name="list3">
            <CheckableGroup
              data={[
                { label: '公司', value: '0' },
                { label: '个人', value: '1' },
              ]}
              renderItem={({ label, ...props }) => (
                <CheckboxItem
                  visible
                  renderIcon={({ checked }) => checked && 'selected'}
                  position="right"
                  {...props}
                >
                  {label}
                </CheckboxItem>
              )}
            />
          </FormItem>
        </List>
      </Form>
    </Page>
  );
};

<CheckableGroupExamples/>
```
