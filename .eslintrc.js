const { resolve } = require('node:path')
// https://eslint-plugin-perfectionist.azat.io/

const project = resolve(__dirname, 'tsconfig.json')

module.exports = {
  root: true,
  plugins: ['eslint-plugin-perfectionist'],
  extends: [
    'plugin:perfectionist/recommended-alphabetical',
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: { project },
  settings: {
    'import/resolver': { typescript: { project } },
    /**
     * enable MUI Joy components to be checked
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#configurations}
     */
    'jsx-a11y': {
      polymorphicPropName: 'component',
      components: {
        Button: 'button',
        Icon: 'svg',
        IconButton: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        List: 'ul',
        ListItem: 'li',
        ListItemButton: 'button',
        ListDivider: 'li',
        NextImage: 'img',
        NextLink: 'a',
        SvgIcon: 'svg',
        Textarea: 'textarea',
      },
    },
  },
  rules: {
    'perfectionist/sort-imports': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        // fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],

    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        reservedFirst: true,
      },
    ],
    // sort import statements
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
      },
    ],
    'react/prefer-stateless-function': 'error',
    'react/button-has-type': 'error',
    'react/no-unused-prop-types': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-script-url': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/jsx-fragments': 'error',
    'react/destructuring-assignment': [
      'error',
      'always',
      { destructureInSignature: 'always' },
    ],
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/function-component-definition': [
      'warn',
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/no-typos': 'warn',
    'react/display-name': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
  },
  overrides: [
    // Next.js App Router file convention
    // Must use default export
    {
      files: [
        'middleware.ts',
        'app/**/page.tsx',
        'app/**/layout.tsx',
        'app/**/not-found.tsx',
        'app/**/*error.tsx',
        'app/**/loading.tsx',
        'app/sitemap.ts',
        'app/robots.ts',
        'app/manifest.ts',
        'app/opengraph-image.tsx',
        'app/twitter-image.tsx',
        'tailwind.config.ts',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': ['error', { target: 'any' }],
      },
    },
    // module declarations
    {
      files: ['**/*.d.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
}
