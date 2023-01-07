
 
 export function renderusers(users){
    let cardIterationData=document.querySelector(".our-services-page");
    let updateusers=users.map(user=>{
      return `<div class="col-3 m-4  box"> 

      <img src="${user.image_url}" >
      <p class="number-id">${0}${user.id}</p>
      <h5>${user.title}</h5>
      <p id="color-gray">${user.subtitle}</p>
      <p id="color-gray">Lorem ipsum dolor sit amet, 
        consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.</p>
   </div>`
    })
    cardIterationData.innerHTML=updateusers.join("");
  }


 export function testmonialUsers(testmonialArray){
    let testIterationData=document.querySelector(".iteration");
    let testupdateusers=testmonialArray.map(testuser=>{
      return `<div class="col-3 m-4 p-3 box">
      <img src="${testuser.image_url}">
      <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.</p>
      <div class="row">
       <div class="col-3">
         <img src="${testuser.client_image}">
       </div>
       <div class="col-6">
           <h5 class="ceo mt-2 ">${testuser.name}</h5>
           <p class="category">${testuser.category}</p>
       </div>
       <div class="col-3">
         <img src="${testuser.button_image}">
     </div>
     </div>
   </div>`
    })
    testIterationData.innerHTML=testupdateusers.join("");
  }



  export function recentProjectUsers(ourRecentProjectArray){
    let recentIterationData=document.querySelector(".recent-project");
    let recentupdateusers=ourRecentProjectArray.map(recentuser=>{
      return `<div class="col-4">
      <img src="${recentuser.image_url}">
         
    </div>`
    })
    recentIterationData.innerHTML=recentupdateusers.join("");
  }


  export function blogUsers(blogArray){
      let blogIterateData=document.querySelector(".blog-data");
      let blogupdateusers=blogArray.map(bloguser=>{
        return `<div class="col-3 blog-margin">
        <img src="${bloguser.image_url}">
        <h6>${bloguser.heading}</h6>
        <p>${bloguser.information}</p>
        <button class="btn-readmore">Read More</button>
      </div>`
      })

      blogIterateData.innerHTML=blogupdateusers.join("");
  }