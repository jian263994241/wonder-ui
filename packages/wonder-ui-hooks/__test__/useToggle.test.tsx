import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useToggle } from '../src';

const CheckableGroup = React.forwardRef(function CheckableGroup(
  props: any,
  ref
) {
  const { exclusive, value: valueInput, defaultValue, onChange } = props;
  const [propsMaps] = useToggle({
    defaultValue,
    value: valueInput,
    onChange,
    exclusive,
    data: [
      { label: 'label_1', value: '1' },
      { label: 'label_2', value: '2' }
    ],
    ref
  });

  return (
    <div>
      {propsMaps.map((item) => {
        return (
          <label key={item.key} className={item.label}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={item.onChange}
              value={item.value}
            />
            {item.label}
          </label>
        );
      })}
    </div>
  );
});

test('Exclusive value', () => {
  const valueRef = React.createRef<any>();
  const { getByLabelText } = render(
    <CheckableGroup exclusive ref={valueRef} />
  );

  const label_1 = getByLabelText('label_1');
  const label_2 = getByLabelText('label_2');

  fireEvent.click(label_1);
  expect(valueRef.current.value).toBe('1');

  fireEvent.click(label_2);
  expect(valueRef.current.value).toBe('2');
});

test('Exclusive default value', () => {
  const valueRef = React.createRef<any>();

  render(<CheckableGroup exclusive defaultValue={'2'} ref={valueRef} />);

  expect(valueRef.current.value).toBe('2');
});

test('Exclusive handle value', () => {
  const valueRef = React.createRef<any>();

  const { getByLabelText } = render(
    <CheckableGroup exclusive value="1" onChange={() => {}} ref={valueRef} />
  );

  const label_1 = getByLabelText('label_1');
  const label_2 = getByLabelText('label_2');

  fireEvent.click(label_1);
  fireEvent.click(label_2);

  expect(valueRef.current.value).toBe('1');
});

test('value', () => {
  const valueRef = React.createRef<any>();
  const { getByLabelText } = render(<CheckableGroup ref={valueRef} />);

  const label_1 = getByLabelText('label_1');
  const label_2 = getByLabelText('label_2');

  fireEvent.click(label_1);
  expect(valueRef.current.value).toStrictEqual(['1']);

  fireEvent.click(label_2);
  expect(valueRef.current.value).toStrictEqual(['1', '2']);
});
