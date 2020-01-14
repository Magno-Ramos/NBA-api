const express = require('express')
const teams = require('./data/nba_teams.json')

const app = express()
const routes = express.Router()

const LIMIT = 10

routes.use('/teams', (req, res) => {
    const page = req.query.page || 0

    const start = page * LIMIT
    const end = LIMIT + start
    
    const data = teams.slice(start, end)
    res.json(data)
})

app.use('/nba', routes)

app.listen(process.env.PORT || 3000, () => console.log('server running'))