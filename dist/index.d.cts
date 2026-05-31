//#region src/types/types.d.ts
type Result = number;
type ResultArray = Int32Array<ArrayBufferLike>;
type FibonacciSequence = Int32Array<ArrayBufferLike>;
type SearchArray = number[];
type SearchTarget = number;
type SortArray = number[];
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
interface BubbleSortOptions {
  arr: SortArray;
}
interface MergeSortOptions {
  arr: SortArray;
}
interface InsertionSortOptions {
  arr: SortArray;
}
interface QuickSortOptions {
  arr: SortArray;
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
//#region src/node/sort/bubbleSort.d.ts
declare const bubbleSort: ({
  arr
}: BubbleSortOptions) => ResultArray;
//#endregion
//#region src/node/sort/insertionSort.d.ts
declare const insertionSort: ({
  arr
}: InsertionSortOptions) => ResultArray;
//#endregion
//#region src/node/sort/mergeSort.d.ts
declare const mergeSort: ({
  arr
}: MergeSortOptions) => ResultArray;
//#endregion
//#region src/node/sort/quickSort.d.ts
declare const quickSort: ({
  arr
}: QuickSortOptions) => ResultArray;
//#endregion
export { type BinarySearchOptions, type BubbleSortOptions, type FibonacciSequence, type InsertionSortOptions, type LinearSearchOptions, type MergeSortOptions, type QuickSortOptions, type Result, type ResultArray, type SearchArray, type SearchTarget, type SortArray, binarySearch, bubbleSort, fibonacci, fibonacciNth, insertionSort, isPrime, linearSearch, mergeSort, quickSort, sum };
//# sourceMappingURL=index.d.cts.map