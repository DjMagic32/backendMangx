module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends":[
        "eslint:recommended",
        "airbnb-base"
    ],
     
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "indent": ['error', 2, { "MemberExpression": 1 }],
    }
}
ö