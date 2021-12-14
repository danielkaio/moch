const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.status(200).json({"message":"ola"})
})


app.listen(()=>console.log('rodando'))

module.exports = app