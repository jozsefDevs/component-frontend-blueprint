/**
 * React rules: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
 */
module.exports = {
    ignorePatterns: ["*.config.js", "node_modules/", "dist"],
    parserOptions: {
        project: `./tsconfig.json`
    },
    plugins: [
        "@typescript-eslint",
        "eslint-comments",
        "promise",
    ],
    extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:eslint-comments/recommended",
        "plugin:promise/recommended",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    env: {
        browser: true,
    },
    rules: {
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        "no-prototype-builtins": "off",
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        "react/destructuring-assignment": "off",
        // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
        "react/jsx-filename-extension": "off",
        // Since we're using TS, no need for propTypes
        "react/prop-types": "off",
        "react/state-in-constructor": "off",
        // Use function hoisting to improve code readability
        "no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: true },
        ],
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
        "@typescript-eslint/no-use-before-define": [
            "error",
            { functions: false, classes: true, variables: true, typedefs: true },
        ]
    }
};