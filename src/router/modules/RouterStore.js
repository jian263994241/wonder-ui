import qs from 'query-string';

const qsOpts = {
	arrayFormat: 'comma'
};

const stripQuery = (loc) => {
	if (loc.query) {
		const { search, query, ...other } = loc;
		const queryString = qs.stringify(query, qsOpts);
		return {
			...other,
			search: queryString && `?${queryString}`,
		};
	}
	return loc;
};

class Location {
  hash = undefined;
  pathname = undefined;
  search = undefined;
  state = undefined;

  get query(){
    if(this.search){
      return qs.parse(this.search, qsOpts)
    }
    return {};
  }

  set query(value){
    if(utils.isObject(value)){
      this.search = qs.stringify(value, qsOpts);
    }
  }
}

/**
 * 一个全局的路由状态.
 * @visibleName RouterStore 路由状态
 */
class RouterStore {

	location = new Location();
	prevLocation = null;

  update(location) {
		this.prevLocation = Object.assign({}, this.location);
		Object.assign(this.location, location);
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