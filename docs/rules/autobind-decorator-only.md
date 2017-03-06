# Only allow autobind decorator. (autobind-decorator-only)

Limit decorators to @autobind only.


## Rule Details


Examples of **incorrect** code for this rule:

```js

class Test {
  @notautobind
  methodName(){
  }
  
}

```

Examples of **correct** code for this rule:

```js

class Test {
  @autobind
  methodName(){
  }
  
}

```
