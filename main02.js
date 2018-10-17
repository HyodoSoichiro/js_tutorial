let Phrase = require("soichiro-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if(phrase.palindrome()){
  alert(`This is palindrome!!`);
}else{
  alert(`This is not palindrome!!`);
}

// function palindromeTester(event) {
//   event.preventDefault();

//   let string = prompt("Please enter a string for palindrome testing:");
//   let phrase = new Phrase(event.target.phrase.value);
//   let palindromeResult = document.querySelector("#palindromeResult");

//   if (phrase.palindrome()) {
//     palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`;
//   } else {
//     palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a not a palindrome.`;
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//   let button = document.querySelector("#palindromeTester");
//   button.addEventListener("submit", function() {
//     palindromeTester(event);
//   });
// });