/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("<-------------PRIMO ESERCIZIO------------->");

const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("<-------------SECONDO ESERCIZIO------------->");

pets.sort();

console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("<-------------TERZO ESERCIZIO------------->");

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("<-------------QUARTO ESERCIZIO------------->");

const firstPet = pets[0];
const remainingPets = pets.slice(1);
const newPetArray = remainingPets.concat(firstPet);
console.log(newPetArray);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("<-------------QUINTO ESERCIZIO------------->");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "AA123BB";
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("<-------------SESTO ESERCIZIO------------->");

const ferrari = {
  brand: "Ferrari",
  model: "458",
  color: "red",
  trims: ["carbon-fiber", "gt"],
};
cars.push(ferrari);
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("<-------------SETTIMO ESERCIZIO------------->");

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const carTrims = cars[i].trims[0];
  justTrims.push(carTrims);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("<-------------OTTAVO ESERCIZIO------------->");

for (let i = 0; i < cars.length; i++) {
  const firstLetter = cars[i].color.charAt(0);
  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("<-------------NONO ESERCIZIO------------->");

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;
while (i < numericArray.length) {
  if (numericArray[i] === 32) {
    break;
  }
  console.log(numericArray[i]);
  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("<-------------DECIMO ESERCIZIO------------->");

const characterArray = ["f", "b", "e"];
const newArray = [];

for (let i = 0; i < characterArray.length; i++) {
  const character = characterArray[i].toLowerCase();

  switch (character) {
    case "a":
      newArray.push(1);
      break;
    case "b":
      newArray.push(2);
      break;
    case "c":
      newArray.push(3);
      break;
    case "d":
      newArray.push(4);
      break;
    case "e":
      newArray.push(5);
      break;
    case "f":
      newArray.push(6);
      break;
    case "g":
      newArray.push(8);
      break;
    case "h":
      newArray.push(8);
      break;
    case "i":
      newArray.push(9);
      break;
    case "j":
      newArray.push(10);
      break;
    case "k":
      newArray.push(11);
      break;
    case "l":
      newArray.push(12);
      break;
    case "m":
      newArray.push(13);
      break;
    case "n":
      newArray.push(14);
      break;
    case "o":
      newArray.push(15);
      break;
    case "p":
      newArray.push(16);
      break;
    case "q":
      newArray.push(17);
      break;
    case "r":
      newArray.push(18);
      break;
    case "s":
      newArray.push(19);
      break;
    case "t":
      newArray.push(20);
      break;
    case "u":
      newArray.push(21);
      break;
    case "v":
      newArray.push(22);
      break;
    case "w":
      newArray.push(23);
      break;
    case "x":
      newArray.push(24);
      break;
    case "y":
      newArray.push(25);
      break;
    case "z":
      newArray.push(26);
      break;
  }
}

console.log(newArray);
