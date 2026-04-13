
let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;

function getArrayI32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

let cachedInt32ArrayMemory0 = null;
function getInt32ArrayMemory0() {
    if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
        cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32ArrayMemory0;
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getUint32ArrayMemory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let WASM_VECTOR_LEN = 0;

/**
 * @param {Int32Array} arr
 * @param {number} target
 * @returns {number}
 */
function binary_search(arr, target) {
    const ptr0 = passArray32ToWasm0(arr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.binary_search(ptr0, len0, target);
    return ret;
}
exports.binary_search = binary_search;

/**
 * @param {Int32Array} arr
 * @returns {Int32Array}
 */
function bubble_sort(arr) {
    const ptr0 = passArray32ToWasm0(arr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.bubble_sort(ptr0, len0);
    var v2 = getArrayI32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}
exports.bubble_sort = bubble_sort;

/**
 * @param {number} n
 * @returns {Int32Array}
 */
function fibonacci(n) {
    const ret = wasm.fibonacci(n);
    var v1 = getArrayI32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
}
exports.fibonacci = fibonacci;

/**
 * @param {number} n
 * @returns {number}
 */
function fibonacci_nth(n) {
    const ret = wasm.fibonacci_nth(n);
    return ret;
}
exports.fibonacci_nth = fibonacci_nth;

/**
 * @param {number} n
 * @returns {boolean}
 */
function is_prime(n) {
    const ret = wasm.is_prime(n);
    return ret !== 0;
}
exports.is_prime = is_prime;

/**
 * @param {Int32Array} arr
 * @param {number} target
 * @returns {Int32Array}
 */
function linear_search(arr, target) {
    const ptr0 = passArray32ToWasm0(arr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.linear_search(ptr0, len0, target);
    var v2 = getArrayI32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}
exports.linear_search = linear_search;

/**
 * @param {Int32Array} arr
 * @returns {Int32Array}
 */
function merge_sort(arr) {
    const ptr0 = passArray32ToWasm0(arr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.merge_sort(ptr0, len0);
    var v2 = getArrayI32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}
exports.merge_sort = merge_sort;

/**
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function sum(left, right) {
    const ret = wasm.sum(left, right);
    return ret;
}
exports.sum = sum;

exports.__wbindgen_init_externref_table = function() {
    const table = wasm.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
};

const wasmPath = `${__dirname}/algorithms_bg.wasm`;
const wasmBytes = require('fs').readFileSync(wasmPath);
const wasmModule = new WebAssembly.Module(wasmBytes);
const wasm = exports.__wasm = new WebAssembly.Instance(wasmModule, imports).exports;

wasm.__wbindgen_start();
