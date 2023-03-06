// @ts-check

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: ["@matali/eslint-config/next"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};

module.exports = eslintConfig;
