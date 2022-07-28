import { ContentBlock, InputNumber, Space } from '@wonder-ui/core';
import { formatBankCard } from 'util-helpers';

function onChange(value: string) {
  console.log('changed', value);
}

export default () => (
  <>
    <ContentBlock title="基本使用">
      <Space direction="vertical">
        <InputNumber placeholder="请输入" />
        <InputNumber placeholder="请输入" disableStepHandler />
      </Space>
    </ContentBlock>

    <ContentBlock title="格式化">
      <Space direction="vertical">
        <InputNumber
          placeholder="请输入银行卡"
          maxLength={22}
          formatter={(value) => formatBankCard(value)}
          parser={(displayValue) => displayValue!.replace(' ', '')}
        />
        <InputNumber
          defaultValue={1000}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
          onChange={onChange}
        />
        <InputNumber
          defaultValue={100}
          min={0}
          max={100}
          formatter={(value) => `${value}%`}
          parser={(value) => value!.replace('%', '')}
          onChange={onChange}
        />
      </Space>
    </ContentBlock>

    <ContentBlock title="高精度小数">
      <InputNumber
        defaultValue="1"
        min="0"
        max="10"
        step="0.00000000000001"
        onChange={onChange}
        stringMode
      />
    </ContentBlock>
  </>
);
