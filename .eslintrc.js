module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 11
  },
 
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'linebreak-style': 0
  }
};
