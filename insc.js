import * as env from 'env';

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 1048576, "iEf6uY3eTod8dljET+WmgdRhRaJYpK75Nxr7K3Q1ZGUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDAwMDAwMDAwMDAwMDAwMEBAQEBAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////wABAgMEBQYHCP////////8JCgsMDQ4PEP8REhMUFf8WFxgZGhscHR4fIP///////yEiIyQlJicoKSor/ywtLi8wMTIzNDU2Nzg5//////8xMjM0NTY3ODlBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6bm8gaW5mb1dyb25nIGFkZHJlc3MgbGVuVW5hYmxlIHRvIGRlY29kZSBiczU4IGFkZHJlc3NCdWlsZCBvbiBWUkFSbWFrZSBpdCB0byB0aGUgbW9vbmh0dHBzOi8veC5jb20vaW5zY2lyYmVodHRwczovL2lwZnMuaW8vaWNvbmh0dHBzOi8vaXBmcy5pby9mcmFtZXRyYW5zZmVyT3JkZXIgZmlsbGVkZmVlMUYyMmlIcGl6V2MyQzh2c0Z0V3h5ODVuZTd1Y0haenBHczl1WDNGU0hUems0RnU=");
  base64DecodeToExistingUint8Array(bufferView, 1049272, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 1049440, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==");
}
function wasm2js_trap() { throw new Error('abort'); }

function asmFunc(imports) {
 var env = imports.env;
 var memory = env.memory;
 var buffer = memory.buffer;
 memory.grow = __wasm_memory_grow;
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var gr_reply = env.gr_reply;
 var alloc = env.alloc;
 var free = env.free;
 var gr_block_height = env.gr_block_height;
 var gr_block_timestamp = env.gr_block_timestamp;
 var gr_program_id = env.gr_program_id;
 var gr_message_id = env.gr_message_id;
 var gr_read = env.gr_read;
 var gr_size = env.gr_size;
 var gr_send = env.gr_send;
 var gr_source = env.gr_source;
 var gr_value = env.gr_value;
 var gr_panic = env.gr_panic;
 var __stack_pointer = 1048576;
 var global$1 = 1050160;
 var global$2 = 1050149;
 function c_with_alloca($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = __stack_pointer;
  $0 = $3 - (($0 + 15 | 0) & -16 | 0) | 0;
  __stack_pointer = $0;
  FUNCTION_TABLE[$1 | 0]($0, $2);
  __stack_pointer = $3;
 }
 
 function _ZN17compiler_builtins3mem6memcpy17h13150afca4277325E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $5 = 0, $6 = 0, $4 = 0, $9 = 0, $8 = 0, $7 = 0, $10 = 0, $66 = 0;
  label$1 : {
   label$2 : {
    if ($2 >>> 0 >= 16 >>> 0) {
     break label$2
    }
    $3 = $0;
    break label$1;
   }
   $4 = (0 - $0 | 0) & 3 | 0;
   $5 = $0 + $4 | 0;
   label$3 : {
    if (!$4) {
     break label$3
    }
    $3 = $0;
    $6 = $1;
    label$4 : while (1) {
     HEAP8[$3 >> 0] = HEAPU8[$6 >> 0] | 0;
     $6 = $6 + 1 | 0;
     $3 = $3 + 1 | 0;
     if ($3 >>> 0 < $5 >>> 0) {
      continue label$4
     }
     break label$4;
    };
   }
   $7 = $2 - $4 | 0;
   $8 = $7 & -4 | 0;
   $3 = $5 + $8 | 0;
   label$5 : {
    label$6 : {
     $9 = $1 + $4 | 0;
     if (!($9 & 3 | 0)) {
      break label$6
     }
     if (($8 | 0) < (1 | 0)) {
      break label$5
     }
     $6 = $9 << 3 | 0;
     $2 = $6 & 24 | 0;
     $10 = $9 & -4 | 0;
     $1 = $10 + 4 | 0;
     $4 = (0 - $6 | 0) & 24 | 0;
     $6 = HEAP32[$10 >> 2] | 0;
     label$7 : while (1) {
      $66 = $6 >>> $2 | 0;
      $6 = HEAP32[$1 >> 2] | 0;
      HEAP32[$5 >> 2] = $66 | ($6 << $4 | 0) | 0;
      $1 = $1 + 4 | 0;
      $5 = $5 + 4 | 0;
      if ($5 >>> 0 < $3 >>> 0) {
       continue label$7
      }
      break label$5;
     };
    }
    if (($8 | 0) < (1 | 0)) {
     break label$5
    }
    $1 = $9;
    label$8 : while (1) {
     HEAP32[$5 >> 2] = HEAP32[$1 >> 2] | 0;
     $1 = $1 + 4 | 0;
     $5 = $5 + 4 | 0;
     if ($5 >>> 0 < $3 >>> 0) {
      continue label$8
     }
     break label$8;
    };
   }
   $2 = $7 & 3 | 0;
   $1 = $9 + $8 | 0;
  }
  label$9 : {
   if (!$2) {
    break label$9
   }
   $5 = $3 + $2 | 0;
   label$10 : while (1) {
    HEAP8[$3 >> 0] = HEAPU8[$1 >> 0] | 0;
    $1 = $1 + 1 | 0;
    $3 = $3 + 1 | 0;
    if ($3 >>> 0 < $5 >>> 0) {
     continue label$10
    }
    break label$10;
   };
  }
  return $0 | 0;
 }
 
 function _ZN17compiler_builtins3mem7memmove17hb817b361e4354941E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $5 = 0, $8 = 0, $6 = 0, $3 = 0, $7 = 0, $9 = 0, $10 = 0, $81 = 0, $164 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (($0 - $1 | 0) >>> 0 >= $2 >>> 0) {
       break label$4
      }
      $3 = $1 + $2 | 0;
      $4 = $0 + $2 | 0;
      label$5 : {
       if ($2 >>> 0 >= 16 >>> 0) {
        break label$5
       }
       $5 = $0;
       break label$2;
      }
      $5 = $4 & -4 | 0;
      $6 = $4 & 3 | 0;
      $7 = 0 - $6 | 0;
      label$6 : {
       if (!$6) {
        break label$6
       }
       $8 = ($1 + $2 | 0) + -1 | 0;
       label$7 : while (1) {
        $4 = $4 + -1 | 0;
        HEAP8[$4 >> 0] = HEAPU8[$8 >> 0] | 0;
        $8 = $8 + -1 | 0;
        if ($5 >>> 0 < $4 >>> 0) {
         continue label$7
        }
        break label$7;
       };
      }
      $9 = $2 - $6 | 0;
      $6 = $9 & -4 | 0;
      $4 = $5 - $6 | 0;
      label$8 : {
       $7 = $3 + $7 | 0;
       if (!($7 & 3 | 0)) {
        break label$8
       }
       if (($6 | 0) < (1 | 0)) {
        break label$3
       }
       $8 = $7 << 3 | 0;
       $2 = $8 & 24 | 0;
       $10 = $7 & -4 | 0;
       $1 = $10 + -4 | 0;
       $3 = (0 - $8 | 0) & 24 | 0;
       $8 = HEAP32[$10 >> 2] | 0;
       label$9 : while (1) {
        $5 = $5 + -4 | 0;
        $81 = $8 << $3 | 0;
        $8 = HEAP32[$1 >> 2] | 0;
        HEAP32[$5 >> 2] = $81 | ($8 >>> $2 | 0) | 0;
        $1 = $1 + -4 | 0;
        if ($4 >>> 0 < $5 >>> 0) {
         continue label$9
        }
        break label$3;
       };
      }
      if (($6 | 0) < (1 | 0)) {
       break label$3
      }
      $1 = ($9 + $1 | 0) + -4 | 0;
      label$10 : while (1) {
       $5 = $5 + -4 | 0;
       HEAP32[$5 >> 2] = HEAP32[$1 >> 2] | 0;
       $1 = $1 + -4 | 0;
       if ($4 >>> 0 < $5 >>> 0) {
        continue label$10
       }
       break label$3;
      };
     }
     label$11 : {
      label$12 : {
       if ($2 >>> 0 >= 16 >>> 0) {
        break label$12
       }
       $4 = $0;
       break label$11;
      }
      $3 = (0 - $0 | 0) & 3 | 0;
      $5 = $0 + $3 | 0;
      label$13 : {
       if (!$3) {
        break label$13
       }
       $4 = $0;
       $8 = $1;
       label$14 : while (1) {
        HEAP8[$4 >> 0] = HEAPU8[$8 >> 0] | 0;
        $8 = $8 + 1 | 0;
        $4 = $4 + 1 | 0;
        if ($4 >>> 0 < $5 >>> 0) {
         continue label$14
        }
        break label$14;
       };
      }
      $9 = $2 - $3 | 0;
      $6 = $9 & -4 | 0;
      $4 = $5 + $6 | 0;
      label$15 : {
       label$16 : {
        $7 = $1 + $3 | 0;
        if (!($7 & 3 | 0)) {
         break label$16
        }
        if (($6 | 0) < (1 | 0)) {
         break label$15
        }
        $8 = $7 << 3 | 0;
        $2 = $8 & 24 | 0;
        $10 = $7 & -4 | 0;
        $1 = $10 + 4 | 0;
        $3 = (0 - $8 | 0) & 24 | 0;
        $8 = HEAP32[$10 >> 2] | 0;
        label$17 : while (1) {
         $164 = $8 >>> $2 | 0;
         $8 = HEAP32[$1 >> 2] | 0;
         HEAP32[$5 >> 2] = $164 | ($8 << $3 | 0) | 0;
         $1 = $1 + 4 | 0;
         $5 = $5 + 4 | 0;
         if ($5 >>> 0 < $4 >>> 0) {
          continue label$17
         }
         break label$15;
        };
       }
       if (($6 | 0) < (1 | 0)) {
        break label$15
       }
       $1 = $7;
       label$18 : while (1) {
        HEAP32[$5 >> 2] = HEAP32[$1 >> 2] | 0;
        $1 = $1 + 4 | 0;
        $5 = $5 + 4 | 0;
        if ($5 >>> 0 < $4 >>> 0) {
         continue label$18
        }
        break label$18;
       };
      }
      $2 = $9 & 3 | 0;
      $1 = $7 + $6 | 0;
     }
     if (!$2) {
      break label$1
     }
     $5 = $4 + $2 | 0;
     label$19 : while (1) {
      HEAP8[$4 >> 0] = HEAPU8[$1 >> 0] | 0;
      $1 = $1 + 1 | 0;
      $4 = $4 + 1 | 0;
      if ($4 >>> 0 < $5 >>> 0) {
       continue label$19
      }
      break label$1;
     };
    }
    $1 = $9 & 3 | 0;
    if (!$1) {
     break label$1
    }
    $3 = $7 + (0 - $6 | 0) | 0;
    $5 = $4 - $1 | 0;
   }
   $1 = $3 + -1 | 0;
   label$20 : while (1) {
    $4 = $4 + -1 | 0;
    HEAP8[$4 >> 0] = HEAPU8[$1 >> 0] | 0;
    $1 = $1 + -1 | 0;
    if ($5 >>> 0 < $4 >>> 0) {
     continue label$20
    }
    break label$20;
   };
  }
  return $0 | 0;
 }
 
 function _ZN17compiler_builtins3mem6memset17h004616407414b50dE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $5 = 0, $4 = 0;
  label$1 : {
   label$2 : {
    if ($2 >>> 0 >= 16 >>> 0) {
     break label$2
    }
    $3 = $0;
    break label$1;
   }
   $4 = (0 - $0 | 0) & 3 | 0;
   $5 = $0 + $4 | 0;
   label$3 : {
    if (!$4) {
     break label$3
    }
    $3 = $0;
    label$4 : while (1) {
     HEAP8[$3 >> 0] = $1;
     $3 = $3 + 1 | 0;
     if ($3 >>> 0 < $5 >>> 0) {
      continue label$4
     }
     break label$4;
    };
   }
   $4 = $2 - $4 | 0;
   $2 = $4 & -4 | 0;
   $3 = $5 + $2 | 0;
   label$5 : {
    if (($2 | 0) < (1 | 0)) {
     break label$5
    }
    $2 = Math_imul($1 & 255 | 0, 16843009);
    label$6 : while (1) {
     HEAP32[$5 >> 2] = $2;
     $5 = $5 + 4 | 0;
     if ($5 >>> 0 < $3 >>> 0) {
      continue label$6
     }
     break label$6;
    };
   }
   $2 = $4 & 3 | 0;
  }
  label$7 : {
   if (!$2) {
    break label$7
   }
   $5 = $3 + $2 | 0;
   label$8 : while (1) {
    HEAP8[$3 >> 0] = $1;
    $3 = $3 + 1 | 0;
    if ($3 >>> 0 < $5 >>> 0) {
     continue label$8
    }
    break label$8;
   };
  }
  return $0 | 0;
 }
 
 function _ZN17compiler_builtins3mem6memcmp17hb75d2f6e8180f959E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0;
  $3 = 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   label$2 : {
    label$3 : while (1) {
     $4 = HEAPU8[$0 >> 0] | 0;
     $5 = HEAPU8[$1 >> 0] | 0;
     if (($4 | 0) != ($5 | 0)) {
      break label$2
     }
     $0 = $0 + 1 | 0;
     $1 = $1 + 1 | 0;
     $2 = $2 + -1 | 0;
     if (!$2) {
      break label$1
     }
     continue label$3;
    };
   }
   $3 = $4 - $5 | 0;
  }
  return $3 | 0;
 }
 
 function memcmp($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  return _ZN17compiler_builtins3mem6memcmp17hb75d2f6e8180f959E($0 | 0, $1 | 0, $2 | 0) | 0 | 0;
 }
 
 function memset($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  return _ZN17compiler_builtins3mem6memset17h004616407414b50dE($0 | 0, $1 | 0, $2 | 0) | 0 | 0;
 }
 
 function memcpy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  return _ZN17compiler_builtins3mem6memcpy17h13150afca4277325E($0 | 0, $1 | 0, $2 | 0) | 0 | 0;
 }
 
 function memmove($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  return _ZN17compiler_builtins3mem7memmove17hb817b361e4354941E($0 | 0, $1 | 0, $2 | 0) | 0 | 0;
 }
 
 function metahash() {
  var $0 = 0;
  $0 = __stack_pointer - 48 | 0;
  __stack_pointer = $0;
  memset($0 + 12 | 0 | 0, 0 | 0, 36 | 0) | 0;
  gr_reply(1048576 | 0, 32 | 0, -1 | 0, $0 + 12 | 0 | 0);
  __stack_pointer = $0 + 48 | 0;
 }
 
 function _ZN5alloc7raw_vec17capacity_overflow17h7412131034ec2d8eE() {
  _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
  wasm2js_trap();
 }
 
 function _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E() {
  rust_begin_unwind();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree4node10splitpoint17h70a17e5a7894fc59E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0;
  $2 = 0;
  $3 = 4;
  label$1 : {
   if ($1 >>> 0 < 5 >>> 0) {
    break label$1
   }
   $3 = $1;
   label$2 : {
    switch ($1 + -5 | 0 | 0) {
    default:
     $1 = $1 + -7 | 0;
     $2 = 1;
     $3 = 6;
     break label$1;
    case 0:
     break label$1;
    case 1:
     break label$2;
    };
   }
   $1 = 0;
   $2 = 1;
   $3 = 5;
  }
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = $3;
  HEAP32[($0 + 8 | 0) >> 2] = $1;
 }
 
 function _ZN60_$LT$alloc__string__String$u20$as$u20$core__clone__Clone$GT$5clone17h1765959d2aca5607E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ($2) {
       break label$4
      }
      $3 = 1;
      break label$3;
     }
     if (($2 | 0) <= (-1 | 0)) {
      break label$2
     }
     HEAPU8[(0 + 1050148 | 0) >> 0] | 0;
     $3 = _ZN8dlmalloc8dlmalloc8Dlmalloc15malloc_internal17h5c680ad526f968a5E($2 | 0, 1 | 0) | 0;
     if (!$3) {
      break label$1
     }
    }
    $1 = memcpy($3 | 0, $1 | 0, $2 | 0) | 0;
    HEAP32[($0 + 8 | 0) >> 2] = $2;
    HEAP32[($0 + 4 | 0) >> 2] = $2;
    HEAP32[$0 >> 2] = $1;
    return;
   }
   _ZN5alloc7raw_vec17capacity_overflow17h7412131034ec2d8eE();
   wasm2js_trap();
  }
  _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
  wasm2js_trap();
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc15malloc_internal17h5c680ad526f968a5E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $8 = 0, $7 = 0, $6 = 0, $9 = 0, $5 = 0, $89 = 0;
  label$1 : {
   if ($0 >>> 0 > 64 >>> 0) {
    break label$1
   }
   if (!$1) {
    break label$1
   }
   if (HEAP32[(0 + 1050036 | 0) >> 2] | 0) {
    break label$1
   }
   $2 = 0;
   $3 = HEAPU8[(0 + 1049616 | 0) >> 0] | 0;
   $1 = 0;
   label$2 : {
    label$3 : while (1) {
     label$4 : {
      $4 = 1 << ($1 & 255 | 0) | 0;
      if (($4 & $3 | 0) & 255 | 0) {
       break label$4
      }
      if (((4403336 >>> $2 | 0) & 120 | 0) >>> 0 >= $0 >>> 0) {
       break label$2
      }
     }
     $2 = $2 + 4 | 0;
     $1 = $1 + 1 | 0;
     if (($1 | 0) == (5 | 0)) {
      break label$1
     }
     continue label$3;
    };
   }
   if ($1 >>> 0 > 4 >>> 0) {
    break label$1
   }
   HEAP8[(0 + 1049616 | 0) >> 0] = $4 | $3 | 0;
   return ((7606400 >>> $2 | 0) & 120 | 0) + 1049440 | 0 | 0;
  }
  label$5 : {
   label$6 : {
    label$7 : {
     label$8 : {
      label$9 : {
       label$10 : {
        label$11 : {
         label$12 : {
          label$13 : {
           $0 = $0 >>> 0 < 13 >>> 0 ? 16 : ($0 + 11 | 0) & -8 | 0;
           if ($0 >>> 0 > 255 >>> 0) {
            break label$13
           }
           $3 = $0 >>> 3 | 0;
           $2 = (HEAP32[(0 + 1049620 | 0) >> 2] | 0) >>> $3 | 0;
           if ($2 & 3 | 0) {
            break label$10
           }
           $1 = HEAP32[(0 + 1050020 | 0) >> 2] | 0;
           if ($1 >>> 0 >= $0 >>> 0) {
            break label$9
           }
           if ($2) {
            break label$11
           }
           $2 = HEAP32[(0 + 1049624 | 0) >> 2] | 0;
           if (!$2) {
            break label$9
           }
           $4 = HEAP32[(((__wasm_ctz_i32($2 | 0) | 0) << 2 | 0) + 1049892 | 0) >> 2] | 0;
           $2 = ((HEAP32[($4 + 4 | 0) >> 2] | 0) & -8 | 0) - $0 | 0;
           label$14 : {
            $1 = HEAP32[($4 + (HEAP32[($4 + 16 | 0) >> 2] | 0 ? 16 : 20) | 0) >> 2] | 0;
            if (!$1) {
             break label$14
            }
            label$15 : while (1) {
             $3 = ((HEAP32[($1 + 4 | 0) >> 2] | 0) & -8 | 0) - $0 | 0;
             $89 = $3;
             $3 = $3 >>> 0 < $2 >>> 0;
             $2 = $3 ? $89 : $2;
             $4 = $3 ? $1 : $4;
             $3 = HEAP32[($1 + (HEAP32[($1 + 16 | 0) >> 2] | 0 ? 16 : 20) | 0) >> 2] | 0;
             $1 = $3;
             if ($1) {
              continue label$15
             }
             break label$15;
            };
           }
           _ZN8dlmalloc8dlmalloc8Dlmalloc18unlink_large_chunk17h852b6bd21cdd5f7eE($4 | 0);
           HEAP32[($4 + 4 | 0) >> 2] = $0 | 3 | 0;
           $1 = $4 + $0 | 0;
           if ($2 >>> 0 < 8 >>> 0) {
            break label$12
           }
           HEAP32[($1 + 4 | 0) >> 2] = $2 | 1 | 0;
           HEAP32[($1 + ($2 & -8 | 0) | 0) >> 2] = $2;
           if ($2 >>> 0 <= 15 >>> 0) {
            break label$8
           }
           _ZN8dlmalloc8dlmalloc8Dlmalloc10replace_dv17h1eca20e80c057298E($1 | 0, $2 | 0);
           break label$8;
          }
          label$16 : {
           $5 = HEAP32[(0 + 1049624 | 0) >> 2] | 0;
           if ($5) {
            break label$16
           }
           $1 = HEAP32[(0 + 1050020 | 0) >> 2] | 0;
           break label$9;
          }
          $2 = 0 - $0 | 0;
          label$17 : {
           label$18 : {
            label$19 : {
             $6 = _ZN8dlmalloc8dlmalloc8Dlmalloc18compute_tree_index17h666dd0eac2e4066aE($0 | 0) | 0;
             $1 = HEAP32[(($6 << 2 | 0) + 1049892 | 0) >> 2] | 0;
             if (!$1) {
              break label$19
             }
             $3 = 0;
             $7 = $0 << (($6 | 0) == (31 | 0) ? 0 : 25 - ($6 >>> 1 | 0) | 0) | 0;
             $4 = 0;
             label$20 : while (1) {
              label$21 : {
               $8 = (HEAP32[($1 + 4 | 0) >> 2] | 0) & -8 | 0;
               if ($8 >>> 0 < $0 >>> 0) {
                break label$21
               }
               $8 = $8 - $0 | 0;
               if ($8 >>> 0 >= $2 >>> 0) {
                break label$21
               }
               $2 = $8;
               $4 = $1;
               if ($2) {
                break label$21
               }
               $2 = 0;
               $4 = $1;
               break label$18;
              }
              $8 = HEAP32[($1 + 20 | 0) >> 2] | 0;
              $1 = HEAP32[(($1 + (($7 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0) >> 2] | 0;
              $3 = $8 ? (($8 | 0) == ($1 | 0) ? $3 : $8) : $3;
              $7 = $7 << 1 | 0;
              if ($1) {
               continue label$20
              }
              break label$20;
             };
             label$22 : {
              if (!$3) {
               break label$22
              }
              $1 = $3;
              break label$18;
             }
             $1 = 0;
             if ($4) {
              break label$18
             }
            }
            label$23 : {
             $3 = (-2 << $6 | 0) & $5 | 0;
             if ($3) {
              break label$23
             }
             $1 = 0;
             $4 = 0;
             break label$18;
            }
            $9 = ((__wasm_ctz_i32($3 | 0) | 0) << 2 | 0) + 1049892 | 0;
            $4 = 0;
            $3 = 0;
            break label$17;
           }
           $3 = 1;
          }
          label$24 : while (1) {
           label$25 : {
            switch ($3 | 0) {
            case 0:
             $1 = HEAP32[$9 >> 2] | 0;
             $3 = 1;
             continue label$24;
            default:
             break label$25;
            };
           }
           label$27 : {
            label$28 : {
             if (!$1) {
              break label$28
             }
             $9 = HEAP32[($1 + 16 | 0) >> 2] | 0 ? $1 + 16 | 0 : $1 + 20 | 0;
             $3 = (HEAP32[($1 + 4 | 0) >> 2] | 0) & -8 | 0;
             $7 = $3 - $0 | 0;
             $8 = $7 >>> 0 < $2 >>> 0;
             $3 = $3 >>> 0 < $0 >>> 0;
             $4 = $3 ? $4 : $8 ? $1 : $4;
             $2 = $3 ? $2 : $8 ? $7 : $2;
             break label$27;
            }
            $1 = HEAP32[(0 + 1050020 | 0) >> 2] | 0;
            if (!$4) {
             break label$9
            }
            label$29 : {
             if ($1 >>> 0 < $0 >>> 0) {
              break label$29
             }
             if ($2 >>> 0 >= ($1 - $0 | 0) >>> 0) {
              break label$9
             }
            }
            _ZN8dlmalloc8dlmalloc8Dlmalloc18unlink_large_chunk17h852b6bd21cdd5f7eE($4 | 0);
            HEAP32[($4 + 4 | 0) >> 2] = $0 | 3 | 0;
            $1 = $4 + $0 | 0;
            label$30 : {
             if ($2 >>> 0 < 8 >>> 0) {
              break label$30
             }
             HEAP32[($1 + 4 | 0) >> 2] = $2 | 1 | 0;
             HEAP32[($1 + ($2 & -8 | 0) | 0) >> 2] = $2;
             if ($2 >>> 0 <= 15 >>> 0) {
              break label$8
             }
             _ZN8dlmalloc8dlmalloc8Dlmalloc12insert_chunk17h54380af4d8b039feE($1 | 0, $2 | 0);
             break label$8;
            }
            HEAP32[($1 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0 | 1 | 0;
            break label$8;
           }
           $3 = 0;
           continue label$24;
          };
         }
         HEAP32[($1 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0 | 1 | 0;
         break label$8;
        }
        $2 = __wasm_ctz_i32($2 << $3 | 0 | 0) | 0;
        $1 = $2 << 3 | 0;
        $4 = _ZN8dlmalloc8dlmalloc8Dlmalloc23unlink_last_small_chunk17h8482d8c292d8c532E($1 + 1049628 | 0 | 0, $2 | 0) | 0;
        HEAP32[($4 + 4 | 0) >> 2] = $0 | 3 | 0;
        $2 = $4 + $0 | 0;
        label$31 : {
         if (($1 | 0) == ($0 | 0)) {
          break label$31
         }
         $3 = $1 - $0 | 0;
         HEAP32[($2 + 4 | 0) >> 2] = $3 | 1 | 0;
         HEAP32[($4 + $1 | 0) >> 2] = $3;
         if ($3 >>> 0 < 16 >>> 0) {
          break label$8
         }
         _ZN8dlmalloc8dlmalloc8Dlmalloc10replace_dv17h1eca20e80c057298E($2 | 0, $3 | 0);
         break label$8;
        }
        HEAP32[($2 + 4 | 0) >> 2] = HEAP32[($2 + 4 | 0) >> 2] | 0 | 1 | 0;
        break label$8;
       }
       $2 = (($2 ^ -1 | 0) & 1 | 0) + $3 | 0;
       $1 = $2 << 3 | 0;
       $4 = _ZN8dlmalloc8dlmalloc8Dlmalloc23unlink_last_small_chunk17h8482d8c292d8c532E($1 + 1049628 | 0 | 0, $2 | 0) | 0;
       HEAP32[($4 + 4 | 0) >> 2] = $1 | 3 | 0;
       $1 = $4 + $1 | 0;
       HEAP32[($1 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0 | 1 | 0;
       break label$8;
      }
      label$32 : {
       label$33 : {
        label$34 : {
         if ($1 >>> 0 >= $0 >>> 0) {
          break label$34
         }
         if ((HEAP32[(0 + 1050024 | 0) >> 2] | 0) >>> 0 < $0 >>> 0) {
          break label$32
         }
         $4 = HEAP32[(0 + 1050032 | 0) >> 2] | 0;
         _ZN8dlmalloc8dlmalloc8Dlmalloc10crop_chunk17h09d54a78d6ceecd3E($4 | 0, $4 | 0, $0 | 0, 1 | 0) | 0;
         break label$33;
        }
        $4 = HEAP32[(0 + 1050028 | 0) >> 2] | 0;
        _ZN8dlmalloc8dlmalloc8Dlmalloc10crop_chunk17h09d54a78d6ceecd3E($4 | 0, $4 | 0, $0 | 0, 1 | 0) | 0;
       }
       if ($4) {
        break label$8
       }
      }
      $1 = 0;
      label$35 : {
       if (HEAPU8[(0 + 1050040 | 0) >> 0] | 0) {
        break label$35
       }
       HEAP8[(0 + 1050040 | 0) >> 0] = 1;
       label$36 : {
        $2 = 1050167 & -8 | 0;
        $3 = 1050160 & -65536 | 0;
        $4 = $3 + 65536 | 0;
        $3 = ($3 | 0) == (1050160 | 0);
        if ($3 ? (1050160 | 0) == ($2 | 0) : ($4 | 0) == ($2 | 0)) {
         break label$36
        }
        _ZN8dlmalloc8dlmalloc8Dlmalloc23append_mem_in_alloc_ctx17hc728cb154baf60a1E($2 | 0, ($3 ? 1050160 : $4) - $2 | 0 | 0) | 0;
       }
       if ((HEAP32[(0 + 1050024 | 0) >> 2] | 0) >>> 0 < $0 >>> 0) {
        break label$35
       }
       $4 = HEAP32[(0 + 1050032 | 0) >> 2] | 0;
       if ($4) {
        break label$6
       }
      }
      $3 = $0 + 65567 | 0;
      $2 = alloc($3 >>> 16 | 0 | 0) | 0;
      if (($2 | 0) == (-1 | 0)) {
       break label$5
      }
      $2 = $2 << 16 | 0;
      if (!$2) {
       break label$5
      }
      $4 = _ZN8dlmalloc8dlmalloc8Dlmalloc23append_mem_in_alloc_ctx17hc728cb154baf60a1E($2 | 0, $3 & -65536 | 0 | 0) | 0;
      if (HEAP32[(0 + 1050032 | 0) >> 2] | 0) {
       break label$6
      }
      $1 = HEAP32[(0 + 1050036 | 0) >> 2] | 0;
      if (!$1) {
       break label$6
      }
      $9 = HEAP32[(0 + 1050028 | 0) >> 2] | 0;
      $7 = HEAP32[(0 + 1050024 | 0) >> 2] | 0;
      $8 = 0;
      break label$7;
     }
     return $4 + 8 | 0 | 0;
    }
    label$37 : {
     label$38 : {
      label$39 : while (1) {
       $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
       $3 = HEAP32[$1 >> 2] | 0;
       $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
       label$40 : {
        label$41 : {
         $2 = $3 + $2 | 0;
         if ((HEAPU8[($2 + -20 | 0) >> 0] | 0) & 1 | 0) {
          break label$41
         }
         $2 = $2 + -24 | 0;
         $2 = $2 - (HEAP32[$2 >> 2] | 0) | 0;
         if (($2 | 0) == ($9 | 0)) {
          break label$41
         }
         $3 = (HEAP32[($2 + 4 | 0) >> 2] | 0) & -8 | 0;
         if ($3 >>> 0 < 16 >>> 0) {
          break label$41
         }
         if ($3 >>> 0 > $7 >>> 0) {
          break label$40
         }
        }
        if (!$1) {
         break label$38
        }
        continue label$39;
       }
       HEAP32[(0 + 1050024 | 0) >> 2] = $3;
       HEAP32[(0 + 1050032 | 0) >> 2] = $2;
       $7 = $3;
       $8 = $2;
       if ($1) {
        continue label$39
       }
       break label$37;
      };
     }
     $2 = $8;
     if (!$2) {
      break label$6
     }
    }
    _ZN8dlmalloc8dlmalloc8Dlmalloc12unlink_chunk17he5e01c5ef9cd5adfE($2 | 0);
   }
   label$42 : {
    if (!(_ZN8dlmalloc8dlmalloc8Dlmalloc10crop_chunk17h09d54a78d6ceecd3E($4 | 0, $4 | 0, $0 | 0, 0 | 0) | 0)) {
     break label$42
    }
    _ZN8dlmalloc8dlmalloc8Dlmalloc10free_chunk17h9bdf6c6f505b06cfE($4 + ((HEAP32[($4 + 4 | 0) >> 2] | 0) & -8 | 0) | 0 | 0);
   }
   $1 = $4 + 8 | 0;
  }
  return $1 | 0;
 }
 
 function _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h8dc5eb9b1b414db1E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if ($1 >>> 0 > $3 >>> 0) {
    break label$1
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
  wasm2js_trap();
 }
 
 function _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE() {
  _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
  wasm2js_trap();
 }
 
 function _ZN4core9panicking19assert_failed_inner17h5511dfd79d7cf6bfE() {
  _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
  wasm2js_trap();
 }
 
 function _ZN4core6result13unwrap_failed17h2e8c86d620a44170E() {
  _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
  wasm2js_trap();
 }
 
 function _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE() {
  _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
  wasm2js_trap();
 }
 
 function rust_begin_unwind() {
  _ZN5gcore5utils3ext5panic17h1f863e2440d0cdd1E();
  wasm2js_trap();
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc18unlink_large_chunk17h852b6bd21cdd5f7eE($0) {
  $0 = $0 | 0;
  var $2 = 0, $4 = 0, $3 = 0, $1 = 0, $5 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $1 = HEAP32[($0 + 24 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $2 = HEAP32[($0 + 12 | 0) >> 2] | 0;
     if (($2 | 0) != ($0 | 0)) {
      break label$3
     }
     $2 = $0 + 20 | 0;
     $3 = HEAP32[$2 >> 2] | 0;
     $4 = HEAP32[($0 + ($3 ? 20 : 16) | 0) >> 2] | 0;
     if ($4) {
      break label$2
     }
     $2 = 0;
     break label$1;
    }
    $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
    HEAP32[($4 + 12 | 0) >> 2] = $2;
    HEAP32[($2 + 8 | 0) >> 2] = $4;
    break label$1;
   }
   $3 = $3 ? $2 : $0 + 16 | 0;
   label$4 : while (1) {
    $5 = $3;
    label$5 : {
     $2 = $4;
     $3 = $2 + 20 | 0;
     $4 = HEAP32[$3 >> 2] | 0;
     if ($4) {
      break label$5
     }
     $3 = $2 + 16 | 0;
     $4 = HEAP32[($2 + 16 | 0) >> 2] | 0;
    }
    if ($4) {
     continue label$4
    }
    break label$4;
   };
   HEAP32[$5 >> 2] = 0;
  }
  label$6 : {
   if (!$1) {
    break label$6
   }
   label$7 : {
    label$8 : {
     $3 = HEAP32[($0 + 28 | 0) >> 2] | 0;
     $4 = ($3 << 2 | 0) + 1049892 | 0;
     if ((HEAP32[$4 >> 2] | 0 | 0) == ($0 | 0)) {
      break label$8
     }
     HEAP32[($1 + ((HEAP32[($1 + 16 | 0) >> 2] | 0 | 0) == ($0 | 0) ? 16 : 20) | 0) >> 2] = $2;
     if (!$2) {
      break label$6
     }
     break label$7;
    }
    HEAP32[$4 >> 2] = $2;
    if ($2) {
     break label$7
    }
    (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAP32[(0 + 1049624 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $3 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 1049624 | 0) >> 2] = wasm2js_i32$1;
    break label$6;
   }
   HEAP32[($2 + 24 | 0) >> 2] = $1;
   label$9 : {
    $4 = HEAP32[($0 + 16 | 0) >> 2] | 0;
    if (!$4) {
     break label$9
    }
    HEAP32[($2 + 16 | 0) >> 2] = $4;
    HEAP32[($4 + 24 | 0) >> 2] = $2;
   }
   $4 = HEAP32[($0 + 20 | 0) >> 2] | 0;
   if (!$4) {
    break label$6
   }
   HEAP32[($2 + 20 | 0) >> 2] = $4;
   HEAP32[($4 + 24 | 0) >> 2] = $2;
   return;
  }
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc10replace_dv17h1eca20e80c057298E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   $2 = HEAP32[(0 + 1050020 | 0) >> 2] | 0;
   if (!$2) {
    break label$1
   }
   _ZN8dlmalloc8dlmalloc8Dlmalloc12insert_chunk17h54380af4d8b039feE(HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0, $2 | 0);
  }
  HEAP32[(0 + 1050028 | 0) >> 2] = $0;
  HEAP32[(0 + 1050020 | 0) >> 2] = $1;
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc18compute_tree_index17h666dd0eac2e4066aE($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = 31;
  label$1 : {
   if ($0 >>> 0 >= 16777216 >>> 0) {
    break label$1
   }
   $1 = Math_clz32($0 >>> 8 | 0);
   $1 = ((($0 >>> (6 - $1 | 0) | 0) & 1 | 0) - ($1 << 1 | 0) | 0) + 62 | 0;
  }
  return $1 | 0;
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc12insert_chunk17h54380af4d8b039feE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  label$1 : {
   if ($1 >>> 0 < 256 >>> 0) {
    break label$1
   }
   HEAP32[($0 + 16 | 0) >> 2] = 0;
   HEAP32[($0 + 20 | 0) >> 2] = 0;
   $2 = _ZN8dlmalloc8dlmalloc8Dlmalloc18compute_tree_index17h666dd0eac2e4066aE($1 | 0) | 0;
   HEAP32[($0 + 28 | 0) >> 2] = $2;
   $3 = ($2 << 2 | 0) + 1049892 | 0;
   label$2 : {
    label$3 : {
     $4 = HEAP32[(0 + 1049624 | 0) >> 2] | 0;
     $5 = 1 << $2 | 0;
     if ($4 & $5 | 0) {
      break label$3
     }
     HEAP32[$3 >> 2] = $0;
     HEAP32[($0 + 24 | 0) >> 2] = $3;
     HEAP32[(0 + 1049624 | 0) >> 2] = $4 | $5 | 0;
     break label$2;
    }
    $2 = $1 << (($2 | 0) == (31 | 0) ? 0 : 25 - ($2 >>> 1 | 0) | 0) | 0;
    $4 = HEAP32[$3 >> 2] | 0;
    label$4 : while (1) {
     label$5 : {
      $3 = $4;
      if (((HEAP32[($3 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) != ($1 | 0)) {
       break label$5
      }
      $2 = HEAP32[($3 + 8 | 0) >> 2] | 0;
      HEAP32[($2 + 12 | 0) >> 2] = $0;
      HEAP32[($3 + 8 | 0) >> 2] = $0;
      HEAP32[($0 + 24 | 0) >> 2] = 0;
      HEAP32[($0 + 12 | 0) >> 2] = $3;
      HEAP32[($0 + 8 | 0) >> 2] = $2;
      return;
     }
     $4 = $2 >>> 29 | 0;
     $2 = $2 << 1 | 0;
     $5 = ($3 + ($4 & 4 | 0) | 0) + 16 | 0;
     $4 = HEAP32[$5 >> 2] | 0;
     if ($4) {
      continue label$4
     }
     break label$4;
    };
    HEAP32[$5 >> 2] = $0;
    HEAP32[($0 + 24 | 0) >> 2] = $3;
   }
   HEAP32[($0 + 12 | 0) >> 2] = $0;
   HEAP32[($0 + 8 | 0) >> 2] = $0;
   return;
  }
  $2 = ($1 & -8 | 0) + 1049628 | 0;
  label$6 : {
   label$7 : {
    $3 = HEAP32[(0 + 1049620 | 0) >> 2] | 0;
    $4 = 1 << ($1 >>> 3 | 0) | 0;
    if ($3 & $4 | 0) {
     break label$7
    }
    HEAP32[(0 + 1049620 | 0) >> 2] = $3 | $4 | 0;
    $3 = $2;
    break label$6;
   }
   $3 = HEAP32[($2 + 8 | 0) >> 2] | 0;
  }
  HEAP32[($2 + 8 | 0) >> 2] = $0;
  HEAP32[($3 + 12 | 0) >> 2] = $0;
  HEAP32[($0 + 12 | 0) >> 2] = $2;
  HEAP32[($0 + 8 | 0) >> 2] = $3;
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc23unlink_last_small_chunk17h8482d8c292d8c532E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  label$1 : {
   $2 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   $3 = HEAP32[($2 + 8 | 0) >> 2] | 0;
   if (($3 | 0) == ($0 | 0)) {
    break label$1
   }
   HEAP32[($3 + 12 | 0) >> 2] = $0;
   HEAP32[($0 + 8 | 0) >> 2] = $3;
   return $2 | 0;
  }
  (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAP32[(0 + 1049620 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $1 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 1049620 | 0) >> 2] = wasm2js_i32$1;
  return $2 | 0;
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc10crop_chunk17h09d54a78d6ceecd3E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, $6 = 0, $7 = 0, $5 = 0, $8 = 0;
  $4 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  $5 = $4 & 1 | 0;
  $4 = $4 & -8 | 0;
  label$1 : {
   label$2 : {
    if (($1 | 0) != ($0 | 0)) {
     break label$2
    }
    $1 = $0;
    break label$1;
   }
   $6 = $1 - $0 | 0;
   HEAP32[($0 + 4 | 0) >> 2] = $5 | $6 | 0;
   $4 = $4 - $6 | 0;
   label$3 : {
    label$4 : {
     if ((HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0) == ($0 | 0)) {
      break label$4
     }
     if ((HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0) != ($0 | 0)) {
      break label$3
     }
     HEAP32[(0 + 1050020 | 0) >> 2] = $4;
     HEAP32[(0 + 1050028 | 0) >> 2] = $1;
     break label$3;
    }
    HEAP32[(0 + 1050024 | 0) >> 2] = $4;
    HEAP32[(0 + 1050032 | 0) >> 2] = $1;
   }
   label$5 : {
    if ($6 >>> 0 < 16 >>> 0) {
     break label$5
    }
    if (!$3) {
     break label$5
    }
    _ZN8dlmalloc8dlmalloc8Dlmalloc12insert_chunk17h54380af4d8b039feE($0 | 0, $6 | 0);
   }
   HEAP32[$1 >> 2] = $6;
   $5 = 0;
  }
  label$6 : {
   label$7 : {
    $6 = $4 >>> 0 >= ($2 + 8 | 0) >>> 0;
    if ($6) {
     break label$7
    }
    $0 = $1 + $4 | 0;
    HEAP32[$0 >> 2] = $4;
    HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] | 0 | 1 | 0;
    break label$6;
   }
   $0 = $1 + $2 | 0;
   $4 = $4 - $2 | 0;
   HEAP32[($0 + 4 | 0) >> 2] = $4 | 1 | 0;
   $7 = $0 + ($4 & -8 | 0) | 0;
   HEAP32[($7 + 4 | 0) >> 2] = (HEAP32[($7 + 4 | 0) >> 2] | 0) & -2 | 0;
   HEAP32[($0 + ((HEAP32[($0 + 4 | 0) >> 2] | 0) & -8 | 0) | 0) >> 2] = $4;
   $7 = $4 >>> 0 > 15 >>> 0;
   $8 = $7 ? $4 : 0;
   $0 = $7 ? $0 : 0;
   label$8 : {
    label$9 : {
     if ((HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0) == ($1 | 0)) {
      break label$9
     }
     label$10 : {
      if ((HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0) != ($1 | 0)) {
       break label$10
      }
      HEAP32[(0 + 1050020 | 0) >> 2] = $8;
      HEAP32[(0 + 1050028 | 0) >> 2] = $0;
      break label$8;
     }
     if ($4 >>> 0 < 16 >>> 0) {
      break label$8
     }
     if (!$3) {
      break label$8
     }
     _ZN8dlmalloc8dlmalloc8Dlmalloc12insert_chunk17h54380af4d8b039feE($0 | 0, $8 | 0);
     break label$8;
    }
    HEAP32[(0 + 1050024 | 0) >> 2] = $8;
    HEAP32[(0 + 1050032 | 0) >> 2] = $0;
   }
   $4 = $2;
  }
  HEAP32[($1 + 4 | 0) >> 2] = $5 | $4 | 0 | 2 | 0;
  label$11 : {
   if ((HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0) == ($1 | 0)) {
    break label$11
   }
   label$12 : {
    if ((HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0) != ($1 | 0)) {
     break label$12
    }
    HEAP32[(0 + 1050020 | 0) >> 2] = 0;
    HEAP32[(0 + 1050028 | 0) >> 2] = 0;
   }
   return $6 | 0;
  }
  HEAP32[(0 + 1050024 | 0) >> 2] = 0;
  HEAP32[(0 + 1050032 | 0) >> 2] = 0;
  return $6 | 0;
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc23append_mem_in_alloc_ctx17hc728cb154baf60a1E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $2 = 0;
  $2 = HEAP32[(0 + 1050036 | 0) >> 2] | 0;
  $3 = $0 + $1 | 0;
  HEAP32[($3 + -4 | 0) >> 2] = 7;
  HEAP32[($3 + -12 | 0) >> 2] = $1;
  $4 = $3 + -16 | 0;
  HEAP32[$4 >> 2] = $0;
  HEAP32[($3 + -20 | 0) >> 2] = 18;
  HEAP32[($3 + -8 | 0) >> 2] = HEAP32[(0 + 1050036 | 0) >> 2] | 0;
  label$1 : {
   $5 = HEAP32[(0 + 1050032 | 0) >> 2] | 0;
   if (!$5) {
    break label$1
   }
   HEAP32[($5 + ((HEAP32[($5 + 4 | 0) >> 2] | 0) & -8 | 0) | 0) >> 2] = HEAP32[(0 + 1050024 | 0) >> 2] | 0;
   _ZN8dlmalloc8dlmalloc8Dlmalloc12insert_chunk17h54380af4d8b039feE(HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0, HEAP32[(0 + 1050024 | 0) >> 2] | 0 | 0);
  }
  HEAP32[(0 + 1050032 | 0) >> 2] = $0;
  $1 = $1 + -24 | 0;
  HEAP32[(0 + 1050024 | 0) >> 2] = $1;
  HEAP32[($0 + 4 | 0) >> 2] = $1 | 1 | 0;
  HEAP32[($0 + ($1 & -8 | 0) | 0) >> 2] = $1;
  HEAP32[(0 + 1050036 | 0) >> 2] = $4;
  label$2 : {
   if ($2) {
    break label$2
   }
   $1 = 0;
   label$3 : while (1) {
    $0 = $1 + 1049628 | 0;
    HEAP32[($1 + 1049636 | 0) >> 2] = $0;
    HEAP32[($1 + 1049640 | 0) >> 2] = $0;
    $1 = $1 + 8 | 0;
    if (($1 | 0) != (256 | 0)) {
     continue label$3
    }
    break label$3;
   };
   return HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0;
  }
  $5 = 0;
  $1 = $4;
  label$4 : {
   label$5 : {
    label$6 : {
     if (((HEAP32[$1 >> 2] | 0) + (HEAP32[($3 + -12 | 0) >> 2] | 0) | 0 | 0) == ($0 | 0)) {
      break label$6
     }
     label$7 : while (1) {
      $5 = $1;
      $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      if (!$1) {
       break label$5
      }
      if (((HEAP32[$1 >> 2] | 0) + (HEAP32[($1 + 4 | 0) >> 2] | 0) | 0 | 0) != ($0 | 0)) {
       continue label$7
      }
      break label$7;
     };
    }
    HEAP32[(($5 ? $5 : $4) + 8 | 0) >> 2] = HEAP32[($1 + 8 | 0) >> 2] | 0;
    $0 = _ZN4core6option15Option$LT$T$GT$6unwrap17hf182b42bd2c016f6E(HEAP32[(0 + 1050036 | 0) >> 2] | 0 | 0) | 0;
    $0 = _ZN8dlmalloc8dlmalloc8Dlmalloc14merge_segments17hd47757245948d877E(HEAP32[$1 >> 2] | 0 | 0, HEAP32[($1 + 4 | 0) >> 2] | 0 | 0, $0 | 0) | 0;
    $4 = HEAP32[(0 + 1050036 | 0) >> 2] | 0;
    if (!$4) {
     break label$4
    }
   }
   $1 = $4;
   label$8 : {
    label$9 : while (1) {
     if ((HEAP32[$1 >> 2] | 0 | 0) == ($3 | 0)) {
      break label$8
     }
     $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     if ($1) {
      continue label$9
     }
     break label$4;
    };
   }
   $3 = HEAP32[($4 + 8 | 0) >> 2] | 0;
   $0 = _ZN4core6option15Option$LT$T$GT$6unwrap17hf182b42bd2c016f6E($4 | 0) | 0;
   $0 = _ZN8dlmalloc8dlmalloc8Dlmalloc14merge_segments17hd47757245948d877E(HEAP32[$0 >> 2] | 0 | 0, HEAP32[($0 + 4 | 0) >> 2] | 0 | 0, $1 | 0) | 0;
   HEAP32[(0 + 1050036 | 0) >> 2] = $3;
  }
  return $0 | 0;
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc12unlink_chunk17he5e01c5ef9cd5adfE($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  label$1 : {
   $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   $2 = $1 & -8 | 0;
   if ($2 >>> 0 < 16 >>> 0) {
    break label$1
   }
   label$2 : {
    if ($2 >>> 0 < 256 >>> 0) {
     break label$2
    }
    _ZN8dlmalloc8dlmalloc8Dlmalloc18unlink_large_chunk17h852b6bd21cdd5f7eE($0 | 0);
    return;
   }
   label$3 : {
    $2 = HEAP32[($0 + 12 | 0) >> 2] | 0;
    $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
    if (($2 | 0) == ($0 | 0)) {
     break label$3
    }
    HEAP32[($0 + 12 | 0) >> 2] = $2;
    HEAP32[($2 + 8 | 0) >> 2] = $0;
    return;
   }
   (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAP32[(0 + 1049620 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $1 >>> 3 | 0 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 1049620 | 0) >> 2] = wasm2js_i32$1;
  }
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc10free_chunk17h9bdf6c6f505b06cfE($0) {
  $0 = $0 | 0;
  var $1 = 0, $5 = 0, $2 = 0, $4 = 0, $7 = 0, $3 = 0, $9 = 0, $6 = 0, $10 = 0, $11 = 0, $8 = 0, $12 = 0, $91 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  $2 = $1 & -8 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        if (($1 + 24 | 0) >>> 0 < 65536 >>> 0) {
         break label$6
        }
        $3 = $0 + $2 | 0;
        $4 = 0;
        $1 = 0;
        label$7 : {
         label$8 : {
          $5 = HEAP32[(0 + 1050036 | 0) >> 2] | 0;
          if (!$5) {
           break label$8
          }
          $6 = 0;
          label$9 : while (1) {
           label$10 : {
            $1 = $5;
            $5 = HEAP32[$1 >> 2] | 0;
            if ($5 >>> 0 > $0 >>> 0) {
             break label$10
            }
            $7 = HEAP32[($1 + 4 | 0) >> 2] | 0;
            if (($5 + $7 | 0) >>> 0 <= $0 >>> 0) {
             break label$10
            }
            $4 = $1;
            break label$7;
           }
           $6 = $1;
           $5 = HEAP32[($1 + 8 | 0) >> 2] | 0;
           if ($5) {
            continue label$9
           }
           break label$9;
          };
         }
         $7 = HEAP32[(0 + 4 | 0) >> 2] | 0;
         $6 = $1;
        }
        label$11 : {
         label$12 : {
          $7 = $5 + $7 | 0;
          $3 = ($7 - $3 | 0) >>> 0 > 24 >>> 0 ? $3 : $7;
          $1 = $0 + (($5 | 0) == ($0 | 0) ? 0 : 28) | 0;
          if (($3 - $1 | 0) >>> 0 < 65536 >>> 0) {
           break label$12
          }
          $8 = $1 + 65535 | 0;
          $9 = $8 & -65536 | 0;
          if ($9 >>> 0 >= $3 >>> 0) {
           break label$12
          }
          $1 = ($3 - $9 | 0) & -65536 | 0;
          if ($1) {
           break label$11
          }
         }
         if ((HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0) == ($0 | 0)) {
          break label$3
         }
         if ((HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0) == ($0 | 0)) {
          break label$3
         }
         break label$1;
        }
        $2 = ($9 | 0) == ($5 | 0);
        $91 = $9 + ($2 ? 0 : -24) | 0;
        $2 = $2 ? $1 : $1 | 24 | 0;
        $10 = $9 + $1 | 0;
        $11 = ($7 | 0) == ($10 | 0);
        _ZN8dlmalloc8dlmalloc8Dlmalloc10crop_chunk17h09d54a78d6ceecd3E($0 | 0, $91 | 0, ($11 ? $2 + -24 | 0 : $2) | 0, 1 | 0) | 0;
        label$13 : {
         label$14 : {
          if (!$11) {
           break label$14
          }
          $12 = 18;
          break label$13;
         }
         $12 = (HEAP32[(((HEAP32[$4 >> 2] | 0) + (HEAP32[($4 + 4 | 0) >> 2] | 0) | 0) + -20 | 0) >> 2] | 0) & 1 | 0 | 18 | 0;
        }
        $4 = HEAP32[($4 + 8 | 0) >> 2] | 0;
        label$15 : {
         $1 = $8 >>> 16 | 0;
         $2 = ($3 >>> 16 | 0) + -1 | 0;
         if ($1 >>> 0 > $2 >>> 0) {
          break label$15
         }
         label$16 : {
          label$17 : while (1) {
           if (($2 | 0) == ($1 | 0)) {
            break label$16
           }
           $0 = free($1 | 0) | 0;
           $1 = $1 + 1 | 0;
           if (!$0) {
            continue label$17
           }
           break label$15;
          };
         }
         free($2 | 0) | 0;
        }
        if (($5 | 0) != ($9 | 0)) {
         break label$5
        }
        $1 = $6;
        break label$4;
       }
       if ((HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0) == ($0 | 0)) {
        break label$3
       }
       if ($2 >>> 0 < 16 >>> 0) {
        break label$3
       }
       if ((HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0) != ($0 | 0)) {
        break label$1
       }
       break label$3;
      }
      $1 = $9 - $5 | 0;
      $0 = $5 + $1 | 0;
      HEAP32[($0 + -4 | 0) >> 2] = 7;
      HEAP32[($0 + -12 | 0) >> 2] = $1;
      $1 = $0 + -16 | 0;
      HEAP32[$1 >> 2] = $5;
      HEAP32[($0 + -20 | 0) >> 2] = 18;
      HEAP32[($6 ? $6 + 8 | 0 : 1050036) >> 2] = $1;
     }
     label$18 : {
      label$19 : {
       if (!$11) {
        break label$19
       }
       if ($1) {
        break label$18
       }
       if (!$4) {
        break label$2
       }
       HEAP32[(0 + 1050036 | 0) >> 2] = $4;
       return;
      }
      $5 = $7 - $10 | 0;
      $0 = $10 + $5 | 0;
      HEAP32[($0 + -4 | 0) >> 2] = 7;
      HEAP32[($0 + -12 | 0) >> 2] = $5;
      $5 = $0 + -16 | 0;
      HEAP32[$5 >> 2] = $10;
      HEAP32[($0 + -20 | 0) >> 2] = $12;
      HEAP32[($1 ? $1 + 8 | 0 : 1050036) >> 2] = $5;
      $1 = $5;
     }
     HEAP32[($1 + 8 | 0) >> 2] = $4;
    }
    return;
   }
   HEAP32[(0 + 1050036 | 0) >> 2] = 0;
   return;
  }
  _ZN8dlmalloc8dlmalloc8Dlmalloc12insert_chunk17h54380af4d8b039feE($0 | 0, $2 | 0);
 }
 
 function _ZN4core6option15Option$LT$T$GT$6unwrap17hf182b42bd2c016f6E($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  return $0 | 0;
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc14merge_segments17hd47757245948d877E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $17 = 0;
  HEAP32[$2 >> 2] = $0;
  $3 = (HEAP32[($2 + 4 | 0) >> 2] | 0) + $1 | 0;
  HEAP32[($2 + 4 | 0) >> 2] = $3;
  $2 = $0 + $1 | 0;
  $1 = $2 + -20 | 0;
  $17 = $1;
  $1 = HEAP32[$1 >> 2] | 0;
  HEAP32[$17 >> 2] = $1 & 7 | 0 | 24 | 0;
  $2 = $2 + -24 | 0;
  label$1 : {
   if ($1 & 1 | 0) {
    break label$1
   }
   $1 = $2 - (HEAP32[$2 >> 2] | 0) | 0;
   if (($1 | 0) != (HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0)) {
    break label$1
   }
   if (($0 + ((HEAP32[($0 + 4 | 0) >> 2] | 0) & -8 | 0) | 0 | 0) == (($0 + $3 | 0) + -24 | 0 | 0)) {
    break label$1
   }
   HEAP32[(0 + 1050024 | 0) >> 2] = 0;
   HEAP32[(0 + 1050032 | 0) >> 2] = 0;
   _ZN8dlmalloc8dlmalloc8Dlmalloc12insert_chunk17h54380af4d8b039feE($1 | 0, (HEAP32[($1 + 4 | 0) >> 2] | 0) & -8 | 0 | 0);
  }
  return _ZN8dlmalloc8dlmalloc8Dlmalloc17extend_free_chunk17h24ba8ac44e2cb300E($2 | 0) | 0 | 0;
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc17extend_free_chunk17h24ba8ac44e2cb300E($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0, $3 = 0;
  label$1 : {
   $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   if ($1 & 1 | 0) {
    break label$1
   }
   $2 = $1 & -8 | 0;
   $0 = $0 - (HEAP32[$0 >> 2] | 0) | 0;
   $1 = (HEAP32[($0 + 4 | 0) >> 2] | 0) & -8 | 0;
   label$2 : {
    label$3 : {
     if (($0 | 0) == (HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0)) {
      break label$3
     }
     label$4 : {
      if (($0 | 0) == (HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0)) {
       break label$4
      }
      _ZN8dlmalloc8dlmalloc8Dlmalloc12unlink_chunk17he5e01c5ef9cd5adfE($0 | 0);
      break label$2;
     }
     HEAP32[(0 + 1050020 | 0) >> 2] = (HEAP32[(0 + 1050020 | 0) >> 2] | 0) + $2 | 0;
     break label$2;
    }
    HEAP32[(0 + 1050024 | 0) >> 2] = (HEAP32[(0 + 1050024 | 0) >> 2] | 0) + $2 | 0;
   }
   $1 = $1 + $2 | 0 | 1 | 0;
   HEAP32[($0 + 4 | 0) >> 2] = $1;
  }
  label$5 : {
   label$6 : {
    label$7 : {
     $3 = $1 & -8 | 0;
     $2 = $0 + $3 | 0;
     if ((HEAPU8[($2 + 4 | 0) >> 0] | 0) & 2 | 0) {
      break label$7
     }
     label$8 : {
      if (($2 | 0) == (HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0)) {
       break label$8
      }
      if (($2 | 0) == (HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0)) {
       break label$6
      }
      _ZN8dlmalloc8dlmalloc8Dlmalloc12unlink_chunk17he5e01c5ef9cd5adfE($2 | 0);
      $1 = ((HEAP32[($2 + 4 | 0) >> 2] | 0) & -8 | 0) + ((HEAP32[($0 + 4 | 0) >> 2] | 0) & -8 | 0) | 0;
      $2 = $1 | 1 | 0;
      HEAP32[($0 + 4 | 0) >> 2] = $2;
      if (($0 | 0) != (HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0)) {
       break label$5
      }
      HEAP32[(0 + 1050020 | 0) >> 2] = $1;
      break label$5;
     }
     HEAP32[(0 + 1050032 | 0) >> 2] = $0;
     $2 = (HEAP32[(0 + 1050024 | 0) >> 2] | 0) + $3 | 0;
     HEAP32[(0 + 1050024 | 0) >> 2] = $2;
     label$9 : {
      if (($0 | 0) != (HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0)) {
       break label$9
      }
      HEAP32[(0 + 1050020 | 0) >> 2] = 0;
      HEAP32[(0 + 1050028 | 0) >> 2] = 0;
     }
     $2 = $2 | 1 | 0;
     HEAP32[($0 + 4 | 0) >> 2] = $2;
     break label$5;
    }
    HEAP32[($0 + 4 | 0) >> 2] = $1 & -3 | 0;
    HEAP32[($2 + 4 | 0) >> 2] = (HEAP32[($2 + 4 | 0) >> 2] | 0) & -2 | 0;
    HEAP32[$2 >> 2] = (HEAP32[($0 + 4 | 0) >> 2] | 0) & -8 | 0;
    return $0 | 0;
   }
   HEAP32[(0 + 1050028 | 0) >> 2] = $0;
   $2 = (HEAP32[(0 + 1050020 | 0) >> 2] | 0) + $3 | 0;
   HEAP32[(0 + 1050020 | 0) >> 2] = $2;
   $2 = $2 | 1 | 0;
   HEAP32[($0 + 4 | 0) >> 2] = $2;
  }
  $2 = $2 & -8 | 0;
  HEAP32[($0 + $2 | 0) >> 2] = $2;
  return $0 | 0;
 }
 
 function _ZN8dlmalloc8dlmalloc8Dlmalloc19sbuff_offset_to_idx17h75d47311e07edc6bE($0) {
  $0 = $0 | 0;
  var $1 = 0, $3 = 0, $2 = 0, $4 = 0;
  $1 = 0;
  $2 = 0;
  label$1 : {
   label$2 : while (1) {
    $3 = $2;
    if (($3 | 0) == (5 | 0)) {
     break label$1
    }
    $2 = $3 + 1 | 0;
    $4 = $1 & 28 | 0;
    $1 = $1 + 4 | 0;
    if (((7606400 >>> $4 | 0) & 120 | 0 | 0) != ($0 | 0)) {
     continue label$2
    }
    break label$2;
   };
  }
  return $3 | 0;
 }
 
 function _ZN8dlmalloc8Dlmalloc6malloc17h61b4872f78296f5bE($0) {
  $0 = $0 | 0;
  return _ZN8dlmalloc8dlmalloc8Dlmalloc15malloc_internal17h5c680ad526f968a5E($0 | 0, 1 | 0) | 0 | 0;
 }
 
 function __rust_dealloc($0) {
  $0 = $0 | 0;
  var wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  label$1 : {
   label$2 : {
    if ($0 >>> 0 < 1049440 >>> 0) {
     break label$2
    }
    if ($0 >>> 0 <= 1049616 >>> 0) {
     break label$1
    }
   }
   _ZN8dlmalloc8dlmalloc8Dlmalloc10free_chunk17h9bdf6c6f505b06cfE(_ZN8dlmalloc8dlmalloc8Dlmalloc17extend_free_chunk17h24ba8ac44e2cb300E($0 + -8 | 0 | 0) | 0 | 0);
   return;
  }
  (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAPU8[(0 + 1049616 | 0) >> 0] | 0) & (__wasm_rotl_i32(-2 | 0, (_ZN8dlmalloc8dlmalloc8Dlmalloc19sbuff_offset_to_idx17h75d47311e07edc6bE($0 - 1049440 | 0 | 0) | 0) & 7 | 0 | 0) | 0) | 0), HEAP8[(wasm2js_i32$0 + 1049616 | 0) >> 0] = wasm2js_i32$1;
 }
 
 function _ZN5gcore6errors144_$LT$impl$u20$core__convert__From$LT$gcore__errors__SyscallError$GT$$u20$for$u20$core__result__Result$LT$$LP$$RP$$C$gcore__errors__Error$GT$$GT$4from17heac5be5a465af15fE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       switch ($1 + -300 | 0 | 0) {
       case 0:
       case 1:
       case 2:
       case 3:
       case 4:
       case 5:
       case 6:
       case 7:
       case 8:
       case 9:
       case 10:
        break label$4;
       default:
        break label$5;
       };
      }
      label$6 : {
       label$7 : {
        switch ($1 + -100 | 0 | 0) {
        default:
         label$9 : {
          switch ($1 + -500 | 0 | 0) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
           break label$3;
          default:
           break label$9;
          };
         }
         label$10 : {
          switch ($1 + -200 | 0 | 0) {
          case 0:
          case 1:
           break label$6;
          default:
           break label$10;
          };
         }
         label$11 : {
          if ($1) {
           break label$11
          }
          $2 = 7;
          break label$1;
         }
         if (($1 | 0) == (399 | 0)) {
          break label$4
         }
         if (($1 | 0) != (600 | 0)) {
          break label$2
         }
         $2 = 4;
         break label$1;
        case 2:
         break label$2;
        case 0:
        case 1:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
         break label$7;
        };
       }
       $2 = 0;
       break label$1;
      }
      $2 = 1;
      break label$1;
     }
     $2 = 2;
     break label$1;
    }
    $2 = 3;
    break label$1;
   }
   $2 = 5;
  }
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  HEAP32[$0 >> 2] = $2;
 }
 
 function _ZN5gcore3msg4size17h30975cd15d439740E() {
  var $0 = 0, $1 = 0;
  $0 = __stack_pointer - 16 | 0;
  __stack_pointer = $0;
  HEAP32[($0 + 12 | 0) >> 2] = 0;
  gr_size($0 + 12 | 0 | 0);
  $1 = HEAP32[($0 + 12 | 0) >> 2] | 0;
  __stack_pointer = $0 + 16 | 0;
  return $1 | 0;
 }
 
 function _ZN5gcore5utils3ext5panic17h1f863e2440d0cdd1E() {
  gr_panic(1049050 | 0, 7 | 0);
  wasm2js_trap();
 }
 
 function _ZN69_$LT$T$u20$as$u20$core__array__equality__SpecArrayEq$LT$U$C$_$GT$$GT$7spec_eq17hce9f348aa2b800ebE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return !(memcmp($0 | 0, $1 | 0, 32 | 0) | 0) | 0;
 }
 
 function _ZN95_$LT$core__result__Result$LT$T$C$E$GT$$u20$as$u20$gstd__common__errors__IntoResult$LT$V$GT$$GT$11into_result17h9566b00ad181b7efE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $10 = 0, $11 = 0, $16 = 0, $21 = 0, $26 = 0, $31 = 0, $36 = 0;
  label$1 : {
   label$2 : {
    if (HEAPU8[$1 >> 0] | 0) {
     break label$2
    }
    $11 = HEAPU8[($1 + 1 | 0) >> 0] | 0 | ((HEAPU8[($1 + 2 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[($0 + 1 | 0) >> 0] = $11;
    HEAP8[($0 + 2 | 0) >> 0] = $11 >>> 8 | 0;
    HEAP8[($0 + 3 | 0) >> 0] = HEAPU8[($1 + 3 | 0) >> 0] | 0;
    i64toi32_i32$2 = $1 + 4 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $16 = i64toi32_i32$0;
    i64toi32_i32$0 = $0 + 4 | 0;
    HEAP32[i64toi32_i32$0 >> 2] = $16;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$2 = $1 + 12 | 0;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $21 = i64toi32_i32$1;
    i64toi32_i32$1 = $0 + 12 | 0;
    HEAP32[i64toi32_i32$1 >> 2] = $21;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$2 = $1 + 20 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $26 = i64toi32_i32$0;
    i64toi32_i32$0 = $0 + 20 | 0;
    HEAP32[i64toi32_i32$0 >> 2] = $26;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$2 = $1 + 25 | 0;
    i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    $31 = i64toi32_i32$1;
    i64toi32_i32$1 = $0 + 25 | 0;
    $10 = $31;
    HEAP8[i64toi32_i32$1 >> 0] = $10;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $10 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $10 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $10 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    $1 = 0;
    break label$1;
   }
   HEAP8[($0 + 4 | 0) >> 0] = 0;
   i64toi32_i32$2 = $1;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
   $36 = i64toi32_i32$0;
   i64toi32_i32$0 = $0 + 8 | 0;
   HEAP32[i64toi32_i32$0 >> 2] = $36;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   $1 = 1;
  }
  HEAP8[$0 >> 0] = $1;
 }
 
 function _ZN4gstd6common10primitives7ActorId9from_bs5817h05627def41de7e49E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $9 = 0, i64toi32_i32$0 = 0, $2 = 0, $6 = 0, $8 = 0, $7 = 0, $12 = 0, $13 = 0, $11 = 0, $10 = 0, $4 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $5 = 0, $3 = 0, $14 = 0, $231 = 0, $236 = 0, $241 = 0, $246 = 0;
  $2 = __stack_pointer - 64 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $4 = HEAP32[$1 >> 2] | 0;
  $5 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
        if ($6) {
         break label$6
        }
        $7 = 1;
        $6 = 0;
        $8 = 0;
        break label$5;
       }
       HEAP32[($2 + 56 | 0) >> 2] = 0;
       $1 = $6 >>> 0 > 8 >>> 0 ? $6 : 8;
       _ZN5alloc7raw_vec11finish_grow17hbc642ca51e180200E($2 + 40 | 0 | 0, ($1 ^ -1 | 0) >>> 31 | 0 | 0, $1 | 0, $2 + 52 | 0 | 0);
       $9 = HEAP32[($2 + 44 | 0) >> 2] | 0;
       label$7 : {
        label$8 : {
         if (HEAP32[($2 + 40 | 0) >> 2] | 0) {
          break label$8
         }
         $7 = $9;
         $5 = $1;
         break label$7;
        }
        $7 = 1;
        if (($9 | 0) == (-2147483647 | 0)) {
         break label$7
        }
        label$9 : {
         if (!$9) {
          break label$9
         }
         _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
         wasm2js_trap();
        }
        _ZN5alloc7raw_vec17capacity_overflow17h7412131034ec2d8eE();
        wasm2js_trap();
       }
       $1 = $7;
       label$10 : {
        if (($6 | 0) == (1 | 0)) {
         break label$10
        }
        $1 = $6 + -1 | 0;
        $1 = (memset($7 | 0, 0 | 0, $1 | 0) | 0) + $1 | 0;
       }
       $10 = 0;
       HEAP8[$1 >> 0] = 0;
       $11 = $4 + $6 | 0;
       $8 = 0;
       $12 = $4;
       label$11 : while (1) {
        $1 = HEAP8[$12 >> 0] | 0;
        if (($1 | 0) < (0 | 0)) {
         break label$4
        }
        $9 = HEAPU8[(($1 & 255 | 0) + 1048864 | 0) >> 0] | 0;
        if (($9 | 0) == (255 | 0)) {
         break label$4
        }
        _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h8dc5eb9b1b414db1E($2 + 32 | 0 | 0, $8 | 0, $7 | 0, $6 | 0);
        label$12 : {
         $13 = HEAP32[($2 + 36 | 0) >> 2] | 0;
         if (!$13) {
          break label$12
         }
         $1 = HEAP32[($2 + 32 | 0) >> 2] | 0;
         label$13 : while (1) {
          $9 = Math_imul(HEAPU8[$1 >> 0] | 0, 58) + $9 | 0;
          HEAP8[$1 >> 0] = $9;
          $1 = $1 + 1 | 0;
          $9 = $9 >>> 8 | 0;
          $13 = $13 + -1 | 0;
          if ($13) {
           continue label$13
          }
          break label$13;
         };
        }
        label$14 : {
         if (!$9) {
          break label$14
         }
         if ($8 >>> 0 >= $6 >>> 0) {
          break label$4
         }
         HEAP8[($7 + $8 | 0) >> 0] = $9;
         $8 = $8 + 1 | 0;
        }
        $12 = $12 + 1 | 0;
        if (($12 | 0) != ($11 | 0)) {
         continue label$11
        }
        break label$11;
       };
       if (!$6) {
        break label$5
       }
       $13 = $7 + $8 | 0;
       $9 = $8 - ($8 >>> 0 > $6 >>> 0 ? $8 : $6) | 0;
       $1 = 0;
       label$15 : {
        label$16 : while (1) {
         if ((HEAPU8[($4 + $1 | 0) >> 0] | 0 | 0) != (49 | 0)) {
          break label$15
         }
         label$17 : {
          if ($9 + $1 | 0) {
           break label$17
          }
          $10 = 0;
          break label$4;
         }
         HEAP8[($13 + $1 | 0) >> 0] = 0;
         $1 = $1 + 1 | 0;
         if (($6 | 0) != ($1 | 0)) {
          continue label$16
         }
         break label$16;
        };
       }
       $8 = $8 + $1 | 0;
      }
      _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h8dc5eb9b1b414db1E($2 + 24 | 0 | 0, $8 | 0, $7 | 0, $6 | 0);
      $12 = HEAP32[($2 + 28 | 0) >> 2] | 0;
      $9 = $12 >>> 1 | 0;
      $11 = HEAP32[($2 + 24 | 0) >> 2] | 0;
      _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h8dc5eb9b1b414db1E($2 + 16 | 0 | 0, $9 | 0, $11 | 0, $9 | 0);
      $13 = HEAP32[($2 + 20 | 0) >> 2] | 0;
      $1 = HEAP32[($2 + 16 | 0) >> 2] | 0;
      _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h8dc5eb9b1b414db1E($2 + 8 | 0 | 0, $9 | 0, ($11 + $12 | 0) - $9 | 0 | 0, $9 | 0);
      label$18 : {
       if ($12 >>> 0 < 2 >>> 0) {
        break label$18
       }
       $14 = (HEAP32[($2 + 8 | 0) >> 2] | 0) + -1 | 0;
       $10 = ($9 + -1 | 0) >>> 0 < (HEAP32[($2 + 12 | 0) >> 2] | 0) >>> 0;
       label$19 : while (1) {
        if (!$13) {
         break label$3
        }
        if (!$10) {
         break label$3
        }
        $12 = HEAPU8[$1 >> 0] | 0;
        $11 = $14 + $9 | 0;
        HEAP8[$1 >> 0] = HEAPU8[$11 >> 0] | 0;
        HEAP8[$11 >> 0] = $12;
        $1 = $1 + 1 | 0;
        $13 = $13 + -1 | 0;
        $9 = $9 + -1 | 0;
        if ($9) {
         continue label$19
        }
        break label$19;
       };
      }
      $6 = $6 >>> 0 < $8 >>> 0 ? $6 : $8;
      $10 = 1;
     }
     _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($4 | 0, $3 | 0);
     if ($10) {
      break label$2
     }
     _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($7 | 0, $5 | 0);
     HEAP32[($0 + 12 | 0) >> 2] = 29;
     HEAP32[($0 + 8 | 0) >> 2] = 1049074;
     HEAP8[($0 + 4 | 0) >> 0] = 2;
     HEAP8[$0 >> 0] = 1;
     break label$1;
    }
    _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
    wasm2js_trap();
   }
   label$20 : {
    label$21 : {
     if ($6 >>> 0 < 35 >>> 0) {
      break label$21
     }
     $1 = ($6 + $7 | 0) + -34 | 0;
     i64toi32_i32$2 = $1;
     i64toi32_i32$0 = HEAPU8[$1 >> 0] | 0 | ((HEAPU8[($1 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($1 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($1 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[($1 + 4 | 0) >> 0] | 0 | ((HEAPU8[($1 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($1 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($1 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $231 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     $22 = $231;
     HEAP8[($0 + 1 | 0) >> 0] = $22;
     HEAP8[($0 + 2 | 0) >> 0] = $22 >>> 8 | 0;
     HEAP8[($0 + 3 | 0) >> 0] = $22 >>> 16 | 0;
     HEAP8[($0 + 4 | 0) >> 0] = $22 >>> 24 | 0;
     HEAP8[($0 + 5 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[($0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[($0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[($0 + 8 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 24 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $236 = i64toi32_i32$1;
     i64toi32_i32$1 = $0 + 25 | 0;
     $23 = $236;
     HEAP8[i64toi32_i32$1 >> 0] = $23;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $23 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $23 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $23 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 16 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $241 = i64toi32_i32$0;
     i64toi32_i32$0 = $0 + 17 | 0;
     $24 = $241;
     HEAP8[i64toi32_i32$0 >> 0] = $24;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $24 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $24 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $24 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 8 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $246 = i64toi32_i32$1;
     i64toi32_i32$1 = $0 + 9 | 0;
     $25 = $246;
     HEAP8[i64toi32_i32$1 >> 0] = $25;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $25 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $25 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $25 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     $1 = 0;
     break label$20;
    }
    HEAP8[($0 + 4 | 0) >> 0] = 2;
    HEAP32[($0 + 12 | 0) >> 2] = 17;
    HEAP32[($0 + 8 | 0) >> 2] = 1049057;
    $1 = 1;
   }
   HEAP8[$0 >> 0] = $1;
   _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($7 | 0, $5 | 0);
  }
  __stack_pointer = $2 + 64 | 0;
 }
 
 function _ZN5alloc7raw_vec11finish_grow17hbc642ca51e180200E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $8 = 0, $4 = 0, $5 = 0, $10 = 0, $6 = 0, $9 = 0, $11 = 0, $7 = 0, $12 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          if (!$1) {
           break label$8
          }
          if (($2 | 0) <= (-1 | 0)) {
           break label$7
          }
          label$9 : {
           if (!(HEAP32[($3 + 4 | 0) >> 2] | 0)) {
            break label$9
           }
           label$10 : {
            if (HEAP32[($3 + 8 | 0) >> 2] | 0) {
             break label$10
            }
            _ZN5alloc5alloc6Global10alloc_impl17h1061fb139e87d1dcE_364($4 + 8 | 0 | 0, $2 | 0, 0 | 0);
            $3 = HEAP32[($4 + 12 | 0) >> 2] | 0;
            $1 = HEAP32[($4 + 8 | 0) >> 2] | 0;
            break label$2;
           }
           label$11 : {
            label$12 : {
             label$13 : {
              label$14 : {
               $5 = HEAP32[$3 >> 2] | 0;
               if ($5 >>> 0 < 1049440 >>> 0) {
                break label$14
               }
               if ($5 >>> 0 <= 1049616 >>> 0) {
                break label$13
               }
              }
              $6 = $5 + -4 | 0;
              $7 = HEAP32[$6 >> 2] | 0;
              $8 = $7 & -8 | 0;
              $3 = $2 >>> 0 < 13 >>> 0 ? 16 : ($2 + 11 | 0) & -8 | 0;
              if (($8 | 0) == ($3 | 0)) {
               break label$3
              }
              $9 = $5 + -8 | 0;
              if ($8 >>> 0 > $3 >>> 0) {
               break label$6
              }
              $1 = 0;
              $10 = $9 + $8 | 0;
              $11 = HEAP32[($10 + 4 | 0) >> 2] | 0;
              $12 = $11 & -8 | 0;
              if ((($11 & 2 | 0 ? 0 : $12) + $8 | 0) >>> 0 >= $3 >>> 0) {
               break label$12
              }
              $3 = $2;
              $6 = _ZN8dlmalloc8dlmalloc8Dlmalloc15malloc_internal17h5c680ad526f968a5E($2 | 0, 0 | 0) | 0;
              if (!$6) {
               break label$2
              }
              $1 = memcpy($6 | 0, $5 | 0, $8 + -4 | 0 | 0) | 0;
              _ZN8dlmalloc8dlmalloc8Dlmalloc10free_chunk17h9bdf6c6f505b06cfE(_ZN8dlmalloc8dlmalloc8Dlmalloc17extend_free_chunk17h24ba8ac44e2cb300E($9 | 0) | 0 | 0);
              $3 = $2;
              break label$2;
             }
             $1 = _ZN8dlmalloc8dlmalloc8Dlmalloc19sbuff_offset_to_idx17h75d47311e07edc6bE($5 - 1049440 | 0 | 0) | 0;
             $3 = (4403336 >>> ($1 << 2 | 0) | 0) & 120 | 0;
             if ($3 >>> 0 < $2 >>> 0) {
              break label$11
             }
             break label$3;
            }
            if (($10 | 0) == (HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0)) {
             break label$4
            }
            if (($10 | 0) != (HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0)) {
             break label$5
            }
            break label$4;
           }
           (wasm2js_i32$0 = 0, wasm2js_i32$1 = (HEAPU8[(0 + 1049616 | 0) >> 0] | 0) & (__wasm_rotl_i32(-2 | 0, $1 & 7 | 0 | 0) | 0) | 0), HEAP8[(wasm2js_i32$0 + 1049616 | 0) >> 0] = wasm2js_i32$1;
           $1 = _ZN8dlmalloc8dlmalloc8Dlmalloc15malloc_internal17h5c680ad526f968a5E($2 | 0, 1 | 0) | 0;
           memcpy($1 | 0, $5 | 0, $3 | 0) | 0;
           $3 = $2;
           break label$2;
          }
          _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_365($4 | 0, $2 | 0);
          $3 = HEAP32[($4 + 4 | 0) >> 2] | 0;
          $1 = HEAP32[$4 >> 2] | 0;
          break label$2;
         }
         HEAP32[($0 + 4 | 0) >> 2] = 0;
         HEAP32[($0 + 8 | 0) >> 2] = $2;
         $1 = 1;
         break label$1;
        }
        HEAP32[($0 + 4 | 0) >> 2] = 0;
        $1 = 1;
        break label$1;
       }
       _ZN8dlmalloc8dlmalloc8Dlmalloc10crop_chunk17h09d54a78d6ceecd3E($9 | 0, $9 | 0, $3 | 0, 0 | 0) | 0;
       $1 = $9 + ((HEAP32[$6 >> 2] | 0) & -8 | 0) | 0;
       _ZN8dlmalloc8dlmalloc8Dlmalloc17extend_free_chunk17h24ba8ac44e2cb300E($1 | 0) | 0;
       _ZN8dlmalloc8dlmalloc8Dlmalloc10free_chunk17h9bdf6c6f505b06cfE($1 | 0);
       break label$3;
      }
      _ZN8dlmalloc8dlmalloc8Dlmalloc12unlink_chunk17he5e01c5ef9cd5adfE($10 | 0);
     }
     label$15 : {
      label$16 : {
       $1 = $12 + ($8 - $3 | 0) | 0;
       if (!$1) {
        break label$16
       }
       $11 = $10 + ((HEAP32[($10 + 4 | 0) >> 2] | 0) & -8 | 0) | 0;
       $8 = $11 - $1 | 0;
       HEAP32[($8 + 4 | 0) >> 2] = $1 | 1 | 0;
       HEAP32[$11 >> 2] = $1;
       if ($1 >>> 0 > 15 >>> 0) {
        break label$15
       }
      }
      $8 = 0;
      $1 = 0;
     }
     $7 = $7 & 1 | 0;
     label$17 : {
      label$18 : {
       label$19 : {
        if (($10 | 0) == (HEAP32[(0 + 1050032 | 0) >> 2] | 0 | 0)) {
         break label$19
        }
        if (($10 | 0) == (HEAP32[(0 + 1050028 | 0) >> 2] | 0 | 0)) {
         break label$18
        }
        if ($1 >>> 0 <= 15 >>> 0) {
         break label$17
        }
        _ZN8dlmalloc8dlmalloc8Dlmalloc12insert_chunk17h54380af4d8b039feE($8 | 0, $1 | 0);
        break label$17;
       }
       HEAP32[(0 + 1050024 | 0) >> 2] = $1;
       HEAP32[(0 + 1050032 | 0) >> 2] = $8;
       break label$17;
      }
      HEAP32[(0 + 1050020 | 0) >> 2] = $1;
      HEAP32[(0 + 1050028 | 0) >> 2] = $8;
     }
     HEAP32[$6 >> 2] = $3 | $7 | 0 | 2 | 0;
     $1 = $9 + $3 | 0;
     HEAP32[($1 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0 | 1 | 0;
    }
    $3 = $2;
    $1 = $5;
   }
   label$20 : {
    if (!$1) {
     break label$20
    }
    HEAP32[($0 + 4 | 0) >> 2] = $1;
    HEAP32[($0 + 8 | 0) >> 2] = $3;
    $1 = 0;
    break label$1;
   }
   $1 = 1;
   HEAP32[($0 + 4 | 0) >> 2] = 1;
   HEAP32[($0 + 8 | 0) >> 2] = $2;
  }
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $4 + 16 | 0;
 }
 
 function _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if (!$1) {
    break label$1
   }
   __rust_dealloc($0 | 0);
  }
 }
 
 function _ZN4gstd4exec5basic10program_id17had36370ac3ee1338E($0) {
  $0 = $0 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $1 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $22 = 0, $26 = 0, $30 = 0, $33 = 0;
  $1 = __stack_pointer - 32 | 0;
  __stack_pointer = $1;
  $2 = $1 + 24 | 0;
  i64toi32_i32$1 = $2;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $3 = $1 + 16 | 0;
  i64toi32_i32$1 = $3;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $4 = $1 + 8 | 0;
  i64toi32_i32$1 = $4;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  gr_program_id(i64toi32_i32$1 | 0);
  i64toi32_i32$2 = $2;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $22 = i64toi32_i32$0;
  i64toi32_i32$0 = $0 + 24 | 0;
  $12 = $22;
  HEAP8[i64toi32_i32$0 >> 0] = $12;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $12 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $12 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $12 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $3;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $26 = i64toi32_i32$1;
  i64toi32_i32$1 = $0 + 16 | 0;
  $13 = $26;
  HEAP8[i64toi32_i32$1 >> 0] = $13;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $13 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $13 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $13 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$2 = $4;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $30 = i64toi32_i32$0;
  i64toi32_i32$0 = $0 + 8 | 0;
  $14 = $30;
  HEAP8[i64toi32_i32$0 >> 0] = $14;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $14 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $14 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $14 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $33 = i64toi32_i32$1;
  i64toi32_i32$1 = $0;
  $15 = $33;
  HEAP8[i64toi32_i32$1 >> 0] = $15;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $15 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $15 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $15 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  __stack_pointer = i64toi32_i32$2 + 32 | 0;
 }
 
 function _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0) {
  $0 = $0 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $1 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $22 = 0, $26 = 0, $30 = 0, $33 = 0;
  $1 = __stack_pointer - 32 | 0;
  __stack_pointer = $1;
  $2 = $1 + 24 | 0;
  i64toi32_i32$1 = $2;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $3 = $1 + 16 | 0;
  i64toi32_i32$1 = $3;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $4 = $1 + 8 | 0;
  i64toi32_i32$1 = $4;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  gr_source(i64toi32_i32$1 | 0);
  i64toi32_i32$2 = $2;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $22 = i64toi32_i32$0;
  i64toi32_i32$0 = $0 + 24 | 0;
  $12 = $22;
  HEAP8[i64toi32_i32$0 >> 0] = $12;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $12 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $12 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $12 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $3;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $26 = i64toi32_i32$1;
  i64toi32_i32$1 = $0 + 16 | 0;
  $13 = $26;
  HEAP8[i64toi32_i32$1 >> 0] = $13;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $13 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $13 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $13 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$2 = $4;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $30 = i64toi32_i32$0;
  i64toi32_i32$0 = $0 + 8 | 0;
  $14 = $30;
  HEAP8[i64toi32_i32$0 >> 0] = $14;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $14 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $14 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $14 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $33 = i64toi32_i32$1;
  i64toi32_i32$1 = $0;
  $15 = $33;
  HEAP8[i64toi32_i32$1 >> 0] = $15;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $15 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $15 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $15 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  __stack_pointer = i64toi32_i32$2 + 32 | 0;
 }
 
 function _ZN4gstd3msg5basic5value17haa09ba24469d684fE($0) {
  $0 = $0 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $1 = 0, $2 = 0, $3 = 0, $3$hi = 0, $16 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  $2 = $1 + 8 | 0;
  i64toi32_i32$1 = $2;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $1;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  gr_value(i64toi32_i32$1 | 0);
  i64toi32_i32$0 = HEAP32[i64toi32_i32$1 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
  $3 = i64toi32_i32$0;
  $3$hi = i64toi32_i32$1;
  i64toi32_i32$1 = HEAP32[$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($2 + 4 | 0) >> 2] | 0;
  $16 = i64toi32_i32$1;
  i64toi32_i32$1 = $0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $16;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $3$hi;
  HEAP32[i64toi32_i32$1 >> 2] = $3;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _ZN18parity_scale_codec5codec5Input9read_byte17h755e02852f30a87bE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  label$1 : {
   label$2 : {
    $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if ($2) {
     break label$2
    }
    $1 = 0;
    break label$1;
   }
   HEAP32[($1 + 4 | 0) >> 2] = $2 + -1 | 0;
   $3 = HEAP32[$1 >> 2] | 0;
   HEAP32[$1 >> 2] = $3 + 1 | 0;
   $1 = HEAPU8[$3 >> 0] | 0;
  }
  HEAP8[($0 + 1 | 0) >> 0] = $1;
  HEAP8[$0 >> 0] = !$2;
 }
 
 function _ZN102_$LT$parity_scale_codec__compact__PrefixInput$LT$T$GT$$u20$as$u20$parity_scale_codec__codec__Input$GT$4read17hf1e46c997a924fc8E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0;
  $3 = HEAPU8[($0 + 4 | 0) >> 0] | 0;
  HEAP8[($0 + 4 | 0) >> 0] = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if ($3) {
      break label$3
     }
     $3 = 1;
     $0 = HEAP32[$0 >> 2] | 0;
     $4 = HEAP32[($0 + 4 | 0) >> 2] | 0;
     if ($4 >>> 0 < $2 >>> 0) {
      break label$1
     }
     $3 = HEAP32[$0 >> 2] | 0;
     memcpy($1 | 0, $3 | 0, $2 | 0) | 0;
     HEAP32[($0 + 4 | 0) >> 2] = $4 - $2 | 0;
     HEAP32[$0 >> 2] = $3 + $2 | 0;
     break label$2;
    }
    HEAP8[$1 >> 0] = HEAPU8[($0 + 5 | 0) >> 0] | 0;
    $3 = 1;
    $0 = HEAP32[$0 >> 2] | 0;
    $4 = HEAP32[($0 + 4 | 0) >> 2] | 0;
    $2 = $2 + -1 | 0;
    if ($4 >>> 0 < $2 >>> 0) {
     break label$1
    }
    $3 = HEAP32[$0 >> 2] | 0;
    memcpy($1 + 1 | 0 | 0, $3 | 0, $2 | 0) | 0;
    HEAP32[($0 + 4 | 0) >> 2] = $4 - $2 | 0;
    HEAP32[$0 >> 2] = $3 + $2 | 0;
   }
   $3 = 0;
  }
  return $3 | 0;
 }
 
 function _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   label$2 : {
    if ($1 >>> 0 > 63 >>> 0) {
     break label$2
    }
    $1 = (HEAP32[$0 >> 2] | 0) + 1 | 0;
    break label$1;
   }
   label$3 : {
    if ($1 >>> 0 > 16383 >>> 0) {
     break label$3
    }
    $1 = (HEAP32[$0 >> 2] | 0) + 2 | 0;
    break label$1;
   }
   $2 = HEAP32[$0 >> 2] | 0;
   label$4 : {
    if ($1 >>> 0 > 1073741823 >>> 0) {
     break label$4
    }
    $1 = $2 + 4 | 0;
    break label$1;
   }
   $1 = $2 + 5 | 0;
  }
  HEAP32[$0 >> 2] = $1;
 }
 
 function _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $2 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     if ($2) {
      break label$3
     }
     $2 = 0;
     break label$2;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $2 + -1 | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    label$4 : {
     label$5 : {
      label$6 : {
       $2 = HEAP32[$1 >> 2] | 0;
       if (!$2) {
        break label$6
       }
       if (!$3) {
        break label$5
       }
      }
      if (!$2) {
       break label$1
      }
      $4 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      $2 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      break label$4;
     }
     $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     label$7 : {
      $2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      if (!$2) {
       break label$7
      }
      label$8 : while (1) {
       $3 = HEAP32[($3 + 492 | 0) >> 2] | 0;
       $2 = $2 + -1 | 0;
       if ($2) {
        continue label$8
       }
       break label$8;
      };
     }
     HEAP32[($1 + 8 | 0) >> 2] = 0;
     HEAP32[($1 + 12 | 0) >> 2] = 0;
     HEAP32[($1 + 4 | 0) >> 2] = $3;
     HEAP32[$1 >> 2] = 1;
     $4 = 0;
     $2 = 0;
    }
    label$9 : {
     label$10 : {
      if ($4 >>> 0 >= (HEAPU16[($3 + 490 | 0) >> 1] | 0) >>> 0) {
       break label$10
      }
      $5 = $3;
      break label$9;
     }
     label$11 : while (1) {
      $5 = HEAP32[($3 + 352 | 0) >> 2] | 0;
      if (!$5) {
       break label$1
      }
      $2 = $2 + 1 | 0;
      $4 = HEAPU16[($3 + 488 | 0) >> 1] | 0;
      $3 = $5;
      if ($4 >>> 0 >= (HEAPU16[($3 + 490 | 0) >> 1] | 0) >>> 0) {
       continue label$11
      }
      break label$11;
     };
    }
    $3 = $4 + 1 | 0;
    label$12 : {
     label$13 : {
      if ($2) {
       break label$13
      }
      $6 = $5;
      break label$12;
     }
     $3 = ($5 + ($3 << 2 | 0) | 0) + 492 | 0;
     label$14 : while (1) {
      $6 = HEAP32[$3 >> 2] | 0;
      $3 = $6 + 492 | 0;
      $2 = $2 + -1 | 0;
      if ($2) {
       continue label$14
      }
      break label$14;
     };
     $3 = 0;
    }
    HEAP32[($1 + 12 | 0) >> 2] = $3;
    HEAP32[($1 + 8 | 0) >> 2] = 0;
    HEAP32[($1 + 4 | 0) >> 2] = $6;
    $2 = $5 + ($4 << 5 | 0) | 0;
    $3 = ($5 + Math_imul($4, 12) | 0) + 356 | 0;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $3;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h4a236312a7872142E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $2 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     if ($2) {
      break label$3
     }
     $2 = 0;
     break label$2;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $2 + -1 | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    label$4 : {
     label$5 : {
      label$6 : {
       $2 = HEAP32[$1 >> 2] | 0;
       if (!$2) {
        break label$6
       }
       if (!$3) {
        break label$5
       }
      }
      if (!$2) {
       break label$1
      }
      $4 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      $2 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      break label$4;
     }
     $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     label$7 : {
      $2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      if (!$2) {
       break label$7
      }
      label$8 : while (1) {
       $3 = HEAP32[($3 + 1944 | 0) >> 2] | 0;
       $2 = $2 + -1 | 0;
       if ($2) {
        continue label$8
       }
       break label$8;
      };
     }
     HEAP32[($1 + 8 | 0) >> 2] = 0;
     HEAP32[($1 + 12 | 0) >> 2] = 0;
     HEAP32[($1 + 4 | 0) >> 2] = $3;
     HEAP32[$1 >> 2] = 1;
     $4 = 0;
     $2 = 0;
    }
    label$9 : {
     label$10 : {
      if ($4 >>> 0 >= (HEAPU16[($3 + 1942 | 0) >> 1] | 0) >>> 0) {
       break label$10
      }
      $5 = $3;
      break label$9;
     }
     label$11 : while (1) {
      $5 = HEAP32[($3 + 1936 | 0) >> 2] | 0;
      if (!$5) {
       break label$1
      }
      $2 = $2 + 1 | 0;
      $4 = HEAPU16[($3 + 1940 | 0) >> 1] | 0;
      $3 = $5;
      if ($4 >>> 0 >= (HEAPU16[($3 + 1942 | 0) >> 1] | 0) >>> 0) {
       continue label$11
      }
      break label$11;
     };
    }
    $3 = $4 + 1 | 0;
    label$12 : {
     label$13 : {
      if ($2) {
       break label$13
      }
      $6 = $5;
      break label$12;
     }
     $3 = ($5 + ($3 << 2 | 0) | 0) + 1944 | 0;
     label$14 : while (1) {
      $6 = HEAP32[$3 >> 2] | 0;
      $3 = $6 + 1944 | 0;
      $2 = $2 + -1 | 0;
      if ($2) {
       continue label$14
      }
      break label$14;
     };
     $3 = 0;
    }
    HEAP32[($1 + 12 | 0) >> 2] = $3;
    HEAP32[($1 + 8 | 0) >> 2] = 0;
    HEAP32[($1 + 4 | 0) >> 2] = $6;
    $2 = $5 + ($4 << 3 | 0) | 0;
    $3 = ($5 + Math_imul($4, 168) | 0) + 88 | 0;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $3;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17ha70389ffd682916fE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) + 49 | 0;
  _ZN65_$LT$$u5b$T$u5d$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2729f9f522c5beddE(HEAP32[($0 + 104 | 0) >> 2] | 0 | 0, $1 | 0);
  HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) + 48 | 0;
  _ZN65_$LT$$u5b$T$u5d$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2729f9f522c5beddE(HEAP32[($0 + 116 | 0) >> 2] | 0 | 0, $1 | 0);
  HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) + 1 | 0;
  _ZN65_$LT$$u5b$T$u5d$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2729f9f522c5beddE(HEAP32[($0 + 128 | 0) >> 2] | 0 | 0, $1 | 0);
  HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) + 1 | 0;
  _ZN65_$LT$$u5b$T$u5d$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2729f9f522c5beddE(HEAP32[($0 + 140 | 0) >> 2] | 0 | 0, $1 | 0);
  _ZN65_$LT$$u5b$T$u5d$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2729f9f522c5beddE(HEAP32[($0 + 152 | 0) >> 2] | 0 | 0, $1 | 0);
  HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) + 2 | 0;
 }
 
 function _ZN65_$LT$$u5b$T$u5d$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2729f9f522c5beddE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($1 | 0, $0 | 0);
  HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) + $0 | 0;
 }
 
 function _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $3 = 0;
  label$1 : {
   if ($1 >>> 0 > 63 >>> 0) {
    break label$1
   }
   $2 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   HEAP8[((HEAP32[$0 >> 2] | 0) + $2 | 0) >> 0] = $1 << 2 | 0;
   HEAP32[($0 + 8 | 0) >> 2] = $2 + 1 | 0;
   return;
  }
  label$2 : {
   if ($1 >>> 0 > 16383 >>> 0) {
    break label$2
   }
   $2 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   $7 = (HEAP32[$0 >> 2] | 0) + $2 | 0;
   $8 = $1 << 2 | 0 | 1 | 0;
   HEAP8[$7 >> 0] = $8;
   HEAP8[($7 + 1 | 0) >> 0] = $8 >>> 8 | 0;
   HEAP32[($0 + 8 | 0) >> 2] = $2 + 2 | 0;
   return;
  }
  label$3 : {
   if ($1 >>> 0 > 1073741823 >>> 0) {
    break label$3
   }
   $2 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   $4 = (HEAP32[$0 >> 2] | 0) + $2 | 0;
   $5 = $1 << 2 | 0 | 2 | 0;
   HEAP8[$4 >> 0] = $5;
   HEAP8[($4 + 1 | 0) >> 0] = $5 >>> 8 | 0;
   HEAP8[($4 + 2 | 0) >> 0] = $5 >>> 16 | 0;
   HEAP8[($4 + 3 | 0) >> 0] = $5 >>> 24 | 0;
   HEAP32[($0 + 8 | 0) >> 2] = $2 + 4 | 0;
   return;
  }
  $2 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  $3 = (HEAP32[$0 >> 2] | 0) + $2 | 0;
  HEAP8[$3 >> 0] = 3;
  HEAP32[($0 + 8 | 0) >> 2] = $2 + 5 | 0;
  $6 = $3 + 1 | 0;
  HEAP8[$6 >> 0] = $1;
  HEAP8[($6 + 1 | 0) >> 0] = $1 >>> 8 | 0;
  HEAP8[($6 + 2 | 0) >> 0] = $1 >>> 16 | 0;
  HEAP8[($6 + 3 | 0) >> 0] = $1 >>> 24 | 0;
 }
 
 function _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h742bc81e9856f1bfE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $2 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     if ($2) {
      break label$3
     }
     $2 = 0;
     break label$2;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $2 + -1 | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    label$4 : {
     label$5 : {
      label$6 : {
       $2 = HEAP32[$1 >> 2] | 0;
       if (!$2) {
        break label$6
       }
       if (!$3) {
        break label$5
       }
      }
      if (!$2) {
       break label$1
      }
      $4 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      $2 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      break label$4;
     }
     $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     label$7 : {
      $2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      if (!$2) {
       break label$7
      }
      label$8 : while (1) {
       $3 = HEAP32[($3 + 320 | 0) >> 2] | 0;
       $2 = $2 + -1 | 0;
       if ($2) {
        continue label$8
       }
       break label$8;
      };
     }
     HEAP32[($1 + 8 | 0) >> 2] = 0;
     HEAP32[($1 + 12 | 0) >> 2] = 0;
     HEAP32[($1 + 4 | 0) >> 2] = $3;
     HEAP32[$1 >> 2] = 1;
     $4 = 0;
     $2 = 0;
    }
    label$9 : {
     label$10 : {
      if ($4 >>> 0 >= (HEAPU16[($3 + 314 | 0) >> 1] | 0) >>> 0) {
       break label$10
      }
      $5 = $3;
      break label$9;
     }
     label$11 : while (1) {
      $5 = HEAP32[($3 + 176 | 0) >> 2] | 0;
      if (!$5) {
       break label$1
      }
      $2 = $2 + 1 | 0;
      $4 = HEAPU16[($3 + 312 | 0) >> 1] | 0;
      $3 = $5;
      if ($4 >>> 0 >= (HEAPU16[($3 + 314 | 0) >> 1] | 0) >>> 0) {
       continue label$11
      }
      break label$11;
     };
    }
    $3 = $4 + 1 | 0;
    label$12 : {
     label$13 : {
      if ($2) {
       break label$13
      }
      $6 = $5;
      break label$12;
     }
     $3 = ($5 + ($3 << 2 | 0) | 0) + 320 | 0;
     label$14 : while (1) {
      $6 = HEAP32[$3 >> 2] | 0;
      $3 = $6 + 320 | 0;
      $2 = $2 + -1 | 0;
      if ($2) {
       continue label$14
      }
      break label$14;
     };
     $3 = 0;
    }
    HEAP32[($1 + 12 | 0) >> 2] = $3;
    HEAP32[($1 + 8 | 0) >> 2] = 0;
    HEAP32[($1 + 4 | 0) >> 2] = $6;
    $2 = $5 + ($4 << 4 | 0) | 0;
    $3 = ($5 + Math_imul($4, 12) | 0) + 180 | 0;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $3;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17hd7dfe373379990f8E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0, $5 = 0, $4 = 0, $6 = 0, i64toi32_i32$1 = 0;
  $2 = __stack_pointer - 32 | 0;
  __stack_pointer = $2;
  label$1 : {
   label$2 : {
    label$3 : {
     $3 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     if ($3) {
      break label$3
     }
     $3 = 0;
     break label$2;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $3 + -1 | 0;
    $4 = $1 + 4 | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    label$4 : {
     label$5 : {
      label$6 : {
       $5 = HEAP32[$1 >> 2] | 0;
       if (!$5) {
        break label$6
       }
       if (!$3) {
        break label$5
       }
      }
      if ($5) {
       break label$4
      }
      break label$1;
     }
     _ZN5alloc11collections5btree8navigate142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$15first_leaf_edge17hb73c0707f54fba73E($4 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($1 + 12 | 0) >> 2] | 0 | 0);
     HEAP32[$1 >> 2] = 1;
     $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    }
    $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
    label$7 : {
     label$8 : {
      $5 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      if ($5 >>> 0 >= (HEAPU16[($3 + 534 | 0) >> 1] | 0) >>> 0) {
       break label$8
      }
      $1 = $3;
      break label$7;
     }
     label$9 : while (1) {
      $1 = HEAP32[($3 + 528 | 0) >> 2] | 0;
      if (!$1) {
       break label$1
      }
      $6 = $6 + 1 | 0;
      $5 = HEAPU16[($3 + 532 | 0) >> 1] | 0;
      $3 = $1;
      if ($5 >>> 0 >= (HEAPU16[($1 + 534 | 0) >> 1] | 0) >>> 0) {
       continue label$9
      }
      break label$9;
     };
    }
    $3 = $5 + 1 | 0;
    label$10 : {
     label$11 : {
      if ($6) {
       break label$11
      }
      HEAP32[($2 + 20 | 0) >> 2] = $3;
      HEAP32[($2 + 16 | 0) >> 2] = 0;
      HEAP32[($2 + 12 | 0) >> 2] = $1;
      break label$10;
     }
     _ZN5alloc11collections5btree8navigate142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$15first_leaf_edge17hb73c0707f54fba73E($2 + 12 | 0 | 0, HEAP32[(($1 + ($3 << 2 | 0) | 0) + 536 | 0) >> 2] | 0 | 0, $6 + -1 | 0 | 0);
    }
    i64toi32_i32$1 = HEAP32[($2 + 16 | 0) >> 2] | 0;
    HEAP32[$4 >> 2] = HEAP32[($2 + 12 | 0) >> 2] | 0;
    HEAP32[($4 + 4 | 0) >> 2] = i64toi32_i32$1;
    HEAP32[($4 + 8 | 0) >> 2] = HEAP32[(($2 + 12 | 0) + 8 | 0) >> 2] | 0;
    $3 = $1 + ($5 << 5 | 0) | 0;
    $1 = ($1 + ($5 << 4 | 0) | 0) + 352 | 0;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1;
   HEAP32[$0 >> 2] = $3;
   __stack_pointer = $2 + 32 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree8navigate142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$15first_leaf_edge17hb73c0707f54fba73E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   label$2 : while (1) {
    $1 = HEAP32[($1 + 536 | 0) >> 2] | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue label$2
    }
    break label$2;
   };
  }
  HEAP32[($0 + 4 | 0) >> 2] = 0;
  HEAP32[($0 + 8 | 0) >> 2] = 0;
  HEAP32[$0 >> 2] = $1;
 }
 
 function _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0097b3777cf64c9cE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0, $5 = 0, $4 = 0, $6 = 0, i64toi32_i32$1 = 0;
  $2 = __stack_pointer - 32 | 0;
  __stack_pointer = $2;
  label$1 : {
   label$2 : {
    label$3 : {
     $3 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     if ($3) {
      break label$3
     }
     $3 = 0;
     break label$2;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $3 + -1 | 0;
    $4 = $1 + 4 | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    label$4 : {
     label$5 : {
      label$6 : {
       $5 = HEAP32[$1 >> 2] | 0;
       if (!$5) {
        break label$6
       }
       if (!$3) {
        break label$5
       }
      }
      if ($5) {
       break label$4
      }
      break label$1;
     }
     _ZN5alloc11collections5btree8navigate142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$15first_leaf_edge17ha9af10d67f3d75c2E($4 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($1 + 12 | 0) >> 2] | 0 | 0);
     HEAP32[$1 >> 2] = 1;
     $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    }
    $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
    label$7 : {
     label$8 : {
      $5 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      if ($5 >>> 0 >= (HEAPU16[($3 + 2030 | 0) >> 1] | 0) >>> 0) {
       break label$8
      }
      $1 = $3;
      break label$7;
     }
     label$9 : while (1) {
      $1 = HEAP32[($3 + 2024 | 0) >> 2] | 0;
      if (!$1) {
       break label$1
      }
      $6 = $6 + 1 | 0;
      $5 = HEAPU16[($3 + 2028 | 0) >> 1] | 0;
      $3 = $1;
      if ($5 >>> 0 >= (HEAPU16[($1 + 2030 | 0) >> 1] | 0) >>> 0) {
       continue label$9
      }
      break label$9;
     };
    }
    $3 = $5 + 1 | 0;
    label$10 : {
     label$11 : {
      if ($6) {
       break label$11
      }
      HEAP32[($2 + 20 | 0) >> 2] = $3;
      HEAP32[($2 + 16 | 0) >> 2] = 0;
      HEAP32[($2 + 12 | 0) >> 2] = $1;
      break label$10;
     }
     _ZN5alloc11collections5btree8navigate142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$15first_leaf_edge17ha9af10d67f3d75c2E($2 + 12 | 0 | 0, HEAP32[(($1 + ($3 << 2 | 0) | 0) + 2032 | 0) >> 2] | 0 | 0, $6 + -1 | 0 | 0);
    }
    i64toi32_i32$1 = HEAP32[($2 + 16 | 0) >> 2] | 0;
    HEAP32[$4 >> 2] = HEAP32[($2 + 12 | 0) >> 2] | 0;
    HEAP32[($4 + 4 | 0) >> 2] = i64toi32_i32$1;
    HEAP32[($4 + 8 | 0) >> 2] = HEAP32[(($2 + 12 | 0) + 8 | 0) >> 2] | 0;
    $3 = $1 + ($5 << 4 | 0) | 0;
    $1 = ($1 + Math_imul($5, 168) | 0) + 176 | 0;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1;
   HEAP32[$0 >> 2] = $3;
   __stack_pointer = $2 + 32 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree8navigate142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$15first_leaf_edge17ha9af10d67f3d75c2E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   label$2 : while (1) {
    $1 = HEAP32[($1 + 2032 | 0) >> 2] | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue label$2
    }
    break label$2;
   };
  }
  HEAP32[($0 + 4 | 0) >> 2] = 0;
  HEAP32[($0 + 8 | 0) >> 2] = 0;
  HEAP32[$0 >> 2] = $1;
 }
 
 function _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17h32945f46ee63bd59E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $3 = 0, $2 = 0, $19 = 0, $21 = 0, $22 = 0, $23 = 0, $25 = 0, $26 = 0, $27 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $34 = 0, $20 = 0, $24 = 0, $28 = 0, $33 = 0, $38 = 0, $43 = 0, $59 = 0, $62 = 0, $70 = 0, $74 = 0, $79 = 0, $83 = 0;
  $2 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  $3 = (HEAP32[$1 >> 2] | 0) + $2 | 0;
  HEAP8[$3 >> 0] = HEAPU8[($0 + 158 | 0) >> 0] | 0;
  HEAP32[($1 + 8 | 0) >> 2] = $2 + 49 | 0;
  i64toi32_i32$2 = $0 + 40 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $20 = i64toi32_i32$0;
  i64toi32_i32$0 = $3 + 9 | 0;
  $19 = $20;
  HEAP8[i64toi32_i32$0 >> 0] = $19;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $19 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $19 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $19 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = HEAP32[($0 + 32 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($0 + 36 | 0) >> 2] | 0;
  $24 = i64toi32_i32$1;
  i64toi32_i32$1 = $3 + 1 | 0;
  $21 = $24;
  HEAP8[i64toi32_i32$1 >> 0] = $21;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $21 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $21 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $21 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$0 = HEAPU8[$0 >> 0] | 0 | ((HEAPU8[($0 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[($0 + 4 | 0) >> 0] | 0 | ((HEAPU8[($0 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $28 = i64toi32_i32$0;
  i64toi32_i32$0 = $3 + 17 | 0;
  $22 = $28;
  HEAP8[i64toi32_i32$0 >> 0] = $22;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $22 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $22 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $22 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $0 + 8 | 0;
  i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $33 = i64toi32_i32$1;
  i64toi32_i32$1 = $3 + 25 | 0;
  $23 = $33;
  HEAP8[i64toi32_i32$1 >> 0] = $23;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $23 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $23 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $23 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$2 = $0 + 16 | 0;
  i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $38 = i64toi32_i32$0;
  i64toi32_i32$0 = $3 + 33 | 0;
  $25 = $38;
  HEAP8[i64toi32_i32$0 >> 0] = $25;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $25 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $25 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $25 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $0 + 24 | 0;
  i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $43 = i64toi32_i32$1;
  i64toi32_i32$1 = $3 + 41 | 0;
  $26 = $43;
  HEAP8[i64toi32_i32$1 >> 0] = $26;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $26 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $26 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $26 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  _ZN55_$LT$X$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2891dafc5e9136e9E(HEAP32[($0 + 96 | 0) >> 2] | 0 | 0, HEAP32[($0 + 104 | 0) >> 2] | 0 | 0, $1 | 0);
  $2 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  $3 = (HEAP32[$1 >> 2] | 0) + $2 | 0;
  i64toi32_i32$2 = $0 + 56 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $59 = i64toi32_i32$0;
  i64toi32_i32$0 = $3;
  $27 = $59;
  HEAP8[(i64toi32_i32$0 + 8 | 0) >> 0] = $27;
  HEAP8[(i64toi32_i32$0 + 9 | 0) >> 0] = $27 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 10 | 0) >> 0] = $27 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 11 | 0) >> 0] = $27 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 12 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 13 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 14 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 15 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 48 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 52 | 0) >> 2] | 0;
  $62 = i64toi32_i32$1;
  i64toi32_i32$1 = $3;
  $29 = $62;
  HEAP8[i64toi32_i32$1 >> 0] = $29;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $29 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $29 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $29 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  HEAP32[($1 + 8 | 0) >> 2] = $2 + 48 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 + 72 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $70 = i64toi32_i32$0;
  i64toi32_i32$0 = $3 + 24 | 0;
  $30 = $70;
  HEAP8[i64toi32_i32$0 >> 0] = $30;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $30 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $30 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $30 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 68 | 0) >> 2] | 0;
  $74 = i64toi32_i32$1;
  i64toi32_i32$1 = $3 + 16 | 0;
  $31 = $74;
  HEAP8[i64toi32_i32$1 >> 0] = $31;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $31 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $31 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $31 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 + 88 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $79 = i64toi32_i32$0;
  i64toi32_i32$0 = $3 + 40 | 0;
  $32 = $79;
  HEAP8[i64toi32_i32$0 >> 0] = $32;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $32 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $32 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $32 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 80 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 84 | 0) >> 2] | 0;
  $83 = i64toi32_i32$1;
  i64toi32_i32$1 = $3 + 32 | 0;
  $34 = $83;
  HEAP8[i64toi32_i32$1 >> 0] = $34;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $34 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $34 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $34 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  _ZN55_$LT$X$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2891dafc5e9136e9E(HEAP32[(i64toi32_i32$2 + 108 | 0) >> 2] | 0 | 0, HEAP32[(i64toi32_i32$2 + 116 | 0) >> 2] | 0 | 0, $1 | 0);
  $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  HEAP8[((HEAP32[$1 >> 2] | 0) + $3 | 0) >> 0] = HEAPU8[(i64toi32_i32$2 + 157 | 0) >> 0] | 0;
  HEAP32[($1 + 8 | 0) >> 2] = $3 + 1 | 0;
  _ZN55_$LT$X$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2891dafc5e9136e9E(HEAP32[(i64toi32_i32$2 + 120 | 0) >> 2] | 0 | 0, HEAP32[(i64toi32_i32$2 + 128 | 0) >> 2] | 0 | 0, $1 | 0);
  $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  HEAP8[((HEAP32[$1 >> 2] | 0) + $3 | 0) >> 0] = HEAPU8[(i64toi32_i32$2 + 159 | 0) >> 0] | 0;
  HEAP32[($1 + 8 | 0) >> 2] = $3 + 1 | 0;
  _ZN55_$LT$X$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2891dafc5e9136e9E(HEAP32[(i64toi32_i32$2 + 132 | 0) >> 2] | 0 | 0, HEAP32[(i64toi32_i32$2 + 140 | 0) >> 2] | 0 | 0, $1 | 0);
  _ZN55_$LT$X$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2891dafc5e9136e9E(HEAP32[(i64toi32_i32$2 + 144 | 0) >> 2] | 0 | 0, HEAP32[(i64toi32_i32$2 + 152 | 0) >> 2] | 0 | 0, $1 | 0);
  $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  $2 = (HEAP32[$1 >> 2] | 0) + $3 | 0;
  HEAP8[$2 >> 0] = HEAPU8[(i64toi32_i32$2 + 156 | 0) >> 0] | 0;
  HEAP32[($1 + 8 | 0) >> 2] = $3 + 2 | 0;
  HEAP8[($2 + 1 | 0) >> 0] = HEAPU8[(i64toi32_i32$2 + 160 | 0) >> 0] | 0;
 }
 
 function _ZN55_$LT$X$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2891dafc5e9136e9E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($2 | 0, $1 | 0);
  $3 = HEAP32[($2 + 8 | 0) >> 2] | 0;
  memcpy((HEAP32[$2 >> 2] | 0) + $3 | 0 | 0, $0 | 0, $1 | 0) | 0;
  HEAP32[($2 + 8 | 0) >> 2] = $3 + $1 | 0;
 }
 
 function _ZN107_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$GT$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17hd0d7ad3117b099a0E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = __stack_pointer - 64 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($1 | 0, $3 | 0);
  $4 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  $0 = HEAP32[$0 >> 2] | 0;
  HEAP32[($2 + 60 | 0) >> 2] = $0 ? $3 : 0;
  HEAP32[($2 + 56 | 0) >> 2] = $4;
  HEAP32[($2 + 52 | 0) >> 2] = $0;
  HEAP32[($2 + 48 | 0) >> 2] = 0;
  $3 = ($0 | 0) != (0 | 0);
  HEAP32[($2 + 44 | 0) >> 2] = $3;
  HEAP32[($2 + 40 | 0) >> 2] = $4;
  HEAP32[($2 + 36 | 0) >> 2] = $0;
  HEAP32[($2 + 32 | 0) >> 2] = 0;
  HEAP32[($2 + 28 | 0) >> 2] = $3;
  $0 = HEAP32[$1 >> 2] | 0;
  _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17he6c5f20af57a6b85E($2 + 16 | 0 | 0, $2 + 28 | 0 | 0);
  label$1 : {
   if (!(HEAP32[($2 + 16 | 0) >> 2] | 0)) {
    break label$1
   }
   $0 = $0 + 97 | 0;
   label$2 : while (1) {
    HEAP32[$1 >> 2] = $0;
    $0 = $0 + 97 | 0;
    _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17he6c5f20af57a6b85E($2 + 8 | 0 | 0, $2 + 28 | 0 | 0);
    if (HEAP32[($2 + 8 | 0) >> 2] | 0) {
     continue label$2
    }
    break label$2;
   };
  }
  __stack_pointer = $2 + 64 | 0;
 }
 
 function _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17he6c5f20af57a6b85E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0, $5 = 0, $4 = 0, $6 = 0, i64toi32_i32$1 = 0;
  $2 = __stack_pointer - 32 | 0;
  __stack_pointer = $2;
  label$1 : {
   label$2 : {
    label$3 : {
     $3 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     if ($3) {
      break label$3
     }
     $3 = 0;
     break label$2;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $3 + -1 | 0;
    $4 = $1 + 4 | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    label$4 : {
     label$5 : {
      label$6 : {
       $5 = HEAP32[$1 >> 2] | 0;
       if (!$5) {
        break label$6
       }
       if (!$3) {
        break label$5
       }
      }
      if ($5) {
       break label$4
      }
      break label$1;
     }
     _ZN5alloc11collections5btree8navigate142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$15first_leaf_edge17h2d1cab6ed93491f7E($4 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, HEAP32[($1 + 12 | 0) >> 2] | 0 | 0);
     HEAP32[$1 >> 2] = 1;
     $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    }
    $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
    label$7 : {
     label$8 : {
      $5 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      if ($5 >>> 0 >= (HEAPU16[($3 + 1150 | 0) >> 1] | 0) >>> 0) {
       break label$8
      }
      $1 = $3;
      break label$7;
     }
     label$9 : while (1) {
      $1 = HEAP32[($3 + 1144 | 0) >> 2] | 0;
      if (!$1) {
       break label$1
      }
      $6 = $6 + 1 | 0;
      $5 = HEAPU16[($3 + 1148 | 0) >> 1] | 0;
      $3 = $1;
      if ($5 >>> 0 >= (HEAPU16[($1 + 1150 | 0) >> 1] | 0) >>> 0) {
       continue label$9
      }
      break label$9;
     };
    }
    $3 = $5 + 1 | 0;
    label$10 : {
     label$11 : {
      if ($6) {
       break label$11
      }
      HEAP32[($2 + 20 | 0) >> 2] = $3;
      HEAP32[($2 + 16 | 0) >> 2] = 0;
      HEAP32[($2 + 12 | 0) >> 2] = $1;
      break label$10;
     }
     _ZN5alloc11collections5btree8navigate142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$15first_leaf_edge17h2d1cab6ed93491f7E($2 + 12 | 0 | 0, HEAP32[(($1 + ($3 << 2 | 0) | 0) + 1152 | 0) >> 2] | 0 | 0, $6 + -1 | 0 | 0);
    }
    i64toi32_i32$1 = HEAP32[($2 + 16 | 0) >> 2] | 0;
    HEAP32[$4 >> 2] = HEAP32[($2 + 12 | 0) >> 2] | 0;
    HEAP32[($4 + 4 | 0) >> 2] = i64toi32_i32$1;
    HEAP32[($4 + 8 | 0) >> 2] = HEAP32[(($2 + 12 | 0) + 8 | 0) >> 2] | 0;
    $3 = $1 + ($5 << 4 | 0) | 0;
    $1 = ($1 + Math_imul($5, 88) | 0) + 176 | 0;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1;
   HEAP32[$0 >> 2] = $3;
   __stack_pointer = $2 + 32 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree8navigate142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$15first_leaf_edge17h2d1cab6ed93491f7E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   label$2 : while (1) {
    $1 = HEAP32[($1 + 1152 | 0) >> 2] | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue label$2
    }
    break label$2;
   };
  }
  HEAP32[($0 + 4 | 0) >> 2] = 0;
  HEAP32[($0 + 8 | 0) >> 2] = 0;
  HEAP32[$0 >> 2] = $1;
 }
 
 function _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17ha00a7e5d4f0bc857E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $2 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     if ($2) {
      break label$3
     }
     $2 = 0;
     break label$2;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $2 + -1 | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    label$4 : {
     label$5 : {
      label$6 : {
       $2 = HEAP32[$1 >> 2] | 0;
       if (!$2) {
        break label$6
       }
       if (!$3) {
        break label$5
       }
      }
      if (!$2) {
       break label$1
      }
      $4 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      $2 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      break label$4;
     }
     $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     label$7 : {
      $2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      if (!$2) {
       break label$7
      }
      label$8 : while (1) {
       $3 = HEAP32[($3 + 272 | 0) >> 2] | 0;
       $2 = $2 + -1 | 0;
       if ($2) {
        continue label$8
       }
       break label$8;
      };
     }
     HEAP32[($1 + 8 | 0) >> 2] = 0;
     HEAP32[($1 + 12 | 0) >> 2] = 0;
     HEAP32[($1 + 4 | 0) >> 2] = $3;
     HEAP32[$1 >> 2] = 1;
     $4 = 0;
     $2 = 0;
    }
    label$9 : {
     label$10 : {
      if ($4 >>> 0 >= (HEAPU16[($3 + 270 | 0) >> 1] | 0) >>> 0) {
       break label$10
      }
      $5 = $3;
      break label$9;
     }
     label$11 : while (1) {
      $5 = HEAP32[($3 + 264 | 0) >> 2] | 0;
      if (!$5) {
       break label$1
      }
      $2 = $2 + 1 | 0;
      $4 = HEAPU16[($3 + 268 | 0) >> 1] | 0;
      $3 = $5;
      if ($4 >>> 0 >= (HEAPU16[($3 + 270 | 0) >> 1] | 0) >>> 0) {
       continue label$11
      }
      break label$11;
     };
    }
    $3 = $4 + 1 | 0;
    label$12 : {
     label$13 : {
      if ($2) {
       break label$13
      }
      $6 = $5;
      break label$12;
     }
     $3 = ($5 + ($3 << 2 | 0) | 0) + 272 | 0;
     label$14 : while (1) {
      $6 = HEAP32[$3 >> 2] | 0;
      $3 = $6 + 272 | 0;
      $2 = $2 + -1 | 0;
      if ($2) {
       continue label$14
      }
      break label$14;
     };
     $3 = 0;
    }
    HEAP32[($1 + 12 | 0) >> 2] = $3;
    HEAP32[($1 + 8 | 0) >> 2] = 0;
    HEAP32[($1 + 4 | 0) >> 2] = $6;
    $3 = $5 + ($4 << 4 | 0) | 0;
    $2 = ($5 + ($4 << 3 | 0) | 0) + 176 | 0;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $3;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN107_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$GT$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h92a33d0cd0cdf5dbE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $2 = 0, $3 = 0, $4 = 0, $8 = 0, $6 = 0, $6$hi = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $7 = 0, $7$hi = 0, $5 = 0, $82 = 0, $87 = 0, $92 = 0, $95 = 0, $104 = 0, $107 = 0, $115 = 0;
  $2 = __stack_pointer - 64 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($1 | 0, $3 | 0);
  $4 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  $0 = HEAP32[$0 >> 2] | 0;
  HEAP32[($2 + 60 | 0) >> 2] = $0 ? $3 : 0;
  HEAP32[($2 + 56 | 0) >> 2] = $4;
  HEAP32[($2 + 52 | 0) >> 2] = $0;
  HEAP32[($2 + 48 | 0) >> 2] = 0;
  $3 = ($0 | 0) != (0 | 0);
  HEAP32[($2 + 44 | 0) >> 2] = $3;
  HEAP32[($2 + 40 | 0) >> 2] = $4;
  HEAP32[($2 + 36 | 0) >> 2] = $0;
  HEAP32[($2 + 32 | 0) >> 2] = 0;
  HEAP32[($2 + 28 | 0) >> 2] = $3;
  $4 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17he6c5f20af57a6b85E($2 + 16 | 0 | 0, $2 + 28 | 0 | 0);
  label$1 : {
   $3 = HEAP32[($2 + 16 | 0) >> 2] | 0;
   if (!$3) {
    break label$1
   }
   $0 = HEAP32[($2 + 20 | 0) >> 2] | 0;
   $4 = $4 + 97 | 0;
   $5 = HEAP32[$1 >> 2] | 0;
   label$2 : while (1) {
    i64toi32_i32$2 = $3 + 8 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $6 = i64toi32_i32$0;
    $6$hi = i64toi32_i32$1;
    i64toi32_i32$2 = $3;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $7 = i64toi32_i32$1;
    $7$hi = i64toi32_i32$0;
    HEAP32[($1 + 8 | 0) >> 2] = $4 + -81 | 0;
    $3 = $5 + $4 | 0;
    $8 = $3 + -97 | 0;
    i64toi32_i32$0 = $6$hi;
    i64toi32_i32$1 = $8;
    $21 = $6;
    HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = $21;
    HEAP8[(i64toi32_i32$1 + 9 | 0) >> 0] = $21 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 10 | 0) >> 0] = $21 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 11 | 0) >> 0] = $21 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 12 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 13 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 14 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 15 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    i64toi32_i32$0 = $7$hi;
    $22 = $7;
    HEAP8[i64toi32_i32$1 >> 0] = $22;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $22 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $22 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $22 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    HEAP32[($1 + 8 | 0) >> 2] = $4 + -49 | 0;
    $8 = $3 + -81 | 0;
    i64toi32_i32$2 = $0 + 24 | 0;
    i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    $82 = i64toi32_i32$0;
    i64toi32_i32$0 = $8 + 24 | 0;
    $23 = $82;
    HEAP8[i64toi32_i32$0 >> 0] = $23;
    HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $23 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $23 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $23 >>> 24 | 0;
    HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
    HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
    i64toi32_i32$2 = $0 + 16 | 0;
    i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    $87 = i64toi32_i32$1;
    i64toi32_i32$1 = $8 + 16 | 0;
    $24 = $87;
    HEAP8[i64toi32_i32$1 >> 0] = $24;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $24 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $24 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $24 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    i64toi32_i32$2 = $0 + 8 | 0;
    i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    $92 = i64toi32_i32$0;
    i64toi32_i32$0 = $8 + 8 | 0;
    $25 = $92;
    HEAP8[i64toi32_i32$0 >> 0] = $25;
    HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $25 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $25 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $25 >>> 24 | 0;
    HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
    HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    $95 = i64toi32_i32$1;
    i64toi32_i32$1 = $8;
    $26 = $95;
    HEAP8[i64toi32_i32$1 >> 0] = $26;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $26 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $26 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $26 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    HEAP32[($1 + 8 | 0) >> 2] = $4 + -33 | 0;
    $8 = $3 + -49 | 0;
    i64toi32_i32$2 = i64toi32_i32$2 + 40 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $104 = i64toi32_i32$0;
    i64toi32_i32$0 = $8;
    $27 = $104;
    HEAP8[(i64toi32_i32$0 + 8 | 0) >> 0] = $27;
    HEAP8[(i64toi32_i32$0 + 9 | 0) >> 0] = $27 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 10 | 0) >> 0] = $27 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 11 | 0) >> 0] = $27 >>> 24 | 0;
    HEAP8[(i64toi32_i32$0 + 12 | 0) >> 0] = i64toi32_i32$1;
    HEAP8[(i64toi32_i32$0 + 13 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 14 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 15 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 32 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 36 | 0) >> 2] | 0;
    $107 = i64toi32_i32$1;
    i64toi32_i32$1 = $8;
    $28 = $107;
    HEAP8[i64toi32_i32$1 >> 0] = $28;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $28 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $28 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $28 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    i64toi32_i32$2 = i64toi32_i32$2 + 56 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $6 = i64toi32_i32$0;
    $6$hi = i64toi32_i32$1;
    $8 = $3 + -33 | 0;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 48 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 52 | 0) >> 2] | 0;
    $115 = i64toi32_i32$1;
    i64toi32_i32$1 = $8;
    $29 = $115;
    HEAP8[i64toi32_i32$1 >> 0] = $29;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $29 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $29 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $29 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    i64toi32_i32$0 = $6$hi;
    $30 = $6;
    HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = $30;
    HEAP8[(i64toi32_i32$1 + 9 | 0) >> 0] = $30 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 10 | 0) >> 0] = $30 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 11 | 0) >> 0] = $30 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 12 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 13 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 14 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 15 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    HEAP32[($1 + 8 | 0) >> 2] = $4 + -17 | 0;
    i64toi32_i32$2 = i64toi32_i32$2 + 72 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $6 = i64toi32_i32$0;
    $6$hi = i64toi32_i32$1;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 68 | 0) >> 2] | 0;
    $7 = i64toi32_i32$1;
    $7$hi = i64toi32_i32$0;
    HEAP32[($1 + 8 | 0) >> 2] = $4 + -1 | 0;
    $8 = $3 + -17 | 0;
    i64toi32_i32$0 = $6$hi;
    i64toi32_i32$1 = $8;
    $31 = $6;
    HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = $31;
    HEAP8[(i64toi32_i32$1 + 9 | 0) >> 0] = $31 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 10 | 0) >> 0] = $31 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 11 | 0) >> 0] = $31 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 12 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 13 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 14 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 15 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    i64toi32_i32$0 = $7$hi;
    $32 = $7;
    HEAP8[i64toi32_i32$1 >> 0] = $32;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $32 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $32 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $32 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    HEAP32[($1 + 8 | 0) >> 2] = $4;
    HEAP8[($3 + -1 | 0) >> 0] = HEAPU8[(i64toi32_i32$2 + 80 | 0) >> 0] | 0;
    $4 = $4 + 97 | 0;
    _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17he6c5f20af57a6b85E($2 + 8 | 0 | 0, $2 + 28 | 0 | 0);
    $0 = HEAP32[($2 + 12 | 0) >> 2] | 0;
    $3 = HEAP32[($2 + 8 | 0) >> 2] | 0;
    if ($3) {
     continue label$2
    }
    break label$2;
   };
  }
  __stack_pointer = $2 + 64 | 0;
 }
 
 function _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0d8a139ea52976d5E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $2 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     if ($2) {
      break label$3
     }
     $2 = 0;
     break label$2;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $2 + -1 | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    label$4 : {
     label$5 : {
      label$6 : {
       $2 = HEAP32[$1 >> 2] | 0;
       if (!$2) {
        break label$6
       }
       if (!$3) {
        break label$5
       }
      }
      if (!$2) {
       break label$1
      }
      $4 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      $2 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      break label$4;
     }
     $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     label$7 : {
      $2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      if (!$2) {
       break label$7
      }
      label$8 : while (1) {
       $3 = HEAP32[($3 + 360 | 0) >> 2] | 0;
       $2 = $2 + -1 | 0;
       if ($2) {
        continue label$8
       }
       break label$8;
      };
     }
     HEAP32[($1 + 8 | 0) >> 2] = 0;
     HEAP32[($1 + 12 | 0) >> 2] = 0;
     HEAP32[($1 + 4 | 0) >> 2] = $3;
     HEAP32[$1 >> 2] = 1;
     $4 = 0;
     $2 = 0;
    }
    label$9 : {
     label$10 : {
      if ($4 >>> 0 >= (HEAPU16[($3 + 358 | 0) >> 1] | 0) >>> 0) {
       break label$10
      }
      $5 = $3;
      break label$9;
     }
     label$11 : while (1) {
      $5 = HEAP32[($3 + 352 | 0) >> 2] | 0;
      if (!$5) {
       break label$1
      }
      $2 = $2 + 1 | 0;
      $4 = HEAPU16[($3 + 356 | 0) >> 1] | 0;
      $3 = $5;
      if ($4 >>> 0 >= (HEAPU16[($3 + 358 | 0) >> 1] | 0) >>> 0) {
       continue label$11
      }
      break label$11;
     };
    }
    $3 = $4 + 1 | 0;
    label$12 : {
     label$13 : {
      if ($2) {
       break label$13
      }
      $6 = $5;
      break label$12;
     }
     $3 = ($5 + ($3 << 2 | 0) | 0) + 360 | 0;
     label$14 : while (1) {
      $6 = HEAP32[$3 >> 2] | 0;
      $3 = $6 + 360 | 0;
      $2 = $2 + -1 | 0;
      if ($2) {
       continue label$14
      }
      break label$14;
     };
     $3 = 0;
    }
    HEAP32[($1 + 12 | 0) >> 2] = $3;
    HEAP32[($1 + 8 | 0) >> 2] = 0;
    HEAP32[($1 + 4 | 0) >> 2] = $6;
    $2 = $5 + ($4 << 4 | 0) | 0;
    $3 = $2 + 176 | 0;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $3;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN58_$LT$u128$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17hb9283ea62b98e59cE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $2 = 0, $3 = 0, $3$hi = 0, $4 = 0, $4$hi = 0, $5 = 0, $5$hi = 0;
  label$1 : {
   label$2 : {
    $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if ($2 >>> 0 >= 16 >>> 0) {
     break label$2
    }
    i64toi32_i32$0 = 0;
    $3 = 0;
    $3$hi = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    $4 = 1;
    $4$hi = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    $5 = 0;
    $5$hi = i64toi32_i32$0;
    break label$1;
   }
   HEAP32[($1 + 4 | 0) >> 2] = $2 + -16 | 0;
   $2 = HEAP32[$1 >> 2] | 0;
   HEAP32[$1 >> 2] = $2 + 16 | 0;
   i64toi32_i32$2 = $2 + 8 | 0;
   i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $5 = i64toi32_i32$0;
   $5$hi = i64toi32_i32$1;
   i64toi32_i32$2 = $2;
   i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $3 = i64toi32_i32$1;
   $3$hi = i64toi32_i32$0;
   i64toi32_i32$0 = 0;
   $4 = 0;
   $4$hi = i64toi32_i32$0;
  }
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$1 = $0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $3;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $4$hi;
  HEAP32[i64toi32_i32$1 >> 2] = $4;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $5$hi;
  i64toi32_i32$1 = i64toi32_i32$1 + 16 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $5;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function _ZN75_$LT$alloc__string__String$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17h6b390625355bc11dE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0, $5 = 0, $6 = 0, $10 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $7 = 0, i64toi32_i32$4 = 0, $4 = 0, $9 = 0, i64toi32_i32$3 = 0, $20 = 0, $8 = 0, $278 = 0, $281$hi = 0, $283$hi = 0, $284 = 0;
  $2 = __stack_pointer - 32 | 0;
  __stack_pointer = $2;
  _ZN18parity_scale_codec5codec5Input9read_byte17h755e02852f30a87bE($2 + 16 | 0 | 0, $1 | 0);
  label$1 : {
   label$2 : {
    label$3 : {
     if ((HEAPU8[($2 + 16 | 0) >> 0] | 0) & 1 | 0) {
      break label$3
     }
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          $3 = HEAPU8[($2 + 17 | 0) >> 0] | 0;
          switch ($3 & 3 | 0 | 0) {
          case 3:
           break label$5;
          case 2:
           break label$6;
          case 1:
           break label$7;
          default:
           break label$8;
          };
         }
         $3 = ($3 & 252 | 0) >>> 2 | 0;
         break label$4;
        }
        HEAP8[($2 + 25 | 0) >> 0] = $3;
        HEAP8[($2 + 24 | 0) >> 0] = 1;
        HEAP32[($2 + 20 | 0) >> 2] = $1;
        HEAP16[($2 + 28 | 0) >> 1] = 0;
        if (_ZN102_$LT$parity_scale_codec__compact__PrefixInput$LT$T$GT$$u20$as$u20$parity_scale_codec__codec__Input$GT$4read17hf1e46c997a924fc8E($2 + 20 | 0 | 0, $2 + 28 | 0 | 0, 2 | 0) | 0) {
         break label$3
        }
        $3 = HEAPU16[($2 + 28 | 0) >> 1] | 0;
        if ($3 >>> 0 <= 255 >>> 0) {
         break label$3
        }
        $3 = $3 >>> 2 | 0;
        break label$4;
       }
       HEAP8[($2 + 25 | 0) >> 0] = $3;
       HEAP8[($2 + 24 | 0) >> 0] = 1;
       HEAP32[($2 + 20 | 0) >> 2] = $1;
       HEAP32[($2 + 28 | 0) >> 2] = 0;
       if (_ZN102_$LT$parity_scale_codec__compact__PrefixInput$LT$T$GT$$u20$as$u20$parity_scale_codec__codec__Input$GT$4read17hf1e46c997a924fc8E($2 + 20 | 0 | 0, $2 + 28 | 0 | 0, 4 | 0) | 0) {
        break label$3
       }
       $3 = HEAP32[($2 + 28 | 0) >> 2] | 0;
       if ($3 >>> 0 <= 65535 >>> 0) {
        break label$3
       }
       $3 = $3 >>> 2 | 0;
       break label$4;
      }
      if (($3 & 255 | 0) >>> 0 >= 4 >>> 0) {
       break label$3
      }
      $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
      if ($3 >>> 0 < 4 >>> 0) {
       break label$3
      }
      HEAP32[($1 + 4 | 0) >> 2] = $3 + -4 | 0;
      $3 = HEAP32[$1 >> 2] | 0;
      HEAP32[$1 >> 2] = $3 + 4 | 0;
      $3 = HEAPU8[$3 >> 0] | 0 | ((HEAPU8[($3 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($3 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($3 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      if ($3 >>> 0 < 1073741824 >>> 0) {
       break label$3
      }
     }
     if ((HEAP32[($1 + 4 | 0) >> 2] | 0) >>> 0 < $3 >>> 0) {
      break label$3
     }
     _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($2 + 8 | 0 | 0, $3 | 0, 1 | 0);
     $4 = HEAP32[($2 + 12 | 0) >> 2] | 0;
     $5 = HEAP32[($2 + 8 | 0) >> 2] | 0;
     label$9 : {
      $6 = HEAP32[($1 + 4 | 0) >> 2] | 0;
      if ($6 >>> 0 >= $3 >>> 0) {
       break label$9
      }
      _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($5 | 0, $4 | 0);
      break label$3;
     }
     $7 = HEAP32[$1 >> 2] | 0;
     $5 = memcpy($5 | 0, $7 | 0, $3 | 0) | 0;
     HEAP32[($1 + 4 | 0) >> 2] = $6 - $3 | 0;
     HEAP32[$1 >> 2] = $7 + $3 | 0;
     if (!$3) {
      break label$2
     }
     $1 = $3 + -7 | 0;
     $7 = $1 >>> 0 > $3 >>> 0 ? 0 : $1;
     $8 = (($5 + 3 | 0) & -4 | 0) - $5 | 0;
     $1 = 0;
     label$10 : while (1) {
      label$11 : {
       label$12 : {
        label$13 : {
         label$14 : {
          $6 = HEAPU8[($5 + $1 | 0) >> 0] | 0;
          $9 = $6 << 24 >> 24;
          if (($9 | 0) < (0 | 0)) {
           break label$14
          }
          if (($8 - $1 | 0) & 3 | 0) {
           break label$13
          }
          if ($1 >>> 0 >= $7 >>> 0) {
           break label$12
          }
          label$15 : while (1) {
           $6 = $5 + $1 | 0;
           if ((HEAP32[($6 + 4 | 0) >> 2] | 0 | (HEAP32[$6 >> 2] | 0) | 0) & -2139062144 | 0) {
            break label$12
           }
           $1 = $1 + 8 | 0;
           if ($1 >>> 0 < $7 >>> 0) {
            continue label$15
           }
           break label$12;
          };
         }
         label$16 : {
          label$17 : {
           label$18 : {
            label$19 : {
             label$20 : {
              switch ((HEAPU8[($6 + 1048608 | 0) >> 0] | 0) + -2 | 0 | 0) {
              case 0:
               $1 = $1 + 1 | 0;
               if ($1 >>> 0 >= $3 >>> 0) {
                break label$17
               }
               if ((HEAP8[($5 + $1 | 0) >> 0] | 0 | 0) > (-65 | 0)) {
                break label$17
               }
               break label$16;
              case 1:
               $10 = $1 + 1 | 0;
               if ($10 >>> 0 >= $3 >>> 0) {
                break label$17
               }
               $10 = HEAP8[($5 + $10 | 0) >> 0] | 0;
               label$23 : {
                label$24 : {
                 if (($6 | 0) == (224 | 0)) {
                  break label$24
                 }
                 if (($6 | 0) == (237 | 0)) {
                  break label$23
                 }
                 if ((($9 + 31 | 0) & 255 | 0) >>> 0 < 12 >>> 0) {
                  break label$19
                 }
                 if (($9 & -2 | 0 | 0) != (-18 | 0)) {
                  break label$17
                 }
                 if (($10 | 0) < (-64 | 0)) {
                  break label$18
                 }
                 break label$17;
                }
                if (($10 & -32 | 0 | 0) == (-96 | 0)) {
                 break label$18
                }
                break label$17;
               }
               if (($10 | 0) > (-97 | 0)) {
                break label$17
               }
               break label$18;
              case 2:
               break label$20;
              default:
               break label$17;
              };
             }
             $10 = $1 + 1 | 0;
             if ($10 >>> 0 >= $3 >>> 0) {
              break label$17
             }
             $10 = HEAP8[($5 + $10 | 0) >> 0] | 0;
             label$25 : {
              label$26 : {
               switch ($6 + -240 | 0 | 0) {
               default:
                if ((($9 + 15 | 0) & 255 | 0) >>> 0 > 2 >>> 0) {
                 break label$17
                }
                if (($10 | 0) < (-64 | 0)) {
                 break label$25
                }
                break label$17;
               case 0:
                if ((($10 + 112 | 0) & 255 | 0) >>> 0 < 48 >>> 0) {
                 break label$25
                }
                break label$17;
               case 4:
                break label$26;
               };
              }
              if (($10 | 0) > (-113 | 0)) {
               break label$17
              }
             }
             $6 = $1 + 2 | 0;
             if ($6 >>> 0 >= $3 >>> 0) {
              break label$17
             }
             if ((HEAP8[($5 + $6 | 0) >> 0] | 0 | 0) > (-65 | 0)) {
              break label$17
             }
             $1 = $1 + 3 | 0;
             if ($1 >>> 0 >= $3 >>> 0) {
              break label$17
             }
             if ((HEAP8[($5 + $1 | 0) >> 0] | 0 | 0) < (-64 | 0)) {
              break label$16
             }
             break label$17;
            }
            if (($10 | 0) >= (-64 | 0)) {
             break label$17
            }
           }
           $1 = $1 + 2 | 0;
           if ($1 >>> 0 >= $3 >>> 0) {
            break label$17
           }
           if ((HEAP8[($5 + $1 | 0) >> 0] | 0 | 0) <= (-65 | 0)) {
            break label$16
           }
          }
          _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($5 | 0, $4 | 0);
          HEAP32[$0 >> 2] = 0;
          break label$1;
         }
         $1 = $1 + 1 | 0;
         break label$11;
        }
        $1 = $1 + 1 | 0;
        break label$11;
       }
       if ($1 >>> 0 >= $3 >>> 0) {
        break label$11
       }
       label$29 : while (1) {
        if ((HEAP8[($5 + $1 | 0) >> 0] | 0 | 0) < (0 | 0)) {
         break label$11
        }
        $1 = $1 + 1 | 0;
        if (($3 | 0) != ($1 | 0)) {
         continue label$29
        }
        break label$2;
       };
      }
      if ($1 >>> 0 < $3 >>> 0) {
       continue label$10
      }
      break label$2;
     };
    }
    HEAP32[$0 >> 2] = 0;
    break label$1;
   }
   $278 = $0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$2 = $3;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 32;
   i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
   if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
    i64toi32_i32$1 = $3 << i64toi32_i32$4 | 0;
    $20 = 0;
   } else {
    i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
    $20 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   }
   $281$hi = i64toi32_i32$1;
   i64toi32_i32$1 = 0;
   $283$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $281$hi;
   i64toi32_i32$0 = $20;
   i64toi32_i32$2 = $283$hi;
   i64toi32_i32$3 = $4;
   i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
   $284 = i64toi32_i32$0 | $4 | 0;
   i64toi32_i32$0 = $278;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $284;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
   HEAP32[$0 >> 2] = $5;
  }
  __stack_pointer = $2 + 32 | 0;
 }
 
 function _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ($1) {
       break label$4
      }
      $2 = 1;
      break label$3;
     }
     if (($1 | 0) <= (-1 | 0)) {
      break label$2
     }
     label$5 : {
      label$6 : {
       if ($2) {
        break label$6
       }
       _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_365($3 + 8 | 0 | 0, $1 | 0);
       $2 = HEAP32[($3 + 8 | 0) >> 2] | 0;
       break label$5;
      }
      _ZN5alloc5alloc6Global10alloc_impl17h1061fb139e87d1dcE_364($3 | 0, $1 | 0, 1 | 0);
      $2 = HEAP32[$3 >> 2] | 0;
     }
     if (!$2) {
      break label$1
     }
    }
    HEAP32[($0 + 4 | 0) >> 2] = $1;
    HEAP32[$0 >> 2] = $2;
    __stack_pointer = $3 + 16 | 0;
    return;
   }
   _ZN5alloc7raw_vec17capacity_overflow17h7412131034ec2d8eE();
   wasm2js_trap();
  }
  _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
  wasm2js_trap();
 }
 
 function _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Decode$u20$for$u20$inscribe_io__Inscribe$GT$6decode17h5ee6a4d85b48aa34E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2 = 0, i64toi32_i32$2 = 0, $4 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0, $15 = 0, $19 = 0, $23 = 0, $26 = 0, $3 = 0, $8 = 0, $17 = 0, $18 = 0, $21 = 0, $22 = 0, $25 = 0, $28 = 0, $5 = 0, $5$hi = 0, $6 = 0, $6$hi = 0, $71 = 0, $77 = 0, $83 = 0, $86 = 0, $7 = 0, $9 = 0, $9$hi = 0, $10 = 0, $10$hi = 0, $11 = 0, $11$hi = 0, $12 = 0, $12$hi = 0, $13 = 0, $13$hi = 0, $14 = 0, $16 = 0, $20 = 0, $24 = 0, $27 = 0, $29 = 0, $219 = 0, $277 = 0, $283 = 0, $289 = 0;
  $2 = __stack_pointer - 176 | 0;
  __stack_pointer = $2;
  _ZN18parity_scale_codec5codec5Input9read_byte17h755e02852f30a87bE($2 + 120 | 0 | 0, $1 | 0);
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             label$12 : {
              label$13 : {
               label$14 : {
                label$15 : {
                 label$16 : {
                  label$17 : {
                   label$18 : {
                    if ((HEAPU8[($2 + 120 | 0) >> 0] | 0) & 1 | 0) {
                     break label$18
                    }
                    $3 = HEAPU8[($2 + 121 | 0) >> 0] | 0;
                    if (($3 & 255 | 0) >>> 0 > 2 >>> 0) {
                     break label$18
                    }
                    _ZN58_$LT$u128$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17hb9283ea62b98e59cE($2 + 96 | 0 | 0, $1 | 0);
                    if (HEAP32[($2 + 96 | 0) >> 2] | 0) {
                     break label$17
                    }
                    $4 = HEAP32[($1 + 4 | 0) >> 2] | 0;
                    if ($4 >>> 0 < 32 >>> 0) {
                     break label$16
                    }
                    i64toi32_i32$2 = $2 + 112 | 0;
                    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                    $5 = i64toi32_i32$0;
                    $5$hi = i64toi32_i32$1;
                    i64toi32_i32$2 = $2;
                    i64toi32_i32$1 = HEAP32[($2 + 104 | 0) >> 2] | 0;
                    i64toi32_i32$0 = HEAP32[($2 + 108 | 0) >> 2] | 0;
                    $6 = i64toi32_i32$1;
                    $6$hi = i64toi32_i32$0;
                    HEAP32[($1 + 4 | 0) >> 2] = $4 + -32 | 0;
                    $4 = HEAP32[$1 >> 2] | 0;
                    HEAP32[$1 >> 2] = $4 + 32 | 0;
                    i64toi32_i32$2 = $4 + 8 | 0;
                    i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                    i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                    $71 = i64toi32_i32$0;
                    i64toi32_i32$0 = ($2 + 128 | 0) + 8 | 0;
                    HEAP32[i64toi32_i32$0 >> 2] = $71;
                    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                    i64toi32_i32$2 = $4 + 16 | 0;
                    i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                    i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                    $77 = i64toi32_i32$1;
                    i64toi32_i32$1 = ($2 + 128 | 0) + 16 | 0;
                    HEAP32[i64toi32_i32$1 >> 2] = $77;
                    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                    i64toi32_i32$2 = $4 + 24 | 0;
                    i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                    i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                    $83 = i64toi32_i32$0;
                    i64toi32_i32$0 = ($2 + 128 | 0) + 24 | 0;
                    HEAP32[i64toi32_i32$0 >> 2] = $83;
                    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                    i64toi32_i32$2 = $4;
                    i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                    i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                    $86 = i64toi32_i32$1;
                    i64toi32_i32$1 = $2;
                    HEAP32[($2 + 128 | 0) >> 2] = $86;
                    HEAP32[($2 + 132 | 0) >> 2] = i64toi32_i32$0;
                    _ZN75_$LT$alloc__string__String$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17h6b390625355bc11dE($2 + 164 | 0 | 0, $1 | 0);
                    $4 = HEAP32[($2 + 164 | 0) >> 2] | 0;
                    if (!$4) {
                     break label$15
                    }
                    $7 = HEAP32[($2 + 172 | 0) >> 2] | 0;
                    $8 = HEAP32[($2 + 168 | 0) >> 2] | 0;
                    _ZN58_$LT$u128$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17hb9283ea62b98e59cE($2 + 72 | 0 | 0, $1 | 0);
                    if (HEAP32[($2 + 72 | 0) >> 2] | 0) {
                     break label$14
                    }
                    i64toi32_i32$2 = ($2 + 72 | 0) + 16 | 0;
                    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                    $9 = i64toi32_i32$0;
                    $9$hi = i64toi32_i32$1;
                    i64toi32_i32$2 = $2;
                    i64toi32_i32$1 = HEAP32[($2 + 80 | 0) >> 2] | 0;
                    i64toi32_i32$0 = HEAP32[($2 + 84 | 0) >> 2] | 0;
                    $10 = i64toi32_i32$1;
                    $10$hi = i64toi32_i32$0;
                    _ZN58_$LT$u128$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17hb9283ea62b98e59cE($2 + 48 | 0 | 0, $1 | 0);
                    if (HEAP32[($2 + 48 | 0) >> 2] | 0) {
                     break label$13
                    }
                    i64toi32_i32$2 = ($2 + 48 | 0) + 16 | 0;
                    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                    $11 = i64toi32_i32$0;
                    $11$hi = i64toi32_i32$1;
                    i64toi32_i32$2 = $2;
                    i64toi32_i32$1 = HEAP32[($2 + 56 | 0) >> 2] | 0;
                    i64toi32_i32$0 = HEAP32[($2 + 60 | 0) >> 2] | 0;
                    $12 = i64toi32_i32$1;
                    $12$hi = i64toi32_i32$0;
                    _ZN58_$LT$u128$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17hb9283ea62b98e59cE($2 + 24 | 0 | 0, $1 | 0);
                    if (HEAP32[($2 + 24 | 0) >> 2] | 0) {
                     break label$12
                    }
                    i64toi32_i32$2 = ($2 + 24 | 0) + 16 | 0;
                    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                    $13 = i64toi32_i32$0;
                    $13$hi = i64toi32_i32$1;
                    i64toi32_i32$2 = $2;
                    i64toi32_i32$1 = HEAP32[($2 + 32 | 0) >> 2] | 0;
                    i64toi32_i32$0 = HEAP32[($2 + 36 | 0) >> 2] | 0;
                    $14 = i64toi32_i32$1;
                    _ZN75_$LT$alloc__string__String$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17h6b390625355bc11dE($2 + 164 | 0 | 0, $1 | 0);
                    $15 = HEAP32[($2 + 164 | 0) >> 2] | 0;
                    if (!$15) {
                     break label$11
                    }
                    $16 = HEAP32[($2 + 172 | 0) >> 2] | 0;
                    $17 = HEAP32[($2 + 168 | 0) >> 2] | 0;
                    _ZN18parity_scale_codec5codec5Input9read_byte17h755e02852f30a87bE($2 + 16 | 0 | 0, $1 | 0);
                    if ((HEAPU8[($2 + 16 | 0) >> 0] | 0) & 1 | 0) {
                     break label$10
                    }
                    $18 = HEAPU8[($2 + 17 | 0) >> 0] | 0;
                    if (($18 & 255 | 0) >>> 0 >= 4 >>> 0) {
                     break label$10
                    }
                    _ZN75_$LT$alloc__string__String$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17h6b390625355bc11dE($2 + 164 | 0 | 0, $1 | 0);
                    $19 = HEAP32[($2 + 164 | 0) >> 2] | 0;
                    if (!$19) {
                     break label$9
                    }
                    $20 = HEAP32[($2 + 172 | 0) >> 2] | 0;
                    $21 = HEAP32[($2 + 168 | 0) >> 2] | 0;
                    $22 = _ZN11inscribe_io1_89_$LT$impl$u20$parity_scale_codec__codec__Decode$u20$for$u20$inscribe_io__VerifyStatus$GT$6decode17ha20aedb7ab117ce5E($1 | 0) | 0;
                    if (($22 & 255 | 0 | 0) == (3 | 0)) {
                     break label$8
                    }
                    _ZN75_$LT$alloc__string__String$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17h6b390625355bc11dE($2 + 164 | 0 | 0, $1 | 0);
                    $23 = HEAP32[($2 + 164 | 0) >> 2] | 0;
                    if (!$23) {
                     break label$7
                    }
                    $24 = HEAP32[($2 + 172 | 0) >> 2] | 0;
                    $25 = HEAP32[($2 + 168 | 0) >> 2] | 0;
                    _ZN75_$LT$alloc__string__String$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17h6b390625355bc11dE($2 + 164 | 0 | 0, $1 | 0);
                    $26 = HEAP32[($2 + 164 | 0) >> 2] | 0;
                    if (!$26) {
                     break label$6
                    }
                    $27 = HEAP32[($2 + 172 | 0) >> 2] | 0;
                    $28 = HEAP32[($2 + 168 | 0) >> 2] | 0;
                    _ZN18parity_scale_codec5codec5Input9read_byte17h755e02852f30a87bE($2 + 8 | 0 | 0, $1 | 0);
                    label$19 : {
                     if ((HEAPU8[($2 + 8 | 0) >> 0] | 0) & 1 | 0) {
                      break label$19
                     }
                     $29 = HEAPU8[($2 + 9 | 0) >> 0] | 0;
                     _ZN18parity_scale_codec5codec5Input9read_byte17h755e02852f30a87bE($2 | 0, $1 | 0);
                     if ((HEAPU8[$2 >> 0] | 0) & 1 | 0) {
                      break label$19
                     }
                     $1 = HEAPU8[($2 + 1 | 0) >> 0] | 0;
                     if (($1 & 255 | 0) >>> 0 > 2 >>> 0) {
                      break label$19
                     }
                     i64toi32_i32$1 = $0;
                     HEAP32[($0 + 80 | 0) >> 2] = $14;
                     HEAP32[($0 + 84 | 0) >> 2] = i64toi32_i32$0;
                     i64toi32_i32$0 = $12$hi;
                     i64toi32_i32$1 = $0;
                     HEAP32[($0 + 64 | 0) >> 2] = $12;
                     HEAP32[($0 + 68 | 0) >> 2] = i64toi32_i32$0;
                     i64toi32_i32$0 = $10$hi;
                     i64toi32_i32$1 = $0;
                     HEAP32[($0 + 48 | 0) >> 2] = $10;
                     HEAP32[($0 + 52 | 0) >> 2] = i64toi32_i32$0;
                     i64toi32_i32$0 = $6$hi;
                     i64toi32_i32$1 = $0;
                     HEAP32[($0 + 32 | 0) >> 2] = $6;
                     HEAP32[($0 + 36 | 0) >> 2] = i64toi32_i32$0;
                     i64toi32_i32$2 = $2;
                     i64toi32_i32$0 = HEAP32[($2 + 128 | 0) >> 2] | 0;
                     i64toi32_i32$1 = HEAP32[($2 + 132 | 0) >> 2] | 0;
                     $219 = i64toi32_i32$0;
                     i64toi32_i32$0 = $0;
                     $48 = $219;
                     HEAP8[$0 >> 0] = $48;
                     HEAP8[($0 + 1 | 0) >> 0] = $48 >>> 8 | 0;
                     HEAP8[($0 + 2 | 0) >> 0] = $48 >>> 16 | 0;
                     HEAP8[($0 + 3 | 0) >> 0] = $48 >>> 24 | 0;
                     HEAP8[($0 + 4 | 0) >> 0] = i64toi32_i32$1;
                     HEAP8[($0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
                     HEAP8[($0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
                     HEAP8[($0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
                     HEAP32[($0 + 152 | 0) >> 2] = $27;
                     HEAP32[($0 + 148 | 0) >> 2] = $28;
                     HEAP32[($0 + 144 | 0) >> 2] = $26;
                     HEAP32[($0 + 128 | 0) >> 2] = $20;
                     HEAP32[($0 + 124 | 0) >> 2] = $21;
                     HEAP32[($0 + 120 | 0) >> 2] = $19;
                     HEAP32[($0 + 104 | 0) >> 2] = $7;
                     HEAP32[($0 + 100 | 0) >> 2] = $8;
                     HEAP32[($0 + 96 | 0) >> 2] = $4;
                     HEAP8[($0 + 160 | 0) >> 0] = $1;
                     HEAP8[($0 + 159 | 0) >> 0] = $22;
                     HEAP8[($0 + 158 | 0) >> 0] = $3;
                     HEAP8[($0 + 157 | 0) >> 0] = $18;
                     HEAP8[($0 + 156 | 0) >> 0] = $29;
                     HEAP32[($0 + 140 | 0) >> 2] = $24;
                     HEAP32[($0 + 136 | 0) >> 2] = $25;
                     HEAP32[($0 + 132 | 0) >> 2] = $23;
                     HEAP32[($0 + 116 | 0) >> 2] = $16;
                     HEAP32[($0 + 112 | 0) >> 2] = $17;
                     HEAP32[($0 + 108 | 0) >> 2] = $15;
                     i64toi32_i32$1 = $13$hi;
                     i64toi32_i32$0 = $0 + 88 | 0;
                     HEAP32[i64toi32_i32$0 >> 2] = $13;
                     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                     i64toi32_i32$1 = $11$hi;
                     i64toi32_i32$0 = $0 + 72 | 0;
                     HEAP32[i64toi32_i32$0 >> 2] = $11;
                     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                     i64toi32_i32$1 = $9$hi;
                     i64toi32_i32$0 = $0 + 56 | 0;
                     HEAP32[i64toi32_i32$0 >> 2] = $9;
                     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                     i64toi32_i32$1 = $5$hi;
                     i64toi32_i32$0 = $0 + 40 | 0;
                     HEAP32[i64toi32_i32$0 >> 2] = $5;
                     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                     i64toi32_i32$2 = ($2 + 128 | 0) + 24 | 0;
                     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                     $277 = i64toi32_i32$1;
                     i64toi32_i32$1 = $0 + 24 | 0;
                     $49 = $277;
                     HEAP8[i64toi32_i32$1 >> 0] = $49;
                     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $49 >>> 8 | 0;
                     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $49 >>> 16 | 0;
                     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $49 >>> 24 | 0;
                     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
                     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
                     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
                     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
                     i64toi32_i32$2 = ($2 + 128 | 0) + 16 | 0;
                     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                     $283 = i64toi32_i32$0;
                     i64toi32_i32$0 = $0 + 16 | 0;
                     $50 = $283;
                     HEAP8[i64toi32_i32$0 >> 0] = $50;
                     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $50 >>> 8 | 0;
                     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $50 >>> 16 | 0;
                     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $50 >>> 24 | 0;
                     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
                     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
                     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
                     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
                     i64toi32_i32$2 = ($2 + 128 | 0) + 8 | 0;
                     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                     $289 = i64toi32_i32$1;
                     i64toi32_i32$1 = $0 + 8 | 0;
                     $51 = $289;
                     HEAP8[i64toi32_i32$1 >> 0] = $51;
                     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $51 >>> 8 | 0;
                     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $51 >>> 16 | 0;
                     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $51 >>> 24 | 0;
                     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
                     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
                     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
                     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
                     break label$1;
                    }
                    HEAP8[($0 + 160 | 0) >> 0] = 3;
                    _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($26 | 0, $28 | 0);
                    break label$5;
                   }
                   HEAP8[($0 + 160 | 0) >> 0] = 3;
                   break label$1;
                  }
                  HEAP8[($0 + 160 | 0) >> 0] = 3;
                  break label$1;
                 }
                 HEAP8[($0 + 160 | 0) >> 0] = 3;
                 break label$1;
                }
                HEAP8[($0 + 160 | 0) >> 0] = 3;
                break label$1;
               }
               HEAP8[($0 + 160 | 0) >> 0] = 3;
               break label$2;
              }
              HEAP8[($0 + 160 | 0) >> 0] = 3;
              break label$2;
             }
             HEAP8[($0 + 160 | 0) >> 0] = 3;
             break label$2;
            }
            HEAP8[($0 + 160 | 0) >> 0] = 3;
            break label$2;
           }
           HEAP8[($0 + 160 | 0) >> 0] = 3;
           break label$3;
          }
          HEAP8[($0 + 160 | 0) >> 0] = 3;
          break label$3;
         }
         HEAP8[($0 + 160 | 0) >> 0] = 3;
         break label$4;
        }
        HEAP8[($0 + 160 | 0) >> 0] = 3;
        break label$4;
       }
       HEAP8[($0 + 160 | 0) >> 0] = 3;
      }
      _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($23 | 0, $25 | 0);
     }
     _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($19 | 0, $21 | 0);
    }
    _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($15 | 0, $17 | 0);
   }
   _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($4 | 0, $8 | 0);
  }
  __stack_pointer = $2 + 176 | 0;
 }
 
 function _ZN11inscribe_io1_89_$LT$impl$u20$parity_scale_codec__codec__Decode$u20$for$u20$inscribe_io__VerifyStatus$GT$6decode17ha20aedb7ab117ce5E($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  _ZN18parity_scale_codec5codec5Input9read_byte17h755e02852f30a87bE($1 + 8 | 0 | 0, $0 | 0);
  $0 = HEAPU8[($1 + 9 | 0) >> 0] | 0;
  $2 = HEAPU8[($1 + 8 | 0) >> 0] | 0;
  __stack_pointer = $1 + 16 | 0;
  return ($2 & 1 | 0 ? 3 : $0 >>> 0 < 3 >>> 0 ? $0 : 3) | 0;
 }
 
 function _ZN17gear_stack_buffer10trampoline17ha13372c364bcfe6dE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $3 = 0, $4 = 0, $20 = 0;
  $2 = __stack_pointer - 64 | 0;
  __stack_pointer = $2;
  HEAP32[(($2 + 8 | 0) + 16 | 0) >> 2] = HEAP32[($1 + 16 | 0) >> 2] | 0;
  $3 = ($2 + 8 | 0) + 8 | 0;
  i64toi32_i32$2 = $1 + 8 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $20 = i64toi32_i32$0;
  i64toi32_i32$0 = $3;
  HEAP32[i64toi32_i32$0 >> 2] = $20;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = HEAP32[$1 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $4 = i64toi32_i32$1;
  i64toi32_i32$1 = $2;
  HEAP32[($2 + 8 | 0) >> 2] = $4;
  HEAP32[($2 + 12 | 0) >> 2] = i64toi32_i32$0;
  $1 = HEAP32[($2 + 12 | 0) >> 2] | 0;
  _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17h6ab8c51009f099f4E($2 + 28 | 0 | 0, $3 | 0, $0 | 0, HEAP32[$4 >> 2] | 0 | 0);
  memcpy($1 | 0, $2 + 28 | 0 | 0, 36 | 0) | 0;
  __stack_pointer = $2 + 64 | 0;
 }
 
 function _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17h6ab8c51009f099f4E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $4 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $5 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $6 = 0, $6$hi = 0, $7 = 0, $7$hi = 0, $8$hi = 0, $9$hi = 0, $10$hi = 0, $11$hi = 0, $116 = 0, $121 = 0, $126 = 0, $129 = 0;
  $4 = __stack_pointer - 192 | 0;
  __stack_pointer = $4;
  $5 = 0;
  HEAP32[($4 + 32 | 0) >> 2] = 0;
  HEAP32[($4 + 28 | 0) >> 2] = $3;
  HEAP32[($4 + 24 | 0) >> 2] = $2;
  $3 = HEAP32[$1 >> 2] | 0;
  _ZN55_$LT$X$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2891dafc5e9136e9E(HEAP32[$3 >> 2] | 0 | 0, HEAP32[($3 + 4 | 0) >> 2] | 0 | 0, $4 + 24 | 0 | 0);
  _ZN4core5slice5index74_$LT$impl$u20$core__ops__index__Index$LT$I$GT$$u20$for$u20$$u5b$T$u5d$$GT$5index17ha5cfb5eb89161dbdE($4 + 16 | 0 | 0, HEAP32[($4 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4 + 28 | 0) >> 2] | 0 | 0, HEAP32[($4 + 32 | 0) >> 2] | 0 | 0);
  $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$2 = $3;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $6 = i64toi32_i32$0;
  $6$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $7 = i64toi32_i32$1;
  $7$hi = i64toi32_i32$0;
  $3 = HEAP32[($4 + 20 | 0) >> 2] | 0;
  $2 = HEAP32[($4 + 16 | 0) >> 2] | 0;
  $1 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  i64toi32_i32$2 = $1 + 24 | 0;
  i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $8 = i64toi32_i32$0;
  $8$hi = i64toi32_i32$1;
  i64toi32_i32$0 = ($4 + 72 | 0) + 24 | 0;
  HEAP32[i64toi32_i32$0 >> 2] = $8;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $1 + 16 | 0;
  i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $9 = i64toi32_i32$1;
  $9$hi = i64toi32_i32$0;
  i64toi32_i32$1 = ($4 + 72 | 0) + 16 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $9;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = $1 + 8 | 0;
  i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $10 = i64toi32_i32$0;
  $10$hi = i64toi32_i32$1;
  i64toi32_i32$0 = ($4 + 72 | 0) + 8 | 0;
  HEAP32[i64toi32_i32$0 >> 2] = $10;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $11 = i64toi32_i32$1;
  $11$hi = i64toi32_i32$0;
  i64toi32_i32$1 = $4;
  HEAP32[($4 + 72 | 0) >> 2] = $11;
  HEAP32[($4 + 76 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $7$hi;
  i64toi32_i32$1 = $4 + 144 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $7;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $8$hi;
  i64toi32_i32$1 = ($4 + 104 | 0) + 24 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $8;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $9$hi;
  i64toi32_i32$1 = ($4 + 104 | 0) + 16 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $9;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $10$hi;
  i64toi32_i32$1 = ($4 + 104 | 0) + 8 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $10;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $6$hi;
  i64toi32_i32$1 = $4;
  HEAP32[($4 + 136 | 0) >> 2] = $6;
  HEAP32[($4 + 140 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $11$hi;
  i64toi32_i32$1 = $4;
  HEAP32[($4 + 104 | 0) >> 2] = $11;
  HEAP32[($4 + 108 | 0) >> 2] = i64toi32_i32$0;
  memset($4 + 156 | 0 | 0, 0 | 0, 36 | 0) | 0;
  gr_send($4 + 104 | 0 | 0, $2 | 0, $3 | 0, 0 | 0, $4 + 156 | 0 | 0);
  _ZN5gcore6errors144_$LT$impl$u20$core__convert__From$LT$gcore__errors__SyscallError$GT$$u20$for$u20$core__result__Result$LT$$LP$$RP$$C$gcore__errors__Error$GT$$GT$4from17heac5be5a465af15fE($4 + 8 | 0 | 0, HEAP32[($4 + 156 | 0) >> 2] | 0 | 0);
  label$1 : {
   label$2 : {
    $1 = HEAP32[($4 + 8 | 0) >> 2] | 0;
    if (($1 | 0) != (7 | 0)) {
     break label$2
    }
    i64toi32_i32$2 = $4 + 184 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $116 = i64toi32_i32$0;
    i64toi32_i32$0 = $4 + 61 | 0;
    $25 = $116;
    HEAP8[i64toi32_i32$0 >> 0] = $25;
    HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $25 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $25 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $25 >>> 24 | 0;
    HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
    HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
    i64toi32_i32$2 = $4 + 176 | 0;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $121 = i64toi32_i32$1;
    i64toi32_i32$1 = $4 + 53 | 0;
    $26 = $121;
    HEAP8[i64toi32_i32$1 >> 0] = $26;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $26 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $26 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $26 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    i64toi32_i32$2 = $4 + 168 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $126 = i64toi32_i32$0;
    i64toi32_i32$0 = $4 + 45 | 0;
    $27 = $126;
    HEAP8[i64toi32_i32$0 >> 0] = $27;
    HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $27 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $27 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $27 >>> 24 | 0;
    HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
    HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
    i64toi32_i32$2 = $4;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 160 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 164 | 0) >> 2] | 0;
    $129 = i64toi32_i32$1;
    i64toi32_i32$1 = i64toi32_i32$2;
    $28 = $129;
    HEAP8[(i64toi32_i32$2 + 37 | 0) >> 0] = $28;
    HEAP8[(i64toi32_i32$2 + 38 | 0) >> 0] = $28 >>> 8 | 0;
    HEAP8[(i64toi32_i32$2 + 39 | 0) >> 0] = $28 >>> 16 | 0;
    HEAP8[(i64toi32_i32$2 + 40 | 0) >> 0] = $28 >>> 24 | 0;
    HEAP8[(i64toi32_i32$2 + 41 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$2 + 42 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$2 + 43 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$2 + 44 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    break label$1;
   }
   HEAP32[(($4 + 36 | 0) + 8 | 0) >> 2] = HEAP32[($4 + 12 | 0) >> 2] | 0;
   HEAP32[($4 + 40 | 0) >> 2] = $1;
   $5 = 1;
  }
  HEAP8[($4 + 36 | 0) >> 0] = $5;
  _ZN95_$LT$core__result__Result$LT$T$C$E$GT$$u20$as$u20$gstd__common__errors__IntoResult$LT$V$GT$$GT$11into_result17h9566b00ad181b7efE($0 | 0, $4 + 36 | 0 | 0);
  __stack_pointer = $4 + 192 | 0;
 }
 
 function _ZN4core5slice5index74_$LT$impl$u20$core__ops__index__Index$LT$I$GT$$u20$for$u20$$u5b$T$u5d$$GT$5index17ha5cfb5eb89161dbdE($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if ($3 >>> 0 <= $2 >>> 0) {
    break label$1
   }
   _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
   wasm2js_trap();
  }
  HEAP32[($0 + 4 | 0) >> 2] = $3;
  HEAP32[$0 >> 2] = $1;
 }
 
 function _ZN17gear_stack_buffer10trampoline17ha6993ef8393251dcE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2 = 0, $3 = 0, $17 = 0, $17$hi = 0, $20 = 0, $20$hi = 0;
  $2 = __stack_pointer - 48 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  i64toi32_i32$2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $17 = i64toi32_i32$0;
  $17$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $20 = i64toi32_i32$1;
  $20$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $17$hi;
  i64toi32_i32$1 = $20$hi;
  _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17h37d8b0a4e0ff07a5E($2 + 12 | 0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, $17 | 0, i64toi32_i32$0 | 0, $20 | 0, i64toi32_i32$1 | 0, $0 | 0, HEAP32[(HEAP32[$1 >> 2] | 0) >> 2] | 0 | 0);
  memcpy($3 | 0, $2 + 12 | 0 | 0, 36 | 0) | 0;
  __stack_pointer = $2 + 48 | 0;
 }
 
 function _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17h37d8b0a4e0ff07a5E($0, $1, $2, $2$hi, $3, $3$hi, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $79 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $140 = 0, $142 = 0, $143 = 0, $144 = 0, $70 = 0, $74 = 0, $141 = 0, $145 = 0, $197 = 0, $202 = 0, $207 = 0, $212 = 0, $217 = 0, $221 = 0, $295 = 0, $299 = 0, $304 = 0, $308 = 0, $372 = 0, $377 = 0, $382 = 0, $387 = 0, $437 = 0, $512 = 0, $517 = 0, $522 = 0, $527 = 0, $579 = 0, $584 = 0, $588 = 0, $662 = 0, $666 = 0, $717 = 0, $722 = 0, $727 = 0, $732 = 0, $739 = 0, $816 = 0, $821 = 0, $826 = 0, $831 = 0, $856 = 0, $861 = 0, $872 = 0, $877 = 0, $882 = 0, $887 = 0, $892 = 0, $895 = 0, $898 = 0, $903 = 0, $908 = 0, $913 = 0, $918 = 0, $923 = 0, $928 = 0, $933 = 0, $938 = 0, $943 = 0, $953 = 0, $958 = 0, $963 = 0, $968 = 0, $973 = 0, $978 = 0, $983 = 0, $988 = 0, $993 = 0;
  $6 = __stack_pointer - 272 | 0;
  __stack_pointer = $6;
  HEAP32[($6 + 192 | 0) >> 2] = $5;
  HEAP32[($6 + 188 | 0) >> 2] = $4;
  label$1 : {
   label$2 : {
    switch (HEAPU8[$1 >> 0] | 0 | 0) {
    default:
     HEAP8[$4 >> 0] = 0;
     HEAP32[($6 + 196 | 0) >> 2] = 1;
     $7 = HEAP32[($1 + 12 | 0) >> 2] | 0;
     _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $7 | 0);
     $5 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     $4 = HEAP32[($1 + 4 | 0) >> 2] | 0;
     HEAP32[($6 + 268 | 0) >> 2] = $4 ? $7 : 0;
     HEAP32[($6 + 264 | 0) >> 2] = $5;
     HEAP32[($6 + 260 | 0) >> 2] = $4;
     HEAP32[($6 + 256 | 0) >> 2] = 0;
     $7 = ($4 | 0) != (0 | 0);
     HEAP32[($6 + 252 | 0) >> 2] = $7;
     HEAP32[($6 + 248 | 0) >> 2] = $5;
     HEAP32[($6 + 244 | 0) >> 2] = $4;
     HEAP32[($6 + 240 | 0) >> 2] = 0;
     HEAP32[($6 + 236 | 0) >> 2] = $7;
     _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0097b3777cf64c9cE($6 + 176 | 0 | 0, $6 + 236 | 0 | 0);
     label$13 : {
      $4 = HEAP32[($6 + 176 | 0) >> 2] | 0;
      if (!$4) {
       break label$13
      }
      $5 = HEAP32[($6 + 180 | 0) >> 2] | 0;
      label$14 : while (1) {
       $7 = HEAP32[($6 + 196 | 0) >> 2] | 0;
       $8 = (HEAP32[($6 + 188 | 0) >> 2] | 0) + $7 | 0;
       i64toi32_i32$2 = $4;
       i64toi32_i32$0 = HEAP32[$4 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       $70 = i64toi32_i32$0;
       i64toi32_i32$0 = $8;
       $79 = $70;
       HEAP8[i64toi32_i32$0 >> 0] = $79;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $79 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $79 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $79 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $4 + 8 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $74 = i64toi32_i32$1;
       i64toi32_i32$1 = $8;
       $80 = $74;
       HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = $80;
       HEAP8[(i64toi32_i32$1 + 9 | 0) >> 0] = $80 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 10 | 0) >> 0] = $80 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 11 | 0) >> 0] = $80 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 12 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 13 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 14 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 15 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       HEAP32[($6 + 196 | 0) >> 2] = $7 + 16 | 0;
       _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17h32945f46ee63bd59E($5 | 0, $6 + 188 | 0 | 0);
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0097b3777cf64c9cE($6 + 168 | 0 | 0, $6 + 236 | 0 | 0);
       $5 = HEAP32[($6 + 172 | 0) >> 2] | 0;
       $4 = HEAP32[($6 + 168 | 0) >> 2] | 0;
       if ($4) {
        continue label$14
       }
       break label$14;
      };
     }
     $7 = HEAP32[($1 + 24 | 0) >> 2] | 0;
     _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $7 | 0);
     $5 = HEAP32[($1 + 20 | 0) >> 2] | 0;
     $4 = HEAP32[($1 + 16 | 0) >> 2] | 0;
     HEAP32[($6 + 232 | 0) >> 2] = $4 ? $7 : 0;
     HEAP32[($6 + 228 | 0) >> 2] = $5;
     HEAP32[($6 + 224 | 0) >> 2] = $4;
     HEAP32[($6 + 220 | 0) >> 2] = 0;
     $7 = ($4 | 0) != (0 | 0);
     HEAP32[($6 + 216 | 0) >> 2] = $7;
     HEAP32[($6 + 212 | 0) >> 2] = $5;
     HEAP32[($6 + 208 | 0) >> 2] = $4;
     HEAP32[($6 + 204 | 0) >> 2] = 0;
     HEAP32[($6 + 200 | 0) >> 2] = $7;
     _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h742bc81e9856f1bfE($6 + 160 | 0 | 0, $6 + 200 | 0 | 0);
     label$15 : {
      $5 = HEAP32[($6 + 160 | 0) >> 2] | 0;
      if (!$5) {
       break label$15
      }
      $4 = HEAP32[($6 + 164 | 0) >> 2] | 0;
      $9 = HEAP32[($6 + 188 | 0) >> 2] | 0;
      $7 = HEAP32[($6 + 196 | 0) >> 2] | 0;
      label$16 : while (1) {
       $8 = $9 + $7 | 0;
       i64toi32_i32$2 = $5;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $141 = i64toi32_i32$0;
       i64toi32_i32$0 = $8;
       $81 = $141;
       HEAP8[i64toi32_i32$0 >> 0] = $81;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $81 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $81 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $81 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $145 = i64toi32_i32$1;
       i64toi32_i32$1 = $8;
       $82 = $145;
       HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = $82;
       HEAP8[(i64toi32_i32$1 + 9 | 0) >> 0] = $82 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 10 | 0) >> 0] = $82 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 11 | 0) >> 0] = $82 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 12 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 13 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 14 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 15 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       HEAP32[($6 + 196 | 0) >> 2] = $7 + 16 | 0;
       $7 = HEAP32[($4 + 8 | 0) >> 2] | 0;
       _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $7 | 0);
       $5 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       $4 = HEAP32[$4 >> 2] | 0;
       HEAP32[($6 + 268 | 0) >> 2] = $4 ? $7 : 0;
       HEAP32[($6 + 264 | 0) >> 2] = $5;
       HEAP32[($6 + 260 | 0) >> 2] = $4;
       HEAP32[($6 + 256 | 0) >> 2] = 0;
       $7 = ($4 | 0) != (0 | 0);
       HEAP32[($6 + 252 | 0) >> 2] = $7;
       HEAP32[($6 + 248 | 0) >> 2] = $5;
       HEAP32[($6 + 244 | 0) >> 2] = $4;
       HEAP32[($6 + 240 | 0) >> 2] = 0;
       HEAP32[($6 + 236 | 0) >> 2] = $7;
       $9 = HEAP32[($6 + 188 | 0) >> 2] | 0;
       $7 = HEAP32[($6 + 196 | 0) >> 2] | 0;
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17hd7dfe373379990f8E($6 + 152 | 0 | 0, $6 + 236 | 0 | 0);
       label$17 : {
        $5 = HEAP32[($6 + 152 | 0) >> 2] | 0;
        if (!$5) {
         break label$17
        }
        $8 = HEAP32[($6 + 156 | 0) >> 2] | 0;
        label$18 : while (1) {
         $4 = $9 + $7 | 0;
         i64toi32_i32$2 = $5;
         i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         $197 = i64toi32_i32$0;
         i64toi32_i32$0 = $4;
         $83 = $197;
         HEAP8[i64toi32_i32$0 >> 0] = $83;
         HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $83 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $83 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $83 >>> 24 | 0;
         HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
         HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
         i64toi32_i32$2 = i64toi32_i32$2 + 24 | 0;
         i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         $202 = i64toi32_i32$1;
         i64toi32_i32$1 = $4 + 24 | 0;
         $84 = $202;
         HEAP8[i64toi32_i32$1 >> 0] = $84;
         HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $84 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $84 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $84 >>> 24 | 0;
         HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
         HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
         i64toi32_i32$2 = $5 + 16 | 0;
         i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         $207 = i64toi32_i32$0;
         i64toi32_i32$0 = $4 + 16 | 0;
         $85 = $207;
         HEAP8[i64toi32_i32$0 >> 0] = $85;
         HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $85 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $85 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $85 >>> 24 | 0;
         HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
         HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
         i64toi32_i32$2 = $5 + 8 | 0;
         i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         $212 = i64toi32_i32$1;
         i64toi32_i32$1 = $4 + 8 | 0;
         $86 = $212;
         HEAP8[i64toi32_i32$1 >> 0] = $86;
         HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $86 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $86 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $86 >>> 24 | 0;
         HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
         HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
         i64toi32_i32$2 = $8 + 8 | 0;
         i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
         i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
         $217 = i64toi32_i32$0;
         i64toi32_i32$0 = $4 + 40 | 0;
         $87 = $217;
         HEAP8[i64toi32_i32$0 >> 0] = $87;
         HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $87 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $87 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $87 >>> 24 | 0;
         HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
         HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
         i64toi32_i32$2 = $8;
         i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
         i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
         $221 = i64toi32_i32$1;
         i64toi32_i32$1 = $4 + 32 | 0;
         $88 = $221;
         HEAP8[i64toi32_i32$1 >> 0] = $88;
         HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $88 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $88 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $88 >>> 24 | 0;
         HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
         HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
         $7 = $7 + 48 | 0;
         _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17hd7dfe373379990f8E($6 + 144 | 0 | 0, $6 + 236 | 0 | 0);
         $8 = HEAP32[($6 + 148 | 0) >> 2] | 0;
         $5 = HEAP32[($6 + 144 | 0) >> 2] | 0;
         if ($5) {
          continue label$18
         }
         break label$18;
        };
       }
       HEAP32[($6 + 196 | 0) >> 2] = $7;
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h742bc81e9856f1bfE($6 + 136 | 0 | 0, $6 + 200 | 0 | 0);
       $4 = HEAP32[($6 + 140 | 0) >> 2] | 0;
       $5 = HEAP32[($6 + 136 | 0) >> 2] | 0;
       if ($5) {
        continue label$16
       }
       break label$16;
      };
     }
     $7 = HEAP32[($1 + 36 | 0) >> 2] | 0;
     _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $7 | 0);
     $5 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     $4 = HEAP32[($1 + 28 | 0) >> 2] | 0;
     HEAP32[($6 + 268 | 0) >> 2] = $4 ? $7 : 0;
     HEAP32[($6 + 264 | 0) >> 2] = $5;
     HEAP32[($6 + 260 | 0) >> 2] = $4;
     HEAP32[($6 + 256 | 0) >> 2] = 0;
     $7 = ($4 | 0) != (0 | 0);
     HEAP32[($6 + 252 | 0) >> 2] = $7;
     HEAP32[($6 + 248 | 0) >> 2] = $5;
     HEAP32[($6 + 244 | 0) >> 2] = $4;
     HEAP32[($6 + 240 | 0) >> 2] = 0;
     HEAP32[($6 + 236 | 0) >> 2] = $7;
     $5 = HEAP32[($6 + 196 | 0) >> 2] | 0;
     _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0d8a139ea52976d5E($6 + 128 | 0 | 0, $6 + 236 | 0 | 0);
     label$19 : {
      $7 = HEAP32[($6 + 128 | 0) >> 2] | 0;
      if (!$7) {
       break label$19
      }
      $8 = HEAP32[($6 + 132 | 0) >> 2] | 0;
      $9 = HEAP32[($6 + 188 | 0) >> 2] | 0;
      label$20 : while (1) {
       $4 = $9 + $5 | 0;
       i64toi32_i32$2 = $7;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $295 = i64toi32_i32$0;
       i64toi32_i32$0 = $4;
       $89 = $295;
       HEAP8[i64toi32_i32$0 >> 0] = $89;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $89 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $89 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $89 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $299 = i64toi32_i32$1;
       i64toi32_i32$1 = $4;
       $90 = $299;
       HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = $90;
       HEAP8[(i64toi32_i32$1 + 9 | 0) >> 0] = $90 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 10 | 0) >> 0] = $90 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 11 | 0) >> 0] = $90 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 12 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 13 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 14 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 15 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $8 + 8 | 0;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $304 = i64toi32_i32$0;
       i64toi32_i32$0 = $4 + 24 | 0;
       $91 = $304;
       HEAP8[i64toi32_i32$0 >> 0] = $91;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $91 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $91 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $91 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $8;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $308 = i64toi32_i32$1;
       i64toi32_i32$1 = $4 + 16 | 0;
       $92 = $308;
       HEAP8[i64toi32_i32$1 >> 0] = $92;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $92 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $92 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $92 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       $5 = $5 + 32 | 0;
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0d8a139ea52976d5E($6 + 120 | 0 | 0, $6 + 236 | 0 | 0);
       $8 = HEAP32[($6 + 124 | 0) >> 2] | 0;
       $7 = HEAP32[($6 + 120 | 0) >> 2] | 0;
       if ($7) {
        continue label$20
       }
       break label$20;
      };
     }
     HEAP32[($6 + 196 | 0) >> 2] = $5;
     $7 = HEAP32[($1 + 48 | 0) >> 2] | 0;
     _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $7 | 0);
     $5 = HEAP32[($1 + 44 | 0) >> 2] | 0;
     $4 = HEAP32[($1 + 40 | 0) >> 2] | 0;
     HEAP32[($6 + 232 | 0) >> 2] = $4 ? $7 : 0;
     HEAP32[($6 + 228 | 0) >> 2] = $5;
     HEAP32[($6 + 224 | 0) >> 2] = $4;
     HEAP32[($6 + 220 | 0) >> 2] = 0;
     $7 = ($4 | 0) != (0 | 0);
     HEAP32[($6 + 216 | 0) >> 2] = $7;
     HEAP32[($6 + 212 | 0) >> 2] = $5;
     HEAP32[($6 + 208 | 0) >> 2] = $4;
     HEAP32[($6 + 204 | 0) >> 2] = 0;
     HEAP32[($6 + 200 | 0) >> 2] = $7;
     _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($6 + 112 | 0 | 0, $6 + 200 | 0 | 0);
     label$21 : {
      $4 = HEAP32[($6 + 112 | 0) >> 2] | 0;
      if (!$4) {
       break label$21
      }
      $5 = HEAP32[($6 + 116 | 0) >> 2] | 0;
      label$22 : while (1) {
       $8 = HEAP32[($6 + 196 | 0) >> 2] | 0;
       $7 = (HEAP32[($6 + 188 | 0) >> 2] | 0) + $8 | 0;
       i64toi32_i32$2 = $4;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $372 = i64toi32_i32$0;
       i64toi32_i32$0 = $7;
       $93 = $372;
       HEAP8[i64toi32_i32$0 >> 0] = $93;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $93 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $93 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $93 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $377 = i64toi32_i32$1;
       i64toi32_i32$1 = $7 + 8 | 0;
       $94 = $377;
       HEAP8[i64toi32_i32$1 >> 0] = $94;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $94 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $94 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $94 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $4 + 16 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $382 = i64toi32_i32$0;
       i64toi32_i32$0 = $7 + 16 | 0;
       $95 = $382;
       HEAP8[i64toi32_i32$0 >> 0] = $95;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $95 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $95 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $95 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $4 + 24 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $387 = i64toi32_i32$1;
       i64toi32_i32$1 = $7 + 24 | 0;
       $96 = $387;
       HEAP8[i64toi32_i32$1 >> 0] = $96;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $96 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $96 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $96 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       HEAP32[($6 + 196 | 0) >> 2] = $8 + 32 | 0;
       $8 = HEAP32[($5 + 8 | 0) >> 2] | 0;
       _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $8 | 0);
       $7 = HEAP32[($5 + 4 | 0) >> 2] | 0;
       $4 = HEAP32[$5 >> 2] | 0;
       HEAP32[($6 + 268 | 0) >> 2] = $4 ? $8 : 0;
       HEAP32[($6 + 264 | 0) >> 2] = $7;
       HEAP32[($6 + 260 | 0) >> 2] = $4;
       HEAP32[($6 + 256 | 0) >> 2] = 0;
       $5 = ($4 | 0) != (0 | 0);
       HEAP32[($6 + 252 | 0) >> 2] = $5;
       HEAP32[($6 + 248 | 0) >> 2] = $7;
       HEAP32[($6 + 244 | 0) >> 2] = $4;
       HEAP32[($6 + 240 | 0) >> 2] = 0;
       HEAP32[($6 + 236 | 0) >> 2] = $5;
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h4a236312a7872142E($6 + 104 | 0 | 0, $6 + 236 | 0 | 0);
       label$23 : {
        $4 = HEAP32[($6 + 104 | 0) >> 2] | 0;
        if (!$4) {
         break label$23
        }
        $5 = HEAP32[($6 + 108 | 0) >> 2] | 0;
        label$24 : while (1) {
         $7 = HEAP32[($6 + 196 | 0) >> 2] | 0;
         i64toi32_i32$2 = $4;
         i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
         i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
         $437 = i64toi32_i32$0;
         i64toi32_i32$0 = (HEAP32[($6 + 188 | 0) >> 2] | 0) + $7 | 0;
         $97 = $437;
         HEAP8[i64toi32_i32$0 >> 0] = $97;
         HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $97 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $97 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $97 >>> 24 | 0;
         HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
         HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
         HEAP32[($6 + 196 | 0) >> 2] = $7 + 8 | 0;
         _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17h32945f46ee63bd59E($5 | 0, $6 + 188 | 0 | 0);
         _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h4a236312a7872142E($6 + 96 | 0 | 0, $6 + 236 | 0 | 0);
         $5 = HEAP32[($6 + 100 | 0) >> 2] | 0;
         $4 = HEAP32[($6 + 96 | 0) >> 2] | 0;
         if ($4) {
          continue label$24
         }
         break label$24;
        };
       }
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($6 + 88 | 0 | 0, $6 + 200 | 0 | 0);
       $5 = HEAP32[($6 + 92 | 0) >> 2] | 0;
       $4 = HEAP32[($6 + 88 | 0) >> 2] | 0;
       if ($4) {
        continue label$22
       }
       break label$22;
      };
     }
     $7 = HEAP32[($1 + 60 | 0) >> 2] | 0;
     _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $7 | 0);
     $5 = HEAP32[($1 + 56 | 0) >> 2] | 0;
     $4 = HEAP32[($1 + 52 | 0) >> 2] | 0;
     HEAP32[($6 + 232 | 0) >> 2] = $4 ? $7 : 0;
     HEAP32[($6 + 228 | 0) >> 2] = $5;
     HEAP32[($6 + 224 | 0) >> 2] = $4;
     HEAP32[($6 + 220 | 0) >> 2] = 0;
     $7 = ($4 | 0) != (0 | 0);
     HEAP32[($6 + 216 | 0) >> 2] = $7;
     HEAP32[($6 + 212 | 0) >> 2] = $5;
     HEAP32[($6 + 208 | 0) >> 2] = $4;
     HEAP32[($6 + 204 | 0) >> 2] = 0;
     HEAP32[($6 + 200 | 0) >> 2] = $7;
     _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($6 + 80 | 0 | 0, $6 + 200 | 0 | 0);
     label$25 : {
      $5 = HEAP32[($6 + 80 | 0) >> 2] | 0;
      if (!$5) {
       break label$25
      }
      $7 = HEAP32[($6 + 84 | 0) >> 2] | 0;
      $4 = HEAP32[($6 + 196 | 0) >> 2] | 0;
      label$26 : while (1) {
       $8 = (HEAP32[($6 + 188 | 0) >> 2] | 0) + $4 | 0;
       i64toi32_i32$2 = $5;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $512 = i64toi32_i32$1;
       i64toi32_i32$1 = $8;
       $98 = $512;
       HEAP8[i64toi32_i32$1 >> 0] = $98;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $98 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $98 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $98 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $517 = i64toi32_i32$0;
       i64toi32_i32$0 = $8 + 8 | 0;
       $99 = $517;
       HEAP8[i64toi32_i32$0 >> 0] = $99;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $99 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $99 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $99 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $5 + 16 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $522 = i64toi32_i32$1;
       i64toi32_i32$1 = $8 + 16 | 0;
       $100 = $522;
       HEAP8[i64toi32_i32$1 >> 0] = $100;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $100 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $100 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $100 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $5 + 24 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $527 = i64toi32_i32$0;
       i64toi32_i32$0 = $8 + 24 | 0;
       $101 = $527;
       HEAP8[i64toi32_i32$0 >> 0] = $101;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $101 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $101 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $101 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       HEAP32[($6 + 196 | 0) >> 2] = $4 + 32 | 0;
       $8 = HEAP32[($7 + 8 | 0) >> 2] | 0;
       _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $8 | 0);
       $5 = HEAP32[($7 + 4 | 0) >> 2] | 0;
       $4 = HEAP32[$7 >> 2] | 0;
       HEAP32[($6 + 268 | 0) >> 2] = $4 ? $8 : 0;
       HEAP32[($6 + 264 | 0) >> 2] = $5;
       HEAP32[($6 + 260 | 0) >> 2] = $4;
       HEAP32[($6 + 256 | 0) >> 2] = 0;
       $7 = ($4 | 0) != (0 | 0);
       HEAP32[($6 + 252 | 0) >> 2] = $7;
       HEAP32[($6 + 248 | 0) >> 2] = $5;
       HEAP32[($6 + 244 | 0) >> 2] = $4;
       HEAP32[($6 + 240 | 0) >> 2] = 0;
       HEAP32[($6 + 236 | 0) >> 2] = $7;
       $4 = HEAP32[($6 + 196 | 0) >> 2] | 0;
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17ha00a7e5d4f0bc857E($6 + 72 | 0 | 0, $6 + 236 | 0 | 0);
       label$27 : {
        $8 = HEAP32[($6 + 72 | 0) >> 2] | 0;
        if (!$8) {
         break label$27
        }
        $5 = HEAP32[($6 + 76 | 0) >> 2] | 0;
        $9 = HEAP32[($6 + 188 | 0) >> 2] | 0;
        label$28 : while (1) {
         $7 = $9 + $4 | 0;
         i64toi32_i32$2 = $8;
         i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
         i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
         $579 = i64toi32_i32$1;
         i64toi32_i32$1 = $7;
         $102 = $579;
         HEAP8[i64toi32_i32$1 >> 0] = $102;
         HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $102 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $102 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $102 >>> 24 | 0;
         HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
         HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
         i64toi32_i32$2 = $5 + 8 | 0;
         i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
         i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
         $584 = i64toi32_i32$0;
         i64toi32_i32$0 = $7 + 16 | 0;
         $103 = $584;
         HEAP8[i64toi32_i32$0 >> 0] = $103;
         HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $103 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $103 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $103 >>> 24 | 0;
         HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
         HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
         i64toi32_i32$2 = $5;
         i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
         i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
         $588 = i64toi32_i32$1;
         i64toi32_i32$1 = $7 + 8 | 0;
         $104 = $588;
         HEAP8[i64toi32_i32$1 >> 0] = $104;
         HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $104 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $104 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $104 >>> 24 | 0;
         HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
         HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
         $4 = $4 + 24 | 0;
         HEAP32[($6 + 196 | 0) >> 2] = $4;
         _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17ha00a7e5d4f0bc857E($6 + 64 | 0 | 0, $6 + 236 | 0 | 0);
         $5 = HEAP32[($6 + 68 | 0) >> 2] | 0;
         $8 = HEAP32[($6 + 64 | 0) >> 2] | 0;
         if ($8) {
          continue label$28
         }
         break label$28;
        };
       }
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($6 + 56 | 0 | 0, $6 + 200 | 0 | 0);
       $7 = HEAP32[($6 + 60 | 0) >> 2] | 0;
       $5 = HEAP32[($6 + 56 | 0) >> 2] | 0;
       if ($5) {
        continue label$26
       }
       break label$26;
      };
     }
     $7 = HEAP32[($1 + 72 | 0) >> 2] | 0;
     _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $7 | 0);
     $5 = HEAP32[($1 + 68 | 0) >> 2] | 0;
     $4 = HEAP32[($1 + 64 | 0) >> 2] | 0;
     HEAP32[($6 + 232 | 0) >> 2] = $4 ? $7 : 0;
     HEAP32[($6 + 228 | 0) >> 2] = $5;
     HEAP32[($6 + 224 | 0) >> 2] = $4;
     HEAP32[($6 + 220 | 0) >> 2] = 0;
     $7 = ($4 | 0) != (0 | 0);
     HEAP32[($6 + 216 | 0) >> 2] = $7;
     HEAP32[($6 + 212 | 0) >> 2] = $5;
     HEAP32[($6 + 208 | 0) >> 2] = $4;
     HEAP32[($6 + 204 | 0) >> 2] = 0;
     HEAP32[($6 + 200 | 0) >> 2] = $7;
     _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h742bc81e9856f1bfE($6 + 48 | 0 | 0, $6 + 200 | 0 | 0);
     label$29 : {
      $5 = HEAP32[($6 + 48 | 0) >> 2] | 0;
      if (!$5) {
       break label$29
      }
      $4 = HEAP32[($6 + 52 | 0) >> 2] | 0;
      $9 = HEAP32[($6 + 188 | 0) >> 2] | 0;
      $7 = HEAP32[($6 + 196 | 0) >> 2] | 0;
      label$30 : while (1) {
       $8 = $9 + $7 | 0;
       i64toi32_i32$2 = $5;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $662 = i64toi32_i32$0;
       i64toi32_i32$0 = $8;
       $105 = $662;
       HEAP8[i64toi32_i32$0 >> 0] = $105;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $105 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $105 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $105 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $666 = i64toi32_i32$1;
       i64toi32_i32$1 = $8;
       $106 = $666;
       HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = $106;
       HEAP8[(i64toi32_i32$1 + 9 | 0) >> 0] = $106 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 10 | 0) >> 0] = $106 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 11 | 0) >> 0] = $106 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 12 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 13 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 14 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 15 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       HEAP32[($6 + 196 | 0) >> 2] = $7 + 16 | 0;
       $9 = HEAP32[($4 + 8 | 0) >> 2] | 0;
       _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $9 | 0);
       $5 = 0;
       $7 = 0;
       label$31 : {
        $8 = HEAP32[$4 >> 2] | 0;
        if (!$8) {
         break label$31
        }
        HEAP32[($6 + 260 | 0) >> 2] = $8;
        HEAP32[($6 + 256 | 0) >> 2] = 0;
        HEAP32[($6 + 244 | 0) >> 2] = $8;
        HEAP32[($6 + 240 | 0) >> 2] = 0;
        $4 = HEAP32[($4 + 4 | 0) >> 2] | 0;
        HEAP32[($6 + 264 | 0) >> 2] = $4;
        HEAP32[($6 + 248 | 0) >> 2] = $4;
        $5 = 1;
        $7 = $9;
       }
       HEAP32[($6 + 268 | 0) >> 2] = $7;
       HEAP32[($6 + 252 | 0) >> 2] = $5;
       HEAP32[($6 + 236 | 0) >> 2] = $5;
       $9 = HEAP32[($6 + 188 | 0) >> 2] | 0;
       $7 = HEAP32[($6 + 196 | 0) >> 2] | 0;
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h8b01ee9ed9a96005E($6 + 40 | 0 | 0, $6 + 236 | 0 | 0);
       label$32 : {
        $4 = HEAP32[($6 + 40 | 0) >> 2] | 0;
        if (!$4) {
         break label$32
        }
        $8 = HEAP32[($6 + 44 | 0) >> 2] | 0;
        label$33 : while (1) {
         $5 = $9 + $7 | 0;
         i64toi32_i32$2 = $4;
         i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         $717 = i64toi32_i32$0;
         i64toi32_i32$0 = $5;
         $107 = $717;
         HEAP8[i64toi32_i32$0 >> 0] = $107;
         HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $107 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $107 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $107 >>> 24 | 0;
         HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
         HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
         i64toi32_i32$2 = i64toi32_i32$2 + 24 | 0;
         i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         $722 = i64toi32_i32$1;
         i64toi32_i32$1 = $5 + 24 | 0;
         $108 = $722;
         HEAP8[i64toi32_i32$1 >> 0] = $108;
         HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $108 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $108 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $108 >>> 24 | 0;
         HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
         HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
         i64toi32_i32$2 = $4 + 16 | 0;
         i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         $727 = i64toi32_i32$0;
         i64toi32_i32$0 = $5 + 16 | 0;
         $109 = $727;
         HEAP8[i64toi32_i32$0 >> 0] = $109;
         HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $109 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $109 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $109 >>> 24 | 0;
         HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
         HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
         i64toi32_i32$2 = $4 + 8 | 0;
         i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
         $732 = i64toi32_i32$1;
         i64toi32_i32$1 = $5 + 8 | 0;
         $110 = $732;
         HEAP8[i64toi32_i32$1 >> 0] = $110;
         HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $110 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $110 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $110 >>> 24 | 0;
         HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
         HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
         HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
         HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
         HEAP32[($6 + 196 | 0) >> 2] = $7 + 32 | 0;
         i64toi32_i32$2 = $8;
         i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
         i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
         $739 = i64toi32_i32$0;
         i64toi32_i32$0 = $5 + 32 | 0;
         $111 = $739;
         HEAP8[i64toi32_i32$0 >> 0] = $111;
         HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $111 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $111 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $111 >>> 24 | 0;
         HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
         HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
         HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
         HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
         $7 = $7 + 40 | 0;
         HEAP32[($6 + 196 | 0) >> 2] = $7;
         _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h8b01ee9ed9a96005E($6 + 32 | 0 | 0, $6 + 236 | 0 | 0);
         $8 = HEAP32[($6 + 36 | 0) >> 2] | 0;
         $4 = HEAP32[($6 + 32 | 0) >> 2] | 0;
         if ($4) {
          continue label$33
         }
         break label$33;
        };
       }
       _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h742bc81e9856f1bfE($6 + 24 | 0 | 0, $6 + 200 | 0 | 0);
       $4 = HEAP32[($6 + 28 | 0) >> 2] | 0;
       $5 = HEAP32[($6 + 24 | 0) >> 2] | 0;
       if ($5) {
        continue label$30
       }
       break label$30;
      };
     }
     _ZN107_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$GT$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h92a33d0cd0cdf5dbE($1 + 76 | 0 | 0, $6 + 188 | 0 | 0);
     $7 = HEAP32[($1 + 96 | 0) >> 2] | 0;
     _ZN18parity_scale_codec5codec21compact_encode_len_to17h34da260611a68292E($6 + 188 | 0 | 0, $7 | 0);
     $5 = HEAP32[($1 + 92 | 0) >> 2] | 0;
     $4 = HEAP32[($1 + 88 | 0) >> 2] | 0;
     HEAP32[($6 + 268 | 0) >> 2] = $4 ? $7 : 0;
     HEAP32[($6 + 264 | 0) >> 2] = $5;
     HEAP32[($6 + 260 | 0) >> 2] = $4;
     HEAP32[($6 + 256 | 0) >> 2] = 0;
     $7 = ($4 | 0) != (0 | 0);
     HEAP32[($6 + 252 | 0) >> 2] = $7;
     HEAP32[($6 + 248 | 0) >> 2] = $5;
     HEAP32[($6 + 244 | 0) >> 2] = $4;
     HEAP32[($6 + 240 | 0) >> 2] = 0;
     HEAP32[($6 + 236 | 0) >> 2] = $7;
     _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($6 + 16 | 0 | 0, $6 + 236 | 0 | 0);
     $4 = HEAP32[($6 + 16 | 0) >> 2] | 0;
     if (!$4) {
      break label$1
     }
     $7 = HEAP32[($6 + 20 | 0) >> 2] | 0;
     label$34 : while (1) {
      $8 = HEAP32[($6 + 196 | 0) >> 2] | 0;
      $5 = (HEAP32[($6 + 188 | 0) >> 2] | 0) + $8 | 0;
      i64toi32_i32$2 = $4;
      i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $816 = i64toi32_i32$1;
      i64toi32_i32$1 = $5;
      $112 = $816;
      HEAP8[i64toi32_i32$1 >> 0] = $112;
      HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $112 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $112 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $112 >>> 24 | 0;
      HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
      HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
      i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
      i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $821 = i64toi32_i32$0;
      i64toi32_i32$0 = $5 + 8 | 0;
      $113 = $821;
      HEAP8[i64toi32_i32$0 >> 0] = $113;
      HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $113 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $113 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $113 >>> 24 | 0;
      HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
      HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
      i64toi32_i32$2 = $4 + 16 | 0;
      i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $826 = i64toi32_i32$1;
      i64toi32_i32$1 = $5 + 16 | 0;
      $114 = $826;
      HEAP8[i64toi32_i32$1 >> 0] = $114;
      HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $114 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $114 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $114 >>> 24 | 0;
      HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
      HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
      i64toi32_i32$2 = $4 + 24 | 0;
      i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $831 = i64toi32_i32$0;
      i64toi32_i32$0 = $5 + 24 | 0;
      $115 = $831;
      HEAP8[i64toi32_i32$0 >> 0] = $115;
      HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $115 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $115 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $115 >>> 24 | 0;
      HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
      HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
      HEAP32[($6 + 196 | 0) >> 2] = $8 + 32 | 0;
      _ZN107_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$GT$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h92a33d0cd0cdf5dbE($7 | 0, $6 + 188 | 0 | 0);
      _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($6 + 8 | 0 | 0, $6 + 236 | 0 | 0);
      $7 = HEAP32[($6 + 12 | 0) >> 2] | 0;
      $4 = HEAP32[($6 + 8 | 0) >> 2] | 0;
      if ($4) {
       continue label$34
      }
      break label$1;
     };
    case 1:
     HEAP8[$4 >> 0] = 1;
     HEAP32[($6 + 196 | 0) >> 2] = 1;
     _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17h32945f46ee63bd59E($1 + 8 | 0 | 0, $6 + 188 | 0 | 0);
     break label$1;
    case 2:
     HEAP8[$4 >> 0] = 2;
     i64toi32_i32$2 = $1;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
     $856 = i64toi32_i32$1;
     i64toi32_i32$1 = $4;
     $116 = $856;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $116;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $116 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $116 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = $116 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = i64toi32_i32$2 + 16 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $861 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 9 | 0;
     $117 = $861;
     HEAP8[i64toi32_i32$0 >> 0] = $117;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $117 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $117 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $117 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     HEAP32[($6 + 196 | 0) >> 2] = 17;
     break label$1;
    case 3:
     HEAP8[$4 >> 0] = 3;
     HEAP32[($6 + 196 | 0) >> 2] = 1;
     _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17h32945f46ee63bd59E($1 + 8 | 0 | 0, $6 + 188 | 0 | 0);
     break label$1;
    case 4:
     HEAP8[$4 >> 0] = 4;
     i64toi32_i32$2 = $1;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $872 = i64toi32_i32$1;
     i64toi32_i32$1 = $4;
     $118 = $872;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $118;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $118 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $118 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = $118 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = i64toi32_i32$2 + 9 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $877 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 9 | 0;
     $119 = $877;
     HEAP8[i64toi32_i32$0 >> 0] = $119;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $119 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $119 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $119 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 17 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $882 = i64toi32_i32$1;
     i64toi32_i32$1 = $4 + 17 | 0;
     $120 = $882;
     HEAP8[i64toi32_i32$1 >> 0] = $120;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $120 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $120 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $120 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 25 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $887 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 25 | 0;
     $121 = $887;
     HEAP8[i64toi32_i32$0 >> 0] = $121;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $121 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $121 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $121 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     HEAP32[($6 + 196 | 0) >> 2] = 33;
     break label$1;
    case 5:
     HEAP8[$4 >> 0] = 5;
     i64toi32_i32$2 = $1;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
     $892 = i64toi32_i32$1;
     i64toi32_i32$1 = $4;
     $122 = $892;
     HEAP8[(i64toi32_i32$1 + 33 | 0) >> 0] = $122;
     HEAP8[(i64toi32_i32$1 + 34 | 0) >> 0] = $122 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 35 | 0) >> 0] = $122 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 36 | 0) >> 0] = $122 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 37 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 38 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 39 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 40 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 24 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 28 | 0) >> 2] | 0;
     $895 = i64toi32_i32$0;
     i64toi32_i32$0 = $4;
     $123 = $895;
     HEAP8[(i64toi32_i32$0 + 49 | 0) >> 0] = $123;
     HEAP8[(i64toi32_i32$0 + 50 | 0) >> 0] = $123 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 51 | 0) >> 0] = $123 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 52 | 0) >> 0] = $123 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 53 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 54 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 55 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 56 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 40 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 41 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 42 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 43 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 44 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 45 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 46 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 47 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $898 = i64toi32_i32$1;
     i64toi32_i32$1 = $4;
     $124 = $898;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $124;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $124 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $124 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = $124 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = i64toi32_i32$2 + 16 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $903 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 41 | 0;
     $125 = $903;
     HEAP8[i64toi32_i32$0 >> 0] = $125;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $125 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $125 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $125 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 32 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $908 = i64toi32_i32$1;
     i64toi32_i32$1 = $4 + 57 | 0;
     $126 = $908;
     HEAP8[i64toi32_i32$1 >> 0] = $126;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $126 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $126 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $126 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 48 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $913 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 9 | 0;
     $127 = $913;
     HEAP8[i64toi32_i32$0 >> 0] = $127;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $127 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $127 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $127 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 56 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $918 = i64toi32_i32$1;
     i64toi32_i32$1 = $4 + 17 | 0;
     $128 = $918;
     HEAP8[i64toi32_i32$1 >> 0] = $128;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $128 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $128 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $128 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 64 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $923 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 25 | 0;
     $129 = $923;
     HEAP8[i64toi32_i32$0 >> 0] = $129;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $129 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $129 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $129 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     HEAP32[($6 + 196 | 0) >> 2] = 65;
     break label$1;
    case 6:
     HEAP8[$4 >> 0] = 6;
     i64toi32_i32$2 = $1;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $928 = i64toi32_i32$1;
     i64toi32_i32$1 = $4;
     $130 = $928;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $130;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $130 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $130 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = $130 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = i64toi32_i32$2 + 9 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $933 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 9 | 0;
     $131 = $933;
     HEAP8[i64toi32_i32$0 >> 0] = $131;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $131 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $131 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $131 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 17 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $938 = i64toi32_i32$1;
     i64toi32_i32$1 = $4 + 17 | 0;
     $132 = $938;
     HEAP8[i64toi32_i32$1 >> 0] = $132;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $132 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $132 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $132 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 25 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $943 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 25 | 0;
     $133 = $943;
     HEAP8[i64toi32_i32$0 >> 0] = $133;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $133 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $133 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $133 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     HEAP32[($6 + 196 | 0) >> 2] = 33;
     break label$1;
    case 7:
     HEAP8[$4 >> 0] = 7;
     $134 = HEAP32[($1 + 4 | 0) >> 2] | 0;
     HEAP8[($4 + 1 | 0) >> 0] = $134;
     HEAP8[($4 + 2 | 0) >> 0] = $134 >>> 8 | 0;
     HEAP8[($4 + 3 | 0) >> 0] = $134 >>> 16 | 0;
     HEAP8[($4 + 4 | 0) >> 0] = $134 >>> 24 | 0;
     HEAP32[($6 + 196 | 0) >> 2] = 5;
     break label$1;
    case 8:
     HEAP8[$4 >> 0] = 8;
     i64toi32_i32$2 = $1;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
     $953 = i64toi32_i32$1;
     i64toi32_i32$1 = $4;
     $135 = $953;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $135;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $135 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $135 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = $135 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     HEAP32[($6 + 196 | 0) >> 2] = 9;
     break label$1;
    case 9:
     HEAP8[$4 >> 0] = 9;
     i64toi32_i32$2 = $1;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $958 = i64toi32_i32$0;
     i64toi32_i32$0 = $4;
     $136 = $958;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $136;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $136 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $136 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = $136 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 8 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = i64toi32_i32$2 + 9 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $963 = i64toi32_i32$1;
     i64toi32_i32$1 = $4 + 9 | 0;
     $137 = $963;
     HEAP8[i64toi32_i32$1 >> 0] = $137;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $137 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $137 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $137 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 17 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $968 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 17 | 0;
     $138 = $968;
     HEAP8[i64toi32_i32$0 >> 0] = $138;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $138 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $138 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $138 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 25 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $973 = i64toi32_i32$1;
     i64toi32_i32$1 = $4 + 25 | 0;
     $139 = $973;
     HEAP8[i64toi32_i32$1 >> 0] = $139;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $139 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $139 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $139 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     HEAP32[($6 + 196 | 0) >> 2] = 33;
     break label$1;
    case 10:
     break label$2;
    };
   }
   HEAP8[$4 >> 0] = 10;
   i64toi32_i32$2 = $1;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $978 = i64toi32_i32$0;
   i64toi32_i32$0 = $4;
   $140 = $978;
   HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $140;
   HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $140 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $140 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = $140 >>> 24 | 0;
   HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1;
   HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 8 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
   i64toi32_i32$2 = i64toi32_i32$2 + 9 | 0;
   i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $983 = i64toi32_i32$1;
   i64toi32_i32$1 = $4 + 9 | 0;
   $142 = $983;
   HEAP8[i64toi32_i32$1 >> 0] = $142;
   HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $142 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $142 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $142 >>> 24 | 0;
   HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
   HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
   i64toi32_i32$2 = $1 + 17 | 0;
   i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $988 = i64toi32_i32$0;
   i64toi32_i32$0 = $4 + 17 | 0;
   $143 = $988;
   HEAP8[i64toi32_i32$0 >> 0] = $143;
   HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $143 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $143 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $143 >>> 24 | 0;
   HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
   HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
   i64toi32_i32$2 = $1 + 25 | 0;
   i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $993 = i64toi32_i32$1;
   i64toi32_i32$1 = $4 + 25 | 0;
   $144 = $993;
   HEAP8[i64toi32_i32$1 >> 0] = $144;
   HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $144 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $144 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $144 >>> 24 | 0;
   HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
   HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
   HEAP32[($6 + 196 | 0) >> 2] = 33;
  }
  _ZN4core5slice5index74_$LT$impl$u20$core__ops__index__Index$LT$I$GT$$u20$for$u20$$u5b$T$u5d$$GT$5index17ha5cfb5eb89161dbdE($6 | 0, HEAP32[($6 + 188 | 0) >> 2] | 0 | 0, HEAP32[($6 + 192 | 0) >> 2] | 0 | 0, HEAP32[($6 + 196 | 0) >> 2] | 0 | 0);
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$1 = $3$hi;
  _ZN4gstd3msg5basic11reply_bytes17hd2991cd8a5cf50c5E($0 | 0, HEAP32[$6 >> 2] | 0 | 0, HEAP32[($6 + 4 | 0) >> 2] | 0 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, i64toi32_i32$1 | 0);
  __stack_pointer = $6 + 272 | 0;
 }
 
 function _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h8b01ee9ed9a96005E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $2 = HEAP32[($1 + 32 | 0) >> 2] | 0;
     if ($2) {
      break label$3
     }
     $2 = 0;
     break label$2;
    }
    HEAP32[($1 + 32 | 0) >> 2] = $2 + -1 | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    label$4 : {
     label$5 : {
      label$6 : {
       $2 = HEAP32[$1 >> 2] | 0;
       if (!$2) {
        break label$6
       }
       if (!$3) {
        break label$5
       }
      }
      if (!$2) {
       break label$1
      }
      $4 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      $2 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      break label$4;
     }
     $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     label$7 : {
      $2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      if (!$2) {
       break label$7
      }
      label$8 : while (1) {
       $3 = HEAP32[($3 + 448 | 0) >> 2] | 0;
       $2 = $2 + -1 | 0;
       if ($2) {
        continue label$8
       }
       break label$8;
      };
     }
     HEAP32[($1 + 8 | 0) >> 2] = 0;
     HEAP32[($1 + 12 | 0) >> 2] = 0;
     HEAP32[($1 + 4 | 0) >> 2] = $3;
     HEAP32[$1 >> 2] = 1;
     $4 = 0;
     $2 = 0;
    }
    label$9 : {
     label$10 : {
      if ($4 >>> 0 >= (HEAPU16[($3 + 446 | 0) >> 1] | 0) >>> 0) {
       break label$10
      }
      $5 = $3;
      break label$9;
     }
     label$11 : while (1) {
      $5 = HEAP32[($3 + 440 | 0) >> 2] | 0;
      if (!$5) {
       break label$1
      }
      $2 = $2 + 1 | 0;
      $4 = HEAPU16[($3 + 444 | 0) >> 1] | 0;
      $3 = $5;
      if ($4 >>> 0 >= (HEAPU16[($3 + 446 | 0) >> 1] | 0) >>> 0) {
       continue label$11
      }
      break label$11;
     };
    }
    $3 = $4 + 1 | 0;
    label$12 : {
     label$13 : {
      if ($2) {
       break label$13
      }
      $6 = $5;
      break label$12;
     }
     $3 = ($5 + ($3 << 2 | 0) | 0) + 448 | 0;
     label$14 : while (1) {
      $6 = HEAP32[$3 >> 2] | 0;
      $3 = $6 + 448 | 0;
      $2 = $2 + -1 | 0;
      if ($2) {
       continue label$14
      }
      break label$14;
     };
     $3 = 0;
    }
    HEAP32[($1 + 12 | 0) >> 2] = $3;
    HEAP32[($1 + 8 | 0) >> 2] = 0;
    HEAP32[($1 + 4 | 0) >> 2] = $6;
    $2 = $5 + ($4 << 5 | 0) | 0;
    $3 = ($5 + ($4 << 3 | 0) | 0) + 352 | 0;
   }
   HEAP32[($0 + 4 | 0) >> 2] = $3;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN4gstd3msg5basic11reply_bytes17hd2991cd8a5cf50c5E($0, $1, $2, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var $5 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $6 = 0, $40 = 0, $45 = 0, $50 = 0, $53 = 0;
  $5 = __stack_pointer - 112 | 0;
  __stack_pointer = $5;
  i64toi32_i32$0 = $4$hi;
  i64toi32_i32$1 = $5;
  HEAP32[($5 + 64 | 0) >> 2] = $4;
  HEAP32[($5 + 68 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$1 = $5;
  HEAP32[($5 + 56 | 0) >> 2] = $3;
  HEAP32[($5 + 60 | 0) >> 2] = i64toi32_i32$0;
  $6 = 0;
  memset($5 + 76 | 0 | 0, 0 | 0, 36 | 0) | 0;
  i64toi32_i32$0 = $4$hi;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$2 = $3;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  gr_reply($1 | 0, $2 | 0, (!(i64toi32_i32$2 | $4 | 0 | i64toi32_i32$1 | 0) ? -1 : $5 + 56 | 0) | 0, $5 + 76 | 0 | 0);
  _ZN5gcore6errors144_$LT$impl$u20$core__convert__From$LT$gcore__errors__SyscallError$GT$$u20$for$u20$core__result__Result$LT$$LP$$RP$$C$gcore__errors__Error$GT$$GT$4from17heac5be5a465af15fE($5 + 8 | 0 | 0, HEAP32[($5 + 76 | 0) >> 2] | 0 | 0);
  label$1 : {
   label$2 : {
    $2 = HEAP32[($5 + 8 | 0) >> 2] | 0;
    if (($2 | 0) != (7 | 0)) {
     break label$2
    }
    i64toi32_i32$0 = $5 + 104 | 0;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$0 >> 2] | 0;
    i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
    $40 = i64toi32_i32$1;
    i64toi32_i32$1 = $5 + 45 | 0;
    $16 = $40;
    HEAP8[i64toi32_i32$1 >> 0] = $16;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $16 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $16 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $16 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$2;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$2 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$2 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$2 >>> 24 | 0;
    i64toi32_i32$0 = $5 + 96 | 0;
    i64toi32_i32$2 = HEAP32[i64toi32_i32$0 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
    $45 = i64toi32_i32$2;
    i64toi32_i32$2 = $5 + 37 | 0;
    $17 = $45;
    HEAP8[i64toi32_i32$2 >> 0] = $17;
    HEAP8[(i64toi32_i32$2 + 1 | 0) >> 0] = $17 >>> 8 | 0;
    HEAP8[(i64toi32_i32$2 + 2 | 0) >> 0] = $17 >>> 16 | 0;
    HEAP8[(i64toi32_i32$2 + 3 | 0) >> 0] = $17 >>> 24 | 0;
    HEAP8[(i64toi32_i32$2 + 4 | 0) >> 0] = i64toi32_i32$1;
    HEAP8[(i64toi32_i32$2 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
    HEAP8[(i64toi32_i32$2 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
    HEAP8[(i64toi32_i32$2 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
    i64toi32_i32$0 = $5 + 88 | 0;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$0 >> 2] | 0;
    i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
    $50 = i64toi32_i32$1;
    i64toi32_i32$1 = $5 + 29 | 0;
    $18 = $50;
    HEAP8[i64toi32_i32$1 >> 0] = $18;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $18 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $18 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $18 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$2;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$2 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$2 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$2 >>> 24 | 0;
    i64toi32_i32$0 = $5;
    i64toi32_i32$2 = HEAP32[($5 + 80 | 0) >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($5 + 84 | 0) >> 2] | 0;
    $53 = i64toi32_i32$2;
    i64toi32_i32$2 = $5;
    $19 = $53;
    HEAP8[($5 + 21 | 0) >> 0] = $19;
    HEAP8[($5 + 22 | 0) >> 0] = $19 >>> 8 | 0;
    HEAP8[($5 + 23 | 0) >> 0] = $19 >>> 16 | 0;
    HEAP8[($5 + 24 | 0) >> 0] = $19 >>> 24 | 0;
    HEAP8[($5 + 25 | 0) >> 0] = i64toi32_i32$1;
    HEAP8[($5 + 26 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
    HEAP8[($5 + 27 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
    HEAP8[($5 + 28 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
    break label$1;
   }
   HEAP32[($5 + 28 | 0) >> 2] = HEAP32[($5 + 12 | 0) >> 2] | 0;
   HEAP32[($5 + 24 | 0) >> 2] = $2;
   $6 = 1;
  }
  HEAP8[($5 + 20 | 0) >> 0] = $6;
  _ZN95_$LT$core__result__Result$LT$T$C$E$GT$$u20$as$u20$gstd__common__errors__IntoResult$LT$V$GT$$GT$11into_result17h9566b00ad181b7efE($0 | 0, $5 + 20 | 0 | 0);
  __stack_pointer = $5 + 112 | 0;
 }
 
 function _ZN17gear_stack_buffer10trampoline17ha8528db5bdceeacaE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $2 = 0, $3 = 0, $21 = 0, $26 = 0, $31 = 0, $34 = 0;
  $2 = __stack_pointer - 32 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  _ZN5gcore3msg18with_read_on_stack28_$u7b$$u7b$closure$u7d$$u7d$17he8e3a79b37faa861E($2 | 0, HEAP32[(HEAP32[($1 + 8 | 0) >> 2] | 0) >> 2] | 0 | 0, $0 | 0, HEAP32[(HEAP32[$1 >> 2] | 0) >> 2] | 0 | 0);
  i64toi32_i32$2 = $2 + 24 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $21 = i64toi32_i32$0;
  i64toi32_i32$0 = $3 + 24 | 0;
  HEAP32[i64toi32_i32$0 >> 2] = $21;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $2 + 16 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $26 = i64toi32_i32$1;
  i64toi32_i32$1 = $3 + 16 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $26;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = $2 + 8 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $31 = i64toi32_i32$0;
  i64toi32_i32$0 = $3 + 8 | 0;
  HEAP32[i64toi32_i32$0 >> 2] = $31;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $34 = i64toi32_i32$1;
  i64toi32_i32$1 = $3;
  HEAP32[i64toi32_i32$1 >> 2] = $34;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  __stack_pointer = i64toi32_i32$2 + 32 | 0;
 }
 
 function _ZN5gcore3msg18with_read_on_stack28_$u7b$$u7b$closure$u7d$$u7d$17he8e3a79b37faa861E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var i64toi32_i32$2 = 0, $4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $5 = 0, $6 = 0, $52 = 0, $56 = 0, $7 = 0, $7$hi = 0, $8 = 0, $8$hi = 0, $85 = 0, $92 = 0, $97 = 0, $103 = 0;
  $4 = __stack_pointer - 80 | 0;
  __stack_pointer = $4;
  $5 = 0;
  HEAP32[($4 + 28 | 0) >> 2] = 0;
  label$1 : {
   if (!$1) {
    break label$1
   }
   gr_read(0 | 0, $1 | 0, $2 | 0, $4 + 28 | 0 | 0);
   $5 = HEAP32[($4 + 28 | 0) >> 2] | 0;
  }
  _ZN5gcore6errors144_$LT$impl$u20$core__convert__From$LT$gcore__errors__SyscallError$GT$$u20$for$u20$core__result__Result$LT$$LP$$RP$$C$gcore__errors__Error$GT$$GT$4from17heac5be5a465af15fE($4 + 16 | 0 | 0, $5 | 0);
  label$2 : {
   label$3 : {
    $5 = HEAP32[($4 + 16 | 0) >> 2] | 0;
    if (($5 | 0) != (7 | 0)) {
     break label$3
    }
    _ZN4core5slice5index77_$LT$impl$u20$core__ops__index__IndexMut$LT$I$GT$$u20$for$u20$$u5b$T$u5d$$GT$9index_mut17h19a2b1d8e794f2e3E($4 + 8 | 0 | 0, $2 | 0, $3 | 0, $1 | 0);
    $1 = HEAP32[($4 + 8 | 0) >> 2] | 0;
    $5 = HEAP32[($4 + 12 | 0) >> 2] | 0;
    HEAP32[($4 + 36 | 0) >> 2] = $5;
    HEAP32[($4 + 32 | 0) >> 2] = $1;
    label$4 : {
     if (!$5) {
      break label$4
     }
     $6 = $5 + -1 | 0;
     label$5 : {
      label$6 : {
       label$7 : {
        label$8 : {
         label$9 : {
          label$10 : {
           label$11 : {
            label$12 : {
             label$13 : {
              $3 = HEAPU8[$1 >> 0] | 0;
              switch ($3 | 0) {
              case 4:
               break label$10;
              case 3:
               break label$11;
              case 2:
               break label$12;
              case 1:
               break label$13;
              case 0:
               break label$5;
              case 7:
               break label$7;
              case 6:
               break label$8;
              case 5:
               break label$9;
              default:
               break label$4;
              };
             }
             if ($6 >>> 0 < 16 >>> 0) {
              break label$4
             }
             i64toi32_i32$2 = $1;
             i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             $52 = i64toi32_i32$0;
             i64toi32_i32$0 = $4;
             HEAP32[($4 + 40 | 0) >> 2] = $52;
             HEAP32[($4 + 44 | 0) >> 2] = i64toi32_i32$1;
             i64toi32_i32$2 = i64toi32_i32$2 + 9 | 0;
             i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             $56 = i64toi32_i32$1;
             i64toi32_i32$1 = $4;
             HEAP32[($4 + 48 | 0) >> 2] = $56;
             HEAP32[($4 + 52 | 0) >> 2] = i64toi32_i32$0;
             $3 = 1;
             break label$6;
            }
            if ($6 >>> 0 < 16 >>> 0) {
             break label$4
            }
            HEAP32[($4 + 36 | 0) >> 2] = $5 + -17 | 0;
            HEAP32[($4 + 32 | 0) >> 2] = $1 + 17 | 0;
            i64toi32_i32$2 = $1 + 9 | 0;
            i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
            i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
            $7 = i64toi32_i32$0;
            $7$hi = i64toi32_i32$1;
            i64toi32_i32$2 = $1;
            i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
            i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
            $8 = i64toi32_i32$1;
            $8$hi = i64toi32_i32$0;
            _ZN75_$LT$alloc__string__String$u20$as$u20$parity_scale_codec__codec__Decode$GT$6decode17h6b390625355bc11dE($4 + 68 | 0 | 0, $4 + 32 | 0 | 0);
            $2 = HEAP32[($4 + 68 | 0) >> 2] | 0;
            if (!$2) {
             break label$4
            }
            i64toi32_i32$0 = $7$hi;
            i64toi32_i32$1 = $4 + 56 | 0;
            HEAP32[i64toi32_i32$1 >> 2] = $7;
            HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$0 = $8$hi;
            i64toi32_i32$1 = $4;
            HEAP32[($4 + 48 | 0) >> 2] = $8;
            HEAP32[($4 + 52 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$2 = $4;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 72 | 0) >> 2] | 0;
            i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 76 | 0) >> 2] | 0;
            $85 = i64toi32_i32$0;
            i64toi32_i32$0 = i64toi32_i32$2;
            HEAP32[(i64toi32_i32$2 + 40 | 0) >> 2] = $85;
            HEAP32[(i64toi32_i32$2 + 44 | 0) >> 2] = i64toi32_i32$1;
            $3 = 2;
            break label$5;
           }
           $3 = 3;
           break label$6;
          }
          $3 = 4;
          break label$6;
         }
         $3 = 5;
         break label$6;
        }
        $3 = 6;
        break label$6;
       }
       $3 = 7;
      }
     }
     HEAP32[($0 + 4 | 0) >> 2] = $2;
     HEAP32[$0 >> 2] = $3;
     i64toi32_i32$2 = $4;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 40 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 44 | 0) >> 2] | 0;
     $92 = i64toi32_i32$1;
     i64toi32_i32$1 = $0;
     HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $92;
     HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$2 = i64toi32_i32$2 + 48 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $97 = i64toi32_i32$0;
     i64toi32_i32$0 = $0 + 16 | 0;
     HEAP32[i64toi32_i32$0 >> 2] = $97;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$2 = ($4 + 40 | 0) + 16 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $103 = i64toi32_i32$1;
     i64toi32_i32$1 = $0 + 24 | 0;
     HEAP32[i64toi32_i32$1 >> 2] = $103;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     break label$2;
    }
    HEAP32[$0 >> 2] = 8;
    HEAP8[($0 + 4 | 0) >> 0] = 3;
    break label$2;
   }
   $1 = HEAP32[($4 + 20 | 0) >> 2] | 0;
   HEAP8[($0 + 4 | 0) >> 0] = 0;
   HEAP32[$0 >> 2] = 8;
   HEAP32[($0 + 12 | 0) >> 2] = $1;
   HEAP32[($0 + 8 | 0) >> 2] = $5;
  }
  __stack_pointer = $4 + 80 | 0;
 }
 
 function _ZN4core5slice5index77_$LT$impl$u20$core__ops__index__IndexMut$LT$I$GT$$u20$for$u20$$u5b$T$u5d$$GT$9index_mut17h19a2b1d8e794f2e3E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if ($3 >>> 0 <= $2 >>> 0) {
    break label$1
   }
   _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
   wasm2js_trap();
  }
  HEAP32[($0 + 4 | 0) >> 2] = $3;
  HEAP32[$0 >> 2] = $1;
 }
 
 function _ZN17gear_stack_buffer10trampoline17hce6f45ad93fdb690E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = __stack_pointer - 192 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  _ZN5gcore3msg18with_read_on_stack28_$u7b$$u7b$closure$u7d$$u7d$17h20a1e4478e2123ffE($2 + 8 | 0 | 0, HEAP32[(HEAP32[($1 + 8 | 0) >> 2] | 0) >> 2] | 0 | 0, $0 | 0, HEAP32[(HEAP32[$1 >> 2] | 0) >> 2] | 0 | 0);
  memcpy($3 | 0, $2 + 8 | 0 | 0, 184 | 0) | 0;
  __stack_pointer = $2 + 192 | 0;
 }
 
 function _ZN5gcore3msg18with_read_on_stack28_$u7b$$u7b$closure$u7d$$u7d$17h20a1e4478e2123ffE($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $7$hi = 0, $12 = 0, $12$hi = 0, $15 = 0, $15$hi = 0, $9 = 0, $9$hi = 0, $10 = 0, $10$hi = 0, $14 = 0, $14$hi = 0, $38 = 0, $11 = 0, $11$hi = 0, $16 = 0, $16$hi = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $8 = 0, $8$hi = 0, $13 = 0, $13$hi = 0, $69 = 0, $73 = 0, $293 = 0, $297 = 0, $358 = 0, $362 = 0, $392 = 0, $410 = 0;
  $4 = __stack_pointer - 304 | 0;
  __stack_pointer = $4;
  $5 = 0;
  HEAP32[($4 + 20 | 0) >> 2] = 0;
  label$1 : {
   if (!$1) {
    break label$1
   }
   gr_read(0 | 0, $1 | 0, $2 | 0, $4 + 20 | 0 | 0);
   $5 = HEAP32[($4 + 20 | 0) >> 2] | 0;
  }
  _ZN5gcore6errors144_$LT$impl$u20$core__convert__From$LT$gcore__errors__SyscallError$GT$$u20$for$u20$core__result__Result$LT$$LP$$RP$$C$gcore__errors__Error$GT$$GT$4from17heac5be5a465af15fE($4 + 8 | 0 | 0, $5 | 0);
  label$2 : {
   label$3 : {
    label$4 : {
     label$5 : {
      label$6 : {
       label$7 : {
        label$8 : {
         label$9 : {
          $5 = HEAP32[($4 + 8 | 0) >> 2] | 0;
          if (($5 | 0) != (7 | 0)) {
           break label$9
          }
          _ZN4core5slice5index77_$LT$impl$u20$core__ops__index__IndexMut$LT$I$GT$$u20$for$u20$$u5b$T$u5d$$GT$9index_mut17h19a2b1d8e794f2e3E($4 | 0, $2 | 0, $3 | 0, $1 | 0);
          $1 = HEAP32[$4 >> 2] | 0;
          $5 = HEAP32[($4 + 4 | 0) >> 2] | 0;
          HEAP32[($4 + 28 | 0) >> 2] = $5;
          HEAP32[($4 + 24 | 0) >> 2] = $1;
          if (!$5) {
           break label$3
          }
          $2 = $5 + -1 | 0;
          HEAP32[($4 + 28 | 0) >> 2] = $2;
          $6 = $1 + 1 | 0;
          HEAP32[($4 + 24 | 0) >> 2] = $6;
          label$10 : {
           label$11 : {
            label$12 : {
             label$13 : {
              label$14 : {
               label$15 : {
                switch (HEAPU8[$1 >> 0] | 0 | 0) {
                case 0:
                 _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Decode$u20$for$u20$inscribe_io__Inscribe$GT$6decode17h5ee6a4d85b48aa34E($4 + 136 | 0 | 0, $4 + 24 | 0 | 0);
                 $3 = 3;
                 if ((HEAPU8[($4 + 296 | 0) >> 0] | 0 | 0) == (3 | 0)) {
                  break label$3
                 }
                 i64toi32_i32$2 = $4;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 153 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 154 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 155 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 156 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 157 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 158 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 159 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 160 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $69 = i64toi32_i32$0;
                 i64toi32_i32$0 = i64toi32_i32$2;
                 HEAP32[(i64toi32_i32$2 + 120 | 0) >> 2] = $69;
                 HEAP32[(i64toi32_i32$2 + 124 | 0) >> 2] = i64toi32_i32$1;
                 i64toi32_i32$2 = i64toi32_i32$2 + 160 | 0;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $73 = i64toi32_i32$1;
                 i64toi32_i32$1 = $4;
                 $38 = $73;
                 HEAP8[(i64toi32_i32$1 + 127 | 0) >> 0] = $38;
                 HEAP8[(i64toi32_i32$1 + 128 | 0) >> 0] = $38 >>> 8 | 0;
                 HEAP8[(i64toi32_i32$1 + 129 | 0) >> 0] = $38 >>> 16 | 0;
                 HEAP8[(i64toi32_i32$1 + 130 | 0) >> 0] = $38 >>> 24 | 0;
                 HEAP8[(i64toi32_i32$1 + 131 | 0) >> 0] = i64toi32_i32$0;
                 HEAP8[(i64toi32_i32$1 + 132 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
                 HEAP8[(i64toi32_i32$1 + 133 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
                 HEAP8[(i64toi32_i32$1 + 134 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
                 i64toi32_i32$2 = i64toi32_i32$1 + 144 | 0;
                 i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                 $7 = i64toi32_i32$0;
                 $7$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $4 + 176 | 0;
                 i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                 i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                 $8 = i64toi32_i32$1;
                 $8$hi = i64toi32_i32$0;
                 i64toi32_i32$2 = $4 + 192 | 0;
                 i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                 $9 = i64toi32_i32$0;
                 $9$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = ($4 + 136 | 0) + 72 | 0;
                 i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                 i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                 $10 = i64toi32_i32$1;
                 $10$hi = i64toi32_i32$0;
                 i64toi32_i32$2 = $4 + 224 | 0;
                 i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                 $11 = i64toi32_i32$0;
                 $11$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $4;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 136 | 0) >> 2] | 0;
                 i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 140 | 0) >> 2] | 0;
                 $12 = i64toi32_i32$1;
                 $12$hi = i64toi32_i32$0;
                 i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 168 | 0) >> 2] | 0;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 172 | 0) >> 2] | 0;
                 $13 = i64toi32_i32$0;
                 $13$hi = i64toi32_i32$1;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 184 | 0) >> 2] | 0;
                 i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 188 | 0) >> 2] | 0;
                 $14 = i64toi32_i32$1;
                 $14$hi = i64toi32_i32$0;
                 i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 200 | 0) >> 2] | 0;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 204 | 0) >> 2] | 0;
                 $15 = i64toi32_i32$0;
                 $15$hi = i64toi32_i32$1;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 216 | 0) >> 2] | 0;
                 i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 220 | 0) >> 2] | 0;
                 $16 = i64toi32_i32$1;
                 $16$hi = i64toi32_i32$0;
                 $2 = HEAPU8[(i64toi32_i32$2 + 152 | 0) >> 0] | 0;
                 memcpy(i64toi32_i32$2 + 40 | 0 | 0, i64toi32_i32$2 + 232 | 0 | 0, 72 | 0) | 0;
                 break label$4;
                case 1:
                 if ($2 >>> 0 < 16 >>> 0) {
                  break label$3
                 }
                 i64toi32_i32$2 = $6 + 8 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $7 = i64toi32_i32$0;
                 $7$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $6;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $12 = i64toi32_i32$1;
                 $12$hi = i64toi32_i32$0;
                 $3 = 4;
                 break label$4;
                case 2:
                 $3 = 15;
                 if ($2 >>> 0 < 16 >>> 0) {
                  break label$6
                 }
                 i64toi32_i32$2 = $6 + 8 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $10 = i64toi32_i32$0;
                 $10$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $6;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $15 = i64toi32_i32$1;
                 $15$hi = i64toi32_i32$0;
                 if (($5 + -17 | 0) >>> 0 < 32 >>> 0) {
                  break label$7
                 }
                 if (($5 + -97 | 0) >>> 0 > -49 >>> 0) {
                  break label$7
                 }
                 $5 = $1 + 49 | 0;
                 $6 = $1 + 34 | 0;
                 i64toi32_i32$2 = $1 + 89 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $11 = i64toi32_i32$0;
                 $11$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $1 + 73 | 0;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $9 = i64toi32_i32$1;
                 $9$hi = i64toi32_i32$0;
                 i64toi32_i32$2 = $1 + 25 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $7 = i64toi32_i32$0;
                 $7$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $1;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 81 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 82 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 83 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 84 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 85 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 86 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 87 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 88 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $16 = i64toi32_i32$1;
                 $16$hi = i64toi32_i32$0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 65 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 66 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 67 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 68 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 69 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 70 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 71 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 72 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $14 = i64toi32_i32$0;
                 $14$hi = i64toi32_i32$1;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 17 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 18 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 19 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 20 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 21 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 23 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 24 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $12 = i64toi32_i32$1;
                 $12$hi = i64toi32_i32$0;
                 $2 = HEAPU8[(i64toi32_i32$2 + 33 | 0) >> 0] | 0;
                 $3 = 5;
                 break label$10;
                case 3:
                 $3 = 15;
                 if ($2 >>> 0 < 16 >>> 0) {
                  break label$6
                 }
                 i64toi32_i32$2 = $6 + 8 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $10 = i64toi32_i32$0;
                 $10$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $6;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $15 = i64toi32_i32$1;
                 $15$hi = i64toi32_i32$0;
                 if (($5 + -17 | 0) >>> 0 < 32 >>> 0) {
                  break label$7
                 }
                 if (($5 + -97 | 0) >>> 0 > -49 >>> 0) {
                  break label$7
                 }
                 $5 = $1 + 49 | 0;
                 $6 = $1 + 34 | 0;
                 i64toi32_i32$2 = $1 + 89 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $11 = i64toi32_i32$0;
                 $11$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $1 + 73 | 0;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $9 = i64toi32_i32$1;
                 $9$hi = i64toi32_i32$0;
                 i64toi32_i32$2 = $1 + 25 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $7 = i64toi32_i32$0;
                 $7$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $1;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 81 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 82 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 83 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 84 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 85 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 86 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 87 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 88 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $16 = i64toi32_i32$1;
                 $16$hi = i64toi32_i32$0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 65 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 66 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 67 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 68 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 69 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 70 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 71 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 72 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $14 = i64toi32_i32$0;
                 $14$hi = i64toi32_i32$1;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 17 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 18 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 19 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 20 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 21 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 22 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 23 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 24 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $12 = i64toi32_i32$1;
                 $12$hi = i64toi32_i32$0;
                 $2 = HEAPU8[(i64toi32_i32$2 + 33 | 0) >> 0] | 0;
                 $3 = 6;
                 break label$10;
                case 4:
                 $3 = 15;
                 if ($5 >>> 0 < 33 >>> 0) {
                  break label$8
                 }
                 i64toi32_i32$2 = $1 + 9 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $7 = i64toi32_i32$0;
                 $7$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $1;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $12 = i64toi32_i32$1;
                 $12$hi = i64toi32_i32$0;
                 $2 = HEAPU8[(i64toi32_i32$2 + 17 | 0) >> 0] | 0;
                 if (($5 + -49 | 0) >>> 0 > -17 >>> 0) {
                  break label$14
                 }
                 if (($5 + -81 | 0) >>> 0 > -33 >>> 0) {
                  break label$14
                 }
                 $6 = i64toi32_i32$2 + 18 | 0;
                 $5 = i64toi32_i32$2 + 33 | 0;
                 i64toi32_i32$2 = i64toi32_i32$2 + 57 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $9 = i64toi32_i32$0;
                 $9$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $1 + 73 | 0;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $10 = i64toi32_i32$1;
                 $10$hi = i64toi32_i32$0;
                 i64toi32_i32$2 = $1;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 49 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 50 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 51 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 52 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 53 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 54 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 55 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 56 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $14 = i64toi32_i32$0;
                 $14$hi = i64toi32_i32$1;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 65 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 66 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 67 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 68 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 69 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 70 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 71 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 72 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $15 = i64toi32_i32$1;
                 $15$hi = i64toi32_i32$0;
                 $3 = 7;
                 break label$10;
                case 5:
                 if ($2 >>> 0 < 16 >>> 0) {
                  break label$3
                 }
                 $3 = 8;
                 i64toi32_i32$2 = $6 + 8 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $7 = i64toi32_i32$0;
                 $7$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $6;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $12 = i64toi32_i32$1;
                 $12$hi = i64toi32_i32$0;
                 break label$4;
                case 6:
                 if ($2 >>> 0 < 16 >>> 0) {
                  break label$3
                 }
                 i64toi32_i32$2 = $6 + 8 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $7 = i64toi32_i32$0;
                 $7$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $6;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $12 = i64toi32_i32$1;
                 $12$hi = i64toi32_i32$0;
                 $3 = 9;
                 break label$4;
                case 7:
                 $3 = 15;
                 if ($5 >>> 0 < 33 >>> 0) {
                  break label$8
                 }
                 i64toi32_i32$2 = $1 + 9 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $7 = i64toi32_i32$0;
                 $7$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $1;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $12 = i64toi32_i32$1;
                 $12$hi = i64toi32_i32$0;
                 $2 = HEAPU8[(i64toi32_i32$2 + 17 | 0) >> 0] | 0;
                 if (($5 + -33 | 0) >>> 0 < 8 >>> 0) {
                  break label$14
                 }
                 if (($5 + -73 | 0) >>> 0 > -33 >>> 0) {
                  break label$14
                 }
                 $6 = i64toi32_i32$2 + 18 | 0;
                 $5 = i64toi32_i32$2 + 41 | 0;
                 i64toi32_i32$2 = i64toi32_i32$2 + 65 | 0;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $9 = i64toi32_i32$0;
                 $9$hi = i64toi32_i32$1;
                 i64toi32_i32$2 = $1;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 57 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 58 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 59 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 60 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 61 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 62 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 63 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 64 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $14 = i64toi32_i32$1;
                 $14$hi = i64toi32_i32$0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 33 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 34 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 35 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 36 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 37 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 38 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 39 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 40 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $15 = i64toi32_i32$0;
                 $15$hi = i64toi32_i32$1;
                 $3 = 10;
                 break label$10;
                case 8:
                 if ($2 >>> 0 < 16 >>> 0) {
                  break label$3
                 }
                 i64toi32_i32$2 = $6 + 8 | 0;
                 i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $7 = i64toi32_i32$1;
                 $7$hi = i64toi32_i32$0;
                 i64toi32_i32$2 = $6;
                 i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $12 = i64toi32_i32$0;
                 $12$hi = i64toi32_i32$1;
                 $3 = 11;
                 break label$4;
                case 11:
                 break label$12;
                case 10:
                 break label$13;
                case 9:
                 break label$15;
                default:
                 break label$3;
                };
               }
               $3 = 15;
               if ($5 >>> 0 < 33 >>> 0) {
                break label$8
               }
               i64toi32_i32$2 = $1 + 9 | 0;
               i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               $7 = i64toi32_i32$1;
               $7$hi = i64toi32_i32$0;
               i64toi32_i32$2 = $1;
               i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               $12 = i64toi32_i32$0;
               $12$hi = i64toi32_i32$1;
               $2 = HEAPU8[(i64toi32_i32$2 + 17 | 0) >> 0] | 0;
               if (($5 + -49 | 0) >>> 0 <= -17 >>> 0) {
                break label$11
               }
              }
              break label$5;
             }
             if ($2 >>> 0 < 16 >>> 0) {
              break label$3
             }
             HEAP32[($4 + 28 | 0) >> 2] = $5 + -17 | 0;
             HEAP32[($4 + 24 | 0) >> 2] = $1 + 17 | 0;
             i64toi32_i32$2 = $1 + 9 | 0;
             i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             $7 = i64toi32_i32$1;
             $7$hi = i64toi32_i32$0;
             i64toi32_i32$2 = $1;
             i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             $12 = i64toi32_i32$0;
             $12$hi = i64toi32_i32$1;
             _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Decode$u20$for$u20$inscribe_io__Inscribe$GT$6decode17h5ee6a4d85b48aa34E($4 + 136 | 0 | 0, $4 + 24 | 0 | 0);
             $3 = HEAPU8[($4 + 296 | 0) >> 0] | 0;
             if (($3 | 0) == (3 | 0)) {
              break label$3
             }
             i64toi32_i32$2 = $4;
             i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 137 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 138 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 139 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 140 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 141 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 142 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 143 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 144 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             $293 = i64toi32_i32$1;
             i64toi32_i32$1 = i64toi32_i32$2;
             HEAP32[(i64toi32_i32$2 + 120 | 0) >> 2] = $293;
             HEAP32[(i64toi32_i32$2 + 124 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$2 = i64toi32_i32$2 + 144 | 0;
             i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             $297 = i64toi32_i32$0;
             i64toi32_i32$0 = $4;
             $39 = $297;
             HEAP8[(i64toi32_i32$0 + 127 | 0) >> 0] = $39;
             HEAP8[(i64toi32_i32$0 + 128 | 0) >> 0] = $39 >>> 8 | 0;
             HEAP8[(i64toi32_i32$0 + 129 | 0) >> 0] = $39 >>> 16 | 0;
             HEAP8[(i64toi32_i32$0 + 130 | 0) >> 0] = $39 >>> 24 | 0;
             HEAP8[(i64toi32_i32$0 + 131 | 0) >> 0] = i64toi32_i32$1;
             HEAP8[(i64toi32_i32$0 + 132 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
             HEAP8[(i64toi32_i32$0 + 133 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
             HEAP8[(i64toi32_i32$0 + 134 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
             i64toi32_i32$2 = i64toi32_i32$0 + 160 | 0;
             i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $8 = i64toi32_i32$1;
             $8$hi = i64toi32_i32$0;
             i64toi32_i32$2 = $4 + 176 | 0;
             i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $9 = i64toi32_i32$0;
             $9$hi = i64toi32_i32$1;
             i64toi32_i32$2 = $4 + 192 | 0;
             i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $10 = i64toi32_i32$1;
             $10$hi = i64toi32_i32$0;
             i64toi32_i32$2 = $4 + 208 | 0;
             i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $11 = i64toi32_i32$0;
             $11$hi = i64toi32_i32$1;
             i64toi32_i32$2 = $4;
             i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 152 | 0) >> 2] | 0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 156 | 0) >> 2] | 0;
             $13 = i64toi32_i32$1;
             $13$hi = i64toi32_i32$0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 168 | 0) >> 2] | 0;
             i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 172 | 0) >> 2] | 0;
             $14 = i64toi32_i32$0;
             $14$hi = i64toi32_i32$1;
             i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 184 | 0) >> 2] | 0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 188 | 0) >> 2] | 0;
             $15 = i64toi32_i32$1;
             $15$hi = i64toi32_i32$0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 200 | 0) >> 2] | 0;
             i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 204 | 0) >> 2] | 0;
             $16 = i64toi32_i32$0;
             $16$hi = i64toi32_i32$1;
             $2 = HEAPU8[(i64toi32_i32$2 + 136 | 0) >> 0] | 0;
             memcpy(i64toi32_i32$2 + 40 | 0 | 0, (i64toi32_i32$2 + 136 | 0) + 80 | 0 | 0, 80 | 0) | 0;
             $40 = i64toi32_i32$2 + 300 | 0;
             $41 = HEAPU8[$40 >> 0] | 0 | ((HEAPU8[($40 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($40 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($40 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             HEAP8[(i64toi32_i32$2 + 35 | 0) >> 0] = $41;
             HEAP8[(i64toi32_i32$2 + 36 | 0) >> 0] = $41 >>> 8 | 0;
             HEAP8[(i64toi32_i32$2 + 37 | 0) >> 0] = $41 >>> 16 | 0;
             HEAP8[(i64toi32_i32$2 + 38 | 0) >> 0] = $41 >>> 24 | 0;
             HEAP32[(i64toi32_i32$2 + 32 | 0) >> 2] = HEAPU8[(i64toi32_i32$2 + 297 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 298 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 299 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 300 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             break label$4;
            }
            if ($2 >>> 0 < 16 >>> 0) {
             break label$3
            }
            HEAP32[($4 + 28 | 0) >> 2] = $5 + -17 | 0;
            HEAP32[($4 + 24 | 0) >> 2] = $1 + 17 | 0;
            i64toi32_i32$2 = $1 + 9 | 0;
            i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
            i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
            $7 = i64toi32_i32$1;
            $7$hi = i64toi32_i32$0;
            i64toi32_i32$2 = $1;
            i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
            i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
            $12 = i64toi32_i32$0;
            $12$hi = i64toi32_i32$1;
            $2 = _ZN11inscribe_io1_89_$LT$impl$u20$parity_scale_codec__codec__Decode$u20$for$u20$inscribe_io__VerifyStatus$GT$6decode17ha20aedb7ab117ce5E($4 + 24 | 0 | 0) | 0;
            if (($2 & 255 | 0 | 0) == (3 | 0)) {
             break label$3
            }
            $3 = 14;
            break label$4;
           }
           $5 = $1 + 33 | 0;
           $6 = $1 + 18 | 0;
           $3 = 12;
          }
          i64toi32_i32$2 = $6;
          i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $358 = i64toi32_i32$1;
          i64toi32_i32$1 = $4;
          HEAP32[(i64toi32_i32$1 + 120 | 0) >> 2] = $358;
          HEAP32[(i64toi32_i32$1 + 124 | 0) >> 2] = i64toi32_i32$0;
          i64toi32_i32$2 = i64toi32_i32$2 + 7 | 0;
          i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $362 = i64toi32_i32$0;
          i64toi32_i32$0 = $4;
          $42 = $362;
          HEAP8[(i64toi32_i32$0 + 127 | 0) >> 0] = $42;
          HEAP8[(i64toi32_i32$0 + 128 | 0) >> 0] = $42 >>> 8 | 0;
          HEAP8[(i64toi32_i32$0 + 129 | 0) >> 0] = $42 >>> 16 | 0;
          HEAP8[(i64toi32_i32$0 + 130 | 0) >> 0] = $42 >>> 24 | 0;
          HEAP8[(i64toi32_i32$0 + 131 | 0) >> 0] = i64toi32_i32$1;
          HEAP8[(i64toi32_i32$0 + 132 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
          HEAP8[(i64toi32_i32$0 + 133 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
          HEAP8[(i64toi32_i32$0 + 134 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
          i64toi32_i32$2 = $5 + 8 | 0;
          i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $8 = i64toi32_i32$1;
          $8$hi = i64toi32_i32$0;
          i64toi32_i32$2 = $5;
          i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $13 = i64toi32_i32$0;
          $13$hi = i64toi32_i32$1;
          break label$5;
         }
         $1 = HEAP32[($4 + 12 | 0) >> 2] | 0;
         HEAP8[($0 + 176 | 0) >> 0] = 15;
         HEAP32[($0 + 4 | 0) >> 2] = $5;
         HEAP8[$0 >> 0] = 0;
         HEAP32[($0 + 8 | 0) >> 2] = $1;
         break label$2;
        }
        break label$5;
       }
       break label$5;
      }
      i64toi32_i32$1 = 0;
      $10 = 0;
      $10$hi = i64toi32_i32$1;
      i64toi32_i32$1 = 0;
      $15 = 0;
      $15$hi = i64toi32_i32$1;
     }
     if (($3 | 0) == (15 | 0)) {
      break label$3
     }
    }
    i64toi32_i32$1 = $12$hi;
    i64toi32_i32$0 = $0;
    HEAP32[i64toi32_i32$0 >> 2] = $12;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = $16$hi;
    HEAP32[(i64toi32_i32$0 + 80 | 0) >> 2] = $16;
    HEAP32[(i64toi32_i32$0 + 84 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = $15$hi;
    HEAP32[(i64toi32_i32$0 + 64 | 0) >> 2] = $15;
    HEAP32[(i64toi32_i32$0 + 68 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = $14$hi;
    HEAP32[(i64toi32_i32$0 + 48 | 0) >> 2] = $14;
    HEAP32[(i64toi32_i32$0 + 52 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$1 = $13$hi;
    HEAP32[(i64toi32_i32$0 + 32 | 0) >> 2] = $13;
    HEAP32[(i64toi32_i32$0 + 36 | 0) >> 2] = i64toi32_i32$1;
    HEAP8[(i64toi32_i32$0 + 16 | 0) >> 0] = $2;
    i64toi32_i32$2 = $4;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 120 | 0) >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 124 | 0) >> 2] | 0;
    $392 = i64toi32_i32$1;
    i64toi32_i32$1 = $0;
    $43 = $392;
    HEAP8[(i64toi32_i32$1 + 17 | 0) >> 0] = $43;
    HEAP8[(i64toi32_i32$1 + 18 | 0) >> 0] = $43 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 19 | 0) >> 0] = $43 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 20 | 0) >> 0] = $43 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 21 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 22 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 23 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 24 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    i64toi32_i32$0 = $7$hi;
    HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $7;
    HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = $11$hi;
    i64toi32_i32$1 = i64toi32_i32$1 + 88 | 0;
    HEAP32[i64toi32_i32$1 >> 2] = $11;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = $10$hi;
    i64toi32_i32$1 = $0 + 72 | 0;
    HEAP32[i64toi32_i32$1 >> 2] = $10;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = $9$hi;
    i64toi32_i32$1 = $0 + 56 | 0;
    HEAP32[i64toi32_i32$1 >> 2] = $9;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = $8$hi;
    i64toi32_i32$1 = $0 + 40 | 0;
    HEAP32[i64toi32_i32$1 >> 2] = $8;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 127 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 128 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 129 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 130 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 131 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 132 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 133 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 134 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    $410 = i64toi32_i32$0;
    i64toi32_i32$0 = $0 + 24 | 0;
    $44 = $410;
    HEAP8[i64toi32_i32$0 >> 0] = $44;
    HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $44 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $44 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $44 >>> 24 | 0;
    HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
    HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
    memcpy($0 + 96 | 0 | 0, i64toi32_i32$2 + 40 | 0 | 0, 80 | 0) | 0;
    HEAP8[($0 + 176 | 0) >> 0] = $3;
    $45 = HEAP32[(i64toi32_i32$2 + 32 | 0) >> 2] | 0;
    HEAP8[($0 + 177 | 0) >> 0] = $45;
    HEAP8[($0 + 178 | 0) >> 0] = $45 >>> 8 | 0;
    HEAP8[($0 + 179 | 0) >> 0] = $45 >>> 16 | 0;
    HEAP8[($0 + 180 | 0) >> 0] = $45 >>> 24 | 0;
    $46 = $0 + 180 | 0;
    $47 = HEAPU8[(i64toi32_i32$2 + 35 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 36 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 37 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 38 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
    HEAP8[$46 >> 0] = $47;
    HEAP8[($46 + 1 | 0) >> 0] = $47 >>> 8 | 0;
    HEAP8[($46 + 2 | 0) >> 0] = $47 >>> 16 | 0;
    HEAP8[($46 + 3 | 0) >> 0] = $47 >>> 24 | 0;
    break label$2;
   }
   HEAP8[($0 + 176 | 0) >> 0] = 15;
   HEAP8[$0 >> 0] = 3;
  }
  __stack_pointer = $4 + 304 | 0;
 }
 
 function _ZN17gear_stack_buffer10trampoline17hd8e5c3637d6d61ecE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2 = 0, $3 = 0, $17 = 0, $17$hi = 0, $20 = 0, $20$hi = 0;
  $2 = __stack_pointer - 48 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  i64toi32_i32$2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $17 = i64toi32_i32$0;
  $17$hi = i64toi32_i32$1;
  i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $20 = i64toi32_i32$1;
  $20$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $17$hi;
  i64toi32_i32$1 = $20$hi;
  _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17h585bccc7877c94f7E($2 + 12 | 0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0, $17 | 0, i64toi32_i32$0 | 0, $20 | 0, i64toi32_i32$1 | 0, $0 | 0, HEAP32[(HEAP32[$1 >> 2] | 0) >> 2] | 0 | 0);
  memcpy($3 | 0, $2 + 12 | 0 | 0, 36 | 0) | 0;
  __stack_pointer = $2 + 48 | 0;
 }
 
 function _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17h585bccc7877c94f7E($0, $1, $2, $2$hi, $3, $3$hi, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $6 = 0, $54 = 0, $55 = 0, $56 = 0, $58 = 0, $59 = 0, $60 = 0, $61 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $68 = 0, $69 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $98 = 0, $99 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $106 = 0, $31 = 0, $34 = 0, $37 = 0, $42 = 0, $47 = 0, $52 = 0, $57 = 0, $62 = 0, $67 = 0, $70 = 0, $75 = 0, $80 = 0, $85 = 0, $90 = 0, $97 = 0, $100 = 0, $105 = 0, $110 = 0, $115 = 0, $120 = 0, $127 = 0, $130 = 0, $133 = 0, $138 = 0, $143 = 0, $148 = 0, $153 = 0, $158 = 0, $163 = 0, $166 = 0, $169 = 0, $172 = 0, $177 = 0, $182 = 0, $187 = 0, $192 = 0, $197 = 0, $202 = 0, $207 = 0, $212 = 0, $221 = 0, $229 = 0;
  $6 = __stack_pointer - 32 | 0;
  __stack_pointer = $6;
  HEAP32[($6 + 24 | 0) >> 2] = $5;
  HEAP32[($6 + 20 | 0) >> 2] = $4;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             $5 = (HEAPU8[($1 + 176 | 0) >> 0] | 0) + -3 | 0;
             switch ((($5 & 255 | 0) >>> 0 < 10 >>> 0 ? $5 : 8) & 255 | 0 | 0) {
             case 1:
              break label$10;
             case 9:
              break label$2;
             case 8:
              break label$3;
             case 7:
              break label$4;
             case 6:
              break label$5;
             case 5:
              break label$6;
             case 4:
              break label$7;
             case 3:
              break label$8;
             case 2:
              break label$9;
             default:
              break label$11;
             };
            }
            HEAP8[$4 >> 0] = 0;
            HEAP32[($6 + 28 | 0) >> 2] = 1;
            _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17h32945f46ee63bd59E($1 | 0, $6 + 20 | 0 | 0);
            break label$1;
           }
           HEAP8[$4 >> 0] = 1;
           i64toi32_i32$2 = $1;
           i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 32 | 0) >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 36 | 0) >> 2] | 0;
           $31 = i64toi32_i32$0;
           i64toi32_i32$0 = $4;
           $54 = $31;
           HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $54;
           HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $54 >>> 8 | 0;
           HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $54 >>> 16 | 0;
           HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = $54 >>> 24 | 0;
           HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1;
           HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
           HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
           HEAP8[(i64toi32_i32$0 + 8 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 48 | 0) >> 2] | 0;
           i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 52 | 0) >> 2] | 0;
           $34 = i64toi32_i32$1;
           i64toi32_i32$1 = $4;
           $55 = $34;
           HEAP8[(i64toi32_i32$1 + 49 | 0) >> 0] = $55;
           HEAP8[(i64toi32_i32$1 + 50 | 0) >> 0] = $55 >>> 8 | 0;
           HEAP8[(i64toi32_i32$1 + 51 | 0) >> 0] = $55 >>> 16 | 0;
           HEAP8[(i64toi32_i32$1 + 52 | 0) >> 0] = $55 >>> 24 | 0;
           HEAP8[(i64toi32_i32$1 + 53 | 0) >> 0] = i64toi32_i32$0;
           HEAP8[(i64toi32_i32$1 + 54 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
           HEAP8[(i64toi32_i32$1 + 55 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
           HEAP8[(i64toi32_i32$1 + 56 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
           i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $37 = i64toi32_i32$0;
           i64toi32_i32$0 = $4;
           $56 = $37;
           HEAP8[(i64toi32_i32$0 + 17 | 0) >> 0] = $56;
           HEAP8[(i64toi32_i32$0 + 18 | 0) >> 0] = $56 >>> 8 | 0;
           HEAP8[(i64toi32_i32$0 + 19 | 0) >> 0] = $56 >>> 16 | 0;
           HEAP8[(i64toi32_i32$0 + 20 | 0) >> 0] = $56 >>> 24 | 0;
           HEAP8[(i64toi32_i32$0 + 21 | 0) >> 0] = i64toi32_i32$1;
           HEAP8[(i64toi32_i32$0 + 22 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
           HEAP8[(i64toi32_i32$0 + 23 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
           HEAP8[(i64toi32_i32$0 + 24 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
           i64toi32_i32$2 = i64toi32_i32$2 + 40 | 0;
           i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $42 = i64toi32_i32$1;
           i64toi32_i32$1 = $4 + 9 | 0;
           $58 = $42;
           HEAP8[i64toi32_i32$1 >> 0] = $58;
           HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $58 >>> 8 | 0;
           HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $58 >>> 16 | 0;
           HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $58 >>> 24 | 0;
           HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
           HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
           HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
           HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
           i64toi32_i32$2 = $1 + 56 | 0;
           i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $47 = i64toi32_i32$0;
           i64toi32_i32$0 = $4 + 57 | 0;
           $59 = $47;
           HEAP8[i64toi32_i32$0 >> 0] = $59;
           HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $59 >>> 8 | 0;
           HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $59 >>> 16 | 0;
           HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $59 >>> 24 | 0;
           HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
           HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
           HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
           HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
           i64toi32_i32$2 = $1 + 8 | 0;
           i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $52 = i64toi32_i32$1;
           i64toi32_i32$1 = $4 + 25 | 0;
           $60 = $52;
           HEAP8[i64toi32_i32$1 >> 0] = $60;
           HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $60 >>> 8 | 0;
           HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $60 >>> 16 | 0;
           HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $60 >>> 24 | 0;
           HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
           HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
           HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
           HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
           i64toi32_i32$2 = $1 + 16 | 0;
           i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $57 = i64toi32_i32$0;
           i64toi32_i32$0 = $4 + 33 | 0;
           $61 = $57;
           HEAP8[i64toi32_i32$0 >> 0] = $61;
           HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $61 >>> 8 | 0;
           HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $61 >>> 16 | 0;
           HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $61 >>> 24 | 0;
           HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
           HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
           HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
           HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
           i64toi32_i32$2 = $1 + 24 | 0;
           i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $62 = i64toi32_i32$1;
           i64toi32_i32$1 = $4 + 41 | 0;
           $63 = $62;
           HEAP8[i64toi32_i32$1 >> 0] = $63;
           HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $63 >>> 8 | 0;
           HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $63 >>> 16 | 0;
           HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $63 >>> 24 | 0;
           HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
           HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
           HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
           HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
           HEAP32[($6 + 28 | 0) >> 2] = 65;
           break label$1;
          }
          HEAP8[$4 >> 0] = 2;
          i64toi32_i32$2 = $1;
          i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 32 | 0) >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 36 | 0) >> 2] | 0;
          $67 = i64toi32_i32$0;
          i64toi32_i32$0 = $4;
          $64 = $67;
          HEAP8[(i64toi32_i32$0 + 33 | 0) >> 0] = $64;
          HEAP8[(i64toi32_i32$0 + 34 | 0) >> 0] = $64 >>> 8 | 0;
          HEAP8[(i64toi32_i32$0 + 35 | 0) >> 0] = $64 >>> 16 | 0;
          HEAP8[(i64toi32_i32$0 + 36 | 0) >> 0] = $64 >>> 24 | 0;
          HEAP8[(i64toi32_i32$0 + 37 | 0) >> 0] = i64toi32_i32$1;
          HEAP8[(i64toi32_i32$0 + 38 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
          HEAP8[(i64toi32_i32$0 + 39 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
          HEAP8[(i64toi32_i32$0 + 40 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
          i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $70 = i64toi32_i32$1;
          i64toi32_i32$1 = $4;
          $65 = $70;
          HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $65;
          HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $65 >>> 8 | 0;
          HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $65 >>> 16 | 0;
          HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = $65 >>> 24 | 0;
          HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0;
          HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
          HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
          HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
          i64toi32_i32$2 = i64toi32_i32$2 + 40 | 0;
          i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $75 = i64toi32_i32$0;
          i64toi32_i32$0 = $4 + 41 | 0;
          $66 = $75;
          HEAP8[i64toi32_i32$0 >> 0] = $66;
          HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $66 >>> 8 | 0;
          HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $66 >>> 16 | 0;
          HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $66 >>> 24 | 0;
          HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
          HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
          HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
          HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
          i64toi32_i32$2 = $1 + 8 | 0;
          i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $80 = i64toi32_i32$1;
          i64toi32_i32$1 = $4 + 9 | 0;
          $68 = $80;
          HEAP8[i64toi32_i32$1 >> 0] = $68;
          HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $68 >>> 8 | 0;
          HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $68 >>> 16 | 0;
          HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $68 >>> 24 | 0;
          HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
          HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
          HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
          HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
          i64toi32_i32$2 = $1 + 16 | 0;
          i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $85 = i64toi32_i32$0;
          i64toi32_i32$0 = $4 + 17 | 0;
          $69 = $85;
          HEAP8[i64toi32_i32$0 >> 0] = $69;
          HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $69 >>> 8 | 0;
          HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $69 >>> 16 | 0;
          HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $69 >>> 24 | 0;
          HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
          HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
          HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
          HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
          i64toi32_i32$2 = $1 + 24 | 0;
          i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $90 = i64toi32_i32$1;
          i64toi32_i32$1 = $4 + 25 | 0;
          $71 = $90;
          HEAP8[i64toi32_i32$1 >> 0] = $71;
          HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $71 >>> 8 | 0;
          HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $71 >>> 16 | 0;
          HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $71 >>> 24 | 0;
          HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
          HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
          HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
          HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
          HEAP32[($6 + 28 | 0) >> 2] = 49;
          break label$1;
         }
         HEAP8[$4 >> 0] = 3;
         HEAP32[($6 + 28 | 0) >> 2] = 1;
         break label$1;
        }
        HEAP8[$4 >> 0] = 4;
        i64toi32_i32$2 = $1;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 32 | 0) >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 36 | 0) >> 2] | 0;
        $97 = i64toi32_i32$0;
        i64toi32_i32$0 = $4;
        $72 = $97;
        HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $72;
        HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $72 >>> 8 | 0;
        HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $72 >>> 16 | 0;
        HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = $72 >>> 24 | 0;
        HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1;
        HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
        HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
        HEAP8[(i64toi32_i32$0 + 8 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
        i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $100 = i64toi32_i32$1;
        i64toi32_i32$1 = $4;
        $73 = $100;
        HEAP8[(i64toi32_i32$1 + 17 | 0) >> 0] = $73;
        HEAP8[(i64toi32_i32$1 + 18 | 0) >> 0] = $73 >>> 8 | 0;
        HEAP8[(i64toi32_i32$1 + 19 | 0) >> 0] = $73 >>> 16 | 0;
        HEAP8[(i64toi32_i32$1 + 20 | 0) >> 0] = $73 >>> 24 | 0;
        HEAP8[(i64toi32_i32$1 + 21 | 0) >> 0] = i64toi32_i32$0;
        HEAP8[(i64toi32_i32$1 + 22 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
        HEAP8[(i64toi32_i32$1 + 23 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
        HEAP8[(i64toi32_i32$1 + 24 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
        i64toi32_i32$2 = i64toi32_i32$2 + 40 | 0;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $105 = i64toi32_i32$0;
        i64toi32_i32$0 = $4 + 9 | 0;
        $74 = $105;
        HEAP8[i64toi32_i32$0 >> 0] = $74;
        HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $74 >>> 8 | 0;
        HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $74 >>> 16 | 0;
        HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $74 >>> 24 | 0;
        HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
        HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
        HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
        HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
        i64toi32_i32$2 = $1 + 8 | 0;
        i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $110 = i64toi32_i32$1;
        i64toi32_i32$1 = $4 + 25 | 0;
        $76 = $110;
        HEAP8[i64toi32_i32$1 >> 0] = $76;
        HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $76 >>> 8 | 0;
        HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $76 >>> 16 | 0;
        HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $76 >>> 24 | 0;
        HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
        HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
        HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
        HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
        i64toi32_i32$2 = $1 + 16 | 0;
        i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $115 = i64toi32_i32$0;
        i64toi32_i32$0 = $4 + 33 | 0;
        $77 = $115;
        HEAP8[i64toi32_i32$0 >> 0] = $77;
        HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $77 >>> 8 | 0;
        HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $77 >>> 16 | 0;
        HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $77 >>> 24 | 0;
        HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
        HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
        HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
        HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
        i64toi32_i32$2 = $1 + 24 | 0;
        i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $120 = i64toi32_i32$1;
        i64toi32_i32$1 = $4 + 41 | 0;
        $78 = $120;
        HEAP8[i64toi32_i32$1 >> 0] = $78;
        HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $78 >>> 8 | 0;
        HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $78 >>> 16 | 0;
        HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $78 >>> 24 | 0;
        HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
        HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
        HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
        HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
        HEAP32[($6 + 28 | 0) >> 2] = 49;
        break label$1;
       }
       HEAP8[$4 >> 0] = 5;
       HEAP32[($6 + 28 | 0) >> 2] = 1;
       break label$1;
      }
      HEAP8[$4 >> 0] = 6;
      i64toi32_i32$2 = $1;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 32 | 0) >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 36 | 0) >> 2] | 0;
      $127 = i64toi32_i32$0;
      i64toi32_i32$0 = $4;
      $79 = $127;
      HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $79;
      HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $79 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $79 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = $79 >>> 24 | 0;
      HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1;
      HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 8 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 48 | 0) >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 52 | 0) >> 2] | 0;
      $130 = i64toi32_i32$1;
      i64toi32_i32$1 = $4;
      $81 = $130;
      HEAP8[(i64toi32_i32$1 + 49 | 0) >> 0] = $81;
      HEAP8[(i64toi32_i32$1 + 50 | 0) >> 0] = $81 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 51 | 0) >> 0] = $81 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 52 | 0) >> 0] = $81 >>> 24 | 0;
      HEAP8[(i64toi32_i32$1 + 53 | 0) >> 0] = i64toi32_i32$0;
      HEAP8[(i64toi32_i32$1 + 54 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 55 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 56 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
      i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $133 = i64toi32_i32$0;
      i64toi32_i32$0 = $4;
      $82 = $133;
      HEAP8[(i64toi32_i32$0 + 17 | 0) >> 0] = $82;
      HEAP8[(i64toi32_i32$0 + 18 | 0) >> 0] = $82 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 19 | 0) >> 0] = $82 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 20 | 0) >> 0] = $82 >>> 24 | 0;
      HEAP8[(i64toi32_i32$0 + 21 | 0) >> 0] = i64toi32_i32$1;
      HEAP8[(i64toi32_i32$0 + 22 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 23 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 24 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
      i64toi32_i32$2 = i64toi32_i32$2 + 40 | 0;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $138 = i64toi32_i32$1;
      i64toi32_i32$1 = $4 + 9 | 0;
      $83 = $138;
      HEAP8[i64toi32_i32$1 >> 0] = $83;
      HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $83 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $83 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $83 >>> 24 | 0;
      HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
      HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
      i64toi32_i32$2 = $1 + 56 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $143 = i64toi32_i32$0;
      i64toi32_i32$0 = $4 + 57 | 0;
      $84 = $143;
      HEAP8[i64toi32_i32$0 >> 0] = $84;
      HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $84 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $84 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $84 >>> 24 | 0;
      HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
      HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
      i64toi32_i32$2 = $1 + 8 | 0;
      i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $148 = i64toi32_i32$1;
      i64toi32_i32$1 = $4 + 25 | 0;
      $86 = $148;
      HEAP8[i64toi32_i32$1 >> 0] = $86;
      HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $86 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $86 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $86 >>> 24 | 0;
      HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
      HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
      i64toi32_i32$2 = $1 + 16 | 0;
      i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $153 = i64toi32_i32$0;
      i64toi32_i32$0 = $4 + 33 | 0;
      $87 = $153;
      HEAP8[i64toi32_i32$0 >> 0] = $87;
      HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $87 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $87 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $87 >>> 24 | 0;
      HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
      HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
      HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
      HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
      i64toi32_i32$2 = $1 + 24 | 0;
      i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $158 = i64toi32_i32$1;
      i64toi32_i32$1 = $4 + 41 | 0;
      $88 = $158;
      HEAP8[i64toi32_i32$1 >> 0] = $88;
      HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $88 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $88 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $88 >>> 24 | 0;
      HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
      HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
      HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
      HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
      HEAP32[($6 + 28 | 0) >> 2] = 65;
      break label$1;
     }
     HEAP8[$4 >> 0] = 7;
     i64toi32_i32$2 = $1;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 32 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 36 | 0) >> 2] | 0;
     $163 = i64toi32_i32$0;
     i64toi32_i32$0 = $4;
     $89 = $163;
     HEAP8[(i64toi32_i32$0 + 33 | 0) >> 0] = $89;
     HEAP8[(i64toi32_i32$0 + 34 | 0) >> 0] = $89 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 35 | 0) >> 0] = $89 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 36 | 0) >> 0] = $89 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 37 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 38 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 39 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 40 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 48 | 0) >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 52 | 0) >> 2] | 0;
     $166 = i64toi32_i32$1;
     i64toi32_i32$1 = $4;
     $91 = $166;
     HEAP8[(i64toi32_i32$1 + 49 | 0) >> 0] = $91;
     HEAP8[(i64toi32_i32$1 + 50 | 0) >> 0] = $91 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 51 | 0) >> 0] = $91 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 52 | 0) >> 0] = $91 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 53 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 54 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 55 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 56 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 68 | 0) >> 2] | 0;
     $169 = i64toi32_i32$0;
     i64toi32_i32$0 = $4;
     $92 = $169;
     HEAP8[(i64toi32_i32$0 + 65 | 0) >> 0] = $92;
     HEAP8[(i64toi32_i32$0 + 66 | 0) >> 0] = $92 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 67 | 0) >> 0] = $92 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 68 | 0) >> 0] = $92 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 69 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 70 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 71 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 72 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $172 = i64toi32_i32$1;
     i64toi32_i32$1 = $4;
     $93 = $172;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $93;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $93 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $93 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = $93 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 8 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = i64toi32_i32$2 + 40 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $177 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 41 | 0;
     $94 = $177;
     HEAP8[i64toi32_i32$0 >> 0] = $94;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $94 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $94 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $94 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 56 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $182 = i64toi32_i32$1;
     i64toi32_i32$1 = $4 + 57 | 0;
     $95 = $182;
     HEAP8[i64toi32_i32$1 >> 0] = $95;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $95 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $95 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $95 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 72 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $187 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 73 | 0;
     $96 = $187;
     HEAP8[i64toi32_i32$0 >> 0] = $96;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $96 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $96 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $96 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 8 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $192 = i64toi32_i32$1;
     i64toi32_i32$1 = $4 + 9 | 0;
     $98 = $192;
     HEAP8[i64toi32_i32$1 >> 0] = $98;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $98 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $98 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $98 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 16 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $197 = i64toi32_i32$0;
     i64toi32_i32$0 = $4 + 17 | 0;
     $99 = $197;
     HEAP8[i64toi32_i32$0 >> 0] = $99;
     HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $99 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $99 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $99 >>> 24 | 0;
     HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
     HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
     HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
     i64toi32_i32$2 = $1 + 24 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $202 = i64toi32_i32$1;
     i64toi32_i32$1 = $4 + 25 | 0;
     $101 = $202;
     HEAP8[i64toi32_i32$1 >> 0] = $101;
     HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $101 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $101 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $101 >>> 24 | 0;
     HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     HEAP32[($6 + 28 | 0) >> 2] = 81;
     break label$1;
    }
    HEAP8[$4 >> 0] = 8;
    i64toi32_i32$2 = $1;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $207 = i64toi32_i32$0;
    i64toi32_i32$0 = $4;
    $102 = $207;
    HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $102;
    HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $102 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $102 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = $102 >>> 24 | 0;
    HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1;
    HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
    HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
    HEAP8[(i64toi32_i32$0 + 8 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
    i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $212 = i64toi32_i32$1;
    i64toi32_i32$1 = $4 + 9 | 0;
    $103 = $212;
    HEAP8[i64toi32_i32$1 >> 0] = $103;
    HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $103 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $103 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $103 >>> 24 | 0;
    HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
    HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
    HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
    HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
    HEAP32[($6 + 28 | 0) >> 2] = 17;
    _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17h32945f46ee63bd59E($1 + 16 | 0 | 0, $6 + 20 | 0 | 0);
    break label$1;
   }
   HEAP8[$4 >> 0] = 9;
   i64toi32_i32$2 = $1;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $221 = i64toi32_i32$0;
   i64toi32_i32$0 = $4;
   $104 = $221;
   HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $104;
   HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $104 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $104 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = $104 >>> 24 | 0;
   HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1;
   HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 8 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
   HEAP8[(i64toi32_i32$0 + 17 | 0) >> 0] = HEAPU8[(i64toi32_i32$2 + 16 | 0) >> 0] | 0;
   i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $229 = i64toi32_i32$1;
   i64toi32_i32$1 = $4 + 9 | 0;
   $106 = $229;
   HEAP8[i64toi32_i32$1 >> 0] = $106;
   HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $106 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $106 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $106 >>> 24 | 0;
   HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
   HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
   HEAP32[($6 + 28 | 0) >> 2] = 18;
  }
  _ZN4core5slice5index74_$LT$impl$u20$core__ops__index__Index$LT$I$GT$$u20$for$u20$$u5b$T$u5d$$GT$5index17ha5cfb5eb89161dbdE($6 + 8 | 0 | 0, HEAP32[($6 + 20 | 0) >> 2] | 0 | 0, HEAP32[($6 + 24 | 0) >> 2] | 0 | 0, HEAP32[($6 + 28 | 0) >> 2] | 0 | 0);
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$1 = $3$hi;
  _ZN4gstd3msg5basic11reply_bytes17hd2991cd8a5cf50c5E($0 | 0, HEAP32[($6 + 8 | 0) >> 2] | 0 | 0, HEAP32[($6 + 12 | 0) >> 2] | 0 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, i64toi32_i32$1 | 0);
  __stack_pointer = $6 + 32 | 0;
 }
 
 function _ZN17gear_stack_buffer10trampoline17hf70d286ed9b46d15E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2 = 0, i64toi32_i32$2 = 0, $3 = 0, $15 = 0, $18 = 0, $22 = 0, $22$hi = 0, $25 = 0, $25$hi = 0;
  $2 = __stack_pointer - 48 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $4 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  $15 = HEAP32[$4 >> 2] | 0;
  $18 = HEAP32[($4 + 4 | 0) >> 2] | 0;
  $4 = HEAP32[($1 + 12 | 0) >> 2] | 0;
  i64toi32_i32$2 = $4;
  i64toi32_i32$0 = HEAP32[$4 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
  $22 = i64toi32_i32$0;
  $22$hi = i64toi32_i32$1;
  i64toi32_i32$2 = $4 + 8 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $25 = i64toi32_i32$1;
  $25$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $22$hi;
  i64toi32_i32$1 = $25$hi;
  _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17hb62a7ad89729b3e9E($2 + 12 | 0 | 0, $15 | 0, $18 | 0, $22 | 0, i64toi32_i32$0 | 0, $25 | 0, i64toi32_i32$1 | 0, $0 | 0, HEAP32[(HEAP32[$1 >> 2] | 0) >> 2] | 0 | 0);
  memcpy($3 | 0, $2 + 12 | 0 | 0, 36 | 0) | 0;
  __stack_pointer = $2 + 48 | 0;
 }
 
 function _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17hb62a7ad89729b3e9E($0, $1, $2, $3, $3$hi, $4, $4$hi, $5, $6) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  $5 = $5 | 0;
  $6 = $6 | 0;
  var $7 = 0, i64toi32_i32$0 = 0;
  $7 = __stack_pointer - 32 | 0;
  __stack_pointer = $7;
  HEAP32[($7 + 28 | 0) >> 2] = 0;
  HEAP32[($7 + 24 | 0) >> 2] = $6;
  HEAP32[($7 + 20 | 0) >> 2] = $5;
  _ZN55_$LT$X$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2891dafc5e9136e9E($1 | 0, $2 | 0, $7 + 20 | 0 | 0);
  _ZN4core5slice5index74_$LT$impl$u20$core__ops__index__Index$LT$I$GT$$u20$for$u20$$u5b$T$u5d$$GT$5index17ha5cfb5eb89161dbdE($7 + 8 | 0 | 0, HEAP32[($7 + 20 | 0) >> 2] | 0 | 0, HEAP32[($7 + 24 | 0) >> 2] | 0 | 0, HEAP32[($7 + 28 | 0) >> 2] | 0 | 0);
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$0 = $4$hi;
  i64toi32_i32$0 = $3$hi;
  _ZN4gstd3msg5basic11reply_bytes17hd2991cd8a5cf50c5E($0 | 0, HEAP32[($7 + 8 | 0) >> 2] | 0 | 0, HEAP32[($7 + 12 | 0) >> 2] | 0 | 0, $3 | 0, i64toi32_i32$0 | 0, $4 | 0, $4$hi | 0);
  __stack_pointer = $7 + 32 | 0;
 }
 
 function _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197($0) {
  $0 = $0 | 0;
  HEAPU8[(0 + 1050148 | 0) >> 0] | 0;
  return _ZN8dlmalloc8Dlmalloc6malloc17h61b4872f78296f5bE($0 | 0) | 0 | 0;
 }
 
 function _ZN18parity_scale_codec5codec6Encode12encoded_size17hc6e8efe12e6eba05E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  HEAP32[($2 + 12 | 0) >> 2] = 0;
  _ZN65_$LT$$u5b$T$u5d$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17h2729f9f522c5beddE($1 | 0, $2 + 12 | 0 | 0);
  $1 = HEAP32[($2 + 12 | 0) >> 2] | 0;
  __stack_pointer = $2 + 16 | 0;
  return $1 | 0;
 }
 
 function _ZN4core9panicking13assert_failed17h1157ffc3f975f563E() {
  _ZN4core9panicking19assert_failed_inner17h5511dfd79d7cf6bfE();
  wasm2js_trap();
 }
 
 function _ZN4core9panicking13assert_failed17h11d87aba98a83621E() {
  _ZN4core9panicking19assert_failed_inner17h5511dfd79d7cf6bfE();
  wasm2js_trap();
 }
 
 function _ZN4gstd3msg7encoded4send17hcd3c8a5f410d87bfE($0, $1, $2, $3, $4, $4$hi, $5, $5$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  $5 = $5 | 0;
  $5$hi = $5$hi | 0;
  var $6 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $7 = 0, $56 = 0;
  $6 = __stack_pointer - 112 | 0;
  __stack_pointer = $6;
  i64toi32_i32$0 = $5$hi;
  i64toi32_i32$1 = $6;
  HEAP32[($6 + 24 | 0) >> 2] = $5;
  HEAP32[($6 + 28 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $4$hi;
  i64toi32_i32$1 = $6;
  HEAP32[($6 + 16 | 0) >> 2] = $4;
  HEAP32[($6 + 20 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($6 + 36 | 0) >> 2] = $3;
  HEAP32[($6 + 32 | 0) >> 2] = $2;
  $7 = $6 + 48 | 0;
  HEAP32[$7 >> 2] = $6 + 16 | 0;
  HEAP32[($6 + 44 | 0) >> 2] = $1;
  HEAP32[($6 + 40 | 0) >> 2] = $6 + 32 | 0;
  label$1 : {
   label$2 : {
    $3 = _ZN18parity_scale_codec5codec6Encode12encoded_size17hc6e8efe12e6eba05E($2 | 0, $3 | 0) | 0;
    if ($3 >>> 0 < 65537 >>> 0) {
     break label$2
    }
    _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($6 + 8 | 0 | 0, $3 | 0, 0 | 0);
    $3 = HEAP32[($6 + 8 | 0) >> 2] | 0;
    $2 = HEAP32[($6 + 12 | 0) >> 2] | 0;
    _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17h6ab8c51009f099f4E($0 | 0, $6 + 40 | 0 | 0, $3 | 0, $2 | 0);
    _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($3 | 0, $2 | 0);
    break label$1;
   }
   HEAP32[($6 + 52 | 0) >> 2] = $3;
   HEAP32[($6 + 108 | 0) >> 2] = HEAP32[$7 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($6 + 40 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($6 + 44 | 0) >> 2] | 0;
   $56 = i64toi32_i32$0;
   i64toi32_i32$0 = $6;
   HEAP32[($6 + 100 | 0) >> 2] = $56;
   HEAP32[($6 + 104 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[($6 + 96 | 0) >> 2] = $6 + 56 | 0;
   HEAP32[($6 + 92 | 0) >> 2] = $6 + 52 | 0;
   c_with_alloca($3 | 0, 1 | 0, $6 + 92 | 0 | 0);
   memcpy($0 | 0, $6 + 56 | 0 | 0, 36 | 0) | 0;
  }
  __stack_pointer = $6 + 112 | 0;
 }
 
 function _ZN4gstd3msg7encoded5reply17ha9d7a9a3242b8638E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, i64toi32_i32$0 = 0, $5 = 0;
  $2 = __stack_pointer - 80 | 0;
  __stack_pointer = $2;
  i64toi32_i32$0 = 0;
  HEAP32[($2 + 16 | 0) >> 2] = 0;
  HEAP32[($2 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($2 + 8 | 0) >> 2] = 0;
  HEAP32[($2 + 12 | 0) >> 2] = i64toi32_i32$0;
  $3 = 65;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           $4 = (HEAPU8[($1 + 176 | 0) >> 0] | 0) + -3 | 0;
           switch ((($4 & 255 | 0) >>> 0 < 10 >>> 0 ? $4 : 8) & 255 | 0 | 0) {
           case 1:
           case 6:
            break label$2;
           case 9:
            break label$3;
           case 2:
           case 4:
            break label$6;
           case 8:
            break label$7;
           case 7:
            break label$8;
           case 3:
           case 5:
            break label$9;
           default:
            break label$5;
           };
          }
          $3 = 1;
          break label$2;
         }
         $3 = 81;
         break label$2;
        }
        HEAP32[($2 + 28 | 0) >> 2] = 17;
        $3 = $1 + 16 | 0;
        break label$4;
       }
       $3 = 49;
       break label$2;
      }
      HEAP32[($2 + 28 | 0) >> 2] = 1;
      $3 = $1;
     }
     _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17ha70389ffd682916fE($3 | 0, $2 + 28 | 0 | 0);
     $3 = HEAP32[($2 + 28 | 0) >> 2] | 0;
     if ($3 >>> 0 < 65537 >>> 0) {
      break label$2
     }
     _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($2 | 0, $3 | 0, 0 | 0);
     $3 = HEAP32[$2 >> 2] | 0;
     $5 = HEAP32[($2 + 4 | 0) >> 2] | 0;
     i64toi32_i32$0 = 0;
     _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17h585bccc7877c94f7E($0 | 0, $1 | 0, 0 | 0, i64toi32_i32$0 | 0, 0 | 0, 0 | 0, $3 | 0, $5 | 0);
     _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($3 | 0, $5 | 0);
     break label$1;
    }
    $3 = 18;
   }
   HEAP32[($2 + 24 | 0) >> 2] = $3;
   HEAP32[($2 + 76 | 0) >> 2] = $2 + 8 | 0;
   HEAP32[($2 + 68 | 0) >> 2] = $2 + 28 | 0;
   HEAP32[($2 + 64 | 0) >> 2] = $2 + 24 | 0;
   HEAP32[($2 + 72 | 0) >> 2] = $1;
   c_with_alloca($3 | 0, 2 | 0, $2 + 64 | 0 | 0);
   memcpy($0 | 0, $2 + 28 | 0 | 0, 36 | 0) | 0;
   $4 = (HEAPU8[($1 + 176 | 0) >> 0] | 0) + -3 | 0;
  }
  label$10 : {
   label$11 : {
    label$12 : {
     $4 = (($4 & 255 | 0) >>> 0 < 10 >>> 0 ? $4 : 8) & 255 | 0;
     if (($4 | 0) == (8 | 0)) {
      break label$12
     }
     if ($4) {
      break label$10
     }
     break label$11;
    }
    $1 = $1 + 16 | 0;
   }
   _ZN4core3ptr42drop_in_place$LT$inscribe_io__Inscribe$GT$17h3737e270f8447fa3E($1 | 0);
  }
  __stack_pointer = $2 + 80 | 0;
 }
 
 function _ZN4core3ptr42drop_in_place$LT$inscribe_io__Inscribe$GT$17h3737e270f8447fa3E($0) {
  $0 = $0 | 0;
  _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE(HEAP32[($0 + 96 | 0) >> 2] | 0 | 0, HEAP32[($0 + 100 | 0) >> 2] | 0 | 0);
  _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE(HEAP32[($0 + 108 | 0) >> 2] | 0 | 0, HEAP32[($0 + 112 | 0) >> 2] | 0 | 0);
  _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE(HEAP32[($0 + 120 | 0) >> 2] | 0 | 0, HEAP32[($0 + 124 | 0) >> 2] | 0 | 0);
  _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE(HEAP32[($0 + 132 | 0) >> 2] | 0 | 0, HEAP32[($0 + 136 | 0) >> 2] | 0 | 0);
  _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE(HEAP32[($0 + 144 | 0) >> 2] | 0 | 0, HEAP32[($0 + 148 | 0) >> 2] | 0 | 0);
 }
 
 function _ZN4core3ptr50drop_in_place$LT$inscribe_io__InscribeIoStates$GT$17h2e8d9b62b9e26375E($0) {
  $0 = $0 | 0;
  var $3 = 0, $6 = 0, $2 = 0, $5 = 0, $1 = 0, $7 = 0, $4 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       $2 = HEAP32[$0 >> 2] | 0;
       if (!$2) {
        break label$5
       }
       $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
       label$6 : {
        label$7 : {
         $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
         if (!$4) {
          break label$7
         }
         $5 = 0;
         label$8 : while (1) {
          label$9 : {
           label$10 : {
            if (!$5) {
             break label$10
            }
            $6 = $2;
            $7 = $3;
            $2 = $5;
            break label$9;
           }
           $6 = 0;
           label$11 : {
            if (!$3) {
             break label$11
            }
            label$12 : while (1) {
             $2 = HEAP32[($2 + 2032 | 0) >> 2] | 0;
             $3 = $3 + -1 | 0;
             if ($3) {
              continue label$12
             }
             break label$12;
            };
           }
           $7 = 0;
          }
          label$13 : {
           if ($7 >>> 0 < (HEAPU16[($2 + 2030 | 0) >> 1] | 0) >>> 0) {
            break label$13
           }
           label$14 : while (1) {
            _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h219e1439a8b6b3c1E($1 + 4 | 0 | 0, $2 | 0, $6 | 0);
            $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
            if (!$2) {
             break label$4
            }
            $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
            $7 = HEAP32[($1 + 12 | 0) >> 2] | 0;
            if ($7 >>> 0 >= (HEAPU16[($2 + 2030 | 0) >> 1] | 0) >>> 0) {
             continue label$14
            }
            break label$14;
           };
          }
          $3 = $7 + 1 | 0;
          label$15 : {
           label$16 : {
            if ($6) {
             break label$16
            }
            $5 = $2;
            break label$15;
           }
           $3 = ($2 + ($3 << 2 | 0) | 0) + 2032 | 0;
           label$17 : while (1) {
            $5 = HEAP32[$3 >> 2] | 0;
            $3 = $5 + 2032 | 0;
            $6 = $6 + -1 | 0;
            if ($6) {
             continue label$17
            }
            break label$17;
           };
           $3 = 0;
          }
          _ZN4core3ptr42drop_in_place$LT$inscribe_io__Inscribe$GT$17h3737e270f8447fa3E(($2 + Math_imul($7, 168) | 0) + 176 | 0 | 0);
          $2 = 0;
          $4 = $4 + -1 | 0;
          if ($4) {
           continue label$8
          }
          break label$6;
         };
        }
        label$18 : {
         if ($3) {
          break label$18
         }
         $5 = $2;
         break label$6;
        }
        $5 = $2;
        label$19 : while (1) {
         $5 = HEAP32[($5 + 2032 | 0) >> 2] | 0;
         $3 = $3 + -1 | 0;
         if ($3) {
          continue label$19
         }
         break label$19;
        };
       }
       _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h219e1439a8b6b3c1E($1 + 4 | 0 | 0, $5 | 0, 0 | 0);
       label$20 : while (1) {
        $6 = HEAP32[($1 + 4 | 0) >> 2] | 0;
        if (!$6) {
         break label$5
        }
        _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h219e1439a8b6b3c1E($1 + 4 | 0 | 0, $6 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
        continue label$20;
       };
      }
      $6 = HEAP32[($0 + 12 | 0) >> 2] | 0;
      if (!$6) {
       break label$1
      }
      $3 = HEAP32[($0 + 16 | 0) >> 2] | 0;
      $4 = HEAP32[($0 + 20 | 0) >> 2] | 0;
      if (!$4) {
       break label$3
      }
      $5 = 0;
      label$21 : while (1) {
       label$22 : {
        label$23 : {
         if (!$5) {
          break label$23
         }
         $2 = $5;
         $7 = $3;
         break label$22;
        }
        $7 = 0;
        label$24 : {
         if (!$3) {
          break label$24
         }
         label$25 : while (1) {
          $6 = HEAP32[($6 + 320 | 0) >> 2] | 0;
          $3 = $3 + -1 | 0;
          if ($3) {
           continue label$25
          }
          break label$25;
         };
        }
        $2 = $6;
        $6 = 0;
       }
       label$26 : {
        if ($7 >>> 0 < (HEAPU16[($2 + 314 | 0) >> 1] | 0) >>> 0) {
         break label$26
        }
        label$27 : while (1) {
         _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h281e077064bd0c97E($1 + 4 | 0 | 0, $2 | 0, $6 | 0);
         $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
         if (!$2) {
          break label$4
         }
         $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
         $7 = HEAP32[($1 + 12 | 0) >> 2] | 0;
         if ($7 >>> 0 >= (HEAPU16[($2 + 314 | 0) >> 1] | 0) >>> 0) {
          continue label$27
         }
         break label$27;
        };
       }
       $3 = $7 + 1 | 0;
       label$28 : {
        label$29 : {
         if ($6) {
          break label$29
         }
         $5 = $2;
         break label$28;
        }
        $3 = ($2 + ($3 << 2 | 0) | 0) + 320 | 0;
        label$30 : while (1) {
         $5 = HEAP32[$3 >> 2] | 0;
         $3 = $5 + 320 | 0;
         $6 = $6 + -1 | 0;
         if ($6) {
          continue label$30
         }
         break label$30;
        };
        $3 = 0;
       }
       _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h471fbf6adddb7064E(($2 + Math_imul($7, 12) | 0) + 180 | 0 | 0);
       $6 = 0;
       $4 = $4 + -1 | 0;
       if ($4) {
        continue label$21
       }
       break label$2;
      };
     }
     _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
     wasm2js_trap();
    }
    label$31 : {
     if ($3) {
      break label$31
     }
     $5 = $6;
     break label$2;
    }
    $5 = $6;
    label$32 : while (1) {
     $5 = HEAP32[($5 + 320 | 0) >> 2] | 0;
     $3 = $3 + -1 | 0;
     if ($3) {
      continue label$32
     }
     break label$32;
    };
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h281e077064bd0c97E($1 + 4 | 0 | 0, $5 | 0, 0 | 0);
   label$33 : while (1) {
    $6 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$6) {
     break label$1
    }
    _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h281e077064bd0c97E($1 + 4 | 0 | 0, $6 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
    continue label$33;
   };
  }
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hb3dd13c6de4f8444E($0 + 24 | 0 | 0);
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h0c4d75da50fb19d5E($0 + 36 | 0 | 0);
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hca4999d8e988b0ceE($0 + 48 | 0 | 0);
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h42f2b7007dce1cf9E($0 + 60 | 0 | 0);
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hdeb241d0c8138ebeE($0 + 72 | 0 | 0);
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h6b90a1698205b643E($0 + 84 | 0 | 0);
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h219e1439a8b6b3c1E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $3 = 0, $4 = 0, $14 = 0, $16 = 0, $19$hi = 0, $21$hi = 0, $22 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($1 + 2024 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = $1;
    break label$1;
   }
   $4 = $2 + 1 | 0;
   $2 = HEAPU16[($1 + 2028 | 0) >> 1] | 0;
  }
  __rust_dealloc($1 | 0);
  HEAP32[$0 >> 2] = $3;
  $16 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $14 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $21$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$0 = $14;
  i64toi32_i32$2 = $21$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $22 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$0 = $16;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $22;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h281e077064bd0c97E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $3 = 0, $4 = 0, $14 = 0, $16 = 0, $19$hi = 0, $21$hi = 0, $22 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($1 + 176 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = $1;
    break label$1;
   }
   $4 = $2 + 1 | 0;
   $2 = HEAPU16[($1 + 312 | 0) >> 1] | 0;
  }
  __rust_dealloc($1 | 0);
  HEAP32[$0 >> 2] = $3;
  $16 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $14 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $21$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$0 = $14;
  i64toi32_i32$2 = $21$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $22 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$0 = $16;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $22;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h471fbf6adddb7064E($0) {
  $0 = $0 | 0;
  var $2 = 0, $3 = 0, $1 = 0, $5 = 0, $4 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   if (!$2) {
    break label$1
   }
   $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   label$2 : {
    label$3 : {
     $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     if (!$4) {
      break label$3
     }
     $5 = 0;
     label$4 : while (1) {
      label$5 : {
       label$6 : {
        if (!$5) {
         break label$6
        }
        $0 = $2;
        $2 = $5;
        break label$5;
       }
       $0 = 0;
       label$7 : {
        if (!$3) {
         break label$7
        }
        label$8 : while (1) {
         $2 = HEAP32[($2 + 536 | 0) >> 2] | 0;
         $3 = $3 + -1 | 0;
         if ($3) {
          continue label$8
         }
         break label$8;
        };
       }
       $3 = 0;
      }
      label$9 : {
       if ($3 >>> 0 < (HEAPU16[($2 + 534 | 0) >> 1] | 0) >>> 0) {
        break label$9
       }
       label$10 : {
        label$11 : while (1) {
         _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h393244177231c3d7E($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
         $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
         if (!$2) {
          break label$10
         }
         $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
         $3 = HEAP32[($1 + 12 | 0) >> 2] | 0;
         if ($3 >>> 0 < (HEAPU16[($2 + 534 | 0) >> 1] | 0) >>> 0) {
          break label$9
         }
         continue label$11;
        };
       }
       _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
       wasm2js_trap();
      }
      $3 = $3 + 1 | 0;
      label$12 : {
       label$13 : {
        if ($0) {
         break label$13
        }
        $5 = $2;
        break label$12;
       }
       $2 = ($2 + ($3 << 2 | 0) | 0) + 536 | 0;
       label$14 : while (1) {
        $5 = HEAP32[$2 >> 2] | 0;
        $2 = $5 + 536 | 0;
        $0 = $0 + -1 | 0;
        if ($0) {
         continue label$14
        }
        break label$14;
       };
       $3 = 0;
      }
      $2 = 0;
      $4 = $4 + -1 | 0;
      if ($4) {
       continue label$4
      }
      break label$2;
     };
    }
    label$15 : {
     if ($3) {
      break label$15
     }
     $5 = $2;
     break label$2;
    }
    $5 = $2;
    label$16 : while (1) {
     $5 = HEAP32[($5 + 536 | 0) >> 2] | 0;
     $3 = $3 + -1 | 0;
     if ($3) {
      continue label$16
     }
     break label$16;
    };
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h393244177231c3d7E($1 + 4 | 0 | 0, $5 | 0, 0 | 0);
   label$17 : while (1) {
    $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$0) {
     break label$1
    }
    _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h393244177231c3d7E($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
    continue label$17;
   };
  }
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hb3dd13c6de4f8444E($0) {
  $0 = $0 | 0;
  var $2 = 0, $3 = 0, $1 = 0, $5 = 0, $4 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   if (!$2) {
    break label$1
   }
   $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   label$2 : {
    label$3 : {
     $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     if (!$4) {
      break label$3
     }
     $5 = 0;
     label$4 : while (1) {
      label$5 : {
       label$6 : {
        if (!$5) {
         break label$6
        }
        $0 = $2;
        $2 = $5;
        break label$5;
       }
       $0 = 0;
       label$7 : {
        if (!$3) {
         break label$7
        }
        label$8 : while (1) {
         $2 = HEAP32[($2 + 360 | 0) >> 2] | 0;
         $3 = $3 + -1 | 0;
         if ($3) {
          continue label$8
         }
         break label$8;
        };
       }
       $3 = 0;
      }
      label$9 : {
       if ($3 >>> 0 < (HEAPU16[($2 + 358 | 0) >> 1] | 0) >>> 0) {
        break label$9
       }
       label$10 : {
        label$11 : while (1) {
         _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h905283a4a61d7d7aE($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
         $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
         if (!$2) {
          break label$10
         }
         $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
         $3 = HEAP32[($1 + 12 | 0) >> 2] | 0;
         if ($3 >>> 0 < (HEAPU16[($2 + 358 | 0) >> 1] | 0) >>> 0) {
          break label$9
         }
         continue label$11;
        };
       }
       _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
       wasm2js_trap();
      }
      $3 = $3 + 1 | 0;
      label$12 : {
       label$13 : {
        if ($0) {
         break label$13
        }
        $5 = $2;
        break label$12;
       }
       $2 = ($2 + ($3 << 2 | 0) | 0) + 360 | 0;
       label$14 : while (1) {
        $5 = HEAP32[$2 >> 2] | 0;
        $2 = $5 + 360 | 0;
        $0 = $0 + -1 | 0;
        if ($0) {
         continue label$14
        }
        break label$14;
       };
       $3 = 0;
      }
      $2 = 0;
      $4 = $4 + -1 | 0;
      if ($4) {
       continue label$4
      }
      break label$2;
     };
    }
    label$15 : {
     if ($3) {
      break label$15
     }
     $5 = $2;
     break label$2;
    }
    $5 = $2;
    label$16 : while (1) {
     $5 = HEAP32[($5 + 360 | 0) >> 2] | 0;
     $3 = $3 + -1 | 0;
     if ($3) {
      continue label$16
     }
     break label$16;
    };
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h905283a4a61d7d7aE($1 + 4 | 0 | 0, $5 | 0, 0 | 0);
   label$17 : while (1) {
    $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$0) {
     break label$1
    }
    _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h905283a4a61d7d7aE($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
    continue label$17;
   };
  }
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h0c4d75da50fb19d5E($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0, $6 = 0, $7 = 0, $3 = 0, $5 = 0, $9 = 0, $4 = 0, $8 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   if (!$2) {
    break label$1
   }
   $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   label$2 : {
    label$3 : {
     $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     if (!$4) {
      break label$3
     }
     $5 = 0;
     label$4 : while (1) {
      label$5 : {
       label$6 : {
        if (!$5) {
         break label$6
        }
        $0 = $2;
        $6 = $3;
        $2 = $5;
        break label$5;
       }
       $0 = 0;
       label$7 : {
        if (!$3) {
         break label$7
        }
        label$8 : while (1) {
         $2 = HEAP32[($2 + 492 | 0) >> 2] | 0;
         $3 = $3 + -1 | 0;
         if ($3) {
          continue label$8
         }
         break label$8;
        };
       }
       $6 = 0;
      }
      label$9 : {
       label$10 : {
        label$11 : {
         label$12 : {
          label$13 : {
           if ($6 >>> 0 < (HEAPU16[($2 + 490 | 0) >> 1] | 0) >>> 0) {
            break label$13
           }
           label$14 : while (1) {
            _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
            $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
            if (!$2) {
             break label$12
            }
            $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
            $6 = HEAP32[($1 + 12 | 0) >> 2] | 0;
            if ($6 >>> 0 >= (HEAPU16[($2 + 490 | 0) >> 1] | 0) >>> 0) {
             continue label$14
            }
            break label$14;
           };
          }
          $3 = $6 + 1 | 0;
          label$15 : {
           label$16 : {
            if ($0) {
             break label$16
            }
            $5 = $2;
            break label$15;
           }
           $7 = ($2 + ($3 << 2 | 0) | 0) + 492 | 0;
           label$17 : while (1) {
            $5 = HEAP32[$7 >> 2] | 0;
            $7 = $5 + 492 | 0;
            $0 = $0 + -1 | 0;
            if ($0) {
             continue label$17
            }
            break label$17;
           };
           $3 = 0;
          }
          $0 = ($2 + Math_imul($6, 12) | 0) + 356 | 0;
          $6 = HEAP32[$0 >> 2] | 0;
          if (!$6) {
           break label$9
          }
          $7 = HEAP32[($0 + 4 | 0) >> 2] | 0;
          $8 = HEAP32[($0 + 8 | 0) >> 2] | 0;
          if (!$8) {
           break label$11
          }
          $0 = $6;
          $6 = 0;
          label$18 : while (1) {
           label$19 : {
            label$20 : {
             if (!$6) {
              break label$20
             }
             $2 = $6;
             $9 = $7;
             break label$19;
            }
            $9 = 0;
            label$21 : {
             if (!$7) {
              break label$21
             }
             label$22 : while (1) {
              $0 = HEAP32[($0 + 1944 | 0) >> 2] | 0;
              $7 = $7 + -1 | 0;
              if ($7) {
               continue label$22
              }
              break label$22;
             };
            }
            $2 = $0;
            $0 = 0;
           }
           label$23 : {
            if ($9 >>> 0 < (HEAPU16[($2 + 1942 | 0) >> 1] | 0) >>> 0) {
             break label$23
            }
            label$24 : while (1) {
             _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h024ea0e983b1c439E($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
             $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
             if (!$2) {
              break label$12
             }
             $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
             $9 = HEAP32[($1 + 12 | 0) >> 2] | 0;
             if ($9 >>> 0 >= (HEAPU16[($2 + 1942 | 0) >> 1] | 0) >>> 0) {
              continue label$24
             }
             break label$24;
            };
           }
           $7 = $9 + 1 | 0;
           label$25 : {
            label$26 : {
             if ($0) {
              break label$26
             }
             $6 = $2;
             break label$25;
            }
            $7 = ($2 + ($7 << 2 | 0) | 0) + 1944 | 0;
            label$27 : while (1) {
             $6 = HEAP32[$7 >> 2] | 0;
             $7 = $6 + 1944 | 0;
             $0 = $0 + -1 | 0;
             if ($0) {
              continue label$27
             }
             break label$27;
            };
            $7 = 0;
           }
           _ZN4core3ptr42drop_in_place$LT$inscribe_io__Inscribe$GT$17h3737e270f8447fa3E(($2 + Math_imul($9, 168) | 0) + 88 | 0 | 0);
           $0 = 0;
           $8 = $8 + -1 | 0;
           if ($8) {
            continue label$18
           }
           break label$10;
          };
         }
         _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
         wasm2js_trap();
        }
        if (!$7) {
         break label$10
        }
        label$28 : while (1) {
         $6 = HEAP32[($6 + 1944 | 0) >> 2] | 0;
         $7 = $7 + -1 | 0;
         if ($7) {
          continue label$28
         }
         break label$28;
        };
       }
       _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h024ea0e983b1c439E($1 + 4 | 0 | 0, $6 | 0, 0 | 0);
       label$29 : while (1) {
        $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
        if (!$0) {
         break label$9
        }
        _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h024ea0e983b1c439E($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
        continue label$29;
       };
      }
      $2 = 0;
      $4 = $4 + -1 | 0;
      if ($4) {
       continue label$4
      }
      break label$2;
     };
    }
    label$30 : {
     if ($3) {
      break label$30
     }
     $5 = $2;
     break label$2;
    }
    $5 = $2;
    label$31 : while (1) {
     $5 = HEAP32[($5 + 492 | 0) >> 2] | 0;
     $3 = $3 + -1 | 0;
     if ($3) {
      continue label$31
     }
     break label$31;
    };
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($1 + 4 | 0 | 0, $5 | 0, 0 | 0);
   label$32 : while (1) {
    $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$0) {
     break label$1
    }
    _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
    continue label$32;
   };
  }
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hca4999d8e988b0ceE($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0, $7 = 0, $3 = 0, $6 = 0, $5 = 0, $4 = 0, $8 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   if (!$2) {
    break label$1
   }
   $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   label$2 : {
    label$3 : {
     $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     if (!$4) {
      break label$3
     }
     $5 = 0;
     label$4 : while (1) {
      label$5 : {
       label$6 : {
        if (!$5) {
         break label$6
        }
        $0 = $2;
        $6 = $3;
        $2 = $5;
        break label$5;
       }
       $0 = 0;
       label$7 : {
        if (!$3) {
         break label$7
        }
        label$8 : while (1) {
         $2 = HEAP32[($2 + 492 | 0) >> 2] | 0;
         $3 = $3 + -1 | 0;
         if ($3) {
          continue label$8
         }
         break label$8;
        };
       }
       $6 = 0;
      }
      label$9 : {
       label$10 : {
        label$11 : {
         label$12 : {
          label$13 : {
           if ($6 >>> 0 < (HEAPU16[($2 + 490 | 0) >> 1] | 0) >>> 0) {
            break label$13
           }
           label$14 : while (1) {
            _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
            $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
            if (!$2) {
             break label$12
            }
            $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
            $6 = HEAP32[($1 + 12 | 0) >> 2] | 0;
            if ($6 >>> 0 >= (HEAPU16[($2 + 490 | 0) >> 1] | 0) >>> 0) {
             continue label$14
            }
            break label$14;
           };
          }
          $3 = $6 + 1 | 0;
          label$15 : {
           label$16 : {
            if ($0) {
             break label$16
            }
            $5 = $2;
            break label$15;
           }
           $7 = ($2 + ($3 << 2 | 0) | 0) + 492 | 0;
           label$17 : while (1) {
            $5 = HEAP32[$7 >> 2] | 0;
            $7 = $5 + 492 | 0;
            $0 = $0 + -1 | 0;
            if ($0) {
             continue label$17
            }
            break label$17;
           };
           $3 = 0;
          }
          $0 = ($2 + Math_imul($6, 12) | 0) + 356 | 0;
          $2 = HEAP32[$0 >> 2] | 0;
          if (!$2) {
           break label$9
          }
          $7 = HEAP32[($0 + 4 | 0) >> 2] | 0;
          $8 = HEAP32[($0 + 8 | 0) >> 2] | 0;
          if (!$8) {
           break label$11
          }
          $0 = $2;
          $2 = 0;
          label$18 : while (1) {
           label$19 : {
            label$20 : {
             if (!$2) {
              break label$20
             }
             $6 = $7;
             break label$19;
            }
            $6 = 0;
            label$21 : {
             if (!$7) {
              break label$21
             }
             label$22 : while (1) {
              $0 = HEAP32[($0 + 272 | 0) >> 2] | 0;
              $7 = $7 + -1 | 0;
              if ($7) {
               continue label$22
              }
              break label$22;
             };
            }
            $2 = $0;
            $0 = 0;
           }
           label$23 : {
            if ($6 >>> 0 < (HEAPU16[($2 + 270 | 0) >> 1] | 0) >>> 0) {
             break label$23
            }
            label$24 : while (1) {
             _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h110d71d4f3abc285E($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
             $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
             if (!$2) {
              break label$12
             }
             $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
             $6 = HEAP32[($1 + 12 | 0) >> 2] | 0;
             if ($6 >>> 0 >= (HEAPU16[($2 + 270 | 0) >> 1] | 0) >>> 0) {
              continue label$24
             }
             break label$24;
            };
           }
           $7 = $6 + 1 | 0;
           label$25 : {
            if (!$0) {
             break label$25
            }
            $7 = ($2 + ($7 << 2 | 0) | 0) + 272 | 0;
            label$26 : while (1) {
             $2 = HEAP32[$7 >> 2] | 0;
             $7 = $2 + 272 | 0;
             $0 = $0 + -1 | 0;
             if ($0) {
              continue label$26
             }
             break label$26;
            };
            $7 = 0;
           }
           $0 = 0;
           $8 = $8 + -1 | 0;
           if ($8) {
            continue label$18
           }
           break label$10;
          };
         }
         _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
         wasm2js_trap();
        }
        if (!$7) {
         break label$10
        }
        label$27 : while (1) {
         $2 = HEAP32[($2 + 272 | 0) >> 2] | 0;
         $7 = $7 + -1 | 0;
         if ($7) {
          continue label$27
         }
         break label$27;
        };
       }
       _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h110d71d4f3abc285E($1 + 4 | 0 | 0, $2 | 0, 0 | 0);
       label$28 : while (1) {
        $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
        if (!$0) {
         break label$9
        }
        _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h110d71d4f3abc285E($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
        continue label$28;
       };
      }
      $2 = 0;
      $4 = $4 + -1 | 0;
      if ($4) {
       continue label$4
      }
      break label$2;
     };
    }
    label$29 : {
     if ($3) {
      break label$29
     }
     $5 = $2;
     break label$2;
    }
    $5 = $2;
    label$30 : while (1) {
     $5 = HEAP32[($5 + 492 | 0) >> 2] | 0;
     $3 = $3 + -1 | 0;
     if ($3) {
      continue label$30
     }
     break label$30;
    };
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($1 + 4 | 0 | 0, $5 | 0, 0 | 0);
   label$31 : while (1) {
    $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$0) {
     break label$1
    }
    _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
    continue label$31;
   };
  }
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h42f2b7007dce1cf9E($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0, $7 = 0, $3 = 0, $6 = 0, $5 = 0, $4 = 0, $8 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   if (!$2) {
    break label$1
   }
   $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   label$2 : {
    label$3 : {
     $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     if (!$4) {
      break label$3
     }
     $5 = 0;
     label$4 : while (1) {
      label$5 : {
       label$6 : {
        if (!$5) {
         break label$6
        }
        $0 = $2;
        $6 = $3;
        $2 = $5;
        break label$5;
       }
       $0 = 0;
       label$7 : {
        if (!$3) {
         break label$7
        }
        label$8 : while (1) {
         $2 = HEAP32[($2 + 320 | 0) >> 2] | 0;
         $3 = $3 + -1 | 0;
         if ($3) {
          continue label$8
         }
         break label$8;
        };
       }
       $6 = 0;
      }
      label$9 : {
       label$10 : {
        label$11 : {
         label$12 : {
          label$13 : {
           if ($6 >>> 0 < (HEAPU16[($2 + 314 | 0) >> 1] | 0) >>> 0) {
            break label$13
           }
           label$14 : while (1) {
            _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h281e077064bd0c97E($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
            $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
            if (!$2) {
             break label$12
            }
            $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
            $6 = HEAP32[($1 + 12 | 0) >> 2] | 0;
            if ($6 >>> 0 >= (HEAPU16[($2 + 314 | 0) >> 1] | 0) >>> 0) {
             continue label$14
            }
            break label$14;
           };
          }
          $3 = $6 + 1 | 0;
          label$15 : {
           label$16 : {
            if ($0) {
             break label$16
            }
            $5 = $2;
            break label$15;
           }
           $7 = ($2 + ($3 << 2 | 0) | 0) + 320 | 0;
           label$17 : while (1) {
            $5 = HEAP32[$7 >> 2] | 0;
            $7 = $5 + 320 | 0;
            $0 = $0 + -1 | 0;
            if ($0) {
             continue label$17
            }
            break label$17;
           };
           $3 = 0;
          }
          $0 = ($2 + Math_imul($6, 12) | 0) + 180 | 0;
          $2 = HEAP32[$0 >> 2] | 0;
          if (!$2) {
           break label$9
          }
          $7 = HEAP32[($0 + 4 | 0) >> 2] | 0;
          $8 = HEAP32[($0 + 8 | 0) >> 2] | 0;
          if (!$8) {
           break label$11
          }
          $0 = $2;
          $2 = 0;
          label$18 : while (1) {
           label$19 : {
            label$20 : {
             if (!$2) {
              break label$20
             }
             $6 = $7;
             break label$19;
            }
            $6 = 0;
            label$21 : {
             if (!$7) {
              break label$21
             }
             label$22 : while (1) {
              $0 = HEAP32[($0 + 448 | 0) >> 2] | 0;
              $7 = $7 + -1 | 0;
              if ($7) {
               continue label$22
              }
              break label$22;
             };
            }
            $2 = $0;
            $0 = 0;
           }
           label$23 : {
            if ($6 >>> 0 < (HEAPU16[($2 + 446 | 0) >> 1] | 0) >>> 0) {
             break label$23
            }
            label$24 : while (1) {
             _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17ha6c3187cdb16e542E($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
             $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
             if (!$2) {
              break label$12
             }
             $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
             $6 = HEAP32[($1 + 12 | 0) >> 2] | 0;
             if ($6 >>> 0 >= (HEAPU16[($2 + 446 | 0) >> 1] | 0) >>> 0) {
              continue label$24
             }
             break label$24;
            };
           }
           $7 = $6 + 1 | 0;
           label$25 : {
            if (!$0) {
             break label$25
            }
            $7 = ($2 + ($7 << 2 | 0) | 0) + 448 | 0;
            label$26 : while (1) {
             $2 = HEAP32[$7 >> 2] | 0;
             $7 = $2 + 448 | 0;
             $0 = $0 + -1 | 0;
             if ($0) {
              continue label$26
             }
             break label$26;
            };
            $7 = 0;
           }
           $0 = 0;
           $8 = $8 + -1 | 0;
           if ($8) {
            continue label$18
           }
           break label$10;
          };
         }
         _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
         wasm2js_trap();
        }
        if (!$7) {
         break label$10
        }
        label$27 : while (1) {
         $2 = HEAP32[($2 + 448 | 0) >> 2] | 0;
         $7 = $7 + -1 | 0;
         if ($7) {
          continue label$27
         }
         break label$27;
        };
       }
       _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17ha6c3187cdb16e542E($1 + 4 | 0 | 0, $2 | 0, 0 | 0);
       label$28 : while (1) {
        $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
        if (!$0) {
         break label$9
        }
        _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17ha6c3187cdb16e542E($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
        continue label$28;
       };
      }
      $2 = 0;
      $4 = $4 + -1 | 0;
      if ($4) {
       continue label$4
      }
      break label$2;
     };
    }
    label$29 : {
     if ($3) {
      break label$29
     }
     $5 = $2;
     break label$2;
    }
    $5 = $2;
    label$30 : while (1) {
     $5 = HEAP32[($5 + 320 | 0) >> 2] | 0;
     $3 = $3 + -1 | 0;
     if ($3) {
      continue label$30
     }
     break label$30;
    };
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h281e077064bd0c97E($1 + 4 | 0 | 0, $5 | 0, 0 | 0);
   label$31 : while (1) {
    $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$0) {
     break label$1
    }
    _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h281e077064bd0c97E($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
    continue label$31;
   };
  }
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hdeb241d0c8138ebeE($0) {
  $0 = $0 | 0;
  var $2 = 0, $3 = 0, $1 = 0, $5 = 0, $4 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   if (!$2) {
    break label$1
   }
   $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   label$2 : {
    label$3 : {
     $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     if (!$4) {
      break label$3
     }
     $5 = 0;
     label$4 : while (1) {
      label$5 : {
       label$6 : {
        if (!$5) {
         break label$6
        }
        $0 = $2;
        $2 = $5;
        break label$5;
       }
       $0 = 0;
       label$7 : {
        if (!$3) {
         break label$7
        }
        label$8 : while (1) {
         $2 = HEAP32[($2 + 1152 | 0) >> 2] | 0;
         $3 = $3 + -1 | 0;
         if ($3) {
          continue label$8
         }
         break label$8;
        };
       }
       $3 = 0;
      }
      label$9 : {
       if ($3 >>> 0 < (HEAPU16[($2 + 1150 | 0) >> 1] | 0) >>> 0) {
        break label$9
       }
       label$10 : {
        label$11 : while (1) {
         _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h258a5d8df18a2484E($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
         $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
         if (!$2) {
          break label$10
         }
         $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
         $3 = HEAP32[($1 + 12 | 0) >> 2] | 0;
         if ($3 >>> 0 < (HEAPU16[($2 + 1150 | 0) >> 1] | 0) >>> 0) {
          break label$9
         }
         continue label$11;
        };
       }
       _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
       wasm2js_trap();
      }
      $3 = $3 + 1 | 0;
      label$12 : {
       label$13 : {
        if ($0) {
         break label$13
        }
        $5 = $2;
        break label$12;
       }
       $2 = ($2 + ($3 << 2 | 0) | 0) + 1152 | 0;
       label$14 : while (1) {
        $5 = HEAP32[$2 >> 2] | 0;
        $2 = $5 + 1152 | 0;
        $0 = $0 + -1 | 0;
        if ($0) {
         continue label$14
        }
        break label$14;
       };
       $3 = 0;
      }
      $2 = 0;
      $4 = $4 + -1 | 0;
      if ($4) {
       continue label$4
      }
      break label$2;
     };
    }
    label$15 : {
     if ($3) {
      break label$15
     }
     $5 = $2;
     break label$2;
    }
    $5 = $2;
    label$16 : while (1) {
     $5 = HEAP32[($5 + 1152 | 0) >> 2] | 0;
     $3 = $3 + -1 | 0;
     if ($3) {
      continue label$16
     }
     break label$16;
    };
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h258a5d8df18a2484E($1 + 4 | 0 | 0, $5 | 0, 0 | 0);
   label$17 : while (1) {
    $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$0) {
     break label$1
    }
    _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h258a5d8df18a2484E($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
    continue label$17;
   };
  }
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h6b90a1698205b643E($0) {
  $0 = $0 | 0;
  var $2 = 0, $3 = 0, $1 = 0, $5 = 0, $6 = 0, $4 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   if (!$2) {
    break label$1
   }
   $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   label$2 : {
    label$3 : {
     $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     if (!$4) {
      break label$3
     }
     $5 = 0;
     label$4 : while (1) {
      label$5 : {
       label$6 : {
        if (!$5) {
         break label$6
        }
        $0 = $2;
        $6 = $3;
        $2 = $5;
        break label$5;
       }
       $0 = 0;
       label$7 : {
        if (!$3) {
         break label$7
        }
        label$8 : while (1) {
         $2 = HEAP32[($2 + 492 | 0) >> 2] | 0;
         $3 = $3 + -1 | 0;
         if ($3) {
          continue label$8
         }
         break label$8;
        };
       }
       $6 = 0;
      }
      label$9 : {
       if ($6 >>> 0 < (HEAPU16[($2 + 490 | 0) >> 1] | 0) >>> 0) {
        break label$9
       }
       label$10 : {
        label$11 : while (1) {
         _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($1 + 4 | 0 | 0, $2 | 0, $0 | 0);
         $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
         if (!$2) {
          break label$10
         }
         $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
         $6 = HEAP32[($1 + 12 | 0) >> 2] | 0;
         if ($6 >>> 0 < (HEAPU16[($2 + 490 | 0) >> 1] | 0) >>> 0) {
          break label$9
         }
         continue label$11;
        };
       }
       _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
       wasm2js_trap();
      }
      $3 = $6 + 1 | 0;
      label$12 : {
       label$13 : {
        if ($0) {
         break label$13
        }
        $5 = $2;
        break label$12;
       }
       $3 = ($2 + ($3 << 2 | 0) | 0) + 492 | 0;
       label$14 : while (1) {
        $5 = HEAP32[$3 >> 2] | 0;
        $3 = $5 + 492 | 0;
        $0 = $0 + -1 | 0;
        if ($0) {
         continue label$14
        }
        break label$14;
       };
       $3 = 0;
      }
      _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hdeb241d0c8138ebeE(($2 + Math_imul($6, 12) | 0) + 356 | 0 | 0);
      $2 = 0;
      $4 = $4 + -1 | 0;
      if ($4) {
       continue label$4
      }
      break label$2;
     };
    }
    label$15 : {
     if ($3) {
      break label$15
     }
     $5 = $2;
     break label$2;
    }
    $5 = $2;
    label$16 : while (1) {
     $5 = HEAP32[($5 + 492 | 0) >> 2] | 0;
     $3 = $3 + -1 | 0;
     if ($3) {
      continue label$16
     }
     break label$16;
    };
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($1 + 4 | 0 | 0, $5 | 0, 0 | 0);
   label$17 : while (1) {
    $0 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$0) {
     break label$1
    }
    _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($1 + 4 | 0 | 0, $0 | 0, HEAP32[($1 + 8 | 0) >> 2] | 0 | 0);
    continue label$17;
   };
  }
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h63abf574450c2957E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $3 = 0, $4 = 0, $14 = 0, $16 = 0, $19$hi = 0, $21$hi = 0, $22 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($1 + 352 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = $1;
    break label$1;
   }
   $4 = $2 + 1 | 0;
   $2 = HEAPU16[($1 + 488 | 0) >> 1] | 0;
  }
  __rust_dealloc($1 | 0);
  HEAP32[$0 >> 2] = $3;
  $16 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $14 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $21$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$0 = $14;
  i64toi32_i32$2 = $21$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $22 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$0 = $16;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $22;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h024ea0e983b1c439E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $3 = 0, $4 = 0, $14 = 0, $16 = 0, $19$hi = 0, $21$hi = 0, $22 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($1 + 1936 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = $1;
    break label$1;
   }
   $4 = $2 + 1 | 0;
   $2 = HEAPU16[($1 + 1940 | 0) >> 1] | 0;
  }
  __rust_dealloc($1 | 0);
  HEAP32[$0 >> 2] = $3;
  $16 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $14 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $21$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$0 = $14;
  i64toi32_i32$2 = $21$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $22 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$0 = $16;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $22;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h110d71d4f3abc285E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $3 = 0, $4 = 0, $14 = 0, $16 = 0, $19$hi = 0, $21$hi = 0, $22 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($1 + 264 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = $1;
    break label$1;
   }
   $4 = $2 + 1 | 0;
   $2 = HEAPU16[($1 + 268 | 0) >> 1] | 0;
  }
  __rust_dealloc($1 | 0);
  HEAP32[$0 >> 2] = $3;
  $16 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $14 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $21$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$0 = $14;
  i64toi32_i32$2 = $21$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $22 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$0 = $16;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $22;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17ha6c3187cdb16e542E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $3 = 0, $4 = 0, $14 = 0, $16 = 0, $19$hi = 0, $21$hi = 0, $22 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($1 + 440 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = $1;
    break label$1;
   }
   $4 = $2 + 1 | 0;
   $2 = HEAPU16[($1 + 444 | 0) >> 1] | 0;
  }
  __rust_dealloc($1 | 0);
  HEAP32[$0 >> 2] = $3;
  $16 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $14 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $21$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$0 = $14;
  i64toi32_i32$2 = $21$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $22 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$0 = $16;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $22;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17h0d8cc9e9ad6c8d6cE($0, $1, $2, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7 = 0, $8 = 0, $10$hi = 0, $11$hi = 0, $5 = 0, $9 = 0, $11 = 0, $6 = 0, $10 = 0, $31 = 0, $31$hi = 0, $37 = 0, $37$hi = 0, $39 = 0, $42 = 0, $45 = 0;
  label$1 : while (1) {
   $5 = HEAPU16[($1 + 1150 | 0) >> 1] | 0;
   $6 = $5 << 4 | 0;
   $7 = 0;
   $8 = -1;
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : while (1) {
       label$6 : {
        if (($6 | 0) != ($7 | 0)) {
         break label$6
        }
        $8 = $5;
        break label$4;
       }
       $9 = $1 + $7 | 0;
       $7 = $7 + 16 | 0;
       $8 = $8 + 1 | 0;
       label$7 : {
        i64toi32_i32$2 = $9;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $10 = i64toi32_i32$0;
        $10$hi = i64toi32_i32$1;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$1 = $10$hi;
        i64toi32_i32$2 = i64toi32_i32$0;
        i64toi32_i32$0 = $3$hi;
        i64toi32_i32$3 = $3;
        i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
        $31 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
        $31$hi = i64toi32_i32$0;
        i64toi32_i32$1 = $9 + 8 | 0;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$1 >> 2] | 0;
        i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
        $11 = i64toi32_i32$0;
        $11$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $4$hi;
        i64toi32_i32$2 = $11$hi;
        i64toi32_i32$1 = i64toi32_i32$0;
        i64toi32_i32$0 = $4$hi;
        i64toi32_i32$3 = $4;
        i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
        $37 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
        $37$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $31$hi;
        i64toi32_i32$2 = $31;
        i64toi32_i32$1 = $37$hi;
        i64toi32_i32$3 = $37;
        i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
        i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$3 = 0;
        $39 = (i64toi32_i32$0 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0;
        i64toi32_i32$0 = $10$hi;
        i64toi32_i32$0 = $3$hi;
        i64toi32_i32$0 = $10$hi;
        i64toi32_i32$3 = $10;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$2 = $3;
        $42 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$3 >>> 0 > i64toi32_i32$2 >>> 0 | 0) | 0;
        i64toi32_i32$3 = $11$hi;
        i64toi32_i32$3 = $4$hi;
        i64toi32_i32$3 = $11$hi;
        i64toi32_i32$2 = $11;
        i64toi32_i32$0 = $4$hi;
        i64toi32_i32$1 = $4;
        $45 = i64toi32_i32$3 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
        i64toi32_i32$2 = i64toi32_i32$3;
        i64toi32_i32$2 = i64toi32_i32$0;
        i64toi32_i32$2 = i64toi32_i32$3;
        i64toi32_i32$1 = $11;
        i64toi32_i32$3 = i64toi32_i32$0;
        i64toi32_i32$0 = $4;
        switch ((((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & (i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) | 0 ? $42 : $45) ? -1 : $39) & 255 | 0 | 0) {
        case 1:
         continue label$5;
        case 0:
         break label$7;
        default:
         break label$4;
        };
       }
       break label$5;
      };
      $7 = 0;
      break label$3;
     }
     if ($2) {
      break label$2
     }
     $7 = 1;
    }
    HEAP32[($0 + 4 | 0) >> 2] = $1;
    HEAP32[$0 >> 2] = $7;
    HEAP32[($0 + 12 | 0) >> 2] = $8;
    HEAP32[($0 + 8 | 0) >> 2] = $2;
    return;
   }
   $2 = $2 + -1 | 0;
   $1 = HEAP32[(($1 + ($8 << 2 | 0) | 0) + 1152 | 0) >> 2] | 0;
   continue label$1;
  };
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h0b236e04ced9e431E($0, $1, $2, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $6 = 0, $10 = 0, $7 = 0, $9 = 0, $12$hi = 0, $13$hi = 0, $5 = 0, $8 = 0, $13 = 0, $11 = 0, $12 = 0, $39 = 0, $39$hi = 0, $44 = 0, $44$hi = 0, $46 = 0, $49 = 0, $52 = 0;
  $5 = 0;
  label$1 : {
   label$2 : {
    if ($1) {
     break label$2
    }
    break label$1;
   }
   label$3 : while (1) {
    $6 = $1 + -16 | 0;
    $7 = $1 + 168 | 0;
    $8 = HEAPU16[($1 + 314 | 0) >> 1] | 0;
    $9 = $8 << 4 | 0;
    $10 = -1;
    label$4 : {
     label$5 : while (1) {
      label$6 : {
       if ($9) {
        break label$6
       }
       $10 = $8;
       break label$4;
      }
      $11 = $6 + 24 | 0;
      $9 = $9 + -16 | 0;
      $10 = $10 + 1 | 0;
      $7 = $7 + 12 | 0;
      label$7 : {
       $6 = $6 + 16 | 0;
       i64toi32_i32$2 = $6;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $12 = i64toi32_i32$0;
       $12$hi = i64toi32_i32$1;
       i64toi32_i32$1 = $3$hi;
       i64toi32_i32$1 = $12$hi;
       i64toi32_i32$2 = i64toi32_i32$0;
       i64toi32_i32$0 = $3$hi;
       i64toi32_i32$3 = $3;
       i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
       $39 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
       $39$hi = i64toi32_i32$0;
       i64toi32_i32$1 = $11;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$1 >> 2] | 0;
       i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
       $13 = i64toi32_i32$0;
       $13$hi = i64toi32_i32$2;
       i64toi32_i32$2 = $4$hi;
       i64toi32_i32$2 = $13$hi;
       i64toi32_i32$1 = i64toi32_i32$0;
       i64toi32_i32$0 = $4$hi;
       i64toi32_i32$3 = $4;
       i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
       $44 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
       $44$hi = i64toi32_i32$0;
       i64toi32_i32$0 = $39$hi;
       i64toi32_i32$2 = $39;
       i64toi32_i32$1 = $44$hi;
       i64toi32_i32$3 = $44;
       i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
       i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$3 = 0;
       $46 = (i64toi32_i32$0 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0;
       i64toi32_i32$0 = $12$hi;
       i64toi32_i32$0 = $3$hi;
       i64toi32_i32$0 = $12$hi;
       i64toi32_i32$3 = $12;
       i64toi32_i32$1 = $3$hi;
       i64toi32_i32$2 = $3;
       $49 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$3 >>> 0 > i64toi32_i32$2 >>> 0 | 0) | 0;
       i64toi32_i32$3 = $13$hi;
       i64toi32_i32$3 = $4$hi;
       i64toi32_i32$3 = $13$hi;
       i64toi32_i32$2 = $13;
       i64toi32_i32$0 = $4$hi;
       i64toi32_i32$1 = $4;
       $52 = i64toi32_i32$3 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
       i64toi32_i32$2 = i64toi32_i32$3;
       i64toi32_i32$2 = i64toi32_i32$0;
       i64toi32_i32$2 = i64toi32_i32$3;
       i64toi32_i32$1 = $13;
       i64toi32_i32$3 = i64toi32_i32$0;
       i64toi32_i32$0 = $4;
       switch ((((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & (i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) | 0 ? $49 : $52) ? -1 : $46) & 255 | 0 | 0) {
       case 1:
        continue label$5;
       case 0:
        break label$7;
       default:
        break label$4;
       };
      }
      break label$5;
     };
     $5 = $6;
     break label$1;
    }
    label$8 : {
     if (!$2) {
      break label$8
     }
     $2 = $2 + -1 | 0;
     $1 = HEAP32[(($1 + ($10 << 2 | 0) | 0) + 320 | 0) >> 2] | 0;
     continue label$3;
    }
    break label$3;
   };
   $7 = ($1 + Math_imul($10, 12) | 0) + 180 | 0;
  }
  HEAP32[($0 + 4 | 0) >> 2] = $7;
  HEAP32[$0 >> 2] = $5;
 }
 
 function _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h0b283d1e3495c620E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(320 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 314 | 0) >> 1] = 0;
  HEAP32[($0 + 176 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h309331bbea654a6cE() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(492 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 490 | 0) >> 1] = 0;
  HEAP32[($0 + 352 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h48c1bcab8934d167E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(448 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 446 | 0) >> 1] = 0;
  HEAP32[($0 + 440 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17ha4ba550bd3c34df9E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(272 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 270 | 0) >> 1] = 0;
  HEAP32[($0 + 264 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17hee7178471d850456E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(1944 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 1942 | 0) >> 1] = 0;
  HEAP32[($0 + 1936 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0, $4 = 0;
  $2 = 0;
  label$1 : {
   label$2 : {
    if (!(HEAPU8[($1 + 8 | 0) >> 0] | 0)) {
     break label$2
    }
    break label$1;
   }
   $3 = HEAP32[$1 >> 2] | 0;
   $4 = HEAP32[($1 + 4 | 0) >> 2] | 0;
   if ($3 >>> 0 > $4 >>> 0) {
    break label$1
   }
   label$3 : {
    if ($3 >>> 0 < $4 >>> 0) {
     break label$3
    }
    $2 = 1;
    HEAP8[($1 + 8 | 0) >> 0] = 1;
    break label$1;
   }
   $2 = 1;
   HEAP32[$1 >> 2] = $3 + 1 | 0;
  }
  HEAP32[($0 + 4 | 0) >> 2] = $3;
  HEAP32[$0 >> 2] = $2;
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h11c62237339315b5E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $6 = 0, $7 = 0, $5 = 0, $8$hi = 0, $9$hi = 0, $8 = 0, $9 = 0, $12 = 0, $4 = 0, $14 = 0, $10 = 0, $11 = 0, $13 = 0, $129 = 0;
  $3 = __stack_pointer - 368 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     if (!$2) {
      break label$3
     }
     $4 = $2 + -1 | 0;
     _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h11c62237339315b5E($3 + 16 | 0 | 0, HEAP32[($1 + 2032 | 0) >> 2] | 0 | 0, $4 | 0);
     if (HEAP32[($3 + 16 | 0) >> 2] | 0) {
      break label$2
     }
     _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
     wasm2js_trap();
    }
    $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h66cb030beb4be8a9E() | 0;
    $6 = 0;
    label$4 : {
     if (!(HEAPU16[($1 + 2030 | 0) >> 1] | 0)) {
      break label$4
     }
     $7 = $1 + 176 | 0;
     $6 = 0;
     $2 = $1;
     label$5 : while (1) {
      i64toi32_i32$2 = $2 + 8 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $8 = i64toi32_i32$0;
      $8$hi = i64toi32_i32$1;
      i64toi32_i32$2 = $2;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $9 = i64toi32_i32$1;
      $9$hi = i64toi32_i32$0;
      _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($3 + 16 | 0 | 0, $7 | 0);
      i64toi32_i32$0 = $8$hi;
      i64toi32_i32$0 = $9$hi;
      i64toi32_i32$1 = $8$hi;
      _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h9915112e1660425cE($5 | 0, $9 | 0, i64toi32_i32$0 | 0, $8 | 0, i64toi32_i32$1 | 0, $3 + 16 | 0 | 0);
      $2 = i64toi32_i32$2 + 16 | 0;
      $7 = $7 + 168 | 0;
      $6 = $6 + 1 | 0;
      if ($6 >>> 0 < (HEAPU16[($1 + 2030 | 0) >> 1] | 0) >>> 0) {
       continue label$5
      }
      break label$5;
     };
    }
    HEAP32[($0 + 8 | 0) >> 2] = $6;
    HEAP32[($0 + 4 | 0) >> 2] = 0;
    HEAP32[$0 >> 2] = $5;
    break label$1;
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h6f9ba583b2a5aa77E($3 + 8 | 0 | 0, $3 + 16 | 0 | 0);
   label$6 : {
    if (!(HEAPU16[($1 + 2030 | 0) >> 1] | 0)) {
     break label$6
    }
    $7 = $1 + 176 | 0;
    $10 = HEAP32[($3 + 12 | 0) >> 2] | 0;
    $11 = HEAP32[($3 + 8 | 0) >> 2] | 0;
    $6 = $1 + 2036 | 0;
    $12 = 0;
    $2 = $1;
    label$7 : while (1) {
     i64toi32_i32$2 = $2 + 8 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $8 = i64toi32_i32$1;
     $8$hi = i64toi32_i32$0;
     i64toi32_i32$2 = $2;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $9 = i64toi32_i32$0;
     $9$hi = i64toi32_i32$1;
     _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($3 + 184 | 0 | 0, $7 | 0);
     _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h11c62237339315b5E($3 + 356 | 0 | 0, HEAP32[$6 >> 2] | 0 | 0, $4 | 0);
     $13 = HEAP32[($3 + 364 | 0) >> 2] | 0;
     label$8 : {
      label$9 : {
       $5 = HEAP32[($3 + 356 | 0) >> 2] | 0;
       if ($5) {
        break label$9
       }
       $14 = 0;
       $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h66cb030beb4be8a9E() | 0;
       break label$8;
      }
      $14 = HEAP32[($3 + 360 | 0) >> 2] | 0;
     }
     i64toi32_i32$1 = $9$hi;
     i64toi32_i32$1 = $8$hi;
     i64toi32_i32$1 = $9$hi;
     i64toi32_i32$0 = $8$hi;
     _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17h365301a188a6cb2bE($11 | 0, $10 | 0, $9 | 0, i64toi32_i32$1 | 0, $8 | 0, i64toi32_i32$0 | 0, $3 + 184 | 0 | 0, $5 | 0, $14 | 0);
     HEAP32[($3 + 24 | 0) >> 2] = ($13 + (HEAP32[($3 + 24 | 0) >> 2] | 0) | 0) + 1 | 0;
     $2 = $2 + 16 | 0;
     $7 = $7 + 168 | 0;
     $6 = $6 + 4 | 0;
     $12 = $12 + 1 | 0;
     if ($12 >>> 0 < (HEAPU16[($1 + 2030 | 0) >> 1] | 0) >>> 0) {
      continue label$7
     }
     break label$7;
    };
   }
   i64toi32_i32$2 = $3;
   i64toi32_i32$0 = HEAP32[($3 + 16 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($3 + 20 | 0) >> 2] | 0;
   $129 = i64toi32_i32$0;
   i64toi32_i32$0 = $0;
   HEAP32[i64toi32_i32$0 >> 2] = $129;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = HEAP32[(($3 + 16 | 0) + 8 | 0) >> 2] | 0;
  }
  __stack_pointer = $3 + 368 | 0;
 }
 
 function _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h66cb030beb4be8a9E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(2032 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 2030 | 0) >> 1] = 0;
  HEAP32[($0 + 2024 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $2 = 0, $2$hi = 0, $3 = 0, $4 = 0, $4$hi = 0, $5 = 0, $5$hi = 0, $6 = 0, $6$hi = 0, $7 = 0, $7$hi = 0, $8 = 0, $8$hi = 0, $9 = 0, $9$hi = 0, $10 = 0, $10$hi = 0, $11 = 0, $12 = 0, $102 = 0, $107 = 0, $112 = 0, $117 = 0;
  i64toi32_i32$2 = $1 + 40 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $2 = i64toi32_i32$0;
  $2$hi = i64toi32_i32$1;
  $3 = HEAPU8[($1 + 158 | 0) >> 0] | 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = HEAP32[($1 + 32 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1 + 36 | 0) >> 2] | 0;
  $4 = i64toi32_i32$1;
  $4$hi = i64toi32_i32$0;
  _ZN60_$LT$alloc__string__String$u20$as$u20$core__clone__Clone$GT$5clone17h1765959d2aca5607E($0 + 96 | 0 | 0, HEAP32[($1 + 96 | 0) >> 2] | 0 | 0, HEAP32[($1 + 104 | 0) >> 2] | 0 | 0);
  i64toi32_i32$2 = $1 + 56 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $5 = i64toi32_i32$0;
  $5$hi = i64toi32_i32$1;
  i64toi32_i32$2 = $1 + 72 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $6 = i64toi32_i32$1;
  $6$hi = i64toi32_i32$0;
  i64toi32_i32$2 = $1 + 88 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $7 = i64toi32_i32$0;
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = HEAP32[($1 + 48 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1 + 52 | 0) >> 2] | 0;
  $8 = i64toi32_i32$1;
  $8$hi = i64toi32_i32$0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$0 = HEAP32[($1 + 64 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1 + 68 | 0) >> 2] | 0;
  $9 = i64toi32_i32$0;
  $9$hi = i64toi32_i32$1;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = HEAP32[($1 + 80 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1 + 84 | 0) >> 2] | 0;
  $10 = i64toi32_i32$1;
  $10$hi = i64toi32_i32$0;
  _ZN60_$LT$alloc__string__String$u20$as$u20$core__clone__Clone$GT$5clone17h1765959d2aca5607E($0 + 108 | 0 | 0, HEAP32[($1 + 108 | 0) >> 2] | 0 | 0, HEAP32[($1 + 116 | 0) >> 2] | 0 | 0);
  $11 = HEAPU8[($1 + 157 | 0) >> 0] | 0;
  _ZN60_$LT$alloc__string__String$u20$as$u20$core__clone__Clone$GT$5clone17h1765959d2aca5607E($0 + 120 | 0 | 0, HEAP32[($1 + 120 | 0) >> 2] | 0 | 0, HEAP32[($1 + 128 | 0) >> 2] | 0 | 0);
  $12 = HEAPU8[($1 + 159 | 0) >> 0] | 0;
  _ZN60_$LT$alloc__string__String$u20$as$u20$core__clone__Clone$GT$5clone17h1765959d2aca5607E($0 + 132 | 0 | 0, HEAP32[($1 + 132 | 0) >> 2] | 0 | 0, HEAP32[($1 + 140 | 0) >> 2] | 0 | 0);
  _ZN60_$LT$alloc__string__String$u20$as$u20$core__clone__Clone$GT$5clone17h1765959d2aca5607E($0 + 144 | 0 | 0, HEAP32[($1 + 144 | 0) >> 2] | 0 | 0, HEAP32[($1 + 152 | 0) >> 2] | 0 | 0);
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$1 = $0 + 40 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $2;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $4$hi;
  i64toi32_i32$1 = $0;
  HEAP32[(i64toi32_i32$1 + 32 | 0) >> 2] = $4;
  HEAP32[(i64toi32_i32$1 + 36 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $7$hi;
  i64toi32_i32$1 = i64toi32_i32$1 + 88 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $7;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $10$hi;
  i64toi32_i32$1 = $0;
  HEAP32[(i64toi32_i32$1 + 80 | 0) >> 2] = $10;
  HEAP32[(i64toi32_i32$1 + 84 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $6$hi;
  i64toi32_i32$1 = i64toi32_i32$1 + 72 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $6;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $9$hi;
  i64toi32_i32$1 = $0;
  HEAP32[(i64toi32_i32$1 + 64 | 0) >> 2] = $9;
  HEAP32[(i64toi32_i32$1 + 68 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $5$hi;
  i64toi32_i32$1 = i64toi32_i32$1 + 56 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $5;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $8$hi;
  i64toi32_i32$1 = $0;
  HEAP32[(i64toi32_i32$1 + 48 | 0) >> 2] = $8;
  HEAP32[(i64toi32_i32$1 + 52 | 0) >> 2] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 158 | 0) >> 0] = $3;
  HEAP8[(i64toi32_i32$1 + 159 | 0) >> 0] = $12;
  HEAP8[(i64toi32_i32$1 + 157 | 0) >> 0] = $11;
  i64toi32_i32$2 = $1;
  i64toi32_i32$0 = HEAP32[$1 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $102 = i64toi32_i32$0;
  i64toi32_i32$0 = $0;
  HEAP32[i64toi32_i32$0 >> 2] = $102;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $1 + 8 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $107 = i64toi32_i32$1;
  i64toi32_i32$1 = $0 + 8 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $107;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = $1 + 16 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $112 = i64toi32_i32$0;
  i64toi32_i32$0 = $0 + 16 | 0;
  HEAP32[i64toi32_i32$0 >> 2] = $112;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $1 + 24 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $117 = i64toi32_i32$1;
  i64toi32_i32$1 = $0 + 24 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $117;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  HEAP8[($0 + 160 | 0) >> 0] = HEAPU8[($1 + 160 | 0) >> 0] | 0;
  HEAP8[($0 + 156 | 0) >> 0] = HEAPU8[($1 + 156 | 0) >> 0] | 0;
 }
 
 function _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h9915112e1660425cE($0, $1, $1$hi, $2, $2$hi, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  var $4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  label$1 : {
   $4 = HEAPU16[($0 + 2030 | 0) >> 1] | 0;
   if ($4 >>> 0 < 11 >>> 0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  HEAP16[($0 + 2030 | 0) >> 1] = $4 + 1 | 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$1 = $0 + ($4 << 4 | 0) | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $2$hi;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $2;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  memcpy(($0 + Math_imul($4, 168) | 0) + 176 | 0 | 0, $3 | 0, 168 | 0) | 0;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h6f9ba583b2a5aa77E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $4 = HEAP32[$1 >> 2] | 0;
  $5 = _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h8e0e3bdf32143c50E() | 0;
  HEAP32[($5 + 2032 | 0) >> 2] = $4;
  _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17hc661206b58ff007eE($2 + 8 | 0 | 0, $5 | 0, $3 + 1 | 0 | 0);
  $3 = HEAP32[($2 + 8 | 0) >> 2] | 0;
  $4 = HEAP32[($2 + 12 | 0) >> 2] | 0;
  HEAP32[($1 + 4 | 0) >> 2] = $4;
  HEAP32[$1 >> 2] = $3;
  HEAP32[($0 + 4 | 0) >> 2] = $4;
  HEAP32[$0 >> 2] = $3;
  __stack_pointer = $2 + 16 | 0;
 }
 
 function _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17h365301a188a6cb2bE($0, $1, $2, $2$hi, $3, $3$hi, $4, $5, $6) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  $6 = $6 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  label$1 : {
   if (($1 + -1 | 0 | 0) != ($6 | 0)) {
    break label$1
   }
   $1 = HEAPU16[($0 + 2030 | 0) >> 1] | 0;
   if ($1 >>> 0 >= 11 >>> 0) {
    break label$1
   }
   $6 = $1 + 1 | 0;
   HEAP16[($0 + 2030 | 0) >> 1] = $6;
   i64toi32_i32$0 = $2$hi;
   i64toi32_i32$1 = $0 + ($1 << 4 | 0) | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $2;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$0 = $3$hi;
   HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $3;
   HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
   memcpy(($0 + Math_imul($1, 168) | 0) + 176 | 0 | 0, $4 | 0, 168 | 0) | 0;
   HEAP32[(($0 + ($6 << 2 | 0) | 0) + 2032 | 0) >> 2] = $5;
   HEAP16[($5 + 2028 | 0) >> 1] = $6;
   HEAP32[($5 + 2024 | 0) >> 2] = $0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h2c5fd08d1ad7ec38E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $3 = 0, $12 = 0, $5 = 0, $14 = 0, $6 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $7 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $13 = 0, $13$hi = 0, $17 = 0, $4 = 0, $15 = 0, $18 = 0, $19 = 0, $20 = 0, $52 = 0, $59 = 0, $66 = 0, $69 = 0, $85 = 0, $89 = 0, $93 = 0, $97 = 0, $16 = 0, $180 = 0, $187 = 0, $194 = 0, $197 = 0, $21 = 0, $230 = 0, $234 = 0, $238 = 0, $242 = 0, $275 = 0;
  $3 = __stack_pointer - 112 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (!$2) {
       break label$4
      }
      $4 = $2 + -1 | 0;
      _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h2c5fd08d1ad7ec38E($3 + 52 | 0 | 0, HEAP32[($1 + 448 | 0) >> 2] | 0 | 0, $4 | 0);
      $2 = HEAP32[($3 + 52 | 0) >> 2] | 0;
      if ($2) {
       break label$3
      }
      break label$1;
     }
     $5 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h48c1bcab8934d167E() | 0;
     $6 = 0;
     label$5 : {
      if (!(HEAPU16[($1 + 446 | 0) >> 1] | 0)) {
       break label$5
      }
      $7 = $5 + 352 | 0;
      $8 = $1 + 352 | 0;
      $6 = 0;
      $2 = $1;
      label$6 : while (1) {
       $9 = ($3 + 16 | 0) + 24 | 0;
       i64toi32_i32$2 = $2 + 24 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $52 = i64toi32_i32$0;
       i64toi32_i32$0 = $9;
       HEAP32[i64toi32_i32$0 >> 2] = $52;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $10 = ($3 + 16 | 0) + 16 | 0;
       i64toi32_i32$2 = $2 + 16 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $59 = i64toi32_i32$1;
       i64toi32_i32$1 = $10;
       HEAP32[i64toi32_i32$1 >> 2] = $59;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $11 = ($3 + 16 | 0) + 8 | 0;
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $66 = i64toi32_i32$0;
       i64toi32_i32$0 = $11;
       HEAP32[i64toi32_i32$0 >> 2] = $66;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$2 = $2;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $69 = i64toi32_i32$1;
       i64toi32_i32$1 = $3;
       HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = $69;
       HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
       $12 = HEAPU16[($5 + 446 | 0) >> 1] | 0;
       if ($12 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       i64toi32_i32$2 = $8;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $13 = i64toi32_i32$0;
       $13$hi = i64toi32_i32$1;
       HEAP16[($5 + 446 | 0) >> 1] = $12 + 1 | 0;
       $14 = $5 + ($12 << 5 | 0) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 16 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 20 | 0) >> 2] | 0;
       $85 = i64toi32_i32$1;
       i64toi32_i32$1 = $14;
       $43 = $85;
       HEAP8[i64toi32_i32$1 >> 0] = $43;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $43 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $43 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $43 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $11;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $89 = i64toi32_i32$0;
       i64toi32_i32$0 = $14 + 8 | 0;
       $44 = $89;
       HEAP8[i64toi32_i32$0 >> 0] = $44;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $44 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $44 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $44 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $10;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $93 = i64toi32_i32$1;
       i64toi32_i32$1 = $14 + 16 | 0;
       $45 = $93;
       HEAP8[i64toi32_i32$1 >> 0] = $45;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $45 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $45 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $45 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $9;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $97 = i64toi32_i32$0;
       i64toi32_i32$0 = $14 + 24 | 0;
       $46 = $97;
       HEAP8[i64toi32_i32$0 >> 0] = $46;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $46 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $46 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $46 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$1 = $13$hi;
       i64toi32_i32$0 = $7 + ($12 << 3 | 0) | 0;
       HEAP32[i64toi32_i32$0 >> 2] = $13;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $2 = $2 + 32 | 0;
       $8 = $8 + 8 | 0;
       $6 = $6 + 1 | 0;
       if ($6 >>> 0 < (HEAPU16[($1 + 446 | 0) >> 1] | 0) >>> 0) {
        continue label$6
       }
       break label$6;
      };
     }
     HEAP32[($0 + 8 | 0) >> 2] = $6;
     HEAP32[($0 + 4 | 0) >> 2] = 0;
     HEAP32[$0 >> 2] = $5;
     break label$2;
    }
    $15 = HEAP32[($3 + 56 | 0) >> 2] | 0;
    label$7 : {
     $12 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(496 | 0) | 0;
     if (!$12) {
      break label$7
     }
     HEAP32[($12 + 448 | 0) >> 2] = $2;
     HEAP16[($12 + 446 | 0) >> 1] = 0;
     HEAP32[($12 + 440 | 0) >> 2] = 0;
     HEAP8[($3 + 24 | 0) >> 0] = 0;
     i64toi32_i32$0 = $3;
     i64toi32_i32$1 = 0;
     HEAP32[(i64toi32_i32$0 + 16 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$0 + 20 | 0) >> 2] = i64toi32_i32$1;
     $7 = $12 + 448 | 0;
     _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE(i64toi32_i32$0 + 8 | 0 | 0, i64toi32_i32$0 + 16 | 0 | 0);
     label$8 : {
      if (!(HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] | 0)) {
       break label$8
      }
      $2 = HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] | 0;
      label$9 : while (1) {
       $14 = HEAP32[($7 + ($2 << 2 | 0) | 0) >> 2] | 0;
       HEAP16[($14 + 444 | 0) >> 1] = $2;
       HEAP32[($14 + 440 | 0) >> 2] = $12;
       _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 | 0, $3 + 16 | 0 | 0);
       $2 = HEAP32[($3 + 4 | 0) >> 2] | 0;
       if (HEAP32[$3 >> 2] | 0) {
        continue label$9
       }
       break label$9;
      };
     }
     HEAP32[($3 + 56 | 0) >> 2] = $15 + 1 | 0;
     HEAP32[($3 + 52 | 0) >> 2] = $12;
     $11 = HEAP32[($3 + 60 | 0) >> 2] | 0;
     label$10 : {
      if (!(HEAPU16[($1 + 446 | 0) >> 1] | 0)) {
       break label$10
      }
      $6 = $1 + 352 | 0;
      $16 = $12 + 352 | 0;
      $9 = $1 + 452 | 0;
      $17 = 0;
      $2 = $1;
      label$11 : while (1) {
       $18 = ($3 + 64 | 0) + 24 | 0;
       i64toi32_i32$2 = $2 + 24 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $180 = i64toi32_i32$1;
       i64toi32_i32$1 = $18;
       HEAP32[i64toi32_i32$1 >> 2] = $180;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $19 = ($3 + 64 | 0) + 16 | 0;
       i64toi32_i32$2 = $2 + 16 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $187 = i64toi32_i32$0;
       i64toi32_i32$0 = $19;
       HEAP32[i64toi32_i32$0 >> 2] = $187;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $20 = ($3 + 64 | 0) + 8 | 0;
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $194 = i64toi32_i32$1;
       i64toi32_i32$1 = $20;
       HEAP32[i64toi32_i32$1 >> 2] = $194;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       i64toi32_i32$2 = $2;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $197 = i64toi32_i32$0;
       i64toi32_i32$0 = $3;
       HEAP32[(i64toi32_i32$0 + 64 | 0) >> 2] = $197;
       HEAP32[(i64toi32_i32$0 + 68 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$2 = $6;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $13 = i64toi32_i32$1;
       $13$hi = i64toi32_i32$0;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h2c5fd08d1ad7ec38E($3 + 100 | 0 | 0, HEAP32[$9 >> 2] | 0 | 0, $4 | 0);
       $21 = HEAP32[($3 + 108 | 0) >> 2] | 0;
       label$12 : {
        label$13 : {
         $14 = HEAP32[($3 + 100 | 0) >> 2] | 0;
         if ($14) {
          break label$13
         }
         $5 = 0;
         $14 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h48c1bcab8934d167E() | 0;
         break label$12;
        }
        $5 = HEAP32[($3 + 104 | 0) >> 2] | 0;
       }
       if (($15 | 0) != ($5 | 0)) {
        break label$1
       }
       $5 = HEAPU16[($12 + 446 | 0) >> 1] | 0;
       if ($5 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       $10 = $5 + 1 | 0;
       HEAP16[($12 + 446 | 0) >> 1] = $10;
       $8 = $12 + ($5 << 5 | 0) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 68 | 0) >> 2] | 0;
       $230 = i64toi32_i32$0;
       i64toi32_i32$0 = $8;
       $47 = $230;
       HEAP8[i64toi32_i32$0 >> 0] = $47;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $47 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $47 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $47 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $20;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $234 = i64toi32_i32$1;
       i64toi32_i32$1 = $8 + 8 | 0;
       $48 = $234;
       HEAP8[i64toi32_i32$1 >> 0] = $48;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $48 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $48 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $48 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $19;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $238 = i64toi32_i32$0;
       i64toi32_i32$0 = $8 + 16 | 0;
       $49 = $238;
       HEAP8[i64toi32_i32$0 >> 0] = $49;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $49 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $49 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $49 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $18;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $242 = i64toi32_i32$1;
       i64toi32_i32$1 = $8 + 24 | 0;
       $50 = $242;
       HEAP8[i64toi32_i32$1 >> 0] = $50;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $50 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $50 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $50 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$0 = $13$hi;
       i64toi32_i32$1 = $16 + ($5 << 3 | 0) | 0;
       HEAP32[i64toi32_i32$1 >> 2] = $13;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[($7 + ($10 << 2 | 0) | 0) >> 2] = $14;
       HEAP16[($14 + 444 | 0) >> 1] = $10;
       HEAP32[($14 + 440 | 0) >> 2] = $12;
       $2 = $2 + 32 | 0;
       $6 = $6 + 8 | 0;
       $9 = $9 + 4 | 0;
       $11 = ($11 + $21 | 0) + 1 | 0;
       $17 = $17 + 1 | 0;
       if ($17 >>> 0 < (HEAPU16[($1 + 446 | 0) >> 1] | 0) >>> 0) {
        continue label$11
       }
       break label$11;
      };
     }
     i64toi32_i32$2 = $3;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 52 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 56 | 0) >> 2] | 0;
     $275 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     HEAP32[i64toi32_i32$0 >> 2] = $275;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $11;
     break label$2;
    }
    _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
    wasm2js_trap();
   }
   __stack_pointer = $3 + 112 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h3ebde341cb3111bdE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $5 = 0, $6 = 0, $9 = 0, i64toi32_i32$2 = 0, $7 = 0, $8 = 0, $12 = 0, $10 = 0, $10$hi = 0, $11 = 0, $15 = 0, $17 = 0, $4 = 0, $11$hi = 0, $13 = 0, $14 = 0, $79 = 0, $16 = 0, $18 = 0, $204 = 0, $232 = 0;
  $3 = __stack_pointer - 80 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (!$2) {
       break label$4
      }
      $4 = $2 + -1 | 0;
      _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h3ebde341cb3111bdE($3 + 28 | 0 | 0, HEAP32[($1 + 320 | 0) >> 2] | 0 | 0, $4 | 0);
      $5 = HEAP32[($3 + 28 | 0) >> 2] | 0;
      if ($5) {
       break label$3
      }
      break label$1;
     }
     $6 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h0b283d1e3495c620E() | 0;
     $7 = 0;
     label$5 : {
      if (!(HEAPU16[($1 + 314 | 0) >> 1] | 0)) {
       break label$5
      }
      $8 = $6 + 180 | 0;
      $9 = $1 + 180 | 0;
      $7 = 0;
      $2 = $1;
      label$6 : while (1) {
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $10 = i64toi32_i32$0;
       $10$hi = i64toi32_i32$1;
       i64toi32_i32$2 = $2;
       i64toi32_i32$1 = HEAP32[$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[($2 + 4 | 0) >> 2] | 0;
       $11 = i64toi32_i32$1;
       $11$hi = i64toi32_i32$0;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h2acdfbd592e21e10E($3 + 64 | 0 | 0, $9 | 0);
       $5 = HEAPU16[($6 + 314 | 0) >> 1] | 0;
       if ($5 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       HEAP16[($6 + 314 | 0) >> 1] = $5 + 1 | 0;
       $12 = $6 + ($5 << 4 | 0) | 0;
       i64toi32_i32$1 = $12;
       HEAP32[i64toi32_i32$1 >> 2] = $11;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       i64toi32_i32$0 = $10$hi;
       HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $10;
       HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
       $5 = $8 + Math_imul($5, 12) | 0;
       HEAP32[($5 + 8 | 0) >> 2] = HEAP32[(($3 + 64 | 0) + 8 | 0) >> 2] | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$0 = HEAP32[($3 + 64 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($3 + 68 | 0) >> 2] | 0;
       $79 = i64toi32_i32$0;
       i64toi32_i32$0 = $5;
       HEAP32[i64toi32_i32$0 >> 2] = $79;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $2 = $2 + 16 | 0;
       $9 = $9 + 12 | 0;
       $7 = $7 + 1 | 0;
       if ($7 >>> 0 < (HEAPU16[($1 + 314 | 0) >> 1] | 0) >>> 0) {
        continue label$6
       }
       break label$6;
      };
     }
     HEAP32[($0 + 8 | 0) >> 2] = $7;
     HEAP32[($0 + 4 | 0) >> 2] = 0;
     HEAP32[$0 >> 2] = $6;
     break label$2;
    }
    $13 = HEAP32[($3 + 32 | 0) >> 2] | 0;
    label$7 : {
     $2 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(368 | 0) | 0;
     if (!$2) {
      break label$7
     }
     HEAP32[($2 + 320 | 0) >> 2] = $5;
     HEAP16[($2 + 314 | 0) >> 1] = 0;
     HEAP32[($2 + 176 | 0) >> 2] = 0;
     HEAP8[($3 + 72 | 0) >> 0] = 0;
     i64toi32_i32$0 = $3;
     i64toi32_i32$1 = 0;
     HEAP32[($3 + 64 | 0) >> 2] = 0;
     HEAP32[($3 + 68 | 0) >> 2] = i64toi32_i32$1;
     $14 = $2 + 320 | 0;
     _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 16 | 0 | 0, $3 + 64 | 0 | 0);
     label$8 : {
      if (!(HEAP32[($3 + 16 | 0) >> 2] | 0)) {
       break label$8
      }
      $5 = HEAP32[($3 + 20 | 0) >> 2] | 0;
      label$9 : while (1) {
       $6 = HEAP32[($14 + ($5 << 2 | 0) | 0) >> 2] | 0;
       HEAP16[($6 + 312 | 0) >> 1] = $5;
       HEAP32[($6 + 176 | 0) >> 2] = $2;
       _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 64 | 0 | 0);
       $5 = HEAP32[($3 + 12 | 0) >> 2] | 0;
       if (HEAP32[($3 + 8 | 0) >> 2] | 0) {
        continue label$9
       }
       break label$9;
      };
     }
     HEAP32[($3 + 32 | 0) >> 2] = $13 + 1 | 0;
     HEAP32[($3 + 28 | 0) >> 2] = $2;
     $15 = HEAP32[($3 + 36 | 0) >> 2] | 0;
     label$10 : {
      if (!(HEAPU16[($1 + 314 | 0) >> 1] | 0)) {
       break label$10
      }
      $7 = $1 + 180 | 0;
      $16 = $2 + 180 | 0;
      $12 = $1 + 324 | 0;
      $17 = 0;
      $6 = $1;
      label$11 : while (1) {
       i64toi32_i32$2 = $6 + 8 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $10 = i64toi32_i32$1;
       $10$hi = i64toi32_i32$0;
       i64toi32_i32$2 = $6;
       i64toi32_i32$0 = HEAP32[$6 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($6 + 4 | 0) >> 2] | 0;
       $11 = i64toi32_i32$0;
       $11$hi = i64toi32_i32$1;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h2acdfbd592e21e10E($3 + 40 | 0 | 0, $7 | 0);
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h3ebde341cb3111bdE($3 + 52 | 0 | 0, HEAP32[$12 >> 2] | 0 | 0, $4 | 0);
       $18 = HEAP32[($3 + 60 | 0) >> 2] | 0;
       label$12 : {
        label$13 : {
         $5 = HEAP32[($3 + 52 | 0) >> 2] | 0;
         if ($5) {
          break label$13
         }
         $9 = 0;
         $5 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h0b283d1e3495c620E() | 0;
         break label$12;
        }
        $9 = HEAP32[($3 + 56 | 0) >> 2] | 0;
       }
       if (($13 | 0) != ($9 | 0)) {
        break label$1
       }
       $9 = HEAPU16[($2 + 314 | 0) >> 1] | 0;
       if ($9 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       $8 = $9 + 1 | 0;
       HEAP16[($2 + 314 | 0) >> 1] = $8;
       i64toi32_i32$1 = $11$hi;
       i64toi32_i32$0 = $2 + ($9 << 4 | 0) | 0;
       HEAP32[i64toi32_i32$0 >> 2] = $11;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$1 = $10$hi;
       HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $10;
       HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$1;
       $9 = $16 + Math_imul($9, 12) | 0;
       HEAP32[($9 + 8 | 0) >> 2] = HEAP32[(($3 + 40 | 0) + 8 | 0) >> 2] | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$1 = HEAP32[($3 + 40 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[($3 + 44 | 0) >> 2] | 0;
       $204 = i64toi32_i32$1;
       i64toi32_i32$1 = $9;
       HEAP32[i64toi32_i32$1 >> 2] = $204;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[($14 + ($8 << 2 | 0) | 0) >> 2] = $5;
       HEAP16[($5 + 312 | 0) >> 1] = $8;
       HEAP32[($5 + 176 | 0) >> 2] = $2;
       $6 = $6 + 16 | 0;
       $7 = $7 + 12 | 0;
       $12 = $12 + 4 | 0;
       $15 = ($15 + $18 | 0) + 1 | 0;
       $17 = $17 + 1 | 0;
       if ($17 >>> 0 < (HEAPU16[($1 + 314 | 0) >> 1] | 0) >>> 0) {
        continue label$11
       }
       break label$11;
      };
     }
     i64toi32_i32$2 = $3;
     i64toi32_i32$0 = HEAP32[($3 + 28 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($3 + 32 | 0) >> 2] | 0;
     $232 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     HEAP32[i64toi32_i32$0 >> 2] = $232;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $15;
     break label$2;
    }
    _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
    wasm2js_trap();
   }
   __stack_pointer = $3 + 80 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h2acdfbd592e21e10E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   if (HEAP32[($1 + 8 | 0) >> 2] | 0) {
    break label$1
   }
   HEAP32[($0 + 8 | 0) >> 2] = 0;
   HEAP32[$0 >> 2] = 0;
   return;
  }
  label$2 : {
   $2 = HEAP32[$1 >> 2] | 0;
   if (!$2) {
    break label$2
   }
   _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h2c5fd08d1ad7ec38E($0 | 0, $2 | 0, HEAP32[($1 + 4 | 0) >> 2] | 0 | 0);
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17haaf4fd58bec4774fE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $6 = 0, $7 = 0, $5 = 0, $8$hi = 0, $9$hi = 0, $8 = 0, $9 = 0, $12 = 0, $4 = 0, $14 = 0, $10 = 0, $11 = 0, $13 = 0, $128 = 0;
  $3 = __stack_pointer - 48 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     if (!$2) {
      break label$3
     }
     $4 = $2 + -1 | 0;
     _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17haaf4fd58bec4774fE($3 + 12 | 0 | 0, HEAP32[($1 + 320 | 0) >> 2] | 0 | 0, $4 | 0);
     if (HEAP32[($3 + 12 | 0) >> 2] | 0) {
      break label$2
     }
     _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
     wasm2js_trap();
    }
    $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h80892c38c9fece01E() | 0;
    $6 = 0;
    label$4 : {
     if (!(HEAPU16[($1 + 314 | 0) >> 1] | 0)) {
      break label$4
     }
     $7 = $1 + 180 | 0;
     $6 = 0;
     $2 = $1;
     label$5 : while (1) {
      i64toi32_i32$2 = $2 + 8 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $8 = i64toi32_i32$0;
      $8$hi = i64toi32_i32$1;
      i64toi32_i32$2 = $2;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $9 = i64toi32_i32$1;
      $9$hi = i64toi32_i32$0;
      _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbcf2255af67c51f4E($3 + 12 | 0 | 0, $7 | 0);
      i64toi32_i32$0 = $8$hi;
      i64toi32_i32$0 = $9$hi;
      i64toi32_i32$1 = $8$hi;
      _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17hfafd81ceb28202d0E($5 | 0, $9 | 0, i64toi32_i32$0 | 0, $8 | 0, i64toi32_i32$1 | 0, $3 + 12 | 0 | 0);
      $2 = i64toi32_i32$2 + 16 | 0;
      $7 = $7 + 12 | 0;
      $6 = $6 + 1 | 0;
      if ($6 >>> 0 < (HEAPU16[($1 + 314 | 0) >> 1] | 0) >>> 0) {
       continue label$5
      }
      break label$5;
     };
    }
    HEAP32[($0 + 8 | 0) >> 2] = $6;
    HEAP32[($0 + 4 | 0) >> 2] = 0;
    HEAP32[$0 >> 2] = $5;
    break label$1;
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h0176fd4ef1129792E($3 | 0, $3 + 12 | 0 | 0);
   label$6 : {
    if (!(HEAPU16[($1 + 314 | 0) >> 1] | 0)) {
     break label$6
    }
    $7 = $1 + 180 | 0;
    $10 = HEAP32[($3 + 4 | 0) >> 2] | 0;
    $11 = HEAP32[$3 >> 2] | 0;
    $6 = $1 + 324 | 0;
    $12 = 0;
    $2 = $1;
    label$7 : while (1) {
     i64toi32_i32$2 = $2 + 8 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $8 = i64toi32_i32$1;
     $8$hi = i64toi32_i32$0;
     i64toi32_i32$2 = $2;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $9 = i64toi32_i32$0;
     $9$hi = i64toi32_i32$1;
     _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbcf2255af67c51f4E($3 + 24 | 0 | 0, $7 | 0);
     _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17haaf4fd58bec4774fE($3 + 36 | 0 | 0, HEAP32[$6 >> 2] | 0 | 0, $4 | 0);
     $13 = HEAP32[($3 + 44 | 0) >> 2] | 0;
     label$8 : {
      label$9 : {
       $5 = HEAP32[($3 + 36 | 0) >> 2] | 0;
       if ($5) {
        break label$9
       }
       $14 = 0;
       $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h80892c38c9fece01E() | 0;
       break label$8;
      }
      $14 = HEAP32[($3 + 40 | 0) >> 2] | 0;
     }
     i64toi32_i32$1 = $9$hi;
     i64toi32_i32$1 = $8$hi;
     i64toi32_i32$1 = $9$hi;
     i64toi32_i32$0 = $8$hi;
     _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17ha9e95b989c567bd6E($11 | 0, $10 | 0, $9 | 0, i64toi32_i32$1 | 0, $8 | 0, i64toi32_i32$0 | 0, $3 + 24 | 0 | 0, $5 | 0, $14 | 0);
     HEAP32[($3 + 20 | 0) >> 2] = ($13 + (HEAP32[($3 + 20 | 0) >> 2] | 0) | 0) + 1 | 0;
     $2 = $2 + 16 | 0;
     $7 = $7 + 12 | 0;
     $6 = $6 + 4 | 0;
     $12 = $12 + 1 | 0;
     if ($12 >>> 0 < (HEAPU16[($1 + 314 | 0) >> 1] | 0) >>> 0) {
      continue label$7
     }
     break label$7;
    };
   }
   i64toi32_i32$2 = $3;
   i64toi32_i32$0 = HEAP32[($3 + 12 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($3 + 16 | 0) >> 2] | 0;
   $128 = i64toi32_i32$0;
   i64toi32_i32$0 = $0;
   HEAP32[i64toi32_i32$0 >> 2] = $128;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = HEAP32[(($3 + 12 | 0) + 8 | 0) >> 2] | 0;
  }
  __stack_pointer = $3 + 48 | 0;
 }
 
 function _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h80892c38c9fece01E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(320 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 314 | 0) >> 1] = 0;
  HEAP32[($0 + 176 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbcf2255af67c51f4E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   if (HEAP32[($1 + 8 | 0) >> 2] | 0) {
    break label$1
   }
   HEAP32[($0 + 8 | 0) >> 2] = 0;
   HEAP32[$0 >> 2] = 0;
   return;
  }
  label$2 : {
   $2 = HEAP32[$1 >> 2] | 0;
   if (!$2) {
    break label$2
   }
   _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hbeccb9462288abdcE($0 | 0, $2 | 0, HEAP32[($1 + 4 | 0) >> 2] | 0 | 0);
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17hfafd81ceb28202d0E($0, $1, $1$hi, $2, $2$hi, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $4 = 0, $33 = 0;
  label$1 : {
   $4 = HEAPU16[($0 + 314 | 0) >> 1] | 0;
   if ($4 >>> 0 < 11 >>> 0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  HEAP16[($0 + 314 | 0) >> 1] = $4 + 1 | 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$1 = $0 + ($4 << 4 | 0) | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $2$hi;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $2;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $0 = $0 + Math_imul($4, 12) | 0;
  HEAP32[($0 + 188 | 0) >> 2] = HEAP32[($3 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[$3 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3 + 4 | 0) >> 2] | 0;
  $33 = i64toi32_i32$0;
  i64toi32_i32$0 = $0 + 180 | 0;
  HEAP32[i64toi32_i32$0 >> 2] = $33;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h0176fd4ef1129792E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $4 = HEAP32[$1 >> 2] | 0;
  $5 = _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h022c95a564ee6564E() | 0;
  HEAP32[($5 + 320 | 0) >> 2] = $4;
  _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17he51a001dfa7ff86fE($2 + 8 | 0 | 0, $5 | 0, $3 + 1 | 0 | 0);
  $3 = HEAP32[($2 + 8 | 0) >> 2] | 0;
  $4 = HEAP32[($2 + 12 | 0) >> 2] | 0;
  HEAP32[($1 + 4 | 0) >> 2] = $4;
  HEAP32[$1 >> 2] = $3;
  HEAP32[($0 + 4 | 0) >> 2] = $4;
  HEAP32[$0 >> 2] = $3;
  __stack_pointer = $2 + 16 | 0;
 }
 
 function _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17ha9e95b989c567bd6E($0, $1, $2, $2$hi, $3, $3$hi, $4, $5, $6) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  $6 = $6 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $40 = 0;
  label$1 : {
   if (($1 + -1 | 0 | 0) != ($6 | 0)) {
    break label$1
   }
   $1 = HEAPU16[($0 + 314 | 0) >> 1] | 0;
   if ($1 >>> 0 >= 11 >>> 0) {
    break label$1
   }
   $6 = $1 + 1 | 0;
   HEAP16[($0 + 314 | 0) >> 1] = $6;
   i64toi32_i32$0 = $2$hi;
   i64toi32_i32$1 = $0 + ($1 << 4 | 0) | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $2;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$0 = $3$hi;
   HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $3;
   HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
   $1 = $0 + Math_imul($1, 12) | 0;
   HEAP32[($1 + 188 | 0) >> 2] = HEAP32[($4 + 8 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[$4 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
   $40 = i64toi32_i32$0;
   i64toi32_i32$0 = $1 + 180 | 0;
   HEAP32[i64toi32_i32$0 >> 2] = $40;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[(($0 + ($6 << 2 | 0) | 0) + 320 | 0) >> 2] = $5;
   HEAP16[($5 + 312 | 0) >> 1] = $6;
   HEAP32[($5 + 176 | 0) >> 2] = $0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hbc0fe3c1560799dcE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $3 = 0, $12 = 0, $5 = 0, $13 = 0, $6 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $7 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $16 = 0, $4 = 0, $14 = 0, $17 = 0, $18 = 0, $19 = 0, $51 = 0, $58 = 0, $65 = 0, $68 = 0, $85 = 0, $89 = 0, $93 = 0, $97 = 0, $104 = 0, $15 = 0, $189 = 0, $196 = 0, $203 = 0, $206 = 0, $20 = 0, $240 = 0, $244 = 0, $248 = 0, $252 = 0, $259 = 0, $293 = 0;
  $3 = __stack_pointer - 128 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (!$2) {
       break label$4
      }
      $4 = $2 + -1 | 0;
      _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hbc0fe3c1560799dcE($3 + 60 | 0 | 0, HEAP32[($1 + 492 | 0) >> 2] | 0 | 0, $4 | 0);
      $2 = HEAP32[($3 + 60 | 0) >> 2] | 0;
      if ($2) {
       break label$3
      }
      break label$1;
     }
     $5 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h309331bbea654a6cE() | 0;
     $6 = 0;
     label$5 : {
      if (!(HEAPU16[($1 + 490 | 0) >> 1] | 0)) {
       break label$5
      }
      $7 = $5 + 356 | 0;
      $8 = $1 + 356 | 0;
      $6 = 0;
      $2 = $1;
      label$6 : while (1) {
       $9 = ($3 + 24 | 0) + 24 | 0;
       i64toi32_i32$2 = $2 + 24 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $51 = i64toi32_i32$0;
       i64toi32_i32$0 = $9;
       HEAP32[i64toi32_i32$0 >> 2] = $51;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $10 = ($3 + 24 | 0) + 16 | 0;
       i64toi32_i32$2 = $2 + 16 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $58 = i64toi32_i32$1;
       i64toi32_i32$1 = $10;
       HEAP32[i64toi32_i32$1 >> 2] = $58;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $11 = ($3 + 24 | 0) + 8 | 0;
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $65 = i64toi32_i32$0;
       i64toi32_i32$0 = $11;
       HEAP32[i64toi32_i32$0 >> 2] = $65;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$2 = $2;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $68 = i64toi32_i32$1;
       i64toi32_i32$1 = $3;
       HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] = $68;
       HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = i64toi32_i32$0;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h9d0ec13580cf6c15E(i64toi32_i32$1 + 60 | 0 | 0, $8 | 0);
       $12 = HEAPU16[($5 + 490 | 0) >> 1] | 0;
       if ($12 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       HEAP16[($5 + 490 | 0) >> 1] = $12 + 1 | 0;
       $13 = $5 + ($12 << 5 | 0) | 0;
       i64toi32_i32$2 = i64toi32_i32$1;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 24 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 28 | 0) >> 2] | 0;
       $85 = i64toi32_i32$0;
       i64toi32_i32$0 = $13;
       $43 = $85;
       HEAP8[i64toi32_i32$0 >> 0] = $43;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $43 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $43 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $43 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $9;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $89 = i64toi32_i32$1;
       i64toi32_i32$1 = $13 + 24 | 0;
       $44 = $89;
       HEAP8[i64toi32_i32$1 >> 0] = $44;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $44 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $44 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $44 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $10;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $93 = i64toi32_i32$0;
       i64toi32_i32$0 = $13 + 16 | 0;
       $45 = $93;
       HEAP8[i64toi32_i32$0 >> 0] = $45;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $45 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $45 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $45 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $11;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $97 = i64toi32_i32$1;
       i64toi32_i32$1 = $13 + 8 | 0;
       $46 = $97;
       HEAP8[i64toi32_i32$1 >> 0] = $46;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $46 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $46 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $46 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       $12 = $7 + Math_imul($12, 12) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 60 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
       $104 = i64toi32_i32$0;
       i64toi32_i32$0 = $12;
       HEAP32[i64toi32_i32$0 >> 2] = $104;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = HEAP32[((i64toi32_i32$2 + 60 | 0) + 8 | 0) >> 2] | 0;
       $2 = $2 + 32 | 0;
       $8 = $8 + 12 | 0;
       $6 = $6 + 1 | 0;
       if ($6 >>> 0 < (HEAPU16[($1 + 490 | 0) >> 1] | 0) >>> 0) {
        continue label$6
       }
       break label$6;
      };
     }
     HEAP32[($0 + 8 | 0) >> 2] = $6;
     HEAP32[($0 + 4 | 0) >> 2] = 0;
     HEAP32[$0 >> 2] = $5;
     break label$2;
    }
    $14 = HEAP32[($3 + 64 | 0) >> 2] | 0;
    label$7 : {
     $12 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(540 | 0) | 0;
     if (!$12) {
      break label$7
     }
     HEAP32[($12 + 492 | 0) >> 2] = $2;
     HEAP16[($12 + 490 | 0) >> 1] = 0;
     HEAP32[($12 + 352 | 0) >> 2] = 0;
     HEAP8[($3 + 32 | 0) >> 0] = 0;
     i64toi32_i32$0 = $3;
     i64toi32_i32$1 = 0;
     HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] = i64toi32_i32$1;
     $7 = $12 + 492 | 0;
     _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE(i64toi32_i32$0 + 16 | 0 | 0, i64toi32_i32$0 + 24 | 0 | 0);
     label$8 : {
      if (!(HEAP32[(i64toi32_i32$0 + 16 | 0) >> 2] | 0)) {
       break label$8
      }
      $2 = HEAP32[(i64toi32_i32$0 + 20 | 0) >> 2] | 0;
      label$9 : while (1) {
       $13 = HEAP32[($7 + ($2 << 2 | 0) | 0) >> 2] | 0;
       HEAP16[($13 + 488 | 0) >> 1] = $2;
       HEAP32[($13 + 352 | 0) >> 2] = $12;
       _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 24 | 0 | 0);
       $2 = HEAP32[($3 + 12 | 0) >> 2] | 0;
       if (HEAP32[($3 + 8 | 0) >> 2] | 0) {
        continue label$9
       }
       break label$9;
      };
     }
     HEAP32[($3 + 64 | 0) >> 2] = $14 + 1 | 0;
     HEAP32[($3 + 60 | 0) >> 2] = $12;
     $11 = HEAP32[($3 + 68 | 0) >> 2] | 0;
     label$10 : {
      if (!(HEAPU16[($1 + 490 | 0) >> 1] | 0)) {
       break label$10
      }
      $6 = $1 + 356 | 0;
      $15 = $12 + 356 | 0;
      $9 = $1 + 496 | 0;
      $16 = 0;
      $2 = $1;
      label$11 : while (1) {
       $17 = ($3 + 72 | 0) + 24 | 0;
       i64toi32_i32$2 = $2 + 24 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $189 = i64toi32_i32$1;
       i64toi32_i32$1 = $17;
       HEAP32[i64toi32_i32$1 >> 2] = $189;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $18 = ($3 + 72 | 0) + 16 | 0;
       i64toi32_i32$2 = $2 + 16 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $196 = i64toi32_i32$0;
       i64toi32_i32$0 = $18;
       HEAP32[i64toi32_i32$0 >> 2] = $196;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $19 = ($3 + 72 | 0) + 8 | 0;
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $203 = i64toi32_i32$1;
       i64toi32_i32$1 = $19;
       HEAP32[i64toi32_i32$1 >> 2] = $203;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       i64toi32_i32$2 = $2;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $206 = i64toi32_i32$0;
       i64toi32_i32$0 = $3;
       HEAP32[(i64toi32_i32$0 + 72 | 0) >> 2] = $206;
       HEAP32[(i64toi32_i32$0 + 76 | 0) >> 2] = i64toi32_i32$1;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h9d0ec13580cf6c15E(i64toi32_i32$0 + 104 | 0 | 0, $6 | 0);
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hbc0fe3c1560799dcE(i64toi32_i32$0 + 116 | 0 | 0, HEAP32[$9 >> 2] | 0 | 0, $4 | 0);
       $20 = HEAP32[(i64toi32_i32$0 + 124 | 0) >> 2] | 0;
       label$12 : {
        label$13 : {
         $13 = HEAP32[(i64toi32_i32$0 + 116 | 0) >> 2] | 0;
         if ($13) {
          break label$13
         }
         $5 = 0;
         $13 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h309331bbea654a6cE() | 0;
         break label$12;
        }
        $5 = HEAP32[($3 + 120 | 0) >> 2] | 0;
       }
       if (($14 | 0) != ($5 | 0)) {
        break label$1
       }
       $5 = HEAPU16[($12 + 490 | 0) >> 1] | 0;
       if ($5 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       $10 = $5 + 1 | 0;
       HEAP16[($12 + 490 | 0) >> 1] = $10;
       $8 = $12 + ($5 << 5 | 0) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 72 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 76 | 0) >> 2] | 0;
       $240 = i64toi32_i32$1;
       i64toi32_i32$1 = $8;
       $47 = $240;
       HEAP8[i64toi32_i32$1 >> 0] = $47;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $47 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $47 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $47 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $17;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $244 = i64toi32_i32$0;
       i64toi32_i32$0 = $8 + 24 | 0;
       $48 = $244;
       HEAP8[i64toi32_i32$0 >> 0] = $48;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $48 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $48 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $48 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $18;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $248 = i64toi32_i32$1;
       i64toi32_i32$1 = $8 + 16 | 0;
       $49 = $248;
       HEAP8[i64toi32_i32$1 >> 0] = $49;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $49 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $49 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $49 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $19;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $252 = i64toi32_i32$0;
       i64toi32_i32$0 = $8 + 8 | 0;
       $50 = $252;
       HEAP8[i64toi32_i32$0 >> 0] = $50;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $50 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $50 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $50 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       $5 = $15 + Math_imul($5, 12) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 104 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 108 | 0) >> 2] | 0;
       $259 = i64toi32_i32$1;
       i64toi32_i32$1 = $5;
       HEAP32[i64toi32_i32$1 >> 2] = $259;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = HEAP32[((i64toi32_i32$2 + 104 | 0) + 8 | 0) >> 2] | 0;
       HEAP32[($7 + ($10 << 2 | 0) | 0) >> 2] = $13;
       HEAP16[($13 + 488 | 0) >> 1] = $10;
       HEAP32[($13 + 352 | 0) >> 2] = $12;
       $2 = $2 + 32 | 0;
       $6 = $6 + 12 | 0;
       $9 = $9 + 4 | 0;
       $11 = ($11 + $20 | 0) + 1 | 0;
       $16 = $16 + 1 | 0;
       if ($16 >>> 0 < (HEAPU16[($1 + 490 | 0) >> 1] | 0) >>> 0) {
        continue label$11
       }
       break label$11;
      };
     }
     i64toi32_i32$2 = $3;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 60 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
     $293 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     HEAP32[i64toi32_i32$0 >> 2] = $293;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $11;
     break label$2;
    }
    _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
    wasm2js_trap();
   }
   __stack_pointer = $3 + 128 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h9d0ec13580cf6c15E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   if (HEAP32[($1 + 8 | 0) >> 2] | 0) {
    break label$1
   }
   HEAP32[($0 + 8 | 0) >> 2] = 0;
   HEAP32[$0 >> 2] = 0;
   return;
  }
  label$2 : {
   $2 = HEAP32[$1 >> 2] | 0;
   if (!$2) {
    break label$2
   }
   _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hfb2399eb50b36e36E($0 | 0, $2 | 0, HEAP32[($1 + 4 | 0) >> 2] | 0 | 0);
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hfb2399eb50b36e36E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $3 = 0, $5 = 0, i64toi32_i32$2 = 0, $6 = 0, $9 = 0, $7 = 0, $8 = 0, $10 = 0, $10$hi = 0, $11 = 0, $11$hi = 0, $12 = 0, $15 = 0, $17 = 0, $19 = 0, $4 = 0, $12$hi = 0, $13 = 0, $14 = 0, $16 = 0, $18 = 0, $214 = 0;
  $3 = __stack_pointer - 64 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (!$2) {
       break label$4
      }
      $4 = $2 + -1 | 0;
      _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hfb2399eb50b36e36E($3 + 24 | 0 | 0, HEAP32[($1 + 272 | 0) >> 2] | 0 | 0, $4 | 0);
      $5 = HEAP32[($3 + 24 | 0) >> 2] | 0;
      if ($5) {
       break label$3
      }
      break label$1;
     }
     $6 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17ha4ba550bd3c34df9E() | 0;
     $7 = 0;
     label$5 : {
      if (!(HEAPU16[($1 + 270 | 0) >> 1] | 0)) {
       break label$5
      }
      $8 = $6 + 176 | 0;
      $9 = $1 + 176 | 0;
      $7 = 0;
      $2 = $1;
      label$6 : while (1) {
       $5 = HEAPU16[($6 + 270 | 0) >> 1] | 0;
       if ($5 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $10 = i64toi32_i32$0;
       $10$hi = i64toi32_i32$1;
       i64toi32_i32$2 = $2;
       i64toi32_i32$1 = HEAP32[$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[($2 + 4 | 0) >> 2] | 0;
       $11 = i64toi32_i32$1;
       $11$hi = i64toi32_i32$0;
       i64toi32_i32$2 = $9;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $12 = i64toi32_i32$0;
       $12$hi = i64toi32_i32$1;
       HEAP16[($6 + 270 | 0) >> 1] = $5 + 1 | 0;
       i64toi32_i32$0 = $8 + ($5 << 3 | 0) | 0;
       HEAP32[i64toi32_i32$0 >> 2] = $12;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $5 = $6 + ($5 << 4 | 0) | 0;
       i64toi32_i32$1 = $10$hi;
       i64toi32_i32$0 = $5;
       HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $10;
       HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$1 = $11$hi;
       HEAP32[i64toi32_i32$0 >> 2] = $11;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $9 = i64toi32_i32$2 + 8 | 0;
       $2 = $2 + 16 | 0;
       $7 = $7 + 1 | 0;
       if ($7 >>> 0 < (HEAPU16[($1 + 270 | 0) >> 1] | 0) >>> 0) {
        continue label$6
       }
       break label$6;
      };
     }
     HEAP32[($0 + 8 | 0) >> 2] = $7;
     HEAP32[($0 + 4 | 0) >> 2] = 0;
     HEAP32[$0 >> 2] = $6;
     break label$2;
    }
    $13 = HEAP32[($3 + 28 | 0) >> 2] | 0;
    label$7 : {
     $2 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(320 | 0) | 0;
     if (!$2) {
      break label$7
     }
     HEAP32[($2 + 272 | 0) >> 2] = $5;
     HEAP16[($2 + 270 | 0) >> 1] = 0;
     HEAP32[($2 + 264 | 0) >> 2] = 0;
     HEAP8[($3 + 56 | 0) >> 0] = 0;
     i64toi32_i32$0 = $3;
     i64toi32_i32$1 = 0;
     HEAP32[(i64toi32_i32$0 + 48 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$0 + 52 | 0) >> 2] = i64toi32_i32$1;
     $14 = $2 + 272 | 0;
     _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE(i64toi32_i32$0 + 16 | 0 | 0, i64toi32_i32$0 + 48 | 0 | 0);
     label$8 : {
      if (!(HEAP32[(i64toi32_i32$0 + 16 | 0) >> 2] | 0)) {
       break label$8
      }
      $5 = HEAP32[(i64toi32_i32$0 + 20 | 0) >> 2] | 0;
      label$9 : while (1) {
       $6 = HEAP32[($14 + ($5 << 2 | 0) | 0) >> 2] | 0;
       HEAP16[($6 + 268 | 0) >> 1] = $5;
       HEAP32[($6 + 264 | 0) >> 2] = $2;
       _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 48 | 0 | 0);
       $5 = HEAP32[($3 + 12 | 0) >> 2] | 0;
       if (HEAP32[($3 + 8 | 0) >> 2] | 0) {
        continue label$9
       }
       break label$9;
      };
     }
     HEAP32[($3 + 28 | 0) >> 2] = $13 + 1 | 0;
     HEAP32[($3 + 24 | 0) >> 2] = $2;
     $15 = HEAP32[($3 + 32 | 0) >> 2] | 0;
     label$10 : {
      if (!(HEAPU16[($1 + 270 | 0) >> 1] | 0)) {
       break label$10
      }
      $7 = $1 + 176 | 0;
      $16 = $2 + 176 | 0;
      $8 = $1 + 276 | 0;
      $17 = 0;
      $6 = $1;
      label$11 : while (1) {
       i64toi32_i32$2 = $6 + 8 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $10 = i64toi32_i32$1;
       $10$hi = i64toi32_i32$0;
       i64toi32_i32$2 = $6;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $11 = i64toi32_i32$0;
       $11$hi = i64toi32_i32$1;
       i64toi32_i32$2 = $7;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $12 = i64toi32_i32$1;
       $12$hi = i64toi32_i32$0;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hfb2399eb50b36e36E($3 + 36 | 0 | 0, HEAP32[$8 >> 2] | 0 | 0, $4 | 0);
       $18 = HEAP32[($3 + 44 | 0) >> 2] | 0;
       label$12 : {
        label$13 : {
         $5 = HEAP32[($3 + 36 | 0) >> 2] | 0;
         if ($5) {
          break label$13
         }
         $9 = 0;
         $5 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17ha4ba550bd3c34df9E() | 0;
         break label$12;
        }
        $9 = HEAP32[($3 + 40 | 0) >> 2] | 0;
       }
       if (($13 | 0) != ($9 | 0)) {
        break label$1
       }
       $9 = HEAPU16[($2 + 270 | 0) >> 1] | 0;
       if ($9 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       $19 = $9 + 1 | 0;
       HEAP16[($2 + 270 | 0) >> 1] = $19;
       i64toi32_i32$0 = $12$hi;
       i64toi32_i32$1 = $16 + ($9 << 3 | 0) | 0;
       HEAP32[i64toi32_i32$1 >> 2] = $12;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $9 = $2 + ($9 << 4 | 0) | 0;
       i64toi32_i32$0 = $10$hi;
       i64toi32_i32$1 = $9;
       HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $10;
       HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
       i64toi32_i32$0 = $11$hi;
       HEAP32[i64toi32_i32$1 >> 2] = $11;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[($14 + ($19 << 2 | 0) | 0) >> 2] = $5;
       HEAP16[($5 + 268 | 0) >> 1] = $19;
       HEAP32[($5 + 264 | 0) >> 2] = $2;
       $7 = $7 + 8 | 0;
       $6 = $6 + 16 | 0;
       $8 = $8 + 4 | 0;
       $15 = ($15 + $18 | 0) + 1 | 0;
       $17 = $17 + 1 | 0;
       if ($17 >>> 0 < (HEAPU16[($1 + 270 | 0) >> 1] | 0) >>> 0) {
        continue label$11
       }
       break label$11;
      };
     }
     i64toi32_i32$2 = $3;
     i64toi32_i32$0 = HEAP32[($3 + 24 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($3 + 28 | 0) >> 2] | 0;
     $214 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     HEAP32[i64toi32_i32$0 >> 2] = $214;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $15;
     break label$2;
    }
    _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
    wasm2js_trap();
   }
   __stack_pointer = $3 + 64 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hca4bd7c64a587177E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $3 = 0, $12 = 0, $5 = 0, $13 = 0, $6 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $7 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $16 = 0, $4 = 0, $14 = 0, $17 = 0, $18 = 0, $19 = 0, $51 = 0, $58 = 0, $65 = 0, $68 = 0, $85 = 0, $89 = 0, $93 = 0, $97 = 0, $104 = 0, $15 = 0, $189 = 0, $196 = 0, $203 = 0, $206 = 0, $20 = 0, $240 = 0, $244 = 0, $248 = 0, $252 = 0, $259 = 0, $293 = 0;
  $3 = __stack_pointer - 128 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (!$2) {
       break label$4
      }
      $4 = $2 + -1 | 0;
      _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hca4bd7c64a587177E($3 + 60 | 0 | 0, HEAP32[($1 + 492 | 0) >> 2] | 0 | 0, $4 | 0);
      $2 = HEAP32[($3 + 60 | 0) >> 2] | 0;
      if ($2) {
       break label$3
      }
      break label$1;
     }
     $5 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h309331bbea654a6cE() | 0;
     $6 = 0;
     label$5 : {
      if (!(HEAPU16[($1 + 490 | 0) >> 1] | 0)) {
       break label$5
      }
      $7 = $5 + 356 | 0;
      $8 = $1 + 356 | 0;
      $6 = 0;
      $2 = $1;
      label$6 : while (1) {
       $9 = ($3 + 24 | 0) + 24 | 0;
       i64toi32_i32$2 = $2 + 24 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $51 = i64toi32_i32$0;
       i64toi32_i32$0 = $9;
       HEAP32[i64toi32_i32$0 >> 2] = $51;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $10 = ($3 + 24 | 0) + 16 | 0;
       i64toi32_i32$2 = $2 + 16 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $58 = i64toi32_i32$1;
       i64toi32_i32$1 = $10;
       HEAP32[i64toi32_i32$1 >> 2] = $58;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $11 = ($3 + 24 | 0) + 8 | 0;
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $65 = i64toi32_i32$0;
       i64toi32_i32$0 = $11;
       HEAP32[i64toi32_i32$0 >> 2] = $65;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$2 = $2;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $68 = i64toi32_i32$1;
       i64toi32_i32$1 = $3;
       HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] = $68;
       HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = i64toi32_i32$0;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h9fd81632224c6d3cE(i64toi32_i32$1 + 60 | 0 | 0, $8 | 0);
       $12 = HEAPU16[($5 + 490 | 0) >> 1] | 0;
       if ($12 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       HEAP16[($5 + 490 | 0) >> 1] = $12 + 1 | 0;
       $13 = $5 + ($12 << 5 | 0) | 0;
       i64toi32_i32$2 = i64toi32_i32$1;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 24 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 28 | 0) >> 2] | 0;
       $85 = i64toi32_i32$0;
       i64toi32_i32$0 = $13;
       $43 = $85;
       HEAP8[i64toi32_i32$0 >> 0] = $43;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $43 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $43 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $43 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $9;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $89 = i64toi32_i32$1;
       i64toi32_i32$1 = $13 + 24 | 0;
       $44 = $89;
       HEAP8[i64toi32_i32$1 >> 0] = $44;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $44 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $44 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $44 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $10;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $93 = i64toi32_i32$0;
       i64toi32_i32$0 = $13 + 16 | 0;
       $45 = $93;
       HEAP8[i64toi32_i32$0 >> 0] = $45;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $45 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $45 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $45 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $11;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $97 = i64toi32_i32$1;
       i64toi32_i32$1 = $13 + 8 | 0;
       $46 = $97;
       HEAP8[i64toi32_i32$1 >> 0] = $46;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $46 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $46 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $46 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       $12 = $7 + Math_imul($12, 12) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 60 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
       $104 = i64toi32_i32$0;
       i64toi32_i32$0 = $12;
       HEAP32[i64toi32_i32$0 >> 2] = $104;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = HEAP32[((i64toi32_i32$2 + 60 | 0) + 8 | 0) >> 2] | 0;
       $2 = $2 + 32 | 0;
       $8 = $8 + 12 | 0;
       $6 = $6 + 1 | 0;
       if ($6 >>> 0 < (HEAPU16[($1 + 490 | 0) >> 1] | 0) >>> 0) {
        continue label$6
       }
       break label$6;
      };
     }
     HEAP32[($0 + 8 | 0) >> 2] = $6;
     HEAP32[($0 + 4 | 0) >> 2] = 0;
     HEAP32[$0 >> 2] = $5;
     break label$2;
    }
    $14 = HEAP32[($3 + 64 | 0) >> 2] | 0;
    label$7 : {
     $12 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(540 | 0) | 0;
     if (!$12) {
      break label$7
     }
     HEAP32[($12 + 492 | 0) >> 2] = $2;
     HEAP16[($12 + 490 | 0) >> 1] = 0;
     HEAP32[($12 + 352 | 0) >> 2] = 0;
     HEAP8[($3 + 32 | 0) >> 0] = 0;
     i64toi32_i32$0 = $3;
     i64toi32_i32$1 = 0;
     HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] = i64toi32_i32$1;
     $7 = $12 + 492 | 0;
     _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE(i64toi32_i32$0 + 16 | 0 | 0, i64toi32_i32$0 + 24 | 0 | 0);
     label$8 : {
      if (!(HEAP32[(i64toi32_i32$0 + 16 | 0) >> 2] | 0)) {
       break label$8
      }
      $2 = HEAP32[(i64toi32_i32$0 + 20 | 0) >> 2] | 0;
      label$9 : while (1) {
       $13 = HEAP32[($7 + ($2 << 2 | 0) | 0) >> 2] | 0;
       HEAP16[($13 + 488 | 0) >> 1] = $2;
       HEAP32[($13 + 352 | 0) >> 2] = $12;
       _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 24 | 0 | 0);
       $2 = HEAP32[($3 + 12 | 0) >> 2] | 0;
       if (HEAP32[($3 + 8 | 0) >> 2] | 0) {
        continue label$9
       }
       break label$9;
      };
     }
     HEAP32[($3 + 64 | 0) >> 2] = $14 + 1 | 0;
     HEAP32[($3 + 60 | 0) >> 2] = $12;
     $11 = HEAP32[($3 + 68 | 0) >> 2] | 0;
     label$10 : {
      if (!(HEAPU16[($1 + 490 | 0) >> 1] | 0)) {
       break label$10
      }
      $6 = $1 + 356 | 0;
      $15 = $12 + 356 | 0;
      $9 = $1 + 496 | 0;
      $16 = 0;
      $2 = $1;
      label$11 : while (1) {
       $17 = ($3 + 72 | 0) + 24 | 0;
       i64toi32_i32$2 = $2 + 24 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $189 = i64toi32_i32$1;
       i64toi32_i32$1 = $17;
       HEAP32[i64toi32_i32$1 >> 2] = $189;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $18 = ($3 + 72 | 0) + 16 | 0;
       i64toi32_i32$2 = $2 + 16 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $196 = i64toi32_i32$0;
       i64toi32_i32$0 = $18;
       HEAP32[i64toi32_i32$0 >> 2] = $196;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $19 = ($3 + 72 | 0) + 8 | 0;
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $203 = i64toi32_i32$1;
       i64toi32_i32$1 = $19;
       HEAP32[i64toi32_i32$1 >> 2] = $203;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       i64toi32_i32$2 = $2;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $206 = i64toi32_i32$0;
       i64toi32_i32$0 = $3;
       HEAP32[(i64toi32_i32$0 + 72 | 0) >> 2] = $206;
       HEAP32[(i64toi32_i32$0 + 76 | 0) >> 2] = i64toi32_i32$1;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h9fd81632224c6d3cE(i64toi32_i32$0 + 104 | 0 | 0, $6 | 0);
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hca4bd7c64a587177E(i64toi32_i32$0 + 116 | 0 | 0, HEAP32[$9 >> 2] | 0 | 0, $4 | 0);
       $20 = HEAP32[(i64toi32_i32$0 + 124 | 0) >> 2] | 0;
       label$12 : {
        label$13 : {
         $13 = HEAP32[(i64toi32_i32$0 + 116 | 0) >> 2] | 0;
         if ($13) {
          break label$13
         }
         $5 = 0;
         $13 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h309331bbea654a6cE() | 0;
         break label$12;
        }
        $5 = HEAP32[($3 + 120 | 0) >> 2] | 0;
       }
       if (($14 | 0) != ($5 | 0)) {
        break label$1
       }
       $5 = HEAPU16[($12 + 490 | 0) >> 1] | 0;
       if ($5 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       $10 = $5 + 1 | 0;
       HEAP16[($12 + 490 | 0) >> 1] = $10;
       $8 = $12 + ($5 << 5 | 0) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 72 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 76 | 0) >> 2] | 0;
       $240 = i64toi32_i32$1;
       i64toi32_i32$1 = $8;
       $47 = $240;
       HEAP8[i64toi32_i32$1 >> 0] = $47;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $47 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $47 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $47 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $17;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $244 = i64toi32_i32$0;
       i64toi32_i32$0 = $8 + 24 | 0;
       $48 = $244;
       HEAP8[i64toi32_i32$0 >> 0] = $48;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $48 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $48 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $48 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $18;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $248 = i64toi32_i32$1;
       i64toi32_i32$1 = $8 + 16 | 0;
       $49 = $248;
       HEAP8[i64toi32_i32$1 >> 0] = $49;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $49 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $49 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $49 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $19;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $252 = i64toi32_i32$0;
       i64toi32_i32$0 = $8 + 8 | 0;
       $50 = $252;
       HEAP8[i64toi32_i32$0 >> 0] = $50;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $50 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $50 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $50 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       $5 = $15 + Math_imul($5, 12) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 104 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 108 | 0) >> 2] | 0;
       $259 = i64toi32_i32$1;
       i64toi32_i32$1 = $5;
       HEAP32[i64toi32_i32$1 >> 2] = $259;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = HEAP32[((i64toi32_i32$2 + 104 | 0) + 8 | 0) >> 2] | 0;
       HEAP32[($7 + ($10 << 2 | 0) | 0) >> 2] = $13;
       HEAP16[($13 + 488 | 0) >> 1] = $10;
       HEAP32[($13 + 352 | 0) >> 2] = $12;
       $2 = $2 + 32 | 0;
       $6 = $6 + 12 | 0;
       $9 = $9 + 4 | 0;
       $11 = ($11 + $20 | 0) + 1 | 0;
       $16 = $16 + 1 | 0;
       if ($16 >>> 0 < (HEAPU16[($1 + 490 | 0) >> 1] | 0) >>> 0) {
        continue label$11
       }
       break label$11;
      };
     }
     i64toi32_i32$2 = $3;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 60 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
     $293 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     HEAP32[i64toi32_i32$0 >> 2] = $293;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $11;
     break label$2;
    }
    _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
    wasm2js_trap();
   }
   __stack_pointer = $3 + 128 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h9fd81632224c6d3cE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   if (HEAP32[($1 + 8 | 0) >> 2] | 0) {
    break label$1
   }
   HEAP32[($0 + 8 | 0) >> 2] = 0;
   HEAP32[$0 >> 2] = 0;
   return;
  }
  label$2 : {
   $2 = HEAP32[$1 >> 2] | 0;
   if (!$2) {
    break label$2
   }
   _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hf99ca2fb00d2f276E($0 | 0, $2 | 0, HEAP32[($1 + 4 | 0) >> 2] | 0 | 0);
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hf99ca2fb00d2f276E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $3 = 0, $6 = 0, $7 = 0, $5 = 0, $8$hi = 0, $9$hi = 0, $8 = 0, $9 = 0, $12 = 0, $4 = 0, $14 = 0, $46 = 0, $52 = 0, $58 = 0, $64 = 0, $70 = 0, $76 = 0, $80 = 0, $84 = 0, $88 = 0, $91 = 0, $10 = 0, $11 = 0, $137 = 0, $143 = 0, $149 = 0, $155 = 0, $161 = 0, $167 = 0, $170 = 0, $174 = 0, $178 = 0, $182 = 0, $13 = 0, $233 = 0;
  $3 = __stack_pointer - 208 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     if (!$2) {
      break label$3
     }
     $4 = $2 + -1 | 0;
     _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hf99ca2fb00d2f276E($3 + 16 | 0 | 0, HEAP32[($1 + 1152 | 0) >> 2] | 0 | 0, $4 | 0);
     if (HEAP32[($3 + 16 | 0) >> 2] | 0) {
      break label$2
     }
     _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
     wasm2js_trap();
    }
    $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17hc962cc7b9951be50E() | 0;
    $6 = 0;
    label$4 : {
     if (!(HEAPU16[($1 + 1150 | 0) >> 1] | 0)) {
      break label$4
     }
     $2 = $1 + 176 | 0;
     $6 = 0;
     $7 = $1;
     label$5 : while (1) {
      i64toi32_i32$2 = $7 + 8 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $8 = i64toi32_i32$0;
      $8$hi = i64toi32_i32$1;
      i64toi32_i32$2 = $7;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $9 = i64toi32_i32$1;
      $9$hi = i64toi32_i32$0;
      i64toi32_i32$2 = $2 + 72 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $46 = i64toi32_i32$0;
      i64toi32_i32$0 = ($3 + 16 | 0) + 72 | 0;
      HEAP32[i64toi32_i32$0 >> 2] = $46;
      HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
      i64toi32_i32$2 = $2 + 56 | 0;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $52 = i64toi32_i32$1;
      i64toi32_i32$1 = ($3 + 16 | 0) + 56 | 0;
      HEAP32[i64toi32_i32$1 >> 2] = $52;
      HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$2 = $2 + 40 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $58 = i64toi32_i32$0;
      i64toi32_i32$0 = ($3 + 16 | 0) + 40 | 0;
      HEAP32[i64toi32_i32$0 >> 2] = $58;
      HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
      i64toi32_i32$2 = $2 + 8 | 0;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $64 = i64toi32_i32$1;
      i64toi32_i32$1 = ($3 + 16 | 0) + 8 | 0;
      HEAP32[i64toi32_i32$1 >> 2] = $64;
      HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$2 = $2 + 16 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $70 = i64toi32_i32$0;
      i64toi32_i32$0 = ($3 + 16 | 0) + 16 | 0;
      HEAP32[i64toi32_i32$0 >> 2] = $70;
      HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
      i64toi32_i32$2 = $2 + 24 | 0;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $76 = i64toi32_i32$1;
      i64toi32_i32$1 = ($3 + 16 | 0) + 24 | 0;
      HEAP32[i64toi32_i32$1 >> 2] = $76;
      HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$2 = $2 + 64 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $80 = i64toi32_i32$0;
      i64toi32_i32$0 = $3;
      HEAP32[(i64toi32_i32$0 + 80 | 0) >> 2] = $80;
      HEAP32[(i64toi32_i32$0 + 84 | 0) >> 2] = i64toi32_i32$1;
      i64toi32_i32$2 = $2 + 48 | 0;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $84 = i64toi32_i32$1;
      i64toi32_i32$1 = $3;
      HEAP32[(i64toi32_i32$1 + 64 | 0) >> 2] = $84;
      HEAP32[(i64toi32_i32$1 + 68 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$2 = $2 + 32 | 0;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $88 = i64toi32_i32$0;
      i64toi32_i32$0 = $3;
      HEAP32[(i64toi32_i32$0 + 48 | 0) >> 2] = $88;
      HEAP32[(i64toi32_i32$0 + 52 | 0) >> 2] = i64toi32_i32$1;
      i64toi32_i32$2 = $2;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $91 = i64toi32_i32$1;
      i64toi32_i32$1 = $3;
      HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = $91;
      HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
      HEAP8[(i64toi32_i32$1 + 96 | 0) >> 0] = HEAPU8[(i64toi32_i32$2 + 80 | 0) >> 0] | 0;
      i64toi32_i32$0 = $9$hi;
      i64toi32_i32$0 = $8$hi;
      i64toi32_i32$0 = $9$hi;
      i64toi32_i32$1 = $8$hi;
      _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h84fdcf4355257951E($5 | 0, $9 | 0, i64toi32_i32$0 | 0, $8 | 0, i64toi32_i32$1 | 0, $3 + 16 | 0 | 0);
      $7 = $7 + 16 | 0;
      $2 = i64toi32_i32$2 + 88 | 0;
      $6 = $6 + 1 | 0;
      if ($6 >>> 0 < (HEAPU16[($1 + 1150 | 0) >> 1] | 0) >>> 0) {
       continue label$5
      }
      break label$5;
     };
    }
    HEAP32[($0 + 8 | 0) >> 2] = $6;
    HEAP32[($0 + 4 | 0) >> 2] = 0;
    HEAP32[$0 >> 2] = $5;
    break label$1;
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h06f0f0576f802d71E($3 + 8 | 0 | 0, $3 + 16 | 0 | 0);
   label$6 : {
    if (!(HEAPU16[($1 + 1150 | 0) >> 1] | 0)) {
     break label$6
    }
    $2 = $1 + 176 | 0;
    $10 = HEAP32[($3 + 12 | 0) >> 2] | 0;
    $11 = HEAP32[($3 + 8 | 0) >> 2] | 0;
    $6 = $1 + 1156 | 0;
    $12 = 0;
    $7 = $1;
    label$7 : while (1) {
     i64toi32_i32$2 = $2 + 72 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $137 = i64toi32_i32$1;
     i64toi32_i32$1 = ($3 + 104 | 0) + 72 | 0;
     HEAP32[i64toi32_i32$1 >> 2] = $137;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$2 = $2 + 56 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $143 = i64toi32_i32$0;
     i64toi32_i32$0 = ($3 + 104 | 0) + 56 | 0;
     HEAP32[i64toi32_i32$0 >> 2] = $143;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$2 = $2 + 40 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $149 = i64toi32_i32$1;
     i64toi32_i32$1 = ($3 + 104 | 0) + 40 | 0;
     HEAP32[i64toi32_i32$1 >> 2] = $149;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$2 = $2 + 8 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $155 = i64toi32_i32$0;
     i64toi32_i32$0 = ($3 + 104 | 0) + 8 | 0;
     HEAP32[i64toi32_i32$0 >> 2] = $155;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$2 = $2 + 16 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $161 = i64toi32_i32$1;
     i64toi32_i32$1 = ($3 + 104 | 0) + 16 | 0;
     HEAP32[i64toi32_i32$1 >> 2] = $161;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$2 = $2 + 24 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $167 = i64toi32_i32$0;
     i64toi32_i32$0 = ($3 + 104 | 0) + 24 | 0;
     HEAP32[i64toi32_i32$0 >> 2] = $167;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$2 = $2;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $170 = i64toi32_i32$1;
     i64toi32_i32$1 = $3;
     HEAP32[(i64toi32_i32$1 + 104 | 0) >> 2] = $170;
     HEAP32[(i64toi32_i32$1 + 108 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$2 = i64toi32_i32$2 + 64 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $174 = i64toi32_i32$0;
     i64toi32_i32$0 = $3;
     HEAP32[(i64toi32_i32$0 + 168 | 0) >> 2] = $174;
     HEAP32[(i64toi32_i32$0 + 172 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$2 = $2 + 48 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $178 = i64toi32_i32$1;
     i64toi32_i32$1 = $3;
     HEAP32[(i64toi32_i32$1 + 152 | 0) >> 2] = $178;
     HEAP32[(i64toi32_i32$1 + 156 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$2 = $2 + 32 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $182 = i64toi32_i32$0;
     i64toi32_i32$0 = $3;
     HEAP32[(i64toi32_i32$0 + 136 | 0) >> 2] = $182;
     HEAP32[(i64toi32_i32$0 + 140 | 0) >> 2] = i64toi32_i32$1;
     HEAP8[(i64toi32_i32$0 + 184 | 0) >> 0] = HEAPU8[($2 + 80 | 0) >> 0] | 0;
     i64toi32_i32$2 = $7 + 8 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $8 = i64toi32_i32$1;
     $8$hi = i64toi32_i32$0;
     i64toi32_i32$2 = $7;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $9 = i64toi32_i32$0;
     $9$hi = i64toi32_i32$1;
     _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hf99ca2fb00d2f276E($3 + 196 | 0 | 0, HEAP32[$6 >> 2] | 0 | 0, $4 | 0);
     $13 = HEAP32[($3 + 204 | 0) >> 2] | 0;
     label$8 : {
      label$9 : {
       $5 = HEAP32[($3 + 196 | 0) >> 2] | 0;
       if ($5) {
        break label$9
       }
       $14 = 0;
       $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17hc962cc7b9951be50E() | 0;
       break label$8;
      }
      $14 = HEAP32[($3 + 200 | 0) >> 2] | 0;
     }
     i64toi32_i32$1 = $9$hi;
     i64toi32_i32$1 = $8$hi;
     i64toi32_i32$1 = $9$hi;
     i64toi32_i32$0 = $8$hi;
     _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17h2adbadf5ee1329c8E($11 | 0, $10 | 0, $9 | 0, i64toi32_i32$1 | 0, $8 | 0, i64toi32_i32$0 | 0, $3 + 104 | 0 | 0, $5 | 0, $14 | 0);
     HEAP32[($3 + 24 | 0) >> 2] = ($13 + (HEAP32[($3 + 24 | 0) >> 2] | 0) | 0) + 1 | 0;
     $7 = $7 + 16 | 0;
     $2 = $2 + 88 | 0;
     $6 = $6 + 4 | 0;
     $12 = $12 + 1 | 0;
     if ($12 >>> 0 < (HEAPU16[($1 + 1150 | 0) >> 1] | 0) >>> 0) {
      continue label$7
     }
     break label$7;
    };
   }
   i64toi32_i32$2 = $3;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 16 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 20 | 0) >> 2] | 0;
   $233 = i64toi32_i32$0;
   i64toi32_i32$0 = $0;
   HEAP32[i64toi32_i32$0 >> 2] = $233;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = HEAP32[((i64toi32_i32$2 + 16 | 0) + 8 | 0) >> 2] | 0;
  }
  __stack_pointer = $3 + 208 | 0;
 }
 
 function _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17hc962cc7b9951be50E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(1152 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 1150 | 0) >> 1] = 0;
  HEAP32[($0 + 1144 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h84fdcf4355257951E($0, $1, $1$hi, $2, $2$hi, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  var $4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  label$1 : {
   $4 = HEAPU16[($0 + 1150 | 0) >> 1] | 0;
   if ($4 >>> 0 < 11 >>> 0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  HEAP16[($0 + 1150 | 0) >> 1] = $4 + 1 | 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$1 = $0 + ($4 << 4 | 0) | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $2$hi;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $2;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  memcpy(($0 + Math_imul($4, 88) | 0) + 176 | 0 | 0, $3 | 0, 88 | 0) | 0;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h06f0f0576f802d71E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $4 = HEAP32[$1 >> 2] | 0;
  $5 = _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h1195a3973c1ce86dE() | 0;
  HEAP32[($5 + 1152 | 0) >> 2] = $4;
  _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17h39875522d2428908E($2 + 8 | 0 | 0, $5 | 0, $3 + 1 | 0 | 0);
  $3 = HEAP32[($2 + 8 | 0) >> 2] | 0;
  $4 = HEAP32[($2 + 12 | 0) >> 2] | 0;
  HEAP32[($1 + 4 | 0) >> 2] = $4;
  HEAP32[$1 >> 2] = $3;
  HEAP32[($0 + 4 | 0) >> 2] = $4;
  HEAP32[$0 >> 2] = $3;
  __stack_pointer = $2 + 16 | 0;
 }
 
 function _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17h2adbadf5ee1329c8E($0, $1, $2, $2$hi, $3, $3$hi, $4, $5, $6) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  $6 = $6 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  label$1 : {
   if (($1 + -1 | 0 | 0) != ($6 | 0)) {
    break label$1
   }
   $1 = HEAPU16[($0 + 1150 | 0) >> 1] | 0;
   if ($1 >>> 0 >= 11 >>> 0) {
    break label$1
   }
   $6 = $1 + 1 | 0;
   HEAP16[($0 + 1150 | 0) >> 1] = $6;
   i64toi32_i32$0 = $2$hi;
   i64toi32_i32$1 = $0 + ($1 << 4 | 0) | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $2;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$0 = $3$hi;
   HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $3;
   HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
   memcpy(($0 + Math_imul($1, 88) | 0) + 176 | 0 | 0, $4 | 0, 88 | 0) | 0;
   HEAP32[(($0 + ($6 << 2 | 0) | 0) + 1152 | 0) >> 2] = $5;
   HEAP16[($5 + 1148 | 0) >> 1] = $6;
   HEAP32[($5 + 1144 | 0) >> 2] = $0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17he936111ee019b84aE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, $3 = 0, i64toi32_i32$1 = 0, $6 = 0, $5 = 0, $18 = 0, i64toi32_i32$0 = 0, $8 = 0, $10 = 0, $12 = 0, $19 = 0, $4 = 0, $7 = 0, $9 = 0, $43 = 0, $43$hi = 0, $46 = 0, $46$hi = 0, $49 = 0, $49$hi = 0, $52 = 0, $52$hi = 0, $11 = 0, $13 = 0, $13$hi = 0, $14 = 0, $14$hi = 0, $15 = 0, $15$hi = 0, $16 = 0, $16$hi = 0, $17 = 0, $198 = 0;
  $3 = __stack_pointer - 64 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (!$2) {
       break label$4
      }
      $4 = $2 + -1 | 0;
      _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17he936111ee019b84aE($3 + 24 | 0 | 0, HEAP32[($1 + 360 | 0) >> 2] | 0 | 0, $4 | 0);
      $2 = HEAP32[($3 + 24 | 0) >> 2] | 0;
      if ($2) {
       break label$3
      }
      break label$1;
     }
     $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17hc7545c508dad6cb9E() | 0;
     $6 = 0;
     label$5 : {
      if (!(HEAPU16[($1 + 358 | 0) >> 1] | 0)) {
       break label$5
      }
      $6 = 0;
      $2 = $1;
      label$6 : while (1) {
       i64toi32_i32$2 = $2;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $43 = i64toi32_i32$0;
       $43$hi = i64toi32_i32$1;
       i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $46 = i64toi32_i32$1;
       $46$hi = i64toi32_i32$0;
       i64toi32_i32$2 = $2 + 176 | 0;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $49 = i64toi32_i32$0;
       $49$hi = i64toi32_i32$1;
       i64toi32_i32$2 = $2 + 184 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $52 = i64toi32_i32$1;
       $52$hi = i64toi32_i32$0;
       i64toi32_i32$0 = $43$hi;
       i64toi32_i32$1 = $46$hi;
       i64toi32_i32$2 = $49$hi;
       i64toi32_i32$3 = $52$hi;
       _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h1736cc34262ca8b4E($5 | 0, $43 | 0, i64toi32_i32$0 | 0, $46 | 0, i64toi32_i32$1 | 0, $49 | 0, i64toi32_i32$2 | 0, $52 | 0, i64toi32_i32$3 | 0);
       $2 = $2 + 16 | 0;
       $6 = $6 + 1 | 0;
       if ($6 >>> 0 < (HEAPU16[($1 + 358 | 0) >> 1] | 0) >>> 0) {
        continue label$6
       }
       break label$6;
      };
     }
     HEAP32[($0 + 8 | 0) >> 2] = $6;
     HEAP32[($0 + 4 | 0) >> 2] = 0;
     HEAP32[$0 >> 2] = $5;
     break label$2;
    }
    $7 = HEAP32[($3 + 28 | 0) >> 2] | 0;
    label$7 : {
     $6 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(408 | 0) | 0;
     if (!$6) {
      break label$7
     }
     HEAP32[($6 + 360 | 0) >> 2] = $2;
     HEAP16[($6 + 358 | 0) >> 1] = 0;
     HEAP32[($6 + 352 | 0) >> 2] = 0;
     HEAP8[($3 + 56 | 0) >> 0] = 0;
     i64toi32_i32$2 = $3;
     i64toi32_i32$3 = 0;
     HEAP32[(i64toi32_i32$2 + 48 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$2 + 52 | 0) >> 2] = i64toi32_i32$3;
     $8 = $7 + 1 | 0;
     $9 = $6 + 360 | 0;
     _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE(i64toi32_i32$2 + 16 | 0 | 0, i64toi32_i32$2 + 48 | 0 | 0);
     label$8 : {
      if (!(HEAP32[(i64toi32_i32$2 + 16 | 0) >> 2] | 0)) {
       break label$8
      }
      $2 = HEAP32[(i64toi32_i32$2 + 20 | 0) >> 2] | 0;
      label$9 : while (1) {
       $5 = HEAP32[($9 + ($2 << 2 | 0) | 0) >> 2] | 0;
       HEAP16[($5 + 356 | 0) >> 1] = $2;
       HEAP32[($5 + 352 | 0) >> 2] = $6;
       _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 48 | 0 | 0);
       $2 = HEAP32[($3 + 12 | 0) >> 2] | 0;
       if (HEAP32[($3 + 8 | 0) >> 2] | 0) {
        continue label$9
       }
       break label$9;
      };
     }
     HEAP32[($3 + 28 | 0) >> 2] = $8;
     HEAP32[($3 + 24 | 0) >> 2] = $6;
     $10 = HEAP32[($3 + 32 | 0) >> 2] | 0;
     label$10 : {
      if (!(HEAPU16[($1 + 358 | 0) >> 1] | 0)) {
       break label$10
      }
      $8 = $1 + 364 | 0;
      $11 = $6 + 176 | 0;
      $12 = 0;
      $2 = $1;
      label$11 : while (1) {
       i64toi32_i32$1 = $2 + 184 | 0;
       i64toi32_i32$3 = HEAP32[i64toi32_i32$1 >> 2] | 0;
       i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
       $13 = i64toi32_i32$3;
       $13$hi = i64toi32_i32$2;
       i64toi32_i32$1 = $2 + 176 | 0;
       i64toi32_i32$2 = HEAP32[i64toi32_i32$1 >> 2] | 0;
       i64toi32_i32$3 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
       $14 = i64toi32_i32$2;
       $14$hi = i64toi32_i32$3;
       i64toi32_i32$1 = $2 + 8 | 0;
       i64toi32_i32$3 = HEAP32[i64toi32_i32$1 >> 2] | 0;
       i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
       $15 = i64toi32_i32$3;
       $15$hi = i64toi32_i32$2;
       i64toi32_i32$1 = $2;
       i64toi32_i32$2 = HEAP32[$2 >> 2] | 0;
       i64toi32_i32$3 = HEAP32[($2 + 4 | 0) >> 2] | 0;
       $16 = i64toi32_i32$2;
       $16$hi = i64toi32_i32$3;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17he936111ee019b84aE($3 + 36 | 0 | 0, HEAP32[$8 >> 2] | 0 | 0, $4 | 0);
       $17 = HEAP32[($3 + 44 | 0) >> 2] | 0;
       label$12 : {
        label$13 : {
         $5 = HEAP32[($3 + 36 | 0) >> 2] | 0;
         if ($5) {
          break label$13
         }
         $18 = 0;
         $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17hc7545c508dad6cb9E() | 0;
         break label$12;
        }
        $18 = HEAP32[($3 + 40 | 0) >> 2] | 0;
       }
       if (($7 | 0) != ($18 | 0)) {
        break label$1
       }
       $18 = HEAPU16[($6 + 358 | 0) >> 1] | 0;
       if ($18 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       $19 = $18 + 1 | 0;
       HEAP16[($6 + 358 | 0) >> 1] = $19;
       $18 = $18 << 4 | 0;
       i64toi32_i32$3 = $13$hi;
       i64toi32_i32$2 = $11 + $18 | 0;
       HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] = $13;
       HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] = i64toi32_i32$3;
       i64toi32_i32$3 = $14$hi;
       HEAP32[i64toi32_i32$2 >> 2] = $14;
       HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$3;
       $18 = $6 + $18 | 0;
       i64toi32_i32$3 = $15$hi;
       i64toi32_i32$2 = $18;
       HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] = $15;
       HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] = i64toi32_i32$3;
       i64toi32_i32$3 = $16$hi;
       HEAP32[i64toi32_i32$2 >> 2] = $16;
       HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$3;
       HEAP32[($9 + ($19 << 2 | 0) | 0) >> 2] = $5;
       HEAP16[($5 + 356 | 0) >> 1] = $19;
       HEAP32[($5 + 352 | 0) >> 2] = $6;
       $2 = $2 + 16 | 0;
       $8 = $8 + 4 | 0;
       $10 = ($10 + $17 | 0) + 1 | 0;
       $12 = $12 + 1 | 0;
       if ($12 >>> 0 < (HEAPU16[($1 + 358 | 0) >> 1] | 0) >>> 0) {
        continue label$11
       }
       break label$11;
      };
     }
     i64toi32_i32$1 = $3;
     i64toi32_i32$3 = HEAP32[($3 + 24 | 0) >> 2] | 0;
     i64toi32_i32$2 = HEAP32[($3 + 28 | 0) >> 2] | 0;
     $198 = i64toi32_i32$3;
     i64toi32_i32$3 = $0;
     HEAP32[i64toi32_i32$3 >> 2] = $198;
     HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] = i64toi32_i32$2;
     HEAP32[(i64toi32_i32$3 + 8 | 0) >> 2] = $10;
     break label$2;
    }
    _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
    wasm2js_trap();
   }
   __stack_pointer = $3 + 64 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17hc7545c508dad6cb9E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(360 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 358 | 0) >> 1] = 0;
  HEAP32[($0 + 352 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h1736cc34262ca8b4E($0, $1, $1$hi, $2, $2$hi, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $5 = 0;
  label$1 : {
   $5 = HEAPU16[($0 + 358 | 0) >> 1] | 0;
   if ($5 >>> 0 < 11 >>> 0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  HEAP16[($0 + 358 | 0) >> 1] = $5 + 1 | 0;
  $0 = $0 + ($5 << 4 | 0) | 0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$1 = $0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = $2;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $1$hi;
  HEAP32[i64toi32_i32$1 >> 2] = $1;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $4$hi;
  i64toi32_i32$1 = i64toi32_i32$1 + 184 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $4;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$1 = $0 + 176 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $3;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hf06dfff5438d19e2E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $3 = 0, $12 = 0, $5 = 0, $13 = 0, $6 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $7 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $16 = 0, $4 = 0, $14 = 0, $17 = 0, $18 = 0, $19 = 0, $51 = 0, $58 = 0, $65 = 0, $68 = 0, $85 = 0, $89 = 0, $93 = 0, $97 = 0, $104 = 0, $15 = 0, $189 = 0, $196 = 0, $203 = 0, $206 = 0, $20 = 0, $240 = 0, $244 = 0, $248 = 0, $252 = 0, $259 = 0, $293 = 0;
  $3 = __stack_pointer - 128 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (!$2) {
       break label$4
      }
      $4 = $2 + -1 | 0;
      _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hf06dfff5438d19e2E($3 + 60 | 0 | 0, HEAP32[($1 + 492 | 0) >> 2] | 0 | 0, $4 | 0);
      $2 = HEAP32[($3 + 60 | 0) >> 2] | 0;
      if ($2) {
       break label$3
      }
      break label$1;
     }
     $5 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h309331bbea654a6cE() | 0;
     $6 = 0;
     label$5 : {
      if (!(HEAPU16[($1 + 490 | 0) >> 1] | 0)) {
       break label$5
      }
      $7 = $5 + 356 | 0;
      $8 = $1 + 356 | 0;
      $6 = 0;
      $2 = $1;
      label$6 : while (1) {
       $9 = ($3 + 24 | 0) + 24 | 0;
       i64toi32_i32$2 = $2 + 24 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $51 = i64toi32_i32$0;
       i64toi32_i32$0 = $9;
       HEAP32[i64toi32_i32$0 >> 2] = $51;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $10 = ($3 + 24 | 0) + 16 | 0;
       i64toi32_i32$2 = $2 + 16 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $58 = i64toi32_i32$1;
       i64toi32_i32$1 = $10;
       HEAP32[i64toi32_i32$1 >> 2] = $58;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $11 = ($3 + 24 | 0) + 8 | 0;
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $65 = i64toi32_i32$0;
       i64toi32_i32$0 = $11;
       HEAP32[i64toi32_i32$0 >> 2] = $65;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$2 = $2;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $68 = i64toi32_i32$1;
       i64toi32_i32$1 = $3;
       HEAP32[(i64toi32_i32$1 + 24 | 0) >> 2] = $68;
       HEAP32[(i64toi32_i32$1 + 28 | 0) >> 2] = i64toi32_i32$0;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbe2a3af3866707f3E(i64toi32_i32$1 + 60 | 0 | 0, $8 | 0);
       $12 = HEAPU16[($5 + 490 | 0) >> 1] | 0;
       if ($12 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       HEAP16[($5 + 490 | 0) >> 1] = $12 + 1 | 0;
       $13 = $5 + ($12 << 5 | 0) | 0;
       i64toi32_i32$2 = i64toi32_i32$1;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 24 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 28 | 0) >> 2] | 0;
       $85 = i64toi32_i32$0;
       i64toi32_i32$0 = $13;
       $43 = $85;
       HEAP8[i64toi32_i32$0 >> 0] = $43;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $43 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $43 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $43 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $9;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $89 = i64toi32_i32$1;
       i64toi32_i32$1 = $13 + 24 | 0;
       $44 = $89;
       HEAP8[i64toi32_i32$1 >> 0] = $44;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $44 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $44 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $44 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $10;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $93 = i64toi32_i32$0;
       i64toi32_i32$0 = $13 + 16 | 0;
       $45 = $93;
       HEAP8[i64toi32_i32$0 >> 0] = $45;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $45 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $45 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $45 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $11;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $97 = i64toi32_i32$1;
       i64toi32_i32$1 = $13 + 8 | 0;
       $46 = $97;
       HEAP8[i64toi32_i32$1 >> 0] = $46;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $46 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $46 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $46 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       $12 = $7 + Math_imul($12, 12) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 60 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
       $104 = i64toi32_i32$0;
       i64toi32_i32$0 = $12;
       HEAP32[i64toi32_i32$0 >> 2] = $104;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = HEAP32[((i64toi32_i32$2 + 60 | 0) + 8 | 0) >> 2] | 0;
       $2 = $2 + 32 | 0;
       $8 = $8 + 12 | 0;
       $6 = $6 + 1 | 0;
       if ($6 >>> 0 < (HEAPU16[($1 + 490 | 0) >> 1] | 0) >>> 0) {
        continue label$6
       }
       break label$6;
      };
     }
     HEAP32[($0 + 8 | 0) >> 2] = $6;
     HEAP32[($0 + 4 | 0) >> 2] = 0;
     HEAP32[$0 >> 2] = $5;
     break label$2;
    }
    $14 = HEAP32[($3 + 64 | 0) >> 2] | 0;
    label$7 : {
     $12 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(540 | 0) | 0;
     if (!$12) {
      break label$7
     }
     HEAP32[($12 + 492 | 0) >> 2] = $2;
     HEAP16[($12 + 490 | 0) >> 1] = 0;
     HEAP32[($12 + 352 | 0) >> 2] = 0;
     HEAP8[($3 + 32 | 0) >> 0] = 0;
     i64toi32_i32$0 = $3;
     i64toi32_i32$1 = 0;
     HEAP32[(i64toi32_i32$0 + 24 | 0) >> 2] = 0;
     HEAP32[(i64toi32_i32$0 + 28 | 0) >> 2] = i64toi32_i32$1;
     $7 = $12 + 492 | 0;
     _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE(i64toi32_i32$0 + 16 | 0 | 0, i64toi32_i32$0 + 24 | 0 | 0);
     label$8 : {
      if (!(HEAP32[(i64toi32_i32$0 + 16 | 0) >> 2] | 0)) {
       break label$8
      }
      $2 = HEAP32[(i64toi32_i32$0 + 20 | 0) >> 2] | 0;
      label$9 : while (1) {
       $13 = HEAP32[($7 + ($2 << 2 | 0) | 0) >> 2] | 0;
       HEAP16[($13 + 488 | 0) >> 1] = $2;
       HEAP32[($13 + 352 | 0) >> 2] = $12;
       _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 24 | 0 | 0);
       $2 = HEAP32[($3 + 12 | 0) >> 2] | 0;
       if (HEAP32[($3 + 8 | 0) >> 2] | 0) {
        continue label$9
       }
       break label$9;
      };
     }
     HEAP32[($3 + 64 | 0) >> 2] = $14 + 1 | 0;
     HEAP32[($3 + 60 | 0) >> 2] = $12;
     $11 = HEAP32[($3 + 68 | 0) >> 2] | 0;
     label$10 : {
      if (!(HEAPU16[($1 + 490 | 0) >> 1] | 0)) {
       break label$10
      }
      $6 = $1 + 356 | 0;
      $15 = $12 + 356 | 0;
      $9 = $1 + 496 | 0;
      $16 = 0;
      $2 = $1;
      label$11 : while (1) {
       $17 = ($3 + 72 | 0) + 24 | 0;
       i64toi32_i32$2 = $2 + 24 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $189 = i64toi32_i32$1;
       i64toi32_i32$1 = $17;
       HEAP32[i64toi32_i32$1 >> 2] = $189;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       $18 = ($3 + 72 | 0) + 16 | 0;
       i64toi32_i32$2 = $2 + 16 | 0;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $196 = i64toi32_i32$0;
       i64toi32_i32$0 = $18;
       HEAP32[i64toi32_i32$0 >> 2] = $196;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       $19 = ($3 + 72 | 0) + 8 | 0;
       i64toi32_i32$2 = $2 + 8 | 0;
       i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $203 = i64toi32_i32$1;
       i64toi32_i32$1 = $19;
       HEAP32[i64toi32_i32$1 >> 2] = $203;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       i64toi32_i32$2 = $2;
       i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
       $206 = i64toi32_i32$0;
       i64toi32_i32$0 = $3;
       HEAP32[(i64toi32_i32$0 + 72 | 0) >> 2] = $206;
       HEAP32[(i64toi32_i32$0 + 76 | 0) >> 2] = i64toi32_i32$1;
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbe2a3af3866707f3E(i64toi32_i32$0 + 104 | 0 | 0, $6 | 0);
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hf06dfff5438d19e2E(i64toi32_i32$0 + 116 | 0 | 0, HEAP32[$9 >> 2] | 0 | 0, $4 | 0);
       $20 = HEAP32[(i64toi32_i32$0 + 124 | 0) >> 2] | 0;
       label$12 : {
        label$13 : {
         $13 = HEAP32[(i64toi32_i32$0 + 116 | 0) >> 2] | 0;
         if ($13) {
          break label$13
         }
         $5 = 0;
         $13 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17h309331bbea654a6cE() | 0;
         break label$12;
        }
        $5 = HEAP32[($3 + 120 | 0) >> 2] | 0;
       }
       if (($14 | 0) != ($5 | 0)) {
        break label$1
       }
       $5 = HEAPU16[($12 + 490 | 0) >> 1] | 0;
       if ($5 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       $10 = $5 + 1 | 0;
       HEAP16[($12 + 490 | 0) >> 1] = $10;
       $8 = $12 + ($5 << 5 | 0) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 72 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 76 | 0) >> 2] | 0;
       $240 = i64toi32_i32$1;
       i64toi32_i32$1 = $8;
       $47 = $240;
       HEAP8[i64toi32_i32$1 >> 0] = $47;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $47 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $47 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $47 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $17;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $244 = i64toi32_i32$0;
       i64toi32_i32$0 = $8 + 24 | 0;
       $48 = $244;
       HEAP8[i64toi32_i32$0 >> 0] = $48;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $48 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $48 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $48 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       i64toi32_i32$2 = $18;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $248 = i64toi32_i32$1;
       i64toi32_i32$1 = $8 + 16 | 0;
       $49 = $248;
       HEAP8[i64toi32_i32$1 >> 0] = $49;
       HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $49 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $49 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $49 >>> 24 | 0;
       HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
       HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
       HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
       HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
       i64toi32_i32$2 = $19;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $252 = i64toi32_i32$0;
       i64toi32_i32$0 = $8 + 8 | 0;
       $50 = $252;
       HEAP8[i64toi32_i32$0 >> 0] = $50;
       HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $50 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $50 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $50 >>> 24 | 0;
       HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
       HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
       HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
       HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
       $5 = $15 + Math_imul($5, 12) | 0;
       i64toi32_i32$2 = $3;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 104 | 0) >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 108 | 0) >> 2] | 0;
       $259 = i64toi32_i32$1;
       i64toi32_i32$1 = $5;
       HEAP32[i64toi32_i32$1 >> 2] = $259;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = HEAP32[((i64toi32_i32$2 + 104 | 0) + 8 | 0) >> 2] | 0;
       HEAP32[($7 + ($10 << 2 | 0) | 0) >> 2] = $13;
       HEAP16[($13 + 488 | 0) >> 1] = $10;
       HEAP32[($13 + 352 | 0) >> 2] = $12;
       $2 = $2 + 32 | 0;
       $6 = $6 + 12 | 0;
       $9 = $9 + 4 | 0;
       $11 = ($11 + $20 | 0) + 1 | 0;
       $16 = $16 + 1 | 0;
       if ($16 >>> 0 < (HEAPU16[($1 + 490 | 0) >> 1] | 0) >>> 0) {
        continue label$11
       }
       break label$11;
      };
     }
     i64toi32_i32$2 = $3;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 60 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 64 | 0) >> 2] | 0;
     $293 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     HEAP32[i64toi32_i32$0 >> 2] = $293;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $11;
     break label$2;
    }
    _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
    wasm2js_trap();
   }
   __stack_pointer = $3 + 128 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbe2a3af3866707f3E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   if (HEAP32[($1 + 8 | 0) >> 2] | 0) {
    break label$1
   }
   HEAP32[($0 + 8 | 0) >> 2] = 0;
   HEAP32[$0 >> 2] = 0;
   return;
  }
  label$2 : {
   $2 = HEAP32[$1 >> 2] | 0;
   if (!$2) {
    break label$2
   }
   _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hfb0c5647075be4d8E($0 | 0, $2 | 0, HEAP32[($1 + 4 | 0) >> 2] | 0 | 0);
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hfb0c5647075be4d8E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $5 = 0, i64toi32_i32$0 = 0, $8 = 0, i64toi32_i32$1 = 0, $6 = 0, i64toi32_i32$2 = 0, $9 = 0, $7 = 0, $10 = 0, $13 = 0, $15 = 0, $17 = 0, $4 = 0, $10$hi = 0, $11 = 0, $12 = 0, $14 = 0, $16 = 0, $205 = 0;
  $3 = __stack_pointer - 384 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if (!$2) {
       break label$4
      }
      $4 = $2 + -1 | 0;
      _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hfb0c5647075be4d8E($3 + 188 | 0 | 0, HEAP32[($1 + 1944 | 0) >> 2] | 0 | 0, $4 | 0);
      $5 = HEAP32[($3 + 188 | 0) >> 2] | 0;
      if ($5) {
       break label$3
      }
      break label$1;
     }
     $5 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17hee7178471d850456E() | 0;
     $6 = 0;
     label$5 : {
      if (!(HEAPU16[($1 + 1942 | 0) >> 1] | 0)) {
       break label$5
      }
      $7 = $5 + 88 | 0;
      $8 = $1 + 88 | 0;
      $6 = 0;
      $9 = $1;
      label$6 : while (1) {
       i64toi32_i32$2 = $9;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $10 = i64toi32_i32$0;
       $10$hi = i64toi32_i32$1;
       _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($3 + 16 | 0 | 0, $8 | 0);
       $2 = HEAPU16[($5 + 1942 | 0) >> 1] | 0;
       if ($2 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       HEAP16[($5 + 1942 | 0) >> 1] = $2 + 1 | 0;
       i64toi32_i32$0 = $5 + ($2 << 3 | 0) | 0;
       HEAP32[i64toi32_i32$0 >> 2] = $10;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       memcpy($7 + Math_imul($2, 168) | 0 | 0, $3 + 16 | 0 | 0, 168 | 0) | 0;
       $9 = i64toi32_i32$2 + 8 | 0;
       $8 = $8 + 168 | 0;
       $6 = $6 + 1 | 0;
       if ($6 >>> 0 < (HEAPU16[($1 + 1942 | 0) >> 1] | 0) >>> 0) {
        continue label$6
       }
       break label$6;
      };
     }
     HEAP32[($0 + 8 | 0) >> 2] = $6;
     HEAP32[($0 + 4 | 0) >> 2] = 0;
     HEAP32[$0 >> 2] = $5;
     break label$2;
    }
    $11 = HEAP32[($3 + 192 | 0) >> 2] | 0;
    label$7 : {
     $2 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(1992 | 0) | 0;
     if (!$2) {
      break label$7
     }
     HEAP32[($2 + 1944 | 0) >> 2] = $5;
     HEAP16[($2 + 1942 | 0) >> 1] = 0;
     HEAP32[($2 + 1936 | 0) >> 2] = 0;
     HEAP8[($3 + 24 | 0) >> 0] = 0;
     i64toi32_i32$0 = $3;
     i64toi32_i32$1 = 0;
     HEAP32[($3 + 16 | 0) >> 2] = 0;
     HEAP32[($3 + 20 | 0) >> 2] = i64toi32_i32$1;
     $12 = $2 + 1944 | 0;
     _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 16 | 0 | 0);
     label$8 : {
      if (!(HEAP32[($3 + 8 | 0) >> 2] | 0)) {
       break label$8
      }
      $5 = HEAP32[($3 + 12 | 0) >> 2] | 0;
      label$9 : while (1) {
       $8 = HEAP32[($12 + ($5 << 2 | 0) | 0) >> 2] | 0;
       HEAP16[($8 + 1940 | 0) >> 1] = $5;
       HEAP32[($8 + 1936 | 0) >> 2] = $2;
       _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 | 0, $3 + 16 | 0 | 0);
       $5 = HEAP32[($3 + 4 | 0) >> 2] | 0;
       if (HEAP32[$3 >> 2] | 0) {
        continue label$9
       }
       break label$9;
      };
     }
     HEAP32[($3 + 192 | 0) >> 2] = $11 + 1 | 0;
     HEAP32[($3 + 188 | 0) >> 2] = $2;
     $13 = HEAP32[($3 + 196 | 0) >> 2] | 0;
     label$10 : {
      if (!(HEAPU16[($1 + 1942 | 0) >> 1] | 0)) {
       break label$10
      }
      $9 = $1 + 88 | 0;
      $14 = $2 + 88 | 0;
      $6 = $1 + 1948 | 0;
      $15 = 0;
      $7 = $1;
      label$11 : while (1) {
       i64toi32_i32$2 = $7;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $10 = i64toi32_i32$1;
       $10$hi = i64toi32_i32$0;
       _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($3 + 200 | 0 | 0, $9 | 0);
       _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hfb0c5647075be4d8E($3 + 372 | 0 | 0, HEAP32[$6 >> 2] | 0 | 0, $4 | 0);
       $16 = HEAP32[($3 + 380 | 0) >> 2] | 0;
       label$12 : {
        label$13 : {
         $5 = HEAP32[($3 + 372 | 0) >> 2] | 0;
         if ($5) {
          break label$13
         }
         $8 = 0;
         $5 = _ZN5alloc11collections5btree4node117NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$8new_leaf17hee7178471d850456E() | 0;
         break label$12;
        }
        $8 = HEAP32[($3 + 376 | 0) >> 2] | 0;
       }
       if (($11 | 0) != ($8 | 0)) {
        break label$1
       }
       $8 = HEAPU16[($2 + 1942 | 0) >> 1] | 0;
       if ($8 >>> 0 >= 11 >>> 0) {
        break label$1
       }
       $17 = $8 + 1 | 0;
       HEAP16[($2 + 1942 | 0) >> 1] = $17;
       i64toi32_i32$0 = $10$hi;
       i64toi32_i32$1 = $2 + ($8 << 3 | 0) | 0;
       HEAP32[i64toi32_i32$1 >> 2] = $10;
       HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
       memcpy($14 + Math_imul($8, 168) | 0 | 0, $3 + 200 | 0 | 0, 168 | 0) | 0;
       HEAP32[($12 + ($17 << 2 | 0) | 0) >> 2] = $5;
       HEAP16[($5 + 1940 | 0) >> 1] = $17;
       HEAP32[($5 + 1936 | 0) >> 2] = $2;
       $7 = $7 + 8 | 0;
       $9 = $9 + 168 | 0;
       $6 = $6 + 4 | 0;
       $13 = ($13 + $16 | 0) + 1 | 0;
       $15 = $15 + 1 | 0;
       if ($15 >>> 0 < (HEAPU16[($1 + 1942 | 0) >> 1] | 0) >>> 0) {
        continue label$11
       }
       break label$11;
      };
     }
     i64toi32_i32$2 = $3;
     i64toi32_i32$0 = HEAP32[($3 + 188 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($3 + 192 | 0) >> 2] | 0;
     $205 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     HEAP32[i64toi32_i32$0 >> 2] = $205;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $13;
     break label$2;
    }
    _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
    wasm2js_trap();
   }
   __stack_pointer = $3 + 384 | 0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function init() {
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $0 = 0, $6 = 0, $1 = 0, $29 = 0, $30 = 0, $31 = 0, $33 = 0, $34 = 0, $36 = 0, $37 = 0, $38 = 0, $8 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $12 = 0, $48 = 0, $50 = 0, $51 = 0, $4 = 0, $10 = 0, $52 = 0, $2 = 0, $3 = 0, $32 = 0, $35 = 0, $5 = 0, $43 = 0, $49 = 0, $7 = 0, $57 = 0, $60 = 0, $63 = 0, $9 = 0, $71 = 0, $77 = 0, $11 = 0, $85 = 0, $88 = 0, $91 = 0, $170 = 0;
  $0 = __stack_pointer - 432 | 0;
  __stack_pointer = $0;
  label$1 : {
   if (!(HEAP32[(0 + 1050048 | 0) >> 2] | 0)) {
    break label$1
   }
   _ZN4core3ptr50drop_in_place$LT$inscribe_io__InscribeIoStates$GT$17h2e8d9b62b9e26375E(1050052 | 0);
  }
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1050132 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1050136 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1050120 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1050124 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1050108 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1050112 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1050096 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1050100 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1050084 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1050088 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1050072 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1050076 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1050060 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1050064 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1050048 | 0) >> 2] = 1;
  HEAP32[(i64toi32_i32$1 + 1050052 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(0 + 1050144 | 0) >> 2] = 0;
  _ZN4core3ptr70drop_in_place$LT$core__option__Option$LT$inscribe_io__Inscribe$GT$$GT$17h1a96dba1b283c2f7E(1049272 | 0);
  memset(1049272 | 0, 0 | 0, 96 | 0) | 0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1049420 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1049424 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(0 + 1049416 | 0) >> 2] = 1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1049408 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1049412 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 1;
  HEAP32[(i64toi32_i32$1 + 1049400 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1049404 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1049392 | 0) >> 2] = 1;
  HEAP32[(i64toi32_i32$1 + 1049396 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1049384 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1049388 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 1;
  HEAP32[(i64toi32_i32$1 + 1049376 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 1049380 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 1049368 | 0) >> 2] = 1;
  HEAP32[(i64toi32_i32$1 + 1049372 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  $29 = 0;
  HEAP8[(i64toi32_i32$1 + 1049425 | 0) >> 0] = $29;
  HEAP8[(i64toi32_i32$1 + 1049426 | 0) >> 0] = $29 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 1049427 | 0) >> 0] = $29 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 1049428 | 0) >> 0] = $29 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 1049429 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 1049430 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 1049431 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 1049432 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  $1 = HEAP32[(0 + 1050048 | 0) >> 2] | 0;
  $2 = _ZN4core6option15Option$LT$T$GT$6expect17hfe0bcb06273b16deE(($1 ? 1050052 : 0) | 0) | 0;
  _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 216 | 0 | 0);
  _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 40 | 0 | 0, 13 | 0, 0 | 0);
  $3 = HEAP32[($0 + 44 | 0) >> 2] | 0;
  $4 = HEAP32[($0 + 40 | 0) >> 2] | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049103 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049104 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049105 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049106 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049107 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049108 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049109 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049110 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $32 = i64toi32_i32$0;
  i64toi32_i32$0 = $4;
  $30 = $32;
  HEAP8[i64toi32_i32$0 >> 0] = $30;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $30 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $30 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $30 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049108 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049109 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049110 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049111 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049112 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049113 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049114 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049115 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $35 = i64toi32_i32$1;
  i64toi32_i32$1 = $4 + 5 | 0;
  $31 = $35;
  HEAP8[i64toi32_i32$1 >> 0] = $31;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $31 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $31 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $31 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 32 | 0 | 0, 19 | 0, 0 | 0);
  $5 = HEAP32[($0 + 36 | 0) >> 2] | 0;
  $6 = HEAP32[($0 + 32 | 0) >> 2] | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049116 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049117 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049118 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049119 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049120 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049121 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049122 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049123 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $43 = i64toi32_i32$0;
  i64toi32_i32$0 = $6;
  $33 = $43;
  HEAP8[i64toi32_i32$0 >> 0] = $33;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $33 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $33 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $33 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  $34 = 0;
  $36 = i64toi32_i32$0 + 15 | 0;
  $37 = HEAPU8[($34 + 1049131 | 0) >> 0] | 0 | ((HEAPU8[($34 + 1049132 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($34 + 1049133 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($34 + 1049134 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  HEAP8[$36 >> 0] = $37;
  HEAP8[($36 + 1 | 0) >> 0] = $37 >>> 8 | 0;
  HEAP8[($36 + 2 | 0) >> 0] = $37 >>> 16 | 0;
  HEAP8[($36 + 3 | 0) >> 0] = $37 >>> 24 | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049124 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049125 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049126 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049127 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049128 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049129 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049130 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049131 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $49 = i64toi32_i32$1;
  i64toi32_i32$1 = $6 + 8 | 0;
  $38 = $49;
  HEAP8[i64toi32_i32$1 >> 0] = $38;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $38 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $38 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $38 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 24 | 0 | 0, 22 | 0, 0 | 0);
  $7 = HEAP32[($0 + 28 | 0) >> 2] | 0;
  $8 = HEAP32[($0 + 24 | 0) >> 2] | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049135 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049136 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049137 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049138 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049139 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049140 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049141 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049142 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $57 = i64toi32_i32$0;
  i64toi32_i32$0 = $8;
  $39 = $57;
  HEAP8[i64toi32_i32$0 >> 0] = $39;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $39 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $39 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $39 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049149 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049150 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049151 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049152 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049153 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049154 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049155 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049156 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $60 = i64toi32_i32$1;
  i64toi32_i32$1 = $8 + 14 | 0;
  $40 = $60;
  HEAP8[i64toi32_i32$1 >> 0] = $40;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $40 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $40 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $40 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049143 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049144 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049145 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049146 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049147 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049148 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049149 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049150 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $63 = i64toi32_i32$0;
  i64toi32_i32$0 = $8 + 8 | 0;
  $41 = $63;
  HEAP8[i64toi32_i32$0 >> 0] = $41;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $41 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $41 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $41 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 16 | 0 | 0, 20 | 0, 0 | 0);
  $9 = HEAP32[($0 + 20 | 0) >> 2] | 0;
  $10 = HEAP32[($0 + 16 | 0) >> 2] | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049157 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049158 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049159 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049160 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049161 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049162 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049163 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049164 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $71 = i64toi32_i32$1;
  i64toi32_i32$1 = $10;
  $42 = $71;
  HEAP8[i64toi32_i32$1 >> 0] = $42;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $42 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $42 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $42 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  $44 = 0;
  $45 = i64toi32_i32$1 + 16 | 0;
  $46 = HEAPU8[($44 + 1049173 | 0) >> 0] | 0 | ((HEAPU8[($44 + 1049174 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($44 + 1049175 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($44 + 1049176 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  HEAP8[$45 >> 0] = $46;
  HEAP8[($45 + 1 | 0) >> 0] = $46 >>> 8 | 0;
  HEAP8[($45 + 2 | 0) >> 0] = $46 >>> 16 | 0;
  HEAP8[($45 + 3 | 0) >> 0] = $46 >>> 24 | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049165 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049166 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049167 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049168 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049169 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049170 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049171 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049172 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $77 = i64toi32_i32$0;
  i64toi32_i32$0 = $10 + 8 | 0;
  $47 = $77;
  HEAP8[i64toi32_i32$0 >> 0] = $47;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $47 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $47 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $47 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 8 | 0 | 0, 21 | 0, 0 | 0);
  $11 = HEAP32[($0 + 12 | 0) >> 2] | 0;
  $12 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049177 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049178 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049179 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049180 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049181 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049182 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049183 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049184 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $85 = i64toi32_i32$1;
  i64toi32_i32$1 = $12;
  $48 = $85;
  HEAP8[i64toi32_i32$1 >> 0] = $48;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $48 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $48 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $48 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049190 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049191 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049192 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049193 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049194 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049195 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049196 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049197 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $88 = i64toi32_i32$0;
  i64toi32_i32$0 = $12 + 13 | 0;
  $50 = $88;
  HEAP8[i64toi32_i32$0 >> 0] = $50;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $50 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $50 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $50 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 1049185 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049186 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049187 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049188 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1049189 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049190 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049191 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 1049192 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $91 = i64toi32_i32$1;
  i64toi32_i32$1 = $12 + 8 | 0;
  $51 = $91;
  HEAP8[i64toi32_i32$1 >> 0] = $51;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $51 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $51 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $51 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$1 = $0 + 256 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $0 + 304 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = ($0 + 216 | 0) + 72 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = ($0 + 216 | 0) + 56 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($0 + 320 | 0) >> 2] = 13;
  HEAP32[($0 + 316 | 0) >> 2] = $3;
  HEAP32[($0 + 332 | 0) >> 2] = 19;
  HEAP32[($0 + 328 | 0) >> 2] = $5;
  HEAP32[($0 + 340 | 0) >> 2] = $7;
  HEAP32[($0 + 344 | 0) >> 2] = 22;
  i64toi32_i32$1 = $0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 248 | 0) >> 2] = 1;
  HEAP32[(i64toi32_i32$1 + 252 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 296 | 0) >> 2] = 1e3;
  HEAP32[(i64toi32_i32$1 + 300 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 280 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 284 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 232;
  HEAP32[(i64toi32_i32$1 + 264 | 0) >> 2] = -727379968;
  HEAP32[(i64toi32_i32$1 + 268 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[(i64toi32_i32$1 + 312 | 0) >> 2] = $4;
  $52 = 0;
  HEAP8[(i64toi32_i32$1 + 373 | 0) >> 0] = $52;
  HEAP8[(i64toi32_i32$1 + 374 | 0) >> 0] = $52 >>> 8 | 0;
  HEAP32[(i64toi32_i32$1 + 324 | 0) >> 2] = $6;
  HEAP32[(i64toi32_i32$1 + 336 | 0) >> 2] = $8;
  HEAP8[(i64toi32_i32$1 + 375 | 0) >> 0] = 0;
  HEAP32[(i64toi32_i32$1 + 368 | 0) >> 2] = 21;
  HEAP32[(i64toi32_i32$1 + 364 | 0) >> 2] = $11;
  HEAP32[(i64toi32_i32$1 + 356 | 0) >> 2] = 20;
  HEAP32[(i64toi32_i32$1 + 352 | 0) >> 2] = $9;
  HEAP8[(i64toi32_i32$1 + 376 | 0) >> 0] = 1;
  HEAP8[(i64toi32_i32$1 + 372 | 0) >> 0] = 0;
  HEAP32[(i64toi32_i32$1 + 360 | 0) >> 2] = $12;
  HEAP32[(i64toi32_i32$1 + 348 | 0) >> 2] = $10;
  i64toi32_i32$0 = 0;
  i64toi32_i32$1 = 0;
  _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17h8e1dc1f619fa85d6E($0 + 48 | 0 | 0, $2 | 0, 1 | 0, i64toi32_i32$0 | 0, 0 | 0, i64toi32_i32$1 | 0, $0 + 216 | 0 | 0);
  _ZN4core3ptr70drop_in_place$LT$core__option__Option$LT$inscribe_io__Inscribe$GT$$GT$17h1a96dba1b283c2f7E($0 + 48 | 0 | 0);
  _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 388 | 0 | 0);
  $6 = ($0 + 420 | 0) + 8 | 0;
  HEAP32[$6 >> 2] = 0;
  HEAP32[($0 + 420 | 0) >> 2] = 0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17hb6b29aa8c46e9d2cE($0 + 420 | 0 | 0, $0 + 388 | 0 | 0, 1e3 | 0, i64toi32_i32$1 | 0, 0 | 0, i64toi32_i32$0 | 0);
  HEAP32[(($0 + 48 | 0) + 8 | 0) >> 2] = HEAP32[$6 >> 2] | 0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 420 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 424 | 0) >> 2] | 0;
  $170 = i64toi32_i32$0;
  i64toi32_i32$0 = i64toi32_i32$2;
  HEAP32[(i64toi32_i32$0 + 48 | 0) >> 2] = $170;
  HEAP32[(i64toi32_i32$0 + 52 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = 0;
  _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17h4e7c8cc7e98634eaE(i64toi32_i32$2 + 216 | 0 | 0, ($1 ? 1050064 : 12) | 0, 1 | 0, i64toi32_i32$1 | 0, 0 | 0, i64toi32_i32$0 | 0, i64toi32_i32$2 + 48 | 0 | 0);
  label$2 : {
   if (!(HEAP32[(i64toi32_i32$2 + 216 | 0) >> 2] | 0)) {
    break label$2
   }
   _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h471fbf6adddb7064E(i64toi32_i32$2 + 220 | 0 | 0);
  }
  $6 = $1 ? 1050076 : 24;
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hb3dd13c6de4f8444E($6 | 0);
  HEAP32[$6 >> 2] = 0;
  HEAP32[($1 ? 1050084 : 32) >> 2] = 0;
  $6 = $1 ? 1050088 : 36;
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h0c4d75da50fb19d5E($6 | 0);
  HEAP32[$6 >> 2] = 0;
  HEAP32[($1 ? 1050096 : 44) >> 2] = 0;
  $6 = $1 ? 1050100 : 48;
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hca4999d8e988b0ceE($6 | 0);
  HEAP32[$6 >> 2] = 0;
  HEAP32[($1 ? 1050108 : 56) >> 2] = 0;
  $6 = $1 ? 1050112 : 60;
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h42f2b7007dce1cf9E($6 | 0);
  HEAP32[$6 >> 2] = 0;
  HEAP32[($1 ? 1050120 : 68) >> 2] = 0;
  $6 = $1 ? 1050124 : 72;
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hdeb241d0c8138ebeE($6 | 0);
  HEAP32[$6 >> 2] = 0;
  HEAP32[($1 ? 1050132 : 80) >> 2] = 0;
  $6 = $1 ? 1050136 : 84;
  _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h6b90a1698205b643E($6 | 0);
  HEAP32[$6 >> 2] = 0;
  HEAP32[($1 ? 1050144 : 92) >> 2] = 0;
  __stack_pointer = $0 + 432 | 0;
 }
 
 function _ZN4core3ptr70drop_in_place$LT$core__option__Option$LT$inscribe_io__Inscribe$GT$$GT$17h1a96dba1b283c2f7E($0) {
  $0 = $0 | 0;
  label$1 : {
   if ((HEAPU8[($0 + 160 | 0) >> 0] | 0 | 0) == (3 | 0)) {
    break label$1
   }
   _ZN4core3ptr42drop_in_place$LT$inscribe_io__Inscribe$GT$17h3737e270f8447fa3E($0 | 0);
  }
 }
 
 function _ZN4core6option15Option$LT$T$GT$6expect17hfe0bcb06273b16deE($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17h8e1dc1f619fa85d6E($0, $1, $2, $2$hi, $3, $3$hi, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  var $5 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $10 = 0, $11 = 0, $6 = 0, $13 = 0, i64toi32_i32$3 = 0, $12 = 0, $9 = 0, $7 = 0, $14$hi = 0, $15$hi = 0, $16 = 0, $8 = 0, $15 = 0, $14 = 0, $17 = 0, $20 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $52 = 0, $51 = 0, $51$hi = 0, $57 = 0, $57$hi = 0, $59 = 0, $62 = 0, $65 = 0, $18 = 0, $19 = 0, $335 = 0;
  $5 = __stack_pointer - 816 | 0;
  __stack_pointer = $5;
  label$1 : {
   label$2 : {
    label$3 : {
     $6 = HEAP32[$1 >> 2] | 0;
     if (!$6) {
      break label$3
     }
     $7 = HEAP32[($1 + 4 | 0) >> 2] | 0;
     label$4 : while (1) {
      $8 = HEAPU16[($6 + 2030 | 0) >> 1] | 0;
      $9 = $8 << 4 | 0;
      $10 = 0;
      $11 = -1;
      $12 = 8;
      label$5 : {
       label$6 : while (1) {
        label$7 : {
         if (($9 | 0) != ($10 | 0)) {
          break label$7
         }
         $11 = $8;
         break label$5;
        }
        $13 = $6 + $10 | 0;
        $11 = $11 + 1 | 0;
        $12 = $12 + 168 | 0;
        $10 = $10 + 16 | 0;
        label$8 : {
         i64toi32_i32$2 = $13;
         i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
         i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
         $14 = i64toi32_i32$0;
         $14$hi = i64toi32_i32$1;
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$1 = $14$hi;
         i64toi32_i32$2 = i64toi32_i32$0;
         i64toi32_i32$0 = $2$hi;
         i64toi32_i32$3 = $2;
         i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
         $51 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
         $51$hi = i64toi32_i32$0;
         i64toi32_i32$1 = $13 + 8 | 0;
         i64toi32_i32$0 = HEAP32[i64toi32_i32$1 >> 2] | 0;
         i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
         $15 = i64toi32_i32$0;
         $15$hi = i64toi32_i32$2;
         i64toi32_i32$2 = $3$hi;
         i64toi32_i32$2 = $15$hi;
         i64toi32_i32$1 = i64toi32_i32$0;
         i64toi32_i32$0 = $3$hi;
         i64toi32_i32$3 = $3;
         i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
         $57 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
         $57$hi = i64toi32_i32$0;
         i64toi32_i32$0 = $51$hi;
         i64toi32_i32$2 = $51;
         i64toi32_i32$1 = $57$hi;
         i64toi32_i32$3 = $57;
         i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
         i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
         i64toi32_i32$2 = 0;
         i64toi32_i32$3 = 0;
         $59 = (i64toi32_i32$0 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0;
         i64toi32_i32$0 = $14$hi;
         i64toi32_i32$0 = $2$hi;
         i64toi32_i32$0 = $14$hi;
         i64toi32_i32$3 = $14;
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$2 = $2;
         $62 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$3 >>> 0 > i64toi32_i32$2 >>> 0 | 0) | 0;
         i64toi32_i32$3 = $15$hi;
         i64toi32_i32$3 = $3$hi;
         i64toi32_i32$3 = $15$hi;
         i64toi32_i32$2 = $15;
         i64toi32_i32$0 = $3$hi;
         i64toi32_i32$1 = $3;
         $65 = i64toi32_i32$3 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
         i64toi32_i32$2 = i64toi32_i32$3;
         i64toi32_i32$2 = i64toi32_i32$0;
         i64toi32_i32$2 = i64toi32_i32$3;
         i64toi32_i32$1 = $15;
         i64toi32_i32$3 = i64toi32_i32$0;
         i64toi32_i32$0 = $3;
         switch ((((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & (i64toi32_i32$2 | 0) == ($3$hi | 0) | 0 ? $62 : $65) ? -1 : $59) & 255 | 0 | 0) {
         case 1:
          continue label$6;
         case 0:
          break label$8;
         default:
          break label$5;
         };
        }
        break label$6;
       };
       $10 = $6 + $12 | 0;
       memcpy($0 | 0, $10 | 0, 168 | 0) | 0;
       memcpy($10 | 0, $4 | 0, 168 | 0) | 0;
       break label$1;
      }
      label$9 : {
       if (!$7) {
        break label$9
       }
       $7 = $7 + -1 | 0;
       $6 = HEAP32[(($6 + ($11 << 2 | 0) | 0) + 2032 | 0) >> 2] | 0;
       continue label$4;
      }
      break label$4;
     };
     i64toi32_i32$1 = $2$hi;
     i64toi32_i32$2 = $5;
     HEAP32[($5 + 56 | 0) >> 2] = $2;
     HEAP32[($5 + 60 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[($5 + 80 | 0) >> 2] = $11;
     HEAP32[($5 + 76 | 0) >> 2] = 0;
     HEAP32[($5 + 72 | 0) >> 2] = $6;
     HEAP32[($5 + 84 | 0) >> 2] = $1;
     i64toi32_i32$1 = $3$hi;
     i64toi32_i32$2 = $5;
     HEAP32[($5 + 64 | 0) >> 2] = $3;
     HEAP32[($5 + 68 | 0) >> 2] = i64toi32_i32$1;
     label$10 : {
      label$11 : {
       label$12 : {
        label$13 : {
         if ($8 >>> 0 > 10 >>> 0) {
          break label$13
         }
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$1 = $3$hi;
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$2 = $3$hi;
         _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17he6cd70a61bedc155E($5 + 472 | 0 | 0, $5 + 72 | 0 | 0, $2 | 0, i64toi32_i32$1 | 0, $3 | 0, i64toi32_i32$2 | 0, $4 | 0);
         break label$12;
        }
        _ZN5alloc11collections5btree4node10splitpoint17h70a17e5a7894fc59E($5 + 472 | 0 | 0, $11 | 0);
        $13 = HEAP32[($5 + 472 | 0) >> 2] | 0;
        $7 = HEAP32[(($5 + 472 | 0) + 8 | 0) >> 2] | 0;
        $8 = HEAP32[($5 + 476 | 0) >> 2] | 0;
        $10 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h66cb030beb4be8a9E() | 0;
        $16 = HEAPU16[($6 + 2030 | 0) >> 1] | 0;
        $12 = $16 + ($13 ^ -1 | 0) | 0;
        HEAP16[($10 + 2030 | 0) >> 1] = $12;
        $11 = $6 + ($13 << 4 | 0) | 0;
        i64toi32_i32$0 = $11;
        i64toi32_i32$2 = HEAP32[i64toi32_i32$0 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
        $15 = i64toi32_i32$2;
        $15$hi = i64toi32_i32$1;
        i64toi32_i32$0 = i64toi32_i32$0 + 8 | 0;
        i64toi32_i32$1 = HEAP32[i64toi32_i32$0 >> 2] | 0;
        i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
        $14 = i64toi32_i32$1;
        $14$hi = i64toi32_i32$2;
        $11 = $6 + Math_imul($13, 168) | 0;
        memcpy($5 + 272 | 0 | 0, $11 + 176 | 0 | 0, 160 | 0) | 0;
        $38 = $11 + 337 | 0;
        HEAP32[($5 + 112 | 0) >> 2] = HEAPU8[$38 >> 0] | 0 | ((HEAPU8[($38 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($38 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($38 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $39 = $11 + 340 | 0;
        $40 = HEAPU8[$39 >> 0] | 0 | ((HEAPU8[($39 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($39 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($39 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        HEAP8[($5 + 115 | 0) >> 0] = $40;
        HEAP8[($5 + 116 | 0) >> 0] = $40 >>> 8 | 0;
        HEAP8[($5 + 117 | 0) >> 0] = $40 >>> 16 | 0;
        HEAP8[($5 + 118 | 0) >> 0] = $40 >>> 24 | 0;
        $9 = HEAPU8[($11 + 336 | 0) >> 0] | 0;
        _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 48 | 0 | 0, $12 | 0, $10 | 0);
        $17 = $13 + 1 | 0;
        $16 = $16 - $17 | 0;
        _ZN5alloc11collections5btree4node13move_to_slice17h3965fa9b2d5c31c0E($6 + ($17 << 4 | 0) | 0 | 0, $16 | 0, HEAP32[($5 + 48 | 0) >> 2] | 0 | 0, HEAP32[($5 + 52 | 0) >> 2] | 0 | 0);
        _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 40 | 0 | 0, $12 | 0, $10 + 176 | 0 | 0);
        _ZN5alloc11collections5btree4node13move_to_slice17hc5c5ca837cbcb09eE($11 + 344 | 0 | 0, $16 | 0, HEAP32[($5 + 40 | 0) >> 2] | 0 | 0, HEAP32[($5 + 44 | 0) >> 2] | 0 | 0);
        HEAP16[($6 + 2030 | 0) >> 1] = $13;
        HEAP32[($5 + 480 | 0) >> 2] = $7;
        HEAP32[($5 + 476 | 0) >> 2] = 0;
        HEAP32[($5 + 472 | 0) >> 2] = $8 ? $10 : $6;
        i64toi32_i32$2 = $2$hi;
        i64toi32_i32$2 = $3$hi;
        i64toi32_i32$2 = $2$hi;
        i64toi32_i32$1 = $3$hi;
        _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17he6cd70a61bedc155E($5 + 648 | 0 | 0, $5 + 472 | 0 | 0, $2 | 0, i64toi32_i32$2 | 0, $3 | 0, i64toi32_i32$1 | 0, $4 | 0);
        if (($9 | 0) == (3 | 0)) {
         break label$12
        }
        memcpy($5 + 472 | 0 | 0, $5 + 272 | 0 | 0, 160 | 0) | 0;
        $41 = $5 + 636 | 0;
        $42 = HEAPU8[($5 + 115 | 0) >> 0] | 0 | ((HEAPU8[($5 + 116 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($5 + 117 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($5 + 118 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        HEAP8[$41 >> 0] = $42;
        HEAP8[($41 + 1 | 0) >> 0] = $42 >>> 8 | 0;
        HEAP8[($41 + 2 | 0) >> 0] = $42 >>> 16 | 0;
        HEAP8[($41 + 3 | 0) >> 0] = $42 >>> 24 | 0;
        HEAP8[($5 + 632 | 0) >> 0] = $9;
        $43 = HEAP32[($5 + 112 | 0) >> 2] | 0;
        HEAP8[($5 + 633 | 0) >> 0] = $43;
        HEAP8[($5 + 634 | 0) >> 0] = $43 >>> 8 | 0;
        HEAP8[($5 + 635 | 0) >> 0] = $43 >>> 16 | 0;
        HEAP8[($5 + 636 | 0) >> 0] = $43 >>> 24 | 0;
        label$14 : {
         label$15 : {
          label$16 : {
           $9 = HEAP32[($6 + 2024 | 0) >> 2] | 0;
           if ($9) {
            break label$16
           }
           $12 = 0;
           $13 = 0;
           break label$15;
          }
          $18 = $5 + 633 | 0;
          $13 = 0;
          $16 = $10;
          i64toi32_i32$1 = $15$hi;
          $3 = $15;
          $3$hi = i64toi32_i32$1;
          i64toi32_i32$1 = $14$hi;
          $2 = $14;
          $2$hi = i64toi32_i32$1;
          $11 = 0;
          $7 = $6;
          label$17 : while (1) {
           $6 = $9;
           HEAP32[($5 + 92 | 0) >> 2] = $6;
           $10 = HEAPU16[($7 + 2028 | 0) >> 1] | 0;
           HEAP32[($5 + 100 | 0) >> 2] = $10;
           $12 = $11 + 1 | 0;
           HEAP32[($5 + 96 | 0) >> 2] = $12;
           if (($11 | 0) != ($13 | 0)) {
            break label$11
           }
           $17 = HEAPU16[($6 + 2030 | 0) >> 1] | 0;
           if ($17 >>> 0 < 11 >>> 0) {
            break label$14
           }
           _ZN5alloc11collections5btree4node10splitpoint17h70a17e5a7894fc59E($5 + 272 | 0 | 0, $10 | 0);
           $10 = HEAP32[($5 + 272 | 0) >> 2] | 0;
           $19 = HEAP32[($5 + 280 | 0) >> 2] | 0;
           $8 = HEAP32[($5 + 276 | 0) >> 2] | 0;
           $13 = _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h8e0e3bdf32143c50E() | 0;
           $20 = HEAPU16[($6 + 2030 | 0) >> 1] | 0;
           $9 = $20 + ($10 ^ -1 | 0) | 0;
           HEAP16[($13 + 2030 | 0) >> 1] = $9;
           $11 = $6 + ($10 << 4 | 0) | 0;
           i64toi32_i32$0 = $11 + 8 | 0;
           i64toi32_i32$1 = HEAP32[i64toi32_i32$0 >> 2] | 0;
           i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
           $14 = i64toi32_i32$1;
           $14$hi = i64toi32_i32$2;
           i64toi32_i32$0 = $11;
           i64toi32_i32$2 = HEAP32[i64toi32_i32$0 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
           $15 = i64toi32_i32$2;
           $15$hi = i64toi32_i32$1;
           $11 = $6 + Math_imul($10, 168) | 0;
           memcpy($5 + 272 | 0 | 0, $11 + 176 | 0 | 0, 160 | 0) | 0;
           $44 = $11 + 337 | 0;
           HEAP32[($5 + 808 | 0) >> 2] = HEAPU8[$44 >> 0] | 0 | ((HEAPU8[($44 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($44 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($44 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $45 = $11 + 340 | 0;
           $46 = HEAPU8[$45 >> 0] | 0 | ((HEAPU8[($45 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($45 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($45 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           HEAP8[($5 + 811 | 0) >> 0] = $46;
           HEAP8[($5 + 812 | 0) >> 0] = $46 >>> 8 | 0;
           HEAP8[($5 + 813 | 0) >> 0] = $46 >>> 16 | 0;
           HEAP8[($5 + 814 | 0) >> 0] = $46 >>> 24 | 0;
           $4 = HEAPU8[($11 + 336 | 0) >> 0] | 0;
           _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 32 | 0 | 0, $9 | 0, $13 | 0);
           $7 = $10 + 1 | 0;
           $20 = $20 - $7 | 0;
           _ZN5alloc11collections5btree4node13move_to_slice17h3965fa9b2d5c31c0E($6 + ($7 << 4 | 0) | 0 | 0, $20 | 0, HEAP32[($5 + 32 | 0) >> 2] | 0 | 0, HEAP32[($5 + 36 | 0) >> 2] | 0 | 0);
           _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 24 | 0 | 0, $9 | 0, $13 + 176 | 0 | 0);
           _ZN5alloc11collections5btree4node13move_to_slice17hc5c5ca837cbcb09eE($11 + 344 | 0 | 0, $20 | 0, HEAP32[($5 + 24 | 0) >> 2] | 0 | 0, HEAP32[($5 + 28 | 0) >> 2] | 0 | 0);
           HEAP16[($6 + 2030 | 0) >> 1] = $10;
           $11 = HEAPU16[($13 + 2030 | 0) >> 1] | 0;
           if ($11 >>> 0 >= 12 >>> 0) {
            break label$10
           }
           $335 = $17 - $10 | 0;
           $10 = $11 + 1 | 0;
           if (($335 | 0) != ($10 | 0)) {
            break label$11
           }
           memcpy($13 + 2032 | 0 | 0, ($6 + ($7 << 2 | 0) | 0) + 2032 | 0 | 0, $10 << 2 | 0 | 0) | 0;
           _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17hc661206b58ff007eE($5 + 16 | 0 | 0, $13 | 0, $12 | 0);
           $10 = HEAP32[($5 + 16 | 0) >> 2] | 0;
           $13 = HEAP32[($5 + 20 | 0) >> 2] | 0;
           memcpy($5 + 648 | 0 | 0, $5 + 272 | 0 | 0, 160 | 0) | 0;
           $47 = HEAPU8[($5 + 811 | 0) >> 0] | 0 | ((HEAPU8[($5 + 812 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($5 + 813 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($5 + 814 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           HEAP8[($5 + 643 | 0) >> 0] = $47;
           HEAP8[($5 + 644 | 0) >> 0] = $47 >>> 8 | 0;
           HEAP8[($5 + 645 | 0) >> 0] = $47 >>> 16 | 0;
           HEAP8[($5 + 646 | 0) >> 0] = $47 >>> 24 | 0;
           HEAP32[($5 + 640 | 0) >> 2] = HEAP32[($5 + 808 | 0) >> 2] | 0;
           HEAP32[($5 + 280 | 0) >> 2] = $19;
           HEAP32[($5 + 276 | 0) >> 2] = $8 ? $13 : $12;
           HEAP32[($5 + 272 | 0) >> 2] = $8 ? $10 : $6;
           i64toi32_i32$1 = $3$hi;
           i64toi32_i32$1 = $2$hi;
           i64toi32_i32$1 = $3$hi;
           i64toi32_i32$2 = $2$hi;
           _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h8ea896a6cb6e2d50E($5 + 272 | 0 | 0, $3 | 0, i64toi32_i32$1 | 0, $2 | 0, i64toi32_i32$2 | 0, $5 + 472 | 0 | 0, $16 | 0);
           memcpy($5 + 112 | 0 | 0, $5 + 648 | 0 | 0, 160 | 0) | 0;
           $48 = HEAPU8[($5 + 643 | 0) >> 0] | 0 | ((HEAPU8[($5 + 644 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($5 + 645 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($5 + 646 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           HEAP8[($5 + 107 | 0) >> 0] = $48;
           HEAP8[($5 + 108 | 0) >> 0] = $48 >>> 8 | 0;
           HEAP8[($5 + 109 | 0) >> 0] = $48 >>> 16 | 0;
           HEAP8[($5 + 110 | 0) >> 0] = $48 >>> 24 | 0;
           HEAP32[($5 + 104 | 0) >> 2] = HEAP32[($5 + 640 | 0) >> 2] | 0;
           if (($4 & 255 | 0 | 0) == (3 | 0)) {
            break label$12
           }
           memcpy($5 + 472 | 0 | 0, $5 + 112 | 0 | 0, 160 | 0) | 0;
           $37 = $18;
           $49 = HEAP32[($5 + 104 | 0) >> 2] | 0;
           HEAP8[$37 >> 0] = $49;
           HEAP8[($37 + 1 | 0) >> 0] = $49 >>> 8 | 0;
           HEAP8[($37 + 2 | 0) >> 0] = $49 >>> 16 | 0;
           HEAP8[($37 + 3 | 0) >> 0] = $49 >>> 24 | 0;
           $50 = $37 + 3 | 0;
           $52 = HEAPU8[($5 + 107 | 0) >> 0] | 0 | ((HEAPU8[($5 + 108 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($5 + 109 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($5 + 110 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           HEAP8[$50 >> 0] = $52;
           HEAP8[($50 + 1 | 0) >> 0] = $52 >>> 8 | 0;
           HEAP8[($50 + 2 | 0) >> 0] = $52 >>> 16 | 0;
           HEAP8[($50 + 3 | 0) >> 0] = $52 >>> 24 | 0;
           HEAP8[($5 + 632 | 0) >> 0] = $4;
           $16 = $10;
           i64toi32_i32$2 = $15$hi;
           $3 = $15;
           $3$hi = i64toi32_i32$2;
           i64toi32_i32$2 = $14$hi;
           $2 = $14;
           $2$hi = i64toi32_i32$2;
           $11 = $12;
           $7 = $6;
           $9 = HEAP32[($6 + 2024 | 0) >> 2] | 0;
           if ($9) {
            continue label$17
           }
           break label$17;
          };
         }
         $11 = memcpy($5 + 304 | 0 | 0, $5 + 472 | 0 | 0, 168 | 0) | 0;
         i64toi32_i32$2 = $14$hi;
         i64toi32_i32$1 = $5 + 296 | 0;
         HEAP32[i64toi32_i32$1 >> 2] = $14;
         HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$2;
         i64toi32_i32$2 = $15$hi;
         i64toi32_i32$1 = $5;
         HEAP32[($5 + 288 | 0) >> 2] = $15;
         HEAP32[($5 + 292 | 0) >> 2] = i64toi32_i32$2;
         HEAP32[($5 + 284 | 0) >> 2] = $13;
         HEAP32[($5 + 280 | 0) >> 2] = $10;
         HEAP32[($5 + 276 | 0) >> 2] = $12;
         HEAP32[($5 + 272 | 0) >> 2] = $6;
         if (!(HEAP32[$1 >> 2] | 0)) {
          break label$11
         }
         _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h6f9ba583b2a5aa77E($5 + 8 | 0 | 0, $1 | 0);
         i64toi32_i32$2 = $14$hi;
         i64toi32_i32$2 = $15$hi;
         i64toi32_i32$1 = $14$hi;
         _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17h365301a188a6cb2bE(HEAP32[($5 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5 + 12 | 0) >> 2] | 0 | 0, $15 | 0, i64toi32_i32$2 | 0, $14 | 0, i64toi32_i32$1 | 0, $11 | 0, $10 | 0, $13 | 0);
         break label$12;
        }
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$1 = $2$hi;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$2 = $2$hi;
        _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h8ea896a6cb6e2d50E($5 + 92 | 0 | 0, $3 | 0, i64toi32_i32$1 | 0, $2 | 0, i64toi32_i32$2 | 0, $5 + 472 | 0 | 0, $16 | 0);
       }
       HEAP32[($1 + 8 | 0) >> 2] = (HEAP32[($1 + 8 | 0) >> 2] | 0) + 1 | 0;
       break label$2;
      }
      _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
      wasm2js_trap();
     }
     _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
     wasm2js_trap();
    }
    $10 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h66cb030beb4be8a9E() | 0;
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$2 = $3$hi;
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$1 = $3$hi;
    _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h9915112e1660425cE($10 | 0, $2 | 0, i64toi32_i32$2 | 0, $3 | 0, i64toi32_i32$1 | 0, $4 | 0);
    i64toi32_i32$2 = $1;
    i64toi32_i32$1 = 1;
    HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = 0;
    HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] = i64toi32_i32$1;
    HEAP32[i64toi32_i32$2 >> 2] = $10;
   }
   HEAP8[($0 + 160 | 0) >> 0] = 3;
  }
  __stack_pointer = $5 + 816 | 0;
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17hb6b29aa8c46e9d2cE($0, $1, $2, $2$hi, $3, $3$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $4 = 0, $5 = 0, $7 = 0, $12 = 0, $11 = 0, $14 = 0, $15 = 0, $6 = 0, $8 = 0, $6$hi = 0, $13 = 0, $10 = 0, $20$hi = 0, $19 = 0, $20 = 0, $9 = 0, $16 = 0, $17 = 0, $18 = 0, $22 = 0, $23 = 0, $34 = 0, $39 = 0, $44 = 0, $50 = 0, $67 = 0, $72 = 0, $77 = 0, $87 = 0, $154 = 0, $161 = 0, $168 = 0, $171 = 0, $21 = 0, $278 = 0, $285 = 0, $292 = 0, $303 = 0, $355 = 0, $379 = 0, $385 = 0, $391 = 0, $394 = 0, $420 = 0, $423 = 0, $426 = 0, $429 = 0, $445 = 0, $449 = 0, $454 = 0, $459 = 0;
  $4 = __stack_pointer - 240 | 0;
  __stack_pointer = $4;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           $5 = HEAP32[$0 >> 2] | 0;
           if ($5) {
            break label$9
           }
           i64toi32_i32$2 = $1 + 24 | 0;
           i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $34 = i64toi32_i32$0;
           i64toi32_i32$0 = $4 + 80 | 0;
           HEAP32[i64toi32_i32$0 >> 2] = $34;
           HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
           i64toi32_i32$2 = $1 + 16 | 0;
           i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $39 = i64toi32_i32$1;
           i64toi32_i32$1 = $4 + 72 | 0;
           HEAP32[i64toi32_i32$1 >> 2] = $39;
           HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
           i64toi32_i32$2 = $1 + 8 | 0;
           i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $44 = i64toi32_i32$0;
           i64toi32_i32$0 = $4 + 64 | 0;
           HEAP32[i64toi32_i32$0 >> 2] = $44;
           HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
           HEAP32[($4 + 88 | 0) >> 2] = 0;
           HEAP32[($4 + 52 | 0) >> 2] = $0;
           i64toi32_i32$2 = $1;
           i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $50 = i64toi32_i32$1;
           i64toi32_i32$1 = $4;
           HEAP32[(i64toi32_i32$1 + 56 | 0) >> 2] = $50;
           HEAP32[(i64toi32_i32$1 + 60 | 0) >> 2] = i64toi32_i32$0;
           break label$8;
          }
          _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17h93726dd27de8c0d5E($4 + 112 | 0 | 0, $5 | 0, HEAP32[($0 + 4 | 0) >> 2] | 0 | 0, $1 | 0);
          $5 = ($4 + 112 | 0) + 4 | 0;
          if (!(HEAP32[($4 + 112 | 0) >> 2] | 0)) {
           break label$6
          }
          i64toi32_i32$2 = $1 + 24 | 0;
          i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $67 = i64toi32_i32$0;
          i64toi32_i32$0 = $4 + 80 | 0;
          HEAP32[i64toi32_i32$0 >> 2] = $67;
          HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
          i64toi32_i32$2 = $1 + 16 | 0;
          i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $72 = i64toi32_i32$1;
          i64toi32_i32$1 = $4 + 72 | 0;
          HEAP32[i64toi32_i32$1 >> 2] = $72;
          HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
          i64toi32_i32$2 = $1 + 8 | 0;
          i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $77 = i64toi32_i32$0;
          i64toi32_i32$0 = $4 + 64 | 0;
          HEAP32[i64toi32_i32$0 >> 2] = $77;
          HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
          HEAP32[($4 + 96 | 0) >> 2] = HEAP32[($5 + 8 | 0) >> 2] | 0;
          HEAP32[($4 + 52 | 0) >> 2] = $0;
          i64toi32_i32$2 = $1;
          i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $87 = i64toi32_i32$1;
          i64toi32_i32$1 = $4;
          HEAP32[(i64toi32_i32$1 + 56 | 0) >> 2] = $87;
          HEAP32[(i64toi32_i32$1 + 60 | 0) >> 2] = i64toi32_i32$0;
          i64toi32_i32$2 = $5;
          i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $6 = i64toi32_i32$0;
          $6$hi = i64toi32_i32$1;
          i64toi32_i32$0 = $4;
          HEAP32[(i64toi32_i32$0 + 88 | 0) >> 2] = $6;
          HEAP32[(i64toi32_i32$0 + 92 | 0) >> 2] = i64toi32_i32$1;
          $7 = $6;
          if ($7) {
           break label$7
          }
         }
         $1 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h0c63f60e47963ed6E() | 0;
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$1 = $3$hi;
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$0 = $3$hi;
         _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h179afb888e79da61E($1 | 0, $4 + 56 | 0 | 0, $2 | 0, i64toi32_i32$1 | 0, $3 | 0, i64toi32_i32$0 | 0);
         i64toi32_i32$1 = $0;
         i64toi32_i32$0 = 1;
         HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = 0;
         HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = i64toi32_i32$0;
         HEAP32[i64toi32_i32$1 >> 2] = $1;
         break label$1;
        }
        $8 = ($4 + 52 | 0) + 4 | 0;
        label$10 : {
         if ((HEAPU16[($7 + 534 | 0) >> 1] | 0) >>> 0 > 10 >>> 0) {
          break label$10
         }
         i64toi32_i32$0 = $2$hi;
         i64toi32_i32$0 = $3$hi;
         i64toi32_i32$0 = $2$hi;
         i64toi32_i32$1 = $3$hi;
         _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17haa98f0d67475cc39E($4 + 112 | 0 | 0, $4 + 88 | 0 | 0, $8 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, i64toi32_i32$1 | 0);
         break label$2;
        }
        _ZN5alloc11collections5btree4node10splitpoint17h70a17e5a7894fc59E($4 + 112 | 0 | 0, HEAP32[($4 + 96 | 0) >> 2] | 0 | 0);
        $1 = HEAP32[($4 + 112 | 0) >> 2] | 0;
        $9 = ($4 + 112 | 0) + 8 | 0;
        $10 = HEAP32[$9 >> 2] | 0;
        $11 = HEAP32[($4 + 116 | 0) >> 2] | 0;
        $12 = HEAP32[(($4 + 52 | 0) + 40 | 0) >> 2] | 0;
        $13 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h0c63f60e47963ed6E() | 0;
        $14 = HEAPU16[($7 + 534 | 0) >> 1] | 0;
        $15 = $14 + ($1 ^ -1 | 0) | 0;
        HEAP16[($13 + 534 | 0) >> 1] = $15;
        $16 = ($4 + 176 | 0) + 24 | 0;
        $5 = $7 + ($1 << 5 | 0) | 0;
        i64toi32_i32$2 = $5 + 24 | 0;
        i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $154 = i64toi32_i32$1;
        i64toi32_i32$1 = $16;
        HEAP32[i64toi32_i32$1 >> 2] = $154;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        $17 = ($4 + 176 | 0) + 16 | 0;
        i64toi32_i32$2 = $5 + 16 | 0;
        i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $161 = i64toi32_i32$0;
        i64toi32_i32$0 = $17;
        HEAP32[i64toi32_i32$0 >> 2] = $161;
        HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
        $18 = ($4 + 176 | 0) + 8 | 0;
        i64toi32_i32$2 = $5 + 8 | 0;
        i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $168 = i64toi32_i32$1;
        i64toi32_i32$1 = $18;
        HEAP32[i64toi32_i32$1 >> 2] = $168;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$2 = $5;
        i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $171 = i64toi32_i32$0;
        i64toi32_i32$0 = $4;
        HEAP32[(i64toi32_i32$0 + 176 | 0) >> 2] = $171;
        HEAP32[(i64toi32_i32$0 + 180 | 0) >> 2] = i64toi32_i32$1;
        $19 = $7 + 352 | 0;
        $5 = $19 + ($1 << 4 | 0) | 0;
        i64toi32_i32$2 = $5 + 8 | 0;
        i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $6 = i64toi32_i32$1;
        $6$hi = i64toi32_i32$0;
        i64toi32_i32$2 = $5;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $20 = i64toi32_i32$0;
        $20$hi = i64toi32_i32$1;
        _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17hb00f4c4f97b3449bE($4 + 40 | 0 | 0, $15 | 0, $13 | 0);
        $5 = $1 + 1 | 0;
        $14 = $14 - $5 | 0;
        _ZN5alloc11collections5btree4node13move_to_slice17h6431d4850cf540fdE($7 + ($5 << 5 | 0) | 0 | 0, $14 | 0, HEAP32[($4 + 40 | 0) >> 2] | 0 | 0, HEAP32[($4 + 44 | 0) >> 2] | 0 | 0);
        _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($4 + 32 | 0 | 0, $15 | 0, $13 + 352 | 0 | 0);
        _ZN5alloc11collections5btree4node13move_to_slice17h3965fa9b2d5c31c0E($19 + ($5 << 4 | 0) | 0 | 0, $14 | 0, HEAP32[($4 + 32 | 0) >> 2] | 0 | 0, HEAP32[($4 + 36 | 0) >> 2] | 0 | 0);
        HEAP16[($7 + 534 | 0) >> 1] = $1;
        HEAP32[($4 + 120 | 0) >> 2] = $10;
        $5 = 0;
        HEAP32[($4 + 116 | 0) >> 2] = $11 ? 0 : $12;
        HEAP32[($4 + 112 | 0) >> 2] = $11 ? $13 : $7;
        i64toi32_i32$1 = $2$hi;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$1 = $2$hi;
        i64toi32_i32$0 = $3$hi;
        _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17haa98f0d67475cc39E($4 + 208 | 0 | 0, $4 + 112 | 0 | 0, $8 | 0, $2 | 0, i64toi32_i32$1 | 0, $3 | 0, i64toi32_i32$0 | 0);
        label$11 : {
         label$12 : {
          $15 = HEAP32[($7 + 528 | 0) >> 2] | 0;
          if ($15) {
           break label$12
          }
          $1 = $7;
          $8 = $12;
          i64toi32_i32$0 = $20$hi;
          $3 = $20;
          $3$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $6$hi;
          $2 = $6;
          $2$hi = i64toi32_i32$0;
          $11 = $13;
          break label$11;
         }
         $5 = 0;
         label$13 : while (1) {
          $1 = $15;
          HEAP32[($4 + 100 | 0) >> 2] = $1;
          $7 = HEAPU16[($7 + 532 | 0) >> 1] | 0;
          HEAP32[($4 + 108 | 0) >> 2] = $7;
          $8 = $12 + 1 | 0;
          HEAP32[($4 + 104 | 0) >> 2] = $8;
          if (($12 | 0) != ($5 | 0)) {
           break label$5
          }
          $10 = HEAPU16[($1 + 534 | 0) >> 1] | 0;
          if ($10 >>> 0 < 11 >>> 0) {
           break label$3
          }
          _ZN5alloc11collections5btree4node10splitpoint17h70a17e5a7894fc59E($4 + 112 | 0 | 0, $7 | 0);
          $5 = HEAP32[($4 + 112 | 0) >> 2] | 0;
          $21 = HEAP32[($4 + 120 | 0) >> 2] | 0;
          $15 = HEAP32[($4 + 116 | 0) >> 2] | 0;
          $7 = _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h332d67e142d2c888E() | 0;
          $12 = $1 + ($5 << 5 | 0) | 0;
          i64toi32_i32$2 = $12 + 8 | 0;
          i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $278 = i64toi32_i32$0;
          i64toi32_i32$0 = $9;
          HEAP32[i64toi32_i32$0 >> 2] = $278;
          HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
          $22 = ($4 + 112 | 0) + 16 | 0;
          i64toi32_i32$2 = $12 + 16 | 0;
          i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $285 = i64toi32_i32$1;
          i64toi32_i32$1 = $22;
          HEAP32[i64toi32_i32$1 >> 2] = $285;
          HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
          $23 = ($4 + 112 | 0) + 24 | 0;
          i64toi32_i32$2 = $12 + 24 | 0;
          i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $292 = i64toi32_i32$0;
          i64toi32_i32$0 = $23;
          HEAP32[i64toi32_i32$0 >> 2] = $292;
          HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
          $14 = HEAPU16[($1 + 534 | 0) >> 1] | 0;
          $11 = $14 + ($5 ^ -1 | 0) | 0;
          HEAP16[($7 + 534 | 0) >> 1] = $11;
          i64toi32_i32$2 = $12;
          i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
          $303 = i64toi32_i32$1;
          i64toi32_i32$1 = $4;
          HEAP32[(i64toi32_i32$1 + 112 | 0) >> 2] = $303;
          HEAP32[(i64toi32_i32$1 + 116 | 0) >> 2] = i64toi32_i32$0;
          $19 = $1 + 352 | 0;
          $12 = $19 + ($5 << 4 | 0) | 0;
          i64toi32_i32$2 = $12 + 8 | 0;
          i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $2 = i64toi32_i32$0;
          $2$hi = i64toi32_i32$1;
          i64toi32_i32$2 = $12;
          i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $3 = i64toi32_i32$1;
          $3$hi = i64toi32_i32$0;
          _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17hb00f4c4f97b3449bE($4 + 24 | 0 | 0, $11 | 0, $7 | 0);
          $12 = $5 + 1 | 0;
          $14 = $14 - $12 | 0;
          _ZN5alloc11collections5btree4node13move_to_slice17h6431d4850cf540fdE($1 + ($12 << 5 | 0) | 0 | 0, $14 | 0, HEAP32[($4 + 24 | 0) >> 2] | 0 | 0, HEAP32[($4 + 28 | 0) >> 2] | 0 | 0);
          _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($4 + 16 | 0 | 0, $11 | 0, $7 + 352 | 0 | 0);
          _ZN5alloc11collections5btree4node13move_to_slice17h3965fa9b2d5c31c0E($19 + ($12 << 4 | 0) | 0 | 0, $14 | 0, HEAP32[($4 + 16 | 0) >> 2] | 0 | 0, HEAP32[($4 + 20 | 0) >> 2] | 0 | 0);
          HEAP16[($1 + 534 | 0) >> 1] = $5;
          $11 = HEAPU16[($7 + 534 | 0) >> 1] | 0;
          if ($11 >>> 0 >= 12 >>> 0) {
           break label$4
          }
          $355 = $10 - $5 | 0;
          $5 = $11 + 1 | 0;
          if (($355 | 0) != ($5 | 0)) {
           break label$5
          }
          memcpy($7 + 536 | 0 | 0, ($1 + ($12 << 2 | 0) | 0) + 536 | 0 | 0, $5 << 2 | 0 | 0) | 0;
          _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17hba9fa1629a435ac2E($4 + 8 | 0 | 0, $7 | 0, $8 | 0);
          $7 = ($4 + 208 | 0) + 8 | 0;
          i64toi32_i32$2 = $9;
          i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $379 = i64toi32_i32$0;
          i64toi32_i32$0 = $7;
          HEAP32[i64toi32_i32$0 >> 2] = $379;
          HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
          $12 = ($4 + 208 | 0) + 16 | 0;
          i64toi32_i32$2 = $22;
          i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $385 = i64toi32_i32$1;
          i64toi32_i32$1 = $12;
          HEAP32[i64toi32_i32$1 >> 2] = $385;
          HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
          $10 = ($4 + 208 | 0) + 24 | 0;
          i64toi32_i32$2 = $23;
          i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $391 = i64toi32_i32$0;
          i64toi32_i32$0 = $10;
          HEAP32[i64toi32_i32$0 >> 2] = $391;
          HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
          i64toi32_i32$2 = $4;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 112 | 0) >> 2] | 0;
          i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 116 | 0) >> 2] | 0;
          $394 = i64toi32_i32$1;
          i64toi32_i32$1 = i64toi32_i32$2;
          HEAP32[(i64toi32_i32$2 + 208 | 0) >> 2] = $394;
          HEAP32[(i64toi32_i32$2 + 212 | 0) >> 2] = i64toi32_i32$0;
          $11 = HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] | 0;
          $5 = HEAP32[(i64toi32_i32$2 + 12 | 0) >> 2] | 0;
          HEAP32[(i64toi32_i32$2 + 120 | 0) >> 2] = $21;
          HEAP32[(i64toi32_i32$2 + 116 | 0) >> 2] = $15 ? $5 : $8;
          HEAP32[(i64toi32_i32$2 + 112 | 0) >> 2] = $15 ? $11 : $1;
          i64toi32_i32$0 = $20$hi;
          i64toi32_i32$0 = $6$hi;
          i64toi32_i32$0 = $20$hi;
          i64toi32_i32$1 = $6$hi;
          _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h3f37137c41e80a88E(i64toi32_i32$2 + 112 | 0 | 0, i64toi32_i32$2 + 176 | 0 | 0, $20 | 0, i64toi32_i32$0 | 0, $6 | 0, i64toi32_i32$1 | 0, $13 | 0);
          i64toi32_i32$2 = $10;
          i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $420 = i64toi32_i32$1;
          i64toi32_i32$1 = $16;
          HEAP32[i64toi32_i32$1 >> 2] = $420;
          HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
          i64toi32_i32$2 = $12;
          i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $423 = i64toi32_i32$0;
          i64toi32_i32$0 = $17;
          HEAP32[i64toi32_i32$0 >> 2] = $423;
          HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
          i64toi32_i32$2 = $7;
          i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $426 = i64toi32_i32$1;
          i64toi32_i32$1 = $18;
          HEAP32[i64toi32_i32$1 >> 2] = $426;
          HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
          i64toi32_i32$2 = $4;
          i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 208 | 0) >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 212 | 0) >> 2] | 0;
          $429 = i64toi32_i32$0;
          i64toi32_i32$0 = i64toi32_i32$2;
          HEAP32[(i64toi32_i32$2 + 176 | 0) >> 2] = $429;
          HEAP32[(i64toi32_i32$2 + 180 | 0) >> 2] = i64toi32_i32$1;
          $13 = $11;
          i64toi32_i32$1 = $3$hi;
          $20 = $3;
          $20$hi = i64toi32_i32$1;
          i64toi32_i32$1 = $2$hi;
          $6 = $2;
          $6$hi = i64toi32_i32$1;
          $12 = $8;
          $7 = $1;
          $15 = HEAP32[($1 + 528 | 0) >> 2] | 0;
          if ($15) {
           continue label$13
          }
          break label$13;
         };
        }
        i64toi32_i32$1 = $2$hi;
        i64toi32_i32$0 = $4 + 168 | 0;
        HEAP32[i64toi32_i32$0 >> 2] = $2;
        HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
        i64toi32_i32$2 = $16;
        i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $445 = i64toi32_i32$1;
        i64toi32_i32$1 = ($4 + 112 | 0) + 40 | 0;
        HEAP32[i64toi32_i32$1 >> 2] = $445;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$2 = $17;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $449 = i64toi32_i32$0;
        i64toi32_i32$0 = $4 + 144 | 0;
        HEAP32[i64toi32_i32$0 >> 2] = $449;
        HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
        i64toi32_i32$2 = $18;
        i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $454 = i64toi32_i32$1;
        i64toi32_i32$1 = ($4 + 112 | 0) + 24 | 0;
        HEAP32[i64toi32_i32$1 >> 2] = $454;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$0 = $3$hi;
        i64toi32_i32$1 = $4;
        HEAP32[(i64toi32_i32$1 + 160 | 0) >> 2] = $3;
        HEAP32[(i64toi32_i32$1 + 164 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$2 = i64toi32_i32$1;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 176 | 0) >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 180 | 0) >> 2] | 0;
        $459 = i64toi32_i32$0;
        i64toi32_i32$0 = i64toi32_i32$2;
        HEAP32[(i64toi32_i32$2 + 128 | 0) >> 2] = $459;
        HEAP32[(i64toi32_i32$2 + 132 | 0) >> 2] = i64toi32_i32$1;
        HEAP32[(i64toi32_i32$2 + 124 | 0) >> 2] = $5;
        HEAP32[(i64toi32_i32$2 + 120 | 0) >> 2] = $11;
        HEAP32[(i64toi32_i32$2 + 116 | 0) >> 2] = $8;
        HEAP32[(i64toi32_i32$2 + 112 | 0) >> 2] = $1;
        if (!(HEAP32[$0 >> 2] | 0)) {
         break label$5
        }
        _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h54251fbae09dad1bE(i64toi32_i32$2 | 0, $0 | 0);
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$1 = $2$hi;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$0 = $2$hi;
        _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17h315fdef01be5400bE(HEAP32[i64toi32_i32$2 >> 2] | 0 | 0, HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0 | 0, (i64toi32_i32$2 + 112 | 0) + 16 | 0 | 0, $3 | 0, i64toi32_i32$1 | 0, $2 | 0, i64toi32_i32$0 | 0, $11 | 0, $5 | 0);
        break label$2;
       }
       $1 = HEAP32[($5 + 8 | 0) >> 2] | 0;
       HEAP32[($4 + 64 | 0) >> 2] = $1;
       i64toi32_i32$2 = $5;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $6 = i64toi32_i32$0;
       $6$hi = i64toi32_i32$1;
       i64toi32_i32$0 = $4;
       HEAP32[(i64toi32_i32$0 + 56 | 0) >> 2] = $6;
       HEAP32[(i64toi32_i32$0 + 60 | 0) >> 2] = i64toi32_i32$1;
       $1 = $6 + ($1 << 4 | 0) | 0;
       i64toi32_i32$1 = $3$hi;
       i64toi32_i32$0 = $1 + 360 | 0;
       HEAP32[i64toi32_i32$0 >> 2] = $3;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$1 = $2$hi;
       i64toi32_i32$0 = $1 + 352 | 0;
       HEAP32[i64toi32_i32$0 >> 2] = $2;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       break label$1;
      }
      _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
      wasm2js_trap();
     }
     _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
     wasm2js_trap();
    }
    i64toi32_i32$1 = $20$hi;
    i64toi32_i32$1 = $6$hi;
    i64toi32_i32$1 = $20$hi;
    i64toi32_i32$0 = $6$hi;
    _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h3f37137c41e80a88E($4 + 100 | 0 | 0, $4 + 176 | 0 | 0, $20 | 0, i64toi32_i32$1 | 0, $6 | 0, i64toi32_i32$0 | 0, $13 | 0);
   }
   HEAP32[($0 + 8 | 0) >> 2] = (HEAP32[($0 + 8 | 0) >> 2] | 0) + 1 | 0;
  }
  __stack_pointer = $4 + 240 | 0;
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17h4e7c8cc7e98634eaE($0, $1, $2, $2$hi, $3, $3$hi, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  var $5 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $6 = 0, $8 = 0, i64toi32_i32$2 = 0, $16 = 0, $15 = 0, $12 = 0, $11 = 0, $13 = 0, $14 = 0, $19 = 0, $7 = 0, $7$hi = 0, $17$hi = 0, $10 = 0, $17 = 0, $9 = 0, $18 = 0, $126 = 0, $20 = 0, $232 = 0, $280 = 0, $307 = 0, $336 = 0, $357 = 0, $403 = 0;
  $5 = __stack_pointer - 176 | 0;
  __stack_pointer = $5;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          $6 = HEAP32[$1 >> 2] | 0;
          if (!$6) {
           break label$8
          }
          i64toi32_i32$0 = $2$hi;
          i64toi32_i32$0 = $3$hi;
          i64toi32_i32$0 = $2$hi;
          i64toi32_i32$1 = $3$hi;
          _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17hba734900d5fd8398E($5 + 96 | 0 | 0, $6 | 0, HEAP32[($1 + 4 | 0) >> 2] | 0 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, i64toi32_i32$1 | 0);
          $6 = $5 + 100 | 0;
          if (!(HEAP32[($5 + 96 | 0) >> 2] | 0)) {
           break label$6
          }
          HEAP32[($5 + 72 | 0) >> 2] = HEAP32[($6 + 8 | 0) >> 2] | 0;
          i64toi32_i32$1 = i64toi32_i32$0;
          i64toi32_i32$0 = $5;
          HEAP32[($5 + 48 | 0) >> 2] = $2;
          HEAP32[($5 + 52 | 0) >> 2] = i64toi32_i32$1;
          HEAP32[($5 + 76 | 0) >> 2] = $1;
          i64toi32_i32$1 = $3$hi;
          i64toi32_i32$0 = $5;
          HEAP32[($5 + 56 | 0) >> 2] = $3;
          HEAP32[($5 + 60 | 0) >> 2] = i64toi32_i32$1;
          i64toi32_i32$2 = $6;
          i64toi32_i32$1 = HEAP32[$6 >> 2] | 0;
          i64toi32_i32$0 = HEAP32[($6 + 4 | 0) >> 2] | 0;
          $7 = i64toi32_i32$1;
          $7$hi = i64toi32_i32$0;
          i64toi32_i32$1 = $5;
          HEAP32[($5 + 64 | 0) >> 2] = $7;
          HEAP32[($5 + 68 | 0) >> 2] = i64toi32_i32$0;
          $8 = $7;
          if ($8) {
           break label$7
          }
         }
         $6 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h80892c38c9fece01E() | 0;
         i64toi32_i32$0 = $2$hi;
         i64toi32_i32$0 = $3$hi;
         i64toi32_i32$0 = $2$hi;
         i64toi32_i32$1 = $3$hi;
         _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17hfafd81ceb28202d0E($6 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, i64toi32_i32$1 | 0, $4 | 0);
         i64toi32_i32$0 = $1;
         i64toi32_i32$1 = 1;
         HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = 0;
         HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$1;
         HEAP32[i64toi32_i32$0 >> 2] = $6;
         $4 = 0;
         break label$1;
        }
        label$9 : {
         if ((HEAPU16[($8 + 314 | 0) >> 1] | 0) >>> 0 > 10 >>> 0) {
          break label$9
         }
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$1 = $3$hi;
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$0 = $3$hi;
         _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h0d103685e46983fdE($5 + 96 | 0 | 0, $5 + 64 | 0 | 0, $2 | 0, i64toi32_i32$1 | 0, $3 | 0, i64toi32_i32$0 | 0, $4 | 0);
         break label$2;
        }
        _ZN5alloc11collections5btree4node10splitpoint17h70a17e5a7894fc59E($5 + 96 | 0 | 0, HEAP32[(($5 + 48 | 0) + 24 | 0) >> 2] | 0 | 0);
        $6 = HEAP32[($5 + 96 | 0) >> 2] | 0;
        $9 = ($5 + 96 | 0) + 8 | 0;
        $10 = HEAP32[$9 >> 2] | 0;
        $11 = HEAP32[($5 + 100 | 0) >> 2] | 0;
        $12 = HEAP32[($5 + 68 | 0) >> 2] | 0;
        $13 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h80892c38c9fece01E() | 0;
        $14 = HEAPU16[($8 + 314 | 0) >> 1] | 0;
        $15 = $14 + ($6 ^ -1 | 0) | 0;
        HEAP16[($13 + 314 | 0) >> 1] = $15;
        $16 = $8 + ($6 << 4 | 0) | 0;
        i64toi32_i32$2 = $16;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $7 = i64toi32_i32$0;
        $7$hi = i64toi32_i32$1;
        i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
        i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $17 = i64toi32_i32$1;
        $17$hi = i64toi32_i32$0;
        $18 = ($5 + 144 | 0) + 8 | 0;
        $16 = $8 + Math_imul($6, 12) | 0;
        HEAP32[$18 >> 2] = HEAP32[($16 + 188 | 0) >> 2] | 0;
        i64toi32_i32$2 = $16 + 180 | 0;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $126 = i64toi32_i32$0;
        i64toi32_i32$0 = $5;
        HEAP32[($5 + 144 | 0) >> 2] = $126;
        HEAP32[($5 + 148 | 0) >> 2] = i64toi32_i32$1;
        _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 40 | 0 | 0, $15 | 0, $13 | 0);
        $19 = $6 + 1 | 0;
        $14 = $14 - $19 | 0;
        _ZN5alloc11collections5btree4node13move_to_slice17h3965fa9b2d5c31c0E($8 + ($19 << 4 | 0) | 0 | 0, $14 | 0, HEAP32[($5 + 40 | 0) >> 2] | 0 | 0, HEAP32[($5 + 44 | 0) >> 2] | 0 | 0);
        _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h61f5ff3bd92123c1E($5 + 32 | 0 | 0, $15 | 0, $13 + 180 | 0 | 0);
        _ZN5alloc11collections5btree4node13move_to_slice17h9c7224dd196c32dcE($16 + 192 | 0 | 0, $14 | 0, HEAP32[($5 + 32 | 0) >> 2] | 0 | 0, HEAP32[($5 + 36 | 0) >> 2] | 0 | 0);
        HEAP16[($8 + 314 | 0) >> 1] = $6;
        HEAP32[($5 + 104 | 0) >> 2] = $10;
        $6 = 0;
        HEAP32[($5 + 100 | 0) >> 2] = $11 ? 0 : $12;
        HEAP32[($5 + 96 | 0) >> 2] = $11 ? $13 : $8;
        i64toi32_i32$1 = $2$hi;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$1 = $2$hi;
        i64toi32_i32$0 = $3$hi;
        _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h0d103685e46983fdE($5 + 160 | 0 | 0, $5 + 96 | 0 | 0, $2 | 0, i64toi32_i32$1 | 0, $3 | 0, i64toi32_i32$0 | 0, $4 | 0);
        label$10 : {
         label$11 : {
          $16 = HEAP32[($8 + 176 | 0) >> 2] | 0;
          if ($16) {
           break label$11
          }
          $4 = $8;
          $11 = $12;
          i64toi32_i32$0 = $7$hi;
          $3 = $7;
          $3$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $17$hi;
          $2 = $17;
          $2$hi = i64toi32_i32$0;
          $15 = $13;
          break label$10;
         }
         $6 = 0;
         label$12 : while (1) {
          $4 = $16;
          HEAP32[($5 + 84 | 0) >> 2] = $4;
          $8 = HEAPU16[($8 + 312 | 0) >> 1] | 0;
          HEAP32[($5 + 92 | 0) >> 2] = $8;
          $11 = $12 + 1 | 0;
          HEAP32[($5 + 88 | 0) >> 2] = $11;
          if (($12 | 0) != ($6 | 0)) {
           break label$5
          }
          $14 = HEAPU16[($4 + 314 | 0) >> 1] | 0;
          if ($14 >>> 0 < 11 >>> 0) {
           break label$3
          }
          _ZN5alloc11collections5btree4node10splitpoint17h70a17e5a7894fc59E($5 + 96 | 0 | 0, $8 | 0);
          $6 = HEAP32[($5 + 96 | 0) >> 2] | 0;
          $20 = HEAP32[($5 + 104 | 0) >> 2] | 0;
          $10 = HEAP32[($5 + 100 | 0) >> 2] | 0;
          $8 = _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h022c95a564ee6564E() | 0;
          $12 = $4 + Math_imul($6, 12) | 0;
          HEAP32[$9 >> 2] = HEAP32[($12 + 188 | 0) >> 2] | 0;
          $19 = HEAPU16[($4 + 314 | 0) >> 1] | 0;
          $15 = $19 + ($6 ^ -1 | 0) | 0;
          HEAP16[($8 + 314 | 0) >> 1] = $15;
          i64toi32_i32$2 = $12 + 180 | 0;
          i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $232 = i64toi32_i32$0;
          i64toi32_i32$0 = $5;
          HEAP32[($5 + 96 | 0) >> 2] = $232;
          HEAP32[($5 + 100 | 0) >> 2] = i64toi32_i32$1;
          $16 = $4 + ($6 << 4 | 0) | 0;
          i64toi32_i32$2 = $16 + 8 | 0;
          i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $2 = i64toi32_i32$1;
          $2$hi = i64toi32_i32$0;
          i64toi32_i32$2 = $16;
          i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $3 = i64toi32_i32$0;
          $3$hi = i64toi32_i32$1;
          _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 24 | 0 | 0, $15 | 0, $8 | 0);
          $16 = $6 + 1 | 0;
          $19 = $19 - $16 | 0;
          _ZN5alloc11collections5btree4node13move_to_slice17h3965fa9b2d5c31c0E($4 + ($16 << 4 | 0) | 0 | 0, $19 | 0, HEAP32[($5 + 24 | 0) >> 2] | 0 | 0, HEAP32[($5 + 28 | 0) >> 2] | 0 | 0);
          _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h61f5ff3bd92123c1E($5 + 16 | 0 | 0, $15 | 0, $8 + 180 | 0 | 0);
          _ZN5alloc11collections5btree4node13move_to_slice17h9c7224dd196c32dcE($12 + 192 | 0 | 0, $19 | 0, HEAP32[($5 + 16 | 0) >> 2] | 0 | 0, HEAP32[($5 + 20 | 0) >> 2] | 0 | 0);
          HEAP16[($4 + 314 | 0) >> 1] = $6;
          $12 = HEAPU16[($8 + 314 | 0) >> 1] | 0;
          if ($12 >>> 0 >= 12 >>> 0) {
           break label$4
          }
          $280 = $14 - $6 | 0;
          $6 = $12 + 1 | 0;
          if (($280 | 0) != ($6 | 0)) {
           break label$5
          }
          memcpy($8 + 320 | 0 | 0, ($4 + ($16 << 2 | 0) | 0) + 320 | 0 | 0, $6 << 2 | 0 | 0) | 0;
          _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17he51a001dfa7ff86fE($5 + 8 | 0 | 0, $8 | 0, $11 | 0);
          $8 = ($5 + 160 | 0) + 8 | 0;
          HEAP32[$8 >> 2] = HEAP32[$9 >> 2] | 0;
          i64toi32_i32$2 = $5;
          i64toi32_i32$1 = HEAP32[($5 + 96 | 0) >> 2] | 0;
          i64toi32_i32$0 = HEAP32[($5 + 100 | 0) >> 2] | 0;
          $307 = i64toi32_i32$1;
          i64toi32_i32$1 = $5;
          HEAP32[($5 + 160 | 0) >> 2] = $307;
          HEAP32[($5 + 164 | 0) >> 2] = i64toi32_i32$0;
          $15 = HEAP32[($5 + 8 | 0) >> 2] | 0;
          $6 = HEAP32[($5 + 12 | 0) >> 2] | 0;
          HEAP32[($5 + 104 | 0) >> 2] = $20;
          HEAP32[($5 + 100 | 0) >> 2] = $10 ? $6 : $11;
          HEAP32[($5 + 96 | 0) >> 2] = $10 ? $15 : $4;
          i64toi32_i32$0 = $7$hi;
          i64toi32_i32$0 = $17$hi;
          i64toi32_i32$0 = $7$hi;
          i64toi32_i32$1 = $17$hi;
          _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h81983f8d8391e700E($5 + 96 | 0 | 0, $7 | 0, i64toi32_i32$0 | 0, $17 | 0, i64toi32_i32$1 | 0, $5 + 144 | 0 | 0, $13 | 0);
          HEAP32[$18 >> 2] = HEAP32[$8 >> 2] | 0;
          i64toi32_i32$2 = $5;
          i64toi32_i32$1 = HEAP32[($5 + 160 | 0) >> 2] | 0;
          i64toi32_i32$0 = HEAP32[($5 + 164 | 0) >> 2] | 0;
          $336 = i64toi32_i32$1;
          i64toi32_i32$1 = $5;
          HEAP32[($5 + 144 | 0) >> 2] = $336;
          HEAP32[($5 + 148 | 0) >> 2] = i64toi32_i32$0;
          $13 = $15;
          i64toi32_i32$0 = $3$hi;
          $7 = $3;
          $7$hi = i64toi32_i32$0;
          i64toi32_i32$0 = $2$hi;
          $17 = $2;
          $17$hi = i64toi32_i32$0;
          $12 = $11;
          $8 = $4;
          $16 = HEAP32[($8 + 176 | 0) >> 2] | 0;
          if ($16) {
           continue label$12
          }
          break label$12;
         };
        }
        i64toi32_i32$0 = $2$hi;
        i64toi32_i32$1 = ($5 + 96 | 0) + 24 | 0;
        HEAP32[i64toi32_i32$1 >> 2] = $2;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[($5 + 136 | 0) >> 2] = HEAP32[$18 >> 2] | 0;
        i64toi32_i32$0 = $3$hi;
        i64toi32_i32$1 = $5;
        HEAP32[($5 + 112 | 0) >> 2] = $3;
        HEAP32[($5 + 116 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$2 = $5;
        i64toi32_i32$0 = HEAP32[($5 + 144 | 0) >> 2] | 0;
        i64toi32_i32$1 = HEAP32[($5 + 148 | 0) >> 2] | 0;
        $357 = i64toi32_i32$0;
        i64toi32_i32$0 = $5;
        HEAP32[($5 + 128 | 0) >> 2] = $357;
        HEAP32[($5 + 132 | 0) >> 2] = i64toi32_i32$1;
        HEAP32[($5 + 108 | 0) >> 2] = $6;
        HEAP32[($5 + 104 | 0) >> 2] = $15;
        HEAP32[($5 + 100 | 0) >> 2] = $11;
        HEAP32[($5 + 96 | 0) >> 2] = $4;
        if (!(HEAP32[$1 >> 2] | 0)) {
         break label$5
        }
        _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h0176fd4ef1129792E($5 | 0, $1 | 0);
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$1 = $2$hi;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$0 = $2$hi;
        _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17ha9e95b989c567bd6E(HEAP32[$5 >> 2] | 0 | 0, HEAP32[($5 + 4 | 0) >> 2] | 0 | 0, $3 | 0, i64toi32_i32$1 | 0, $2 | 0, i64toi32_i32$0 | 0, $5 + 128 | 0 | 0, $15 | 0, $6 | 0);
        break label$2;
       }
       $8 = HEAP32[($6 + 8 | 0) >> 2] | 0;
       HEAP32[(($5 + 48 | 0) + 8 | 0) >> 2] = $8;
       i64toi32_i32$2 = $6;
       i64toi32_i32$0 = HEAP32[$6 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($6 + 4 | 0) >> 2] | 0;
       $3 = i64toi32_i32$0;
       $3$hi = i64toi32_i32$1;
       i64toi32_i32$0 = $5;
       HEAP32[($5 + 48 | 0) >> 2] = $3;
       HEAP32[($5 + 52 | 0) >> 2] = i64toi32_i32$1;
       $6 = $3 + Math_imul($8, 12) | 0;
       $8 = $6 + 180 | 0;
       i64toi32_i32$2 = $8;
       i64toi32_i32$1 = HEAP32[$8 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[($8 + 4 | 0) >> 2] | 0;
       $3 = i64toi32_i32$1;
       $3$hi = i64toi32_i32$0;
       i64toi32_i32$2 = $4;
       i64toi32_i32$0 = HEAP32[$4 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       $403 = i64toi32_i32$0;
       i64toi32_i32$0 = $8;
       HEAP32[i64toi32_i32$0 >> 2] = $403;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$1 = $3$hi;
       i64toi32_i32$0 = $0;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $3;
       HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$1;
       $6 = $6 + 188 | 0;
       $8 = HEAP32[$6 >> 2] | 0;
       HEAP32[$6 >> 2] = HEAP32[($4 + 8 | 0) >> 2] | 0;
       HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = $8;
       $4 = 1;
       break label$1;
      }
      _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
      wasm2js_trap();
     }
     _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
     wasm2js_trap();
    }
    i64toi32_i32$1 = $7$hi;
    i64toi32_i32$1 = $17$hi;
    i64toi32_i32$1 = $7$hi;
    i64toi32_i32$0 = $17$hi;
    _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h81983f8d8391e700E($5 + 84 | 0 | 0, $7 | 0, i64toi32_i32$1 | 0, $17 | 0, i64toi32_i32$0 | 0, $5 + 144 | 0 | 0, $13 | 0);
   }
   HEAP32[($1 + 8 | 0) >> 2] = (HEAP32[($1 + 8 | 0) >> 2] | 0) + 1 | 0;
   $4 = 0;
  }
  HEAP32[$0 >> 2] = $4;
  __stack_pointer = $5 + 176 | 0;
 }
 
 function handle() {
  var $0 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, $3 = 0, $7$hi = 0, $4 = 0, $13$hi = 0, $7 = 0, $1 = 0, $5 = 0, $13 = 0, $10$hi = 0, $2 = 0, $16$hi = 0, $16 = 0, $17$hi = 0, $10 = 0, $8$hi = 0, $14$hi = 0, $17 = 0, $8 = 0, $11$hi = 0, $14 = 0, i64toi32_i32$6 = 0, $9 = 0, $9$hi = 0, $11 = 0, $15 = 0, $15$hi = 0, $21 = 0, $6 = 0, $179 = 0, $19 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $188 = 0, $20 = 0, $22 = 0, $23 = 0, $24 = 0, $24$hi = 0, $189 = 0, $83 = 0, $86 = 0, $89 = 0, $95 = 0, $12 = 0, $12$hi = 0, $18 = 0, $18$hi = 0, $145 = 0, $148 = 0, $187 = 0, $192 = 0, $209 = 0, $216 = 0, $227 = 0, $232 = 0, $331 = 0, $340 = 0, $343 = 0, $343$hi = 0, $344$hi = 0, $347 = 0, $348$hi = 0, $361 = 0, $368 = 0, $375 = 0, $380 = 0, $394 = 0, $405 = 0, $462 = 0, $462$hi = 0, $465$hi = 0, $467$hi = 0, $470 = 0, $471$hi = 0, $472$hi = 0, $485 = 0, $487 = 0, $488 = 0, $488$hi = 0, $489 = 0, $489$hi = 0, $491 = 0, $497 = 0, $497$hi = 0, $500$hi = 0, $502$hi = 0, $505 = 0, $506$hi = 0, $507$hi = 0, $618 = 0, $623 = 0, $628 = 0, $631 = 0, $678 = 0, $685 = 0, $786 = 0, $786$hi = 0, $789$hi = 0, $792 = 0, $793$hi = 0, $794$hi = 0, $796 = 0, $798 = 0, $799 = 0, $799$hi = 0, $800 = 0, $800$hi = 0, $802 = 0, $806 = 0, $806$hi = 0, $809$hi = 0, $812 = 0, $813$hi = 0, $814$hi = 0, $823 = 0, $830 = 0, $913 = 0, $920 = 0, $927 = 0, $936 = 0, $946 = 0, $947 = 0, $956 = 0, $956$hi = 0, $959$hi = 0, $961 = 0, $962$hi = 0, $963$hi = 0, $981 = 0, $988 = 0, $995 = 0, $1004 = 0, $1025 = 0, $1032 = 0, $1039 = 0, $1043 = 0, $1071 = 0, $1076 = 0, $1081 = 0, $1084 = 0, $1095 = 0, $1095$hi = 0, $1098 = 0, $1098$hi = 0, $1122 = 0, $1129 = 0, $1136 = 0, $1148 = 0, $1178 = 0, $1180 = 0, $1183 = 0, $1183$hi = 0, $1187 = 0, $1188$hi = 0, $1190$hi = 0, $25 = 0, $26 = 0, $1205 = 0, $1210 = 0, $1213 = 0, $1216 = 0, $1221 = 0, $1221$hi = 0, $1225 = 0, $1225$hi = 0, $1257 = 0, $1263 = 0, $1269 = 0, $1272 = 0, $1321 = 0, $1337 = 0, $1378 = 0, $1379 = 0, $1379$hi = 0, $1383 = 0, $1384$hi = 0, $1416 = 0;
  $0 = __stack_pointer - 1200 | 0;
  __stack_pointer = $0;
  $1 = HEAP32[(0 + 1050048 | 0) >> 2] | 0;
  $2 = _ZN4core6option15Option$LT$T$GT$6expect17hfe0bcb06273b16deE(($1 ? 1050052 : 0) | 0) | 0;
  $3 = _ZN5gcore3msg4size17h30975cd15d439740E() | 0;
  HEAP32[($0 + 920 | 0) >> 2] = $3;
  label$1 : {
   label$2 : {
    if ($3 >>> 0 < 65537 >>> 0) {
     break label$2
    }
    _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 168 | 0 | 0, $3 | 0, 0 | 0);
    $4 = HEAP32[($0 + 168 | 0) >> 2] | 0;
    $5 = HEAP32[($0 + 172 | 0) >> 2] | 0;
    _ZN5gcore3msg18with_read_on_stack28_$u7b$$u7b$closure$u7d$$u7d$17h20a1e4478e2123ffE($0 + 224 | 0 | 0, $3 | 0, $4 | 0, $5 | 0);
    _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($4 | 0, $5 | 0);
    break label$1;
   }
   HEAP32[($0 + 952 | 0) >> 2] = $3;
   HEAP32[($0 + 416 | 0) >> 2] = $0 + 920 | 0;
   HEAP32[($0 + 412 | 0) >> 2] = $0 + 1016 | 0;
   HEAP32[($0 + 408 | 0) >> 2] = $0 + 952 | 0;
   c_with_alloca($3 | 0, 3 | 0, $0 + 408 | 0 | 0);
   memcpy($0 + 224 | 0 | 0, $0 + 1016 | 0 | 0, 184 | 0) | 0;
  }
  label$3 : {
   label$4 : {
    label$5 : {
     label$6 : {
      label$7 : {
       label$8 : {
        label$9 : {
         label$10 : {
          label$11 : {
           $3 = HEAPU8[($0 + 400 | 0) >> 0] | 0;
           if (($3 | 0) == (15 | 0)) {
            break label$11
           }
           $5 = ($0 + 192 | 0) + 8 | 0;
           i64toi32_i32$2 = ($0 + 224 | 0) + 128 | 0;
           i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $83 = i64toi32_i32$0;
           i64toi32_i32$0 = $5;
           HEAP32[i64toi32_i32$0 >> 2] = $83;
           HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
           i64toi32_i32$2 = $0;
           i64toi32_i32$1 = HEAPU8[($0 + 241 | 0) >> 0] | 0 | ((HEAPU8[($0 + 242 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 243 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 244 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$0 = HEAPU8[($0 + 245 | 0) >> 0] | 0 | ((HEAPU8[($0 + 246 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 247 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 248 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $86 = i64toi32_i32$1;
           i64toi32_i32$1 = $0;
           HEAP32[($0 + 208 | 0) >> 2] = $86;
           HEAP32[($0 + 212 | 0) >> 2] = i64toi32_i32$0;
           i64toi32_i32$2 = $0;
           i64toi32_i32$0 = HEAP32[($0 + 344 | 0) >> 2] | 0;
           i64toi32_i32$1 = HEAP32[($0 + 348 | 0) >> 2] | 0;
           $89 = i64toi32_i32$0;
           i64toi32_i32$0 = $0;
           HEAP32[($0 + 192 | 0) >> 2] = $89;
           HEAP32[($0 + 196 | 0) >> 2] = i64toi32_i32$1;
           $6 = ($0 + 224 | 0) + 24 | 0;
           i64toi32_i32$2 = $6;
           i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $95 = i64toi32_i32$1;
           i64toi32_i32$1 = $0;
           $179 = $95;
           HEAP8[($0 + 215 | 0) >> 0] = $179;
           HEAP8[($0 + 216 | 0) >> 0] = $179 >>> 8 | 0;
           HEAP8[($0 + 217 | 0) >> 0] = $179 >>> 16 | 0;
           HEAP8[($0 + 218 | 0) >> 0] = $179 >>> 24 | 0;
           HEAP8[($0 + 219 | 0) >> 0] = i64toi32_i32$0;
           HEAP8[($0 + 220 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
           HEAP8[($0 + 221 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
           HEAP8[($0 + 222 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
           i64toi32_i32$2 = ($0 + 224 | 0) + 8 | 0;
           i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $7 = i64toi32_i32$0;
           $7$hi = i64toi32_i32$1;
           i64toi32_i32$2 = ($0 + 224 | 0) + 40 | 0;
           i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $8 = i64toi32_i32$1;
           $8$hi = i64toi32_i32$0;
           i64toi32_i32$2 = ($0 + 224 | 0) + 56 | 0;
           i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $9 = i64toi32_i32$0;
           $9$hi = i64toi32_i32$1;
           i64toi32_i32$2 = ($0 + 224 | 0) + 72 | 0;
           i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $10 = i64toi32_i32$1;
           $10$hi = i64toi32_i32$0;
           i64toi32_i32$2 = ($0 + 224 | 0) + 88 | 0;
           i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $11 = i64toi32_i32$0;
           $11$hi = i64toi32_i32$1;
           i64toi32_i32$2 = ($0 + 224 | 0) + 104 | 0;
           i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $12 = i64toi32_i32$1;
           $12$hi = i64toi32_i32$0;
           i64toi32_i32$2 = $0;
           i64toi32_i32$0 = HEAP32[($0 + 224 | 0) >> 2] | 0;
           i64toi32_i32$1 = HEAP32[($0 + 228 | 0) >> 2] | 0;
           $13 = i64toi32_i32$0;
           $13$hi = i64toi32_i32$1;
           i64toi32_i32$2 = $0;
           i64toi32_i32$1 = HEAP32[($0 + 256 | 0) >> 2] | 0;
           i64toi32_i32$0 = HEAP32[($0 + 260 | 0) >> 2] | 0;
           $14 = i64toi32_i32$1;
           $14$hi = i64toi32_i32$0;
           i64toi32_i32$2 = $0;
           i64toi32_i32$0 = HEAP32[($0 + 272 | 0) >> 2] | 0;
           i64toi32_i32$1 = HEAP32[($0 + 276 | 0) >> 2] | 0;
           $15 = i64toi32_i32$0;
           $15$hi = i64toi32_i32$1;
           i64toi32_i32$2 = $0;
           i64toi32_i32$1 = HEAP32[($0 + 288 | 0) >> 2] | 0;
           i64toi32_i32$0 = HEAP32[($0 + 292 | 0) >> 2] | 0;
           $16 = i64toi32_i32$1;
           $16$hi = i64toi32_i32$0;
           i64toi32_i32$2 = $0;
           i64toi32_i32$0 = HEAP32[($0 + 304 | 0) >> 2] | 0;
           i64toi32_i32$1 = HEAP32[($0 + 308 | 0) >> 2] | 0;
           $17 = i64toi32_i32$0;
           $17$hi = i64toi32_i32$1;
           i64toi32_i32$2 = $0;
           i64toi32_i32$1 = HEAP32[($0 + 320 | 0) >> 2] | 0;
           i64toi32_i32$0 = HEAP32[($0 + 324 | 0) >> 2] | 0;
           $18 = i64toi32_i32$1;
           $18$hi = i64toi32_i32$0;
           $4 = HEAPU8[($0 + 240 | 0) >> 0] | 0;
           $19 = HEAP32[($0 + 336 | 0) >> 2] | 0;
           $20 = HEAP32[($0 + 340 | 0) >> 2] | 0;
           $21 = ($0 + 176 | 0) + 8 | 0;
           i64toi32_i32$2 = ($0 + 224 | 0) + 152 | 0;
           i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $145 = i64toi32_i32$0;
           i64toi32_i32$0 = $21;
           HEAP32[i64toi32_i32$0 >> 2] = $145;
           HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
           i64toi32_i32$2 = $0;
           i64toi32_i32$1 = HEAP32[($0 + 368 | 0) >> 2] | 0;
           i64toi32_i32$0 = HEAP32[($0 + 372 | 0) >> 2] | 0;
           $148 = i64toi32_i32$1;
           i64toi32_i32$1 = $0;
           HEAP32[($0 + 176 | 0) >> 2] = $148;
           HEAP32[($0 + 180 | 0) >> 2] = i64toi32_i32$0;
           $22 = HEAP32[($0 + 364 | 0) >> 2] | 0;
           $23 = HEAP32[($0 + 360 | 0) >> 2] | 0;
           i64toi32_i32$2 = $0;
           i64toi32_i32$0 = HEAP32[($0 + 384 | 0) >> 2] | 0;
           i64toi32_i32$1 = HEAP32[($0 + 388 | 0) >> 2] | 0;
           $24 = i64toi32_i32$0;
           $24$hi = i64toi32_i32$1;
           label$12 : {
            label$13 : {
             label$14 : {
              label$15 : {
               label$16 : {
                label$17 : {
                 label$18 : {
                  label$19 : {
                   label$20 : {
                    $3 = $3 + -3 | 0;
                    switch ((($3 & 255 | 0) >>> 0 < 12 >>> 0 ? $3 : 10) & 255 | 0 | 0) {
                    case 10:
                     break label$12;
                    case 4:
                     break label$14;
                    case 2:
                     break label$15;
                    case 11:
                     break label$16;
                    case 6:
                     break label$17;
                    case 3:
                     break label$18;
                    case 1:
                     break label$19;
                    case 7:
                    case 9:
                     break label$3;
                    case 5:
                    case 8:
                     break label$6;
                    default:
                     break label$20;
                    };
                   }
                   i64toi32_i32$1 = $12$hi;
                   i64toi32_i32$0 = ($0 + 408 | 0) + 104 | 0;
                   HEAP32[i64toi32_i32$0 >> 2] = $12;
                   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $11$hi;
                   i64toi32_i32$0 = ($0 + 408 | 0) + 88 | 0;
                   HEAP32[i64toi32_i32$0 >> 2] = $11;
                   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $10$hi;
                   i64toi32_i32$0 = ($0 + 408 | 0) + 72 | 0;
                   HEAP32[i64toi32_i32$0 >> 2] = $10;
                   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $9$hi;
                   i64toi32_i32$0 = ($0 + 408 | 0) + 56 | 0;
                   HEAP32[i64toi32_i32$0 >> 2] = $9;
                   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $8$hi;
                   i64toi32_i32$0 = ($0 + 408 | 0) + 40 | 0;
                   HEAP32[i64toi32_i32$0 >> 2] = $8;
                   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$2 = $0;
                   i64toi32_i32$1 = HEAPU8[($0 + 215 | 0) >> 0] | 0 | ((HEAPU8[($0 + 216 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 217 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 218 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                   i64toi32_i32$0 = HEAPU8[($0 + 219 | 0) >> 0] | 0 | ((HEAPU8[($0 + 220 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 221 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 222 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                   $187 = i64toi32_i32$1;
                   i64toi32_i32$1 = ($0 + 408 | 0) + 24 | 0;
                   $180 = $187;
                   HEAP8[i64toi32_i32$1 >> 0] = $180;
                   HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $180 >>> 8 | 0;
                   HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $180 >>> 16 | 0;
                   HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $180 >>> 24 | 0;
                   HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
                   HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
                   HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
                   HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
                   i64toi32_i32$2 = $5;
                   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                   $192 = i64toi32_i32$0;
                   i64toi32_i32$0 = ($0 + 408 | 0) + 128 | 0;
                   HEAP32[i64toi32_i32$0 >> 2] = $192;
                   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $13$hi;
                   i64toi32_i32$0 = $0;
                   HEAP32[($0 + 408 | 0) >> 2] = $13;
                   HEAP32[($0 + 412 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $18$hi;
                   i64toi32_i32$0 = $0;
                   HEAP32[($0 + 504 | 0) >> 2] = $18;
                   HEAP32[($0 + 508 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $17$hi;
                   i64toi32_i32$0 = $0;
                   HEAP32[($0 + 488 | 0) >> 2] = $17;
                   HEAP32[($0 + 492 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $16$hi;
                   i64toi32_i32$0 = $0;
                   HEAP32[($0 + 472 | 0) >> 2] = $16;
                   HEAP32[($0 + 476 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $15$hi;
                   i64toi32_i32$0 = $0;
                   HEAP32[($0 + 456 | 0) >> 2] = $15;
                   HEAP32[($0 + 460 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$1 = $14$hi;
                   i64toi32_i32$0 = $0;
                   HEAP32[($0 + 440 | 0) >> 2] = $14;
                   HEAP32[($0 + 444 | 0) >> 2] = i64toi32_i32$1;
                   HEAP8[($0 + 424 | 0) >> 0] = $4;
                   i64toi32_i32$2 = $0;
                   i64toi32_i32$1 = HEAP32[($0 + 208 | 0) >> 2] | 0;
                   i64toi32_i32$0 = HEAP32[($0 + 212 | 0) >> 2] | 0;
                   $209 = i64toi32_i32$1;
                   i64toi32_i32$1 = $0;
                   $181 = $209;
                   HEAP8[($0 + 425 | 0) >> 0] = $181;
                   HEAP8[($0 + 426 | 0) >> 0] = $181 >>> 8 | 0;
                   HEAP8[($0 + 427 | 0) >> 0] = $181 >>> 16 | 0;
                   HEAP8[($0 + 428 | 0) >> 0] = $181 >>> 24 | 0;
                   HEAP8[($0 + 429 | 0) >> 0] = i64toi32_i32$0;
                   HEAP8[($0 + 430 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
                   HEAP8[($0 + 431 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
                   HEAP8[($0 + 432 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
                   HEAP32[($0 + 524 | 0) >> 2] = $20;
                   HEAP32[($0 + 520 | 0) >> 2] = $19;
                   i64toi32_i32$2 = $0;
                   i64toi32_i32$0 = HEAP32[($0 + 192 | 0) >> 2] | 0;
                   i64toi32_i32$1 = HEAP32[($0 + 196 | 0) >> 2] | 0;
                   $216 = i64toi32_i32$0;
                   i64toi32_i32$0 = $0;
                   HEAP32[($0 + 528 | 0) >> 2] = $216;
                   HEAP32[($0 + 532 | 0) >> 2] = i64toi32_i32$1;
                   HEAP32[($0 + 548 | 0) >> 2] = $22;
                   HEAP32[($0 + 544 | 0) >> 2] = $23;
                   i64toi32_i32$1 = $7$hi;
                   i64toi32_i32$0 = $0;
                   HEAP32[($0 + 416 | 0) >> 2] = $7;
                   HEAP32[($0 + 420 | 0) >> 2] = i64toi32_i32$1;
                   i64toi32_i32$2 = $21;
                   i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                   $227 = i64toi32_i32$1;
                   i64toi32_i32$1 = ($0 + 408 | 0) + 152 | 0;
                   HEAP32[i64toi32_i32$1 >> 2] = $227;
                   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
                   i64toi32_i32$0 = $24$hi;
                   i64toi32_i32$1 = $0;
                   HEAP32[($0 + 568 | 0) >> 2] = $24;
                   HEAP32[($0 + 572 | 0) >> 2] = i64toi32_i32$0;
                   i64toi32_i32$2 = $0;
                   i64toi32_i32$0 = HEAP32[($0 + 176 | 0) >> 2] | 0;
                   i64toi32_i32$1 = HEAP32[($0 + 180 | 0) >> 2] | 0;
                   $232 = i64toi32_i32$0;
                   i64toi32_i32$0 = $0;
                   HEAP32[($0 + 552 | 0) >> 2] = $232;
                   HEAP32[($0 + 556 | 0) >> 2] = i64toi32_i32$1;
                   _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 576 | 0 | 0);
                   _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($0 + 224 | 0 | 0, $0 + 408 | 0 | 0);
                   $3 = HEAP32[$2 >> 2] | 0;
                   if (!$3) {
                    break label$5
                   }
                   $4 = HEAPU16[($3 + 2030 | 0) >> 1] | 0;
                   label$21 : {
                    $5 = HEAP32[($1 ? 1050056 : 4) >> 2] | 0;
                    if (!$5) {
                     break label$21
                    }
                    label$22 : while (1) {
                     $3 = HEAP32[(($3 + (($4 & 65535 | 0) << 2 | 0) | 0) + 2032 | 0) >> 2] | 0;
                     $4 = HEAPU16[($3 + 2030 | 0) >> 1] | 0;
                     $5 = $5 + -1 | 0;
                     if ($5) {
                      continue label$22
                     }
                     break label$22;
                    };
                   }
                   $4 = $4 & 65535 | 0;
                   if (!$4) {
                    break label$5
                   }
                   $5 = $4 + -1 | 0;
                   $4 = $3 + ($5 << 4 | 0) | 0;
                   $3 = ($3 + Math_imul($5, 168) | 0) + 176 | 0;
                   break label$4;
                  }
                  _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 704 | 0 | 0);
                  $3 = $1 ? 1050056 : 4;
                  i64toi32_i32$1 = $13$hi;
                  i64toi32_i32$1 = $7$hi;
                  i64toi32_i32$1 = $13$hi;
                  i64toi32_i32$0 = $7$hi;
                  if (!(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$12contains_key17h714880aa4b96e7c1E(HEAP32[$2 >> 2] | 0 | 0, HEAP32[$3 >> 2] | 0 | 0, $13 | 0, i64toi32_i32$1 | 0, $7 | 0, i64toi32_i32$0 | 0) | 0)) {
                   break label$10
                  }
                  i64toi32_i32$0 = i64toi32_i32$1;
                  i64toi32_i32$0 = $7$hi;
                  i64toi32_i32$0 = i64toi32_i32$1;
                  i64toi32_i32$1 = $7$hi;
                  _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h5063fbf37617e0beE($0 + 16 | 0 | 0, HEAP32[$2 >> 2] | 0 | 0, HEAP32[$3 >> 2] | 0 | 0, $13 | 0, i64toi32_i32$0 | 0, $7 | 0, i64toi32_i32$1 | 0);
                  _ZN4core6option15Option$LT$T$GT$6expect17he7a54e512a257d5bE($0 + 8 | 0 | 0, HEAP32[($0 + 16 | 0) >> 2] | 0 | 0, HEAP32[($0 + 20 | 0) >> 2] | 0 | 0);
                  _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($0 + 1016 | 0 | 0, HEAP32[($0 + 12 | 0) >> 2] | 0 | 0);
                  i64toi32_i32$2 = $0 + 1104 | 0;
                  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                  $10 = i64toi32_i32$1;
                  $10$hi = i64toi32_i32$0;
                  i64toi32_i32$2 = $0;
                  i64toi32_i32$0 = HEAP32[($0 + 1096 | 0) >> 2] | 0;
                  i64toi32_i32$1 = HEAP32[($0 + 1100 | 0) >> 2] | 0;
                  $16 = i64toi32_i32$0;
                  $16$hi = i64toi32_i32$1;
                  i64toi32_i32$1 = $13$hi;
                  i64toi32_i32$1 = $7$hi;
                  i64toi32_i32$1 = $13$hi;
                  i64toi32_i32$0 = $7$hi;
                  $3 = _ZN4core6option15Option$LT$T$GT$6expect17ha645ffcf0990b93eE(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$7get_mut17h83c186c6bc62b6b7E(HEAP32[($1 ? 1050064 : 12) >> 2] | 0 | 0, HEAP32[($1 ? 1050068 : 16) >> 2] | 0 | 0, $13 | 0, i64toi32_i32$1 | 0, $7 | 0, i64toi32_i32$0 | 0) | 0 | 0) | 0;
                  $3 = _ZN4core6option15Option$LT$T$GT$6expect17h6f6a758ec9ec7a1bE(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$7get_mut17ha531a209515f3aeaE(HEAP32[$3 >> 2] | 0 | 0, HEAP32[($3 + 4 | 0) >> 2] | 0 | 0, $0 + 704 | 0 | 0) | 0 | 0) | 0;
                  $331 = $3;
                  i64toi32_i32$0 = $16$hi;
                  i64toi32_i32$2 = $3;
                  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                  $17 = i64toi32_i32$0;
                  $17$hi = i64toi32_i32$1;
                  i64toi32_i32$1 = $16$hi;
                  i64toi32_i32$2 = $16;
                  i64toi32_i32$0 = $17$hi;
                  i64toi32_i32$3 = $17;
                  i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
                  i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
                  if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
                   i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
                  }
                  $16 = i64toi32_i32$4;
                  $16$hi = i64toi32_i32$5;
                  i64toi32_i32$2 = $331;
                  HEAP32[i64toi32_i32$2 >> 2] = i64toi32_i32$4;
                  HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$5;
                  $3 = $3 + 8 | 0;
                  $340 = $3;
                  i64toi32_i32$5 = $10$hi;
                  i64toi32_i32$1 = $3;
                  i64toi32_i32$5 = HEAP32[i64toi32_i32$1 >> 2] | 0;
                  i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
                  $343 = i64toi32_i32$5;
                  $343$hi = i64toi32_i32$2;
                  i64toi32_i32$2 = $10$hi;
                  i64toi32_i32$1 = $10;
                  i64toi32_i32$5 = $343$hi;
                  i64toi32_i32$3 = $343;
                  i64toi32_i32$0 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
                  i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$5 | 0;
                  if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
                   i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
                  }
                  $344$hi = i64toi32_i32$4;
                  i64toi32_i32$4 = $16$hi;
                  i64toi32_i32$4 = $17$hi;
                  i64toi32_i32$4 = $16$hi;
                  i64toi32_i32$2 = $16;
                  i64toi32_i32$1 = $17$hi;
                  i64toi32_i32$3 = $17;
                  $347 = i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0;
                  i64toi32_i32$2 = 0;
                  $348$hi = i64toi32_i32$2;
                  i64toi32_i32$2 = $344$hi;
                  i64toi32_i32$3 = i64toi32_i32$0;
                  i64toi32_i32$4 = $348$hi;
                  i64toi32_i32$1 = $347;
                  i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
                  i64toi32_i32$0 = i64toi32_i32$2 + i64toi32_i32$4 | 0;
                  if (i64toi32_i32$5 >>> 0 < i64toi32_i32$1 >>> 0) {
                   i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
                  }
                  i64toi32_i32$3 = $340;
                  HEAP32[i64toi32_i32$3 >> 2] = i64toi32_i32$5;
                  HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] = i64toi32_i32$0;
                  _ZN4core3ptr42drop_in_place$LT$inscribe_io__Inscribe$GT$17h3737e270f8447fa3E($0 + 1016 | 0 | 0);
                  i64toi32_i32$0 = $7$hi;
                  i64toi32_i32$3 = $0 + 1056 | 0;
                  HEAP32[i64toi32_i32$3 >> 2] = $7;
                  HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] = i64toi32_i32$0;
                  i64toi32_i32$2 = ($0 + 704 | 0) + 8 | 0;
                  i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                  i64toi32_i32$3 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                  $361 = i64toi32_i32$0;
                  i64toi32_i32$0 = ($0 + 1016 | 0) + 8 | 0;
                  HEAP32[i64toi32_i32$0 >> 2] = $361;
                  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$3;
                  i64toi32_i32$2 = ($0 + 704 | 0) + 16 | 0;
                  i64toi32_i32$3 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                  $368 = i64toi32_i32$3;
                  i64toi32_i32$3 = ($0 + 1016 | 0) + 16 | 0;
                  HEAP32[i64toi32_i32$3 >> 2] = $368;
                  HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] = i64toi32_i32$0;
                  i64toi32_i32$2 = ($0 + 704 | 0) + 24 | 0;
                  i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                  i64toi32_i32$3 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                  $375 = i64toi32_i32$0;
                  i64toi32_i32$0 = ($0 + 1016 | 0) + 24 | 0;
                  HEAP32[i64toi32_i32$0 >> 2] = $375;
                  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$3;
                  i64toi32_i32$3 = $13$hi;
                  i64toi32_i32$0 = $0;
                  HEAP32[($0 + 1048 | 0) >> 2] = $13;
                  HEAP32[($0 + 1052 | 0) >> 2] = i64toi32_i32$3;
                  i64toi32_i32$2 = $0;
                  i64toi32_i32$3 = HEAPU8[($0 + 704 | 0) >> 0] | 0 | ((HEAPU8[($0 + 705 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 706 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 707 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                  i64toi32_i32$0 = HEAPU8[($0 + 708 | 0) >> 0] | 0 | ((HEAPU8[($0 + 709 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 710 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 711 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                  $380 = i64toi32_i32$3;
                  i64toi32_i32$3 = $0;
                  HEAP32[($0 + 1016 | 0) >> 2] = $380;
                  HEAP32[($0 + 1020 | 0) >> 2] = i64toi32_i32$0;
                  HEAP8[($0 + 1192 | 0) >> 0] = 7;
                  _ZN4gstd3msg7encoded5reply17ha9d7a9a3242b8638E($0 + 224 | 0 | 0, $0 + 1016 | 0 | 0);
                  break label$3;
                 }
                 i64toi32_i32$0 = $9$hi;
                 i64toi32_i32$3 = ($0 + 640 | 0) + 24 | 0;
                 HEAP32[i64toi32_i32$3 >> 2] = $9;
                 HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] = i64toi32_i32$0;
                 i64toi32_i32$2 = $0;
                 i64toi32_i32$0 = HEAPU8[($0 + 215 | 0) >> 0] | 0 | ((HEAPU8[($0 + 216 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 217 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 218 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 i64toi32_i32$3 = HEAPU8[($0 + 219 | 0) >> 0] | 0 | ((HEAPU8[($0 + 220 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 221 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 222 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
                 $394 = i64toi32_i32$0;
                 i64toi32_i32$0 = ($0 + 608 | 0) + 24 | 0;
                 $182 = $394;
                 HEAP8[i64toi32_i32$0 >> 0] = $182;
                 HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $182 >>> 8 | 0;
                 HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $182 >>> 16 | 0;
                 HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $182 >>> 24 | 0;
                 HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$3;
                 HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$3 >>> 8 | 0;
                 HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$3 >>> 16 | 0;
                 HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$3 >>> 24 | 0;
                 i64toi32_i32$3 = $13$hi;
                 i64toi32_i32$0 = $0;
                 HEAP32[($0 + 608 | 0) >> 2] = $13;
                 HEAP32[($0 + 612 | 0) >> 2] = i64toi32_i32$3;
                 i64toi32_i32$3 = $15$hi;
                 i64toi32_i32$0 = $0;
                 HEAP32[($0 + 656 | 0) >> 2] = $15;
                 HEAP32[($0 + 660 | 0) >> 2] = i64toi32_i32$3;
                 i64toi32_i32$3 = $14$hi;
                 i64toi32_i32$0 = $0;
                 HEAP32[($0 + 640 | 0) >> 2] = $14;
                 HEAP32[($0 + 644 | 0) >> 2] = i64toi32_i32$3;
                 HEAP8[($0 + 624 | 0) >> 0] = $4;
                 i64toi32_i32$2 = $0;
                 i64toi32_i32$3 = HEAP32[($0 + 208 | 0) >> 2] | 0;
                 i64toi32_i32$0 = HEAP32[($0 + 212 | 0) >> 2] | 0;
                 $405 = i64toi32_i32$3;
                 i64toi32_i32$3 = $0;
                 $183 = $405;
                 HEAP8[($0 + 625 | 0) >> 0] = $183;
                 HEAP8[($0 + 626 | 0) >> 0] = $183 >>> 8 | 0;
                 HEAP8[($0 + 627 | 0) >> 0] = $183 >>> 16 | 0;
                 HEAP8[($0 + 628 | 0) >> 0] = $183 >>> 24 | 0;
                 HEAP8[($0 + 629 | 0) >> 0] = i64toi32_i32$0;
                 HEAP8[($0 + 630 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
                 HEAP8[($0 + 631 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
                 HEAP8[($0 + 632 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
                 i64toi32_i32$0 = $7$hi;
                 i64toi32_i32$3 = $0;
                 HEAP32[($0 + 616 | 0) >> 2] = $7;
                 HEAP32[($0 + 620 | 0) >> 2] = i64toi32_i32$0;
                 i64toi32_i32$0 = $8$hi;
                 i64toi32_i32$3 = $0;
                 HEAP32[($0 + 648 | 0) >> 2] = $8;
                 HEAP32[($0 + 652 | 0) >> 2] = i64toi32_i32$0;
                 _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 672 | 0 | 0);
                 i64toi32_i32$0 = $16$hi;
                 i64toi32_i32$0 = $10$hi;
                 i64toi32_i32$0 = $16$hi;
                 i64toi32_i32$3 = $10$hi;
                 if (!(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$12contains_key17h714880aa4b96e7c1E(HEAP32[$2 >> 2] | 0 | 0, HEAP32[($1 ? 1050056 : 4) >> 2] | 0 | 0, $16 | 0, i64toi32_i32$0 | 0, $10 | 0, i64toi32_i32$3 | 0) | 0)) {
                  break label$10
                 }
                 $3 = $1 ? 1050064 : 12;
                 $4 = $1 ? 1050068 : 16;
                 i64toi32_i32$3 = i64toi32_i32$0;
                 i64toi32_i32$3 = $10$hi;
                 i64toi32_i32$3 = i64toi32_i32$0;
                 i64toi32_i32$0 = $10$hi;
                 _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbcf2255af67c51f4E($0 + 1016 | 0 | 0, _ZN4core6option15Option$LT$T$GT$6expect17ha645ffcf0990b93eE(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$7get_mut17h83c186c6bc62b6b7E(HEAP32[$3 >> 2] | 0 | 0, HEAP32[$4 >> 2] | 0 | 0, $16 | 0, i64toi32_i32$3 | 0, $10 | 0, i64toi32_i32$0 | 0) | 0 | 0) | 0 | 0);
                 $1 = HEAP32[($0 + 1016 | 0) >> 2] | 0;
                 $2 = HEAP32[($0 + 1020 | 0) >> 2] | 0;
                 _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h716bbfb2b20040cdE($0 + 72 | 0 | 0, $1 | 0, $2 | 0, $0 + 608 | 0 | 0);
                 $5 = _ZN4core6option15Option$LT$T$GT$6expect17h28a2ef374e8a37deE(HEAP32[($0 + 72 | 0) >> 2] | 0 | 0, HEAP32[($0 + 76 | 0) >> 2] | 0 | 0) | 0;
                 i64toi32_i32$0 = i64toi32_i32$3;
                 i64toi32_i32$0 = $10$hi;
                 i64toi32_i32$2 = $5;
                 i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                 i64toi32_i32$3 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                 $7 = i64toi32_i32$0;
                 $7$hi = i64toi32_i32$3;
                 i64toi32_i32$3 = $17$hi;
                 i64toi32_i32$3 = $7$hi;
                 i64toi32_i32$2 = i64toi32_i32$0;
                 i64toi32_i32$0 = $17$hi;
                 i64toi32_i32$1 = $17;
                 i64toi32_i32$4 = i64toi32_i32$2 - i64toi32_i32$1 | 0;
                 i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$1 >>> 0;
                 i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
                 i64toi32_i32$5 = i64toi32_i32$3 - i64toi32_i32$5 | 0;
                 $462 = i64toi32_i32$4;
                 $462$hi = i64toi32_i32$5;
                 i64toi32_i32$3 = $5 + 8 | 0;
                 i64toi32_i32$5 = HEAP32[i64toi32_i32$3 >> 2] | 0;
                 i64toi32_i32$2 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
                 $465$hi = i64toi32_i32$2;
                 i64toi32_i32$2 = $11$hi;
                 i64toi32_i32$2 = $465$hi;
                 i64toi32_i32$3 = i64toi32_i32$5;
                 i64toi32_i32$5 = $11$hi;
                 i64toi32_i32$1 = $11;
                 i64toi32_i32$0 = i64toi32_i32$3 - i64toi32_i32$1 | 0;
                 i64toi32_i32$6 = i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0;
                 i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$5 | 0;
                 i64toi32_i32$4 = i64toi32_i32$2 - i64toi32_i32$4 | 0;
                 $467$hi = i64toi32_i32$4;
                 i64toi32_i32$4 = $7$hi;
                 i64toi32_i32$4 = $17$hi;
                 i64toi32_i32$4 = $7$hi;
                 i64toi32_i32$2 = $7;
                 i64toi32_i32$3 = $17$hi;
                 i64toi32_i32$1 = $17;
                 $470 = i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 < i64toi32_i32$1 >>> 0 | 0) | 0;
                 i64toi32_i32$2 = 0;
                 $471$hi = i64toi32_i32$2;
                 i64toi32_i32$2 = $467$hi;
                 i64toi32_i32$1 = i64toi32_i32$0;
                 i64toi32_i32$4 = $471$hi;
                 i64toi32_i32$3 = $470;
                 i64toi32_i32$5 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
                 i64toi32_i32$6 = i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0;
                 i64toi32_i32$0 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
                 i64toi32_i32$0 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
                 $472$hi = i64toi32_i32$0;
                 i64toi32_i32$0 = $16$hi;
                 i64toi32_i32$1 = $10$hi;
                 i64toi32_i32$2 = $462$hi;
                 i64toi32_i32$3 = $472$hi;
                 _ZN11inscribe_io16InscribeIoStates19update_amt_index_id17hd5bbbc4bc640262cE(HEAP32[$3 >> 2] | 0 | 0, HEAP32[$4 >> 2] | 0 | 0, $16 | 0, i64toi32_i32$0 | 0, $10 | 0, i64toi32_i32$1 | 0, $0 + 608 | 0 | 0, $462 | 0, i64toi32_i32$2 | 0, i64toi32_i32$5 | 0, i64toi32_i32$3 | 0);
                 _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h716bbfb2b20040cdE($0 + 64 | 0 | 0, $1 | 0, $2 | 0, $0 + 640 | 0 | 0);
                 $5 = _ZN4core6option15Option$LT$T$GT$6expect17h28a2ef374e8a37deE(HEAP32[($0 + 64 | 0) >> 2] | 0 | 0, HEAP32[($0 + 68 | 0) >> 2] | 0 | 0) | 0;
                 $485 = HEAP32[$3 >> 2] | 0;
                 $487 = HEAP32[$4 >> 2] | 0;
                 i64toi32_i32$3 = i64toi32_i32$0;
                 $488 = $16;
                 $488$hi = i64toi32_i32$0;
                 i64toi32_i32$3 = i64toi32_i32$1;
                 $489 = $10;
                 $489$hi = i64toi32_i32$1;
                 $491 = $0 + 640 | 0;
                 i64toi32_i32$1 = $5;
                 i64toi32_i32$3 = HEAP32[i64toi32_i32$1 >> 2] | 0;
                 i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
                 $7 = i64toi32_i32$3;
                 $7$hi = i64toi32_i32$2;
                 i64toi32_i32$2 = $17$hi;
                 i64toi32_i32$2 = $7$hi;
                 i64toi32_i32$1 = i64toi32_i32$3;
                 i64toi32_i32$3 = $17$hi;
                 i64toi32_i32$0 = $17;
                 i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
                 i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
                 if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
                  i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
                 }
                 $13 = i64toi32_i32$4;
                 $13$hi = i64toi32_i32$5;
                 $497 = i64toi32_i32$4;
                 $497$hi = i64toi32_i32$5;
                 i64toi32_i32$2 = $5 + 8 | 0;
                 i64toi32_i32$5 = HEAP32[i64toi32_i32$2 >> 2] | 0;
                 i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
                 $500$hi = i64toi32_i32$1;
                 i64toi32_i32$1 = $11$hi;
                 i64toi32_i32$1 = $500$hi;
                 i64toi32_i32$2 = i64toi32_i32$5;
                 i64toi32_i32$5 = $11$hi;
                 i64toi32_i32$0 = $11;
                 i64toi32_i32$3 = i64toi32_i32$2 + i64toi32_i32$0 | 0;
                 i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$5 | 0;
                 if (i64toi32_i32$3 >>> 0 < i64toi32_i32$0 >>> 0) {
                  i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
                 }
                 $502$hi = i64toi32_i32$4;
                 i64toi32_i32$4 = $13$hi;
                 i64toi32_i32$4 = $7$hi;
                 i64toi32_i32$4 = $13$hi;
                 i64toi32_i32$1 = $13;
                 i64toi32_i32$2 = $7$hi;
                 i64toi32_i32$0 = $7;
                 $505 = i64toi32_i32$4 >>> 0 < i64toi32_i32$2 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$1 >>> 0 < i64toi32_i32$0 >>> 0 | 0) | 0;
                 i64toi32_i32$1 = 0;
                 $506$hi = i64toi32_i32$1;
                 i64toi32_i32$1 = $502$hi;
                 i64toi32_i32$0 = i64toi32_i32$3;
                 i64toi32_i32$4 = $506$hi;
                 i64toi32_i32$2 = $505;
                 i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$2 | 0;
                 i64toi32_i32$3 = i64toi32_i32$1 + i64toi32_i32$4 | 0;
                 if (i64toi32_i32$5 >>> 0 < i64toi32_i32$2 >>> 0) {
                  i64toi32_i32$3 = i64toi32_i32$3 + 1 | 0
                 }
                 $507$hi = i64toi32_i32$3;
                 i64toi32_i32$3 = $488$hi;
                 i64toi32_i32$0 = $489$hi;
                 i64toi32_i32$1 = $497$hi;
                 i64toi32_i32$2 = $507$hi;
                 _ZN11inscribe_io16InscribeIoStates19update_amt_index_id17hd5bbbc4bc640262cE($485 | 0, $487 | 0, $488 | 0, i64toi32_i32$3 | 0, $489 | 0, i64toi32_i32$0 | 0, $491 | 0, $497 | 0, i64toi32_i32$1 | 0, i64toi32_i32$5 | 0, i64toi32_i32$2 | 0);
                 if (!(_ZN69_$LT$T$u20$as$u20$core__array__equality__SpecArrayEq$LT$U$C$_$GT$$GT$7spec_eq17hce9f348aa2b800ebE($0 + 608 | 0 | 0, $0 + 672 | 0 | 0) | 0)) {
                  break label$9
                 }
                 _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h471fbf6adddb7064E($0 + 1016 | 0 | 0);
                 i64toi32_i32$1 = $0;
                 i64toi32_i32$2 = 0;
                 HEAP32[($0 + 960 | 0) >> 2] = 0;
                 HEAP32[($0 + 964 | 0) >> 2] = i64toi32_i32$2;
                 i64toi32_i32$1 = $0;
                 i64toi32_i32$2 = 0;
                 HEAP32[($0 + 952 | 0) >> 2] = 0;
                 HEAP32[($0 + 956 | 0) >> 2] = i64toi32_i32$2;
                 HEAP32[($0 + 924 | 0) >> 2] = 8;
                 HEAP32[($0 + 920 | 0) >> 2] = 1049198;
                 label$23 : {
                  $3 = _ZN18parity_scale_codec5codec6Encode12encoded_size17hc6e8efe12e6eba05E(1049198 | 0, 8 | 0) | 0;
                  if ($3 >>> 0 < 65537 >>> 0) {
                   break label$23
                  }
                  _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 56 | 0 | 0, $3 | 0, 0 | 0);
                  $3 = HEAP32[($0 + 56 | 0) >> 2] | 0;
                  $4 = HEAP32[($0 + 60 | 0) >> 2] | 0;
                  i64toi32_i32$2 = 0;
                  i64toi32_i32$1 = 0;
                  _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17hb62a7ad89729b3e9E($0 + 224 | 0 | 0, 1049198 | 0, 8 | 0, 0 | 0, i64toi32_i32$2 | 0, 0 | 0, i64toi32_i32$1 | 0, $3 | 0, $4 | 0);
                  _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($3 | 0, $4 | 0);
                  break label$3;
                 }
                 HEAP32[($0 + 904 | 0) >> 2] = $3;
                 HEAP32[($0 + 420 | 0) >> 2] = $0 + 952 | 0;
                 HEAP32[($0 + 416 | 0) >> 2] = $0 + 920 | 0;
                 HEAP32[($0 + 412 | 0) >> 2] = $0 + 1016 | 0;
                 HEAP32[($0 + 408 | 0) >> 2] = $0 + 904 | 0;
                 c_with_alloca($3 | 0, 4 | 0, $0 + 408 | 0 | 0);
                 break label$3;
                }
                $4 = $1 ? 1050124 : 72;
                $3 = HEAP32[$4 >> 2] | 0;
                if (!$3) {
                 break label$10
                }
                $5 = $1 ? 1050128 : 76;
                i64toi32_i32$1 = $13$hi;
                i64toi32_i32$1 = $7$hi;
                i64toi32_i32$1 = $13$hi;
                i64toi32_i32$2 = $7$hi;
                _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17h0d8cc9e9ad6c8d6cE($0 + 1016 | 0 | 0, $3 | 0, HEAP32[$5 >> 2] | 0 | 0, $13 | 0, i64toi32_i32$1 | 0, $7 | 0, i64toi32_i32$2 | 0);
                if (HEAP32[($0 + 1016 | 0) >> 2] | 0) {
                 break label$10
                }
                $3 = HEAP32[$4 >> 2] | 0;
                if (!$3) {
                 break label$6
                }
                i64toi32_i32$2 = i64toi32_i32$1;
                i64toi32_i32$2 = $7$hi;
                i64toi32_i32$2 = i64toi32_i32$1;
                i64toi32_i32$1 = $7$hi;
                _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17h0d8cc9e9ad6c8d6cE($0 + 1016 | 0 | 0, $3 | 0, HEAP32[$5 >> 2] | 0 | 0, $13 | 0, i64toi32_i32$2 | 0, $7 | 0, i64toi32_i32$1 | 0);
                if (!(HEAP32[($0 + 1016 | 0) >> 2] | 0)) {
                 break label$13
                }
                break label$6;
               }
               _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 984 | 0 | 0);
               $1 = $1 ? 1050056 : 4;
               i64toi32_i32$1 = $13$hi;
               i64toi32_i32$1 = $7$hi;
               i64toi32_i32$1 = $13$hi;
               i64toi32_i32$2 = $7$hi;
               if (!(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$12contains_key17h714880aa4b96e7c1E(HEAP32[$2 >> 2] | 0 | 0, HEAP32[$1 >> 2] | 0 | 0, $13 | 0, i64toi32_i32$1 | 0, $7 | 0, i64toi32_i32$2 | 0) | 0)) {
                break label$10
               }
               _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 160 | 0 | 0, 47 | 0, 0 | 0);
               $3 = HEAP32[($0 + 164 | 0) >> 2] | 0;
               $5 = memcpy(HEAP32[($0 + 160 | 0) >> 2] | 0 | 0, 1049221 | 0, 47 | 0) | 0;
               HEAP32[($0 + 232 | 0) >> 2] = 47;
               HEAP32[($0 + 228 | 0) >> 2] = $3;
               HEAP32[($0 + 224 | 0) >> 2] = $5;
               _ZN4gstd6common10primitives7ActorId9from_bs5817h05627def41de7e49E($0 + 1016 | 0 | 0, $0 + 224 | 0 | 0);
               if (HEAPU8[($0 + 1016 | 0) >> 0] | 0) {
                break label$11
               }
               i64toi32_i32$0 = $0 + 1041 | 0;
               i64toi32_i32$2 = HEAPU8[i64toi32_i32$0 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$0 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$0 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$0 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               i64toi32_i32$1 = HEAPU8[(i64toi32_i32$0 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$0 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$0 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$0 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               $618 = i64toi32_i32$2;
               i64toi32_i32$2 = $0 + 248 | 0;
               HEAP32[i64toi32_i32$2 >> 2] = $618;
               HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$1;
               i64toi32_i32$0 = $0 + 1033 | 0;
               i64toi32_i32$1 = HEAPU8[i64toi32_i32$0 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$0 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$0 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$0 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               i64toi32_i32$2 = HEAPU8[(i64toi32_i32$0 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$0 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$0 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$0 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               $623 = i64toi32_i32$1;
               i64toi32_i32$1 = $0 + 240 | 0;
               HEAP32[i64toi32_i32$1 >> 2] = $623;
               HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$2;
               i64toi32_i32$0 = $0 + 1025 | 0;
               i64toi32_i32$2 = HEAPU8[i64toi32_i32$0 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$0 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$0 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$0 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               i64toi32_i32$1 = HEAPU8[(i64toi32_i32$0 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$0 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$0 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$0 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               $628 = i64toi32_i32$2;
               i64toi32_i32$2 = $0 + 232 | 0;
               HEAP32[i64toi32_i32$2 >> 2] = $628;
               HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$1;
               i64toi32_i32$0 = $0;
               i64toi32_i32$1 = HEAPU8[($0 + 1017 | 0) >> 0] | 0 | ((HEAPU8[($0 + 1018 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 1019 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 1020 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               i64toi32_i32$2 = HEAPU8[($0 + 1021 | 0) >> 0] | 0 | ((HEAPU8[($0 + 1022 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 1023 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 1024 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
               $631 = i64toi32_i32$1;
               i64toi32_i32$1 = $0;
               HEAP32[($0 + 224 | 0) >> 2] = $631;
               HEAP32[($0 + 228 | 0) >> 2] = i64toi32_i32$2;
               if (!(_ZN69_$LT$T$u20$as$u20$core__array__equality__SpecArrayEq$LT$U$C$_$GT$$GT$7spec_eq17hce9f348aa2b800ebE($0 + 224 | 0 | 0, $0 + 984 | 0 | 0) | 0)) {
                break label$9
               }
               i64toi32_i32$2 = $13$hi;
               i64toi32_i32$2 = $7$hi;
               i64toi32_i32$2 = $13$hi;
               i64toi32_i32$1 = $7$hi;
               _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h5063fbf37617e0beE($0 + 152 | 0 | 0, HEAP32[$2 >> 2] | 0 | 0, HEAP32[$1 >> 2] | 0 | 0, $13 | 0, i64toi32_i32$2 | 0, $7 | 0, i64toi32_i32$1 | 0);
               _ZN4core6option15Option$LT$T$GT$6expect17he7a54e512a257d5bE($0 + 144 | 0 | 0, HEAP32[($0 + 152 | 0) >> 2] | 0 | 0, HEAP32[($0 + 156 | 0) >> 2] | 0 | 0);
               _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($0 + 1016 | 0 | 0, HEAP32[($0 + 148 | 0) >> 2] | 0 | 0);
               HEAP8[($0 + 1175 | 0) >> 0] = $4;
               i64toi32_i32$1 = i64toi32_i32$2;
               i64toi32_i32$1 = $7$hi;
               i64toi32_i32$1 = i64toi32_i32$2;
               i64toi32_i32$2 = $7$hi;
               _ZN11inscribe_io16InscribeIoStates15update_inscribe17h111a3a18fd43d7e9E($2 | 0, $13 | 0, i64toi32_i32$1 | 0, $7 | 0, i64toi32_i32$2 | 0, $0 + 1016 | 0 | 0);
               i64toi32_i32$1 = $0;
               HEAP32[($0 + 1024 | 0) >> 2] = $7;
               HEAP32[($0 + 1028 | 0) >> 2] = i64toi32_i32$2;
               i64toi32_i32$2 = $13$hi;
               i64toi32_i32$1 = $0;
               HEAP32[($0 + 1016 | 0) >> 2] = $13;
               HEAP32[($0 + 1020 | 0) >> 2] = i64toi32_i32$2;
               HEAP8[($0 + 1192 | 0) >> 0] = 12;
               HEAP8[($0 + 1032 | 0) >> 0] = $4;
               _ZN4gstd3msg7encoded5reply17ha9d7a9a3242b8638E($0 + 224 | 0 | 0, $0 + 1016 | 0 | 0);
               break label$3;
              }
              i64toi32_i32$0 = $0;
              i64toi32_i32$2 = HEAPU8[($0 + 215 | 0) >> 0] | 0 | ((HEAPU8[($0 + 216 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 217 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 218 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
              i64toi32_i32$1 = HEAPU8[($0 + 219 | 0) >> 0] | 0 | ((HEAPU8[($0 + 220 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 221 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 222 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
              $678 = i64toi32_i32$2;
              i64toi32_i32$2 = ($0 + 408 | 0) + 24 | 0;
              $184 = $678;
              HEAP8[i64toi32_i32$2 >> 0] = $184;
              HEAP8[(i64toi32_i32$2 + 1 | 0) >> 0] = $184 >>> 8 | 0;
              HEAP8[(i64toi32_i32$2 + 2 | 0) >> 0] = $184 >>> 16 | 0;
              HEAP8[(i64toi32_i32$2 + 3 | 0) >> 0] = $184 >>> 24 | 0;
              HEAP8[(i64toi32_i32$2 + 4 | 0) >> 0] = i64toi32_i32$1;
              HEAP8[(i64toi32_i32$2 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
              HEAP8[(i64toi32_i32$2 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
              HEAP8[(i64toi32_i32$2 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
              i64toi32_i32$1 = $13$hi;
              i64toi32_i32$2 = $0;
              HEAP32[($0 + 408 | 0) >> 2] = $13;
              HEAP32[($0 + 412 | 0) >> 2] = i64toi32_i32$1;
              HEAP8[($0 + 424 | 0) >> 0] = $4;
              i64toi32_i32$0 = $0;
              i64toi32_i32$1 = HEAP32[($0 + 208 | 0) >> 2] | 0;
              i64toi32_i32$2 = HEAP32[($0 + 212 | 0) >> 2] | 0;
              $685 = i64toi32_i32$1;
              i64toi32_i32$1 = $0;
              $185 = $685;
              HEAP8[($0 + 425 | 0) >> 0] = $185;
              HEAP8[($0 + 426 | 0) >> 0] = $185 >>> 8 | 0;
              HEAP8[($0 + 427 | 0) >> 0] = $185 >>> 16 | 0;
              HEAP8[($0 + 428 | 0) >> 0] = $185 >>> 24 | 0;
              HEAP8[($0 + 429 | 0) >> 0] = i64toi32_i32$2;
              HEAP8[($0 + 430 | 0) >> 0] = i64toi32_i32$2 >>> 8 | 0;
              HEAP8[($0 + 431 | 0) >> 0] = i64toi32_i32$2 >>> 16 | 0;
              HEAP8[($0 + 432 | 0) >> 0] = i64toi32_i32$2 >>> 24 | 0;
              i64toi32_i32$2 = $7$hi;
              i64toi32_i32$1 = $0;
              HEAP32[($0 + 416 | 0) >> 2] = $7;
              HEAP32[($0 + 420 | 0) >> 2] = i64toi32_i32$2;
              i64toi32_i32$2 = $9$hi;
              i64toi32_i32$1 = $6;
              HEAP32[i64toi32_i32$1 >> 2] = $9;
              HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$2;
              i64toi32_i32$2 = $15$hi;
              i64toi32_i32$1 = $0;
              HEAP32[($0 + 240 | 0) >> 2] = $15;
              HEAP32[($0 + 244 | 0) >> 2] = i64toi32_i32$2;
              i64toi32_i32$2 = $8$hi;
              i64toi32_i32$1 = $0;
              HEAP32[($0 + 232 | 0) >> 2] = $8;
              HEAP32[($0 + 236 | 0) >> 2] = i64toi32_i32$2;
              i64toi32_i32$2 = $14$hi;
              i64toi32_i32$1 = $0;
              HEAP32[($0 + 224 | 0) >> 2] = $14;
              HEAP32[($0 + 228 | 0) >> 2] = i64toi32_i32$2;
              $5 = $1 ? 1050056 : 4;
              i64toi32_i32$2 = $16$hi;
              i64toi32_i32$2 = $10$hi;
              i64toi32_i32$2 = $16$hi;
              i64toi32_i32$1 = $10$hi;
              if (!(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$12contains_key17h714880aa4b96e7c1E(HEAP32[$2 >> 2] | 0 | 0, HEAP32[$5 >> 2] | 0 | 0, $16 | 0, i64toi32_i32$2 | 0, $10 | 0, i64toi32_i32$1 | 0) | 0)) {
               break label$10
              }
              $3 = $1 ? 1050064 : 12;
              $4 = $1 ? 1050068 : 16;
              i64toi32_i32$1 = i64toi32_i32$2;
              i64toi32_i32$1 = $10$hi;
              i64toi32_i32$1 = i64toi32_i32$2;
              i64toi32_i32$2 = $10$hi;
              _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h0b236e04ced9e431E($0 + 48 | 0 | 0, HEAP32[$3 >> 2] | 0 | 0, HEAP32[$4 >> 2] | 0 | 0, $16 | 0, i64toi32_i32$1 | 0, $10 | 0, i64toi32_i32$2 | 0);
              _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbcf2255af67c51f4E($0 + 952 | 0 | 0, _ZN4core6option15Option$LT$T$GT$6expect17h0574d487979c98a9E(HEAP32[($0 + 48 | 0) >> 2] | 0 | 0, HEAP32[($0 + 52 | 0) >> 2] | 0 | 0) | 0 | 0);
              $1 = HEAP32[($0 + 952 | 0) >> 2] | 0;
              $21 = HEAP32[($0 + 956 | 0) >> 2] | 0;
              _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h716bbfb2b20040cdE($0 + 40 | 0 | 0, $1 | 0, $21 | 0, $0 + 408 | 0 | 0);
              $19 = _ZN4core6option15Option$LT$T$GT$6expect17h28a2ef374e8a37deE(HEAP32[($0 + 40 | 0) >> 2] | 0 | 0, HEAP32[($0 + 44 | 0) >> 2] | 0 | 0) | 0;
              i64toi32_i32$0 = $19;
              i64toi32_i32$2 = HEAP32[i64toi32_i32$0 >> 2] | 0;
              i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
              $7 = i64toi32_i32$2;
              $7$hi = i64toi32_i32$1;
              i64toi32_i32$0 = i64toi32_i32$0 + 8 | 0;
              i64toi32_i32$1 = HEAP32[i64toi32_i32$0 >> 2] | 0;
              i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
              $8 = i64toi32_i32$1;
              $8$hi = i64toi32_i32$2;
              _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h716bbfb2b20040cdE($0 + 32 | 0 | 0, $1 | 0, $21 | 0, $0 + 224 | 0 | 0);
              $1 = _ZN4core6option15Option$LT$T$GT$6expect17h28a2ef374e8a37deE(HEAP32[($0 + 32 | 0) >> 2] | 0 | 0, HEAP32[($0 + 36 | 0) >> 2] | 0 | 0) | 0;
              i64toi32_i32$0 = $1 + 8 | 0;
              i64toi32_i32$2 = HEAP32[i64toi32_i32$0 >> 2] | 0;
              i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
              $14 = i64toi32_i32$2;
              $14$hi = i64toi32_i32$1;
              i64toi32_i32$0 = $1;
              i64toi32_i32$1 = HEAP32[i64toi32_i32$0 >> 2] | 0;
              i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
              $13 = i64toi32_i32$1;
              $13$hi = i64toi32_i32$2;
              i64toi32_i32$2 = $16$hi;
              i64toi32_i32$2 = $10$hi;
              i64toi32_i32$2 = $16$hi;
              i64toi32_i32$1 = $10$hi;
              _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h5063fbf37617e0beE($0 + 24 | 0 | 0, HEAP32[$2 >> 2] | 0 | 0, HEAP32[$5 >> 2] | 0 | 0, $16 | 0, i64toi32_i32$2 | 0, $10 | 0, i64toi32_i32$1 | 0);
              _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($0 + 1016 | 0 | 0, _ZN4core6option15Option$LT$T$GT$6expect17h0574d487979c98a9E(HEAP32[($0 + 24 | 0) >> 2] | 0 | 0, HEAP32[($0 + 28 | 0) >> 2] | 0 | 0) | 0 | 0);
              i64toi32_i32$1 = i64toi32_i32$2;
              i64toi32_i32$1 = $10$hi;
              i64toi32_i32$1 = $7$hi;
              i64toi32_i32$1 = $17$hi;
              i64toi32_i32$1 = $7$hi;
              i64toi32_i32$0 = $7;
              i64toi32_i32$2 = $17$hi;
              i64toi32_i32$3 = $17;
              i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$3 | 0;
              i64toi32_i32$6 = i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0;
              i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$2 | 0;
              i64toi32_i32$5 = i64toi32_i32$1 - i64toi32_i32$5 | 0;
              $786 = i64toi32_i32$4;
              $786$hi = i64toi32_i32$5;
              i64toi32_i32$5 = $8$hi;
              i64toi32_i32$5 = $11$hi;
              i64toi32_i32$5 = $8$hi;
              i64toi32_i32$1 = $8;
              i64toi32_i32$0 = $11$hi;
              i64toi32_i32$3 = $11;
              i64toi32_i32$2 = i64toi32_i32$1 - i64toi32_i32$3 | 0;
              i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$3 >>> 0;
              i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
              i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
              $789$hi = i64toi32_i32$4;
              i64toi32_i32$4 = $7$hi;
              i64toi32_i32$4 = $17$hi;
              i64toi32_i32$4 = $7$hi;
              i64toi32_i32$5 = $7;
              i64toi32_i32$1 = $17$hi;
              i64toi32_i32$3 = $17;
              $792 = i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$5 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0;
              i64toi32_i32$5 = 0;
              $793$hi = i64toi32_i32$5;
              i64toi32_i32$5 = $789$hi;
              i64toi32_i32$3 = i64toi32_i32$2;
              i64toi32_i32$4 = $793$hi;
              i64toi32_i32$1 = $792;
              i64toi32_i32$0 = i64toi32_i32$2 - i64toi32_i32$1 | 0;
              i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$1 >>> 0;
              i64toi32_i32$2 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
              i64toi32_i32$2 = i64toi32_i32$5 - i64toi32_i32$2 | 0;
              $794$hi = i64toi32_i32$2;
              i64toi32_i32$2 = $16$hi;
              i64toi32_i32$3 = $10$hi;
              i64toi32_i32$5 = $786$hi;
              i64toi32_i32$1 = $794$hi;
              _ZN11inscribe_io16InscribeIoStates19update_amt_index_id17hd5bbbc4bc640262cE(HEAP32[$3 >> 2] | 0 | 0, HEAP32[$4 >> 2] | 0 | 0, $16 | 0, i64toi32_i32$2 | 0, $10 | 0, i64toi32_i32$3 | 0, $0 + 408 | 0 | 0, $786 | 0, i64toi32_i32$5 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0);
              $796 = HEAP32[$3 >> 2] | 0;
              $798 = HEAP32[$4 >> 2] | 0;
              i64toi32_i32$1 = i64toi32_i32$2;
              $799 = $16;
              $799$hi = i64toi32_i32$2;
              i64toi32_i32$1 = i64toi32_i32$3;
              $800 = $10;
              $800$hi = i64toi32_i32$1;
              $802 = $0 + 224 | 0;
              i64toi32_i32$1 = $13$hi;
              i64toi32_i32$1 = $17$hi;
              i64toi32_i32$1 = $13$hi;
              i64toi32_i32$3 = $13;
              i64toi32_i32$5 = $17$hi;
              i64toi32_i32$2 = $17;
              i64toi32_i32$4 = i64toi32_i32$3 + i64toi32_i32$2 | 0;
              i64toi32_i32$0 = i64toi32_i32$1 + i64toi32_i32$5 | 0;
              if (i64toi32_i32$4 >>> 0 < i64toi32_i32$2 >>> 0) {
               i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
              }
              $7 = i64toi32_i32$4;
              $7$hi = i64toi32_i32$0;
              $806 = i64toi32_i32$4;
              $806$hi = i64toi32_i32$0;
              i64toi32_i32$0 = $14$hi;
              i64toi32_i32$0 = $11$hi;
              i64toi32_i32$0 = $14$hi;
              i64toi32_i32$1 = $14;
              i64toi32_i32$3 = $11$hi;
              i64toi32_i32$2 = $11;
              i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$2 | 0;
              i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$3 | 0;
              if (i64toi32_i32$5 >>> 0 < i64toi32_i32$2 >>> 0) {
               i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
              }
              $809$hi = i64toi32_i32$4;
              i64toi32_i32$4 = $7$hi;
              i64toi32_i32$4 = $13$hi;
              i64toi32_i32$4 = $7$hi;
              i64toi32_i32$0 = $7;
              i64toi32_i32$1 = $13$hi;
              i64toi32_i32$2 = $13;
              $812 = i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$0 >>> 0 < i64toi32_i32$2 >>> 0 | 0) | 0;
              i64toi32_i32$0 = 0;
              $813$hi = i64toi32_i32$0;
              i64toi32_i32$0 = $809$hi;
              i64toi32_i32$2 = i64toi32_i32$5;
              i64toi32_i32$4 = $813$hi;
              i64toi32_i32$1 = $812;
              i64toi32_i32$3 = i64toi32_i32$2 + i64toi32_i32$1 | 0;
              i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$4 | 0;
              if (i64toi32_i32$3 >>> 0 < i64toi32_i32$1 >>> 0) {
               i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
              }
              $814$hi = i64toi32_i32$5;
              i64toi32_i32$5 = $799$hi;
              i64toi32_i32$2 = $800$hi;
              i64toi32_i32$0 = $806$hi;
              i64toi32_i32$1 = $814$hi;
              _ZN11inscribe_io16InscribeIoStates19update_amt_index_id17hd5bbbc4bc640262cE($796 | 0, $798 | 0, $799 | 0, i64toi32_i32$5 | 0, $800 | 0, i64toi32_i32$2 | 0, $802 | 0, $806 | 0, i64toi32_i32$0 | 0, i64toi32_i32$3 | 0, i64toi32_i32$1 | 0);
              _ZN4core3ptr42drop_in_place$LT$inscribe_io__Inscribe$GT$17h3737e270f8447fa3E($0 + 1016 | 0 | 0);
              _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h471fbf6adddb7064E($0 + 952 | 0 | 0);
              break label$3;
             }
             i64toi32_i32$2 = $0;
             i64toi32_i32$1 = HEAPU8[($0 + 215 | 0) >> 0] | 0 | ((HEAPU8[($0 + 216 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 217 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 218 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             i64toi32_i32$0 = HEAPU8[($0 + 219 | 0) >> 0] | 0 | ((HEAPU8[($0 + 220 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 221 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 222 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
             $823 = i64toi32_i32$1;
             i64toi32_i32$1 = ($0 + 920 | 0) + 24 | 0;
             $186 = $823;
             HEAP8[i64toi32_i32$1 >> 0] = $186;
             HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $186 >>> 8 | 0;
             HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $186 >>> 16 | 0;
             HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $186 >>> 24 | 0;
             HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
             HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
             HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
             HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
             i64toi32_i32$0 = $13$hi;
             i64toi32_i32$1 = $0;
             HEAP32[($0 + 920 | 0) >> 2] = $13;
             HEAP32[($0 + 924 | 0) >> 2] = i64toi32_i32$0;
             HEAP8[($0 + 936 | 0) >> 0] = $4;
             i64toi32_i32$2 = $0;
             i64toi32_i32$0 = HEAP32[($0 + 208 | 0) >> 2] | 0;
             i64toi32_i32$1 = HEAP32[($0 + 212 | 0) >> 2] | 0;
             $830 = i64toi32_i32$0;
             i64toi32_i32$0 = $0;
             $188 = $830;
             HEAP8[($0 + 937 | 0) >> 0] = $188;
             HEAP8[($0 + 938 | 0) >> 0] = $188 >>> 8 | 0;
             HEAP8[($0 + 939 | 0) >> 0] = $188 >>> 16 | 0;
             HEAP8[($0 + 940 | 0) >> 0] = $188 >>> 24 | 0;
             HEAP8[($0 + 941 | 0) >> 0] = i64toi32_i32$1;
             HEAP8[($0 + 942 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
             HEAP8[($0 + 943 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
             HEAP8[($0 + 944 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
             i64toi32_i32$1 = $7$hi;
             i64toi32_i32$0 = $0;
             HEAP32[($0 + 928 | 0) >> 2] = $7;
             HEAP32[($0 + 932 | 0) >> 2] = i64toi32_i32$1;
             i64toi32_i32$1 = $14$hi;
             i64toi32_i32$1 = $8$hi;
             i64toi32_i32$1 = $14$hi;
             i64toi32_i32$0 = $8$hi;
             if (!(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$12contains_key17h714880aa4b96e7c1E(HEAP32[$2 >> 2] | 0 | 0, HEAP32[($1 ? 1050056 : 4) >> 2] | 0 | 0, $14 | 0, i64toi32_i32$1 | 0, $8 | 0, i64toi32_i32$0 | 0) | 0)) {
              break label$10
             }
             i64toi32_i32$0 = i64toi32_i32$1;
             i64toi32_i32$0 = $8$hi;
             i64toi32_i32$0 = i64toi32_i32$1;
             i64toi32_i32$1 = $8$hi;
             _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h0b236e04ced9e431E($0 + 80 | 0 | 0, HEAP32[($1 ? 1050064 : 12) >> 2] | 0 | 0, HEAP32[($1 ? 1050068 : 16) >> 2] | 0 | 0, $14 | 0, i64toi32_i32$0 | 0, $8 | 0, i64toi32_i32$1 | 0);
             _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbcf2255af67c51f4E($0 + 904 | 0 | 0, _ZN4core6option15Option$LT$T$GT$6expect17h0574d487979c98a9E(HEAP32[($0 + 80 | 0) >> 2] | 0 | 0, HEAP32[($0 + 84 | 0) >> 2] | 0 | 0) | 0 | 0);
             _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 952 | 0 | 0);
             if (!(_ZN69_$LT$T$u20$as$u20$core__array__equality__SpecArrayEq$LT$U$C$_$GT$$GT$7spec_eq17hce9f348aa2b800ebE($0 + 920 | 0 | 0, $0 + 952 | 0 | 0) | 0)) {
              break label$9
             }
             _ZN4gstd4exec5basic10program_id17had36370ac3ee1338E($0 + 408 | 0 | 0);
             $2 = $1 ? 1050124 : 72;
             $3 = HEAP32[$2 >> 2] | 0;
             if (!$3) {
              break label$6
             }
             $4 = HEAPU16[($3 + 1150 | 0) >> 1] | 0;
             label$24 : {
              $5 = HEAP32[($1 ? 1050128 : 76) >> 2] | 0;
              if (!$5) {
               break label$24
              }
              label$25 : while (1) {
               $3 = HEAP32[(($3 + (($4 & 65535 | 0) << 2 | 0) | 0) + 1152 | 0) >> 2] | 0;
               $4 = HEAPU16[($3 + 1150 | 0) >> 1] | 0;
               $5 = $5 + -1 | 0;
               if ($5) {
                continue label$25
               }
               break label$25;
              };
             }
             $4 = $4 & 65535 | 0;
             if (!$4) {
              break label$6
             }
             i64toi32_i32$1 = $10$hi;
             i64toi32_i32$0 = $0 + 808 | 0;
             HEAP32[i64toi32_i32$0 >> 2] = $10;
             HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
             i64toi32_i32$1 = $9$hi;
             i64toi32_i32$0 = $0 + 792 | 0;
             HEAP32[i64toi32_i32$0 >> 2] = $9;
             HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
             i64toi32_i32$1 = $8$hi;
             i64toi32_i32$0 = $0 + 776 | 0;
             HEAP32[i64toi32_i32$0 >> 2] = $8;
             HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
             i64toi32_i32$2 = ($0 + 920 | 0) + 8 | 0;
             i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $913 = i64toi32_i32$1;
             i64toi32_i32$1 = ($0 + 736 | 0) + 8 | 0;
             HEAP32[i64toi32_i32$1 >> 2] = $913;
             HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$2 = ($0 + 920 | 0) + 16 | 0;
             i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $920 = i64toi32_i32$0;
             i64toi32_i32$0 = ($0 + 736 | 0) + 16 | 0;
             HEAP32[i64toi32_i32$0 >> 2] = $920;
             HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
             i64toi32_i32$2 = ($0 + 920 | 0) + 24 | 0;
             i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $927 = i64toi32_i32$1;
             i64toi32_i32$1 = ($0 + 736 | 0) + 24 | 0;
             HEAP32[i64toi32_i32$1 >> 2] = $927;
             HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$0 = $16$hi;
             i64toi32_i32$1 = $0;
             HEAP32[($0 + 800 | 0) >> 2] = $16;
             HEAP32[($0 + 804 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$0 = $15$hi;
             i64toi32_i32$1 = $0;
             HEAP32[($0 + 784 | 0) >> 2] = $15;
             HEAP32[($0 + 788 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$0 = $14$hi;
             i64toi32_i32$1 = $0;
             HEAP32[($0 + 768 | 0) >> 2] = $14;
             HEAP32[($0 + 772 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$2 = $0;
             i64toi32_i32$0 = HEAP32[($0 + 920 | 0) >> 2] | 0;
             i64toi32_i32$1 = HEAP32[($0 + 924 | 0) >> 2] | 0;
             $936 = i64toi32_i32$0;
             i64toi32_i32$0 = $0;
             HEAP32[($0 + 736 | 0) >> 2] = $936;
             HEAP32[($0 + 740 | 0) >> 2] = i64toi32_i32$1;
             HEAP8[($0 + 816 | 0) >> 0] = 0;
             label$26 : {
              label$27 : {
               if (HEAP32[($1 ? 1050132 : 80) >> 2] | 0) {
                break label$27
               }
               HEAP32[($0 + 1024 | 0) >> 2] = 0;
               HEAP32[($0 + 1016 | 0) >> 2] = 0;
               _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hdeb241d0c8138ebeE($0 + 1016 | 0 | 0);
               break label$26;
              }
              $946 = $0 + 1016 | 0;
              $947 = $2;
              $3 = (($4 << 4 | 0) + $3 | 0) + -16 | 0;
              i64toi32_i32$2 = $3;
              i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
              i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
              i64toi32_i32$2 = i64toi32_i32$1;
              i64toi32_i32$1 = 0;
              i64toi32_i32$5 = 1;
              i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$5 | 0;
              i64toi32_i32$3 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
              if (i64toi32_i32$4 >>> 0 < i64toi32_i32$5 >>> 0) {
               i64toi32_i32$3 = i64toi32_i32$3 + 1 | 0
              }
              $7 = i64toi32_i32$4;
              $7$hi = i64toi32_i32$3;
              $956 = i64toi32_i32$4;
              $956$hi = i64toi32_i32$3;
              i64toi32_i32$0 = $3 + 8 | 0;
              i64toi32_i32$3 = HEAP32[i64toi32_i32$0 >> 2] | 0;
              i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
              $959$hi = i64toi32_i32$2;
              i64toi32_i32$2 = $7$hi;
              $961 = !(i64toi32_i32$4 | i64toi32_i32$2 | 0);
              i64toi32_i32$2 = 0;
              $962$hi = i64toi32_i32$2;
              i64toi32_i32$2 = $959$hi;
              i64toi32_i32$0 = i64toi32_i32$3;
              i64toi32_i32$3 = $962$hi;
              i64toi32_i32$5 = $961;
              i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$5 | 0;
              i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
              if (i64toi32_i32$1 >>> 0 < i64toi32_i32$5 >>> 0) {
               i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
              }
              $963$hi = i64toi32_i32$4;
              i64toi32_i32$4 = $956$hi;
              i64toi32_i32$0 = $963$hi;
              _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17hcc2736c14493a121E($946 | 0, $947 | 0, $956 | 0, i64toi32_i32$4 | 0, i64toi32_i32$1 | 0, i64toi32_i32$0 | 0, $0 + 736 | 0 | 0);
             }
             i64toi32_i32$0 = $10$hi;
             i64toi32_i32$4 = $0 + 1088 | 0;
             HEAP32[i64toi32_i32$4 >> 2] = $10;
             HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$0 = $9$hi;
             i64toi32_i32$4 = $0 + 1072 | 0;
             HEAP32[i64toi32_i32$4 >> 2] = $9;
             HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$0 = $8$hi;
             i64toi32_i32$4 = $0 + 1056 | 0;
             HEAP32[i64toi32_i32$4 >> 2] = $8;
             HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$2 = ($0 + 920 | 0) + 24 | 0;
             i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $981 = i64toi32_i32$0;
             i64toi32_i32$0 = ($0 + 1016 | 0) + 24 | 0;
             HEAP32[i64toi32_i32$0 >> 2] = $981;
             HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
             i64toi32_i32$2 = ($0 + 920 | 0) + 16 | 0;
             i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $988 = i64toi32_i32$4;
             i64toi32_i32$4 = ($0 + 1016 | 0) + 16 | 0;
             HEAP32[i64toi32_i32$4 >> 2] = $988;
             HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
             i64toi32_i32$2 = ($0 + 920 | 0) + 8 | 0;
             i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
             i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
             $995 = i64toi32_i32$0;
             i64toi32_i32$0 = ($0 + 1016 | 0) + 8 | 0;
             HEAP32[i64toi32_i32$0 >> 2] = $995;
             HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
             i64toi32_i32$4 = $16$hi;
             i64toi32_i32$0 = $0;
             HEAP32[($0 + 1080 | 0) >> 2] = $16;
             HEAP32[($0 + 1084 | 0) >> 2] = i64toi32_i32$4;
             i64toi32_i32$4 = $15$hi;
             i64toi32_i32$0 = $0;
             HEAP32[($0 + 1064 | 0) >> 2] = $15;
             HEAP32[($0 + 1068 | 0) >> 2] = i64toi32_i32$4;
             i64toi32_i32$4 = $14$hi;
             i64toi32_i32$0 = $0;
             HEAP32[($0 + 1048 | 0) >> 2] = $14;
             HEAP32[($0 + 1052 | 0) >> 2] = i64toi32_i32$4;
             i64toi32_i32$2 = $0;
             i64toi32_i32$4 = HEAP32[($0 + 920 | 0) >> 2] | 0;
             i64toi32_i32$0 = HEAP32[($0 + 924 | 0) >> 2] | 0;
             $1004 = i64toi32_i32$4;
             i64toi32_i32$4 = $0;
             HEAP32[($0 + 1016 | 0) >> 2] = $1004;
             HEAP32[($0 + 1020 | 0) >> 2] = i64toi32_i32$0;
             HEAP8[($0 + 1192 | 0) >> 0] = 10;
             _ZN4gstd3msg7encoded5reply17ha9d7a9a3242b8638E($0 + 224 | 0 | 0, $0 + 1016 | 0 | 0);
             _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h471fbf6adddb7064E($0 + 904 | 0 | 0);
             break label$3;
            }
            $5 = ($0 + 952 | 0) + 8 | 0;
            $3 = (HEAP32[($0 + 1020 | 0) >> 2] | 0) + Math_imul(HEAP32[($0 + 1028 | 0) >> 2] | 0, 88) | 0;
            i64toi32_i32$2 = $3 + 184 | 0;
            i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1025 = i64toi32_i32$0;
            i64toi32_i32$0 = $5;
            HEAP32[i64toi32_i32$0 >> 2] = $1025;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
            $1 = ($0 + 952 | 0) + 16 | 0;
            i64toi32_i32$2 = $3 + 192 | 0;
            i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1032 = i64toi32_i32$4;
            i64toi32_i32$4 = $1;
            HEAP32[i64toi32_i32$4 >> 2] = $1032;
            HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
            $2 = ($0 + 952 | 0) + 24 | 0;
            i64toi32_i32$2 = $3 + 200 | 0;
            i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1039 = i64toi32_i32$0;
            i64toi32_i32$0 = $2;
            HEAP32[i64toi32_i32$0 >> 2] = $1039;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
            i64toi32_i32$2 = $3 + 176 | 0;
            i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1043 = i64toi32_i32$4;
            i64toi32_i32$4 = $0;
            HEAP32[($0 + 952 | 0) >> 2] = $1043;
            HEAP32[($0 + 956 | 0) >> 2] = i64toi32_i32$0;
            if (HEAPU8[($3 + 256 | 0) >> 0] | 0) {
             break label$8
            }
            i64toi32_i32$2 = $3 + 248 | 0;
            i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $16 = i64toi32_i32$0;
            $16$hi = i64toi32_i32$4;
            i64toi32_i32$2 = $3 + 240 | 0;
            i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $10 = i64toi32_i32$4;
            $10$hi = i64toi32_i32$0;
            i64toi32_i32$2 = $3 + 232 | 0;
            i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $14 = i64toi32_i32$0;
            $14$hi = i64toi32_i32$4;
            i64toi32_i32$2 = $3 + 224 | 0;
            i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $11 = i64toi32_i32$4;
            $11$hi = i64toi32_i32$0;
            i64toi32_i32$2 = $3 + 216 | 0;
            i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $9 = i64toi32_i32$0;
            $9$hi = i64toi32_i32$4;
            i64toi32_i32$2 = $3 + 208 | 0;
            i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $15 = i64toi32_i32$4;
            $15$hi = i64toi32_i32$0;
            _ZN4gstd3msg5basic5value17haa09ba24469d684fE($0 + 96 | 0 | 0);
            i64toi32_i32$2 = $5;
            i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1071 = i64toi32_i32$0;
            i64toi32_i32$0 = ($0 + 824 | 0) + 8 | 0;
            HEAP32[i64toi32_i32$0 >> 2] = $1071;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
            i64toi32_i32$2 = $1;
            i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1076 = i64toi32_i32$4;
            i64toi32_i32$4 = ($0 + 824 | 0) + 16 | 0;
            HEAP32[i64toi32_i32$4 >> 2] = $1076;
            HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$2 = $2;
            i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1081 = i64toi32_i32$0;
            i64toi32_i32$0 = ($0 + 824 | 0) + 24 | 0;
            HEAP32[i64toi32_i32$0 >> 2] = $1081;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
            i64toi32_i32$2 = $0;
            i64toi32_i32$4 = HEAP32[($0 + 952 | 0) >> 2] | 0;
            i64toi32_i32$0 = HEAP32[($0 + 956 | 0) >> 2] | 0;
            $1084 = i64toi32_i32$4;
            i64toi32_i32$4 = $0;
            HEAP32[($0 + 824 | 0) >> 2] = $1084;
            HEAP32[($0 + 828 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$2 = $0;
            i64toi32_i32$0 = HEAP32[($0 + 96 | 0) >> 2] | 0;
            i64toi32_i32$4 = HEAP32[($0 + 100 | 0) >> 2] | 0;
            $17 = i64toi32_i32$0;
            $17$hi = i64toi32_i32$4;
            i64toi32_i32$2 = ($0 + 96 | 0) + 8 | 0;
            i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $8 = i64toi32_i32$4;
            $8$hi = i64toi32_i32$0;
            _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 408 | 0 | 0);
            i64toi32_i32$0 = $10$hi;
            i64toi32_i32$0 = $17$hi;
            i64toi32_i32$0 = $10$hi;
            i64toi32_i32$2 = $10;
            i64toi32_i32$4 = $17$hi;
            i64toi32_i32$5 = $17;
            i64toi32_i32$4 = i64toi32_i32$0 ^ i64toi32_i32$4 | 0;
            $1095 = i64toi32_i32$2 ^ i64toi32_i32$5 | 0;
            $1095$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $16$hi;
            i64toi32_i32$4 = $8$hi;
            i64toi32_i32$4 = $16$hi;
            i64toi32_i32$0 = $16;
            i64toi32_i32$2 = $8$hi;
            i64toi32_i32$5 = $8;
            i64toi32_i32$2 = i64toi32_i32$4 ^ i64toi32_i32$2 | 0;
            $1098 = i64toi32_i32$0 ^ i64toi32_i32$5 | 0;
            $1098$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $1095$hi;
            i64toi32_i32$4 = $1095;
            i64toi32_i32$0 = $1098$hi;
            i64toi32_i32$5 = $1098;
            i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
            if (!!(i64toi32_i32$4 | i64toi32_i32$5 | 0 | i64toi32_i32$0 | 0)) {
             break label$7
            }
            _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 1016 | 0 | 0);
            if (!(_ZN69_$LT$T$u20$as$u20$core__array__equality__SpecArrayEq$LT$U$C$_$GT$$GT$7spec_eq17hce9f348aa2b800ebE($0 + 408 | 0 | 0, $0 + 1016 | 0 | 0) | 0)) {
             break label$9
            }
            i64toi32_i32$0 = $14$hi;
            i64toi32_i32$4 = $0 + 1072 | 0;
            HEAP32[i64toi32_i32$4 >> 2] = $14;
            HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$0 = $9$hi;
            i64toi32_i32$4 = $0 + 1056 | 0;
            HEAP32[i64toi32_i32$4 >> 2] = $9;
            HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$2 = ($0 + 952 | 0) + 24 | 0;
            i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1122 = i64toi32_i32$0;
            i64toi32_i32$0 = ($0 + 1016 | 0) + 24 | 0;
            HEAP32[i64toi32_i32$0 >> 2] = $1122;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
            i64toi32_i32$2 = ($0 + 952 | 0) + 16 | 0;
            i64toi32_i32$4 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1129 = i64toi32_i32$4;
            i64toi32_i32$4 = ($0 + 1016 | 0) + 16 | 0;
            HEAP32[i64toi32_i32$4 >> 2] = $1129;
            HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
            i64toi32_i32$2 = ($0 + 952 | 0) + 8 | 0;
            i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
            i64toi32_i32$4 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
            $1136 = i64toi32_i32$0;
            i64toi32_i32$0 = ($0 + 1016 | 0) + 8 | 0;
            HEAP32[i64toi32_i32$0 >> 2] = $1136;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
            i64toi32_i32$4 = $10$hi;
            i64toi32_i32$0 = $0;
            HEAP32[($0 + 1080 | 0) >> 2] = $10;
            HEAP32[($0 + 1084 | 0) >> 2] = i64toi32_i32$4;
            i64toi32_i32$4 = $16$hi;
            i64toi32_i32$0 = $0 + 1088 | 0;
            HEAP32[i64toi32_i32$0 >> 2] = $16;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
            i64toi32_i32$4 = $11$hi;
            i64toi32_i32$0 = $0;
            HEAP32[($0 + 1064 | 0) >> 2] = $11;
            HEAP32[($0 + 1068 | 0) >> 2] = i64toi32_i32$4;
            i64toi32_i32$4 = $15$hi;
            i64toi32_i32$0 = $0;
            HEAP32[($0 + 1048 | 0) >> 2] = $15;
            HEAP32[($0 + 1052 | 0) >> 2] = i64toi32_i32$4;
            i64toi32_i32$2 = $0;
            i64toi32_i32$4 = HEAP32[($0 + 952 | 0) >> 2] | 0;
            i64toi32_i32$0 = HEAP32[($0 + 956 | 0) >> 2] | 0;
            $1148 = i64toi32_i32$4;
            i64toi32_i32$4 = $0;
            HEAP32[($0 + 1016 | 0) >> 2] = $1148;
            HEAP32[($0 + 1020 | 0) >> 2] = i64toi32_i32$0;
            HEAP8[($0 + 1096 | 0) >> 0] = 2;
            i64toi32_i32$0 = $13$hi;
            i64toi32_i32$0 = $7$hi;
            i64toi32_i32$0 = $13$hi;
            i64toi32_i32$4 = $7$hi;
            _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17hcc2736c14493a121E($0 + 224 | 0 | 0, $4 | 0, $13 | 0, i64toi32_i32$0 | 0, $7 | 0, i64toi32_i32$4 | 0, $0 + 1016 | 0 | 0);
            _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 88 | 0 | 0, 47 | 0, 0 | 0);
            $3 = HEAP32[($0 + 92 | 0) >> 2] | 0;
            $4 = memcpy(HEAP32[($0 + 88 | 0) >> 2] | 0 | 0, 1049221 | 0, 47 | 0) | 0;
            HEAP32[($0 + 232 | 0) >> 2] = 47;
            HEAP32[($0 + 228 | 0) >> 2] = $3;
            HEAP32[($0 + 224 | 0) >> 2] = $4;
            _ZN4gstd6common10primitives7ActorId9from_bs5817h05627def41de7e49E($0 + 1016 | 0 | 0, $0 + 224 | 0 | 0);
            _ZN4core6result19Result$LT$T$C$E$GT$6expect17h9d7233476f212ae9E($0 + 856 | 0 | 0, $0 + 1016 | 0 | 0);
            $1178 = $0 + 224 | 0;
            $1180 = $0 + 824 | 0;
            i64toi32_i32$4 = $10$hi;
            i64toi32_i32$2 = $10;
            i64toi32_i32$0 = -233;
            i64toi32_i32$5 = 727379968;
            i64toi32_i32$3 = i64toi32_i32$2 + i64toi32_i32$5 | 0;
            i64toi32_i32$1 = i64toi32_i32$4 + i64toi32_i32$0 | 0;
            if (i64toi32_i32$3 >>> 0 < i64toi32_i32$5 >>> 0) {
             i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
            }
            $7 = i64toi32_i32$3;
            $7$hi = i64toi32_i32$1;
            $1183 = i64toi32_i32$3;
            $1183$hi = i64toi32_i32$1;
            i64toi32_i32$1 = $16$hi;
            i64toi32_i32$1 = $7$hi;
            i64toi32_i32$1 = $10$hi;
            i64toi32_i32$1 = $7$hi;
            i64toi32_i32$4 = i64toi32_i32$3;
            i64toi32_i32$2 = $10$hi;
            i64toi32_i32$5 = $10;
            $1187 = i64toi32_i32$1 >>> 0 < i64toi32_i32$2 >>> 0 | ((i64toi32_i32$1 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$4 >>> 0 < i64toi32_i32$5 >>> 0 | 0) | 0;
            i64toi32_i32$4 = 0;
            $1188$hi = i64toi32_i32$4;
            i64toi32_i32$4 = $16$hi;
            i64toi32_i32$5 = $16;
            i64toi32_i32$1 = $1188$hi;
            i64toi32_i32$2 = $1187;
            i64toi32_i32$0 = i64toi32_i32$5 + i64toi32_i32$2 | 0;
            i64toi32_i32$3 = i64toi32_i32$4 + i64toi32_i32$1 | 0;
            if (i64toi32_i32$0 >>> 0 < i64toi32_i32$2 >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$3 + 1 | 0
            }
            i64toi32_i32$4 = i64toi32_i32$0;
            i64toi32_i32$5 = -1;
            i64toi32_i32$2 = -1;
            i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$2 | 0;
            i64toi32_i32$0 = i64toi32_i32$3 + i64toi32_i32$5 | 0;
            if (i64toi32_i32$1 >>> 0 < i64toi32_i32$2 >>> 0) {
             i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
            }
            $1190$hi = i64toi32_i32$0;
            i64toi32_i32$0 = $1183$hi;
            i64toi32_i32$4 = $1190$hi;
            _ZN4gstd3msg7encoded4send17hcd3c8a5f410d87bfE($1178 | 0, $1180 | 0, 1049206 | 0, 12 | 0, $1183 | 0, i64toi32_i32$0 | 0, i64toi32_i32$1 | 0, i64toi32_i32$4 | 0);
            i64toi32_i32$4 = 232;
            i64toi32_i32$0 = 0;
            _ZN4gstd3msg7encoded4send17hcd3c8a5f410d87bfE($0 + 1016 | 0 | 0, $0 + 856 | 0 | 0, 1049218 | 0, 3 | 0, -727379968 | 0, i64toi32_i32$4 | 0, 0 | 0, i64toi32_i32$0 | 0);
            break label$3;
           }
           $6 = HEAP32[($0 + 392 | 0) >> 2] | 0;
           $25 = HEAPU8[($0 + 398 | 0) >> 0] | 0;
           $26 = HEAPU8[($0 + 397 | 0) >> 0] | 0;
           i64toi32_i32$3 = $5;
           i64toi32_i32$0 = HEAP32[i64toi32_i32$3 >> 2] | 0;
           i64toi32_i32$4 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
           $1205 = i64toi32_i32$0;
           i64toi32_i32$0 = ($0 + 904 | 0) + 8 | 0;
           HEAP32[i64toi32_i32$0 >> 2] = $1205;
           HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
           i64toi32_i32$3 = $21;
           i64toi32_i32$4 = HEAP32[i64toi32_i32$3 >> 2] | 0;
           i64toi32_i32$0 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
           $1210 = i64toi32_i32$4;
           i64toi32_i32$4 = ($0 + 888 | 0) + 8 | 0;
           HEAP32[i64toi32_i32$4 >> 2] = $1210;
           HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
           i64toi32_i32$3 = $0;
           i64toi32_i32$0 = HEAP32[($0 + 192 | 0) >> 2] | 0;
           i64toi32_i32$4 = HEAP32[($0 + 196 | 0) >> 2] | 0;
           $1213 = i64toi32_i32$0;
           i64toi32_i32$0 = $0;
           HEAP32[($0 + 904 | 0) >> 2] = $1213;
           HEAP32[($0 + 908 | 0) >> 2] = i64toi32_i32$4;
           i64toi32_i32$3 = $0;
           i64toi32_i32$4 = HEAP32[($0 + 176 | 0) >> 2] | 0;
           i64toi32_i32$0 = HEAP32[($0 + 180 | 0) >> 2] | 0;
           $1216 = i64toi32_i32$4;
           i64toi32_i32$4 = $0;
           HEAP32[($0 + 888 | 0) >> 2] = $1216;
           HEAP32[($0 + 892 | 0) >> 2] = i64toi32_i32$0;
           _ZN4gstd3msg5basic5value17haa09ba24469d684fE($0 + 128 | 0 | 0);
           i64toi32_i32$3 = $0;
           i64toi32_i32$0 = HEAP32[($0 + 128 | 0) >> 2] | 0;
           i64toi32_i32$4 = HEAP32[($0 + 132 | 0) >> 2] | 0;
           i64toi32_i32$3 = i64toi32_i32$0;
           i64toi32_i32$0 = 3725;
           i64toi32_i32$2 = 1246822400;
           i64toi32_i32$0 = i64toi32_i32$4 ^ i64toi32_i32$0 | 0;
           $1221 = i64toi32_i32$3 ^ i64toi32_i32$2 | 0;
           $1221$hi = i64toi32_i32$0;
           i64toi32_i32$4 = ($0 + 128 | 0) + 8 | 0;
           i64toi32_i32$0 = HEAP32[i64toi32_i32$4 >> 2] | 0;
           i64toi32_i32$3 = HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] | 0;
           $1225 = i64toi32_i32$0;
           $1225$hi = i64toi32_i32$3;
           i64toi32_i32$3 = $1221$hi;
           i64toi32_i32$4 = $1221;
           i64toi32_i32$0 = $1225$hi;
           i64toi32_i32$2 = $1225;
           i64toi32_i32$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
           if (!!(i64toi32_i32$4 | i64toi32_i32$2 | 0 | i64toi32_i32$0 | 0)) {
            break label$7
           }
           $4 = $1 ? 1050056 : 4;
           i64toi32_i32$0 = $13$hi;
           i64toi32_i32$0 = $7$hi;
           i64toi32_i32$0 = $13$hi;
           i64toi32_i32$4 = $7$hi;
           if (!(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$12contains_key17h714880aa4b96e7c1E(HEAP32[$2 >> 2] | 0 | 0, HEAP32[$4 >> 2] | 0 | 0, $13 | 0, i64toi32_i32$0 | 0, $7 | 0, i64toi32_i32$4 | 0) | 0)) {
            break label$10
           }
           i64toi32_i32$4 = i64toi32_i32$0;
           i64toi32_i32$4 = $7$hi;
           i64toi32_i32$4 = i64toi32_i32$0;
           i64toi32_i32$0 = $7$hi;
           _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h5063fbf37617e0beE($0 + 120 | 0 | 0, HEAP32[$2 >> 2] | 0 | 0, HEAP32[$4 >> 2] | 0 | 0, $13 | 0, i64toi32_i32$4 | 0, $7 | 0, i64toi32_i32$0 | 0);
           $3 = _ZN4core6option15Option$LT$T$GT$6expect17h0574d487979c98a9E(HEAP32[($0 + 120 | 0) >> 2] | 0 | 0, HEAP32[($0 + 124 | 0) >> 2] | 0 | 0) | 0;
           i64toi32_i32$3 = $3 + 24 | 0;
           i64toi32_i32$0 = HEAPU8[i64toi32_i32$3 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$3 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$3 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$3 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$4 = HEAPU8[(i64toi32_i32$3 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$3 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$3 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$3 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $1257 = i64toi32_i32$0;
           i64toi32_i32$0 = ($0 + 920 | 0) + 24 | 0;
           HEAP32[i64toi32_i32$0 >> 2] = $1257;
           HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
           i64toi32_i32$3 = $3 + 16 | 0;
           i64toi32_i32$4 = HEAPU8[i64toi32_i32$3 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$3 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$3 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$3 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$0 = HEAPU8[(i64toi32_i32$3 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$3 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$3 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$3 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $1263 = i64toi32_i32$4;
           i64toi32_i32$4 = ($0 + 920 | 0) + 16 | 0;
           HEAP32[i64toi32_i32$4 >> 2] = $1263;
           HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
           i64toi32_i32$3 = $3 + 8 | 0;
           i64toi32_i32$0 = HEAPU8[i64toi32_i32$3 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$3 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$3 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$3 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$4 = HEAPU8[(i64toi32_i32$3 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$3 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$3 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$3 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $1269 = i64toi32_i32$0;
           i64toi32_i32$0 = ($0 + 920 | 0) + 8 | 0;
           HEAP32[i64toi32_i32$0 >> 2] = $1269;
           HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$4;
           i64toi32_i32$3 = $3;
           i64toi32_i32$4 = HEAPU8[i64toi32_i32$3 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$3 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$3 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$3 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           i64toi32_i32$0 = HEAPU8[(i64toi32_i32$3 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$3 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$3 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$3 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $1272 = i64toi32_i32$4;
           i64toi32_i32$4 = $0;
           HEAP32[($0 + 920 | 0) >> 2] = $1272;
           HEAP32[($0 + 924 | 0) >> 2] = i64toi32_i32$0;
           _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 952 | 0 | 0);
           if (!(_ZN69_$LT$T$u20$as$u20$core__array__equality__SpecArrayEq$LT$U$C$_$GT$$GT$7spec_eq17hce9f348aa2b800ebE($0 + 920 | 0 | 0, $0 + 952 | 0 | 0) | 0)) {
            break label$9
           }
           i64toi32_i32$0 = $13$hi;
           i64toi32_i32$0 = $7$hi;
           i64toi32_i32$0 = $13$hi;
           i64toi32_i32$4 = $7$hi;
           _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h5063fbf37617e0beE($0 + 112 | 0 | 0, HEAP32[$2 >> 2] | 0 | 0, HEAP32[$4 >> 2] | 0 | 0, $13 | 0, i64toi32_i32$0 | 0, $7 | 0, i64toi32_i32$4 | 0);
           _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($0 + 224 | 0 | 0, _ZN4core6option15Option$LT$T$GT$6expect17h0574d487979c98a9E(HEAP32[($0 + 112 | 0) >> 2] | 0 | 0, HEAP32[($0 + 116 | 0) >> 2] | 0 | 0) | 0 | 0);
           _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE(HEAP32[($0 + 368 | 0) >> 2] | 0 | 0, HEAP32[($0 + 372 | 0) >> 2] | 0 | 0);
           HEAP32[($0 + 376 | 0) >> 2] = $6;
           i64toi32_i32$4 = $24$hi;
           i64toi32_i32$0 = $0;
           HEAP32[($0 + 368 | 0) >> 2] = $24;
           HEAP32[($0 + 372 | 0) >> 2] = i64toi32_i32$4;
           _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE(HEAP32[($0 + 356 | 0) >> 2] | 0 | 0, HEAP32[($0 + 360 | 0) >> 2] | 0 | 0);
           HEAP32[($0 + 364 | 0) >> 2] = HEAP32[(($0 + 888 | 0) + 12 | 0) >> 2] | 0;
           HEAP8[($0 + 381 | 0) >> 0] = $26;
           i64toi32_i32$3 = $0;
           i64toi32_i32$4 = HEAP32[($0 + 892 | 0) >> 2] | 0;
           i64toi32_i32$0 = HEAP32[($0 + 896 | 0) >> 2] | 0;
           $1321 = i64toi32_i32$4;
           i64toi32_i32$4 = $0;
           HEAP32[($0 + 356 | 0) >> 2] = $1321;
           HEAP32[($0 + 360 | 0) >> 2] = i64toi32_i32$0;
           _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE(HEAP32[($0 + 332 | 0) >> 2] | 0 | 0, HEAP32[($0 + 336 | 0) >> 2] | 0 | 0);
           HEAP32[($0 + 340 | 0) >> 2] = HEAP32[(($0 + 904 | 0) + 12 | 0) >> 2] | 0;
           HEAP8[($0 + 382 | 0) >> 0] = $25;
           i64toi32_i32$3 = $0;
           i64toi32_i32$0 = HEAP32[($0 + 908 | 0) >> 2] | 0;
           i64toi32_i32$4 = HEAP32[($0 + 912 | 0) >> 2] | 0;
           $1337 = i64toi32_i32$0;
           i64toi32_i32$0 = $0;
           HEAP32[($0 + 332 | 0) >> 2] = $1337;
           HEAP32[($0 + 336 | 0) >> 2] = i64toi32_i32$4;
           _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($0 + 1016 | 0 | 0, $0 + 224 | 0 | 0);
           i64toi32_i32$4 = $13$hi;
           i64toi32_i32$4 = $7$hi;
           i64toi32_i32$4 = $13$hi;
           i64toi32_i32$0 = $7$hi;
           _ZN11inscribe_io16InscribeIoStates15update_inscribe17h111a3a18fd43d7e9E($2 | 0, $13 | 0, i64toi32_i32$4 | 0, $7 | 0, i64toi32_i32$0 | 0, $0 + 1016 | 0 | 0);
           memcpy(($0 + 1016 | 0) + 16 | 0 | 0, $0 + 224 | 0 | 0, 168 | 0) | 0;
           i64toi32_i32$4 = $0;
           HEAP32[($0 + 1024 | 0) >> 2] = $7;
           HEAP32[($0 + 1028 | 0) >> 2] = i64toi32_i32$0;
           i64toi32_i32$0 = $13$hi;
           i64toi32_i32$4 = $0;
           HEAP32[($0 + 1016 | 0) >> 2] = $13;
           HEAP32[($0 + 1020 | 0) >> 2] = i64toi32_i32$0;
           _ZN4gstd3msg7encoded5reply17ha9d7a9a3242b8638E($0 + 408 | 0 | 0, $0 + 1016 | 0 | 0);
           _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($19 | 0, $20 | 0);
           _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($23 | 0, $22 | 0);
           break label$3;
          }
          _ZN4core6result13unwrap_failed17h2e8c86d620a44170E();
          wasm2js_trap();
         }
         _ZN4core9panicking13assert_failed17hb445ccacb36c6191E();
         wasm2js_trap();
        }
        _ZN4core9panicking13assert_failed17h681f17fd20e62ad6E();
        wasm2js_trap();
       }
       _ZN4core9panicking13assert_failed17h11d87aba98a83621E();
       wasm2js_trap();
      }
      _ZN4core9panicking13assert_failed17h1157ffc3f975f563E();
      wasm2js_trap();
     }
     _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
     wasm2js_trap();
    }
    $4 = 0;
   }
   _ZN4core6option15Option$LT$T$GT$6expect17he7a54e512a257d5bE($0 | 0, $4 | 0, $3 | 0);
   $3 = HEAP32[$0 >> 2] | 0;
   i64toi32_i32$3 = $3 + 8 | 0;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$3 >> 2] | 0;
   i64toi32_i32$4 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
   $13 = i64toi32_i32$0;
   $13$hi = i64toi32_i32$4;
   i64toi32_i32$3 = $3;
   i64toi32_i32$4 = HEAP32[i64toi32_i32$3 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] | 0;
   $7 = i64toi32_i32$4;
   $7$hi = i64toi32_i32$0;
   i64toi32_i32$4 = $0 + 296 | 0;
   i64toi32_i32$0 = 0;
   HEAP32[i64toi32_i32$4 >> 2] = 0;
   HEAP32[(i64toi32_i32$4 + 4 | 0) >> 2] = i64toi32_i32$0;
   $1378 = $0 + 264 | 0;
   i64toi32_i32$0 = $13$hi;
   $1379 = $13;
   $1379$hi = i64toi32_i32$0;
   i64toi32_i32$0 = $7$hi;
   i64toi32_i32$3 = $7;
   i64toi32_i32$4 = 0;
   i64toi32_i32$2 = 1;
   i64toi32_i32$5 = i64toi32_i32$3 + i64toi32_i32$2 | 0;
   i64toi32_i32$1 = i64toi32_i32$0 + i64toi32_i32$4 | 0;
   if (i64toi32_i32$5 >>> 0 < i64toi32_i32$2 >>> 0) {
    i64toi32_i32$1 = i64toi32_i32$1 + 1 | 0
   }
   $7 = i64toi32_i32$5;
   $7$hi = i64toi32_i32$1;
   $1383 = !(i64toi32_i32$5 | i64toi32_i32$1 | 0);
   i64toi32_i32$1 = 0;
   $1384$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $1379$hi;
   i64toi32_i32$0 = $1379;
   i64toi32_i32$3 = $1384$hi;
   i64toi32_i32$2 = $1383;
   i64toi32_i32$4 = i64toi32_i32$0 + i64toi32_i32$2 | 0;
   i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
   if (i64toi32_i32$4 >>> 0 < i64toi32_i32$2 >>> 0) {
    i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
   }
   $13 = i64toi32_i32$4;
   $13$hi = i64toi32_i32$5;
   i64toi32_i32$0 = $1378;
   HEAP32[i64toi32_i32$0 >> 2] = i64toi32_i32$4;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$5;
   i64toi32_i32$5 = $7$hi;
   i64toi32_i32$0 = $0;
   HEAP32[($0 + 256 | 0) >> 2] = $7;
   HEAP32[($0 + 260 | 0) >> 2] = i64toi32_i32$5;
   i64toi32_i32$0 = $0;
   i64toi32_i32$5 = 0;
   HEAP32[($0 + 288 | 0) >> 2] = 0;
   HEAP32[($0 + 292 | 0) >> 2] = i64toi32_i32$5;
   $189 = 256;
   HEAP8[($0 + 383 | 0) >> 0] = $189;
   HEAP8[($0 + 384 | 0) >> 0] = $189 >>> 8 | 0;
   i64toi32_i32$5 = $7$hi;
   i64toi32_i32$5 = $13$hi;
   i64toi32_i32$5 = $7$hi;
   i64toi32_i32$0 = $13$hi;
   _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17h8e1dc1f619fa85d6E($0 + 1016 | 0 | 0, $2 | 0, $7 | 0, i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, i64toi32_i32$0 | 0, $0 + 224 | 0 | 0);
   _ZN4core3ptr70drop_in_place$LT$core__option__Option$LT$inscribe_io__Inscribe$GT$$GT$17h1a96dba1b283c2f7E($0 + 1016 | 0 | 0);
   $3 = ($0 + 920 | 0) + 8 | 0;
   HEAP32[$3 >> 2] = 0;
   HEAP32[($0 + 920 | 0) >> 2] = 0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$5 = 0;
   _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17hb6b29aa8c46e9d2cE($0 + 920 | 0 | 0, $0 + 576 | 0 | 0, 0 | 0, i64toi32_i32$0 | 0, 0 | 0, i64toi32_i32$5 | 0);
   HEAP32[(($0 + 952 | 0) + 8 | 0) >> 2] = HEAP32[$3 >> 2] | 0;
   i64toi32_i32$1 = $0;
   i64toi32_i32$5 = HEAP32[($0 + 920 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($0 + 924 | 0) >> 2] | 0;
   $1416 = i64toi32_i32$5;
   i64toi32_i32$5 = $0;
   HEAP32[($0 + 952 | 0) >> 2] = $1416;
   HEAP32[($0 + 956 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$0 = $7$hi;
   i64toi32_i32$0 = $13$hi;
   i64toi32_i32$0 = $7$hi;
   i64toi32_i32$5 = $13$hi;
   _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17h4e7c8cc7e98634eaE($0 + 1016 | 0 | 0, ($1 ? 1050064 : 12) | 0, $7 | 0, i64toi32_i32$0 | 0, i64toi32_i32$4 | 0, i64toi32_i32$5 | 0, $0 + 952 | 0 | 0);
   label$28 : {
    if (!(HEAP32[($0 + 1016 | 0) >> 2] | 0)) {
     break label$28
    }
    _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h471fbf6adddb7064E($0 + 1020 | 0 | 0);
   }
   $3 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17hc7545c508dad6cb9E() | 0;
   i64toi32_i32$5 = $7$hi;
   i64toi32_i32$5 = $13$hi;
   i64toi32_i32$5 = $7$hi;
   i64toi32_i32$0 = $13$hi;
   i64toi32_i32$1 = 0;
   i64toi32_i32$2 = 0;
   _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h1736cc34262ca8b4E($3 | 0, $7 | 0, i64toi32_i32$5 | 0, $13 | 0, i64toi32_i32$0 | 0, 0 | 0, i64toi32_i32$1 | 0, 0 | 0, i64toi32_i32$2 | 0);
   i64toi32_i32$1 = $0;
   i64toi32_i32$2 = 1;
   HEAP32[($0 + 1020 | 0) >> 2] = 0;
   HEAP32[($0 + 1024 | 0) >> 2] = i64toi32_i32$2;
   HEAP32[($0 + 1016 | 0) >> 2] = $3;
   _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17hb3dd13c6de4f8444E($0 + 1016 | 0 | 0);
   memcpy($0 + 1016 | 0 | 0, $0 + 408 | 0 | 0, 168 | 0) | 0;
   HEAP8[($0 + 1192 | 0) >> 0] = 3;
   _ZN4gstd3msg7encoded5reply17ha9d7a9a3242b8638E($0 + 224 | 0 | 0, $0 + 1016 | 0 | 0);
   _ZN4core6result19Result$LT$T$C$E$GT$6expect17h9d7233476f212ae9E($0 + 1016 | 0 | 0, $0 + 224 | 0 | 0);
  }
  __stack_pointer = $0 + 1200 | 0;
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$12contains_key17h714880aa4b96e7c1E($0, $1, $2, $2$hi, $3, $3$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  var $4 = 0, i64toi32_i32$0 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  label$1 : {
   label$2 : {
    if ($0) {
     break label$2
    }
    $0 = 0;
    break label$1;
   }
   i64toi32_i32$0 = $2$hi;
   i64toi32_i32$0 = $3$hi;
   i64toi32_i32$0 = $2$hi;
   _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17hd768d5468b66fc06E($4 | 0, $0 | 0, $1 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, $3$hi | 0);
   $0 = !(HEAP32[$4 >> 2] | 0);
  }
  __stack_pointer = $4 + 16 | 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h5063fbf37617e0beE($0, $1, $2, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var $5 = 0, i64toi32_i32$0 = 0, $6 = 0;
  $5 = __stack_pointer - 16 | 0;
  __stack_pointer = $5;
  label$1 : {
   label$2 : {
    if ($1) {
     break label$2
    }
    $1 = 0;
    break label$1;
   }
   i64toi32_i32$0 = $3$hi;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$0 = $3$hi;
   _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17hd768d5468b66fc06E($5 | 0, $1 | 0, $2 | 0, $3 | 0, i64toi32_i32$0 | 0, $4 | 0, $4$hi | 0);
   $2 = HEAP32[($5 + 4 | 0) >> 2] | 0;
   $6 = HEAP32[($5 + 12 | 0) >> 2] | 0;
   $1 = HEAP32[$5 >> 2] | 0 ? 0 : $2 + ($6 << 4 | 0) | 0;
   $2 = ($2 + Math_imul($6, 168) | 0) + 176 | 0;
  }
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $5 + 16 | 0;
 }
 
 function _ZN4core6option15Option$LT$T$GT$6expect17he7a54e512a257d5bE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if ($1) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = $1;
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$7get_mut17h83c186c6bc62b6b7E($0, $1, $2, $2$hi, $3, $3$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  var $4 = 0, i64toi32_i32$0 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  label$1 : {
   label$2 : {
    if ($0) {
     break label$2
    }
    $0 = 0;
    break label$1;
   }
   i64toi32_i32$0 = $2$hi;
   i64toi32_i32$0 = $3$hi;
   i64toi32_i32$0 = $2$hi;
   _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17hba734900d5fd8398E($4 | 0, $0 | 0, $1 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, $3$hi | 0);
   $0 = (wasm2js_i32$0 = 0, wasm2js_i32$1 = ((HEAP32[($4 + 4 | 0) >> 2] | 0) + Math_imul(HEAP32[($4 + 12 | 0) >> 2] | 0, 12) | 0) + 180 | 0, wasm2js_i32$2 = HEAP32[$4 >> 2] | 0, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
  }
  __stack_pointer = $4 + 16 | 0;
  return $0 | 0;
 }
 
 function _ZN4core6option15Option$LT$T$GT$6expect17ha645ffcf0990b93eE($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$7get_mut17ha531a209515f3aeaE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0, wasm2js_i32$2 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    if ($0) {
     break label$2
    }
    $0 = 0;
    break label$1;
   }
   _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17h93726dd27de8c0d5E($3 | 0, $0 | 0, $1 | 0, $2 | 0);
   $0 = (wasm2js_i32$0 = 0, wasm2js_i32$1 = ((HEAP32[($3 + 4 | 0) >> 2] | 0) + ((HEAP32[($3 + 12 | 0) >> 2] | 0) << 4 | 0) | 0) + 352 | 0, wasm2js_i32$2 = HEAP32[$3 >> 2] | 0, wasm2js_i32$2 ? wasm2js_i32$0 : wasm2js_i32$1);
  }
  __stack_pointer = $3 + 16 | 0;
  return $0 | 0;
 }
 
 function _ZN4core6option15Option$LT$T$GT$6expect17h6f6a758ec9ec7a1bE($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h716bbfb2b20040cdE($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  label$1 : {
   label$2 : {
    if ($1) {
     break label$2
    }
    $1 = 0;
    break label$1;
   }
   _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17h93726dd27de8c0d5E($4 | 0, $1 | 0, $2 | 0, $3 | 0);
   $3 = HEAP32[($4 + 4 | 0) >> 2] | 0;
   $2 = HEAP32[($4 + 12 | 0) >> 2] | 0;
   $1 = HEAP32[$4 >> 2] | 0 ? 0 : $3 + ($2 << 5 | 0) | 0;
   $3 = ($3 + ($2 << 4 | 0) | 0) + 352 | 0;
  }
  HEAP32[($0 + 4 | 0) >> 2] = $3;
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $4 + 16 | 0;
 }
 
 function _ZN4core6option15Option$LT$T$GT$6expect17h28a2ef374e8a37deE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  return $1 | 0;
 }
 
 function _ZN11inscribe_io16InscribeIoStates19update_amt_index_id17hd5bbbc4bc640262cE($0, $1, $2, $2$hi, $3, $3$hi, $4, $5, $5$hi, $6, $6$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  $5$hi = $5$hi | 0;
  $6 = $6 | 0;
  $6$hi = $6$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, i64toi32_i32$5 = 0, $7 = 0, $8 = 0, $43 = 0, $52 = 0, $54$hi = 0, $56$hi = 0, $59 = 0, $60$hi = 0;
  $7 = __stack_pointer - 16 | 0;
  __stack_pointer = $7;
  label$1 : {
   label$2 : {
    label$3 : {
     i64toi32_i32$0 = $2$hi;
     i64toi32_i32$0 = $3$hi;
     i64toi32_i32$0 = $2$hi;
     i64toi32_i32$1 = $3$hi;
     $1 = _ZN4core6option15Option$LT$T$GT$6expect17ha645ffcf0990b93eE(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$7get_mut17h83c186c6bc62b6b7E($0 | 0, $1 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, i64toi32_i32$1 | 0) | 0 | 0) | 0;
     $0 = HEAP32[$1 >> 2] | 0;
     if (!$0) {
      break label$3
     }
     $8 = $1 + 4 | 0;
     _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17h93726dd27de8c0d5E($7 | 0, $0 | 0, HEAP32[$8 >> 2] | 0 | 0, $4 | 0);
     if (!(HEAP32[$7 >> 2] | 0)) {
      break label$2
     }
    }
    i64toi32_i32$1 = $5$hi;
    i64toi32_i32$1 = $6$hi;
    i64toi32_i32$1 = $5$hi;
    i64toi32_i32$0 = $6$hi;
    _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17hb6b29aa8c46e9d2cE($1 | 0, $4 | 0, $5 | 0, i64toi32_i32$1 | 0, $6 | 0, i64toi32_i32$0 | 0);
    break label$1;
   }
   $1 = _ZN4core6option15Option$LT$T$GT$6expect17h6f6a758ec9ec7a1bE(_ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$7get_mut17ha531a209515f3aeaE(HEAP32[$1 >> 2] | 0 | 0, HEAP32[$8 >> 2] | 0 | 0, $4 | 0) | 0 | 0) | 0;
   $43 = $1;
   i64toi32_i32$2 = $1;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $3 = i64toi32_i32$0;
   $3$hi = i64toi32_i32$1;
   i64toi32_i32$1 = $5$hi;
   i64toi32_i32$1 = $3$hi;
   i64toi32_i32$2 = i64toi32_i32$0;
   i64toi32_i32$0 = $5$hi;
   i64toi32_i32$3 = $5;
   i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
   i64toi32_i32$5 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
   if (i64toi32_i32$4 >>> 0 < i64toi32_i32$3 >>> 0) {
    i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
   }
   $2 = i64toi32_i32$4;
   $2$hi = i64toi32_i32$5;
   i64toi32_i32$2 = $43;
   HEAP32[i64toi32_i32$2 >> 2] = i64toi32_i32$4;
   HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = i64toi32_i32$5;
   $1 = $1 + 8 | 0;
   $52 = $1;
   i64toi32_i32$1 = $1;
   i64toi32_i32$5 = HEAP32[i64toi32_i32$1 >> 2] | 0;
   i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
   $54$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $6$hi;
   i64toi32_i32$2 = $54$hi;
   i64toi32_i32$1 = i64toi32_i32$5;
   i64toi32_i32$5 = $6$hi;
   i64toi32_i32$3 = $6;
   i64toi32_i32$0 = i64toi32_i32$1 + i64toi32_i32$3 | 0;
   i64toi32_i32$4 = i64toi32_i32$2 + i64toi32_i32$5 | 0;
   if (i64toi32_i32$0 >>> 0 < i64toi32_i32$3 >>> 0) {
    i64toi32_i32$4 = i64toi32_i32$4 + 1 | 0
   }
   $56$hi = i64toi32_i32$4;
   i64toi32_i32$4 = $2$hi;
   i64toi32_i32$4 = $3$hi;
   i64toi32_i32$4 = $2$hi;
   i64toi32_i32$2 = $2;
   i64toi32_i32$1 = $3$hi;
   i64toi32_i32$3 = $3;
   $59 = i64toi32_i32$4 >>> 0 < i64toi32_i32$1 >>> 0 | ((i64toi32_i32$4 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 < i64toi32_i32$3 >>> 0 | 0) | 0;
   i64toi32_i32$2 = 0;
   $60$hi = i64toi32_i32$2;
   i64toi32_i32$2 = $56$hi;
   i64toi32_i32$3 = i64toi32_i32$0;
   i64toi32_i32$4 = $60$hi;
   i64toi32_i32$1 = $59;
   i64toi32_i32$5 = i64toi32_i32$0 + i64toi32_i32$1 | 0;
   i64toi32_i32$0 = i64toi32_i32$2 + i64toi32_i32$4 | 0;
   if (i64toi32_i32$5 >>> 0 < i64toi32_i32$1 >>> 0) {
    i64toi32_i32$0 = i64toi32_i32$0 + 1 | 0
   }
   i64toi32_i32$3 = $52;
   HEAP32[i64toi32_i32$3 >> 2] = i64toi32_i32$5;
   HEAP32[(i64toi32_i32$3 + 4 | 0) >> 2] = i64toi32_i32$0;
  }
  __stack_pointer = $7 + 16 | 0;
 }
 
 function _ZN11inscribe_io16InscribeIoStates15update_inscribe17h111a3a18fd43d7e9E($0, $1, $1$hi, $2, $2$hi, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  var $4 = 0, i64toi32_i32$0 = 0;
  $4 = __stack_pointer - 176 | 0;
  __stack_pointer = $4;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $1$hi;
  _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17h8e1dc1f619fa85d6E($4 + 8 | 0 | 0, $0 | 0, $1 | 0, i64toi32_i32$0 | 0, $2 | 0, $2$hi | 0, $3 | 0);
  _ZN4core3ptr70drop_in_place$LT$core__option__Option$LT$inscribe_io__Inscribe$GT$$GT$17h1a96dba1b283c2f7E($4 + 8 | 0 | 0);
  __stack_pointer = $4 + 176 | 0;
 }
 
 function _ZN4core6option15Option$LT$T$GT$6expect17h0574d487979c98a9E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  return $1 | 0;
 }
 
 function _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$6insert17hcc2736c14493a121E($0, $1, $2, $2$hi, $3, $3$hi, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  var $5 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $10 = 0, $11 = 0, $6 = 0, $13 = 0, i64toi32_i32$3 = 0, $12 = 0, $9 = 0, $7 = 0, $14$hi = 0, $15$hi = 0, $16 = 0, $8 = 0, $15 = 0, $14 = 0, $17 = 0, $20 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $52 = 0, $51 = 0, $51$hi = 0, $57 = 0, $57$hi = 0, $59 = 0, $62 = 0, $65 = 0, $18 = 0, $19 = 0, $335 = 0;
  $5 = __stack_pointer - 496 | 0;
  __stack_pointer = $5;
  label$1 : {
   label$2 : {
    label$3 : {
     $6 = HEAP32[$1 >> 2] | 0;
     if (!$6) {
      break label$3
     }
     $7 = HEAP32[($1 + 4 | 0) >> 2] | 0;
     label$4 : while (1) {
      $8 = HEAPU16[($6 + 1150 | 0) >> 1] | 0;
      $9 = $8 << 4 | 0;
      $10 = 0;
      $11 = -1;
      $12 = 88;
      label$5 : {
       label$6 : while (1) {
        label$7 : {
         if (($9 | 0) != ($10 | 0)) {
          break label$7
         }
         $11 = $8;
         break label$5;
        }
        $13 = $6 + $10 | 0;
        $11 = $11 + 1 | 0;
        $12 = $12 + 88 | 0;
        $10 = $10 + 16 | 0;
        label$8 : {
         i64toi32_i32$2 = $13;
         i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
         i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
         $14 = i64toi32_i32$0;
         $14$hi = i64toi32_i32$1;
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$1 = $14$hi;
         i64toi32_i32$2 = i64toi32_i32$0;
         i64toi32_i32$0 = $2$hi;
         i64toi32_i32$3 = $2;
         i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
         $51 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
         $51$hi = i64toi32_i32$0;
         i64toi32_i32$1 = $13 + 8 | 0;
         i64toi32_i32$0 = HEAP32[i64toi32_i32$1 >> 2] | 0;
         i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
         $15 = i64toi32_i32$0;
         $15$hi = i64toi32_i32$2;
         i64toi32_i32$2 = $3$hi;
         i64toi32_i32$2 = $15$hi;
         i64toi32_i32$1 = i64toi32_i32$0;
         i64toi32_i32$0 = $3$hi;
         i64toi32_i32$3 = $3;
         i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
         $57 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
         $57$hi = i64toi32_i32$0;
         i64toi32_i32$0 = $51$hi;
         i64toi32_i32$2 = $51;
         i64toi32_i32$1 = $57$hi;
         i64toi32_i32$3 = $57;
         i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
         i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
         i64toi32_i32$2 = 0;
         i64toi32_i32$3 = 0;
         $59 = (i64toi32_i32$0 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0;
         i64toi32_i32$0 = $14$hi;
         i64toi32_i32$0 = $2$hi;
         i64toi32_i32$0 = $14$hi;
         i64toi32_i32$3 = $14;
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$2 = $2;
         $62 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$3 >>> 0 > i64toi32_i32$2 >>> 0 | 0) | 0;
         i64toi32_i32$3 = $15$hi;
         i64toi32_i32$3 = $3$hi;
         i64toi32_i32$3 = $15$hi;
         i64toi32_i32$2 = $15;
         i64toi32_i32$0 = $3$hi;
         i64toi32_i32$1 = $3;
         $65 = i64toi32_i32$3 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
         i64toi32_i32$2 = i64toi32_i32$3;
         i64toi32_i32$2 = i64toi32_i32$0;
         i64toi32_i32$2 = i64toi32_i32$3;
         i64toi32_i32$1 = $15;
         i64toi32_i32$3 = i64toi32_i32$0;
         i64toi32_i32$0 = $3;
         switch ((((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & (i64toi32_i32$2 | 0) == ($3$hi | 0) | 0 ? $62 : $65) ? -1 : $59) & 255 | 0 | 0) {
         case 1:
          continue label$6;
         case 0:
          break label$8;
         default:
          break label$5;
         };
        }
        break label$6;
       };
       $10 = $6 + $12 | 0;
       memcpy($0 | 0, $10 | 0, 88 | 0) | 0;
       memcpy($10 | 0, $4 | 0, 88 | 0) | 0;
       break label$1;
      }
      label$9 : {
       if (!$7) {
        break label$9
       }
       $7 = $7 + -1 | 0;
       $6 = HEAP32[(($6 + ($11 << 2 | 0) | 0) + 1152 | 0) >> 2] | 0;
       continue label$4;
      }
      break label$4;
     };
     i64toi32_i32$1 = $2$hi;
     i64toi32_i32$2 = $5;
     HEAP32[($5 + 56 | 0) >> 2] = $2;
     HEAP32[($5 + 60 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[($5 + 80 | 0) >> 2] = $11;
     HEAP32[($5 + 76 | 0) >> 2] = 0;
     HEAP32[($5 + 72 | 0) >> 2] = $6;
     HEAP32[($5 + 84 | 0) >> 2] = $1;
     i64toi32_i32$1 = $3$hi;
     i64toi32_i32$2 = $5;
     HEAP32[($5 + 64 | 0) >> 2] = $3;
     HEAP32[($5 + 68 | 0) >> 2] = i64toi32_i32$1;
     label$10 : {
      label$11 : {
       label$12 : {
        label$13 : {
         if ($8 >>> 0 > 10 >>> 0) {
          break label$13
         }
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$1 = $3$hi;
         i64toi32_i32$1 = $2$hi;
         i64toi32_i32$2 = $3$hi;
         _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h10727b9285dcb6d2E($5 + 312 | 0 | 0, $5 + 72 | 0 | 0, $2 | 0, i64toi32_i32$1 | 0, $3 | 0, i64toi32_i32$2 | 0, $4 | 0);
         break label$12;
        }
        _ZN5alloc11collections5btree4node10splitpoint17h70a17e5a7894fc59E($5 + 312 | 0 | 0, $11 | 0);
        $13 = HEAP32[($5 + 312 | 0) >> 2] | 0;
        $7 = HEAP32[(($5 + 312 | 0) + 8 | 0) >> 2] | 0;
        $8 = HEAP32[($5 + 316 | 0) >> 2] | 0;
        $10 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17hc962cc7b9951be50E() | 0;
        $16 = HEAPU16[($6 + 1150 | 0) >> 1] | 0;
        $12 = $16 + ($13 ^ -1 | 0) | 0;
        HEAP16[($10 + 1150 | 0) >> 1] = $12;
        $11 = $6 + ($13 << 4 | 0) | 0;
        i64toi32_i32$0 = $11;
        i64toi32_i32$2 = HEAP32[i64toi32_i32$0 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
        $15 = i64toi32_i32$2;
        $15$hi = i64toi32_i32$1;
        i64toi32_i32$0 = i64toi32_i32$0 + 8 | 0;
        i64toi32_i32$1 = HEAP32[i64toi32_i32$0 >> 2] | 0;
        i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
        $14 = i64toi32_i32$1;
        $14$hi = i64toi32_i32$2;
        $11 = $6 + Math_imul($13, 88) | 0;
        memcpy($5 + 192 | 0 | 0, $11 + 176 | 0 | 0, 80 | 0) | 0;
        $38 = $11 + 257 | 0;
        HEAP32[($5 + 112 | 0) >> 2] = HEAPU8[$38 >> 0] | 0 | ((HEAPU8[($38 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($38 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($38 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $39 = $11 + 260 | 0;
        $40 = HEAPU8[$39 >> 0] | 0 | ((HEAPU8[($39 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($39 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($39 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        HEAP8[($5 + 115 | 0) >> 0] = $40;
        HEAP8[($5 + 116 | 0) >> 0] = $40 >>> 8 | 0;
        HEAP8[($5 + 117 | 0) >> 0] = $40 >>> 16 | 0;
        HEAP8[($5 + 118 | 0) >> 0] = $40 >>> 24 | 0;
        $9 = HEAPU8[($11 + 256 | 0) >> 0] | 0;
        _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 48 | 0 | 0, $12 | 0, $10 | 0);
        $17 = $13 + 1 | 0;
        $16 = $16 - $17 | 0;
        _ZN5alloc11collections5btree4node13move_to_slice17h3965fa9b2d5c31c0E($6 + ($17 << 4 | 0) | 0 | 0, $16 | 0, HEAP32[($5 + 48 | 0) >> 2] | 0 | 0, HEAP32[($5 + 52 | 0) >> 2] | 0 | 0);
        _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 40 | 0 | 0, $12 | 0, $10 + 176 | 0 | 0);
        _ZN5alloc11collections5btree4node13move_to_slice17hae0475436609a383E($11 + 264 | 0 | 0, $16 | 0, HEAP32[($5 + 40 | 0) >> 2] | 0 | 0, HEAP32[($5 + 44 | 0) >> 2] | 0 | 0);
        HEAP16[($6 + 1150 | 0) >> 1] = $13;
        HEAP32[($5 + 320 | 0) >> 2] = $7;
        HEAP32[($5 + 316 | 0) >> 2] = 0;
        HEAP32[($5 + 312 | 0) >> 2] = $8 ? $10 : $6;
        i64toi32_i32$2 = $2$hi;
        i64toi32_i32$2 = $3$hi;
        i64toi32_i32$2 = $2$hi;
        i64toi32_i32$1 = $3$hi;
        _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h10727b9285dcb6d2E($5 + 408 | 0 | 0, $5 + 312 | 0 | 0, $2 | 0, i64toi32_i32$2 | 0, $3 | 0, i64toi32_i32$1 | 0, $4 | 0);
        if (($9 | 0) == (3 | 0)) {
         break label$12
        }
        memcpy($5 + 312 | 0 | 0, $5 + 192 | 0 | 0, 80 | 0) | 0;
        $41 = $5 + 396 | 0;
        $42 = HEAPU8[($5 + 115 | 0) >> 0] | 0 | ((HEAPU8[($5 + 116 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($5 + 117 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($5 + 118 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        HEAP8[$41 >> 0] = $42;
        HEAP8[($41 + 1 | 0) >> 0] = $42 >>> 8 | 0;
        HEAP8[($41 + 2 | 0) >> 0] = $42 >>> 16 | 0;
        HEAP8[($41 + 3 | 0) >> 0] = $42 >>> 24 | 0;
        HEAP8[($5 + 392 | 0) >> 0] = $9;
        $43 = HEAP32[($5 + 112 | 0) >> 2] | 0;
        HEAP8[($5 + 393 | 0) >> 0] = $43;
        HEAP8[($5 + 394 | 0) >> 0] = $43 >>> 8 | 0;
        HEAP8[($5 + 395 | 0) >> 0] = $43 >>> 16 | 0;
        HEAP8[($5 + 396 | 0) >> 0] = $43 >>> 24 | 0;
        label$14 : {
         label$15 : {
          label$16 : {
           $9 = HEAP32[($6 + 1144 | 0) >> 2] | 0;
           if ($9) {
            break label$16
           }
           $12 = 0;
           $13 = 0;
           break label$15;
          }
          $18 = $5 + 393 | 0;
          $13 = 0;
          $16 = $10;
          i64toi32_i32$1 = $15$hi;
          $3 = $15;
          $3$hi = i64toi32_i32$1;
          i64toi32_i32$1 = $14$hi;
          $2 = $14;
          $2$hi = i64toi32_i32$1;
          $11 = 0;
          $7 = $6;
          label$17 : while (1) {
           $6 = $9;
           HEAP32[($5 + 92 | 0) >> 2] = $6;
           $10 = HEAPU16[($7 + 1148 | 0) >> 1] | 0;
           HEAP32[($5 + 100 | 0) >> 2] = $10;
           $12 = $11 + 1 | 0;
           HEAP32[($5 + 96 | 0) >> 2] = $12;
           if (($11 | 0) != ($13 | 0)) {
            break label$11
           }
           $17 = HEAPU16[($6 + 1150 | 0) >> 1] | 0;
           if ($17 >>> 0 < 11 >>> 0) {
            break label$14
           }
           _ZN5alloc11collections5btree4node10splitpoint17h70a17e5a7894fc59E($5 + 192 | 0 | 0, $10 | 0);
           $10 = HEAP32[($5 + 192 | 0) >> 2] | 0;
           $19 = HEAP32[($5 + 200 | 0) >> 2] | 0;
           $8 = HEAP32[($5 + 196 | 0) >> 2] | 0;
           $13 = _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h1195a3973c1ce86dE() | 0;
           $20 = HEAPU16[($6 + 1150 | 0) >> 1] | 0;
           $9 = $20 + ($10 ^ -1 | 0) | 0;
           HEAP16[($13 + 1150 | 0) >> 1] = $9;
           $11 = $6 + ($10 << 4 | 0) | 0;
           i64toi32_i32$0 = $11 + 8 | 0;
           i64toi32_i32$1 = HEAP32[i64toi32_i32$0 >> 2] | 0;
           i64toi32_i32$2 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
           $14 = i64toi32_i32$1;
           $14$hi = i64toi32_i32$2;
           i64toi32_i32$0 = $11;
           i64toi32_i32$2 = HEAP32[i64toi32_i32$0 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] | 0;
           $15 = i64toi32_i32$2;
           $15$hi = i64toi32_i32$1;
           $11 = $6 + Math_imul($10, 88) | 0;
           memcpy($5 + 192 | 0 | 0, $11 + 176 | 0 | 0, 80 | 0) | 0;
           $44 = $11 + 257 | 0;
           HEAP32[($5 + 488 | 0) >> 2] = HEAPU8[$44 >> 0] | 0 | ((HEAPU8[($44 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($44 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($44 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           $45 = $11 + 260 | 0;
           $46 = HEAPU8[$45 >> 0] | 0 | ((HEAPU8[($45 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($45 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($45 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           HEAP8[($5 + 491 | 0) >> 0] = $46;
           HEAP8[($5 + 492 | 0) >> 0] = $46 >>> 8 | 0;
           HEAP8[($5 + 493 | 0) >> 0] = $46 >>> 16 | 0;
           HEAP8[($5 + 494 | 0) >> 0] = $46 >>> 24 | 0;
           $4 = HEAPU8[($11 + 256 | 0) >> 0] | 0;
           _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 32 | 0 | 0, $9 | 0, $13 | 0);
           $7 = $10 + 1 | 0;
           $20 = $20 - $7 | 0;
           _ZN5alloc11collections5btree4node13move_to_slice17h3965fa9b2d5c31c0E($6 + ($7 << 4 | 0) | 0 | 0, $20 | 0, HEAP32[($5 + 32 | 0) >> 2] | 0 | 0, HEAP32[($5 + 36 | 0) >> 2] | 0 | 0);
           _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($5 + 24 | 0 | 0, $9 | 0, $13 + 176 | 0 | 0);
           _ZN5alloc11collections5btree4node13move_to_slice17hae0475436609a383E($11 + 264 | 0 | 0, $20 | 0, HEAP32[($5 + 24 | 0) >> 2] | 0 | 0, HEAP32[($5 + 28 | 0) >> 2] | 0 | 0);
           HEAP16[($6 + 1150 | 0) >> 1] = $10;
           $11 = HEAPU16[($13 + 1150 | 0) >> 1] | 0;
           if ($11 >>> 0 >= 12 >>> 0) {
            break label$10
           }
           $335 = $17 - $10 | 0;
           $10 = $11 + 1 | 0;
           if (($335 | 0) != ($10 | 0)) {
            break label$11
           }
           memcpy($13 + 1152 | 0 | 0, ($6 + ($7 << 2 | 0) | 0) + 1152 | 0 | 0, $10 << 2 | 0 | 0) | 0;
           _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17h39875522d2428908E($5 + 16 | 0 | 0, $13 | 0, $12 | 0);
           $10 = HEAP32[($5 + 16 | 0) >> 2] | 0;
           $13 = HEAP32[($5 + 20 | 0) >> 2] | 0;
           memcpy($5 + 408 | 0 | 0, $5 + 192 | 0 | 0, 80 | 0) | 0;
           $47 = HEAPU8[($5 + 491 | 0) >> 0] | 0 | ((HEAPU8[($5 + 492 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($5 + 493 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($5 + 494 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           HEAP8[($5 + 403 | 0) >> 0] = $47;
           HEAP8[($5 + 404 | 0) >> 0] = $47 >>> 8 | 0;
           HEAP8[($5 + 405 | 0) >> 0] = $47 >>> 16 | 0;
           HEAP8[($5 + 406 | 0) >> 0] = $47 >>> 24 | 0;
           HEAP32[($5 + 400 | 0) >> 2] = HEAP32[($5 + 488 | 0) >> 2] | 0;
           HEAP32[($5 + 200 | 0) >> 2] = $19;
           HEAP32[($5 + 196 | 0) >> 2] = $8 ? $13 : $12;
           HEAP32[($5 + 192 | 0) >> 2] = $8 ? $10 : $6;
           i64toi32_i32$1 = $3$hi;
           i64toi32_i32$1 = $2$hi;
           i64toi32_i32$1 = $3$hi;
           i64toi32_i32$2 = $2$hi;
           _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17he9d506f7a3d34eebE($5 + 192 | 0 | 0, $3 | 0, i64toi32_i32$1 | 0, $2 | 0, i64toi32_i32$2 | 0, $5 + 312 | 0 | 0, $16 | 0);
           memcpy($5 + 112 | 0 | 0, $5 + 408 | 0 | 0, 80 | 0) | 0;
           $48 = HEAPU8[($5 + 403 | 0) >> 0] | 0 | ((HEAPU8[($5 + 404 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($5 + 405 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($5 + 406 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           HEAP8[($5 + 107 | 0) >> 0] = $48;
           HEAP8[($5 + 108 | 0) >> 0] = $48 >>> 8 | 0;
           HEAP8[($5 + 109 | 0) >> 0] = $48 >>> 16 | 0;
           HEAP8[($5 + 110 | 0) >> 0] = $48 >>> 24 | 0;
           HEAP32[($5 + 104 | 0) >> 2] = HEAP32[($5 + 400 | 0) >> 2] | 0;
           if (($4 & 255 | 0 | 0) == (3 | 0)) {
            break label$12
           }
           memcpy($5 + 312 | 0 | 0, $5 + 112 | 0 | 0, 80 | 0) | 0;
           $37 = $18;
           $49 = HEAP32[($5 + 104 | 0) >> 2] | 0;
           HEAP8[$37 >> 0] = $49;
           HEAP8[($37 + 1 | 0) >> 0] = $49 >>> 8 | 0;
           HEAP8[($37 + 2 | 0) >> 0] = $49 >>> 16 | 0;
           HEAP8[($37 + 3 | 0) >> 0] = $49 >>> 24 | 0;
           $50 = $37 + 3 | 0;
           $52 = HEAPU8[($5 + 107 | 0) >> 0] | 0 | ((HEAPU8[($5 + 108 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($5 + 109 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($5 + 110 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
           HEAP8[$50 >> 0] = $52;
           HEAP8[($50 + 1 | 0) >> 0] = $52 >>> 8 | 0;
           HEAP8[($50 + 2 | 0) >> 0] = $52 >>> 16 | 0;
           HEAP8[($50 + 3 | 0) >> 0] = $52 >>> 24 | 0;
           HEAP8[($5 + 392 | 0) >> 0] = $4;
           $16 = $10;
           i64toi32_i32$2 = $15$hi;
           $3 = $15;
           $3$hi = i64toi32_i32$2;
           i64toi32_i32$2 = $14$hi;
           $2 = $14;
           $2$hi = i64toi32_i32$2;
           $11 = $12;
           $7 = $6;
           $9 = HEAP32[($6 + 1144 | 0) >> 2] | 0;
           if ($9) {
            continue label$17
           }
           break label$17;
          };
         }
         $11 = memcpy($5 + 224 | 0 | 0, $5 + 312 | 0 | 0, 88 | 0) | 0;
         i64toi32_i32$2 = $14$hi;
         i64toi32_i32$1 = $5 + 216 | 0;
         HEAP32[i64toi32_i32$1 >> 2] = $14;
         HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$2;
         i64toi32_i32$2 = $15$hi;
         i64toi32_i32$1 = $5;
         HEAP32[($5 + 208 | 0) >> 2] = $15;
         HEAP32[($5 + 212 | 0) >> 2] = i64toi32_i32$2;
         HEAP32[($5 + 204 | 0) >> 2] = $13;
         HEAP32[($5 + 200 | 0) >> 2] = $10;
         HEAP32[($5 + 196 | 0) >> 2] = $12;
         HEAP32[($5 + 192 | 0) >> 2] = $6;
         if (!(HEAP32[$1 >> 2] | 0)) {
          break label$11
         }
         _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h06f0f0576f802d71E($5 + 8 | 0 | 0, $1 | 0);
         i64toi32_i32$2 = $14$hi;
         i64toi32_i32$2 = $15$hi;
         i64toi32_i32$1 = $14$hi;
         _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17h2adbadf5ee1329c8E(HEAP32[($5 + 8 | 0) >> 2] | 0 | 0, HEAP32[($5 + 12 | 0) >> 2] | 0 | 0, $15 | 0, i64toi32_i32$2 | 0, $14 | 0, i64toi32_i32$1 | 0, $11 | 0, $10 | 0, $13 | 0);
         break label$12;
        }
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$1 = $2$hi;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$2 = $2$hi;
        _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17he9d506f7a3d34eebE($5 + 92 | 0 | 0, $3 | 0, i64toi32_i32$1 | 0, $2 | 0, i64toi32_i32$2 | 0, $5 + 312 | 0 | 0, $16 | 0);
       }
       HEAP32[($1 + 8 | 0) >> 2] = (HEAP32[($1 + 8 | 0) >> 2] | 0) + 1 | 0;
       break label$2;
      }
      _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
      wasm2js_trap();
     }
     _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
     wasm2js_trap();
    }
    $10 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17hc962cc7b9951be50E() | 0;
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$2 = $3$hi;
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$1 = $3$hi;
    _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h84fdcf4355257951E($10 | 0, $2 | 0, i64toi32_i32$2 | 0, $3 | 0, i64toi32_i32$1 | 0, $4 | 0);
    i64toi32_i32$2 = $1;
    i64toi32_i32$1 = 1;
    HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] = 0;
    HEAP32[(i64toi32_i32$2 + 8 | 0) >> 2] = i64toi32_i32$1;
    HEAP32[i64toi32_i32$2 >> 2] = $10;
   }
   HEAP8[($0 + 80 | 0) >> 0] = 3;
  }
  __stack_pointer = $5 + 496 | 0;
 }
 
 function _ZN4core6result19Result$LT$T$C$E$GT$6expect17h9d7233476f212ae9E($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $9 = 0, $10 = 0, $12 = 0, $13 = 0, $6 = 0, $11 = 0, $16 = 0, $21 = 0;
  label$1 : {
   if (HEAPU8[$1 >> 0] | 0) {
    break label$1
   }
   i64toi32_i32$2 = $1;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 8 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $6 = i64toi32_i32$0;
   i64toi32_i32$0 = $0;
   $9 = $6;
   HEAP8[i64toi32_i32$0 >> 0] = $9;
   HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $9 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $9 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $9 >>> 24 | 0;
   HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
   HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
   i64toi32_i32$2 = i64toi32_i32$2 + 25 | 0;
   i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $11 = i64toi32_i32$1;
   i64toi32_i32$1 = $0 + 24 | 0;
   $10 = $11;
   HEAP8[i64toi32_i32$1 >> 0] = $10;
   HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $10 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $10 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $10 >>> 24 | 0;
   HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
   HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
   i64toi32_i32$2 = $1 + 17 | 0;
   i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $16 = i64toi32_i32$0;
   i64toi32_i32$0 = $0 + 16 | 0;
   $12 = $16;
   HEAP8[i64toi32_i32$0 >> 0] = $12;
   HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $12 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $12 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $12 >>> 24 | 0;
   HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
   HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
   i64toi32_i32$2 = $1 + 9 | 0;
   i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $21 = i64toi32_i32$1;
   i64toi32_i32$1 = $0 + 8 | 0;
   $13 = $21;
   HEAP8[i64toi32_i32$1 >> 0] = $13;
   HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $13 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $13 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $13 >>> 24 | 0;
   HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
   HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
   return;
  }
  _ZN4core6result13unwrap_failed17h2e8c86d620a44170E();
  wasm2js_trap();
 }
 
 function _ZN4core9panicking13assert_failed17hb445ccacb36c6191E() {
  _ZN4core9panicking19assert_failed_inner17h5511dfd79d7cf6bfE();
  wasm2js_trap();
 }
 
 function _ZN4core9panicking13assert_failed17h681f17fd20e62ad6E() {
  _ZN4core9panicking19assert_failed_inner17h5511dfd79d7cf6bfE();
  wasm2js_trap();
 }
 
 function state() {
  var $0 = 0, $1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $2 = 0, $4 = 0, $3 = 0, $8 = 0, i64toi32_i32$4 = 0, $6 = 0, $6$hi = 0, $5 = 0, $5$hi = 0, i64toi32_i32$3 = 0, $9 = 0, $7 = 0, $37 = 0, $38 = 0, $39 = 0, $52 = 0, $59 = 0, $66 = 0, $69 = 0, $80 = 0, $88 = 0, $91 = 0, $123 = 0, $123$hi = 0, $127 = 0, $127$hi = 0, $151 = 0, $161 = 0, $161$hi = 0, $163 = 0, $163$hi = 0, $228 = 0, $263 = 0, $290 = 0, $331 = 0;
  $0 = __stack_pointer - 976 | 0;
  __stack_pointer = $0;
  $1 = _ZN5gcore3msg4size17h30975cd15d439740E() | 0;
  HEAP32[($0 + 884 | 0) >> 2] = $1;
  label$1 : {
   label$2 : {
    if ($1 >>> 0 < 65537 >>> 0) {
     break label$2
    }
    _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 216 | 0 | 0, $1 | 0, 0 | 0);
    $2 = HEAP32[($0 + 216 | 0) >> 2] | 0;
    $3 = HEAP32[($0 + 220 | 0) >> 2] | 0;
    _ZN5gcore3msg18with_read_on_stack28_$u7b$$u7b$closure$u7d$$u7d$17he8e3a79b37faa861E($0 + 344 | 0 | 0, $1 | 0, $2 | 0, $3 | 0);
    _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($2 | 0, $3 | 0);
    break label$1;
   }
   HEAP32[($0 + 924 | 0) >> 2] = $1;
   HEAP32[($0 + 256 | 0) >> 2] = $0 + 884 | 0;
   HEAP32[($0 + 252 | 0) >> 2] = $0 + 688 | 0;
   HEAP32[($0 + 248 | 0) >> 2] = $0 + 924 | 0;
   c_with_alloca($1 | 0, 5 | 0, $0 + 248 | 0 | 0);
   i64toi32_i32$2 = ($0 + 688 | 0) + 24 | 0;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $52 = i64toi32_i32$0;
   i64toi32_i32$0 = ($0 + 344 | 0) + 24 | 0;
   HEAP32[i64toi32_i32$0 >> 2] = $52;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   i64toi32_i32$2 = ($0 + 688 | 0) + 16 | 0;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $59 = i64toi32_i32$1;
   i64toi32_i32$1 = ($0 + 344 | 0) + 16 | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $59;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$2 = ($0 + 688 | 0) + 8 | 0;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $66 = i64toi32_i32$0;
   i64toi32_i32$0 = ($0 + 344 | 0) + 8 | 0;
   HEAP32[i64toi32_i32$0 >> 2] = $66;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   i64toi32_i32$2 = $0;
   i64toi32_i32$1 = HEAP32[($0 + 688 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($0 + 692 | 0) >> 2] | 0;
   $69 = i64toi32_i32$1;
   i64toi32_i32$1 = $0;
   HEAP32[($0 + 344 | 0) >> 2] = $69;
   HEAP32[($0 + 348 | 0) >> 2] = i64toi32_i32$0;
  }
  label$3 : {
   label$4 : {
    label$5 : {
     $1 = HEAP32[($0 + 344 | 0) >> 2] | 0;
     if (($1 | 0) == (8 | 0)) {
      break label$5
     }
     i64toi32_i32$2 = ($0 + 344 | 0) + 16 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $80 = i64toi32_i32$0;
     i64toi32_i32$0 = ($0 + 224 | 0) + 8 | 0;
     HEAP32[i64toi32_i32$0 >> 2] = $80;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     $2 = ($0 + 224 | 0) + 16 | 0;
     i64toi32_i32$2 = ($0 + 344 | 0) + 24 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $88 = i64toi32_i32$1;
     i64toi32_i32$1 = $2;
     HEAP32[i64toi32_i32$1 >> 2] = $88;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$2 = $0;
     i64toi32_i32$0 = HEAP32[($0 + 352 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($0 + 356 | 0) >> 2] | 0;
     $91 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     HEAP32[($0 + 224 | 0) >> 2] = $91;
     HEAP32[($0 + 228 | 0) >> 2] = i64toi32_i32$1;
     $3 = 0;
     $4 = HEAP32[($0 + 348 | 0) >> 2] | 0;
     _ZN68_$LT$inscribe_io__InscribeIoStates$u20$as$u20$core__clone__Clone$GT$5clone17h1b06454caaa979eaE($0 + 248 | 0 | 0, _ZN4core6option15Option$LT$T$GT$6expect17hfe0bcb06273b16deE((HEAP32[(0 + 1050048 | 0) >> 2] | 0 ? 1050052 : 0) | 0) | 0 | 0);
     label$6 : {
      label$7 : {
       switch ($1 | 0) {
       default:
        _ZN68_$LT$inscribe_io__InscribeIoStates$u20$as$u20$core__clone__Clone$GT$5clone17h1b06454caaa979eaE($0 + 688 | 0 | 0, $0 + 248 | 0 | 0);
        i64toi32_i32$2 = $0 + 700 | 0;
        i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $5 = i64toi32_i32$1;
        $5$hi = i64toi32_i32$0;
        i64toi32_i32$2 = $0;
        i64toi32_i32$0 = HEAP32[($0 + 692 | 0) >> 2] | 0;
        i64toi32_i32$1 = HEAP32[($0 + 696 | 0) >> 2] | 0;
        $6 = i64toi32_i32$0;
        $6$hi = i64toi32_i32$1;
        $2 = HEAP32[($0 + 688 | 0) >> 2] | 0;
        memcpy($0 + 344 | 0 | 0, $0 + 708 | 0 | 0, 76 | 0) | 0;
        break label$6;
       case 1:
        i64toi32_i32$2 = $0;
        i64toi32_i32$1 = HEAP32[($0 + 224 | 0) >> 2] | 0;
        i64toi32_i32$0 = HEAP32[($0 + 228 | 0) >> 2] | 0;
        $123 = i64toi32_i32$1;
        $123$hi = i64toi32_i32$0;
        i64toi32_i32$2 = ($0 + 224 | 0) + 8 | 0;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $127 = i64toi32_i32$0;
        $127$hi = i64toi32_i32$1;
        i64toi32_i32$1 = $123$hi;
        i64toi32_i32$0 = $127$hi;
        _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h5063fbf37617e0beE($0 + 192 | 0 | 0, HEAP32[($0 + 248 | 0) >> 2] | 0 | 0, HEAP32[($0 + 252 | 0) >> 2] | 0 | 0, $123 | 0, i64toi32_i32$1 | 0, $127 | 0, i64toi32_i32$0 | 0);
        _ZN60_$LT$inscribe_io__Inscribe$u20$as$u20$core__clone__Clone$GT$5clone17he5de704f7aef410fE($0 + 504 | 0 | 0, _ZN4core6option15Option$LT$T$GT$6expect17h0574d487979c98a9E(HEAP32[($0 + 192 | 0) >> 2] | 0 | 0, HEAP32[($0 + 196 | 0) >> 2] | 0 | 0) | 0 | 0);
        i64toi32_i32$2 = ($0 + 504 | 0) + 8 | 0;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $5 = i64toi32_i32$0;
        $5$hi = i64toi32_i32$1;
        i64toi32_i32$2 = $0;
        i64toi32_i32$1 = HEAP32[($0 + 504 | 0) >> 2] | 0;
        i64toi32_i32$0 = HEAP32[($0 + 508 | 0) >> 2] | 0;
        $6 = i64toi32_i32$1;
        $6$hi = i64toi32_i32$0;
        memcpy($0 + 344 | 0 | 0, ($0 + 504 | 0) + 16 | 0 | 0, 152 | 0) | 0;
        $3 = 1;
        break label$6;
       case 2:
        HEAP32[($0 + 676 | 0) >> 2] = $4;
        i64toi32_i32$2 = $0;
        i64toi32_i32$0 = HEAP32[($0 + 224 | 0) >> 2] | 0;
        i64toi32_i32$1 = HEAP32[($0 + 228 | 0) >> 2] | 0;
        $151 = i64toi32_i32$0;
        i64toi32_i32$0 = $0;
        HEAP32[($0 + 680 | 0) >> 2] = $151;
        HEAP32[($0 + 684 | 0) >> 2] = i64toi32_i32$1;
        i64toi32_i32$2 = $0;
        i64toi32_i32$1 = HEAP32[($0 + 232 | 0) >> 2] | 0;
        i64toi32_i32$0 = HEAP32[($0 + 236 | 0) >> 2] | 0;
        $161 = i64toi32_i32$1;
        $161$hi = i64toi32_i32$0;
        i64toi32_i32$2 = $2;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $163 = i64toi32_i32$0;
        $163$hi = i64toi32_i32$1;
        i64toi32_i32$1 = $161$hi;
        i64toi32_i32$0 = $163$hi;
        _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h0b236e04ced9e431E($0 + 208 | 0 | 0, HEAP32[($0 + 260 | 0) >> 2] | 0 | 0, HEAP32[(($0 + 248 | 0) + 16 | 0) >> 2] | 0 | 0, $161 | 0, i64toi32_i32$1 | 0, $163 | 0, i64toi32_i32$0 | 0);
        _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17hbcf2255af67c51f4E($0 + 924 | 0 | 0, _ZN4core6option15Option$LT$T$GT$6expect17h0574d487979c98a9E(HEAP32[($0 + 208 | 0) >> 2] | 0 | 0, HEAP32[($0 + 212 | 0) >> 2] | 0 | 0) | 0 | 0);
        _ZN4gstd6common10primitives7ActorId9from_bs5817h05627def41de7e49E($0 + 688 | 0 | 0, $0 + 676 | 0 | 0);
        _ZN4core6result19Result$LT$T$C$E$GT$6expect17h9d7233476f212ae9E($0 + 344 | 0 | 0, $0 + 688 | 0 | 0);
        _ZN5alloc11collections5btree3map25BTreeMap$LT$K$C$V$C$A$GT$13get_key_value17h716bbfb2b20040cdE($0 + 200 | 0 | 0, HEAP32[($0 + 924 | 0) >> 2] | 0 | 0, HEAP32[($0 + 928 | 0) >> 2] | 0 | 0, $0 + 344 | 0 | 0);
        $1 = _ZN4core6option15Option$LT$T$GT$6expect17h28a2ef374e8a37deE(HEAP32[($0 + 200 | 0) >> 2] | 0 | 0, HEAP32[($0 + 204 | 0) >> 2] | 0 | 0) | 0;
        i64toi32_i32$2 = $1;
        i64toi32_i32$0 = HEAP32[$1 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[($1 + 4 | 0) >> 2] | 0;
        $6 = i64toi32_i32$0;
        $6$hi = i64toi32_i32$1;
        i64toi32_i32$2 = $1 + 8 | 0;
        i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $5 = i64toi32_i32$1;
        $5$hi = i64toi32_i32$0;
        _ZN99_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h471fbf6adddb7064E($0 + 924 | 0 | 0);
        $3 = 2;
        break label$6;
       case 3:
        HEAP32[($0 + 688 | 0) >> 2] = 0;
        gr_block_height($0 + 688 | 0 | 0);
        $2 = HEAP32[($0 + 688 | 0) >> 2] | 0;
        $3 = 7;
        break label$6;
       case 4:
        i64toi32_i32$1 = $0;
        i64toi32_i32$0 = 0;
        HEAP32[($0 + 688 | 0) >> 2] = 0;
        HEAP32[($0 + 692 | 0) >> 2] = i64toi32_i32$0;
        gr_block_timestamp($0 + 688 | 0 | 0);
        i64toi32_i32$2 = $0;
        i64toi32_i32$0 = HEAP32[($0 + 688 | 0) >> 2] | 0;
        i64toi32_i32$1 = HEAP32[($0 + 692 | 0) >> 2] | 0;
        $6 = i64toi32_i32$0;
        $6$hi = i64toi32_i32$1;
        $3 = 8;
        break label$6;
       case 5:
        _ZN4gstd4exec5basic10program_id17had36370ac3ee1338E($0 + 688 | 0 | 0);
        HEAP8[(($0 + 500 | 0) + 2 | 0) >> 0] = HEAPU8[(($0 + 688 | 0) + 2 | 0) >> 0] | 0;
        HEAP8[($0 + 352 | 0) >> 0] = HEAPU8[($0 + 719 | 0) >> 0] | 0;
        HEAP16[($0 + 500 | 0) >> 1] = HEAPU8[($0 + 688 | 0) >> 0] | 0 | ((HEAPU8[($0 + 689 | 0) >> 0] | 0) << 8 | 0) | 0;
        i64toi32_i32$2 = $0;
        i64toi32_i32$1 = HEAPU8[($0 + 711 | 0) >> 0] | 0 | ((HEAPU8[($0 + 712 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 713 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 714 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$0 = HEAPU8[($0 + 715 | 0) >> 0] | 0 | ((HEAPU8[($0 + 716 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 717 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 718 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $228 = i64toi32_i32$1;
        i64toi32_i32$1 = $0;
        HEAP32[($0 + 344 | 0) >> 2] = $228;
        HEAP32[($0 + 348 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$2 = $0 + 703 | 0;
        i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $5 = i64toi32_i32$0;
        $5$hi = i64toi32_i32$1;
        i64toi32_i32$2 = $0;
        i64toi32_i32$1 = HEAPU8[($0 + 695 | 0) >> 0] | 0 | ((HEAPU8[($0 + 696 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 697 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 698 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$0 = HEAPU8[($0 + 699 | 0) >> 0] | 0 | ((HEAPU8[($0 + 700 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 701 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 702 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $6 = i64toi32_i32$1;
        $6$hi = i64toi32_i32$0;
        $2 = HEAPU8[($0 + 691 | 0) >> 0] | 0 | ((HEAPU8[($0 + 692 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 693 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 694 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $3 = 9;
        break label$6;
       case 6:
        i64toi32_i32$1 = ($0 + 688 | 0) + 24 | 0;
        i64toi32_i32$0 = 0;
        HEAP32[i64toi32_i32$1 >> 2] = 0;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$1 = ($0 + 688 | 0) + 16 | 0;
        i64toi32_i32$0 = 0;
        HEAP32[i64toi32_i32$1 >> 2] = 0;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$1 = ($0 + 688 | 0) + 8 | 0;
        i64toi32_i32$0 = 0;
        HEAP32[i64toi32_i32$1 >> 2] = 0;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$1 = $0;
        i64toi32_i32$0 = 0;
        HEAP32[($0 + 688 | 0) >> 2] = 0;
        HEAP32[($0 + 692 | 0) >> 2] = i64toi32_i32$0;
        gr_message_id($0 + 688 | 0 | 0);
        HEAP8[($0 + 502 | 0) >> 0] = HEAPU8[($0 + 690 | 0) >> 0] | 0;
        HEAP8[(($0 + 344 | 0) + 8 | 0) >> 0] = HEAPU8[($0 + 719 | 0) >> 0] | 0;
        HEAP16[($0 + 500 | 0) >> 1] = HEAPU16[($0 + 688 | 0) >> 1] | 0;
        i64toi32_i32$2 = $0;
        i64toi32_i32$0 = HEAPU8[($0 + 711 | 0) >> 0] | 0 | ((HEAPU8[($0 + 712 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 713 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 714 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$1 = HEAPU8[($0 + 715 | 0) >> 0] | 0 | ((HEAPU8[($0 + 716 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 717 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 718 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $263 = i64toi32_i32$0;
        i64toi32_i32$0 = $0;
        HEAP32[($0 + 344 | 0) >> 2] = $263;
        HEAP32[($0 + 348 | 0) >> 2] = i64toi32_i32$1;
        i64toi32_i32$2 = $0 + 703 | 0;
        i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $5 = i64toi32_i32$1;
        $5$hi = i64toi32_i32$0;
        i64toi32_i32$2 = $0;
        i64toi32_i32$0 = HEAPU8[($0 + 695 | 0) >> 0] | 0 | ((HEAPU8[($0 + 696 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 697 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 698 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        i64toi32_i32$1 = HEAPU8[($0 + 699 | 0) >> 0] | 0 | ((HEAPU8[($0 + 700 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 701 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 702 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $6 = i64toi32_i32$0;
        $6$hi = i64toi32_i32$1;
        $2 = HEAPU8[($0 + 691 | 0) >> 0] | 0 | ((HEAPU8[($0 + 692 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 693 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 694 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
        $3 = 10;
        break label$6;
       case 7:
        break label$7;
       };
      }
      _ZN4gstd3msg5basic6source17hdc9310e7d7864fdaE($0 + 688 | 0 | 0);
      HEAP8[(($0 + 500 | 0) + 2 | 0) >> 0] = HEAPU8[(($0 + 688 | 0) + 2 | 0) >> 0] | 0;
      HEAP8[($0 + 352 | 0) >> 0] = HEAPU8[($0 + 719 | 0) >> 0] | 0;
      HEAP16[($0 + 500 | 0) >> 1] = HEAPU8[($0 + 688 | 0) >> 0] | 0 | ((HEAPU8[($0 + 689 | 0) >> 0] | 0) << 8 | 0) | 0;
      i64toi32_i32$2 = $0;
      i64toi32_i32$1 = HEAPU8[($0 + 711 | 0) >> 0] | 0 | ((HEAPU8[($0 + 712 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 713 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 714 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$0 = HEAPU8[($0 + 715 | 0) >> 0] | 0 | ((HEAPU8[($0 + 716 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 717 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 718 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $290 = i64toi32_i32$1;
      i64toi32_i32$1 = $0;
      HEAP32[($0 + 344 | 0) >> 2] = $290;
      HEAP32[($0 + 348 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$2 = $0 + 703 | 0;
      i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $5 = i64toi32_i32$0;
      $5$hi = i64toi32_i32$1;
      i64toi32_i32$2 = $0;
      i64toi32_i32$1 = HEAPU8[($0 + 695 | 0) >> 0] | 0 | ((HEAPU8[($0 + 696 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 697 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 698 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$0 = HEAPU8[($0 + 699 | 0) >> 0] | 0 | ((HEAPU8[($0 + 700 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 701 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 702 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $6 = i64toi32_i32$1;
      $6$hi = i64toi32_i32$0;
      $2 = HEAPU8[($0 + 691 | 0) >> 0] | 0 | ((HEAPU8[($0 + 692 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($0 + 693 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($0 + 694 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $3 = 6;
     }
     i64toi32_i32$0 = $5$hi;
     i64toi32_i32$1 = $0 + 704 | 0;
     HEAP32[i64toi32_i32$1 >> 2] = $5;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$0 = $6$hi;
     i64toi32_i32$1 = $0;
     HEAP32[($0 + 696 | 0) >> 2] = $6;
     HEAP32[($0 + 700 | 0) >> 2] = i64toi32_i32$0;
     HEAP8[($0 + 688 | 0) >> 0] = $3;
     $37 = HEAPU16[($0 + 500 | 0) >> 1] | 0;
     HEAP8[($0 + 689 | 0) >> 0] = $37;
     HEAP8[($0 + 690 | 0) >> 0] = $37 >>> 8 | 0;
     HEAP8[($0 + 691 | 0) >> 0] = HEAPU8[($0 + 502 | 0) >> 0] | 0;
     HEAP32[($0 + 692 | 0) >> 2] = $2;
     memcpy($0 + 712 | 0 | 0, $0 + 344 | 0 | 0, 152 | 0) | 0;
     i64toi32_i32$1 = $0;
     i64toi32_i32$0 = 0;
     HEAP32[($0 + 872 | 0) >> 2] = 0;
     HEAP32[($0 + 876 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$1 = $0;
     i64toi32_i32$0 = 0;
     HEAP32[($0 + 864 | 0) >> 2] = 0;
     HEAP32[($0 + 868 | 0) >> 2] = i64toi32_i32$0;
     $7 = $0 + 696 | 0;
     $1 = 17;
     label$15 : {
      label$16 : {
       switch ($3 | 0) {
       default:
        i64toi32_i32$0 = $5$hi;
        i64toi32_i32$2 = $5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$3 = 32;
        i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = 0;
         $38 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
        } else {
         i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
         $38 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
        }
        $8 = $38;
        i64toi32_i32$1 = $5$hi;
        $4 = $5;
        HEAP32[($0 + 960 | 0) >> 2] = 1;
        $331 = $0 + 960 | 0;
        i64toi32_i32$1 = $6$hi;
        i64toi32_i32$0 = $6;
        i64toi32_i32$2 = 0;
        i64toi32_i32$3 = 32;
        i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = 0;
         $39 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
         $39 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
        }
        $1 = $39;
        _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($331 | 0, $1 | 0);
        HEAP32[($0 + 956 | 0) >> 2] = $2 ? $1 : 0;
        i64toi32_i32$2 = $6$hi;
        $1 = $6;
        HEAP32[($0 + 952 | 0) >> 2] = $1;
        HEAP32[($0 + 948 | 0) >> 2] = $2;
        HEAP32[($0 + 944 | 0) >> 2] = 0;
        $9 = ($2 | 0) != (0 | 0);
        HEAP32[($0 + 940 | 0) >> 2] = $9;
        HEAP32[($0 + 936 | 0) >> 2] = $1;
        HEAP32[($0 + 932 | 0) >> 2] = $2;
        HEAP32[($0 + 928 | 0) >> 2] = 0;
        HEAP32[($0 + 924 | 0) >> 2] = $9;
        _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0097b3777cf64c9cE($0 + 184 | 0 | 0, $0 + 924 | 0 | 0);
        label$23 : {
         if (!(HEAP32[($0 + 184 | 0) >> 2] | 0)) {
          break label$23
         }
         $1 = HEAP32[($0 + 188 | 0) >> 2] | 0;
         label$24 : while (1) {
          HEAP32[($0 + 960 | 0) >> 2] = (HEAP32[($0 + 960 | 0) >> 2] | 0) + 16 | 0;
          _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17ha70389ffd682916fE($1 | 0, $0 + 960 | 0 | 0);
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0097b3777cf64c9cE($0 + 176 | 0 | 0, $0 + 924 | 0 | 0);
          $1 = HEAP32[($0 + 180 | 0) >> 2] | 0;
          if (HEAP32[($0 + 176 | 0) >> 2] | 0) {
           continue label$24
          }
          break label$24;
         };
        }
        $1 = HEAP32[($0 + 712 | 0) >> 2] | 0;
        _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $1 | 0);
        HEAP32[($0 + 916 | 0) >> 2] = $4 ? $1 : 0;
        HEAP32[($0 + 912 | 0) >> 2] = $8;
        HEAP32[($0 + 908 | 0) >> 2] = $4;
        HEAP32[($0 + 904 | 0) >> 2] = 0;
        $1 = ($4 | 0) != (0 | 0);
        HEAP32[($0 + 900 | 0) >> 2] = $1;
        HEAP32[($0 + 896 | 0) >> 2] = $8;
        HEAP32[($0 + 892 | 0) >> 2] = $4;
        HEAP32[($0 + 888 | 0) >> 2] = 0;
        HEAP32[($0 + 884 | 0) >> 2] = $1;
        _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h742bc81e9856f1bfE($0 + 168 | 0 | 0, $0 + 884 | 0 | 0);
        label$25 : {
         if (!(HEAP32[($0 + 168 | 0) >> 2] | 0)) {
          break label$25
         }
         $2 = HEAP32[($0 + 172 | 0) >> 2] | 0;
         $1 = HEAP32[($0 + 960 | 0) >> 2] | 0;
         label$26 : while (1) {
          HEAP32[($0 + 960 | 0) >> 2] = $1 + 16 | 0;
          $8 = HEAP32[($2 + 8 | 0) >> 2] | 0;
          _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $8 | 0);
          $4 = HEAP32[($2 + 4 | 0) >> 2] | 0;
          $1 = HEAP32[$2 >> 2] | 0;
          HEAP32[($0 + 956 | 0) >> 2] = $1 ? $8 : 0;
          HEAP32[($0 + 952 | 0) >> 2] = $4;
          HEAP32[($0 + 948 | 0) >> 2] = $1;
          HEAP32[($0 + 944 | 0) >> 2] = 0;
          $2 = ($1 | 0) != (0 | 0);
          HEAP32[($0 + 940 | 0) >> 2] = $2;
          HEAP32[($0 + 936 | 0) >> 2] = $4;
          HEAP32[($0 + 932 | 0) >> 2] = $1;
          HEAP32[($0 + 928 | 0) >> 2] = 0;
          HEAP32[($0 + 924 | 0) >> 2] = $2;
          $1 = HEAP32[($0 + 960 | 0) >> 2] | 0;
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17hd7dfe373379990f8E($0 + 160 | 0 | 0, $0 + 924 | 0 | 0);
          label$27 : {
           if (!(HEAP32[($0 + 160 | 0) >> 2] | 0)) {
            break label$27
           }
           label$28 : while (1) {
            $1 = $1 + 48 | 0;
            _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17hd7dfe373379990f8E($0 + 152 | 0 | 0, $0 + 924 | 0 | 0);
            if (HEAP32[($0 + 152 | 0) >> 2] | 0) {
             continue label$28
            }
            break label$28;
           };
          }
          HEAP32[($0 + 960 | 0) >> 2] = $1;
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h742bc81e9856f1bfE($0 + 144 | 0 | 0, $0 + 884 | 0 | 0);
          $2 = HEAP32[($0 + 148 | 0) >> 2] | 0;
          if (HEAP32[($0 + 144 | 0) >> 2] | 0) {
           continue label$26
          }
          break label$26;
         };
        }
        $4 = HEAP32[($0 + 724 | 0) >> 2] | 0;
        _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $4 | 0);
        $2 = HEAP32[(($0 + 688 | 0) + 32 | 0) >> 2] | 0;
        $1 = HEAP32[($0 + 716 | 0) >> 2] | 0;
        HEAP32[($0 + 956 | 0) >> 2] = $1 ? $4 : 0;
        HEAP32[($0 + 952 | 0) >> 2] = $2;
        HEAP32[($0 + 948 | 0) >> 2] = $1;
        HEAP32[($0 + 944 | 0) >> 2] = 0;
        $4 = ($1 | 0) != (0 | 0);
        HEAP32[($0 + 940 | 0) >> 2] = $4;
        HEAP32[($0 + 936 | 0) >> 2] = $2;
        HEAP32[($0 + 932 | 0) >> 2] = $1;
        HEAP32[($0 + 928 | 0) >> 2] = 0;
        HEAP32[($0 + 924 | 0) >> 2] = $4;
        $1 = HEAP32[($0 + 960 | 0) >> 2] | 0;
        _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0d8a139ea52976d5E($0 + 136 | 0 | 0, $0 + 924 | 0 | 0);
        label$29 : {
         if (!(HEAP32[($0 + 136 | 0) >> 2] | 0)) {
          break label$29
         }
         label$30 : while (1) {
          $1 = $1 + 32 | 0;
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h0d8a139ea52976d5E($0 + 128 | 0 | 0, $0 + 924 | 0 | 0);
          if (HEAP32[($0 + 128 | 0) >> 2] | 0) {
           continue label$30
          }
          break label$30;
         };
        }
        HEAP32[($0 + 960 | 0) >> 2] = $1;
        $4 = HEAP32[($0 + 736 | 0) >> 2] | 0;
        _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $4 | 0);
        $2 = HEAP32[($0 + 732 | 0) >> 2] | 0;
        $1 = HEAP32[($0 + 728 | 0) >> 2] | 0;
        HEAP32[($0 + 916 | 0) >> 2] = $1 ? $4 : 0;
        HEAP32[($0 + 912 | 0) >> 2] = $2;
        HEAP32[($0 + 908 | 0) >> 2] = $1;
        HEAP32[($0 + 904 | 0) >> 2] = 0;
        $4 = ($1 | 0) != (0 | 0);
        HEAP32[($0 + 900 | 0) >> 2] = $4;
        HEAP32[($0 + 896 | 0) >> 2] = $2;
        HEAP32[($0 + 892 | 0) >> 2] = $1;
        HEAP32[($0 + 888 | 0) >> 2] = 0;
        HEAP32[($0 + 884 | 0) >> 2] = $4;
        _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($0 + 120 | 0 | 0, $0 + 884 | 0 | 0);
        label$31 : {
         if (!(HEAP32[($0 + 120 | 0) >> 2] | 0)) {
          break label$31
         }
         $1 = HEAP32[($0 + 124 | 0) >> 2] | 0;
         label$32 : while (1) {
          HEAP32[($0 + 960 | 0) >> 2] = (HEAP32[($0 + 960 | 0) >> 2] | 0) + 32 | 0;
          $4 = HEAP32[($1 + 8 | 0) >> 2] | 0;
          _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $4 | 0);
          $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
          $1 = HEAP32[$1 >> 2] | 0;
          HEAP32[($0 + 956 | 0) >> 2] = $1 ? $4 : 0;
          HEAP32[($0 + 952 | 0) >> 2] = $2;
          HEAP32[($0 + 948 | 0) >> 2] = $1;
          HEAP32[($0 + 944 | 0) >> 2] = 0;
          $4 = ($1 | 0) != (0 | 0);
          HEAP32[($0 + 940 | 0) >> 2] = $4;
          HEAP32[($0 + 936 | 0) >> 2] = $2;
          HEAP32[($0 + 932 | 0) >> 2] = $1;
          HEAP32[($0 + 928 | 0) >> 2] = 0;
          HEAP32[($0 + 924 | 0) >> 2] = $4;
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h4a236312a7872142E($0 + 112 | 0 | 0, $0 + 924 | 0 | 0);
          label$33 : {
           if (!(HEAP32[($0 + 112 | 0) >> 2] | 0)) {
            break label$33
           }
           $1 = HEAP32[($0 + 116 | 0) >> 2] | 0;
           label$34 : while (1) {
            HEAP32[($0 + 960 | 0) >> 2] = (HEAP32[($0 + 960 | 0) >> 2] | 0) + 8 | 0;
            _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17ha70389ffd682916fE($1 | 0, $0 + 960 | 0 | 0);
            _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h4a236312a7872142E($0 + 104 | 0 | 0, $0 + 924 | 0 | 0);
            $1 = HEAP32[($0 + 108 | 0) >> 2] | 0;
            if (HEAP32[($0 + 104 | 0) >> 2] | 0) {
             continue label$34
            }
            break label$34;
           };
          }
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($0 + 96 | 0 | 0, $0 + 884 | 0 | 0);
          $1 = HEAP32[($0 + 100 | 0) >> 2] | 0;
          if (HEAP32[($0 + 96 | 0) >> 2] | 0) {
           continue label$32
          }
          break label$32;
         };
        }
        $4 = HEAP32[($0 + 748 | 0) >> 2] | 0;
        _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $4 | 0);
        $2 = HEAP32[($0 + 744 | 0) >> 2] | 0;
        $1 = HEAP32[($0 + 740 | 0) >> 2] | 0;
        HEAP32[($0 + 916 | 0) >> 2] = $1 ? $4 : 0;
        HEAP32[($0 + 912 | 0) >> 2] = $2;
        HEAP32[($0 + 908 | 0) >> 2] = $1;
        HEAP32[($0 + 904 | 0) >> 2] = 0;
        $4 = ($1 | 0) != (0 | 0);
        HEAP32[($0 + 900 | 0) >> 2] = $4;
        HEAP32[($0 + 896 | 0) >> 2] = $2;
        HEAP32[($0 + 892 | 0) >> 2] = $1;
        HEAP32[($0 + 888 | 0) >> 2] = 0;
        HEAP32[($0 + 884 | 0) >> 2] = $4;
        _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($0 + 88 | 0 | 0, $0 + 884 | 0 | 0);
        label$35 : {
         if (!(HEAP32[($0 + 88 | 0) >> 2] | 0)) {
          break label$35
         }
         $2 = HEAP32[($0 + 92 | 0) >> 2] | 0;
         $1 = HEAP32[($0 + 960 | 0) >> 2] | 0;
         label$36 : while (1) {
          HEAP32[($0 + 960 | 0) >> 2] = $1 + 32 | 0;
          $8 = HEAP32[($2 + 8 | 0) >> 2] | 0;
          _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $8 | 0);
          $4 = HEAP32[($2 + 4 | 0) >> 2] | 0;
          $1 = HEAP32[$2 >> 2] | 0;
          HEAP32[($0 + 956 | 0) >> 2] = $1 ? $8 : 0;
          HEAP32[($0 + 952 | 0) >> 2] = $4;
          HEAP32[($0 + 948 | 0) >> 2] = $1;
          HEAP32[($0 + 944 | 0) >> 2] = 0;
          $2 = ($1 | 0) != (0 | 0);
          HEAP32[($0 + 940 | 0) >> 2] = $2;
          HEAP32[($0 + 936 | 0) >> 2] = $4;
          HEAP32[($0 + 932 | 0) >> 2] = $1;
          HEAP32[($0 + 928 | 0) >> 2] = 0;
          HEAP32[($0 + 924 | 0) >> 2] = $2;
          $1 = HEAP32[($0 + 960 | 0) >> 2] | 0;
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17ha00a7e5d4f0bc857E($0 + 80 | 0 | 0, $0 + 924 | 0 | 0);
          label$37 : {
           if (!(HEAP32[($0 + 80 | 0) >> 2] | 0)) {
            break label$37
           }
           label$38 : while (1) {
            $1 = $1 + 24 | 0;
            _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17ha00a7e5d4f0bc857E($0 + 72 | 0 | 0, $0 + 924 | 0 | 0);
            if (HEAP32[($0 + 72 | 0) >> 2] | 0) {
             continue label$38
            }
            break label$38;
           };
          }
          HEAP32[($0 + 960 | 0) >> 2] = $1;
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($0 + 64 | 0 | 0, $0 + 884 | 0 | 0);
          $2 = HEAP32[($0 + 68 | 0) >> 2] | 0;
          if (HEAP32[($0 + 64 | 0) >> 2] | 0) {
           continue label$36
          }
          break label$36;
         };
        }
        $4 = HEAP32[($0 + 760 | 0) >> 2] | 0;
        _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $4 | 0);
        $2 = HEAP32[($0 + 756 | 0) >> 2] | 0;
        $1 = HEAP32[($0 + 752 | 0) >> 2] | 0;
        HEAP32[($0 + 916 | 0) >> 2] = $1 ? $4 : 0;
        HEAP32[($0 + 912 | 0) >> 2] = $2;
        HEAP32[($0 + 908 | 0) >> 2] = $1;
        HEAP32[($0 + 904 | 0) >> 2] = 0;
        $4 = ($1 | 0) != (0 | 0);
        HEAP32[($0 + 900 | 0) >> 2] = $4;
        HEAP32[($0 + 896 | 0) >> 2] = $2;
        HEAP32[($0 + 892 | 0) >> 2] = $1;
        HEAP32[($0 + 888 | 0) >> 2] = 0;
        HEAP32[($0 + 884 | 0) >> 2] = $4;
        _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h742bc81e9856f1bfE($0 + 56 | 0 | 0, $0 + 884 | 0 | 0);
        label$39 : {
         if (!(HEAP32[($0 + 56 | 0) >> 2] | 0)) {
          break label$39
         }
         $2 = HEAP32[($0 + 60 | 0) >> 2] | 0;
         $1 = HEAP32[($0 + 960 | 0) >> 2] | 0;
         label$40 : while (1) {
          HEAP32[($0 + 960 | 0) >> 2] = $1 + 16 | 0;
          $9 = HEAP32[($2 + 8 | 0) >> 2] | 0;
          _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $9 | 0);
          $1 = 0;
          $4 = 0;
          label$41 : {
           $8 = HEAP32[$2 >> 2] | 0;
           if (!$8) {
            break label$41
           }
           HEAP32[($0 + 948 | 0) >> 2] = $8;
           HEAP32[($0 + 944 | 0) >> 2] = 0;
           HEAP32[($0 + 932 | 0) >> 2] = $8;
           HEAP32[($0 + 928 | 0) >> 2] = 0;
           $1 = HEAP32[($2 + 4 | 0) >> 2] | 0;
           HEAP32[($0 + 952 | 0) >> 2] = $1;
           HEAP32[($0 + 936 | 0) >> 2] = $1;
           $1 = 1;
           $4 = $9;
          }
          HEAP32[($0 + 956 | 0) >> 2] = $4;
          HEAP32[($0 + 940 | 0) >> 2] = $1;
          HEAP32[($0 + 924 | 0) >> 2] = $1;
          $1 = HEAP32[($0 + 960 | 0) >> 2] | 0;
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h8b01ee9ed9a96005E($0 + 48 | 0 | 0, $0 + 924 | 0 | 0);
          label$42 : {
           if (!(HEAP32[($0 + 48 | 0) >> 2] | 0)) {
            break label$42
           }
           label$43 : while (1) {
            $1 = $1 + 40 | 0;
            _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h8b01ee9ed9a96005E($0 + 40 | 0 | 0, $0 + 924 | 0 | 0);
            if (HEAP32[($0 + 40 | 0) >> 2] | 0) {
             continue label$43
            }
            break label$43;
           };
          }
          HEAP32[($0 + 960 | 0) >> 2] = $1;
          _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h742bc81e9856f1bfE($0 + 32 | 0 | 0, $0 + 884 | 0 | 0);
          $2 = HEAP32[($0 + 36 | 0) >> 2] | 0;
          if (HEAP32[($0 + 32 | 0) >> 2] | 0) {
           continue label$40
          }
          break label$40;
         };
        }
        _ZN107_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$GT$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17hd0d7ad3117b099a0E($0 + 764 | 0 | 0, $0 + 960 | 0 | 0);
        $4 = HEAP32[($0 + 784 | 0) >> 2] | 0;
        _ZN18parity_scale_codec5codec21compact_encode_len_to17h5fe4610397fc8548E($0 + 960 | 0 | 0, $4 | 0);
        $2 = HEAP32[($0 + 780 | 0) >> 2] | 0;
        $1 = HEAP32[($0 + 776 | 0) >> 2] | 0;
        HEAP32[($0 + 956 | 0) >> 2] = $1 ? $4 : 0;
        HEAP32[($0 + 952 | 0) >> 2] = $2;
        HEAP32[($0 + 948 | 0) >> 2] = $1;
        HEAP32[($0 + 944 | 0) >> 2] = 0;
        $4 = ($1 | 0) != (0 | 0);
        HEAP32[($0 + 940 | 0) >> 2] = $4;
        HEAP32[($0 + 936 | 0) >> 2] = $2;
        HEAP32[($0 + 932 | 0) >> 2] = $1;
        HEAP32[($0 + 928 | 0) >> 2] = 0;
        HEAP32[($0 + 924 | 0) >> 2] = $4;
        _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($0 + 24 | 0 | 0, $0 + 924 | 0 | 0);
        if (!(HEAP32[($0 + 24 | 0) >> 2] | 0)) {
         break label$15
        }
        $1 = HEAP32[($0 + 28 | 0) >> 2] | 0;
        label$44 : while (1) {
         HEAP32[($0 + 960 | 0) >> 2] = (HEAP32[($0 + 960 | 0) >> 2] | 0) + 32 | 0;
         _ZN107_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$GT$$u20$as$u20$parity_scale_codec__codec__Encode$GT$9encode_to17hd0d7ad3117b099a0E($1 | 0, $0 + 960 | 0 | 0);
         _ZN108_$LT$alloc__collections__btree__map__Iter$LT$K$C$V$GT$$u20$as$u20$core__iter__traits__iterator__Iterator$GT$4next17h057cf4cd712084bfE($0 + 16 | 0 | 0, $0 + 924 | 0 | 0);
         $1 = HEAP32[($0 + 20 | 0) >> 2] | 0;
         if (HEAP32[($0 + 16 | 0) >> 2] | 0) {
          continue label$44
         }
         break label$15;
        };
       case 3:
        HEAP32[($0 + 960 | 0) >> 2] = 1;
        _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17ha70389ffd682916fE($7 | 0, $0 + 960 | 0 | 0);
        break label$15;
       case 5:
        $1 = 65;
        break label$4;
       case 7:
        $1 = 5;
        break label$4;
       case 8:
        $1 = 9;
        break label$4;
       case 4:
       case 6:
       case 9:
       case 10:
        $1 = 33;
        break label$4;
       case 1:
        break label$16;
       case 2:
        break label$4;
       };
      }
      HEAP32[($0 + 960 | 0) >> 2] = 1;
      _ZN11inscribe_io1_85_$LT$impl$u20$parity_scale_codec__codec__Encode$u20$for$u20$inscribe_io__Inscribe$GT$9encode_to17ha70389ffd682916fE($7 | 0, $0 + 960 | 0 | 0);
     }
     $1 = HEAP32[($0 + 960 | 0) >> 2] | 0;
     if ($1 >>> 0 < 65537 >>> 0) {
      break label$4
     }
     _ZN5alloc7raw_vec19RawVec$LT$T$C$A$GT$11allocate_in17h832c476552ffcba0E($0 + 8 | 0 | 0, $1 | 0, 0 | 0);
     $1 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     $2 = HEAP32[($0 + 12 | 0) >> 2] | 0;
     i64toi32_i32$2 = 0;
     i64toi32_i32$0 = 0;
     _ZN4gstd4util21with_optimized_encode28_$u7b$$u7b$closure$u7d$$u7d$17h37d8b0a4e0ff07a5E($0 + 884 | 0 | 0, $0 + 688 | 0 | 0, 0 | 0, i64toi32_i32$2 | 0, 0 | 0, i64toi32_i32$0 | 0, $1 | 0, $2 | 0);
     _ZN77_$LT$alloc__raw_vec__RawVec$LT$T$C$A$GT$$u20$as$u20$core__ops__drop__Drop$GT$4drop17h8fba824195f666efE($1 | 0, $2 | 0);
     break label$3;
    }
    _ZN4core6result13unwrap_failed17h2e8c86d620a44170E();
    wasm2js_trap();
   }
   HEAP32[($0 + 920 | 0) >> 2] = $1;
   HEAP32[($0 + 972 | 0) >> 2] = $0 + 864 | 0;
   HEAP32[($0 + 968 | 0) >> 2] = $0 + 688 | 0;
   HEAP32[($0 + 964 | 0) >> 2] = $0 + 924 | 0;
   HEAP32[($0 + 960 | 0) >> 2] = $0 + 920 | 0;
   c_with_alloca($1 | 0, 6 | 0, $0 + 960 | 0 | 0);
   memcpy($0 + 884 | 0 | 0, $0 + 924 | 0 | 0, 36 | 0) | 0;
   $3 = HEAPU8[($0 + 688 | 0) >> 0] | 0;
  }
  label$45 : {
   label$46 : {
    switch ($3 & 255 | 0 | 0) {
    case 0:
     _ZN4core3ptr50drop_in_place$LT$inscribe_io__InscribeIoStates$GT$17h2e8d9b62b9e26375E($0 + 688 | 0 | 4 | 0 | 0);
     break label$45;
    case 1:
    case 3:
     break label$46;
    default:
     break label$45;
    };
   }
   _ZN4core3ptr42drop_in_place$LT$inscribe_io__Inscribe$GT$17h3737e270f8447fa3E($7 | 0);
  }
  _ZN4core6result19Result$LT$T$C$E$GT$6expect17h9d7233476f212ae9E($0 + 688 | 0 | 0, $0 + 884 | 0 | 0);
  _ZN4core3ptr50drop_in_place$LT$inscribe_io__InscribeIoStates$GT$17h2e8d9b62b9e26375E($0 + 248 | 0 | 0);
  __stack_pointer = $0 + 976 | 0;
 }
 
 function _ZN68_$LT$inscribe_io__InscribeIoStates$u20$as$u20$core__clone__Clone$GT$5clone17h1b06454caaa979eaE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if (HEAP32[($1 + 8 | 0) >> 2] | 0) {
      break label$3
     }
     HEAP32[($0 + 8 | 0) >> 2] = 0;
     HEAP32[$0 >> 2] = 0;
     break label$2;
    }
    $2 = HEAP32[$1 >> 2] | 0;
    if (!$2) {
     break label$1
    }
    _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h11c62237339315b5E($0 | 0, $2 | 0, HEAP32[($1 + 4 | 0) >> 2] | 0 | 0);
   }
   label$4 : {
    label$5 : {
     if (HEAP32[($1 + 20 | 0) >> 2] | 0) {
      break label$5
     }
     HEAP32[($0 + 12 | 0) >> 2] = 0;
     HEAP32[($0 + 20 | 0) >> 2] = 0;
     break label$4;
    }
    $2 = HEAP32[($1 + 12 | 0) >> 2] | 0;
    if (!$2) {
     break label$1
    }
    _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17haaf4fd58bec4774fE($0 + 12 | 0 | 0, $2 | 0, HEAP32[($1 + 16 | 0) >> 2] | 0 | 0);
   }
   label$6 : {
    label$7 : {
     if (HEAP32[($1 + 32 | 0) >> 2] | 0) {
      break label$7
     }
     HEAP32[($0 + 24 | 0) >> 2] = 0;
     HEAP32[($0 + 32 | 0) >> 2] = 0;
     break label$6;
    }
    $2 = HEAP32[($1 + 24 | 0) >> 2] | 0;
    if (!$2) {
     break label$1
    }
    _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17he936111ee019b84aE($0 + 24 | 0 | 0, $2 | 0, HEAP32[($1 + 28 | 0) >> 2] | 0 | 0);
   }
   label$8 : {
    label$9 : {
     if (HEAP32[($1 + 44 | 0) >> 2] | 0) {
      break label$9
     }
     HEAP32[($0 + 36 | 0) >> 2] = 0;
     HEAP32[($0 + 44 | 0) >> 2] = 0;
     break label$8;
    }
    $2 = HEAP32[($1 + 36 | 0) >> 2] | 0;
    if (!$2) {
     break label$1
    }
    _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hf06dfff5438d19e2E($0 + 36 | 0 | 0, $2 | 0, HEAP32[($1 + 40 | 0) >> 2] | 0 | 0);
   }
   label$10 : {
    label$11 : {
     if (HEAP32[($1 + 56 | 0) >> 2] | 0) {
      break label$11
     }
     HEAP32[($0 + 48 | 0) >> 2] = 0;
     HEAP32[($0 + 56 | 0) >> 2] = 0;
     break label$10;
    }
    $2 = HEAP32[($1 + 48 | 0) >> 2] | 0;
    if (!$2) {
     break label$1
    }
    _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hbc0fe3c1560799dcE($0 + 48 | 0 | 0, $2 | 0, HEAP32[($1 + 52 | 0) >> 2] | 0 | 0);
   }
   label$12 : {
    label$13 : {
     if (HEAP32[($1 + 68 | 0) >> 2] | 0) {
      break label$13
     }
     HEAP32[($0 + 60 | 0) >> 2] = 0;
     HEAP32[($0 + 68 | 0) >> 2] = 0;
     break label$12;
    }
    $2 = HEAP32[($1 + 60 | 0) >> 2] | 0;
    if (!$2) {
     break label$1
    }
    _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17h3ebde341cb3111bdE($0 + 60 | 0 | 0, $2 | 0, HEAP32[($1 + 64 | 0) >> 2] | 0 | 0);
   }
   _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone17h9fd81632224c6d3cE($0 + 72 | 0 | 0, $1 + 72 | 0 | 0);
   label$14 : {
    if (HEAP32[($1 + 92 | 0) >> 2] | 0) {
     break label$14
    }
    HEAP32[($0 + 84 | 0) >> 2] = 0;
    HEAP32[($0 + 92 | 0) >> 2] = 0;
    return;
   }
   $2 = HEAP32[($1 + 84 | 0) >> 2] | 0;
   if (!$2) {
    break label$1
   }
   _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hca4bd7c64a587177E($0 + 84 | 0 | 0, $2 | 0, HEAP32[($1 + 88 | 0) >> 2] | 0 | 0);
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17hd768d5468b66fc06E($0, $1, $2, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7 = 0, $8 = 0, $10$hi = 0, $11$hi = 0, $5 = 0, $9 = 0, $11 = 0, $6 = 0, $10 = 0, $31 = 0, $31$hi = 0, $37 = 0, $37$hi = 0, $39 = 0, $42 = 0, $45 = 0;
  label$1 : while (1) {
   $5 = HEAPU16[($1 + 2030 | 0) >> 1] | 0;
   $6 = $5 << 4 | 0;
   $7 = 0;
   $8 = -1;
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : while (1) {
       label$6 : {
        if (($6 | 0) != ($7 | 0)) {
         break label$6
        }
        $8 = $5;
        break label$4;
       }
       $9 = $1 + $7 | 0;
       $8 = $8 + 1 | 0;
       $7 = $7 + 16 | 0;
       label$7 : {
        i64toi32_i32$2 = $9;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $10 = i64toi32_i32$0;
        $10$hi = i64toi32_i32$1;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$1 = $10$hi;
        i64toi32_i32$2 = i64toi32_i32$0;
        i64toi32_i32$0 = $3$hi;
        i64toi32_i32$3 = $3;
        i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
        $31 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
        $31$hi = i64toi32_i32$0;
        i64toi32_i32$1 = $9 + 8 | 0;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$1 >> 2] | 0;
        i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
        $11 = i64toi32_i32$0;
        $11$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $4$hi;
        i64toi32_i32$2 = $11$hi;
        i64toi32_i32$1 = i64toi32_i32$0;
        i64toi32_i32$0 = $4$hi;
        i64toi32_i32$3 = $4;
        i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
        $37 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
        $37$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $31$hi;
        i64toi32_i32$2 = $31;
        i64toi32_i32$1 = $37$hi;
        i64toi32_i32$3 = $37;
        i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
        i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$3 = 0;
        $39 = (i64toi32_i32$0 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0;
        i64toi32_i32$0 = $10$hi;
        i64toi32_i32$0 = $3$hi;
        i64toi32_i32$0 = $10$hi;
        i64toi32_i32$3 = $10;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$2 = $3;
        $42 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$3 >>> 0 > i64toi32_i32$2 >>> 0 | 0) | 0;
        i64toi32_i32$3 = $11$hi;
        i64toi32_i32$3 = $4$hi;
        i64toi32_i32$3 = $11$hi;
        i64toi32_i32$2 = $11;
        i64toi32_i32$0 = $4$hi;
        i64toi32_i32$1 = $4;
        $45 = i64toi32_i32$3 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
        i64toi32_i32$2 = i64toi32_i32$3;
        i64toi32_i32$2 = i64toi32_i32$0;
        i64toi32_i32$2 = i64toi32_i32$3;
        i64toi32_i32$1 = $11;
        i64toi32_i32$3 = i64toi32_i32$0;
        i64toi32_i32$0 = $4;
        switch ((((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & (i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) | 0 ? $42 : $45) ? -1 : $39) & 255 | 0 | 0) {
        case 1:
         continue label$5;
        case 0:
         break label$7;
        default:
         break label$4;
        };
       }
       break label$5;
      };
      $7 = 0;
      break label$3;
     }
     if ($2) {
      break label$2
     }
     $7 = 1;
    }
    HEAP32[($0 + 4 | 0) >> 2] = $1;
    HEAP32[$0 >> 2] = $7;
    HEAP32[($0 + 12 | 0) >> 2] = $8;
    HEAP32[($0 + 8 | 0) >> 2] = $2;
    return;
   }
   $2 = $2 + -1 | 0;
   $1 = HEAP32[(($1 + ($8 << 2 | 0) | 0) + 2032 | 0) >> 2] | 0;
   continue label$1;
  };
 }
 
 function _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17h93726dd27de8c0d5E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $7 = 0, $6 = 0, $8 = 0, $4 = 0, $5 = 0;
  label$1 : while (1) {
   $4 = HEAPU16[($1 + 534 | 0) >> 1] | 0;
   $5 = $4 << 5 | 0;
   $6 = -1;
   $7 = 0;
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : while (1) {
       label$6 : {
        if (($5 | 0) != ($7 | 0)) {
         break label$6
        }
        $6 = $4;
        break label$4;
       }
       $8 = $1 + $7 | 0;
       $6 = $6 + 1 | 0;
       $7 = $7 + 32 | 0;
       label$7 : {
        $8 = memcmp($3 | 0, $8 | 0, 32 | 0) | 0;
        switch ((($8 | 0) < (0 | 0) ? -1 : ($8 | 0) != (0 | 0)) & 255 | 0 | 0) {
        case 1:
         continue label$5;
        case 0:
         break label$7;
        default:
         break label$4;
        };
       }
       break label$5;
      };
      $7 = 0;
      break label$3;
     }
     if ($2) {
      break label$2
     }
     $7 = 1;
    }
    HEAP32[($0 + 4 | 0) >> 2] = $1;
    HEAP32[$0 >> 2] = $7;
    HEAP32[($0 + 12 | 0) >> 2] = $6;
    HEAP32[($0 + 8 | 0) >> 2] = $2;
    return;
   }
   $2 = $2 + -1 | 0;
   $1 = HEAP32[(($1 + ($6 << 2 | 0) | 0) + 536 | 0) >> 2] | 0;
   continue label$1;
  };
 }
 
 function _ZN5alloc11collections5btree6search142_$LT$impl$u20$alloc__collections__btree__node__NodeRef$LT$BorrowType$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$$GT$11search_tree17hba734900d5fd8398E($0, $1, $2, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $7 = 0, $8 = 0, $10$hi = 0, $11$hi = 0, $5 = 0, $9 = 0, $11 = 0, $6 = 0, $10 = 0, $31 = 0, $31$hi = 0, $37 = 0, $37$hi = 0, $39 = 0, $42 = 0, $45 = 0;
  label$1 : while (1) {
   $5 = HEAPU16[($1 + 314 | 0) >> 1] | 0;
   $6 = $5 << 4 | 0;
   $7 = 0;
   $8 = -1;
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : while (1) {
       label$6 : {
        if (($6 | 0) != ($7 | 0)) {
         break label$6
        }
        $8 = $5;
        break label$4;
       }
       $9 = $1 + $7 | 0;
       $8 = $8 + 1 | 0;
       $7 = $7 + 16 | 0;
       label$7 : {
        i64toi32_i32$2 = $9;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $10 = i64toi32_i32$0;
        $10$hi = i64toi32_i32$1;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$1 = $10$hi;
        i64toi32_i32$2 = i64toi32_i32$0;
        i64toi32_i32$0 = $3$hi;
        i64toi32_i32$3 = $3;
        i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
        $31 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
        $31$hi = i64toi32_i32$0;
        i64toi32_i32$1 = $9 + 8 | 0;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$1 >> 2] | 0;
        i64toi32_i32$2 = HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] | 0;
        $11 = i64toi32_i32$0;
        $11$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $4$hi;
        i64toi32_i32$2 = $11$hi;
        i64toi32_i32$1 = i64toi32_i32$0;
        i64toi32_i32$0 = $4$hi;
        i64toi32_i32$3 = $4;
        i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
        $37 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
        $37$hi = i64toi32_i32$0;
        i64toi32_i32$0 = $31$hi;
        i64toi32_i32$2 = $31;
        i64toi32_i32$1 = $37$hi;
        i64toi32_i32$3 = $37;
        i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
        i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$3 = 0;
        $39 = (i64toi32_i32$0 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0;
        i64toi32_i32$0 = $10$hi;
        i64toi32_i32$0 = $3$hi;
        i64toi32_i32$0 = $10$hi;
        i64toi32_i32$3 = $10;
        i64toi32_i32$1 = $3$hi;
        i64toi32_i32$2 = $3;
        $42 = i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$3 >>> 0 > i64toi32_i32$2 >>> 0 | 0) | 0;
        i64toi32_i32$3 = $11$hi;
        i64toi32_i32$3 = $4$hi;
        i64toi32_i32$3 = $11$hi;
        i64toi32_i32$2 = $11;
        i64toi32_i32$0 = $4$hi;
        i64toi32_i32$1 = $4;
        $45 = i64toi32_i32$3 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
        i64toi32_i32$2 = i64toi32_i32$3;
        i64toi32_i32$2 = i64toi32_i32$0;
        i64toi32_i32$2 = i64toi32_i32$3;
        i64toi32_i32$1 = $11;
        i64toi32_i32$3 = i64toi32_i32$0;
        i64toi32_i32$0 = $4;
        switch ((((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & (i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) | 0 ? $42 : $45) ? -1 : $39) & 255 | 0 | 0) {
        case 1:
         continue label$5;
        case 0:
         break label$7;
        default:
         break label$4;
        };
       }
       break label$5;
      };
      $7 = 0;
      break label$3;
     }
     if ($2) {
      break label$2
     }
     $7 = 1;
    }
    HEAP32[($0 + 4 | 0) >> 2] = $1;
    HEAP32[$0 >> 2] = $7;
    HEAP32[($0 + 12 | 0) >> 2] = $8;
    HEAP32[($0 + 8 | 0) >> 2] = $2;
    return;
   }
   $2 = $2 + -1 | 0;
   $1 = HEAP32[(($1 + ($8 << 2 | 0) | 0) + 320 | 0) >> 2] | 0;
   continue label$1;
  };
 }
 
 function _ZN5alloc11collections5btree4node12slice_insert17h4944af65e5d6d949E($0, $1, $2, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var i64toi32_i32$0 = 0, $5 = 0;
  label$1 : {
   $5 = $2 + 1 | 0;
   if ($5 >>> 0 >= $1 >>> 0) {
    break label$1
   }
   memmove($0 + ($5 << 4 | 0) | 0 | 0, $0 + ($2 << 4 | 0) | 0 | 0, (($2 ^ -1 | 0) + $1 | 0) << 4 | 0 | 0) | 0;
  }
  $2 = $0 + ($2 << 4 | 0) | 0;
  i64toi32_i32$0 = $4$hi;
  HEAP32[($2 + 8 | 0) >> 2] = $4;
  HEAP32[($2 + 12 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $3$hi;
  HEAP32[$2 >> 2] = $3;
  HEAP32[($2 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function _ZN5alloc11collections5btree4node13move_to_slice17h3965fa9b2d5c31c0E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if (($1 | 0) == ($3 | 0)) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  memcpy($2 | 0, $0 | 0, $1 << 4 | 0 | 0) | 0;
 }
 
 function _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h0d103685e46983fdE($0, $1, $2, $2$hi, $3, $3$hi, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  var $5 = 0, $6 = 0, $7 = 0, i64toi32_i32$0 = 0;
  $5 = HEAP32[$1 >> 2] | 0;
  $6 = (HEAPU16[($5 + 314 | 0) >> 1] | 0) + 1 | 0;
  $7 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$0 = $2$hi;
  _ZN5alloc11collections5btree4node12slice_insert17h4944af65e5d6d949E($5 | 0, $6 | 0, $7 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, $3$hi | 0);
  _ZN5alloc11collections5btree4node12slice_insert17h9d4b800a1145b805E($5 + 180 | 0 | 0, $6 | 0, $7 | 0, $4 | 0);
  HEAP16[($5 + 314 | 0) >> 1] = $6;
  HEAP32[($0 + 8 | 0) >> 2] = $7;
  HEAP32[$0 >> 2] = $5;
  HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
 }
 
 function _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h051224ffb3667ee9E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if ($1 >>> 0 > 11 >>> 0) {
    break label$1
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
  wasm2js_trap();
 }
 
 function _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17h61f5ff3bd92123c1E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if ($1 >>> 0 > 11 >>> 0) {
    break label$1
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree4node13move_to_slice17h9c7224dd196c32dcE($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if (($1 | 0) == ($3 | 0)) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  memcpy($2 | 0, $0 | 0, Math_imul($1, 12) | 0) | 0;
 }
 
 function _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h022c95a564ee6564E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(368 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 314 | 0) >> 1] = 0;
  HEAP32[($0 + 176 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17he51a001dfa7ff86fE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $6 = 0, $5 = 0;
  $3 = __stack_pointer - 32 | 0;
  __stack_pointer = $3;
  $4 = HEAPU16[($1 + 314 | 0) >> 1] | 0;
  HEAP8[($3 + 28 | 0) >> 0] = 0;
  HEAP32[($3 + 24 | 0) >> 2] = $4;
  HEAP32[($3 + 20 | 0) >> 2] = 0;
  _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 20 | 0 | 0);
  label$1 : {
   if (!(HEAP32[($3 + 8 | 0) >> 2] | 0)) {
    break label$1
   }
   $5 = $1 + 320 | 0;
   $4 = HEAP32[($3 + 12 | 0) >> 2] | 0;
   label$2 : while (1) {
    $6 = HEAP32[($5 + ($4 << 2 | 0) | 0) >> 2] | 0;
    HEAP16[($6 + 312 | 0) >> 1] = $4;
    HEAP32[($6 + 176 | 0) >> 2] = $1;
    _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 | 0, $3 + 20 | 0 | 0);
    $4 = HEAP32[($3 + 4 | 0) >> 2] | 0;
    if (HEAP32[$3 >> 2] | 0) {
     continue label$2
    }
    break label$2;
   };
  }
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $3 + 32 | 0;
 }
 
 function _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h81983f8d8391e700E($0, $1, $1$hi, $2, $2$hi, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $8 = 0, $5 = 0, $7 = 0, $10 = 0, $6 = 0, i64toi32_i32$0 = 0, $9 = 0;
  $5 = HEAP32[$0 >> 2] | 0;
  $6 = HEAPU16[($5 + 314 | 0) >> 1] | 0;
  $7 = $6 + 1 | 0;
  $8 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $1$hi;
  _ZN5alloc11collections5btree4node12slice_insert17h4944af65e5d6d949E($5 | 0, $7 | 0, $8 | 0, $1 | 0, i64toi32_i32$0 | 0, $2 | 0, $2$hi | 0);
  _ZN5alloc11collections5btree4node12slice_insert17h9d4b800a1145b805E($5 + 180 | 0 | 0, $7 | 0, $8 | 0, $3 | 0);
  $0 = $8 + 1 | 0;
  $3 = $5 + 320 | 0;
  label$1 : {
   $9 = $8 + 2 | 0;
   $10 = $6 + 2 | 0;
   if ($9 >>> 0 >= $10 >>> 0) {
    break label$1
   }
   memmove($3 + ($9 << 2 | 0) | 0 | 0, $3 + ($0 << 2 | 0) | 0 | 0, ($6 - $8 | 0) << 2 | 0 | 0) | 0;
  }
  HEAP32[($3 + ($0 << 2 | 0) | 0) >> 2] = $4;
  HEAP16[($5 + 314 | 0) >> 1] = $7;
  label$2 : {
   if ($0 >>> 0 >= $10 >>> 0) {
    break label$2
   }
   $3 = $10 >>> 0 > $0 >>> 0 ? $10 : $0;
   $8 = (($8 << 2 | 0) + $5 | 0) + 324 | 0;
   label$3 : while (1) {
    $7 = HEAP32[$8 >> 2] | 0;
    HEAP16[($7 + 312 | 0) >> 1] = $0;
    HEAP32[($7 + 176 | 0) >> 2] = $5;
    $8 = $8 + 4 | 0;
    $0 = $0 + 1 | 0;
    if (($3 | 0) != ($0 | 0)) {
     continue label$3
    }
    break label$3;
   };
  }
 }
 
 function _ZN5alloc11collections5btree4node12slice_insert17h9d4b800a1145b805E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, i64toi32_i32$1 = 0;
  label$1 : {
   $4 = $2 + 1 | 0;
   if ($4 >>> 0 >= $1 >>> 0) {
    break label$1
   }
   memmove($0 + Math_imul($4, 12) | 0 | 0, $0 + Math_imul($2, 12) | 0 | 0, Math_imul(($2 ^ -1 | 0) + $1 | 0, 12) | 0) | 0;
  }
  $2 = $0 + Math_imul($2, 12) | 0;
  i64toi32_i32$1 = HEAP32[($3 + 4 | 0) >> 2] | 0;
  HEAP32[$2 >> 2] = HEAP32[$3 >> 2] | 0;
  HEAP32[($2 + 4 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($2 + 8 | 0) >> 2] = HEAP32[($3 + 8 | 0) >> 2] | 0;
 }
 
 function _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17he6cd70a61bedc155E($0, $1, $2, $2$hi, $3, $3$hi, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  var $5 = 0, $6 = 0, $7 = 0, i64toi32_i32$0 = 0;
  $5 = HEAP32[$1 >> 2] | 0;
  $6 = (HEAPU16[($5 + 2030 | 0) >> 1] | 0) + 1 | 0;
  $7 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$0 = $2$hi;
  _ZN5alloc11collections5btree4node12slice_insert17h4944af65e5d6d949E($5 | 0, $6 | 0, $7 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, $3$hi | 0);
  _ZN5alloc11collections5btree4node12slice_insert17hc719528c38f45d80E($5 + 176 | 0 | 0, $6 | 0, $7 | 0, $4 | 0);
  HEAP16[($5 + 2030 | 0) >> 1] = $6;
  HEAP32[($0 + 8 | 0) >> 2] = $7;
  HEAP32[$0 >> 2] = $5;
  HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
 }
 
 function _ZN5alloc11collections5btree4node13move_to_slice17hc5c5ca837cbcb09eE($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if (($1 | 0) == ($3 | 0)) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  memcpy($2 | 0, $0 | 0, Math_imul($1, 168) | 0) | 0;
 }
 
 function _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h8e0e3bdf32143c50E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(2080 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 2030 | 0) >> 1] = 0;
  HEAP32[($0 + 2024 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17hc661206b58ff007eE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $6 = 0, $5 = 0;
  $3 = __stack_pointer - 32 | 0;
  __stack_pointer = $3;
  $4 = HEAPU16[($1 + 2030 | 0) >> 1] | 0;
  HEAP8[($3 + 28 | 0) >> 0] = 0;
  HEAP32[($3 + 24 | 0) >> 2] = $4;
  HEAP32[($3 + 20 | 0) >> 2] = 0;
  _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 20 | 0 | 0);
  label$1 : {
   if (!(HEAP32[($3 + 8 | 0) >> 2] | 0)) {
    break label$1
   }
   $5 = $1 + 2032 | 0;
   $4 = HEAP32[($3 + 12 | 0) >> 2] | 0;
   label$2 : while (1) {
    $6 = HEAP32[($5 + ($4 << 2 | 0) | 0) >> 2] | 0;
    HEAP16[($6 + 2028 | 0) >> 1] = $4;
    HEAP32[($6 + 2024 | 0) >> 2] = $1;
    _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 | 0, $3 + 20 | 0 | 0);
    $4 = HEAP32[($3 + 4 | 0) >> 2] | 0;
    if (HEAP32[$3 >> 2] | 0) {
     continue label$2
    }
    break label$2;
   };
  }
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $3 + 32 | 0;
 }
 
 function _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h8ea896a6cb6e2d50E($0, $1, $1$hi, $2, $2$hi, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $8 = 0, $5 = 0, $7 = 0, $10 = 0, $6 = 0, i64toi32_i32$0 = 0, $9 = 0;
  $5 = HEAP32[$0 >> 2] | 0;
  $6 = HEAPU16[($5 + 2030 | 0) >> 1] | 0;
  $7 = $6 + 1 | 0;
  $8 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $1$hi;
  _ZN5alloc11collections5btree4node12slice_insert17h4944af65e5d6d949E($5 | 0, $7 | 0, $8 | 0, $1 | 0, i64toi32_i32$0 | 0, $2 | 0, $2$hi | 0);
  _ZN5alloc11collections5btree4node12slice_insert17hc719528c38f45d80E($5 + 176 | 0 | 0, $7 | 0, $8 | 0, $3 | 0);
  $0 = $8 + 1 | 0;
  $3 = $5 + 2032 | 0;
  label$1 : {
   $9 = $8 + 2 | 0;
   $10 = $6 + 2 | 0;
   if ($9 >>> 0 >= $10 >>> 0) {
    break label$1
   }
   memmove($3 + ($9 << 2 | 0) | 0 | 0, $3 + ($0 << 2 | 0) | 0 | 0, ($6 - $8 | 0) << 2 | 0 | 0) | 0;
  }
  HEAP32[($3 + ($0 << 2 | 0) | 0) >> 2] = $4;
  HEAP16[($5 + 2030 | 0) >> 1] = $7;
  label$2 : {
   if ($0 >>> 0 >= $10 >>> 0) {
    break label$2
   }
   $3 = $10 >>> 0 > $0 >>> 0 ? $10 : $0;
   $8 = (($8 << 2 | 0) + $5 | 0) + 2036 | 0;
   label$3 : while (1) {
    $7 = HEAP32[$8 >> 2] | 0;
    HEAP16[($7 + 2028 | 0) >> 1] = $0;
    HEAP32[($7 + 2024 | 0) >> 2] = $5;
    $8 = $8 + 4 | 0;
    $0 = $0 + 1 | 0;
    if (($3 | 0) != ($0 | 0)) {
     continue label$3
    }
    break label$3;
   };
  }
 }
 
 function _ZN5alloc11collections5btree4node12slice_insert17hc719528c38f45d80E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0;
  label$1 : {
   $4 = $2 + 1 | 0;
   if ($4 >>> 0 >= $1 >>> 0) {
    break label$1
   }
   memmove($0 + Math_imul($4, 168) | 0 | 0, $0 + Math_imul($2, 168) | 0 | 0, Math_imul(($2 ^ -1 | 0) + $1 | 0, 168) | 0) | 0;
  }
  memcpy($0 + Math_imul($2, 168) | 0 | 0, $3 | 0, 168 | 0) | 0;
 }
 
 function _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h0c63f60e47963ed6E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(536 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 534 | 0) >> 1] = 0;
  HEAP32[($0 + 528 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h179afb888e79da61E($0, $1, $2, $2$hi, $3, $3$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $4 = 0, $5 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $24 = 0, $29 = 0, $34 = 0;
  label$1 : {
   $4 = HEAPU16[($0 + 534 | 0) >> 1] | 0;
   if ($4 >>> 0 < 11 >>> 0) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  HEAP16[($0 + 534 | 0) >> 1] = $4 + 1 | 0;
  $5 = $0 + ($4 << 5 | 0) | 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $19 = i64toi32_i32$0;
  i64toi32_i32$0 = $5;
  $15 = $19;
  HEAP8[i64toi32_i32$0 >> 0] = $15;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $15 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $15 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $15 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
  i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $24 = i64toi32_i32$1;
  i64toi32_i32$1 = $5 + 8 | 0;
  $16 = $24;
  HEAP8[i64toi32_i32$1 >> 0] = $16;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $16 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $16 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $16 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$2 = $1 + 24 | 0;
  i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $29 = i64toi32_i32$0;
  i64toi32_i32$0 = $5 + 24 | 0;
  $17 = $29;
  HEAP8[i64toi32_i32$0 >> 0] = $17;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $17 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $17 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $17 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $1 + 16 | 0;
  i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $34 = i64toi32_i32$1;
  i64toi32_i32$1 = $5 + 16 | 0;
  $18 = $34;
  HEAP8[i64toi32_i32$1 >> 0] = $18;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $18 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $18 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $18 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  $0 = $0 + ($4 << 4 | 0) | 0;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$1 = $0 + 360 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $3;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$1 = $0 + 352 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $2;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
 }
 
 function _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17haa98f0d67475cc39E($0, $1, $2, $3, $3$hi, $4, $4$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  var $5 = 0, $6 = 0, $7 = 0, i64toi32_i32$0 = 0;
  $5 = HEAP32[$1 >> 2] | 0;
  $6 = (HEAPU16[($5 + 534 | 0) >> 1] | 0) + 1 | 0;
  $7 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  _ZN5alloc11collections5btree4node12slice_insert17h96088eb6f317b518E($5 | 0, $6 | 0, $7 | 0, $2 | 0);
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$0 = $4$hi;
  i64toi32_i32$0 = $3$hi;
  _ZN5alloc11collections5btree4node12slice_insert17h4944af65e5d6d949E($5 + 352 | 0 | 0, $6 | 0, $7 | 0, $3 | 0, i64toi32_i32$0 | 0, $4 | 0, $4$hi | 0);
  HEAP16[($5 + 534 | 0) >> 1] = $6;
  HEAP32[($0 + 8 | 0) >> 2] = $7;
  HEAP32[$0 >> 2] = $5;
  HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
 }
 
 function _ZN106_$LT$core__ops__range__Range$LT$usize$GT$$u20$as$u20$core__slice__index__SliceIndex$LT$$u5b$T$u5d$$GT$$GT$9index_mut17hb00f4c4f97b3449bE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   if ($1 >>> 0 > 11 >>> 0) {
    break label$1
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1;
   HEAP32[$0 >> 2] = $2;
   return;
  }
  _ZN4core5slice29_$LT$impl$u20$$u5b$T$u5d$$GT$15copy_from_slice17len_mismatch_fail17h616b9e8cecebba2cE();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree4node13move_to_slice17h6431d4850cf540fdE($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if (($1 | 0) == ($3 | 0)) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  memcpy($2 | 0, $0 | 0, $1 << 5 | 0 | 0) | 0;
 }
 
 function _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h332d67e142d2c888E() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(584 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 534 | 0) >> 1] = 0;
  HEAP32[($0 + 528 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17hba9fa1629a435ac2E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $6 = 0, $5 = 0;
  $3 = __stack_pointer - 32 | 0;
  __stack_pointer = $3;
  $4 = HEAPU16[($1 + 534 | 0) >> 1] | 0;
  HEAP8[($3 + 28 | 0) >> 0] = 0;
  HEAP32[($3 + 24 | 0) >> 2] = $4;
  HEAP32[($3 + 20 | 0) >> 2] = 0;
  _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 20 | 0 | 0);
  label$1 : {
   if (!(HEAP32[($3 + 8 | 0) >> 2] | 0)) {
    break label$1
   }
   $5 = $1 + 536 | 0;
   $4 = HEAP32[($3 + 12 | 0) >> 2] | 0;
   label$2 : while (1) {
    $6 = HEAP32[($5 + ($4 << 2 | 0) | 0) >> 2] | 0;
    HEAP16[($6 + 532 | 0) >> 1] = $4;
    HEAP32[($6 + 528 | 0) >> 2] = $1;
    _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 | 0, $3 + 20 | 0 | 0);
    $4 = HEAP32[($3 + 4 | 0) >> 2] | 0;
    if (HEAP32[$3 >> 2] | 0) {
     continue label$2
    }
    break label$2;
   };
  }
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $3 + 32 | 0;
 }
 
 function _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h3f37137c41e80a88E($0, $1, $2, $2$hi, $3, $3$hi, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  var $8 = 0, $5 = 0, $7 = 0, $10 = 0, $6 = 0, i64toi32_i32$0 = 0, $9 = 0;
  $5 = HEAP32[$0 >> 2] | 0;
  $6 = HEAPU16[($5 + 534 | 0) >> 1] | 0;
  $7 = $6 + 1 | 0;
  $8 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  _ZN5alloc11collections5btree4node12slice_insert17h96088eb6f317b518E($5 | 0, $7 | 0, $8 | 0, $1 | 0);
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$0 = $2$hi;
  _ZN5alloc11collections5btree4node12slice_insert17h4944af65e5d6d949E($5 + 352 | 0 | 0, $7 | 0, $8 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, $3$hi | 0);
  $0 = $8 + 1 | 0;
  $1 = $5 + 536 | 0;
  label$1 : {
   $9 = $8 + 2 | 0;
   $10 = $6 + 2 | 0;
   if ($9 >>> 0 >= $10 >>> 0) {
    break label$1
   }
   memmove($1 + ($9 << 2 | 0) | 0 | 0, $1 + ($0 << 2 | 0) | 0 | 0, ($6 - $8 | 0) << 2 | 0 | 0) | 0;
  }
  HEAP32[($1 + ($0 << 2 | 0) | 0) >> 2] = $4;
  HEAP16[($5 + 534 | 0) >> 1] = $7;
  label$2 : {
   if ($0 >>> 0 >= $10 >>> 0) {
    break label$2
   }
   $1 = $10 >>> 0 > $0 >>> 0 ? $10 : $0;
   $8 = (($8 << 2 | 0) + $5 | 0) + 540 | 0;
   label$3 : while (1) {
    $7 = HEAP32[$8 >> 2] | 0;
    HEAP16[($7 + 532 | 0) >> 1] = $0;
    HEAP32[($7 + 528 | 0) >> 2] = $5;
    $8 = $8 + 4 | 0;
    $0 = $0 + 1 | 0;
    if (($1 | 0) != ($0 | 0)) {
     continue label$3
    }
    break label$3;
   };
  }
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h54251fbae09dad1bE($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $4 = HEAP32[$1 >> 2] | 0;
  $5 = _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h332d67e142d2c888E() | 0;
  HEAP32[($5 + 536 | 0) >> 2] = $4;
  _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17hba9fa1629a435ac2E($2 + 8 | 0 | 0, $5 | 0, $3 + 1 | 0 | 0);
  $3 = HEAP32[($2 + 8 | 0) >> 2] | 0;
  $4 = HEAP32[($2 + 12 | 0) >> 2] | 0;
  HEAP32[($1 + 4 | 0) >> 2] = $4;
  HEAP32[$1 >> 2] = $3;
  HEAP32[($0 + 4 | 0) >> 2] = $4;
  HEAP32[$0 >> 2] = $3;
  __stack_pointer = $2 + 16 | 0;
 }
 
 function _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17h315fdef01be5400bE($0, $1, $2, $3, $3$hi, $4, $4$hi, $5, $6) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  $4$hi = $4$hi | 0;
  $5 = $5 | 0;
  $6 = $6 | 0;
  var i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $7 = 0, $26 = 0, $31 = 0, $36 = 0, $41 = 0;
  label$1 : {
   if (($1 + -1 | 0 | 0) != ($6 | 0)) {
    break label$1
   }
   $1 = HEAPU16[($0 + 534 | 0) >> 1] | 0;
   if ($1 >>> 0 >= 11 >>> 0) {
    break label$1
   }
   $7 = $1 + 1 | 0;
   HEAP16[($0 + 534 | 0) >> 1] = $7;
   $6 = $0 + ($1 << 5 | 0) | 0;
   i64toi32_i32$2 = $2;
   i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $26 = i64toi32_i32$0;
   i64toi32_i32$0 = $6;
   $17 = $26;
   HEAP8[i64toi32_i32$0 >> 0] = $17;
   HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $17 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $17 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $17 >>> 24 | 0;
   HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
   HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
   i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
   i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $31 = i64toi32_i32$1;
   i64toi32_i32$1 = $6 + 8 | 0;
   $18 = $31;
   HEAP8[i64toi32_i32$1 >> 0] = $18;
   HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $18 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $18 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $18 >>> 24 | 0;
   HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
   HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
   i64toi32_i32$2 = $2 + 24 | 0;
   i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $36 = i64toi32_i32$0;
   i64toi32_i32$0 = $6 + 24 | 0;
   $19 = $36;
   HEAP8[i64toi32_i32$0 >> 0] = $19;
   HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $19 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $19 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $19 >>> 24 | 0;
   HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
   HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
   HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
   HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
   i64toi32_i32$2 = $2 + 16 | 0;
   i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
   $41 = i64toi32_i32$1;
   i64toi32_i32$1 = $6 + 16 | 0;
   $20 = $41;
   HEAP8[i64toi32_i32$1 >> 0] = $20;
   HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $20 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $20 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $20 >>> 24 | 0;
   HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
   HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
   HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
   HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
   $2 = $0 + ($1 << 4 | 0) | 0;
   i64toi32_i32$0 = $4$hi;
   i64toi32_i32$1 = $2 + 360 | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $4;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$0 = $3$hi;
   i64toi32_i32$1 = $2 + 352 | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $3;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[(($0 + ($7 << 2 | 0) | 0) + 536 | 0) >> 2] = $5;
   HEAP16[($5 + 532 | 0) >> 1] = $7;
   HEAP32[($5 + 528 | 0) >> 2] = $0;
   return;
  }
  _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
  wasm2js_trap();
 }
 
 function _ZN5alloc11collections5btree4node12slice_insert17h96088eb6f317b518E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $4 = 0, $30 = 0, $35 = 0, $40 = 0, $45 = 0;
  label$1 : {
   $4 = $2 + 1 | 0;
   if ($4 >>> 0 >= $1 >>> 0) {
    break label$1
   }
   memmove($0 + ($4 << 5 | 0) | 0 | 0, $0 + ($2 << 5 | 0) | 0 | 0, (($2 ^ -1 | 0) + $1 | 0) << 5 | 0 | 0) | 0;
  }
  $2 = $0 + ($2 << 5 | 0) | 0;
  i64toi32_i32$2 = $3;
  i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $30 = i64toi32_i32$0;
  i64toi32_i32$0 = $2;
  $12 = $30;
  HEAP8[i64toi32_i32$0 >> 0] = $12;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $12 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $12 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $12 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 + 24 | 0;
  i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $35 = i64toi32_i32$1;
  i64toi32_i32$1 = $2 + 24 | 0;
  $13 = $35;
  HEAP8[i64toi32_i32$1 >> 0] = $13;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $13 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $13 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $13 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
  i64toi32_i32$2 = $3 + 16 | 0;
  i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $40 = i64toi32_i32$0;
  i64toi32_i32$0 = $2 + 16 | 0;
  $14 = $40;
  HEAP8[i64toi32_i32$0 >> 0] = $14;
  HEAP8[(i64toi32_i32$0 + 1 | 0) >> 0] = $14 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 2 | 0) >> 0] = $14 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 3 | 0) >> 0] = $14 >>> 24 | 0;
  HEAP8[(i64toi32_i32$0 + 4 | 0) >> 0] = i64toi32_i32$1;
  HEAP8[(i64toi32_i32$0 + 5 | 0) >> 0] = i64toi32_i32$1 >>> 8 | 0;
  HEAP8[(i64toi32_i32$0 + 6 | 0) >> 0] = i64toi32_i32$1 >>> 16 | 0;
  HEAP8[(i64toi32_i32$0 + 7 | 0) >> 0] = i64toi32_i32$1 >>> 24 | 0;
  i64toi32_i32$2 = $3 + 8 | 0;
  i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
  $45 = i64toi32_i32$1;
  i64toi32_i32$1 = $2 + 8 | 0;
  $15 = $45;
  HEAP8[i64toi32_i32$1 >> 0] = $15;
  HEAP8[(i64toi32_i32$1 + 1 | 0) >> 0] = $15 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 2 | 0) >> 0] = $15 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 3 | 0) >> 0] = $15 >>> 24 | 0;
  HEAP8[(i64toi32_i32$1 + 4 | 0) >> 0] = i64toi32_i32$0;
  HEAP8[(i64toi32_i32$1 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
  HEAP8[(i64toi32_i32$1 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
  HEAP8[(i64toi32_i32$1 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
 }
 
 function _ZN5alloc11collections5btree4node210Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17h10727b9285dcb6d2E($0, $1, $2, $2$hi, $3, $3$hi, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $3$hi = $3$hi | 0;
  $4 = $4 | 0;
  var $5 = 0, $6 = 0, $7 = 0, i64toi32_i32$0 = 0;
  $5 = HEAP32[$1 >> 2] | 0;
  $6 = (HEAPU16[($5 + 1150 | 0) >> 1] | 0) + 1 | 0;
  $7 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $3$hi;
  i64toi32_i32$0 = $2$hi;
  _ZN5alloc11collections5btree4node12slice_insert17h4944af65e5d6d949E($5 | 0, $6 | 0, $7 | 0, $2 | 0, i64toi32_i32$0 | 0, $3 | 0, $3$hi | 0);
  _ZN5alloc11collections5btree4node12slice_insert17h7113cf37f30c5167E($5 + 176 | 0 | 0, $6 | 0, $7 | 0, $4 | 0);
  HEAP16[($5 + 1150 | 0) >> 1] = $6;
  HEAP32[($0 + 8 | 0) >> 2] = $7;
  HEAP32[$0 >> 2] = $5;
  HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0;
 }
 
 function _ZN5alloc11collections5btree4node13move_to_slice17hae0475436609a383E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   if (($1 | 0) == ($3 | 0)) {
    break label$1
   }
   _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
   wasm2js_trap();
  }
  memcpy($2 | 0, $0 | 0, Math_imul($1, 88) | 0) | 0;
 }
 
 function _ZN5alloc11collections5btree4node25InternalNode$LT$K$C$V$GT$3new17h1195a3973c1ce86dE() {
  var $0 = 0;
  label$1 : {
   $0 = _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_197(1200 | 0) | 0;
   if ($0) {
    break label$1
   }
   _ZN4core9panicking18panic_nounwind_fmt17h594f591d0ad08910E();
   wasm2js_trap();
  }
  HEAP16[($0 + 1150 | 0) >> 1] = 0;
  HEAP32[($0 + 1144 | 0) >> 2] = 0;
  return $0 | 0;
 }
 
 function _ZN5alloc11collections5btree4node121NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$17from_new_internal17h39875522d2428908E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $6 = 0, $5 = 0;
  $3 = __stack_pointer - 32 | 0;
  __stack_pointer = $3;
  $4 = HEAPU16[($1 + 1150 | 0) >> 1] | 0;
  HEAP8[($3 + 28 | 0) >> 0] = 0;
  HEAP32[($3 + 24 | 0) >> 2] = $4;
  HEAP32[($3 + 20 | 0) >> 2] = 0;
  _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 + 8 | 0 | 0, $3 + 20 | 0 | 0);
  label$1 : {
   if (!(HEAP32[($3 + 8 | 0) >> 2] | 0)) {
    break label$1
   }
   $5 = $1 + 1152 | 0;
   $4 = HEAP32[($3 + 12 | 0) >> 2] | 0;
   label$2 : while (1) {
    $6 = HEAP32[($5 + ($4 << 2 | 0) | 0) >> 2] | 0;
    HEAP16[($6 + 1148 | 0) >> 1] = $4;
    HEAP32[($6 + 1144 | 0) >> 2] = $1;
    _ZN4core4iter5range110_$LT$impl$u20$core__iter__traits__iterator__Iterator$u20$for$u20$core__ops__range__RangeInclusive$LT$A$GT$$GT$4next17h902bd4ceabb3f9cdE($3 | 0, $3 + 20 | 0 | 0);
    $4 = HEAP32[($3 + 4 | 0) >> 2] | 0;
    if (HEAP32[$3 >> 2] | 0) {
     continue label$2
    }
    break label$2;
   };
  }
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $3 + 32 | 0;
 }
 
 function _ZN5alloc11collections5btree4node214Handle$LT$alloc__collections__btree__node__NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$$C$alloc__collections__btree__node__marker__Edge$GT$10insert_fit17he9d506f7a3d34eebE($0, $1, $1$hi, $2, $2$hi, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $8 = 0, $5 = 0, $7 = 0, $10 = 0, $6 = 0, i64toi32_i32$0 = 0, $9 = 0;
  $5 = HEAP32[$0 >> 2] | 0;
  $6 = HEAPU16[($5 + 1150 | 0) >> 1] | 0;
  $7 = $6 + 1 | 0;
  $8 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = $1$hi;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $1$hi;
  _ZN5alloc11collections5btree4node12slice_insert17h4944af65e5d6d949E($5 | 0, $7 | 0, $8 | 0, $1 | 0, i64toi32_i32$0 | 0, $2 | 0, $2$hi | 0);
  _ZN5alloc11collections5btree4node12slice_insert17h7113cf37f30c5167E($5 + 176 | 0 | 0, $7 | 0, $8 | 0, $3 | 0);
  $0 = $8 + 1 | 0;
  $3 = $5 + 1152 | 0;
  label$1 : {
   $9 = $8 + 2 | 0;
   $10 = $6 + 2 | 0;
   if ($9 >>> 0 >= $10 >>> 0) {
    break label$1
   }
   memmove($3 + ($9 << 2 | 0) | 0 | 0, $3 + ($0 << 2 | 0) | 0 | 0, ($6 - $8 | 0) << 2 | 0 | 0) | 0;
  }
  HEAP32[($3 + ($0 << 2 | 0) | 0) >> 2] = $4;
  HEAP16[($5 + 1150 | 0) >> 1] = $7;
  label$2 : {
   if ($0 >>> 0 >= $10 >>> 0) {
    break label$2
   }
   $3 = $10 >>> 0 > $0 >>> 0 ? $10 : $0;
   $8 = (($8 << 2 | 0) + $5 | 0) + 1156 | 0;
   label$3 : while (1) {
    $7 = HEAP32[$8 >> 2] | 0;
    HEAP16[($7 + 1148 | 0) >> 1] = $0;
    HEAP32[($7 + 1144 | 0) >> 2] = $5;
    $8 = $8 + 4 | 0;
    $0 = $0 + 1 | 0;
    if (($3 | 0) != ($0 | 0)) {
     continue label$3
    }
    break label$3;
   };
  }
 }
 
 function _ZN5alloc11collections5btree4node12slice_insert17h7113cf37f30c5167E($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0;
  label$1 : {
   $4 = $2 + 1 | 0;
   if ($4 >>> 0 >= $1 >>> 0) {
    break label$1
   }
   memmove($0 + Math_imul($4, 88) | 0 | 0, $0 + Math_imul($2, 88) | 0 | 0, Math_imul(($2 ^ -1 | 0) + $1 | 0, 88) | 0) | 0;
  }
  memcpy($0 + Math_imul($2, 88) | 0 | 0, $3 | 0, 88 | 0) | 0;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h258a5d8df18a2484E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $3 = 0, $4 = 0, $14 = 0, $16 = 0, $19$hi = 0, $21$hi = 0, $22 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($1 + 1144 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = $1;
    break label$1;
   }
   $4 = $2 + 1 | 0;
   $2 = HEAPU16[($1 + 1148 | 0) >> 1] | 0;
  }
  __rust_dealloc($1 | 0);
  HEAP32[$0 >> 2] = $3;
  $16 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $14 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $21$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$0 = $14;
  i64toi32_i32$2 = $21$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $22 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$0 = $16;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $22;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h905283a4a61d7d7aE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $3 = 0, $4 = 0, $14 = 0, $16 = 0, $19$hi = 0, $21$hi = 0, $22 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($1 + 352 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = $1;
    break label$1;
   }
   $4 = $2 + 1 | 0;
   $2 = HEAPU16[($1 + 356 | 0) >> 1] | 0;
  }
  __rust_dealloc($1 | 0);
  HEAP32[$0 >> 2] = $3;
  $16 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $14 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $21$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$0 = $14;
  i64toi32_i32$2 = $21$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $22 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$0 = $16;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $22;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Dying$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$21deallocate_and_ascend17h393244177231c3d7E($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $3 = 0, $4 = 0, $14 = 0, $16 = 0, $19$hi = 0, $21$hi = 0, $22 = 0;
  label$1 : {
   label$2 : {
    $3 = HEAP32[($1 + 528 | 0) >> 2] | 0;
    if ($3) {
     break label$2
    }
    $4 = $1;
    break label$1;
   }
   $4 = $2 + 1 | 0;
   $2 = HEAPU16[($1 + 532 | 0) >> 1] | 0;
  }
  __rust_dealloc($1 | 0);
  HEAP32[$0 >> 2] = $3;
  $16 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $14 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $14 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $19$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $21$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $19$hi;
  i64toi32_i32$0 = $14;
  i64toi32_i32$2 = $21$hi;
  i64toi32_i32$3 = $4;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $22 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$0 = $16;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $22;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$2;
 }
 
 function _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hbeccb9462288abdcE($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $3 = 0, $6 = 0, $7 = 0, $5 = 0, $10 = 0, $4 = 0, $11$hi = 0, $12$hi = 0, $14 = 0, $41 = 0, $47 = 0, $53 = 0, $56 = 0, $61 = 0, $61$hi = 0, $64 = 0, $64$hi = 0, $8 = 0, $9 = 0, $101 = 0, $107 = 0, $113 = 0, $116 = 0, $11 = 0, $12 = 0, $13 = 0, $163 = 0;
  $3 = __stack_pointer - 96 | 0;
  __stack_pointer = $3;
  label$1 : {
   label$2 : {
    label$3 : {
     if (!$2) {
      break label$3
     }
     $4 = $2 + -1 | 0;
     _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hbeccb9462288abdcE($3 + 16 | 0 | 0, HEAP32[($1 + 536 | 0) >> 2] | 0 | 0, $4 | 0);
     if (HEAP32[($3 + 16 | 0) >> 2] | 0) {
      break label$2
     }
     _ZN4core6option13expect_failed17h4ebbf461b9ad62ccE();
     wasm2js_trap();
    }
    $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h0c63f60e47963ed6E() | 0;
    $6 = 0;
    label$4 : {
     if (!(HEAPU16[($1 + 534 | 0) >> 1] | 0)) {
      break label$4
     }
     $7 = $1 + 352 | 0;
     $6 = 0;
     $2 = $1;
     label$5 : while (1) {
      i64toi32_i32$2 = $2 + 24 | 0;
      i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $41 = i64toi32_i32$0;
      i64toi32_i32$0 = ($3 + 16 | 0) + 24 | 0;
      HEAP32[i64toi32_i32$0 >> 2] = $41;
      HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
      i64toi32_i32$2 = $2 + 16 | 0;
      i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $47 = i64toi32_i32$1;
      i64toi32_i32$1 = ($3 + 16 | 0) + 16 | 0;
      HEAP32[i64toi32_i32$1 >> 2] = $47;
      HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$2 = $2 + 8 | 0;
      i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $53 = i64toi32_i32$0;
      i64toi32_i32$0 = ($3 + 16 | 0) + 8 | 0;
      HEAP32[i64toi32_i32$0 >> 2] = $53;
      HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
      i64toi32_i32$2 = $2;
      i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
      $56 = i64toi32_i32$1;
      i64toi32_i32$1 = $3;
      HEAP32[(i64toi32_i32$1 + 16 | 0) >> 2] = $56;
      HEAP32[(i64toi32_i32$1 + 20 | 0) >> 2] = i64toi32_i32$0;
      i64toi32_i32$2 = $7;
      i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $61 = i64toi32_i32$0;
      $61$hi = i64toi32_i32$1;
      i64toi32_i32$2 = i64toi32_i32$2 + 8 | 0;
      i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
      i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
      $64 = i64toi32_i32$1;
      $64$hi = i64toi32_i32$0;
      i64toi32_i32$0 = $61$hi;
      i64toi32_i32$1 = $64$hi;
      _ZN5alloc11collections5btree4node115NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Leaf$GT$4push17h179afb888e79da61E($5 | 0, $3 + 16 | 0 | 0, $61 | 0, i64toi32_i32$0 | 0, $64 | 0, i64toi32_i32$1 | 0);
      $2 = $2 + 32 | 0;
      $7 = $7 + 16 | 0;
      $6 = $6 + 1 | 0;
      if ($6 >>> 0 < (HEAPU16[($1 + 534 | 0) >> 1] | 0) >>> 0) {
       continue label$5
      }
      break label$5;
     };
    }
    HEAP32[($0 + 8 | 0) >> 2] = $6;
    HEAP32[($0 + 4 | 0) >> 2] = 0;
    HEAP32[$0 >> 2] = $5;
    break label$1;
   }
   _ZN5alloc11collections5btree4node127NodeRef$LT$alloc__collections__btree__node__marker__Owned$C$K$C$V$C$alloc__collections__btree__node__marker__LeafOrInternal$GT$19push_internal_level17h54251fbae09dad1bE($3 + 8 | 0 | 0, $3 + 16 | 0 | 0);
   label$6 : {
    if (!(HEAPU16[($1 + 534 | 0) >> 1] | 0)) {
     break label$6
    }
    $7 = $1 + 352 | 0;
    $8 = HEAP32[($3 + 12 | 0) >> 2] | 0;
    $9 = HEAP32[($3 + 8 | 0) >> 2] | 0;
    $6 = $1 + 540 | 0;
    $10 = 0;
    $2 = $1;
    label$7 : while (1) {
     i64toi32_i32$2 = $2 + 24 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $101 = i64toi32_i32$1;
     i64toi32_i32$1 = ($3 + 48 | 0) + 24 | 0;
     HEAP32[i64toi32_i32$1 >> 2] = $101;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$2 = $2 + 16 | 0;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $107 = i64toi32_i32$0;
     i64toi32_i32$0 = ($3 + 48 | 0) + 16 | 0;
     HEAP32[i64toi32_i32$0 >> 2] = $107;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$2 = $2 + 8 | 0;
     i64toi32_i32$1 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $113 = i64toi32_i32$1;
     i64toi32_i32$1 = ($3 + 48 | 0) + 8 | 0;
     HEAP32[i64toi32_i32$1 >> 2] = $113;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$2 = $2;
     i64toi32_i32$0 = HEAPU8[i64toi32_i32$2 >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[(i64toi32_i32$2 + 4 | 0) >> 0] | 0 | ((HEAPU8[(i64toi32_i32$2 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[(i64toi32_i32$2 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[(i64toi32_i32$2 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $116 = i64toi32_i32$0;
     i64toi32_i32$0 = $3;
     HEAP32[(i64toi32_i32$0 + 48 | 0) >> 2] = $116;
     HEAP32[(i64toi32_i32$0 + 52 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$2 = $7 + 8 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $11 = i64toi32_i32$1;
     $11$hi = i64toi32_i32$0;
     i64toi32_i32$2 = $7;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $12 = i64toi32_i32$0;
     $12$hi = i64toi32_i32$1;
     _ZN96_$LT$alloc__collections__btree__map__BTreeMap$LT$K$C$V$C$A$GT$$u20$as$u20$core__clone__Clone$GT$5clone13clone_subtree17hbeccb9462288abdcE($3 + 84 | 0 | 0, HEAP32[$6 >> 2] | 0 | 0, $4 | 0);
     $13 = HEAP32[($3 + 92 | 0) >> 2] | 0;
     label$8 : {
      label$9 : {
       $5 = HEAP32[($3 + 84 | 0) >> 2] | 0;
       if ($5) {
        break label$9
       }
       $14 = 0;
       $5 = _ZN5alloc11collections5btree4node21LeafNode$LT$K$C$V$GT$3new17h0c63f60e47963ed6E() | 0;
       break label$8;
      }
      $14 = HEAP32[($3 + 88 | 0) >> 2] | 0;
     }
     i64toi32_i32$1 = $12$hi;
     i64toi32_i32$1 = $11$hi;
     i64toi32_i32$1 = $12$hi;
     i64toi32_i32$0 = $11$hi;
     _ZN5alloc11collections5btree4node119NodeRef$LT$alloc__collections__btree__node__marker__Mut$C$K$C$V$C$alloc__collections__btree__node__marker__Internal$GT$4push17h315fdef01be5400bE($9 | 0, $8 | 0, $3 + 48 | 0 | 0, $12 | 0, i64toi32_i32$1 | 0, $11 | 0, i64toi32_i32$0 | 0, $5 | 0, $14 | 0);
     HEAP32[($3 + 24 | 0) >> 2] = ($13 + (HEAP32[($3 + 24 | 0) >> 2] | 0) | 0) + 1 | 0;
     $2 = $2 + 32 | 0;
     $7 = $7 + 16 | 0;
     $6 = $6 + 4 | 0;
     $10 = $10 + 1 | 0;
     if ($10 >>> 0 < (HEAPU16[($1 + 534 | 0) >> 1] | 0) >>> 0) {
      continue label$7
     }
     break label$7;
    };
   }
   i64toi32_i32$2 = $3;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 16 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 20 | 0) >> 2] | 0;
   $163 = i64toi32_i32$0;
   i64toi32_i32$0 = $0;
   HEAP32[i64toi32_i32$0 >> 2] = $163;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = HEAP32[((i64toi32_i32$2 + 16 | 0) + 8 | 0) >> 2] | 0;
  }
  __stack_pointer = $3 + 96 | 0;
 }
 
 function _ZN5alloc5alloc6Global10alloc_impl17h1061fb139e87d1dcE_364($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   label$2 : {
    if ($1) {
     break label$2
    }
    $2 = 1;
    break label$1;
   }
   label$3 : {
    if ($2) {
     break label$3
    }
    HEAPU8[(0 + 1050148 | 0) >> 0] | 0;
    $2 = _ZN8dlmalloc8Dlmalloc6malloc17h61b4872f78296f5bE($1 | 0) | 0;
    break label$1;
   }
   label$4 : {
    $2 = _ZN8dlmalloc8Dlmalloc6malloc17h61b4872f78296f5bE($1 | 0) | 0;
    if ($2) {
     break label$4
    }
    $2 = 0;
    break label$1;
   }
   memset($2 | 0, 0 | 0, $1 | 0) | 0;
  }
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  HEAP32[$0 >> 2] = $2;
 }
 
 function _ZN63_$LT$alloc__alloc__Global$u20$as$u20$core__alloc__Allocator$GT$8allocate17h5008ecfea7650679E_365($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  _ZN5alloc5alloc6Global10alloc_impl17h1061fb139e87d1dcE_364($2 + 8 | 0 | 0, $1 | 0, 0 | 0);
  $1 = HEAP32[($2 + 12 | 0) >> 2] | 0;
  HEAP32[$0 >> 2] = HEAP32[($2 + 8 | 0) >> 2] | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  __stack_pointer = $2 + 16 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }
 
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = [null, _ZN17gear_stack_buffer10trampoline17ha13372c364bcfe6dE, _ZN17gear_stack_buffer10trampoline17hd8e5c3637d6d61ecE, _ZN17gear_stack_buffer10trampoline17hce6f45ad93fdb690E, _ZN17gear_stack_buffer10trampoline17hf70d286ed9b46d15E, _ZN17gear_stack_buffer10trampoline17ha8528db5bdceeacaE, _ZN17gear_stack_buffer10trampoline17ha6993ef8393251dcE];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   memory.buffer = buffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "metahash": metahash, 
  "init": init, 
  "handle": handle, 
  "state": state, 
  "__heap_base": {
   get value() {
    return global$1;
   }, 
   set value(_global$1) {
    global$1 = _global$1;
   }
  }, 
  "__data_end": {
   get value() {
    return global$2;
   }, 
   set value(_global$2) {
    global$2 = _global$2;
   }
  }
 };
}

var memasmFunc = new ArrayBuffer(1114112);
var retasmFunc = asmFunc({
  "env": env,
  "env": {
    memory: { buffer : memasmFunc }
  },
});
export var metahash = retasmFunc.metahash;
export var init = retasmFunc.init;
export var handle = retasmFunc.handle;
export var state = retasmFunc.state;
export var __heap_base = retasmFunc.__heap_base;
export var __data_end = retasmFunc.__data_end;
