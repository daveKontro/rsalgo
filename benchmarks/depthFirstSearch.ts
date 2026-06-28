import { createRequire } from 'module'
import { Bench } from 'tinybench'

const require = createRequire(import.meta.url)
const { depth_first_search } = require('../src/generated/node/algorithms.js')

type Graph = Record<string, string[]>

const depthFirstSearchTs = (
  graph: Graph,
  node: string,
  visited: Set<string> = new Set()
): void => {
  visited.add(node)

  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      depthFirstSearchTs(graph, neighbor, visited)
    }
  }
}

export const addTasks = ({
  bench,
  graph,
}: {
  bench: Bench,
  graph: Graph,
}) => {
  bench.add('depthFirstSearch (rs)', () => {
    depth_first_search(graph, '0', undefined, undefined)
  })

  bench.add('depthFirstSearch (ts)', () => {
    depthFirstSearchTs(graph, '0')
  })
}
