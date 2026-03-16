import { linear_search as linear_search_rs } from '../../generated/browser/algorithms.js'
import type { ResultArray } from '../../types/types.js'
import type { LinearSearchOptions } from '../../types/interfaces.js'

export const linearSearch = ({
  arr,
  target,
}: LinearSearchOptions): ResultArray => {
  const arrForRs = new Int32Array(arr)

  return linear_search_rs(arrForRs, target)
}
