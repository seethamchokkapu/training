

export var accno=978467363783;
export var phoneNumber=6305047481;

// import {name} from "./module2_1.js"
// console.log(name);

export function userDetails(fname,lname){
    var firstName=fname;
    var lastName=lname;
    var fullname= `${firstName} ${lastName}`
         return fullname;
}
export function add(a,b){
        return a*b ;

}


export function sub(){
    let a=10,b=20;
    let c=a*b;
 return c;
}

export function myFunction(value){
    return value;
}

 export var c=(function addNumbers(a,b){
    var n1=a;
    var n2=b;
    var n3=a+b;
     return n3;
})(5,3)


