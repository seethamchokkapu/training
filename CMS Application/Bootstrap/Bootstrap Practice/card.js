

alert("hello");


 import {renderusers} from "./card1.js";
var jsonData="http://localhost:3000/"
var user=`${jsonData}users`
var  users=[];
async function fetchData(){
   
   let getData=await fetch(user);
   let storeData= await getData.json();
   renderusers(storeData);
   console.log(storeData);
  console.log(storeData.length);
  
   // for (let i=0;i<storeData.length;i++){
        
   //    cardIterationData.innerHTML+=`<div class="card col-md-4 m-4" style="width: 18rem;" >
   //    <img src="../bootstrap-5.1.3-dist/gaming.png" class="card-img-top game-img" alt="...">
   //    <div class="card-body">
   //      <h5 class="card-title">${storeData[i].name}</h5>
   //      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   //      <a href="#" class="btn btn-primary">${storeData[i].username}</a>
   //    </div>
   //  </div>`

   // }



   // for(let data in storeData){
        
   //    cardIterationData.innerHTML+=`<div class="card col-md-4 m-4" style="width: 18rem;" >
   //       <img src="../bootstrap-5.1.3-dist/gaming.png" class="card-img-top game-img" alt="...">
   //       <div class="card-body">
   //         <h5 class="card-title">${storeData[data].name}</h5>
   //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   //         <a href="#" class="btn btn-primary">${storeData[data].username}</a>
   //       </div>
   //     </div>`
   



   // }

   

  //  let mapIteration= storeData.map(data=>{
  //     cardIterationData.innerHTML+= `<div class="card col-md-4 m-4" style="width: 18rem;" >
  //           <img src="../bootstrap-5.1.3-dist/gaming.png" class="card-img-top game-img" alt="...">
  //           <div class="card-body">
  //             <h5 class="card-title">${data.name}</h5>
  //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //             <a href="#" class="btn btn-primary">${data.username}</a>
  //           </div>
  //         </div>` 



  //  })
   
   

}
fetchData();




