(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{2864:function(module,exports){eval("module.exports = function(hljs) {\n  return {\n    aliases: ['bind', 'zone'],\n    keywords: {\n      keyword:\n        'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX ' +\n        'LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'\n    },\n    contains: [\n      hljs.COMMENT(';', '$', {relevance: 0}),\n      {\n        className: 'meta',\n        begin: /^\\$(TTL|GENERATE|INCLUDE|ORIGIN)\\b/\n      },\n      // IPv6\n      {\n        className: 'number',\n        begin: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)(\\\\.(25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]?\\\\d)){3}))|:)))\\\\b'\n      },\n      // IPv4\n      {\n        className: 'number',\n        begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\b'\n      },\n      hljs.inherit(hljs.NUMBER_MODE, {begin: /\\b\\d+[dhwm]?/})\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/dns.js?")}}]);