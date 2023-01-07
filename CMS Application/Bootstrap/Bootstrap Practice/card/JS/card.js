


var  users=[];

 import {renderusers} from "../JS/card1.js";
 import {user} from "../JS/config.js";
 import { apiGet } from "../JS/services/apiService.js"
async function fetchData(){
    let params={
      _start:5,_limit:2
    }
   let users=await apiGet(user,params);
   console.log(users);
   renderusers(users);

}

fetchData();




