(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{2948:function(module,exports){eval("module.exports = function(hljs){\n\n  var TYPES =\n    [\"string\", \"char\", \"byte\", \"int\", \"long\", \"bool\",  \"decimal\",  \"single\",\n     \"double\", \"DateTime\", \"xml\", \"array\", \"hashtable\", \"void\"];\n\n  // https://msdn.microsoft.com/en-us/library/ms714428(v=vs.85).aspx\n  var VALID_VERBS =\n    'Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|' +\n    'Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|' +\n    'Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|' +\n    'Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|' +\n    'ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|' +\n    'Limit|Merge|New|Out|Publish|Restore|Save|Sync|Unpublish|Update|' +\n    'Approve|Assert|Complete|Confirm|Deny|Disable|Enable|Install|Invoke|Register|' +\n    'Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|' +\n    'Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|' +\n    'Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|' +\n    'Unprotect|Use|ForEach|Sort|Tee|Where';\n\n  var COMPARISON_OPERATORS =\n    '-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|' +\n    '-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|' +\n    '-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|' +\n    '-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|' +\n    '-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|' +\n    '-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|' +\n    '-split|-wildcard|-xor';\n\n  var KEYWORDS = {\n    keyword: 'if else foreach return do while until elseif begin for trap data dynamicparam ' +\n    'end break throw param continue finally in switch exit filter try process catch ' +\n    'hidden static parameter'\n    // TODO: 'validate[A-Z]+' can't work in keywords\n  };\n\n  var TITLE_NAME_RE = /\\w[\\w\\d]*((-)[\\w\\d]+)*/;\n\n  var BACKTICK_ESCAPE = {\n    begin: '`[\\\\s\\\\S]',\n    relevance: 0\n  };\n\n  var VAR = {\n    className: 'variable',\n    variants: [\n      { begin: /\\$\\B/ },\n      { className: 'keyword', begin: /\\$this/ },\n      { begin: /\\$[\\w\\d][\\w\\d_:]*/ }\n    ]\n  };\n\n  var LITERAL = {\n    className: 'literal',\n    begin: /\\$(null|true|false)\\b/\n  };\n\n  var QUOTE_STRING = {\n    className: \"string\",\n    variants: [{ begin: /\"/, end: /\"/ }, { begin: /@\"/, end: /^\"@/ }],\n    contains: [\n      BACKTICK_ESCAPE,\n      VAR,\n      {\n        className: 'variable',\n        begin: /\\$[A-z]/, end: /[^A-z]/\n      }\n    ]\n  };\n\n  var APOS_STRING = {\n    className: 'string',\n    variants: [\n      { begin: /'/, end: /'/ },\n      { begin: /@'/, end: /^'@/ }\n    ]\n  };\n\n  var PS_HELPTAGS = {\n    className: \"doctag\",\n    variants: [\n      /* no paramater help tags */\n      {\n        begin: /\\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/\n      },\n      /* one parameter help tags */\n      { begin: /\\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\\s+\\S+/ }\n    ]\n  };\n\n  var PS_COMMENT = hljs.inherit(\n    hljs.COMMENT(null, null),\n    {\n      variants: [\n        /* single-line comment */\n        { begin: /#/, end: /$/ },\n        /* multi-line comment */\n        { begin: /<#/, end: /#>/ }\n      ],\n      contains: [PS_HELPTAGS]\n    }\n  );\n\n  var CMDLETS = {\n    className: 'built_in',\n    variants: [\n      { begin: '('.concat(VALID_VERBS, ')+(-)[\\\\w\\\\d]+') }\n    ]\n  };\n\n  var PS_CLASS = {\n    className: 'class',\n    beginKeywords: 'class enum', end: /\\s*[{]/, excludeEnd: true,\n    relevance: 0,\n    contains: [hljs.TITLE_MODE]\n  };\n\n  var PS_FUNCTION = {\n    className: 'function',\n    begin: /function\\s+/, end: /\\s*\\{|$/,\n    excludeEnd: true,\n    returnBegin: true,\n    relevance: 0,\n    contains: [\n      { begin: \"function\", relevance: 0, className: \"keyword\" },\n      { className: \"title\",\n        begin: TITLE_NAME_RE, relevance:0 },\n      { begin: /\\(/, end: /\\)/, className: \"params\",\n        relevance: 0,\n        contains: [VAR] }\n      // CMDLETS\n    ]\n  };\n\n  // Using statment, plus type, plus assembly name.\n  var PS_USING = {\n    begin: /using\\s/, end: /$/,\n    returnBegin: true,\n    contains: [\n      QUOTE_STRING,\n      APOS_STRING,\n      { className: 'keyword', begin: /(using|assembly|command|module|namespace|type)/ }\n    ]\n  };\n\n  // Comperison operators & function named parameters.\n  var PS_ARGUMENTS = {\n    variants: [\n      // PS literals are pretty verbose so it's a good idea to accent them a bit.\n      { className: 'operator', begin: '('.concat(COMPARISON_OPERATORS, ')\\\\b') },\n      { className: 'literal', begin: /(-)[\\w\\d]+/, relevance:0 }\n    ]\n  };\n\n  var STATIC_MEMBER = {\n    className: 'selector-tag',\n    begin: /::\\w+\\b/, end: /$/,\n    returnBegin: true,\n    contains: [\n      { className: 'attribute', begin: /\\w+/, endsParent: true }\n    ]\n  };\n\n  var HASH_SIGNS = {\n    className: 'selector-tag',\n    begin: /\\@\\B/,\n    relevance: 0\n  };\n\n  var PS_NEW_OBJECT_TYPE = {\n    className: 'built_in',\n    begin: /New-Object\\s+\\w/, end: /$/,\n    returnBegin: true,\n    contains: [\n      { begin: /New-Object\\s+/, relevance: 0 },\n      { className: 'meta', begin: /([\\w\\.])+/, endsParent: true }\n    ]\n  };\n\n  // It's a very general rule so I'll narrow it a bit with some strict boundaries\n  // to avoid any possible false-positive collisions!\n  var PS_METHODS = {\n    className: 'function',\n    begin: /\\[.*\\]\\s*[\\w]+[ ]??\\(/, end: /$/,\n    returnBegin: true,\n    relevance: 0,\n    contains: [\n      {\n        className: 'keyword', begin: '('.concat(\n        KEYWORDS.keyword.toString().replace(/\\s/g, '|'\n        ), ')\\\\b'),\n        endsParent: true,\n        relevance: 0\n      },\n      hljs.inherit(hljs.TITLE_MODE, { endsParent: true })\n    ]\n  };\n\n  var GENTLEMANS_SET = [\n    // STATIC_MEMBER,\n    PS_METHODS,\n    PS_COMMENT,\n    BACKTICK_ESCAPE,\n    hljs.NUMBER_MODE,\n    QUOTE_STRING,\n    APOS_STRING,\n    // PS_NEW_OBJECT_TYPE,\n    CMDLETS,\n    VAR,\n    LITERAL,\n    HASH_SIGNS\n  ];\n\n  var PS_TYPE = {\n    begin: /\\[/, end: /\\]/,\n    excludeBegin: true,\n    excludeEnd: true,\n    relevance: 0,\n    contains: [].concat(\n      'self',\n      GENTLEMANS_SET,\n      { begin: \"(\" + TYPES.join(\"|\") + \")\", className: \"built_in\", relevance:0 },\n      { className: 'type', begin: /[\\.\\w\\d]+/, relevance: 0 }\n    )\n  };\n\n  PS_METHODS.contains.unshift(PS_TYPE)\n\n  return {\n    aliases: [\"ps\", \"ps1\"],\n    lexemes: /-?[A-z\\.\\-]+/,\n    case_insensitive: true,\n    keywords: KEYWORDS,\n    contains: GENTLEMANS_SET.concat(\n      PS_CLASS,\n      PS_FUNCTION,\n      PS_USING,\n      PS_ARGUMENTS,\n      PS_TYPE\n    )\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/powershell.js?")}}]);