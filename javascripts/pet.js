// setting my request variable and setting these functions as parameters
const loadsPets = (loadFunction, errorFunction) => {
// making a copy named miRequest of the XMLHttpRequest constructor(built in object of functions)
  const miRequest = new XMLHttpRequest();
  // this is setting an event listener on load and passes it the load function to execute
  miRequest.addEventListener('load', loadFunction);
  // this is setting an event listener for when there is an error with the Xhr call and is passed the error function to execute
  miRequest.addEventListener('error', errorFunction);
  // this is setting the type of request and the location
  miRequest.open('GET', '../db/pets.json');
  // this line is executing the request
  miRequest.send();
};
// this line is exporting what is in this file to where I write the require file
module.exports = loadsPets;
