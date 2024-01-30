let currDate = document.getElementById("currDate");
let DOB = document.querySelector("#DOB");
const bAge = document.getElementById("bAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");

var today = new Date();

currDate.innerHTML = `Todays date is ${today.toLocaleDateString('en-US')}`;

bAge.addEventListener("click", ()=>{
    var bDate = new Date(DOB.value);
    var age =  today.getFullYear() - bDate.getFullYear();
    var m = today.getMonth() - bDate.getMonth();
    
    if(m < 0||(m === 0 && today.getDate() < bDate.getDate() )){
        age = age - 1;
    }
    displayAge.style.visibility="visible";
    Age.innerText=`You are ${age} years old.`;
});