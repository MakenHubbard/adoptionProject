const whatINeed = require('./data');
const printToDom = require('./dom');

const addEvents = () => {
  document.getElementById('cat').addEventListener('click', sortPets);
  document.getElementById('dog').addEventListener('click', sortPets);
  document.getElementById('dino').addEventListener('click', sortPets);
  document.getElementById('refresh').addEventListener('click', refreshButtonEvents);
};

const sortPets = (e) => {
  const clickedType = e.target.id;
  const allPetsArray = whatINeed.gotDemPets();
  const selectedPets = allPetsArray.filter(pet => pet.type === clickedType);
  printToDom(selectedPets);
};

const refreshButtonEvents = () => {
  const bringAllPets = whatINeed.gotDemPets();
  printToDom(bringAllPets);
};

module.exports = addEvents;
