const express = require('express')
const app = express()
const axios = require('axios');

app.get('/', async (req, res) => {
  const response = await axios.get(' https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

  // the url is used to get only the first 151 results
  const results = response.data
  res.json(results.results)
})

app.get('/:id', async (req, res) => {

  const paramsId = Number(req.params.id)

  try{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${paramsId}`)
    const result = response.data
    res.json(result)

  }catch(error){
    console.log(error)
    res.status(error.response.status).send(error.response.statusText)
  }
})


module.exports = app