import * as ReactIs from "react-is";
import warning from 'tiny-warning';
import getDisplayName from './getDisplayName';

export default function isWuiComponent(name, Component){
  if(!Component.type) return false;
  if(Component.type.displayName === 'JssContextSubscriber'){
    return name === getDisplayName(Component.type.InnerComponent);
  }
  return name === getDisplayName(Component.type);
}