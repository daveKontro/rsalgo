import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { bubble_sort } = require('../src/generated/node/algorithms.js')

const bubbleSortTs = (arr: number[]): number[] => {
  const result = [...arr]

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j]
        result[j] = result[j + 1]
        result[j + 1] = temp
      }
    }
  }

  return result
}

export const addTasks = ({
  bench,
  arr,
}: {
  bench: Bench,
  arr: number[],
}) => {
  bench.add('bubbleSort (rs)', () => {
    bubble_sort(new Int32Array(arr))
  })

  bench.add('bubbleSort (ts)', () => {
    bubbleSortTs(arr)
  })
}
