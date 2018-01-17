const defaultWidth = 40
const terminalWidth = () =>
  (process.stdout.isTTY ? process.stdout.columns : defaultWidth) || defaultWidth

const decideWidth = (minWidth:number = 0) =>
  Math.max(minWidth, terminalWidth())

const horizontalLine = (n:number, symbol?: string) => {
  symbol = symbol || '-'
  var k
  var str = ''
  for (k = 0; k < n; k += 1) {
    str += symbol
  }
  return () => {
    console.log(str)
  }
}

const centerText = (text: string): string => {
  const w = terminalWidth()
  let s = text
  while (s.length < w - 1) {
    s = ' ' + s + ' '
  }
  return s
}

export const terminalBanner = (text: string, symbol?: string) => {
  const n = decideWidth(text.length)
  const hr = horizontalLine(n, symbol)
  hr()
  console.log(centerText(text))
  hr()
}
