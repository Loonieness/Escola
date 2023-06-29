module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    'max-len': 'off',
    camelcase: 'off',

  },
};
