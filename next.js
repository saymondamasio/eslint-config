module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'standard-with-typescript',
		'prettier',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	plugins: [
		'jsx-a11y',
		'import',
		"react-hooks",
		'prettier',
		'@typescript-eslint',
	],
	parser: '@typescript-eslint/parser',
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
      jsx: true
    },
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json'
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				tabWidth: 2,
				singleQuote: true,
				bracketSpacing: true,
				arrowParens: 'avoid',
				trailingComma: 'none',
				printWidth: 100,
				endOfLine: 'auto',
				useTabs: true,
				semi: false
			}
		],
		'prefer-template': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error'
		],
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				'pathGroups': [
					{
						'pattern': '~/**',
						'group': 'parent'
					}
				]
			}
		],
		'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
	},
	'settings': {
		react: {
      version: 'detect',
    },
		'import/parsers': {
			'@typescript-eslint/parser': [
				'.ts',
				'.tsx'
			]
		}
	}
}
