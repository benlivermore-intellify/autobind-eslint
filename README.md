# eslint-plugin-autobind-eslint-rule

eslint for allowing only autobind decorator

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-autobind-eslint-rule`:

```
$ npm install eslint-plugin-autobind-eslint-rule --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-autobind-eslint-rule` globally.

## Usage

Add `autobind-eslint-rule` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "autobind-eslint-rule"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "autobind-eslint-rule/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





