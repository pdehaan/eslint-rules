# ESLint custom rules

## Usage

```sh
$ eslint --rulesdir rules *.js
```

The following files show how you can create custom ESLint rules:

- [rules/copyright.js](/rules/copyright.js) &mdash; Scans block comments and line comments for the specified copyright header.
- [rules/no-eslint-disable.js](/rules/no-eslint-disable.js) &mdash; Scans source code for any `/*eslint-disable*/` or `/*eslint-enable*/` comments.


