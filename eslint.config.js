// eslint.config.js
import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import prettier from "eslint-config-prettier"

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{ts,js}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
  {
    files: ["src/**/*.{ts,js}"],
    name: "prettier",
    rules: prettier.rules,
  },
]
