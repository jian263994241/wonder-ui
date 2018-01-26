const env = require('babel-preset-env');
const react = require('babel-preset-react');
const stage0 = require('babel-preset-stage-0');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /(node_modules|bower_components)/,
        // enforce: 'pre',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  env, {
                    targets: {
                      browsers: ["last 2 versions", "safari >= 7",]
                    }
                  },
                ],
                react,
                stage0,
              ],
              plugins: [
                'transform-decorators-legacy',
                'transform-runtime',
                'transform-object-assign',
                [ 'styled-components', { displayName: false } ],
              ],
            }
          }
        ],
      }
    ]
  }
}
