(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{2850:function(module,exports){eval("module.exports = function(hljs) {\n  var KEYWORDS = {\n    keyword:\n      // JS keywords\n      'in if for while finally new do return else break catch instanceof throw try this ' +\n      'switch continue typeof delete debugger super yield import export from as default await ' +\n      // Coffee keywords\n      'then unless until loop of by when and or is isnt not',\n    literal:\n      // JS literals\n      'true false null undefined ' +\n      // Coffee literals\n      'yes no on off',\n    built_in:\n      'npm require console print module global window document'\n  };\n  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';\n  var SUBST = {\n    className: 'subst',\n    begin: /#\\{/, end: /}/,\n    keywords: KEYWORDS\n  };\n  var EXPRESSIONS = [\n    hljs.BINARY_NUMBER_MODE,\n    hljs.inherit(hljs.C_NUMBER_MODE, {starts: {end: '(\\\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp\n    {\n      className: 'string',\n      variants: [\n        {\n          begin: /'''/, end: /'''/,\n          contains: [hljs.BACKSLASH_ESCAPE]\n        },\n        {\n          begin: /'/, end: /'/,\n          contains: [hljs.BACKSLASH_ESCAPE]\n        },\n        {\n          begin: /\"\"\"/, end: /\"\"\"/,\n          contains: [hljs.BACKSLASH_ESCAPE, SUBST]\n        },\n        {\n          begin: /\"/, end: /\"/,\n          contains: [hljs.BACKSLASH_ESCAPE, SUBST]\n        }\n      ]\n    },\n    {\n      className: 'regexp',\n      variants: [\n        {\n          begin: '///', end: '///',\n          contains: [SUBST, hljs.HASH_COMMENT_MODE]\n        },\n        {\n          begin: '//[gim]{0,3}(?=\\\\W)',\n          relevance: 0\n        },\n        {\n          // regex can't start with space to parse x / 2 / 3 as two divisions\n          // regex can't start with *, and it supports an \"illegal\" in the main mode\n          begin: /\\/(?![ *]).*?(?![\\\\]).\\/[gim]{0,3}(?=\\W)/\n        }\n      ]\n    },\n    {\n      begin: '@' + JS_IDENT_RE // relevance booster\n    },\n    {\n      subLanguage: 'javascript',\n      excludeBegin: true, excludeEnd: true,\n      variants: [\n        {\n          begin: '```', end: '```',\n        },\n        {\n          begin: '`', end: '`',\n        }\n      ]\n    }\n  ];\n  SUBST.contains = EXPRESSIONS;\n\n  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});\n  var PARAMS_RE = '(\\\\(.*\\\\))?\\\\s*\\\\B[-=]>';\n  var PARAMS = {\n    className: 'params',\n    begin: '\\\\([^\\\\(]', returnBegin: true,\n    /* We need another contained nameless mode to not have every nested\n    pair of parens to be called \"params\" */\n    contains: [{\n      begin: /\\(/, end: /\\)/,\n      keywords: KEYWORDS,\n      contains: ['self'].concat(EXPRESSIONS)\n    }]\n  };\n\n  return {\n    aliases: ['coffee', 'cson', 'iced'],\n    keywords: KEYWORDS,\n    illegal: /\\/\\*/,\n    contains: EXPRESSIONS.concat([\n      hljs.COMMENT('###', '###'),\n      hljs.HASH_COMMENT_MODE,\n      {\n        className: 'function',\n        begin: '^\\\\s*' + JS_IDENT_RE + '\\\\s*=\\\\s*' + PARAMS_RE, end: '[-=]>',\n        returnBegin: true,\n        contains: [TITLE, PARAMS]\n      },\n      {\n        // anonymous function start\n        begin: /[:\\(,=]\\s*/,\n        relevance: 0,\n        contains: [\n          {\n            className: 'function',\n            begin: PARAMS_RE, end: '[-=]>',\n            returnBegin: true,\n            contains: [PARAMS]\n          }\n        ]\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class',\n        end: '$',\n        illegal: /[:=\"\\[\\]]/,\n        contains: [\n          {\n            beginKeywords: 'extends',\n            endsWithParent: true,\n            illegal: /[:=\"\\[\\]]/,\n            contains: [TITLE]\n          },\n          TITLE\n        ]\n      },\n      {\n        begin: JS_IDENT_RE + ':', end: ':',\n        returnBegin: true, returnEnd: true,\n        relevance: 0\n      }\n    ])\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/coffeescript.js?")}}]);