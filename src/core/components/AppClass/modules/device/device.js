import device, { init } from '@wonder-ui/utils/device';

export default {
  name: 'device',
  proto: {
    device: device,
  },
  static: {
    device: device,
  },
  on: {
    init: init
  },
};