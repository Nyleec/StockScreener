const express = require('express');
const lib = require('./lib.js');
const app = express()
const port = 3000;
let fin;

  app.get('/chart', (req, res) => {

    //console.log(res)
    res.send('Bunch of songs!')
   console.log( lib.testAggs("DKNG") )
  })
  
  app.get('/test', function(req, res, next) {
    // Handle the get for this route
   res.sendFile('/index.html', {root: __dirname });
  })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
