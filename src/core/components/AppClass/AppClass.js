import AppClass from './modules/class';
import DeviceModule from './modules/device/device';
import SupportModule from './modules/support/support';

AppClass.use([ DeviceModule, SupportModule ]);

export default AppClass;