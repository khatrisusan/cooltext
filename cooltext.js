"use strict"
window.addEventListener("DOMContentLoaded", init)
function init (){
    console.log("domready");
    coolText();
}
function coolText(){
    // Get the entire text from the HTML
const text = document.querySelector("#cooltext").textContent;
// Remove the existing text
document.querySelector("#cooltext").textContent="";

const letters = text.split('');
console.log(letters);
for(let i=0; i<=text.length; i++){
console.log(i);
document.querySelector("#cooltext").textContent="";
document.querySelector("#cooltext").textContent=letters[i];
}}





// For each character in the text:
// create a <span> element
// put the character inside that element
// and append the element to the HTML
// TODO: Somehow make each character animate different from the previous

