(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{2908:function(module,exports){eval("module.exports = function(hljs) {\n  // Since there are numerous special names in Julia, it is too much trouble\n  // to maintain them by hand. Hence these names (i.e. keywords, literals and\n  // built-ins) are automatically generated from Julia v0.6 itself through\n  // the following scripts for each.\n\n  var KEYWORDS = {\n    // # keyword generator, multi-word keywords handled manually below\n    // foreach(println, [\"in\", \"isa\", \"where\"])\n    // for kw in Base.REPLCompletions.complete_keyword(\"\")\n    //     if !(contains(kw, \" \") || kw == \"struct\")\n    //         println(kw)\n    //     end\n    // end\n    keyword:\n      'in isa where ' +\n      'baremodule begin break catch ccall const continue do else elseif end export false finally for function ' +\n      'global if import importall let local macro module quote return true try using while ' +\n      // legacy, to be deprecated in the next release\n      'type immutable abstract bitstype typealias ',\n\n    // # literal generator\n    // println(\"true\")\n    // println(\"false\")\n    // for name in Base.REPLCompletions.completions(\"\", 0)[1]\n    //     try\n    //         v = eval(Symbol(name))\n    //         if !(v isa Function || v isa Type || v isa TypeVar || v isa Module || v isa Colon)\n    //             println(name)\n    //         end\n    //     end\n    // end\n    literal:\n      'true false ' +\n      'ARGS C_NULL DevNull ENDIAN_BOM ENV I Inf Inf16 Inf32 Inf64 InsertionSort JULIA_HOME LOAD_PATH MergeSort ' +\n      'NaN NaN16 NaN32 NaN64 PROGRAM_FILE QuickSort RoundDown RoundFromZero RoundNearest RoundNearestTiesAway ' +\n      'RoundNearestTiesUp RoundToZero RoundUp STDERR STDIN STDOUT VERSION catalan e|0 eu|0 eulergamma golden im ' +\n      'nothing pi γ π φ ',\n\n    // # built_in generator:\n    // for name in Base.REPLCompletions.completions(\"\", 0)[1]\n    //     try\n    //         v = eval(Symbol(name))\n    //         if v isa Type || v isa TypeVar\n    //             println(name)\n    //         end\n    //     end\n    // end\n    built_in:\n      'ANY AbstractArray AbstractChannel AbstractFloat AbstractMatrix AbstractRNG AbstractSerializer AbstractSet ' +\n      'AbstractSparseArray AbstractSparseMatrix AbstractSparseVector AbstractString AbstractUnitRange AbstractVecOrMat ' +\n      'AbstractVector Any ArgumentError Array AssertionError Associative Base64DecodePipe Base64EncodePipe Bidiagonal '+\n      'BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError BufferStream CachingPool CapturedException ' +\n      'CartesianIndex CartesianRange Cchar Cdouble Cfloat Channel Char Cint Cintmax_t Clong Clonglong ClusterManager ' +\n      'Cmd CodeInfo Colon Complex Complex128 Complex32 Complex64 CompositeException Condition ConjArray ConjMatrix ' +\n      'ConjVector Cptrdiff_t Cshort Csize_t Cssize_t Cstring Cuchar Cuint Cuintmax_t Culong Culonglong Cushort Cwchar_t ' +\n      'Cwstring DataType Date DateFormat DateTime DenseArray DenseMatrix DenseVecOrMat DenseVector Diagonal Dict ' +\n      'DimensionMismatch Dims DirectIndexString Display DivideError DomainError EOFError EachLine Enum Enumerate ' +\n      'ErrorException Exception ExponentialBackOff Expr Factorization FileMonitor Float16 Float32 Float64 Function ' +\n      'Future GlobalRef GotoNode HTML Hermitian IO IOBuffer IOContext IOStream IPAddr IPv4 IPv6 IndexCartesian IndexLinear ' +\n      'IndexStyle InexactError InitError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException ' +\n      'InvalidStateException Irrational KeyError LabelNode LinSpace LineNumberNode LoadError LowerTriangular MIME Matrix ' +\n      'MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode NullException Nullable Number ObjectIdDict ' +\n      'OrdinalRange OutOfMemoryError OverflowError Pair ParseError PartialQuickSort PermutedDimsArray Pipe ' +\n      'PollingFileWatcher ProcessExitedException Ptr QuoteNode RandomDevice Range RangeIndex Rational RawFD ' +\n      'ReadOnlyMemoryError Real ReentrantLock Ref Regex RegexMatch RemoteChannel RemoteException RevString RoundingMode ' +\n      'RowVector SSAValue SegmentationFault SerializationState Set SharedArray SharedMatrix SharedVector Signed ' +\n      'SimpleVector Slot SlotNumber SparseMatrixCSC SparseVector StackFrame StackOverflowError StackTrace StepRange ' +\n      'StepRangeLen StridedArray StridedMatrix StridedVecOrMat StridedVector String SubArray SubString SymTridiagonal ' +\n      'Symbol Symmetric SystemError TCPSocket Task Text TextDisplay Timer Tridiagonal Tuple Type TypeError TypeMapEntry ' +\n      'TypeMapLevel TypeName TypeVar TypedSlot UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UndefRefError UndefVarError ' +\n      'UnicodeError UniformScaling Union UnionAll UnitRange Unsigned UpperTriangular Val Vararg VecElement VecOrMat Vector ' +\n      'VersionNumber Void WeakKeyDict WeakRef WorkerConfig WorkerPool '\n  };\n\n  // ref: http://julia.readthedocs.org/en/latest/manual/variables/#allowed-variable-names\n  var VARIABLE_NAME_RE = '[A-Za-z_\\\\u00A1-\\\\uFFFF][A-Za-z_0-9\\\\u00A1-\\\\uFFFF]*';\n\n  // placeholder for recursive self-reference\n  var DEFAULT = {\n    lexemes: VARIABLE_NAME_RE, keywords: KEYWORDS, illegal: /<\\//\n  };\n\n  // ref: http://julia.readthedocs.org/en/latest/manual/integers-and-floating-point-numbers/\n  var NUMBER = {\n    className: 'number',\n    // supported numeric literals:\n    //  * binary literal (e.g. 0x10)\n    //  * octal literal (e.g. 0o76543210)\n    //  * hexadecimal literal (e.g. 0xfedcba876543210)\n    //  * hexadecimal floating point literal (e.g. 0x1p0, 0x1.2p2)\n    //  * decimal literal (e.g. 9876543210, 100_000_000)\n    //  * floating pointe literal (e.g. 1.2, 1.2f, .2, 1., 1.2e10, 1.2e-10)\n    begin: /(\\b0x[\\d_]*(\\.[\\d_]*)?|0x\\.\\d[\\d_]*)p[-+]?\\d+|\\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\\b\\d[\\d_]*(\\.[\\d_]*)?|\\.\\d[\\d_]*)([eEfF][-+]?\\d+)?/,\n    relevance: 0\n  };\n\n  var CHAR = {\n    className: 'string',\n    begin: /'(.|\\\\[xXuU][a-zA-Z0-9]+)'/\n  };\n\n  var INTERPOLATION = {\n    className: 'subst',\n    begin: /\\$\\(/, end: /\\)/,\n    keywords: KEYWORDS\n  };\n\n  var INTERPOLATED_VARIABLE = {\n    className: 'variable',\n    begin: '\\\\$' + VARIABLE_NAME_RE\n  };\n\n  // TODO: neatly escape normal code in string literal\n  var STRING = {\n    className: 'string',\n    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],\n    variants: [\n      { begin: /\\w*\"\"\"/, end: /\"\"\"\\w*/, relevance: 10 },\n      { begin: /\\w*\"/, end: /\"\\w*/ }\n    ]\n  };\n\n  var COMMAND = {\n    className: 'string',\n    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],\n    begin: '`', end: '`'\n  };\n\n  var MACROCALL = {\n    className: 'meta',\n    begin: '@' + VARIABLE_NAME_RE\n  };\n\n  var COMMENT = {\n    className: 'comment',\n    variants: [\n      { begin: '#=', end: '=#', relevance: 10 },\n      { begin: '#', end: '$' }\n    ]\n  };\n\n  DEFAULT.contains = [\n    NUMBER,\n    CHAR,\n    STRING,\n    COMMAND,\n    MACROCALL,\n    COMMENT,\n    hljs.HASH_COMMENT_MODE,\n    {\n      className: 'keyword',\n      begin:\n        '\\\\b(((abstract|primitive)\\\\s+)type|(mutable\\\\s+)?struct)\\\\b'\n    },\n    {begin: /<:/}  // relevance booster\n  ];\n  INTERPOLATION.contains = DEFAULT.contains;\n\n  return DEFAULT;\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/julia.js?")}}]);