import drawBanner from './banner'
import * as itsName from 'its-name'

function register(symbol?: string) {
  /* eslint-env mocha */
  beforeEach(function () {
    const title: string = itsName(this.currentTest).join(' / ')
    drawBanner(title, symbol)
  })
}

export default register
