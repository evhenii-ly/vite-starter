import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from "eslint-plugin-import";
// import airbnbBase from "eslint-config-airbnb-base";

export default [
  {
    ignores: ["node_modules/**", "dist/**", "*.config.js"],
  },

  // airbnbBase,
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // "prettier/prettier": "error",
      "no-console": "warn",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
        },
      ],
      "import/unambiguous": "off",
    },
  },
];
