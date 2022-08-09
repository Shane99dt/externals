const express = require('express')
const app = express()
const port = 5000
const gotRoutes = require('./routes/game-of-thrones')
const pokemonRoutes = require('./routes/pokemon')

app.get('/', (req, res) => {
  res.json('Home Page')
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})

app.use('/game-of-thrones', gotRoutes)
app.use('/pokemon', pokemonRoutes)
