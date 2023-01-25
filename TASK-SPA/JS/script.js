let home="";
let about="";
let contact="";
let page404="";
let contentDiv=document.getElementById("empty-div");
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
    "/":home,
    "/about":about,
    "/contact":contact,
    "**":page404
   }
  
}
main();

async function anchorTagCall(pathname){
   
    
        window.history.pushState({},pathname,location.origin+pathname);
        contentDiv.innerHTML=routes[pathname];   
    
   
      
}

window.onpopstate=()=>{
    contentDiv.innerHTML=routes[window.location.pathname]
}