module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: ['react', 'react-hooks', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'prefer-template': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn'
	}
}
