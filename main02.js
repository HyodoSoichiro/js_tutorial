let Phrase = require("soichiro-palindrome");


function Palind(event){
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindResult = document.querySelector("#palindResult");

  if(phrase.palindrome()){
    palindResult.innerHTML = `" <strong>${phrase.content}</strong> " is palindrome!!`;
  }else{
    palindResult.innerHTML = `" <strong>${phrase.content}</strong> " is not palindrome!!`;
  }
}


// document.addEventListener("DOMContentLoaded", function() {
  // console.log("Loaded");
  let form = document.querySelector("#btnPalind");
  form.addEventListener("submit", function() {
    Palind(event);
  });
// });
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