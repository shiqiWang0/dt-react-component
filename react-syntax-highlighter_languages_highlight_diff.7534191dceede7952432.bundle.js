(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{2862:function(module,exports){eval("module.exports = function(hljs) {\n  return {\n    aliases: ['patch'],\n    contains: [\n      {\n        className: 'meta',\n        relevance: 10,\n        variants: [\n          {begin: /^@@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +@@$/},\n          {begin: /^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$/},\n          {begin: /^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$/}\n        ]\n      },\n      {\n        className: 'comment',\n        variants: [\n          {begin: /Index: /, end: /$/},\n          {begin: /={3,}/, end: /$/},\n          {begin: /^\\-{3}/, end: /$/},\n          {begin: /^\\*{3} /, end: /$/},\n          {begin: /^\\+{3}/, end: /$/},\n          {begin: /^\\*{15}$/ }\n        ]\n      },\n      {\n        className: 'addition',\n        begin: '^\\\\+', end: '$'\n      },\n      {\n        className: 'deletion',\n        begin: '^\\\\-', end: '$'\n      },\n      {\n        className: 'addition',\n        begin: '^\\\\!', end: '$'\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/diff.js?")}}]);