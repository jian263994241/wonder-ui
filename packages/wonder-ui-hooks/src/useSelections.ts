import * as React from 'react';

export function useSelections<T>(items: T[], defaultSelected: T[] = []) {
  const [selected, setSelected] = React.useState<T[]>(defaultSelected);

  const selectedSet = React.useMemo(() => new Set<T>(selected), [items]);

  const singleActions = React.useMemo(() => {
    const isSelected = (item: T) => selectedSet.has(item);

    const select = (item: T) => {
      selectedSet.add(item);

      return setSelected([...selectedSet]);
    };

    const unSelect = (item: T) => {
      selectedSet.delete(item);

      return setSelected([...selectedSet]);
    };

    const toggle = (item: T) => {
      if (isSelected(item)) {
        unSelect(item);
      } else {
        select(item);
      }
    };

    return { isSelected, select, unSelect, toggle };
  }, [selectedSet]);

  const allActions = React.useMemo(() => {
    const selectAll = () => {
      items.forEach((o) => {
        selectedSet.add(o);
      });
      setSelected([...selectedSet]);
    };

    const unSelectAll = () => {
      items.forEach((o) => {
        selectedSet.delete(o);
      });
      setSelected([...selectedSet]);
    };

    const noneSelected = items.every((o) => !selectedSet.has(o));

    const allSelected = items.every((o) => selectedSet.has(o)) && !noneSelected;

    const partiallySelected = !noneSelected && !allSelected;

    const toggleAll = () => (allSelected ? unSelectAll() : selectAll());

    return {
      selectAll,
      unSelectAll,
      noneSelected,
      allSelected,
      partiallySelected,
      toggleAll
    };
  }, [selectedSet, items, selected]);

  return {
    selected,
    setSelected,
    ...singleActions,
    ...allActions
  } as const;
}

export default useSelections;
