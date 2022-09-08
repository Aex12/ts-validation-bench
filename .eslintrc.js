/* eslint-disable */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off', // handled by typescript-language-server
    '@typescript-eslint/no-unused-vars': 'off', // handled by typescript-language-server
    'comma-dangle': ['error', 'always-multiline'],
  },
};
