/**
 * @fileoverview Only allow autobind decorator.
 * @author blivermore
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Only allow autobind decorator.",
            category: "@autobind",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: []
    },

    create: function(context) {

        return {
        // Rule methods - AST Node Type
            "Decorator": function (node) {
              const decoratorName = node.expression.name;
              if (decoratorName !== 'autobind') {
                context.report(node, `Use only the @autobind decorator. @${decoratorName} is not allowed.`);
              }
            }
        };
    }
};
