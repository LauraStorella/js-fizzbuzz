/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */


// Creo var per inserimento lista in html
var numbersList = document.getElementById('numbers');

// Stampo numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
  // Multipli 3 e 5
  if (i % 15 == 0) {
    console.log("FizzBuzz");
    numbersList.innerHTML += '<li class="lime-gold"><span class="lime">Fizz</span><span class="gold">Buzz</span></li>';
  }
  // Multipli 3
  else if (i % 3 == 0) {
    console.log("Fizz");
    numbersList.innerHTML += '<li class="lime"> Fizz </li>';
  }
  // Multipli 5
  else if (i % 5 == 0) {
    console.log("Buzz");
    numbersList.innerHTML += '<li class="gold"> Buzz </li>';
  } else {
    console.log(i);
    numbersList.innerHTML += '<li>' + i + '</li>';
  }
}
