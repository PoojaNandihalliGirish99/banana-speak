// var username   = prompt("Tell us your name");
// alert("This script works");
// console.log("Hello, script is working");
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickEventHandler(){
    console.log("clicked");
    console.log("input", txtInput.value);
}

btnTranslate.addEventListener("click", clickEventHandler);
