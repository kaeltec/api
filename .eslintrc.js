module.exports = {
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    use: 'readonly',
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
  },
  rules: {
    'prettier/prettier': 'error',
    'global-require': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',

    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-globals': 'off',
  },
};
