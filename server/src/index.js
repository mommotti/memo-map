const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

// CORS NORMALE
//const cors = require('cors')

// PROXY MOMENTANEA CODESANDBOX
const allowCors = require('allow-cors');

const mongoose = require('mongoose')
const logs = require('./api/logs')
require('dotenv').config()

const middlewares = require('./middlewares')

const app = express()

mongoose.connect(`${process.env.DATABASE_URL}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.once('open', function () {
    console.log('Connected to the DB!🎉')
});

app.use(morgan('common'))
app.use(helmet())
app.use(helmet.hidePoweredBy())
app.use(express.json())

// CORS NORMALE
//app.use(cors({
//    origin: 'http://localhost:3000'
//}))

// PROXY MOMENTANEA CODESANDBOX
// Use the allow-cors middleware with req and res
app.use((req, res, next) => {
     allowCors(req, res, {
       origin: '*',
       headers: '*',
       methods: '*',
       credentials: '*',
     });
     next();
   });

app.get('/', (req, res) => {
    res.json({
        message: 'welcome to the ofs API!!'
    })
})

app.use('/api/logs', logs)

// If a request makes it all the way   to here, it means the rout hasn't b een found
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../../client/build'))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../../', 'client', 'build', 'index.html')))
}


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`❗Server started at http://localhost:${port} ❗`))