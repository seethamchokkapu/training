document.getElementById("modal").onclick=function(){
  
  document.querySelector(".div1").style.display="block";
  document.querySelector(".clear").style.display="none";
}
    
    
  
document.getElementById("validation").onclick=function(){
var userEnter=document.getElementById("username-validation").value;
    var userpassword=document.getElementById("userpassword-validation").value;
       console.log(userEnter);
   if(userEnter=="Step Curry" &&userpassword==123456){
   
     document.getElementById("validation").onclick=function(){
        document.querySelector(".options-page").style.display="block";
        document.querySelector(".div1").style.display="none";
        
        document.getElementById("withdrawform").onclick=function(){
          document.querySelector(".page-none").style.display="block";
          document.querySelector(".options-page").style.display="none";
        
    
          document.querySelector(".btn-withdraw").onclick=function(){
          var withdrawMoney=document.getElementById("enteredMoney").value;
        if(withdrawMoney<2380){
           
          document.getElementById("withdraw").innerHTML=parseInt(2380)-withdrawMoney;
          document.querySelector(".options-page").style.display="block";
         
          document.querySelector(".page-none").style.display="none";
           }
           else
          {
            alert("insufficient money");
          }
          
          }
          
           
        }
        }
        
     }
     else{
    
      alert("enter correct details")
    }
  
   
   }



