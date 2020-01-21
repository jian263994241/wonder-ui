import EventsClass from '@wonder-ui/utils/Events';
import device from '@wonder-ui/utils/device';

export default class AppClass extends EventsClass {
  constructor(params = {}, parents = []) {
    super(parents);
    const self = this;
    self.params = params;

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach((eventName) => {
        self.on(eventName, self.params.on[eventName]);
      });
    }

    self.device = device;
  }
}
