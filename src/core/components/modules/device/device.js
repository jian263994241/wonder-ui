import Device from '../../Device';

export default {
  name: 'device',
  proto: {
    device: Device,
  },
  static: {
    device: Device,
  },
  on: {
    init: Device.init
  },
};