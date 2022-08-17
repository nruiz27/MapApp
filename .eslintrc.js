module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 0,
  },
  overrides: [
    {
      rules: {
        'eol-last': ['error', 'never'],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'eslint-disable-next-line': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'no-trailing-spaces': 'off',
      },
    },
  ],
};