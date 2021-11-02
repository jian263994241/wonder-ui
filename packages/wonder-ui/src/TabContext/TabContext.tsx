import * as React from 'react';
import { useControlled, useReactive } from '@wonder-ui/hooks';

export interface TabContextProps {
  children?: React.ReactNode;
  defaultValue?: any;
  value?: any;
  lazyRender?: boolean;
}

export type TabContextType = {
  props: TabContextProps;
  state: {
    value: any;
  };
};

export const Context = React.createContext<TabContextType | null>(null);

export default function TabContext(props: TabContextProps) {
  const { lazyRender = true, children, value, defaultValue } = props;

  const state = useReactive<TabContextType['state']>({
    value: value ?? defaultValue
  });

  React.useEffect(() => {
    state.value = value;
  }, [value]);

  const contextValue = {
    state,
    props: {
      ...props,
      lazyRender
    }
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
