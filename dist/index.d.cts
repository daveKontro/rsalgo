//#region src/types/types.d.ts
type Result = number;
type ResultArray = Int32Array<ArrayBufferLike>;
type FibonacciSequence = Int32Array<ArrayBufferLike>;
type SearchArray = number[];
type SearchTarget = number;
//#endregion
//#region src/types/interfaces.d.ts
interface LinearSearchOptions {
  arr: SearchArray;
  target: SearchTarget;
}
interface BinarySearchOptions {
  arr: SearchArray;
  target: SearchTarget;
}
//#endregion
//#region src/node/math/sum.d.ts
declare const sum: (left: number, right: number) => Result;
//#endregion
//#region src/node/math/fibonacci.d.ts
declare const fibonacciNth: (n: number) => Result;
declare const fibonacci: (n: number) => FibonacciSequence;
//#endregion
//#region src/node/math/isPrime.d.ts
declare const isPrime: (n: number) => boolean;
//#endregion
//#region src/node/search/linearSearch.d.ts
declare const linearSearch: ({
  arr,
  target
}: LinearSearchOptions) => ResultArray;
//#endregion
//#region src/node/search/binarySearch.d.ts
declare const binarySearch: ({
  arr,
  target
}: BinarySearchOptions) => Result;
//#endregion
export { type BinarySearchOptions, type FibonacciSequence, type LinearSearchOptions, type Result, type ResultArray, type SearchArray, type SearchTarget, binarySearch, fibonacci, fibonacciNth, isPrime, linearSearch, sum };
//# sourceMappingURL=index.d.cts.map