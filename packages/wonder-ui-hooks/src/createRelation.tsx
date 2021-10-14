import * as React from 'react';
import { useReactive } from './useReactive';

type CustomValueType = {
  [k: string]: any;
};

type ContextValueType = {
  index: number;
  count: number;
  exposedValueRefs: React.MutableRefObject<CustomValueType>[];
} & CustomValueType;

const ChildContext = React.createContext<ContextValueType | null>(null);

export function createRelation() {
  const useChildren = () => {
    const exposedValueRefs: React.MutableRefObject<CustomValueType>[] = [];

    const state = useReactive({
      count: 0
    });

    function linkChildren(children: any, providedValue: any = {}) {
      const childrenArray = React.Children.toArray(children);

      state.count = childrenArray.length;

      return React.Children.toArray(children).map((child, index) => {
        return (
          <ChildContext.Provider
            value={{ ...providedValue, exposedValueRefs, index }}
            key={index}
          >
            <React.Fragment>{child}</React.Fragment>
          </ChildContext.Provider>
        );
      });
    }

    return {
      count: state.count,
      linkChildren,
      exposedValueRefs
    };
  };

  const useParent = () => {
    return (React.useContext(ChildContext) || {
      index: -1,
      exposedValueRefs: []
    }) as ContextValueType;
  };

  const useExpose = (value: CustomValueType) => {
    const { exposedValueRefs, index } = useParent();

    const exposedRef =
      React.useRef() as React.MutableRefObject<CustomValueType>;

    React.useEffect(() => {
      if (exposedValueRefs[index] === undefined) {
        exposedValueRefs.push(exposedRef);
      }

      exposedValueRefs[index].current = value;

      return () => {
        exposedValueRefs.splice(index, 1);
      };
    }, [value]);
  };

  return {
    useChildren,
    useParent,
    useExpose
  };
}
