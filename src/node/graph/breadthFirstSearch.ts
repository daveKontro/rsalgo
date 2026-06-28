import {
  breadth_first_search as breadth_first_search_rs,
} from '../../generated/node/algorithms.js'
import type {
  BFSOptions,
} from '../../types'

export const breadthFirstSearch = ({
  graph,
  start,
  onVisit,
  onEnqueue,
  onComplete,
}: BFSOptions): void => {
  breadth_first_search_rs(graph, start, onVisit, onEnqueue, onComplete)
}
