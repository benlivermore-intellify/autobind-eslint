/**
 * @fileoverview Only allow autobind decorator.
 * @author blivermore
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/autobind-decorator-only"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({parser: 'babel-eslint'});
ruleTester.run("autobind-decorator-only", rule, {

    valid: [
        `
                class Test {
                  @autobind
                  methodName(){
                  }
                  
                }
            `
    ],

    invalid: [
        {
            code: `
                class Test {
                  @notautobind
                  methodName(){
                  }
                  
                }
            `,
            errors: [{
                message: "Use only the @autobind decorator. @notautobind is not allowed.",
                type: "Decorator"
            }]
        }
    ]
});
