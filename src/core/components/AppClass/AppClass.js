import AppClass from './modules/class';
import DeviceModule from './modules/device/device';
import SupportModule from './modules/support/support';
import ResizeModule from './modules/resize/resize';

AppClass.use([ DeviceModule, SupportModule, ResizeModule ]);

export default AppClass;