module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
	overrides: [],
	plugins: ['prettier'],
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
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'prefer-template': 'error'
	}
}
