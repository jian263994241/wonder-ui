import isObject from '@wonder-ui/utils/isObject';
import { parse, stringify } from '@wonder-ui/utils/queryString';

export default class Location {
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