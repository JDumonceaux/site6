"use strict";

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    rules: {
      "no-console": "error",
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/no-floating-promises": "error",
    },
    ignorePatterns: ["test-fixtures/**"],
    parserOptions: {
      project: "./tsconfig.json",
    },
  };
  