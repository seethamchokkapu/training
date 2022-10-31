    var ac1=939233;
    var pw1=1234;
    var ac2=63050;
    var pw2=5678;
    var ac1Bln=654;
    var ac2Bln=1769;
   function uacno(){
      var acno=prompt("enter account number");
       if(acno==ac1){
         password();
       }
       else{
       alert("wrong account details");
        uacno();
       }
        
       }
       
  function password(){
         var pw=prompt("enter your password here");
      if(pw==pw1){
           alert("welcome to naidus bank");
           condition();
                 }
      else{
          alert("password is wrong");
      uacno();
      }
      }
 function condition(){
    do{
      var z=prompt("1.check balance \n 2.Deposit \n 3.Withdraw \n 4.exit");  
       switch(z){
        case "1":alert("your account balance is"+ac1Bln) ;break;
        case "2":alert("your option is deposit amount") ;
                          deposit();break;
         case "3":alert("your option is withdraw amount") ;
                          withdraw();break;
         case "4":alert("log out"); 
                           exit();break;
         default:alert("your option is wrong");
        }  
        }while(z!=4);
      }
 function deposit(){
      var amount=prompt("enter amount here");
        ac1Bln=ac1Bln+parseInt(amount);
          alert("deposit successfully");
                           alert("available balance:"+ac1Bln);
                   }
 function withdraw(){
       var amount= prompt("enter withdrawal amount ");
                          if(ac1Bln>amount){
                           ac1Bln=ac1Bln-parseInt(amount);
                                
                           alert("withdraw amount successfully");
                           alert("available balance:"+ac1Bln);
                           }
                           else{
                                alert("insufficient balance");
                                }
                     } 
 function exit(){
        alert("thank you visit again") ;
        uacno();
        }                 
       
        
   function uacno(){
      var acno=prompt("enter account number");
       if(acno==ac2){
    password();
       }
       else{
       alert("wrong account details");
        uacno();
       }
        
       }
       
  function password(){
         var pw=prompt("enter your password here");
      if(pw==pw2){
           alert("welcome to naidus bank");
           condition();
                 }
      else{
          alert("password is wrong");
      uacno();
      }
      }
 function condition(){
    do{
      var z=prompt("1.check balance \n 2.Deposit \n 3.Withdraw \n 4.exit");  
       switch(z){
        case "1":alert("your account balance is"+ac2Bln) ;break;
        case "2":alert("your option is deposit amount") ;
                          deposit();break;
         case "3":alert("your option is withdraw amount") ;
                          withdraw();break;
         case "4":alert("log out"); 
                           exit();break;
         default:alert("your option is wrong");
        }  
        }while(z!=4);
      }
 function deposit(){
      var amount=prompt("enter amount here");
        ac2Bln=ac2Bln+parseInt(amount);
          alert("deposit successfully");
                           alert("available balance:"+ac2Bln);
                   }
 function withdraw(){
       var amount= prompt("enter withdrawal amount ");
                          if(ac2Bln>amount){
                           ac2Bln=ac2Bln-parseInt(amount);
                                
                           alert("withdraw amount successfully");
                           alert("available balance:"+ac2Bln);
                           }
                           else{
                                alert("insufficient balance");
                                }
                     } 
 function exit(){
        alert("thank you visit again") ;
        uacno();
        }
        
   uacno();  
        
          
