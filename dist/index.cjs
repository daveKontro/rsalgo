//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion

//#region src/generated/node/algorithms.js
var require_algorithms = __commonJS({ "src/generated/node/algorithms.js"(exports, module) {
	let imports = {};
	imports["__wbindgen_placeholder__"] = module.exports;
	function getArrayI32FromWasm0(ptr, len) {
		ptr = ptr >>> 0;
		return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
	}
	let cachedInt32ArrayMemory0 = null;
	function getInt32ArrayMemory0() {
		if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
		return cachedInt32ArrayMemory0;
	}
	let cachedUint32ArrayMemory0 = null;
	function getUint32ArrayMemory0() {
		if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
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
	* @param {number} n
	* @returns {Int32Array}
	*/
	function fibonacci$1(n) {
		const ret = wasm.fibonacci(n);
		var v1 = getArrayI32FromWasm0(ret[0], ret[1]).slice();
		wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
		return v1;
	}
	exports.fibonacci = fibonacci$1;
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
	* @param {number} left
	* @param {number} right
	* @returns {number}
	*/
	function sum$1(left, right) {
		const ret = wasm.sum(left, right);
		return ret;
	}
	exports.sum = sum$1;
	exports.__wbindgen_init_externref_table = function() {
		const table = wasm.__wbindgen_externrefs;
		const offset = table.grow(4);
		table.set(0, void 0);
		table.set(offset + 0, void 0);
		table.set(offset + 1, null);
		table.set(offset + 2, true);
		table.set(offset + 3, false);
	};
	const wasmPath = `${__dirname}/algorithms_bg.wasm`;
	const wasmBytes = require("fs").readFileSync(wasmPath);
	const wasmModule = new WebAssembly.Module(wasmBytes);
	const wasm = exports.__wasm = new WebAssembly.Instance(wasmModule, imports).exports;
	wasm.__wbindgen_start();
} });

//#endregion
//#region src/node/math/sum.ts
var import_algorithms$4 = __toESM(require_algorithms(), 1);
const sum = (left, right) => {
	return (0, import_algorithms$4.sum)(left, right);
};

//#endregion
//#region src/node/math/fibonacci.ts
var import_algorithms$3 = __toESM(require_algorithms(), 1);
const fibonacciNth = (n) => {
	return (0, import_algorithms$3.fibonacci_nth)(n);
};
const fibonacci = (n) => {
	return (0, import_algorithms$3.fibonacci)(n);
};

//#endregion
//#region src/node/math/isPrime.ts
var import_algorithms$2 = __toESM(require_algorithms(), 1);
const isPrime = (n) => {
	return (0, import_algorithms$2.is_prime)(n);
};

//#endregion
//#region src/node/search/linearSearch.ts
var import_algorithms$1 = __toESM(require_algorithms(), 1);
const linearSearch = ({ arr, target }) => {
	const arrForRs = new Int32Array(arr);
	return (0, import_algorithms$1.linear_search)(arrForRs, target);
};

//#endregion
//#region src/node/search/binarySearch.ts
var import_algorithms = __toESM(require_algorithms(), 1);
const binarySearch = ({ arr, target }) => {
	const arrForRs = new Int32Array(arr);
	return (0, import_algorithms.binary_search)(arrForRs, target);
};

//#endregion
exports.binarySearch = binarySearch;
exports.fibonacci = fibonacci;
exports.fibonacciNth = fibonacciNth;
exports.isPrime = isPrime;
exports.linearSearch = linearSearch;
exports.sum = sum;
//# sourceMappingURL=index.cjs.map