type Handler = (...arg: any[]) => void;

export default class EventsClass {
  eventsParents: any[];

  eventsListeners: {
    [key: string]: Handler[];
  };

  constructor(parents: any[] = []) {
    this.eventsParents = parents;
    this.eventsListeners = {};
  }

  on(events: string, handler: Handler, priority: boolean) {
    const self = this;
    if (typeof handler !== 'function') {
      return self;
    }

    const method = priority ? 'unshift' : 'push';

    events.split(' ').forEach((event) => {
      if (!self.eventsListeners[event]) {
        self.eventsListeners[event] = [];
      }
      self.eventsListeners[event][method](handler);
    });
    return self;
  }

  once(events: string, handler: Handler, priority: boolean) {
    const self = this;
    if (typeof handler !== 'function') return self;
    function onceHandler(...args: any[]) {
      handler.apply(self, args);
      self.off(events, onceHandler);
    }
    return self.on(events, onceHandler, priority);
  }

  off(events: string, handler: Handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach((event) => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  }

  emit(events: string, ...data: any[]): this;
  emit(args: {
    events: string;
    data?: any;
    context?: any;
    local?: boolean;
    parents?: any[];
  }): this;
  emit(...args: any[]) {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data: any;
    let context: any;
    let eventsParents;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
      eventsParents = self.eventsParents;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
      eventsParents = args[0].local
        ? []
        : args[0].parents || self.eventsParents;
    }

    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    const localEvents = eventsArray.map((eventName: string) =>
      eventName.replace('local::', '')
    );
    const parentEvents = eventsArray.filter(
      (eventName: string) => eventName.indexOf('local::') < 0
    );

    localEvents.forEach((event: string) => {
      if (self.eventsListeners && self.eventsListeners[event]) {
        const handlers: Handler[] = [];
        self.eventsListeners[event].forEach((eventHandler) => {
          handlers.push(eventHandler);
        });
        handlers.forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    if (eventsParents && eventsParents.length > 0) {
      eventsParents.forEach((eventsParent: typeof self) => {
        eventsParent.emit(parentEvents, ...data);
      });
    }
    return self;
  }
}
