# ESLint custom rules

The following files show how you can create custom ESLint rules:

- [rules/copyright.js](/rules/copyright.js) &mdash; Scans block comments and line comments for the specified copyright header.
- [rules/no-eslint-disable.js](/rules/no-eslint-disable.js) &mdash; Scans source code for any `/*eslint-disable*/` or `/*eslint-enable*/` comments.

## Usage

```sh
$ eslint --rulesdir rules *.js
```

## Output

```sh
$ npm start

> eslint-rules@1.0.0 start /Users/pdehaan/dev/github/eslint-rules
> eslint --rulesdir rules *.js


app.js
  14:0  warning  Unexpected `eslint-disable` in content  no-eslint-disable
  16:0  warning  Unexpected `eslint-enable` in content   no-eslint-disable

app2.js
  4:0  warning  No copyright found  copyright

✖ 3 problems
```



