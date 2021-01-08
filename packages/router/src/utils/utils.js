import { parse, stringify } from 'querystringify';

export const addQuery = (location = {}) => {
  location.query = parse(location.search);
};

export const stripQuery = (loc = {}) => {
  if (loc.query) {
    const { search, query, ...rest } = loc;
    const queryString = stringify(deleteEmptyValue(query), true);
    return {
      ...rest,
      search: queryString,
    };
  }
  return loc;
};

function deleteEmptyValue(value) {
  for (let k in value) {
    if (value[k] === undefined || value[k] === null) {
      delete value[k];
    }
  }
  return value;
}
