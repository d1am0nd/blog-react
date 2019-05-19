// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
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
    'html',
    'react',
    '@typescript-eslint',
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Default no-unused-vars
    'no-unused-vars': 1,
    'react/prop-types': 0,
    // jsx version of no-unused-vars
    'camelcase': 0,
    'react/jsx-uses-vars': 1,
    'indent': ['error', 2],
    'max-len': 0,
    'require-jsdoc': 0,
    'no-invalid-this': 0,
    'func-call-spacing': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
  }
}
