var score=20;
var highscore=0;
var flag=true;

var secretNumber=Math.floor(Math.random()*20+1);
 console.log(secretNumber);
 
function check(){
  
  var userGuess=document.querySelector('.add4').value;
  if(flag==false){
  alert("click 'Again' to start a new Game");
  }
 else if(userGuess==""){
  alert(" please enter a number");
  }
   
  else if(userGuess>20){
   alert("enter between 1-20 numbers");
   
   }
   
 
   else  if(userGuess==secretNumber)
     {
        document.querySelector('.add6').textContent='you won the game';
        document.querySelector('body').style.backgroundColor='#09C69A';
        document.querySelector('.add3').textContent=+userGuess;
        //document.querySelector('.add6').textContent='You Won the game';
       flag=false;
       
       if(score>highscore){
         highscore=score;
         document.querySelector('.highscore').textContent=highscore;
         }
        
        
     }
    
     
      
     else if(userGuess<secretNumber)
     {
     document.querySelector('.add6').textContent='too low';
     score--;
     document.querySelector('.score').textContent=score;
     }
    else if(userGuess>secretNumber)
     {
      document.querySelector('.add6').textContent='too high';
      score--;
      document.querySelector('.score').textContent=score;
     
     }
     else if(typeof userGuess === "string"){
   alert("enter only numbers between 1-20");
   
   }
 
   clear();
  
    }
 function again(){
 
 score=20;
       document.querySelector('.add6').textContent='Start Guessing...';
       document.querySelector('.score').textContent=score;
       document.querySelector('body').style.backgroundColor="black";
      
       
    secretNumber=Math.floor(Math.random()*20+1);
       console.log(secretNumber);
       flag=true;
   
   }
 function clear(){
 document.querySelector('.add4').value="";
 }
   
 

