


var  users=[];

 import {renderusers} from "../JS/card1.js";
 import {user} from "../JS/config.js";
 import { apiGet } from "../JS/services/apiService.js"
async function fetchData(){
    
   let users=await apiGet(`${user}?_start=5&_limit=2`);
   renderusers(await users);

}

fetchData();




