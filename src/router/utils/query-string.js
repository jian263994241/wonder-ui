import qs from '@wonder-ui/utils/queryString';

export const stringify = qs.stringify;

export const parse = qs.parse;

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
