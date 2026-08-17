module.exports = {
  root: true,

  env: {
    browser: true,
    es2024: true
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },

  settings: {
    react: {
      version: "detect"
    }
  }
};