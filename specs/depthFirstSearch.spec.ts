import { expect } from 'chai'
import { depthFirstSearch } from '../src/node/graph/depthFirstSearch'

describe('depthFirstSearch', () => {
  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'E'],
    D: ['B', 'F'],
    E: ['B', 'C', 'F'],
    F: ['D', 'E', 'G'],
    G: ['F'],
  }

  it('visits nodes in depth first order', () => {
    const enterOrder: string[] = []
    const exitOrder: string[] = []

    depthFirstSearch({
      graph,
      start: 'A',
      onEnter: (node) => { enterOrder.push(node) },
      onExit: (node) => { exitOrder.push(node) },
    })

    expect(enterOrder).to.deep.equal(['A', 'B', 'D', 'F', 'E', 'C', 'G'])
    expect(exitOrder).to.deep.equal(['C', 'E', 'G', 'F', 'D', 'B', 'A'])
  })
})
