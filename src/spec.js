'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* eslint-env mocha */
describe('terminal-banner', () => {
  const terminalBanner = require('..').terminalBanner
  it('is a function', () => {
    la(is.fn(terminalBanner), terminalBanner)
  })
})
