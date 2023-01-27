let home="";
let about="";
let contact="";
let page404="";
let contentDiv=document.getElementById("empty-div");
 let routes;

async function loadPage(page){
    let response=await fetch(page);
    let resHtml=await response.text();
    return resHtml;
}

async function loadAllpages(){
    home=await loadPage("home.html");
    about=await loadPage("about.html");
    contact=await loadPage("contact.html");
    page404=await loadPage("404.html");
}

async function main(){
   await loadAllpages();
   contentDiv.innerHTML=home; 
    routes={
        "#home":home,
        "#about":about,
        "#contact":contact,
        "**":page404
       }    
}
main();
async function anchorTagCall(){
        window.history.pushState({},location.hash,location.hash);       
         
}
window.addEventListener("hashchange",anchorTagCall);
window.onpopstate=()=>{
    if(!routes[location.hash]){
        console.log(location.hash)
        contentDiv.innerHTML=routes["**"];
    }
    else{
    console.log(routes[location.hash]);
    contentDiv.innerHTML=routes[location.hash]
    }
}



