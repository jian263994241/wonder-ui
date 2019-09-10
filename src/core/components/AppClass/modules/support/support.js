import Support from '../../../Support';

export default {
  name: 'support',
  proto: {
    support: Support,
  },
  static: {
    support: Support,
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
