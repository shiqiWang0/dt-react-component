(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{2931:function(module,exports){eval("module.exports = function(hljs) {\n  var KEYWORDS = {\n    keyword:\n      // Moonscript keywords\n      'if then not for in while do return else elseif break continue switch and or ' +\n      'unless when class extends super local import export from using',\n    literal:\n      'true false nil',\n    built_in:\n      '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' +\n      'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' +\n      'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' +\n      'io math os package string table'\n  };\n  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';\n  var SUBST = {\n    className: 'subst',\n    begin: /#\\{/, end: /}/,\n    keywords: KEYWORDS\n  };\n  var EXPRESSIONS = [\n    hljs.inherit(hljs.C_NUMBER_MODE,\n      {starts: {end: '(\\\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp\n    {\n      className: 'string',\n      variants: [\n        {\n          begin: /'/, end: /'/,\n          contains: [hljs.BACKSLASH_ESCAPE]\n        },\n        {\n          begin: /\"/, end: /\"/,\n          contains: [hljs.BACKSLASH_ESCAPE, SUBST]\n        }\n      ]\n    },\n    {\n      className: 'built_in',\n      begin: '@__' + hljs.IDENT_RE\n    },\n    {\n      begin: '@' + hljs.IDENT_RE // relevance booster on par with CoffeeScript\n    },\n    {\n      begin: hljs.IDENT_RE + '\\\\\\\\' + hljs.IDENT_RE // inst\\method\n    }\n  ];\n  SUBST.contains = EXPRESSIONS;\n\n  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});\n  var PARAMS_RE = '(\\\\(.*\\\\))?\\\\s*\\\\B[-=]>';\n  var PARAMS = {\n    className: 'params',\n    begin: '\\\\([^\\\\(]', returnBegin: true,\n    /* We need another contained nameless mode to not have every nested\n    pair of parens to be called \"params\" */\n    contains: [{\n      begin: /\\(/, end: /\\)/,\n      keywords: KEYWORDS,\n      contains: ['self'].concat(EXPRESSIONS)\n    }]\n  };\n\n  return {\n    aliases: ['moon'],\n    keywords: KEYWORDS,\n    illegal: /\\/\\*/,\n    contains: EXPRESSIONS.concat([\n      hljs.COMMENT('--', '$'),\n      {\n        className: 'function',  // function: -> =>\n        begin: '^\\\\s*' + JS_IDENT_RE + '\\\\s*=\\\\s*' + PARAMS_RE, end: '[-=]>',\n        returnBegin: true,\n        contains: [TITLE, PARAMS]\n      },\n      {\n        begin: /[\\(,:=]\\s*/, // anonymous function start\n        relevance: 0,\n        contains: [\n          {\n            className: 'function',\n            begin: PARAMS_RE, end: '[-=]>',\n            returnBegin: true,\n            contains: [PARAMS]\n          }\n        ]\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class',\n        end: '$',\n        illegal: /[:=\"\\[\\]]/,\n        contains: [\n          {\n            beginKeywords: 'extends',\n            endsWithParent: true,\n            illegal: /[:=\"\\[\\]]/,\n            contains: [TITLE]\n          },\n          TITLE\n        ]\n      },\n      {\n        className: 'name',    // table\n        begin: JS_IDENT_RE + ':', end: ':',\n        returnBegin: true, returnEnd: true,\n        relevance: 0\n      }\n    ])\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/moonscript.js?")}}]);