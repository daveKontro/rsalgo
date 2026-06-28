import type * as types from './types'

export interface LinearSearchOptions {
  arr: types.SearchArray,
  target: types.SearchTarget,
}

export interface BinarySearchOptions {
  arr: types.SearchArray,
  target: types.SearchTarget,
}

export interface BubbleSortOptions {
  arr: types.SortArray,
}

export interface MergeSortOptions {
  arr: types.SortArray,
}

export interface InsertionSortOptions {
  arr: types.SortArray,
}

export interface QuickSortOptions {
  arr: types.SortArray,
}

export interface BFSOptions {
  graph: types.Graph,
  start: types.GraphNode,
  onVisit?: (node: types.GraphNode) => void,
  onEnqueue?: (node: types.GraphNode) => void,
  onComplete?: (order: types.GraphNode[]) => void,
}

export interface DFSOptions {
  graph: types.Graph,
  start: types.GraphNode,
  onEnter?: (node: types.GraphNode) => void,
  onExit?: (node: types.GraphNode) => void,
}
