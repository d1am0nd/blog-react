// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    'es6': true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  'extends': [
    // 'eslint:recommended',
    'plugin:react/recommended',
    'google',
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // Doesn't work with jsx
    'no-unused-vars': 0,

    'require-jsdoc': 0,

    'indent': ["error", 2],

    'no-unused-vars': 1,

    'react/jsx-uses-vars': 1,

    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
