(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{2975:function(module,exports){eval("module.exports = function(hljs) {\n  var VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';\n  var CHAR = {\n    className: 'string',\n    begin: '\\\\$.{1}'\n  };\n  var SYMBOL = {\n    className: 'symbol',\n    begin: '#' + hljs.UNDERSCORE_IDENT_RE\n  };\n  return {\n    aliases: ['st'],\n    keywords: 'self super nil true false thisContext', // only 6\n    contains: [\n      hljs.COMMENT('\"', '\"'),\n      hljs.APOS_STRING_MODE,\n      {\n        className: 'type',\n        begin: '\\\\b[A-Z][A-Za-z0-9_]*',\n        relevance: 0\n      },\n      {\n        begin: VAR_IDENT_RE + ':',\n        relevance: 0\n      },\n      hljs.C_NUMBER_MODE,\n      SYMBOL,\n      CHAR,\n      {\n        // This looks more complicated than needed to avoid combinatorial\n        // explosion under V8. It effectively means `| var1 var2 ... |` with\n        // whitespace adjacent to `|` being optional.\n        begin: '\\\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\\\|',\n        returnBegin: true, end: /\\|/,\n        illegal: /\\S/,\n        contains: [{begin: '(\\\\|[ ]*)?' + VAR_IDENT_RE}]\n      },\n      {\n        begin: '\\\\#\\\\(', end: '\\\\)',\n        contains: [\n          hljs.APOS_STRING_MODE,\n          CHAR,\n          hljs.C_NUMBER_MODE,\n          SYMBOL\n        ]\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/smalltalk.js?")}}]);