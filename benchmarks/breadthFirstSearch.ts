import { createRequire } from 'module'
import { Bench } from 'tinybench'
import Queue from './utilities/queue'

const require = createRequire(import.meta.url)
const { breadth_first_search } = require('../src/generated/node/algorithms.js')

type Graph = Record<string, string[]>

const breadthFirstSearchTs = (graph: Graph, start: string): void => {
  const visited = new Set<string>()
  const queue = new Queue<string>()
  const order: string[] = []

  visited.add(start)
  queue.enqueue(start)

  while (!queue.isEmpty()) {
    const node = queue.dequeue()
    order.push(node)

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.enqueue(neighbor)
      }
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
  bench.add('breadthFirstSearch (rs)', () => {
    breadth_first_search(graph, '0', undefined, undefined, undefined)
  })

  bench.add('breadthFirstSearch (ts)', () => {
    breadthFirstSearchTs(graph, '0')
  })
}
