const express = require('express');

const PORT  = process.env.PORT || 3001

const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})

app.get('/api', (req, res) => {
    console.log(req.query)
    res.json({
        message: "привет из бэка "
    })
})

app.post('/api/post', (req, res) => {
    console.log(req.body)
    res.status(200).json('server is worling')
})