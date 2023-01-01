
var submitBtn=document.querySelector(".submit-btn");
submitBtn.addEventListener("click",postData);

async function  postData(){
    
    var titleName=document.querySelector(".input-field1");
    var subtitleName=document.querySelector(".input-field2");
    var statusValue=document.querySelector(".select-tag");
    var discriptionData=document.querySelector(".input-field3")
    console.log(statusValue);
    
       await fetch("http://localhost:3000/services",{

        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
             
          title:titleName.value,
          subtitle:subtitleName.value,
          status:statusValue.value,
          discription:discriptionData.value

        })


        })
       
       
  
}

