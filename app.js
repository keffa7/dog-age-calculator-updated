"use strict";

/* Calculate dog's age based on size (9kg or less, between 9 and 22 kg, 22kg and above) 
Use arrays to compare input years with saved values
*/

//Selectors
const button = document.querySelector("button");
const inputYear = document.querySelector("#year");
const result = document.querySelector("#result");
const sizeSelector = document.querySelector("#size-selector");

// Dog sizes array containers
const smallDog = [
  0,
  15,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  52,
  56,
  60,
  64,
  68,
  72,
  76,
  80,
];
const mediumDog = [
  0,
  15,
  24,
  28,
  32,
  36,
  42,
  47,
  51,
  56,
  60,
  65,
  69,
  74,
  78,
  83,
  87,
];
const largeDog = [
  0,
  15,
  24,
  28,
  32,
  36,
  45,
  50,
  55,
  61,
  66,
  72,
  77,
  82,
  88,
  93,
  120,
];

// Functions
function dogYears() {
  let size;
  if (sizeSelector.value === "smalldog") {
    size = smallDog;
  } else if (sizeSelector.value === "mediumdog") {
    size = mediumDog;
  } else if (sizeSelector.value === "largedog") {
    size = largeDog;
  }
  console.log(size);
  result.innerText = `Your dog has ${size[inputYear.value]} human years.`;

  result.classList.add("active");

  if (inputYear.value < 0) {
    result.innerText = `You've made a mistake. Try again`;
  } else if (inputYear.value > 20) {
    result.innerText = `Your dog is already dead.`;
  } else if (inputYear.value === "") {
    result.innerText = `Please enter numerical value.`;
  } else {
    return;
  }
}

console.log(sizeSelector.length);

// Event
button.addEventListener("click", dogYears);
sizeSelector.addEventListener("change", dogYears);
