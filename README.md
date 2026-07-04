![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FdaveKontro%2Frsalgo%2Fmain%2Fpackage.json&query=%24.version&label=version&labelColor=%2305071c&color=%23a8f0e0)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FdaveKontro%2Frsalgo%2Fmain%2Fpackage.json&query=%24.engines.node&logo=nodedotjs&label=node&labelColor=%2305071c&color=%23a8f0e0)
![Static Badge](https://img.shields.io/badge/npm->=v10-%23a8f0e0?logo=npm&labelColor=%2305071c)

# rsalgo

<div style="margin-top:20px;">
  <img src="./assets/rsalgo.png" width="120" height="120" alt="logo" />
</div>

algorithms for .js / .ts written in rust 🦀  

implementations are compiled to [WebAssembly](https://webassembly.org/) via [wasm-pack](https://rustwasm.github.io/wasm-pack/) and exposed as a typed TypeScript module  

supports Node.js and browser environments  

## installation
```
npm install @epic-effx/rsalgo
```

## node.js usage
```typescript
import { mergeSort, binarySearch, fibonacciNth, isPrime, breadthFirstSearch, depthFirstSearch } from 'rsalgo'

mergeSort({ arr: [8, 3, -1, 5] })              // Int32Array [-1, 3, 5, 8]
binarySearch({ arr: [1, 2, 3, 4], target: 3 }) // 2
fibonacciNth(18)                               // 2584
isPrime(7)                                     // true

const graph = { A: ['B', 'C'], B: ['A'], C: ['A'] }

breadthFirstSearch({ graph, start: 'A', onComplete: (order) => order }) // ['A', 'B', 'C']
depthFirstSearch({ graph, start: 'A', onEnter: console.log })           // A B C
```

## browser usage
```typescript
import { mergeSort } from 'rsalgo/browser'
```

## algorithms

### sort
| function | signature | paradigm |
|---|---|---|
| `bubbleSort` | `({ arr: number[] }) => Int32Array` | brute force |
| `insertionSort` | `({ arr: number[] }) => Int32Array` | incremental |
| `mergeSort` | `({ arr: number[] }) => Int32Array` | divide and conquer |
| `quickSort` | `({ arr: number[] }) => Int32Array` | divide and conquer |

### search
| function | signature | paradigm |
|---|---|---|
| `linearSearch` | `({ arr: number[], target: number }) => Int32Array` | brute force |
| `binarySearch` | `({ arr: number[], target: number }) => number` | divide and conquer |

### math
| function | signature | paradigm |
|---|---|---|
| `fibonacci` | `(n: number) => Int32Array` | dynamic programming |
| `fibonacciNth` | `(n: number) => number` | dynamic programming |
| `isPrime` | `(n: number) => boolean` | brute force |

### graph
| function | signature | paradigm |
|---|---|---|
| `breadthFirstSearch` | `({ graph: Graph, start: string, onVisit?, onEnqueue?, onComplete? }) => void` | breadth-first |
| `depthFirstSearch` | `({ graph: Graph, start: string, onEnter?, onExit? }) => void` | depth-first |

`Graph = Record<string, string[]>`

*more algorithms coming in future releases*

## benchmarks 🔬

these benchmarks compare each Rust/WASM implementation against an equivalent TypeScript implementation  

the results show when the WASM data transfer overhead outweighs the Rust speed advantage  

run them yourself with `npm run bench`  

### sort (random unsorted array, throughput in ops/s)

| | n = 100 | n = 1,000 | n = 10,000 | winner |
|---|---|---|---|---|
| **bubbleSort rs** | 237,244 | 1,902 | 12 | |
| **bubbleSort ts** | 156,349 | 1,196 | 8 | **rs ~1.5x** |
| **insertionSort rs** | 373,282 | 6,300 | 64 | |
| **insertionSort ts** | 293,871 | 2,960 | 29 | **rs ~2x** |
| **mergeSort rs** | 44,990 | 2,971 | 175 | |
| **mergeSort ts** | 10,869 | 1,063 | 99 | **rs ~2x** |
| **quickSort rs** | 99,865 | 5,555 | 506 | |
| **quickSort ts** | 158,506 | 7,995 | 581 | **ts ~1.2x** |

NOTE: quickSort allocates three new vectors per recursion in Rust - a true in-place partition would reverse this result  

### search (sorted array, target at midpoint, throughput in ops/s)

| | n = 100 | n = 1,000 | n = 10,000 | n = 100,000 | winner |
|---|---|---|---|---|---|
| **linearSearch rs** | 1,039,043 | 394,379 | 55,512 | 2,182 | |
| **linearSearch ts** | 8,095,173 | 1,470,070 | 150,087 | 14,172 | **ts ~6x** |
| **binarySearch rs** | 1,439,392 | 554,583 | 80,079 | 2,650 | |
| **binarySearch ts** | 14,034,290 | 10,932,356 | 8,675,071 | 6,976,545 | **ts dominates** |

`new Int32Array(arr)` copies the entire array into WASM memory on every call - paying O(n) transfer cost for O(log n) work  

the more efficient the algorithm, the harder WASM overhead hits  

### math (throughput in ops/s)

| | n = 10 | n = 100 | n = 1,000 | n = 10,000 | winner |
|---|---|---|---|---|---|
| **fibonacci rs** | 4,742,209 | 1,341,162 | 418,548 | 56,713 | |
| **fibonacci ts** | 15,872,733 | 2,035,695 | 197,158 | 21,293 | crossover ~n = 500 |
| **fibonacciNth rs** | 26,793,073 | 14,922,827 | 3,321,753 | 397,530 | |
| **fibonacciNth ts** | 25,395,909 | 4,767,649 | 549,187 | 55,456 | **rs** beyond n = 10 |
| **isPrime rs** | - | - | - | - | |
| **isPrime ts** | - | - | - | - | **tied** across all sizes |

### graph (chain graph by number of nodes, throughput in ops/s)

| | n = 10 | n = 100 | n = 1,000 | winner |
|---|---|---|---|---|
| **breadthFirstSearch rs** | 89,483 | 9,256 | 888 | |
| **breadthFirstSearch ts** | 712,050 | 69,645 | 7,813 | **ts ~8x** |
| **depthFirstSearch rs** | 97,893 | 9,858 | 951 | |
| **depthFirstSearch ts** | 1,679,643 | 196,711 | 21,213 | **ts ~22x** |

graph object deserialization via `serde_wasm_bindgen` adds O(V+E) overhead on every call - unlike typed arrays, the entire nested JS object must be parsed into a Rust `HashMap` before traversal even begins

`V` = vertices (nodes), `E` = edges (connections)

### key finding

rs wins where computation is heavy relative to data transfer  

ts wins where data transfer dominates - search pays O(n) array copy for O(log n) work; graph traversal pays full object deserialization on every call, making rs slower by an order of magnitude at all tested sizes  

## scripts

build Rust → WASM and TypeScript
```
npm run build
```

run Rust tests
```
npm run test:rust
```

run TypeScript tests
```
npm run test:js
```

run benchmarks
```
npm run bench
```
