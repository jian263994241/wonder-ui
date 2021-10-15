import * as React from 'react';
import { useReactive } from './useReactive';

type CustomValueType = {
  [k: string]: any;
};

type ContextValueType = {
  index: number;
  exposedValueRefs: React.MutableRefObject<CustomValueType>[];
} & CustomValueType;

const ChildContext = React.createContext<ContextValueType>({
  index: -1,
  exposedValueRefs: []
});

export function createRelation() {
  const useChildren = () => {
    const state = useReactive({
      count: 0,
      exposedValueRefs: [] as React.MutableRefObject<CustomValueType>[]
    });

    function linkChildren(children: any, providedValue: CustomValueType = {}) {
      const childrenArray = React.Children.toArray(children);

      state.count = childrenArray.length;

      return React.Children.toArray(children).map((child, index) => (
        <ChildContext.Provider
          value={{
            ...providedValue,
            exposedValueRefs: state.exposedValueRefs,
            index
          }}
          key={index}
        >
          {child}
        </ChildContext.Provider>
      ));
    }

    return {
      count: state.count,
      exposedValueRefs: state.exposedValueRefs,
      linkChildren
    };
  };

  const useParent = () => {
    return React.useContext(ChildContext);
  };

  const useExpose = (value: CustomValueType) => {
    const { exposedValueRefs } = useParent();

    const exposedRef = React.useRef<CustomValueType>(value);

    exposedRef.current = value;

    React.useEffect(() => {
      const index = exposedValueRefs.indexOf(exposedRef);

      if (index < 0) {
        exposedValueRefs.push(exposedRef);
      }

      return () => {
        const index = exposedValueRefs.indexOf(exposedRef);
        exposedValueRefs.splice(index, 1);
      };
    }, [exposedValueRefs]);
  };

  return {
    useChildren,
    useParent,
    useExpose
  };
}
