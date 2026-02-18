/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'import-notation': null,
  },
  languageOptions: {
    syntax: {
      atRules: {
        'custom-variant': {
          comment: 'Tailwind custom variant',
        },
      },
    },
  },
};
