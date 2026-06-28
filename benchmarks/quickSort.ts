import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { quick_sort } = require('../src/generated/node/algorithms.js')

const quickSortTs = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return [...arr]
  } else {
    const pivot = arr[Math.floor(arr.length / 2)]
    const left: number[] = []
    const middle: number[] = []
    const right: number[] = []

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else if (arr[i] === pivot) {
        middle.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }

    return [...quickSortTs(left), ...middle, ...quickSortTs(right)]
  }
}

export const addTasks = ({
  bench,
  arr,
}: {
  bench: Bench,
  arr: number[],
}) => {
  bench.add('quickSort (rs)', () => {
    quick_sort(new Int32Array(arr))
  })

  bench.add('quickSort (ts)', () => {
    quickSortTs(arr)
  })
}
