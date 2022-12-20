var pageNumber=1;
var recipesList;
var sideContent=document.querySelector(".side-content");
var previousButton=document.querySelector(".btnpage3");
var nextButton=document.querySelector(".btnpage5");
var pageValue=10;
var loopInitilizer=(pageNumber*pageValue)-pageValue;
var valueEight;
var searchButton=document.querySelector(".search-btn");
searchButton.addEventListener("click",getJsonData);
nextButton.addEventListener("click",nextPage);
   previousButton.addEventListener("click",prevPage);
  
 nextButton.innerHTML=`page ${pageNumber+1}<img src="images/right_arrowicon (1).svg" class="arrow">`;
  previousButton.style.display="none";
recipeIngList=document.querySelector(".right-ing-content");
 rightBigImage=document.querySelector(".image-transition");
 transitionImages=document.querySelector(".transition-images");
 var jsonData;
 var jsonDataForIngridients;
 
   async function login(naidu){
	    
	   console.log(naidu);
	    recipeIngList.innerHTML="";
	   
                 let response=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${naidu}`)
				 
				 jsonDataForIngridients= await response.json();	 
                 console.log(jsonDataForIngridients);
			
				 displayRecipeIngridients();
			  
					
          }
		  



 function getJsonData(){
var request=new XMLHttpRequest();
   console.log(request);
   var foodItems=document.querySelector(".search-bar").value;
   console.log(foodItems);
   request.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${foodItems}`);     //API  is used here
   request.send(); 
   request.addEventListener("load", async function(){
	  jsonData= await JSON.parse(this.response);
      console.log(jsonData);

	  valueEight = jsonData.count % pageValue;

	       initialPage();
		
   });
  }

  
  
   
function initialPage(){                                                  //function initial page
	              sideContent.innerHTML="";
				
                 for( var i=(pageNumber*pageValue)-pageValue;i<(pageNumber*pageValue);i++){
					
                     //console.log(jsonData.recipes[i].recipe_id);
					   
	                  sideContent.innerHTML+=`<li onclick="login('${jsonData.recipes[i].recipe_id}')">
				
		              <div class="imgbtn">
		   
		                  <img  class="imagepizza" src="${jsonData.recipes[i].image_url}" >
		                   <span class="spanclr">${jsonData.recipes[i].title}</span> 
		   
		                   <p class="text-left">${jsonData.recipes[i].publisher}</p> 
		             </div>
		          </li>`       
				   
                              }
	
	 
                              }

  
  
 function nextPage(){                                                    //function nextpage
	        
	         pageNumber++;
	      sideContent.innerHTML="";
	   
	         if(pageNumber*pageValue> jsonData.count)  {
		 
		     nextButton.style.display="none";
		      previousButton.style.display="block";
		   
	         }	
	        else{
		
		      previousButton.style.display="block";
		 
	              }
	      
	         nextButton.innerHTML=`page ${pageNumber+1}<img src="images/right_arrowicon (1).svg" class="arrow">`;
		     previousButton.innerHTML=`<img src="images/left_icon (1).svg" class="arrow">page ${pageNumber-1}`;
			
		
	         initialPage();
			
			
                               }
  
  function prevPage(){                                                               //function previous page
	
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
 
							  
			 
	function displayRecipeIngridients()	{
		// recipeIngList.innerHTML="";
			
		  for(var k=0;k< jsonDataForIngridients.recipe.ingredients.length;k++){
		    recipeIngList.innerHTML+=`<li><img src="images/checkicon (1).svg" id="tick">${jsonDataForIngridients.recipe.ingredients[k]}</li>`
		  }
		 
		  rightBigImage.innerHTML= `<img src="${jsonDataForIngridients.recipe.image_url}" class="imgsamosa">     
		                                               <center> <p class="pipperonipizza" class="handpies">${jsonDataForIngridients.recipe.title}</p> </center>`
													 
		                                                    
		
	}
	