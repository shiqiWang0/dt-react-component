(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{2932:function(module,exports){eval("module.exports = function(hljs) {\n  return {\n    case_insensitive: true,\n    contains: [\n      {\n        beginKeywords:\n          'build create index delete drop explain infer|10 insert merge prepare select update upsert|10',\n        end: /;/, endsWithParent: true,\n        keywords: {\n          // Taken from http://developer.couchbase.com/documentation/server/current/n1ql/n1ql-language-reference/reservedwords.html\n          keyword:\n            'all alter analyze and any array as asc begin between binary boolean break bucket build by call ' +\n            'case cast cluster collate collection commit connect continue correlate cover create database ' +\n            'dataset datastore declare decrement delete derived desc describe distinct do drop each element ' +\n            'else end every except exclude execute exists explain fetch first flatten for force from ' +\n            'function grant group gsi having if ignore ilike in include increment index infer inline inner ' +\n            'insert intersect into is join key keys keyspace known last left let letting like limit lsm map ' +\n            'mapping matched materialized merge minus namespace nest not number object offset on ' +\n            'option or order outer over parse partition password path pool prepare primary private privilege ' +\n            'procedure public raw realm reduce rename return returning revoke right role rollback satisfies ' +\n            'schema select self semi set show some start statistics string system then to transaction trigger ' +\n            'truncate under union unique unknown unnest unset update upsert use user using validate value ' +\n            'valued values via view when where while with within work xor',\n          // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/literals.html\n          literal:\n            'true false null missing|5',\n          // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/functions.html\n          built_in:\n            'array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length ' +\n            'array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace ' +\n            'array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull ' +\n            'missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis ' +\n            'date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str ' +\n            'duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str ' +\n            'str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode ' +\n            'base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random ' +\n            'round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values ' +\n            'object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position ' +\n            'regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper ' +\n            'isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring'\n        },\n        contains: [\n          {\n            className: 'string',\n            begin: '\\'', end: '\\'',\n            contains: [hljs.BACKSLASH_ESCAPE],\n            relevance: 0\n          },\n          {\n            className: 'string',\n            begin: '\"', end: '\"',\n            contains: [hljs.BACKSLASH_ESCAPE],\n            relevance: 0\n          },\n          {\n            className: 'symbol',\n            begin: '`', end: '`',\n            contains: [hljs.BACKSLASH_ESCAPE],\n            relevance: 2\n          },\n          hljs.C_NUMBER_MODE,\n          hljs.C_BLOCK_COMMENT_MODE\n        ]\n      },\n      hljs.C_BLOCK_COMMENT_MODE\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/n1ql.js?")}}]);