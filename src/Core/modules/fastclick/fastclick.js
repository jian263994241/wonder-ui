/* eslint no-param-reassign: "off" */
import attachFastClick from '../../utils/fastclick';

export default {
  name: 'fastclick',
  proto: {
    fastclick: attachFastClick,
  },
  static: {
    fastclick: attachFastClick,
  },
  on: {
    init() {
      attachFastClick(document.body);
    },
  },
};
