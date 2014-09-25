//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = function (context) {
  "use strict";

  var eslintEnableDisable = /^(eslint-(enable|disable))/;

  //--------------------------------------------------------------------------
  // Helpers
  //--------------------------------------------------------------------------
  function checkComment(node) {
    var value = node.value.trim();
    var result = eslintEnableDisable.exec(value);
    if (result) {
      context.report(node, "Unexpected `{{rule}}` in content.", {
        rule: result[1]
      });
    }
  }

  //--------------------------------------------------------------------------
  // Public
  //--------------------------------------------------------------------------
  return {
    "BlockComment": checkComment,
    "LineComment": checkComment
  };
};
