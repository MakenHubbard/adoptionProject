const whatINeed = require('./data');
const printToDom = require('./dom');

const addEvents = () => {
  console.log('add events is running');
  document.getElementById('cat').addEventListener('click', sortPets);
  document.getElementById('dog').addEventListener('click', sortPets);
  document.getElementById('dino').addEventListener('click', sortPets);
};

const sortPets = (e) => {
  const clickedType = e.target.id;
  const allPetsArray = whatINeed.gotDemPets();
  console.log(allPetsArray);
  console.log('petType', clickedType);
  const selectedPets = allPetsArray.filter(pet => pet.type === clickedType);
  console.log(selectedPets);
  printToDom(selectedPets);
};

module.exports = addEvents;
