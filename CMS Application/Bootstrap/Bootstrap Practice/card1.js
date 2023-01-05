 
 
 export function renderusers(users){
    let cardIterationData=document.querySelector("#users");
    let updateusers=users.map(user=>{
      return `<div class="card col-md-4 m-4" style="width: 18rem;" >
      <img src="../bootstrap-5.1.3-dist/gaming.png" class="card-img-top game-img" alt="...">
      <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">${user.username}</a>
      </div>
    </div>`
    })
    cardIterationData.innerHTML=updateusers.join("");
  }
  