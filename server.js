
const express = require('express')

/* Trying to import lib.js as a module
import ('./lib.js').then(lib=>{
  lib.testAggs("DKNG");
});
*/
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
    res.sendFile('/index.html', {root: __dirname })
  });
 /*app.get('/test', function(req, res) {
    res.sendFile('/index.html', {root: __dirname })
});*/