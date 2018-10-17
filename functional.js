
// function imperativeUrls(element){
//   let urls =[];
//   element.forEach(function(element){
//     urls.push(element.toLowerCase().split(/\s+/).join("-"));
//   });
//   return urls;
  
// }


// // Returns a URL-friendly version of a string.
// //   Example: "North Dakota" -> "north-dakota"
// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join("-");
// }

// // urls: Imperative version
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(urlify(element));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));

// // urls: Functional version
// function functionalUrls(elements) {
//   return elements.map(element => urlify(element));
// }
// // console.log(functionalUrls(states));


// function fullUrls(elements) {
//   return elements.map(element => "https://example.com/" + urlify(element));
// }

// console.log(fullUrls(states));




// // singles: Functional version
// function functionalSingles(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 1);
// }
// console.log(functionalSingles(states));


// // include("Dakota"): Functional version
// function functionalIncludes(elements) {
//   return elements.filter(element => element.includes("Dakota"));
// }
// console.log(functionalIncludes(states));


// // regex(" ") element 2: Functional version
// function functionalRegex(elements) {
//   return elements.filter(element => element.split(/\s+/g).length === 2);
// }
// console.log(functionalRegex(states));



let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// lengths: Imperative solution
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
      lengths[element] = element.length;
    });
    return lengths;
}

console.log(imperativeLengths(states));



// lengths: Functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, state) => {lengths[state] = state.length; return lengths;}, {});
}

console.log(functionalLengths(states));


























// [1, 2, 3, 4].map( (n) => { return n * n; });


// // urls: Imperative version
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(element.toLowerCase().split(/\s+/).join("-"));
//   });
//   return urls;
// }



// let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


// // Returns a URL-friendly version of a string.
// //   Example: "North Dakota" -> "north-dakota"
// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join("-");
// }

// // urls: Functional version
// function functionalUrls(n) {
//   return states.map(n => urlify(n));
// }

// // urls: Functional version
// function functionalUrls02(n) {
//   return states.map(n => `https://example.com/${urlify(n)}`);
// }

// console.log(functionalUrls(states));
// console.log(functionalUrls02(states));




// // singles: Imperative version
// function imperativeSingles(elements) {
//   let singles = [];
//   elements.forEach(function(element) {
//     if (element.split(/\s+/).length === 1) {
//       singles.push(element);
//     }
//   });
//   return singles;
// }
// console.log(imperativeSingles(states));


// // singles: Functional version
// function functionalSingles(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 1);
// }
// console.log(functionalSingles(states));


// // String#includes
// function functionalSinglesincludes(elements) {
//   return elements.filter(element => element.includes("Dakota"));
// }
// console.log(functionalSinglesincludes(states));


// // Length:2
// function functionalSingles03(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 2);
// }
// console.log(`functionalSingles03:${functionalSingles03(states)}`);


// // lengths: Imperative solution
// function imperativeLengths(elements) {  let lengths = {};  elements.forEach(function(element) {    lengths[element] = element.length;  });  return lengths;}console.log(imperativeLengths(states));// lengths: Functional solutionfunction functionalLengths(elements) {  return elements.reduce((lengths, element) => {                          lengths[element] = element.length;                          return lengths;                        }, {});}console.log(functionalLengths(states));