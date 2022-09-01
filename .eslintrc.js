module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'ignorePatterns': [
    'dist',
    'node_modules'
  ],
  'rules': {
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'indent': [
      'error',
      2
    ],
    'no-multi-spaces': [
      'error'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'space-before-function-paren': [
      'error',
      'never'
    ]
  }
}
