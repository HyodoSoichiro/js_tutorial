// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }


  // Makes the phrase LOUDER.
  this.louder = function louder() {
    return this.content.toUpperCase()
  };
}


// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
    }
}

TranslatedPhrase.prototype = new Phrase();



let phrase = new Phrase("Racecar");
let frase = new TranslatedPhrase("recognize", "reconocer");



console.log(phrase);

console.log(frase.palindrome());

console.log(frase.louder());


// console.log(frase);

// let p = new Phrase("yo adrian!");
// console.log(p.louder());



// // Adds `reverse` to all strings.
// String.prototype.reverse = function() {
//   return Array.from(this).reverse().join("");
// }

// // Defines a Phrase object.
// function Phrase(content) {
//   this.content = content;

//   // Returns content processed for palindrome testing.
//   this.processedContent = function processedContent() {
//     return this.content.toLowerCase();
//   }

//   // Returns true if the phrase is a palindrome, false otherwise.
//   this.palindrome = function palindrome() {
//     return this.processedContent() === this.processedContent().reverse();
//   }
// }

