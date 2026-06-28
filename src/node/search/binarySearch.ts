import {
  binary_search as binary_search_rs,
} from '../../generated/node/algorithms.js'
import type {
  Result,
  BinarySearchOptions,
} from '../../types'

export const binarySearch = ({
  arr,
  target,
}: BinarySearchOptions): Result => {
  const arrForRs = new Int32Array(arr)

  return binary_search_rs(arrForRs, target)
}
