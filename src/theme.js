// Modular scale
const ms = (v = 0, r = Math.sqrt(2)) => Math.pow(r, v)

// Space separated values
const ssv = f => (...v) => v.map(f).join(' ')

const theme = {
  colors: {
    gray: '#bebdbd',
    maroon: '#39292a',
    maroonDark: '#291d1e',
    maroonExtraDark: '#1b1112',
    red: '#c21446',
    redDark: '#881731',
    tan: '#776f65',
    tanLight: '#dfddd7',
    tanExtraLight: '#f5f5f3',
    white: '#fff',
  },
  lineHeights: {
    solid: 1,
    title: 1.3,
    copy: 1.4,
  },
  fontFamilies: {
    sans: '"Whitney A", "Whitney B", sans-serif',
    sansCond: '"Whitney Cond A", "Whitney Cond B", sans-serif',
    serif: 'Feijoa, serif',
  },
  fontSize: s => ms(s / 2) + 'rem',
  mediaSizes: {
    t: '20rem',
    s: '30rem',
    m: '48rem',
    l: '60rem',
    x: '78rem',
    xx: '90rem',
  },
  radius: ssv(s => (typeof s === 'number' ? ms(s / 2) + 'rem' : s)),
  spacing: ssv(s => (typeof s === 'number' ? ms(s) + 'rem' : s)),
  transition: '150ms',
}

theme.mediaQueries = Object.keys(theme.mediaSizes).reduce((acc, curr) => {
  acc[curr] = `@media (min-width: ${theme.mediaSizes[curr]})`
  return acc
}, {})

// Shortcuts
theme.c = theme.colors
theme.f = theme.fontSize
theme.ff = theme.fontFamilies
theme.lh = theme.lineHeights
theme.mq = theme.mediaQueries
theme.ms = theme.mediaSizes
theme.r = theme.radius
theme.s = theme.spacing
theme.t = theme.transition

export default theme
