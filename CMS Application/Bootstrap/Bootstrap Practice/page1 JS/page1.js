



import {renderusers} from "./exportfile.js";
import {testmonialUsers} from "./exportfile.js";


var jsonData="http://localhost:3000/"
var url=`${jsonData}services`
var  users=[];

async function fetchData(){
   
   let getData=await fetch(url);
   let storeData= await getData.json();
   renderusers(storeData);
   console.log(storeData);
 
   
}
fetchData();


  


var testMonialData="http://localhost:3000/"
var url2=`${testMonialData}testmonial`
var testmonialArray=[];

async function testData(){
   
  let getTestData=await fetch(url2);
  let storeTestData= await getTestData.json();
  testmonialUsers(storeTestData);
  console.log(storeTestData);

  
}
testData();

