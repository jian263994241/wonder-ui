import { parse, stringify } from '@wonder-ui/utils/queryString';
import Location from './Location';

/**
 * 一个全局的路由状态.
 * @visibleName RouterStore 路由状态
 */
export default class RouterStore {

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


function stripQuery(loc) {
	if (loc.query) {
		const { search, query, ...rest } = loc;
		const queryString = stringify(deleteEmptyValue(query));
		return {
			...rest,
			search: queryString && `?${queryString}`,
		};
	}
	return loc;
}

function deleteEmptyValue(value = {}) {
	for(let k in value){
		if(value[k] === undefined || value[k] === null){
			delete value[k];
		}
	}
	return value;
}




