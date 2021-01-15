import React from 'react';
import {
  Page,
  Button,
  Picker,
  ContentBlock,
  Form,
  FormItem,
  Flex,
} from '@wonder-ui/core';
import lcnForm from 'lcn/lcn-form';

const ExtraButton = React.forwardRef((props, ref) => {
  const { extra = '请选择', ...rest } = props;

  return (
    <Button ref={ref} {...rest}>
      {extra}
    </Button>
  );
});

const LcnPicker = React.forwardRef(function LcnPicker(props, ref) {
  return <Picker ref={ref} data={lcnForm} cols={3} {...props} />;
});

export default function PickerExamples(props) {
  const [data, setData] = React.useState([
    {
      label: 'a',
      value: 'a',
      level: 1,
      children: [
        {
          label: 'a.c',
          value: 'aa',
          level: 2,
          children: [{ label: 'a.c.d', value: 'aabn', level: 3 }],
        },
      ],
    },
    { label: 'b', value: 'b', level: 1 },
  ]);

  const [, forceUpdate] = React.useState();

  const handleChange = (value, props) => {
    const item = props[props.length - 1];

    setTimeout(() => {
      if (!item.children) {
        item.children = [
          {
            label: 'b.c',
            value: 'bb',
            level: item.level + 1,
          },
          {
            label: 'b.c2',
            value: 'bb2',
            level: item.level + 1,
          },
        ];

        if (item.level === 1) {
          item.children[0].children = [
            {
              label: 'bbc',
              value: 'bbc',
              level: item.level + 2,
            },
          ];
        }
      }

      forceUpdate(Date.now());
    }, 500);
  };

  return (
    <Page name="Picker" navbar>
      <Form>
        <ContentBlock header={<span>LcnPicker & Button</span>}>
          <Flex>
            <FormItem name="LcnPicker">
              <LcnPicker>
                <ExtraButton />
              </LcnPicker>
            </FormItem>

            <FormItem name="LcnPicker2">
              <Picker cols={3} data={data} onPickerChange={handleChange}>
                <ExtraButton />
              </Picker>
            </FormItem>
          </Flex>
        </ContentBlock>
      </Form>
    </Page>
  );
}
