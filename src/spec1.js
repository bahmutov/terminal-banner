'use strict'

/* eslint-env mocha */
describe('spec1.js', () => {
  require('..').register()
  it('test A', () => {
    console.assert(true, 'should export something')
  })
})

describe('spec1.js second suite', () => {
  require('..').register()
  it('test B', () => {
    console.assert(true, 'should export something')
  })
})
