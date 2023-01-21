module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
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
    'vue/no-use-v-if-with-v-for': 'off'
  }
}
