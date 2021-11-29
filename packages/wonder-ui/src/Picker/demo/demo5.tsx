import { Picker, PickerProps, PickerAction } from '@wonder-ui/core';

const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州']
};

const props: PickerProps = {
  columns: [{ values: Object.keys(cities) }, { values: cities['浙江'] }]
};

export default () => {
  const onChange = (
    values: (keyof typeof cities)[],
    columnIndex: number,
    picker: PickerAction
  ) => {
    picker.setColumnValues(1, cities[values[0]]);
  };

  return <Picker onChange={onChange} disableDrawer {...props} />;
};
