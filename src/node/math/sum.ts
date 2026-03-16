import { sum as sum_rs } from '../../generated/node/algorithms.js'
import type { Result } from '../../types/types.js'

export const sum = (left: number, right: number): Result => {
  return sum_rs(left, right)
}
