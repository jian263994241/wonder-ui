/**
 * title: 格式化显示
 * desc:
 */
import { InputNumber, Space } from '@wonder-ui/core';
import { formatBankCard } from 'util-helpers';

export default () => {
  return (
    <Space direction="vertical">
      <InputNumber
        placeholder="请输入银行卡"
        maxLength={22}
        formatter={(value) => formatBankCard(value)}
        parser={(displayValue) => displayValue!.replace(' ', '')}
      />
      <InputNumber
        placeholder="请输入金额"
        defaultValue={1000}
        formatter={(value) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
      />
    </Space>
  );
};
