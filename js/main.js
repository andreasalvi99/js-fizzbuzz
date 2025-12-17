// ? Scrivo un programma che stampi i numeri da 1 a 100
// ? Chiedere all'utente il numero che vuole inserire
let yourNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
console.log("yourNumber:", yourNumber);

// TODO Inserire error control
if (yourNumber > 100 || yourNumber < 1) {
  throw new Error(
    "Il valore inserito non è corretto, deve essere compreso tra 1 e 100"
  );
}

if (isNaN(yourNumber)) {
  throw new Error(
    `Il campo "Inserisci un numero da 1 a 100" ammette solo numeri`
  );
}
// ? Chiedere all'utente da che numero vuole partire
let startNum = parseInt(prompt("Inserisci il numero da cui vuoi partire", 1));
console.log("startNum:", startNum);

// TODO Inserire error control
if (startNum > yourNumber) {
  throw new Error(
    `Il valore inserito nel campo "Inserisci il numero da cui vuoi partire" non può essere minore del valore inserito nel campo "Inserisci un numero da 1 a 100"`
  );
} else if (startNum > 100 || startNum < 1) {
  throw new Error(
    "Il valore inserito non è corretto, deve essere compreso tra 1 e 100"
  );
} else if (isNaN(startNum)) {
  throw new Error(
    `Il campo "Inserisci un numero da 1 a 100" ammette solo numeri`
  );
}

// ? Chiedere l'incremento
let increment = parseInt(prompt("Inserisci il valore per l'incremento"));
console.log("increment:", increment);

// TODO Inserire error control
if (isNaN(increment) || increment < 1) {
  throw new Error(
    `Il campo "Inserisci il valore per l'incremento" ammette solo numeri maggiori di 0`
  );
}

// ? Scrivo il ciclo
for (let i = startNum; i <= yourNumber; i += increment) {
  console.log(i);
  // ? Per i multipli di 3 e 5 o più semplicemente di 15 il risultato deve essere "FizzBuzz"
  if (i % 15 === 0) {
    i === "FizzBuzz";
    console.log(i);
  }
  // ? Per i multipli di 3 il risultato deve essere “Fizz”
  else if (i % 3 === 0) {
    i === "Fizz";
    console.log(i);
  }
  // ? Per i multipli di 5 il risultato deve essere “Buzz”
  else if (i % 5 === 0) {
    i === "Buzz";
    console.log(i);
  }
}
