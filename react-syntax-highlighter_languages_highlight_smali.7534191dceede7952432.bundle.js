(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{2974:function(module,exports){eval("module.exports = function(hljs) {\n  var smali_instr_low_prio = ['add', 'and', 'cmp', 'cmpg', 'cmpl', 'const', 'div', 'double', 'float', 'goto', 'if', 'int', 'long', 'move', 'mul', 'neg', 'new', 'nop', 'not', 'or', 'rem', 'return', 'shl', 'shr', 'sput', 'sub', 'throw', 'ushr', 'xor'];\n  var smali_instr_high_prio = ['aget', 'aput', 'array', 'check', 'execute', 'fill', 'filled', 'goto/16', 'goto/32', 'iget', 'instance', 'invoke', 'iput', 'monitor', 'packed', 'sget', 'sparse'];\n  var smali_keywords = ['transient', 'constructor', 'abstract', 'final', 'synthetic', 'public', 'private', 'protected', 'static', 'bridge', 'system'];\n  return {\n    aliases: ['smali'],\n    contains: [\n      {\n        className: 'string',\n        begin: '\"', end: '\"',\n        relevance: 0\n      },\n      hljs.COMMENT(\n        '#',\n        '$',\n        {\n          relevance: 0\n        }\n      ),\n      {\n        className: 'keyword',\n        variants: [\n          {begin: '\\\\s*\\\\.end\\\\s[a-zA-Z0-9]*'},\n          {begin: '^[ ]*\\\\.[a-zA-Z]*', relevance: 0},\n          {begin: '\\\\s:[a-zA-Z_0-9]*', relevance: 0},\n          {begin: '\\\\s(' + smali_keywords.join('|') + ')'}\n        ]\n      },\n      {\n        className: 'built_in',\n        variants : [\n          {\n            begin: '\\\\s('+smali_instr_low_prio.join('|')+')\\\\s'\n          },\n          {\n            begin: '\\\\s('+smali_instr_low_prio.join('|')+')((\\\\-|/)[a-zA-Z0-9]+)+\\\\s',\n            relevance: 10\n          },\n          {\n            begin: '\\\\s('+smali_instr_high_prio.join('|')+')((\\\\-|/)[a-zA-Z0-9]+)*\\\\s',\n            relevance: 10\n          },\n        ]\n      },\n      {\n        className: 'class',\n        begin: 'L[^\\(;:\\n]*;',\n        relevance: 0\n      },\n      {\n        begin: '[vp][0-9]+',\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/smali.js?")}}]);