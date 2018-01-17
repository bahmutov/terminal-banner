'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* eslint-env mocha */
describe('terminal-banner', () => {
  const terminalBanner = require('..')
  it('is a function', () => {
    la(is.fn(terminalBanner))
  })
})
