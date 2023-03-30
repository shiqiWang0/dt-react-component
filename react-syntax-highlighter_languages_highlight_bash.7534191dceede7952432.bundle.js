(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{2839:function(module,exports){eval("module.exports = function(hljs) {\n  var VAR = {\n    className: 'variable',\n    variants: [\n      {begin: /\\$[\\w\\d#@][\\w\\d_]*/},\n      {begin: /\\$\\{(.*?)}/}\n    ]\n  };\n  var QUOTE_STRING = {\n    className: 'string',\n    begin: /\"/, end: /\"/,\n    contains: [\n      hljs.BACKSLASH_ESCAPE,\n      VAR,\n      {\n        className: 'variable',\n        begin: /\\$\\(/, end: /\\)/,\n        contains: [hljs.BACKSLASH_ESCAPE]\n      }\n    ]\n  };\n  var ESCAPED_QUOTE = {\n    className: '',\n    begin: /\\\\\"/\n\n  };\n  var APOS_STRING = {\n    className: 'string',\n    begin: /'/, end: /'/\n  };\n\n  return {\n    aliases: ['sh', 'zsh'],\n    lexemes: /\\b-?[a-z\\._]+\\b/,\n    keywords: {\n      keyword:\n        'if then else elif fi for while in do done case esac function',\n      literal:\n        'true false',\n      built_in:\n        // Shell built-ins\n        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html\n        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +\n        'trap umask unset ' +\n        // Bash built-ins\n        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +\n        'read readarray source type typeset ulimit unalias ' +\n        // Shell modifiers\n        'set shopt ' +\n        // Zsh built-ins\n        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +\n        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +\n        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +\n        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +\n        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +\n        'zpty zregexparse zsocket zstyle ztcp',\n      _:\n        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster\n    },\n    contains: [\n      {\n        className: 'meta',\n        begin: /^#![^\\n]+sh\\s*$/,\n        relevance: 10\n      },\n      {\n        className: 'function',\n        begin: /\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{/,\n        returnBegin: true,\n        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\\w[\\w\\d_]*/})],\n        relevance: 0\n      },\n      hljs.HASH_COMMENT_MODE,\n      QUOTE_STRING,\n      ESCAPED_QUOTE,\n      APOS_STRING,\n      VAR\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/bash.js?")}}]);