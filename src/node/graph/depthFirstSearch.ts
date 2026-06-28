import {
  depth_first_search as depth_first_search_rs,
} from '../../generated/node/algorithms.js'
import type {
  DFSOptions,
} from '../../types'

export const depthFirstSearch = ({
  graph,
  start,
  onEnter,
  onExit,
}: DFSOptions): void => {
  depth_first_search_rs(graph, start, onEnter, onExit)
}
