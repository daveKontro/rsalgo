//#region src/algorithms/math/types.d.ts
type FibonacciSequence = Int32Array<ArrayBufferLike>;
//#endregion
//#region src/types/common.d.ts
type Result = number;
type ResultArray = Int32Array<ArrayBufferLike>;
type SearchArray = number[];
type SearchTarget = number;
//#endregion
//#region src/algorithms/search/types.d.ts
interface LinearSearchOptions {
  arr: SearchArray;
  target: SearchTarget;
}
//#endregion
//#region src/algorithms/math/sum.d.ts
declare const sum: (left: number, right: number) => Result;
//#endregion
//#region src/algorithms/math/fibonacci.d.ts
declare const fibonacciNth: (n: number) => Result;
declare const fibonacci: (n: number) => FibonacciSequence;
//#endregion
//#region src/algorithms/math/isPrime.d.ts
declare const isPrime: (n: number) => boolean;
//#endregion
//#region src/algorithms/search/linearSearch.d.ts
declare const linearSearch: ({
  arr,
  target
}: LinearSearchOptions) => ResultArray;
//#endregion
export { FibonacciSequence, LinearSearchOptions, Result, ResultArray, SearchArray, SearchTarget, fibonacci, fibonacciNth, isPrime, linearSearch, sum };
//# sourceMappingURL=index.d.ts.map