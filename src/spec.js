'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* eslint-env mocha */
describe('terminal-banner', () => {
  const terminalBanner = require('..').terminalBanner
  it('is a function', () => {
    la(is.fn(terminalBanner), terminalBanner)
  })

  it('draws banner', () => {
    terminalBanner('some text')
  })

  it('draws banner with *', () => {
    terminalBanner('some text', '*')
  })

  context('terminal width', () => {
    let isTTY
    beforeEach(() => {
      isTTY = process.stdout.isTTY
      process.stdout.isTTY = false
    })

    afterEach(() => {
      process.stdout.isTTY = isTTY
    })

    it('works with short text', () => {
      terminalBanner('short text')
    })

    it('works with long text', () => {
      terminalBanner(
        'loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo text'
      )
    })
  })
})
