module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				'pathGroups': [
					{
						'pattern': '~/**',
						'group': 'parent'
					},
          {
						'pattern': '@/**',
						'group': 'parent'
					}
				]
			}
		],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}