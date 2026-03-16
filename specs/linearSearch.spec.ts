import { expect } from 'chai'
import { linearSearch } from '../src/node/search/linearSearch'

describe('linearSearch', () => {
  it('indexes are found', () => {
    const targetIndexes = linearSearch({
      arr: [2, 6, 3, 4, 3],
      target: 3,
    })

    expect(targetIndexes)
      .to.deep.equal(new Int32Array([2, 4]))
  })
})
