/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */


// Creo var per inserimento lista in html
var numbersList = document.getElementById('numbers');

// Stampo numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
  // Multipli 3 e 5
  if (i % 3 == 0 && i % 5 == 0) {           // i % 15 == 0
    console.log("FizzBuzz");
  }
  // Multipli 3
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  // Multipli 5
  else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
