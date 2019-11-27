import isObject from '@wonder-ui/utils/isObject';
import { parse, stringify } from '@wonder-ui/utils/queryString';

const deleteEmptyValue = (value = {})=> {
	for(let k in value){
		if(value[k] === undefined || value[k] === null){
			delete value[k];
		}
	}
	return value;
}

export const stripQuery = (loc) => {
	if (loc.query) {
		const { search, query, ...other } = loc;
		const queryString = stringify(deleteEmptyValue(query));
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
	prev = {};

	__updateState(newState){
		this.prev.hash = this.hash;
		this.prev.pathname = this.pathname;
		this.prev.search = this.search;
		this.prev.state = this.state;
		this.hash = newState.hash;
		this.pathname = newState.pathname;
		this.search = newState.search;
		this.state = newState.state;
	}

  get query(){
    if(this.search){
      return parse(this.search)
    }
    return {};
  }

  set query(value){
    if(isObject(value)){
      this.search = stringify(value);
    }
  }
}

/**
 * 一个全局的路由状态.
 * @visibleName RouterStore 路由状态
 */
class RouterStore {

	location = new Location();

	history = null;

  __updateLocation(newState) {
		this.location.__updateState(newState);
	}

  __initial(history) {
		this.history = history;
	}
  
  push = (loc, state) => {
		this.history.push(stripQuery(loc), state);
	}

	replace = (loc, state) => {
		this.history.replace(stripQuery(loc), state);
	}

	go = (n) => {
    this.history.go(n);
	}
	
  goBack = () => {
    this.history.goBack();
	}
	
  goForward = () => {
    this.history.goForward();
  }
  
}

/**
 * @component
 */
export default RouterStore;


