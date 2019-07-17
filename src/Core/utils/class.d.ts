import EventsClass from './events';

export default class AppClass extends EventsClass {
  constructor(params: object, parents: []) : viod
  useModuleParams(module: object, instanceParams: object): void
  useModulesParams(instanceParams: object): void
  useModule(moduleName: string, moduleParams: object): void
  useModules(modulesParams: object): viod
  static set components( components: object ): void
  static installModule(module: object, ...params: any): void
  static use(module: object, ...params: any): void
}