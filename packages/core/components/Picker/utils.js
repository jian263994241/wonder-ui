import treeFilter from 'array-tree-filter';

export const getValueProps = (value, data)=>{
  return treeFilter(data, (item, level)=>{
    return item.value === value[level];
  });
};