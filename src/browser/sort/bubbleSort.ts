import {
  bubble_sort as bubble_sort_rs,
} from '../../generated/browser/algorithms.js'
import type {
  ResultArray,
  BubbleSortOptions,
} from '../../types'

export const bubbleSort = ({
  arr,
}: BubbleSortOptions): ResultArray => {
  const arrForRs = new Int32Array(arr)

  return bubble_sort_rs(arrForRs)
}
