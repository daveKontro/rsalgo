import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { merge_sort } = require('../src/generated/node/algorithms.js')

const mergeSortTs = (arr: number[]): number[] => {
  const merge = (
    left: number[],
    right: number[]
  ): number[] => {
    const sorted: number[] = []
    let l = 0
    let r = 0

    while (l < left.length && r < right.length) {
      if (left[l] <= right[r]) {
        sorted.push(left[l])
        l++
      } else {
        sorted.push(right[r])
        r++
      }
    }

    for (let i = l; i < left.length; i++) {
      sorted.push(left[i])
    }

    for (let i = r; i < right.length; i++) {
      sorted.push(right[i])
    }

    return sorted
  }

  if (arr.length < 2) {
    return [...arr]
  } else {
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    return merge(mergeSortTs(left), mergeSortTs(right))
  }
}

export const addTasks = ({
  bench,
  arr,
}: {
  bench: Bench,
  arr: number[],
}) => {
  bench.add('mergeSort (rs)', () => {
    merge_sort(new Int32Array(arr))
  })

  bench.add('mergeSort (ts)', () => {
    mergeSortTs(arr)
  })
}
