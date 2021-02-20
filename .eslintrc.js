module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    'react/jsx-props-no-spreading': [1, {
      html: 'ignore',
      custom: 'ignore',
      explicitSpread: 'ignore',
    }],
    // "import/no-unresolved": [
    //   2,
    //   { "caseSensitive": false }
    // ],
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
    // "import/prefer-default-export": "off",

    // "import/extensions": [
    //   "error",
    //   "ignorePackages",
    //   {
    //     "ts": "never",
    //     "tsx": "never"
    //   }
    // ],
  },
};
