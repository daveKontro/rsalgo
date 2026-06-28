import { expect } from 'chai'
import { breadthFirstSearch } from '../src/node/graph/breadthFirstSearch'

describe('breadthFirstSearch', () => {
  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'E'],
    D: ['B', 'F'],
    E: ['B', 'C', 'F'],
    F: ['D', 'E', 'G'],
    G: ['F'],
  }

  it('visits nodes in breadth first order', () => {
    let order: string[] = []

    breadthFirstSearch({
      graph,
      start: 'A',
      onComplete: (result) => {
        order = [...result]
      },
    })

    expect(order).to.deep.equal(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
  })
})
