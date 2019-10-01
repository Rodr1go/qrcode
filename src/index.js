const express = require('express')
const app = express()

const qr = require('qr-image')

app.set('view engine', 'ejs')
app.set('views', './src/views');

app.get('/', (req, res) => res.render('home'))

app.get('/qrcode', (req, res) => {  
  const url = 'https://github.com/Rodr1go'
  const code = qr.image(url, { type: 'svg' })

  res.type('svg')
  
  code.pipe(res)
})

app.listen(3000, () => {
  console.log('server running...')
})