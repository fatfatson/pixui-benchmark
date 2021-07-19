module.exports = {
  extends: [
    '@tencent/eslint-config-tencent',
    'plugin:vue/essential',
    '@tencent/eslint-config-gamecenter',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  globals: {
    globalThis: 'readonly',
    std: 'readonly',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  rules: {
    indent: [1, 2],
  },
};
