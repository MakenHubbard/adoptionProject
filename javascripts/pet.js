// setting my request variable and setting these functions as parameters
const loadsPets = (loadFunction, errorFunction) => {
  // setting a variable equal to this new XHR request
  const miRequest = new XMLHttpRequest();
  // this is setting an event listener on load and passes it the load function to execute
  miRequest.addEventListener('load', loadFunction);
  // this is setting an event listener for when there is an error with the Xhr call and is passed the error function to execute
  miRequest.addEventListener('error', errorFunction);
  // this is GET data from the database file and opens it
  miRequest.open('GET', '../db/pets.json');
  // this line is sending that data to the server
  miRequest.send();
};
// this line is exporting what is in this file to where I write the require file
module.exports = loadsPets;
