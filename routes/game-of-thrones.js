const express = require('express')
const app = express()
const axios = require('axios')


app.get('/', (req, res) => {
  res.json('Hello, this is game of thrones / page')
})

app.get('/json', async (req, res) => {
  const response = await axios.get('https://thronesapi.com/api/v2/Characters')
  res.json(response.data)
})

app.get('/url=:url', async (req, res) => {
  const response = await axios.get(req.params.url)
  console.log(req.params.url)
  // res.json(response.data)
})


module.exports = app