/**
 * # Commitlint Configuration
 *
 * See: https://commitlint.js.org/#/ -
 *      https://commitlint.js.org/#/reference-rules
 */

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-full-stop': [0, 'always'],
    },
};
