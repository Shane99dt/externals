const express = require('express')
const app = express()
const axios = require('axios')
const charactersJson = require('../gotCharacters.json')


app.get('/', (req, res) => {
  res.json('Hello, this is game of thrones / page')
})

app.get('/json', (req, res) => {
  res.json(charactersJson)
})

app.get('/url', async (req, res) => {
  const response = await axios.get('https://thronesapi.com/api/v2/Characters')
  res.json(response.data)
})


module.exports = app