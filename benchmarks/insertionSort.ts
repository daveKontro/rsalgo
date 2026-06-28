import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { insertion_sort } = require('../src/generated/node/algorithms.js')

const insertionSortTs = (arr: number[]): number[] => {
  const result = [...arr]

  for (let i = 1; i < result.length; i++) {
    let j = i

    while (j > 0 && result[j] < result[j - 1]) {
      const temp = result[j]
      result[j] = result[j - 1]
      result[j - 1] = temp
      j--
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
  bench.add('insertionSort (rs)', () => {
    insertion_sort(new Int32Array(arr))
  })

  bench.add('insertionSort (ts)', () => {
    insertionSortTs(arr)
  })
}
