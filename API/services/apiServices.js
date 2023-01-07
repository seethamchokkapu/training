async function apiGet(URL,params=null){
   let queryparams =Object.keys(params).map(key=>`${key}=${params[key]}`).join("&");
   console.log(queryparams)
    try{
  let response=await fetch(URL+"?"+queryparams);
        if(response.status===200){
            let result=response.json();
            return result
        }
    }
    catch(error){
        console.log(error)
    }
}



export{
    apiGet
}