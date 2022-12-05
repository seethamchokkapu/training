var page=1;
var sideContent=document.querySelector(".side-content");
var previousButton=document.querySelector(".btnpage3");
var nextButton=document.querySelector(".btnpage5");




  nextButton.addEventListener("click",nextPage);
   previousButton.addEventListener("click",prevPage);
  
  
  
   initialPage();
  
function initialPage(){
  for( var i=(page*10)-10;i<page*10;i++){
        
	       sideContent.innerHTML+=`<li>
		   <div class="imgbtn">
		   
		   <img src="${jsonData.recipes[i].image_url}"class="imagepizza">
		   <span class="spanclr">${jsonData.recipes[i].title}</span> 
		   
		   <p class="text-left">${jsonData.recipes[i].publisher}</p> 
		   </div>
		    </li>`       
  }

}
 
  
  
 function nextPage(){
	  sideContent.innerHTML="";
	  page++;
	   
	   
	 if(page*10>28)  {
		 
		   nextButton.style.display="none";
		   previousButton.style.display="block";
	 }		 
	 initialPage();
 }
 
  function prevPage(){
	
	    sideContent.innerHTML="";
		page--;
		if(page*10==10){
			previousButton.style.display="none";
			nextButton.style.display="block";
		}
     initialPage();
  }
  