'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/wonder-ui-styles.min.js');
} else {
  module.exports = require('./cjs/wonder-ui-styles.js');
}
