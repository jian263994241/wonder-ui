'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./styles.cjs.production.min.js');
} else {
  module.exports = require('./styles.cjs.development.js');
}
