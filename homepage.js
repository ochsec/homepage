require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
    res.render('index', { title: 'ochsec.info' })
})

app.listen(port, () => console.log(`Homepage running at http://localhost:${port}`))
