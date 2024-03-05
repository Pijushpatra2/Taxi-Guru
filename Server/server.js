const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})