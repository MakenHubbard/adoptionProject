// const addEventListenerOnClick = require('.events');

const outputSpot = document.getElementById('pets');

const domString = (pets) => {
  let strung = '';
  pets.forEach((pet) => {
    strung += `<div class="dosePets">
                <h2>${pet.name}</h2>
                <img class="anipics" src="${pet.imageUrl}">
                  <p>${pet.color}</p>
                  <p>${pet.specialSkill}</p>
                  <p>${pet.type}</p>
              </div>`;
  });
  return strung;
};

const printToDom = (arrayPets) => {
  outputSpot.innerHTML = '';
  outputSpot.innerHTML = domString(arrayPets);
};

module.exports = printToDom;
