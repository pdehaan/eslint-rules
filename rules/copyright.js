//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = function (context) {
  "use strict";

  var copyright = context.options[0].trim();
  var hasCopyright = false;

  //--------------------------------------------------------------------------
  // Helpers
  //--------------------------------------------------------------------------
  function cleanComment(comment) {
    comment = comment.replace(/^\s?\*+/gm, ""); // Remove leading "*" chars.
    comment = comment.replace(/\s+/g, " "); // Remove consecutive spaces.
    return comment.trim();
  }

  function checkComment(node) {
    var comment = node.value.trim();
    comment = cleanComment(comment);
    if (comment.indexOf(copyright) > -1) {
      hasCopyright = true;
    }
  }

  function checkProgram(node) {
    if (!hasCopyright) {
      context.report(node, "No copyright found.");
    }
  }

  //--------------------------------------------------------------------------
  // Public
  //--------------------------------------------------------------------------
  return {
    "BlockComment": checkComment,
    "LineComment": checkComment,
    "Program:exit": checkProgram
  };
};
