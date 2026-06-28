import {
  quick_sort as quick_sort_rs,
} from '../../generated/node/algorithms.js'
import type {
  ResultArray,
  QuickSortOptions,
} from '../../types'

export const quickSort = ({
  arr,
}: QuickSortOptions): ResultArray => {
  const arrForRs = new Int32Array(arr)

  return quick_sort_rs(arrForRs)
}
