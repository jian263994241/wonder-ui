
export default {
  name: 'cache',
  instance: {
    caches: {}
  },
  proto: {
    updateCache (key, data, replace = true){
      const self = this;
      if(replace){
        self.caches[key] = data;
      }else{
        if(!self.caches[key]){
          self.caches[key] = data;
        }
      }
    },
    getCache (key, defaultData){
      const self = this;
      const history = self.history;
      if(!key || history.action == 'PUSH'){
        return defaultData;
      }else{
        return self.caches[key] || defaultData;
      }
    }
  },
  on: {
    init() {
      // const { location } = this.history;

      // console.log(location)
    }
  },
};