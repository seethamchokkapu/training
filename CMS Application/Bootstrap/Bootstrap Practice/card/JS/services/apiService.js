

async function apiGet(url){
    try{
    let response=await fetch(url);
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