import { stringify } from '../../utils/queryString';

const stripQuery = (loc) => {
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

/**
 * 一个全局的路由状态.
 * @visibleName RouterStore 路由状态
 */
class RouterStore {

	location = {};
	prevLocation = null;

  update(location) {
		this.prevLocation = this.location;
		this.location = location;
	}
	
  __initial(history) {
		this.history = history;
	}
  
  push(loc, state) {
		return this.history.push(stripQuery(loc), state);
	}

	replace(loc, state) {
		return this.history.replace(stripQuery(loc), state);
	}
  
}

/**
 * @component
 */
export default RouterStore;