var page=1;
var sideContent=document.querySelector(".side-content");
var previousButton=document.querySelector(".btnpage3");
var nextButton=document.querySelector(".btnpage5");




  nextButton.addEventListener("click",nextPage);
   previousButton.addEventListener("click",prevPage);
  
 nextButton.innerHTML=`page ${page+1}<img src="images/right_arrowicon (1).svg" class="arrow">`;
  previousButton.style.display="none";
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
	        else{
		
		      previousButton.style.display="block";
		 
	              }
	      
	         nextButton.innerHTML=`page ${page+1}<img src="images/right_arrowicon (1).svg" class="arrow">`;
		     previousButton.innerHTML=`<img src="images/left_icon (1).svg" class="arrow">page ${page-1}`;
	         initialPage();
                               }
  
  function prevPage(){
	
	    sideContent.innerHTML="";
		page--;
		if(page*10==10){
			previousButton.style.display="none";
			nextButton.style.display="block";
			
		}
		else
		{
			nextButton.style.display="block";
		}
		previousButton.innerHTML=`<img src="images/left_icon (1).svg" class="arrow">page ${page-1}`;
		nextButton.innerHTML=`page ${page+1}<img src="images/right_arrowicon (1).svg" class="arrow">`;
       initialPage();
  }
  