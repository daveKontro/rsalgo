import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { binary_search } = require('../src/generated/node/algorithms.js')

const binarySearchTs = (arr: number[], target: number): number => {
  let leftIndex = 0
  let rightIndex = arr.length - 1
  let index = -1

  while (leftIndex <= rightIndex && index === -1) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (target === arr[middleIndex]) {
      index = middleIndex
    } else if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }

  return index
}

export const addTasks = ({
  bench,
  arr,
  target,
}: {
  bench: Bench,
  arr: number[],
  target: number,
}) => {
  bench.add('binarySearch (rs)', () => {
    binary_search(new Int32Array(arr), target)
  })

  bench.add('binarySearch (ts)', () => {
    binarySearchTs(arr, target)
  })
}
