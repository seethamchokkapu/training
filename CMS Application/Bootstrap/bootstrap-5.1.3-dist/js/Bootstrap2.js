var tableData=document.querySelector(".data-table");
var serviceBtn=document.querySelector(".services");
var tableDisplay=document.querySelector(".right-sub-div");
serviceBtn.addEventListener("click",displayTable);
var form=document.querySelector(".form-details");
var totalDiv=document.querySelector(".total-div");
var addServicesBtn=document.querySelector(".add-services");
addServicesBtn.addEventListener("click",displayForm);

async function getData(){

    var p=await fetch("http://localhost:3000/services");
    var storeData=await p.json();
    console.log(storeData);

    for(var i=0;i<storeData.length;i++){

        if(storeData[i].status=="in-active") {
           
        }
        else{
            
        tableData.innerHTML+=` <tr> <td>${i+1} </td>
                                
                                <td> ${storeData[i].title} </td>
                                <td>${storeData[i].subtitle}  </td>
                                <td>${storeData[i].discription}
                                <td> ${storeData[i].status}  </td>
                                
                                </tr>`
        }
    }
}
getData();
function displayTable(){

    tableDisplay.style.display="block";

}
function displayForm(){
    form.style.display="block";
    totalDiv.style.display="none";
}