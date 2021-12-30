import { PickerView, PickerViewProps } from '@wonder-ui/core';

const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州']
};

const columns = [{ values: Object.keys(cities) }, { values: cities['浙江'] }];

export default () => {
  const onChange: PickerViewProps['onChange'] = (values: any, picker) => {
    picker.setColumnValues(1, cities[values[0] as keyof typeof cities]);
    //选项发生改变,重新获取值
    console.log(picker.getValues());
  };

  return <PickerView onChange={onChange} columns={columns} />;
};
