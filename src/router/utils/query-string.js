import qs from 'query-string';

const qsOpts = { arrayFormat: 'bracket' };

export const stringify = (value)=>{
  return qs.stringify(value, qsOpts);
};

export const parse = (value)=>{
  return qs.parse(value, qsOpts);
}

export const stripQuery = (loc) => {
	if (loc.query) {
		const { search, query, ...other } = loc;
		const queryString = stringify(query);
		return {
			...other,
			search: queryString && `?${queryString}`,
		};
	}
	return loc;
};

export default { stringify, parse, stripQuery }
