(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{2900:function(module,exports){eval("module.exports = function(hljs) {\n  var NUMBERS = {\n    className: 'number',\n    relevance: 0,\n    variants: [\n      { begin: /([\\+\\-]+)?[\\d]+_[\\d_]+/ },\n      { begin: hljs.NUMBER_RE }\n    ]\n  };\n  var COMMENTS = hljs.COMMENT();\n  COMMENTS.variants = [\n    {begin: /;/, end: /$/},\n    {begin: /#/, end: /$/},\n  ];\n  var VARIABLES = {\n    className: 'variable',\n    variants: [\n      { begin: /\\$[\\w\\d\"][\\w\\d_]*/ },\n      { begin: /\\$\\{(.*?)}/ }\n    ]\n  };\n  var LITERALS = {\n    className: 'literal',\n    begin: /\\bon|off|true|false|yes|no\\b/\n  };\n  var STRINGS = {\n    className: \"string\",\n    contains: [hljs.BACKSLASH_ESCAPE],\n    variants: [\n      { begin: \"'''\", end: \"'''\", relevance: 10 },\n      { begin: '\"\"\"', end: '\"\"\"', relevance: 10 },\n      { begin: '\"', end: '\"' },\n      { begin: \"'\", end: \"'\" }\n    ]\n  };\n  var ARRAY = {\n    begin: /\\[/, end: /\\]/,\n    contains: [\n      COMMENTS,\n      LITERALS,\n      VARIABLES,\n      STRINGS,\n      NUMBERS,\n      'self'\n    ],\n    relevance:0\n  };\n\n  return {\n    aliases: ['toml'],\n    case_insensitive: true,\n    illegal: /\\S/,\n    contains: [\n      COMMENTS,\n      {\n        className: 'section',\n        begin: /\\[+/, end: /\\]+/\n      },\n      {\n        begin: /^[a-z0-9\\[\\]_\\.-]+(?=\\s*=\\s*)/,\n        className: 'attr',\n        starts: {\n          end: /$/,\n          contains: [\n            COMMENTS,\n            ARRAY,\n            LITERALS,\n            VARIABLES,\n            STRINGS,\n            NUMBERS\n          ]\n        }\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/ini.js?")}}]);