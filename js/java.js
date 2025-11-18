let myVariable;
myVariable = "profileForm"

let profile = document.getElementById("profileForm");

const myElementVariable = document.getElementById("output");
console.log(myElementVariable);

let age = document.getElementById("ageInput");
console.log(age);

let subbtn = document.getElementById("submitBtn");
console.log(subbtn);

document.querySelectorAll("input[type='radio']");
document.querySelectorAll("input[type='checkbox']");

const element = document.getElementById("myBtn");
element.addEventListener("click", getInfo);

function getInfo() {
    console.log("Button Clicked");
}
