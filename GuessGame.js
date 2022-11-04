var score=20;
var highscore=0;

var secretNumber=Math.round(Math.random()*20+1);
 console.log(secretNumber);


function check(){
  
   var userGuess=document.querySelector('.add4').value;
 
     if(userGuess==secretNumber)
     {
        document.querySelector('.add6').textContent='you won the game';
        document.querySelector('body').style.backgroundColor='#09C69A';
        document.querySelector('.add3').textContent=+userGuess; 
        
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
    else
     {
      document.querySelector('.add6').textContent='too high';
      score--;
      document.querySelector('.score').textContent=score;
     
     }
    }
 function again(){
 
 score=20;
       document.querySelector('.add6').textContent='Start Guessing...';
       document.querySelector('.score').textContent=score;
       document.querySelector('body').style.backgroundColor="black";
    secretNumber=Math.round(Math.random()*20+1);
       console.log(secretNumber);
   
   }
   
 

