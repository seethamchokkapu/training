/*
GAME RULES:
-------------------------------------------------
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

functions in brief:
------------------------------------------------
1. Roll the dice: The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.  Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.


2. Hold: If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.

3. Reset: All the scores are set to 0 and Player 1 is set as the starting player (current player).


Tasks:
---------------------
1. Add script and CSS files to HTML
2. Generate random roll dice and display dice roll
3. Set active player,(CSS class name: player--active) Add dice roll to current score and display score
4. Hold: Add current score to total score and Switch player
5. Win screen: Add "player--winner" to winner player section
6. Reset/New game.
*/



var sum=0;
  var totalsum=0;
  var dicenumber=0;
function diceroll(){
     dicenumber=Math.floor(Math.random()*6+1);
     console.log(dicenumber);
   if(dicenumber<=6){
        var x= document.querySelector('.dice');
        x.setAttribute("src",`dice-${dicenumber}.png`);
        document.querySelector("#current--0").innerHTML=+dicenumber;
        sum+=dicenumber;
        document.querySelector("#current--0").innerHTML=sum;
   if(dicenumber==1){
        
        document.querySelector("#current--0").innerHTML=0;
        document.querySelector("#score--0").innerHTML=0;
      x.removeEventListener("click",diceroll);
    }
     
   
    }
   
  
    }
function hold(){
   
    
    document.querySelector("#score--0").innerHTML=sum;
    document.querySelector("#current--0").innerHTML=0;
    x.removeEventListener("click",diceroll);
   
    }
    
 function player2(){
     icenumber=Math.floor(Math.random()*6+1);
     console.log(dicenumber);
   if(dicenumber<=6){
        var x= document.querySelector('.dice');
        x.setAttribute("src",`dice-${dicenumber}.png`);
        document.querySelector("#current--1").innerHTML=+dicenumber;
        sum+=dicenumber;
        document.querySelector("#current--1").innerHTML=sum;
   if(dicenumber==1){
        
        document.querySelector("#current--1").innerHTML=0;
        document.querySelector("#score--1").innerHTML=0;
 
    }
     
   
    }
 
    }
 function hold1(){
   
    
    document.querySelector("#score--1").innerHTML=sum;
    document.querySelector("#current--1").innerHTML=0;
   
    }
 
