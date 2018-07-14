module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'airbnb'
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver': 'eslint-import-resolver-webpack',
  },
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y', 'import', 'styled-components-config'],
  rules: {
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'components': [ 'Link' ],
      'specialLink': [ 'to' ]
    }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/no-danger': 'off',
    'import/no-extraneous-dependencies': 'off',
    'arrow-parens': 'off',
    'global-require': 'off',
    'spaced-comment': 'off',
    'consistent-return': 'warn', // for react arrow funcs
    indent: ['error', 2],
    // "linebreak-style": [
    //     "error",
    //     "unix"
    // ],
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 0,
    'no-console': 0,
    'no-undef': 0,
    'no-plusplus': 'off',
    'import/extensions': ['off', 'never'],
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
