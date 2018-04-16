// this is receiving/acquiring the loadsPets request function from the pets.js file
const loadsPets = require('./pet');
// this receiving/ being passed in the printToDom function form the dom.js
const printToDom = require('./dom');
// this is setting the variable to an empty array
let arrayPets = [];
// this function is parse the object of the data into a string
const onPetLoad = function () {
  arrayPets = JSON.parse(this.responseText).pets;
  printToDom(arrayPets);
};
// this is setting a variable for when something goes wrong...
const badDomestic = function () {
  console.log('error');
};
// this is where you tie in the success and error functions you want to use to the XHR request
const initialize = () => {
  loadsPets(onPetLoad,badDomestic);
};
// this function is just returning what is in the array
const gotDemPets = () => {
  return arrayPets;
};
// this is exporting the those two functions
module.exports = {
  initialize,
  gotDemPets,
};
