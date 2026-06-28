//#region src/types/types.d.ts
type Result = number;
type ResultArray = Int32Array<ArrayBufferLike>;
type FibonacciSequence = Int32Array<ArrayBufferLike>;
type SearchArray = number[];
type SearchTarget = number;
type SortArray = number[];
type Graph = Record<string, string[]>;
type GraphNode = string;
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
interface BFSOptions {
  graph: Graph;
  start: GraphNode;
  onVisit?: (node: GraphNode) => void;
  onEnqueue?: (node: GraphNode) => void;
  onComplete?: (order: GraphNode[]) => void;
}
interface DFSOptions {
  graph: Graph;
  start: GraphNode;
  onEnter?: (node: GraphNode) => void;
  onExit?: (node: GraphNode) => void;
}
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
//#region src/node/graph/breadthFirstSearch.d.ts
declare const breadthFirstSearch: ({
  graph,
  start,
  onVisit,
  onEnqueue,
  onComplete
}: BFSOptions) => void;
//#endregion
//#region src/node/graph/depthFirstSearch.d.ts
declare const depthFirstSearch: ({
  graph,
  start,
  onEnter,
  onExit
}: DFSOptions) => void;
//#endregion
export { type BFSOptions, type BinarySearchOptions, type BubbleSortOptions, type DFSOptions, type FibonacciSequence, type Graph, type GraphNode, type InsertionSortOptions, type LinearSearchOptions, type MergeSortOptions, type QuickSortOptions, type Result, type ResultArray, type SearchArray, type SearchTarget, type SortArray, binarySearch, breadthFirstSearch, bubbleSort, depthFirstSearch, fibonacci, fibonacciNth, insertionSort, isPrime, linearSearch, mergeSort, quickSort };
//# sourceMappingURL=index.d.ts.map