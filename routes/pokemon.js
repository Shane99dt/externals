const express = require('express')
const app = express()
const axios = require('axios');

// `https://pokeapi.co/api/v2/pokemon/${id}`
app.get('/', async (req, res) => {
  const response = await axios.get(' https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

  // the url is used to get only the first 151 results
  const results = response.data
  res.json(results.results)
})

app.get('/:id', async (req, res) => {

  const paramsId = Number(req.params.id)

  if(0 < paramsId <= 151){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
    const result = response.data
    console.log(result)
    console.log(typeof(paramsId))
    res.json(result)
  }else{
    res.status(404).send('Not found')
  }
})


module.exports = app