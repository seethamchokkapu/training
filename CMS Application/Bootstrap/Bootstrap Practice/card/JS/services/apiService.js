

async function apiGet(url,params=null){
  let apiUrl="";
 if(params){
 let queryparams= Object.keys(params).map(key=>`${key}=${params[key]}`).join("&");
 console.log(queryparams);
 apiUrl=url+"?"+queryparams;
 }

 else
 {
  apiUrl=url;
 }
    try{
    let response=await fetch(apiUrl);
   
    if(response.status===200){
       let result=await response.json();
       return result;
    }
    }
    catch(error){
      console.log(error);
    }
}


export{
    apiGet
}