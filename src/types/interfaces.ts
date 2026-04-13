import type * as types from './types'

export interface LinearSearchOptions {
  arr: types.SearchArray,
  target: types.SearchTarget,
}

export interface BinarySearchOptions {
  arr: types.SearchArray,
  target: types.SearchTarget,
}

export interface MergeSortOptions {
  arr: types.SortArray,
}
