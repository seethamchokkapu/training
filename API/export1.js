export function iterateData(usersArray){
       

    let innerData=document.querySelector(".iterate");
    let dataMap=usersArray.map(param=>{
        return `<div class="col-4">
        <img src="./design.png">
        <h3>${param.NAME}</h3>
        <p>${param.contactNumber}</p>
        </div>`
    })
    innerData.innerHTML=dataMap.join("");
 }