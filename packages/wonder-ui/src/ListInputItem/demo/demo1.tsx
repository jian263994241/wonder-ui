/**
 * title: 基本使用
 */
import {
  Page,
  List,
  ListInputItem,
  ListHeader,
  IconButton,
  Button
} from '@wonder-ui/core';
import { Person, InfoCircle } from '@wonder-ui/icons';

export default () => {
  return (
    <Page>
      <List>
        <ListHeader>基本用法</ListHeader>
        <ListInputItem label="文本" placeholder="请输入文本" required />
      </List>

      <List>
        <ListHeader>类型</ListHeader>
        <ListInputItem
          divider
          type="text"
          label="名字"
          placeholder="请输入名字"
          required
        />
        <ListInputItem
          divider
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
        <ListInputItem
          divider
          type="tel"
          label="手机号"
          placeholder="请输入手机号"
        />
        <ListInputItem
          divider
          type="email"
          label="邮箱"
          placeholder="请输入邮箱"
        />
        <ListInputItem
          divider
          type="number"
          label="数字"
          placeholder="请输入数字"
        />
      </List>

      <List>
        <ListHeader>高度自适应</ListHeader>
        <ListInputItem label="多行文本" multiline placeholder="请输入文本" />
      </List>

      <List>
        <ListHeader>图标</ListHeader>
        <ListInputItem
          divider
          label="文本"
          prefix={<Person fontSize="small" />}
          placeholder="请输入文本"
        />
        <ListInputItem
          divider
          label="文本"
          prefix={<Person fontSize="small" />}
          suffix={
            <IconButton edge="end" size="small">
              <InfoCircle fontSize="small" />
            </IconButton>
          }
          placeholder="请输入文本"
        />
        <ListInputItem
          allowClear
          label="文本"
          prefix={<Person fontSize="small" />}
          placeholder="显示清除图标"
        />
      </List>

      <List>
        <ListHeader>插入按钮</ListHeader>
        <ListInputItem
          allowClear
          label="短信验证码"
          placeholder="请输入短信验证码"
          extra={
            <Button variant="outlined" size="small">
              短信验证码
            </Button>
          }
        />
      </List>

      <List>
        <ListHeader>禁用&只读</ListHeader>
        <ListInputItem
          divider
          readOnly
          label="文本"
          placeholder="请输入文本"
          value="ReadOnly text"
        />
        <ListInputItem
          label="文本"
          disabled
          placeholder="请输入文本"
          value="Disabled text"
        />
      </List>

      <List>
        <ListHeader>错误提示</ListHeader>
        <ListInputItem
          divider
          label="文本"
          placeholder="请输入文本"
          description="信息提示"
          suffix={
            <IconButton edge="end" size="small">
              <InfoCircle fontSize="small" />
            </IconButton>
          }
        />
        <ListInputItem
          label="文本"
          placeholder="请输入文本"
          description="信息提示"
          errorMessage="请输入文本"
        />
      </List>
    </Page>
  );
};
