import { Bench } from 'tinybench'
import { addTasks as addBubbleSortTasks } from './bubbleSort'
import { addTasks as addInsertionSortTasks } from './insertionSort'
import { addTasks as addMergeSortTasks } from './mergeSort'
import { addTasks as addQuickSortTasks } from './quickSort'
import { addTasks as addLinearSearchTasks } from './linearSearch'
import { addTasks as addBinarySearchTasks } from './binarySearch'
import { addTasks as addFibonacciTasks } from './fibonacci'
import { addTasks as addFibonacciNthTasks } from './fibonacciNth'
import { addTasks as addIsPrimeTasks } from './isPrime'
import { addTasks as addBFSTasks } from './breadthFirstSearch'
import { addTasks as addDFSTasks } from './depthFirstSearch'

const sortSizes = [100, 1_000, 10_000]
const searchSizes = [100, 1_000, 10_000, 100_000]
const fibSizes = [10, 100, 1_000, 10_000]
const primeSizes = [97, 7_919, 104_729]
const graphSizes = [10, 100, 1_000]

const generateGraph = (size: number): Record<string, string[]> => {
  const graph: Record<string, string[]> = {}

  for (let i = 0; i < size; i++) {
    graph[String(i)] = []
  }

  for (let i = 0; i < size - 1; i++) {
    graph[String(i)].push(String(i + 1))
    graph[String(i + 1)].push(String(i))
  }

  return graph
}

for (const size of sortSizes) {
  const arr: number[] = []

  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * size))
  }

  const bench = new Bench({ time: 1000 })

  addBubbleSortTasks({ bench, arr })
  addInsertionSortTasks({ bench, arr })
  addMergeSortTasks({ bench, arr })
  addQuickSortTasks({ bench, arr })

  await bench.run()

  console.log(`\n--- sort: n = ${size} ---`)
  console.table(bench.table())
}

for (const size of searchSizes) {
  const arr: number[] = []

  for (let i = 0; i < size; i++) {
    arr.push(i)
  }

  const target = Math.floor(size / 2)
  const bench = new Bench({ time: 1000 })

  addLinearSearchTasks({ bench, arr, target })
  addBinarySearchTasks({ bench, arr, target })

  await bench.run()

  console.log(`\n--- search: n = ${size} ---`)
  console.table(bench.table())
}

for (const n of fibSizes) {
  const bench = new Bench({ time: 1000 })

  addFibonacciTasks({ bench, n })
  addFibonacciNthTasks({ bench, n })

  await bench.run()

  console.log(`\n--- fibonacci: n = ${n} ---`)
  console.table(bench.table())
}

for (const n of primeSizes) {
  const bench = new Bench({ time: 1000 })

  addIsPrimeTasks({ bench, n })

  await bench.run()

  console.log(`\n--- isPrime: n = ${n} ---`)
  console.table(bench.table())
}

for (const size of graphSizes) {
  const graph = generateGraph(size)
  const bench = new Bench({ time: 1000 })

  addBFSTasks({ bench, graph })
  addDFSTasks({ bench, graph })

  await bench.run()

  console.log(`\n--- graph: n = ${size} ---`)
  console.table(bench.table())
}
