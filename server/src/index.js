const middlewares = require('./middlewares')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

app.use(morgan('common'))
app.use(helmet())

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.use(middlewares.notFound)

app.use(middlewares.errorHandler)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`❗Server started at http://localhost:${port} ❗`))
// 40:55