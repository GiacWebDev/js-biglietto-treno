
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



// 1. Creare varianti per numeroKilometri e anniPasseggero
// 2. creare variante per prezzo standart prezzoBiglietto
// 3. creare condizionali dove marginare da 0 a 18 anni e dare variante
// 4. creare condizionali dove marginare da 65 a nolimit e dare variante
// 5. attribuire alle varianti età lo sconto rispettivo


// 1.
let numeroKilometri = parseInt(prompt('Quanti kilometri devi effettuare?'));
let anniPasseggero = parseInt(prompt('Quanti anni hai?'));

console.log(numeroKilometri);
console.log(anniPasseggero);

// 2
const prezzoBiglietto = 0.21
// operazione per avere tot biglietto senza sconti in variante costo
let costo = (prezzoBiglietto * numeroKilometri);

console.log(costo);

// 3



