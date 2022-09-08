module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "standard",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
