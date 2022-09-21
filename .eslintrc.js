module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['google', 'plugin:prettier/recommended'],
	plugins: ['prettier'],
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
		]
	}
}
