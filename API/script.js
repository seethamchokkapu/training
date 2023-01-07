   import {iterateData} from "./export1.js";
   import {url} from "./config.js"
   import  {apiGet} from "./services/apiServices.js"


  var usersArray=[];
 async  function  fetchData(usersArray){
    let params={_start:5
                 ,_limit:5}

     usersArray=await apiGet(url,params);
    iterateData(usersArray)
 }
 fetchData();

 
