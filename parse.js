
const basscssURL = 'https://unpkg.com/basscss@8.0.2/css/basscss.min.css'

console.log('basscssURL', basscssURL)


const data = {}
fetch(basscssURL)
  .then(console.log('fetched!'))
  .then(blob => console.log('blob.css', blob.type))

// console.log('data', data)


// data = []
// fetch(basscssURL)
//   .then(console.log('fetched!'))
//   .then(blob => blob.json())
//   .then(data => array.push(...data))
