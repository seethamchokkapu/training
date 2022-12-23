let sidebarButtons = document.querySelector(".sidebar");
var getData;
var tableData = document.querySelector(".entering-data");
var p;
var i;
var input = 1;
var payment=0;
var totalprice = 0;
var tax;
var overAllprice;
var orderTicketBtn=document.getElementById("order-ticket");
var enterValue;
var idValue1;
var selectedItems=[];
var arr=[];
 var discountTotal;
var orderItems=document.getElementById("order-items");
var orderBtn=document.querySelector(".orders");
var currentBtn=document.querySelector(".current");
var viewOrderDetails=document.querySelector(".orderDetails");
var viewSummeryList=document.querySelector(".summery");
var gettingData;
var clearTablehead=document.querySelector(".order-table");

var clearAll = document.querySelector(".clear-btn");
clearAll.addEventListener("click", clear);

async function sideDisplayContent() {

   p=await fetch("http://localhost:3000/items")
   getData=await p.json();

   for (i = 0; i < getData.length; i++) {
      sidebarButtons.innerHTML += `<button class="container_btns" onclick="rightBillChart(${i})">
    ${getData[i].name}<br>${getData[i].price}</button>`
   }
 
}
sideDisplayContent();


function rightBillChart(idValue) {

   
selectedItems.push({
   "name":getData[idValue].name,
    "price":getData[idValue].price,
    "quantity":1,
})
 console.log(selectedItems);


 table();

arr.push({name3:`${getData[idValue].name}`,quantity:`${getData[idValue].quantity}`,price:`${getData[idValue].price}`})

 
}


function table(){
   totalprice=0;
   tableData.innerHTML="";
 for(var k=0;k<selectedItems.length;k++){
   tableData.innerHTML+=
      `<tr>
          
            <td>${selectedItems[k].name}</td>
            <td><input type="number" value="${selectedItems[k].quantity}" class="user_input" onchange="changeInput(${k})"></td>
            <td>${selectedItems[k].price*selectedItems[k].quantity}</td>    
        </tr>`  
        totalprice+=selectedItems[k].price*selectedItems[k].quantity;

        
        
 }
   console.log(totalprice);
 discountCalculations();
 
}  

function discountCalculations(){
  

    //console.log(totalprice);
   tax = (totalprice / 100) * 4;
   console.log(tax);
   discount = (totalprice / 100) *10;
   console.log(discount);
   document.getElementById("discount").innerHTML = `${discount}`;
   document.getElementById("tax").innerHTML = `${tax}`;
   discountTotal= totalprice - discount;
   overAllprice = totalprice - discount + tax;
   console.log(overAllprice);
   document.getElementById("charge").innerHTML = `Charge${overAllprice}`;  
  
}                                                                         


function changeInput(id) {
   alert("hello");
   //alert(id);

  var changeuserInput=document.querySelectorAll(".user_input");
     enterValue=changeuserInput[id].value;
     selectedItems[id].quantity=enterValue;
   alert(selectedItems[id].quantity);



  
   table();

}                             


function clear() {
   tableData.innerHTML = "";
   document.getElementById("discount").innerHTML = 0;
   document.getElementById("tax").innerHTML = 0;
   document.getElementById("charge").innerHTML = 0;

}                              


orderTicketBtn.addEventListener("click",postData);
                                                      
async function postData(){
   var custumerName=document.querySelector(".input-field");
       alert("hai");
         await fetch("http://localhost:3000/orders",{

          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
               
            customername:custumerName.value,
            discountamount:discount,
            totalAmount :discountTotal,
            taxamount     :tax,
            billamount:overAllprice,
            orderitems:arr

               
             


          })


          })
         
}
   
document.querySelector(".order-table").style.display="none";
orderBtn.addEventListener("click",getJson);

async function getJson(){
   orderItems.innerHTML="";

   
    document.querySelector(".container").style.display="none";
    document.querySelector(".order-table").style.display="block";

    var s= await fetch("http://localhost:3000/orders")
   gettingData=await s.json();

  console.log(gettingData);
   for(var l=0;l<gettingData.length;l++){
     
      orderItems.innerHTML+=
                 `<tr>

                 <td>${gettingData[l].customername}</td>
                 <td>${gettingData[l].discountamount}</td>
                 <td>${gettingData[l].taxamount}</td>
                 <td>${gettingData[l].billamount}</td>
                 <td> <button class="orderDetails" onclick="viewSummery(${l})">view</button> </td>

                 <tr>`

   }

   
}
currentBtn.addEventListener("click", currentpageDisplay)     
  function currentpageDisplay(){
   document.querySelector(".container").style.display="block";
   document.querySelector(".order-table").style.display="none";
   viewSummeryList.style.display="none";
   orderItems.style.display="block";
  }



  function viewSummery(list){
   clearTablehead.style.display="none";
   var custumerName=document.querySelector(".input-field");
   viewSummeryList.innerHTML="";
   viewSummeryList.innerHTML+=

                  `<h2>ORDER SUMMERY</h2>
                   
                <p>CUSTUMERNAME=${custumerName.value}</p>
                
                <p>ITEM NAME=${gettingData[list].orderitems[list].name3}</p>
                 

                <p>Apply DISCOUNT=${gettingData[list].discountamount}</p>
                  
                <p>Total=${gettingData[list].totalAmount}</p>
                <p>GST (4%)=${gettingData[list].taxamount}</p>

                <p>TOTAL AMOUNT:${gettingData[list].billamount}</p>`
                viewSummeryList.style.display="block";
                orderItems.style.display="none";
                 
  }
  

  function ItrerateItemName(){


    



  }