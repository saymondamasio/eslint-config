module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
	overrides: [],
	plugins: ['prettier'],
	parserOptions: {
		project: ['./tsconfig.json']
	},
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'prefer-template': 'error'
	}
}
