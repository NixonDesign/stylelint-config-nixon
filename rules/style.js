module.exports = {
	// Color
	'color-hex-case': 'lower',
	'color-hex-length': ['short', {
		severity: 'warning'
	}],

	// Font family
	'font-family-name-quotes': 'always-unless-keyword',

	// Font weight
	'font-weight-notation': ['numeric', {
		severity: 'warning'
	}],

	// Function
	'function-comma-newline-after': 'always-multi-line',
	'function-comma-newline-before': null,
	'function-comma-space-after': 'always-single-line',
	'function-comma-space-before': 'never',
	'function-max-empty-lines': 0,
	'function-name-case': 'lower',
	'function-parentheses-newline-inside': 'always-multi-line',
	'function-parentheses-space-inside': 'never-single-line',
	'function-url-quotes': 'always',
	'function-whitespace-after': 'always',

	// Number
	'number-leading-zero': 'always',
	'number-no-trailing-zeros': true,

	// String
	'string-quotes': 'double',

	// Length
	'length-zero-no-unit': true,

	// Unit
	'unit-case': 'lower',

	// Value
	'value-keyword-case': 'lower',

	// Value list
	'value-list-comma-newline-after': 'always-multi-line',
	'value-list-comma-newline-before': 'never-multi-line',
	'value-list-comma-space-after': 'always-single-line',
	'value-list-comma-space-before': 'never',
	'value-list-max-empty-lines': 0,

	// Custom property
	'custom-property-empty-line-before': null,

	// Proprty
	'property-case': 'lower',

	// Declaration
	'declaration-bang-space-after': 'never',
	'declaration-bang-space-before': 'always',
	'declaration-colon-newline-after': 'always-multi-line',
	'declaration-colon-space-after': 'always-single-line',
	'declaration-colon-space-before': 'never',
	'declaration-empty-line-before': null,

	// Declaration block
	'declaration-block-semicolon-newline-after': 'always-multi-line',
	'declaration-block-semicolon-newline-before': 'never-multi-line',
	'declaration-block-semicolon-space-after': 'always-single-line',
	'declaration-block-semicolon-space-before': 'never',
	'declaration-block-trailing-semicolon': 'always',

	// Block
	'block-closing-brace-empty-line-before': 'never',
	'block-closing-brace-newline-after': ['always', {
		ignoreAtRules: ['else', 'if']
	}],
	'block-closing-brace-newline-before': 'always-multi-line',
	'block-closing-brace-space-after': null,
	'block-closing-brace-space-before': 'always-single-line',
	'block-opening-brace-newline-after': 'always-multi-line',
	'block-opening-brace-newline-before': null,
	'block-opening-brace-space-after': 'always-single-line',
	'block-opening-brace-space-before': 'always',

	// Selector
	'selector-attribute-brackets-space-inside': 'never',
	'selector-attribute-operator-space-after': 'never',
	'selector-attribute-operator-space-before': 'never',
	'selector-attribute-quotes': 'always',
	'selector-combinator-space-after': 'always',
	'selector-combinator-space-before': 'always',
	'selector-descendant-combinator-no-non-space': true,
	'selector-pseudo-class-case': 'lower',
	'selector-pseudo-class-parentheses-space-inside': 'never',
	'selector-pseudo-element-case': 'lower',
	'selector-pseudo-element-colon-notation': 'double',
	'selector-type-case': 'lower',

	// Selector list
	'selector-list-comma-newline-after': 'always',
	'selector-list-comma-newline-before': 'never-multi-line',
	'selector-list-comma-space-after': 'always-single-line',
	'selector-list-comma-space-before': 'never',

	// Rule
	'rule-empty-line-before': [ 'always-multi-line', {
		except: ['first-nested'],
		ignore: ['after-comment']
	}],

	// Media feature
	'media-feature-colon-space-after': 'always',
	'media-feature-colon-space-before': 'never',
	'media-feature-name-case': 'lower',
	'media-feature-parentheses-space-inside': 'never',
	'media-feature-range-operator-space-after': 'always',
	'media-feature-range-operator-space-before': 'always',

	// Media query list
	'media-query-list-comma-newline-after': 'always-multi-line',
	'media-query-list-comma-newline-before': null,
	'media-query-list-comma-space-after': 'always-single-line',
	'media-query-list-comma-space-before': 'never',

	// at-rule
	'at-rule-empty-line-before': ['always', {
		except: ['first-nested', 'blockless-after-same-name-blockless'],
		ignore: ['after-comment'],
		ignoreAtRules: ['else']
	}],
	'at-rule-name-case': 'lower',
	'at-rule-name-newline-after': 'always-multi-line',
	'at-rule-name-space-after': 'always-single-line',
	'at-rule-semicolon-newline-after': 'always',
	'at-rule-semicolon-space-before': 'never',

	// Comment
	'comment-empty-line-before': ['always', {
		except: ['first-nested'],
		ignore: ['stylelint-commands']
	}],
	'comment-whitespace-inside': 'always',

	// General / Sheet
	'indentation': 'tab',
	'linebreaks': 'unix',
	'max-empty-lines': null,
	'max-line-length': null,
	'no-eol-whitespace': true,
	'no-missing-end-of-source-newline': true,
	'no-empty-first-line': true
};
