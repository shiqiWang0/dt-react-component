(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2833:function(module,exports){eval("module.exports = function (hljs) {\n  var KEYWORDS =\n    'false synchronized int abstract float private char boolean static null if const ' +\n    'for true while long throw strictfp finally protected import native final return void ' +\n    'enum else extends implements break transient new catch instanceof byte super volatile case ' +\n    'assert short package default double public try this switch continue throws privileged ' +\n    'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' +\n    'staticinitialization withincode target within execution getWithinTypeName handler ' +\n    'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents '+\n    'warning error soft precedence thisAspectInstance';\n  var SHORTKEYS = 'get set args call';\n  return {\n    keywords : KEYWORDS,\n    illegal : /<\\/|#/,\n    contains : [\n      hljs.COMMENT(\n        '/\\\\*\\\\*',\n        '\\\\*/',\n        {\n          relevance : 0,\n          contains : [\n            {\n              // eat up @'s in emails to prevent them to be recognized as doctags\n              begin: /\\w+@/, relevance: 0\n            },\n            {\n              className : 'doctag',\n              begin : '@[A-Za-z]+'\n            }\n          ]\n        }\n      ),\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      {\n        className : 'class',\n        beginKeywords : 'aspect',\n        end : /[{;=]/,\n        excludeEnd : true,\n        illegal : /[:;\"\\[\\]]/,\n        contains : [\n          {\n            beginKeywords : 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'\n          },\n          hljs.UNDERSCORE_TITLE_MODE,\n          {\n            begin : /\\([^\\)]*/,\n            end : /[)]+/,\n            keywords : KEYWORDS + ' ' + SHORTKEYS,\n            excludeEnd : false\n          }\n        ]\n      },\n      {\n        className : 'class',\n        beginKeywords : 'class interface',\n        end : /[{;=]/,\n        excludeEnd : true,\n        relevance: 0,\n        keywords : 'class interface',\n        illegal : /[:\"\\[\\]]/,\n        contains : [\n          {beginKeywords : 'extends implements'},\n          hljs.UNDERSCORE_TITLE_MODE\n        ]\n      },\n      {\n        // AspectJ Constructs\n        beginKeywords : 'pointcut after before around throwing returning',\n        end : /[)]/,\n        excludeEnd : false,\n        illegal : /[\"\\[\\]]/,\n        contains : [\n          {\n            begin : hljs.UNDERSCORE_IDENT_RE + '\\\\s*\\\\(',\n            returnBegin : true,\n            contains : [hljs.UNDERSCORE_TITLE_MODE]\n          }\n        ]\n      },\n      {\n        begin : /[:]/,\n        returnBegin : true,\n        end : /[{;]/,\n        relevance: 0,\n        excludeEnd : false,\n        keywords : KEYWORDS,\n        illegal : /[\"\\[\\]]/,\n        contains : [\n          {\n            begin : hljs.UNDERSCORE_IDENT_RE + '\\\\s*\\\\(',\n            keywords : KEYWORDS + ' ' + SHORTKEYS,\n            relevance: 0\n          },\n          hljs.QUOTE_STRING_MODE\n        ]\n      },\n      {\n        // this prevents 'new Name(...), or throw ...' from being recognized as a function definition\n        beginKeywords : 'new throw',\n        relevance : 0\n      },\n      {\n        // the function class is a bit different for AspectJ compared to the Java language\n        className : 'function',\n        begin : /\\w+ +\\w+(\\.)?\\w+\\s*\\([^\\)]*\\)\\s*((throws)[\\w\\s,]+)?[\\{;]/,\n        returnBegin : true,\n        end : /[{;=]/,\n        keywords : KEYWORDS,\n        excludeEnd : true,\n        contains : [\n          {\n            begin : hljs.UNDERSCORE_IDENT_RE + '\\\\s*\\\\(',\n            returnBegin : true,\n            relevance: 0,\n            contains : [hljs.UNDERSCORE_TITLE_MODE]\n          },\n          {\n            className : 'params',\n            begin : /\\(/, end : /\\)/,\n            relevance: 0,\n            keywords : KEYWORDS,\n            contains : [\n              hljs.APOS_STRING_MODE,\n              hljs.QUOTE_STRING_MODE,\n              hljs.C_NUMBER_MODE,\n              hljs.C_BLOCK_COMMENT_MODE\n            ]\n          },\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE\n        ]\n      },\n      hljs.C_NUMBER_MODE,\n      {\n        // annotation is also used in this language\n        className : 'meta',\n        begin : '@[A-Za-z]+'\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/aspectj.js?")}}]);