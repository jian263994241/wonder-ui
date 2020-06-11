const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const replace = require('@rollup/plugin-replace');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { uglify } = require('rollup-plugin-uglify');
const esInterop = require('rollup-plugin-es-module-interop');

const name = 'wonder-ui-styles';

const cjs = [
  {
    input: 'src/index.js',
    output: {
      file: `cjs/${name}.js`,
      sourcemap: true,
      format: 'cjs',
      esModule: false,
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        sourceMaps: true,
        rootMode: 'upward',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.BUILD_FORMAT': JSON.stringify('cjs'),
      }),
      esInterop(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: `cjs/${name}.min.js`,
      sourcemap: true,
      format: 'cjs',
      esModule: false,
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        sourceMaps: true,
        rootMode: 'upward',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.BUILD_FORMAT': JSON.stringify('cjs'),
      }),
      uglify(),
    ],
  },
];

module.exports = cjs;
