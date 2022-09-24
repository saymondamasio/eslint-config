module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
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
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'prefer-template': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'jsx-a11y/alt-text': [
			'warn',
			{
				elements: ['img'],
				img: ['Image']
			}
		],
		'jsx-a11y/aria-props': 'warn',
		'jsx-a11y/aria-proptypes': 'warn',
		'jsx-a11y/aria-unsupported-elements': 'warn',
		'jsx-a11y/role-has-required-aria-props': 'warn',
		'jsx-a11y/role-supports-aria-props': 'warn'
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts']
		}
	}
}
