const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Trang chủ web</h1>')
})

app.get('/home', (req, res) => {
  res.send('<h1>Trang chủ home web</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})