module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'default-param-last': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    camelcase: 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-no-bind': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
  },
};
