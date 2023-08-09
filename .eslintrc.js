module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  /**
   * extends 配置数组时后面配置项覆盖前面配置的。
   */
  extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
  // required to lint *.vue files
  // plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    // allow async-await
    'no-console': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-async-in-computed-properties': 'off',
    'no-undef': 'off',
    'no-sparse-arrays': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-dupe-keys': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
  },
}
