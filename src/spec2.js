'use strict'

/* eslint-env mocha */
describe('spec2.js', () => {
  require('..').register()
  it('second test', () => {
    console.assert(true, 'should export something')
  })
})
