(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{2921:function(module,exports){eval("module.exports = function(hljs) {\n  return {\n    aliases: ['md', 'mkdown', 'mkd'],\n    contains: [\n      // highlight headers\n      {\n        className: 'section',\n        variants: [\n          { begin: '^#{1,6}', end: '$' },\n          { begin: '^.+?\\\\n[=-]{2,}$' }\n        ]\n      },\n      // inline html\n      {\n        begin: '<', end: '>',\n        subLanguage: 'xml',\n        relevance: 0\n      },\n      // lists (indicators only)\n      {\n        className: 'bullet',\n        begin: '^\\\\s*([*+-]|(\\\\d+\\\\.))\\\\s+'\n      },\n      // strong segments\n      {\n        className: 'strong',\n        begin: '[*_]{2}.+?[*_]{2}'\n      },\n      // emphasis segments\n      {\n        className: 'emphasis',\n        variants: [\n          { begin: '\\\\*.+?\\\\*' },\n          { begin: '_.+?_'\n          , relevance: 0\n          }\n        ]\n      },\n      // blockquotes\n      {\n        className: 'quote',\n        begin: '^>\\\\s+', end: '$'\n      },\n      // code snippets\n      {\n        className: 'code',\n        variants: [\n          {\n            begin: '^```\\\\w*\\\\s*$', end: '^```[ ]*$'\n          },\n          {\n            begin: '`.+?`'\n          },\n          {\n            begin: '^( {4}|\\\\t)', end: '$',\n            relevance: 0\n          }\n        ]\n      },\n      // horizontal rules\n      {\n        begin: '^[-\\\\*]{3,}', end: '$'\n      },\n      // using links - title and link\n      {\n        begin: '\\\\[.+?\\\\][\\\\(\\\\[].*?[\\\\)\\\\]]',\n        returnBegin: true,\n        contains: [\n          {\n            className: 'string',\n            begin: '\\\\[', end: '\\\\]',\n            excludeBegin: true,\n            returnEnd: true,\n            relevance: 0\n          },\n          {\n            className: 'link',\n            begin: '\\\\]\\\\(', end: '\\\\)',\n            excludeBegin: true, excludeEnd: true\n          },\n          {\n            className: 'symbol',\n            begin: '\\\\]\\\\[', end: '\\\\]',\n            excludeBegin: true, excludeEnd: true\n          }\n        ],\n        relevance: 10\n      },\n      {\n        begin: /^\\[[^\\n]+\\]:/,\n        returnBegin: true,\n        contains: [\n          {\n            className: 'symbol',\n            begin: /\\[/, end: /\\]/,\n            excludeBegin: true, excludeEnd: true\n          },\n          {\n            className: 'link',\n            begin: /:\\s*/, end: /$/,\n            excludeBegin: true\n          }\n        ]\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/markdown.js?")}}]);