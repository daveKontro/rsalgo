import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { linear_search } = require('../src/generated/node/algorithms.js')

const linearSearchTs = (arr: number[], target: number): number[] => {
  const indices: number[] = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i)
    }
  }

  return indices
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
  bench.add('linearSearch (rs)', () => {
    linear_search(new Int32Array(arr), target)
  })

  bench.add('linearSearch (ts)', () => {
    linearSearchTs(arr, target)
  })
}
