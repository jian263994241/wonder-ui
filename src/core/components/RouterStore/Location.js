import { parse, stringify } from '../../utils/queryString';
import utils from '../utils';

export default class Location {
  hash = undefined;
  pathname = undefined;
  search = undefined;
  state = undefined;

  get query(){
    if(this.search){
      return parse(this.search)
    }
    return {};
  }

  set query(value){
    if(utils.isObject(value)){
      this.search = stringify(value);
    }
  }
}