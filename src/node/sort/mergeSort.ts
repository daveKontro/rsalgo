import {
  merge_sort as merge_sort_rs,
} from '../../generated/node/algorithms.js'
import type {
  ResultArray,
  MergeSortOptions,
} from '../../types'

export const mergeSort = ({
  arr,
}: MergeSortOptions): ResultArray => {
  const arrForRs = new Int32Array(arr)

  return merge_sort_rs(arrForRs)
}
