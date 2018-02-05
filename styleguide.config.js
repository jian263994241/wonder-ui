const path = require('path');

module.exports = {
  webpackConfig: require('./webpack.config.js'),
  components: 'src/components/**/*.jsx',
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  sections : [
    {
      name: 'Accordion',
      content: 'docs/Accordion.md',
      sections: [
        {components: 'src/Accordion/Accordion.jsx'},
        {components: 'src/Accordion/AccordionItem.jsx'}
      ]
    },
    {
      name: 'Button',
      content: 'docs/Button.md',
      sections: [
        {components: 'src/Button/Button.jsx'},
        {components: 'src/Button/ButtonsRow.jsx'}
      ]
    },
    {
      name: 'Countdown',
      content: 'docs/Countdown.md',
      sections: [
        {components: 'src/Countdown/Countdown.jsx'}
      ]
    },
    {
      name: 'Dialog',
      content: 'docs/Dialog.md',
      sections: [
        {components: 'src/Dialog/alert.jsx'},
        {components: 'src/Dialog/confirm.jsx'},
        {components: 'src/Dialog/toast.jsx'}
      ]
    },
    {
      name: 'Grid',
      content: 'docs/Grid.md',
      sections: [
        {components: 'src/Grid/GridRow.jsx'},
        {components: 'src/Grid/GridCol.jsx'},
      ]
    },
    {
      name: 'Keyboard',
      content: 'docs/Keyboard.md',
      sections: [
        {components: 'src/Keyboard/Keyboard.jsx'},
        {components: 'src/Keyboard/Enpad.jsx'},
        {components: 'src/Keyboard/Numpad.jsx'},
        {components: 'src/Keyboard/Logo.jsx'},
      ]
    }
  ]

};
