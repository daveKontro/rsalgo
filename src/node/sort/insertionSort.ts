import {
  insertion_sort as insertion_sort_rs,
} from '../../generated/node/algorithms.js'
import type {
  ResultArray,
  InsertionSortOptions,
} from '../../types'

export const insertionSort = ({
  arr,
}: InsertionSortOptions): ResultArray => {
  const arrForRs = new Int32Array(arr)

  return insertion_sort_rs(arrForRs)
}
