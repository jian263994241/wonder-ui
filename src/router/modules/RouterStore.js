import React from 'react';
import qs from 'query-string';
import isObject from '../utils/isObject';

const qsOpts = { arrayFormat: 'comma' };

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
      return qs.parse(this.search, qsOpts)
    }
    return {};
  }

  set query(value){
    if(isObject(value)){
      this.search = qs.stringify(value, qsOpts);
    }
  }
}

/**
 * 一个全局的路由状态.
 * @visibleName RouterStore 路由状态
 */
class RouterStore {

	static Context = React.createContext();

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


