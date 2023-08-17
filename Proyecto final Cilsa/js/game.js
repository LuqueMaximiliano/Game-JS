

const WIDTH = 700;
const HEIGH = 500;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// Mapea donde esta el click
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

//Realiza un contador para saber en cuantos clicks descubrimos el tesoro
//Muestra por pantalla si estamos cerca o lejos

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20) {
    alert(`Found the treasure in ${clicks} clicks!`);
    location.reload();
  }
});
