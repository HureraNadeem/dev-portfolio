import next from 'eslint-config-next';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

const eslintConfig = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'] },

  ...next,
  ...tseslint.configs.recommended,

  {
    rules: {
      // Unused code is either a mistake or dead weight. Allow a leading
      // underscore as the deliberate "I know, I need the positional arg" opt-out.
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // This is a static export with no server to log to, so a stray console
      // call ships to the visitor's devtools. Warnings and errors are fair game.
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Reassignment is the exception, not the default.
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'warn',
      eqeqeq: ['error', 'always', { null: 'ignore' }],

      // `any` erases the type safety this project is otherwise paying for, but
      // the vendored SVG artwork is not worth a refactor, so warn rather than error.
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Must come last: switches off every stylistic rule Prettier already owns,
  // so the two never disagree about the same line.
  prettier,
];

export default eslintConfig;
