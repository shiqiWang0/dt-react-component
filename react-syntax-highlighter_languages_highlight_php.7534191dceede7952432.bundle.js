(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{2945:function(module,exports){eval("module.exports = function(hljs) {\n  var VARIABLE = {\n    begin: '\\\\$+[a-zA-Z_\\x7f-\\xff][a-zA-Z0-9_\\x7f-\\xff]*'\n  };\n  var PREPROCESSOR = {\n    className: 'meta', begin: /<\\?(php)?|\\?>/\n  };\n  var STRING = {\n    className: 'string',\n    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],\n    variants: [\n      {\n        begin: 'b\"', end: '\"'\n      },\n      {\n        begin: 'b\\'', end: '\\''\n      },\n      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})\n    ]\n  };\n  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};\n  return {\n    aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],\n    case_insensitive: true,\n    keywords:\n      'and include_once list abstract global private echo interface as static endswitch ' +\n      'array null if endwhile or const for endforeach self var while isset public ' +\n      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +\n      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +\n      'catch __METHOD__ case exception default die require __FUNCTION__ ' +\n      'enddeclare final try switch continue endfor endif declare unset true false ' +\n      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +\n      'yield finally',\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      hljs.COMMENT('//', '$', {contains: [PREPROCESSOR]}),\n      hljs.COMMENT(\n        '/\\\\*',\n        '\\\\*/',\n        {\n          contains: [\n            {\n              className: 'doctag',\n              begin: '@[A-Za-z]+'\n            }\n          ]\n        }\n      ),\n      hljs.COMMENT(\n        '__halt_compiler.+?;',\n        false,\n        {\n          endsWithParent: true,\n          keywords: '__halt_compiler',\n          lexemes: hljs.UNDERSCORE_IDENT_RE\n        }\n      ),\n      {\n        className: 'string',\n        begin: /<<<['\"]?\\w+['\"]?$/, end: /^\\w+;?$/,\n        contains: [\n          hljs.BACKSLASH_ESCAPE,\n          {\n            className: 'subst',\n            variants: [\n              {begin: /\\$\\w+/},\n              {begin: /\\{\\$/, end: /\\}/}\n            ]\n          }\n        ]\n      },\n      PREPROCESSOR,\n      {\n        className: 'keyword', begin: /\\$this\\b/\n      },\n      VARIABLE,\n      {\n        // swallow composed identifiers to avoid parsing them as keywords\n        begin: /(::|->)+[a-zA-Z_\\x7f-\\xff][a-zA-Z0-9_\\x7f-\\xff]*/\n      },\n      {\n        className: 'function',\n        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,\n        illegal: '\\\\$|\\\\[|%',\n        contains: [\n          hljs.UNDERSCORE_TITLE_MODE,\n          {\n            className: 'params',\n            begin: '\\\\(', end: '\\\\)',\n            contains: [\n              'self',\n              VARIABLE,\n              hljs.C_BLOCK_COMMENT_MODE,\n              STRING,\n              NUMBER\n            ]\n          }\n        ]\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class interface', end: '{', excludeEnd: true,\n        illegal: /[:\\(\\$\"]/,\n        contains: [\n          {beginKeywords: 'extends implements'},\n          hljs.UNDERSCORE_TITLE_MODE\n        ]\n      },\n      {\n        beginKeywords: 'namespace', end: ';',\n        illegal: /[\\.']/,\n        contains: [hljs.UNDERSCORE_TITLE_MODE]\n      },\n      {\n        beginKeywords: 'use', end: ';',\n        contains: [hljs.UNDERSCORE_TITLE_MODE]\n      },\n      {\n        begin: '=>' // No markup, just a relevance booster\n      },\n      STRING,\n      NUMBER\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/php.js?")}}]);