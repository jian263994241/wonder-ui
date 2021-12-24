import { PickerView, PickerObjectOption, Space } from '@wonder-ui/core';

const columns: PickerObjectOption[] = [
  {
    text: '浙江',
    children: [
      {
        text: '杭州',
        children: [{ text: '西湖区' }, { text: '余杭区' }]
      },
      {
        text: '温州',
        children: [{ text: '鹿城区' }, { text: '瓯海区' }]
      }
    ]
  },
  {
    text: '福建',
    children: [
      {
        text: '福州',
        children: [{ text: '鼓楼区' }, { text: '台江区' }]
      },
      {
        text: '厦门',
        children: [{ text: '思明区' }, { text: '海沧区' }]
      }
    ]
  }
];

const columns2: PickerObjectOption[] = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '杭州',
        value: '杭州'
      },
      {
        label: '宁波',
        value: '宁波'
      }
    ]
  },
  {
    label: '江苏',
    value: '江苏',
    children: [
      {
        label: '南京',
        value: '南京'
      },
      {
        label: '苏州',
        value: '苏州'
      }
    ]
  }
];

export default () => (
  <Space direction="vertical">
    <PickerView
      columns={columns}
      onChange={(values) => {
        console.log(
          (values as PickerObjectOption[]).map((item) => item.text).join(',')
        );
      }}
    />

    <PickerView
      columns={columns2}
      textKey="label"
      onChange={(values) => {
        console.log(
          (values as PickerObjectOption[]).map((item) => item.label).join(',')
        );
      }}
    />
  </Space>
);
