module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'standard-with-typescript',
		'prettier',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jest-dom/recommended',
		'plugin:cypress/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	plugins: [
		'react',
		'prettier',
		'@typescript-eslint',
		'testing-library',
		'jest-dom',
		'import',
		'cypress'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
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
		'prettier/prettier': 'error',
		'prefer-template': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@next/next/no-img-element': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error'
		],
		'import/no-anonymous-default-export': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'testing-library/no-node-access': [
			'error',
			{
				'allowContainerFirstChild': true
			}
		],
		'import/no-unresolved': 'error',
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
		},
		'import/resolver': {
			'typescript': {
				'alwaysTryTypes': true,
				'project': '<root>/tsconfig.json'
			}
		}
	}
}
