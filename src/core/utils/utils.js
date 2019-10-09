/* eslint no-control-regex: "off" */

let uniqueNumber = 1;

const Utils = {
  uniqueNumber() {
    uniqueNumber += 1;
    return uniqueNumber;
  },
  eventNameToColonCase(eventName) {
    let hasColon;
    return eventName.split('').map((char, index) => {
      if (char.match(/[A-Z]/) && index !== 0 && !hasColon) {
        hasColon = true;
        return `:${char.toLowerCase()}`;
      }
      return char.toLowerCase();
    }).join('');
  },
  deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
        // no setter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
  },
  nextFrame(callback) {
    return Utils.requestAnimationFrame(() => {
      Utils.requestAnimationFrame(callback);
    });
  },
  now() {
    return Date.now();
  },
  isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  merge(...args) {
    const to = args[0];
    args.splice(0, 1);
    const from = args;

    for (let i = 0; i < from.length; i += 1) {
      const nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        const keysArray = Object.keys(Object(nextSource));
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  },
  extend(...args) {
    let deep = true;
    let to;
    let from;
    if (typeof args[0] === 'boolean') {
      deep = args[0];
      to = args[1];
      args.splice(0, 2);
      from = args;
    } else {
      to = args[0];
      args.splice(0, 1);
      from = args;
    }
    for (let i = 0; i < from.length; i += 1) {
      const nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        const keysArray = Object.keys(Object(nextSource));
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (!deep) {
              to[nextKey] = nextSource[nextKey];
            } else if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  },
  noop (target) {
    return target;
  },
  equal(...args){
    const returns = args.pop();
    for(let i = 0; i< args.length; i++){
      const [a, b] = args[i];
      if(a != b){
        return null;
      }
    }
    return typeof returns === 'function' ? returns(): returns;
  },
  unequal(...args){
    const returns = args.pop();
    for(let i = 0; i< args.length; i++){
      const [a, b] = args[i];
      if(a == b){
        return null;
      }
    }
    return typeof returns === 'function' ? returns(): returns;
  },
  exist(...args){
    const returns = args.pop();
    for(let i = 0; i< args.length; i++){
      if(!args[i]){
        return null;
      }
    }
    return returns;
  }
};
export default Utils;