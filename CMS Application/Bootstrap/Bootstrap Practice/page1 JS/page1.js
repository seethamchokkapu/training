



import {renderusers} from "./exportfile.js";
import {testmonialUsers} from "./exportfile.js";
import { recentProjectUsers} from "./exportfile.js";
import {blogUsers} from "./exportfile.js"

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

var ourRecentProjectData="http://localhost:3000/"
var url3=`${ourRecentProjectData}ourproject`
var ourRecentProjectArray=[];

async function recentProject(){
   
  let getRecentProjData=await fetch(url3);
  let storeRecentData= await getRecentProjData.json();
  recentProjectUsers(storeRecentData);
  console.log(storeRecentData);

  
}
recentProject();


var blogData="http://localhost:3000/"
var url4=`${blogData}blog`
var blogArray=[];

async function blogFunction(){
   
  let getBlogData=await fetch(url4);
  let storeBlogData= await getBlogData.json();
  blogUsers(storeBlogData);
  console.log(storeBlogData);

  
}
blogFunction();