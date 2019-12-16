'use strict';
/**
 * query-string
 * @see https://github.com/sindresorhus/query-string/blob/master/index.js
 */

import qs from 'query-string';

const defaultParseOptions = {
	decode: true,
	sort: true,
	arrayFormat: 'bracket',
	parseNumbers: false,
	parseBooleans: false
};

const defaultStringifyOptions = {
	encode: true,
	strict: true,
	arrayFormat: 'bracket'
};

const extract = qs.extract;
const parse = (str, opts = defaultParseOptions)=> qs.parse(str, opts);
const stringify = (str, opts = defaultStringifyOptions)=> qs.stringify(str, opts);
const parseUrl = (str, opts = defaultParseOptions)=> qs.parseUrl(str, opts);

export default { extract, parse, parseUrl, stringify };
export { extract, parse, parseUrl, stringify };