/**
 * title: 基本使用
 * desc:
 */
import {
  Cascader,
  List,
  ListItem,
  ListInputItem,
  ListHeader,
  Typography
} from '@wonder-ui/core';
import { getPCA } from 'lcn';

const pca = getPCA({ inland: true });

export default () => (
  <List>
    <ListHeader>基础用法</ListHeader>

    <Cascader
      keepMounted
      title="请选择所在地区"
      options={pca}
      textKey="name"
      valueKey="code"
      defaultValue={['110000', '110100', '110116']}
      onChange={(value) => {
        console.log(value);
      }}
    >
      <ListInputItem
        divider
        button
        readOnly
        label="地区1"
        placeholder="请选择地区"
      />
    </Cascader>

    <Cascader
      keepMounted
      title="请选择所在地区"
      options={pca}
      textKey="name"
      valueKey="code"
      onChange={(value) => {
        console.log(value);
      }}
      onRenderChildren={({ onClick, displayText }) => {
        return (
          <ListItem
            button
            extra={
              <Typography style={{ maxWidth: 220 }}>
                {displayText || '请选择地区'}
              </Typography>
            }
            onClick={onClick}
            arrow="horizontal"
          >
            地区2
          </ListItem>
        );
      }}
    />
  </List>
);
