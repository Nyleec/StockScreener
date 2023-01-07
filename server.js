
const express = require('express');
const lib = require('./lib.js');

const app = express()
const port = 3000;
//enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/index.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//console.log(app.get.toString())
app.get('/songs', (req, res) => {
    console.log(res)
    res.send('Bunch of songs!')
    console.log(lib.testAggs("DKNG"));
  })
  app.get('', (req, res) => {
    console.log(res)
    res.send('welcome')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
  app.get('/test', function(req, res, next) {
    // Handle the get for this route
   // res.sendFile('/index.html', {root: __dirname });
    //res.sendFile('/lib.js', {root: __dirname })
  })
 /*app.get('/test', function(req, res) {
    res.sendFile('/index.html', {root: __dirname })
});*/