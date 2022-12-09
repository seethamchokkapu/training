var pageNumber=1;
var recipesList;
var sideContent=document.querySelector(".side-content");
var previousButton=document.querySelector(".btnpage3");
var nextButton=document.querySelector(".btnpage5");
var pageValue=10;
var loopInitilizer=(pageNumber*pageValue)-pageValue;
var valueEight;


var request=new XMLHttpRequest();
   console.log(request);
   request.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza");
   request.send();
  
  request.addEventListener("load",function(){
	  recipesList=JSON.parse(this.responseText);
      console.log(recipesList);
	  valueEight = recipesList.count % pageValue;
	    initialPage();
   });


  nextButton.addEventListener("click",nextPage);
   previousButton.addEventListener("click",prevPage);
  
 nextButton.innerHTML=`page ${pageNumber+1}<img src="images/right_arrowicon (1).svg" class="arrow">`;
  previousButton.style.display="none";
  
  
function initialPage(){
	   
                 for( var i=(pageNumber*pageValue)-pageValue;i<(pageNumber*pageValue);i++){
        
	                  sideContent.innerHTML+=`<li>
		              <div class="imgbtn">
		   
		                  <img  class="imagepizza" src="${recipesList.recipes[i].image_url}" >
		                   <span class="spanclr">${recipesList.recipes[i].title}</span> 
		   
		                   <p class="text-left">${recipesList.recipes[i].publisher}</p> 
		             </div>
		          </li>`       
                              }
	
	 
                              }

  
  
 function nextPage(){
	        
	         pageNumber++;
	      sideContent.innerHTML="";
	   
	         if(pageNumber*pageValue> recipesList.count)  {
		 
		     nextButton.style.display="none";
		      previousButton.style.display="block";
		   
	         }	
	        else{
		
		      previousButton.style.display="block";
		 
	              }
	      
	         nextButton.innerHTML=`page ${pageNumber+1}<img src="images/right_arrowicon (1).svg" class="arrow">`;
		     previousButton.innerHTML=`<img src="images/left_icon (1).svg" class="arrow">page ${pageNumber-1}`;
			
			if(pageNumber==3){
				lastPageErr();
			}else{
	         initialPage();
			}
			
                               }
  
  function prevPage(){
	
	    sideContent.innerHTML="";
		pageNumber--;
		if(pageNumber*pageValue==pageValue){
			previousButton.style.display="none";
			nextButton.style.display="block";
			
		}
		else
		{
			nextButton.style.display="block";
		}
		previousButton.innerHTML=`<img src="images/left_icon (1).svg" class="arrow">page ${pageNumber-1}`;
		nextButton.innerHTML=`page ${pageNumber+1}<img src="images/right_arrowicon (1).svg" class="arrow">`;
       initialPage();
  }
  function lastPageErr(){
	  
	
		   
		
	     for( var i=(pageNumber*pageValue)-pageValue;i<((pageNumber*pageValue)-pageValue)+valueEight;i++){
			  
        
	                  sideContent.innerHTML+=`<li>
		              <div class="imgbtn">
		   
		                   <img src="${recipesList.recipes[i].image_url}"class="imagepizza">
		                   <span class="spanclr">${recipesList.recipes[i].title}</span> 
		   
		                   <p class="text-left">${recipesList.recipes[i].publisher}</p> 
		             </div>
		          </li>`       
                              }
	   
	   
                              }
  