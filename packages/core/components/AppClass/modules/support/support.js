import support from '@wonder-ui/utils/support';

export default {
  name: 'support',
  proto: {
    support: support,
  },
  static: {
    support: support,
  },
  on: {
    init() {
      const html = document.querySelector('html');
      if (!html) return;
      const classNames = [];
      // Add html classes
      classNames.forEach((className) => {
        html.classList.add(className);
      });
    },
  },
};
