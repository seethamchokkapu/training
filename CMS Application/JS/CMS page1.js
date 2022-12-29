
var divContent=document.querySelector(".total");
  async function getData(){
var p= await fetch("http://localhost:3000/services");
var storeData= await p.json();
console.log(storeData);

    for (var i=0;i<storeData.length;i++){
       
        divContent.innerHTML+=` <div class="first-div">
        <img src="${storeData[i].image_url}">
        <h3>${storeData[i].title}</h3>
        <p id="color-gray">${storeData[i].catagery}</p>
        <p id="color-gray">Lorem ipsum dolor sit amet, 
         consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
         </div>`
   

    }

  }
  getData();







  