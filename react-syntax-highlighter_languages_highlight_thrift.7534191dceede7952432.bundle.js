(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{2989:function(module,exports){eval("module.exports = function(hljs) {\n  var BUILT_IN_TYPES = 'bool byte i16 i32 i64 double string binary';\n  return {\n    keywords: {\n      keyword:\n        'namespace const typedef struct enum service exception void oneway set list map required optional',\n      built_in:\n        BUILT_IN_TYPES,\n      literal:\n        'true false'\n    },\n    contains: [\n      hljs.QUOTE_STRING_MODE,\n      hljs.NUMBER_MODE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'class',\n        beginKeywords: 'struct enum service exception', end: /\\{/,\n        illegal: /\\n/,\n        contains: [\n          hljs.inherit(hljs.TITLE_MODE, {\n            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title\n          })\n        ]\n      },\n      {\n        begin: '\\\\b(set|list|map)\\\\s*<', end: '>',\n        keywords: BUILT_IN_TYPES,\n        contains: ['self']\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/thrift.js?")}}]);