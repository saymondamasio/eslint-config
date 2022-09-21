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
	plugins: ['react', 'react-hooks', 'prettier'],
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
		'react-hooks/exhaustive-deps': 'warn'
	}
}
