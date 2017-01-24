const fs = require('fs')
const cssstats = require('cssstats')

const basscss = 'basscss@8.0.2.min.css'
const azDev = 'az-dev.css'

const css = fs.readFileSync(azDev, 'utf8')
// console.log('basscssMin', basscssMin)
const stats = cssstats(css)
// console.log('!!stats!!\n', stats)

// console.log('stats.selectors.values\n', stats.selectors.values)

const classes = stats.selectors.values

classes.map(selector => {console.log(selector, '{}')})
