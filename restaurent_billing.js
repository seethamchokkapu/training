let sidebarButtons=document.querySelector(".sidebar");
 var getData;
 var tableData=document.querySelector(".entering-data");
 var p;
 var i;
 var input=1;
 var price;
 var totalprice=0;
 var tax;
 var overAllprice;
 var clearAll=document.querySelector(".clear-btn");
 clearAll.addEventListener("click",clear)

   
 async function sideDisplayContent(){
   
      p=await fetch("http://localhost:3000/items")
       getData=await p.json();
     
       for( i=0;i<getData.length;i++){
    sidebarButtons.innerHTML+=`<button class="container_btns" onclick="rightBillChart(${i})">
    ${getData[i].name}<br>${getData[i].price}</button>`
       }
   return getData;
}

sideDisplayContent();

   function rightBillChart(idValue){
    
    
    
      tableData.innerHTML+=
     
      `<tr>
          
            <td>${getData[idValue].name}</td>
            <td><input type="number" value=${input} class="user_input"></td>
            <td>${getData[idValue].price*input}</td>
            
       </tr>`

        price=`${getData[idValue].price}`;
        totalprice+=parseInt(price);
        console.log(totalprice);
        tax=(totalprice/100)*4;
         console.log(tax);
         discount=(totalprice/100)*25;
         console.log(discount);
         document.getElementById("discount").innerHTML=`${discount}`;
         document.getElementById("tax").innerHTML=`${tax}`;

         overAllprice=totalprice-discount+tax;
       console.log(overAllprice);
          document.getElementById("charge").innerHTML=`Charge${overAllprice}`;

      }
     
 
    function clear(){
      tableData.innerHTML="";
    }



