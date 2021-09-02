import * as React from 'react';
import { useControlled } from '@wonder-ui/hooks';

export interface TabContextProps {
  children?: React.ReactNode;
  defaultValue?: any;
  value?: any;
}

type Context = {
  value?: any;
  onChangeunControlled(value: any): void;
};

const Context = React.createContext<Context>({
  onChangeunControlled: () => {}
});

export default function TabContext(props: TabContextProps) {
  const { children, value: valueProp, defaultValue } = props;
  const [value, onChangeunControlled] = useControlled({
    value: valueProp,
    defaultValue
  });

  return (
    <Context.Provider value={{ value, onChangeunControlled }}>
      {children}
    </Context.Provider>
  );
}

export function useTabContext() {
  return React.useContext(Context);
}
