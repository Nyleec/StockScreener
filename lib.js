//import { restClient } from "@polygon.io/client-js";
//import { referenceClient } from "@polygon.io/client-js";
const polygon = require('@polygon.io/client-js');


var num = 19;
var dates={};
for(var i =0;i<2;i++){
    dates[i]=num;
    num++;
}
var date="";

const rest = polygon.restClient("psZTe79ElmR4hZTDsOIvcjjRvdBcFEmf", "https://api.polygon.io");

async function testOpenClose(param){
    const response = await rest.stocks.dailyOpenClose("AAPL",param);
  //  var openedAt = response.open;
    console.log(response);
}

async function sequentialCall() {
    for(let k in dates){
        date = "2022-12-"+dates[k];
        testOpenClose(date);
  }
}

 async function testAggs(param){
    const response = await rest.stocks.aggregates(param,10,"minute","2022-12-19","2022-12-20");
    let test = {};
    //stores response as accessible variables
    test = response.results;
    let open = test[0].o;

    for (let i =0; i<test.length;i++){
        console.log(test[i].o);
    }
}

testAggs("DKNG");
        
    

