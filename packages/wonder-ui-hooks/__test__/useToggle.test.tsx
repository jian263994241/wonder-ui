import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useToggle } from '../src';

function CheckableGroup(props: any) {
  const { exclusive, value: valueInput, onChange } = props;
  const [value, propsMap] = useToggle({
    value: valueInput,
    onChange,
    exclusive,
    data: [
      { label: 'label_1', value: '1' },
      { label: 'label_2', value: '2' }
    ]
  });

  console.log(value);

  return (
    <div>
      {propsMap.map((tgProps) => {
        return (
          <label key={tgProps.key} className={tgProps.label}>
            <input
              type="checkbox"
              checked={tgProps.actived}
              onChange={tgProps.onChange}
            />
            {tgProps.label}
          </label>
        );
      })}
    </div>
  );
}

test('Exclusive value', () => {
  render(<CheckableGroup exclusive value="1" onChange={() => {}} />);

  const label_1 = screen.getByLabelText('label_1');
  const label_2 = screen.getByLabelText('label_2');

  fireEvent.click(label_1);
  fireEvent.click(label_2);
});
