
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



// 1. Creare varianti per numeroKilometri e anniPasseggero
// 2. creare variante per prezzo standard prezzoBiglietto
// 3. creare condizionali dove marginare da 0 a 18 anni e 65+ a nolimit + messaggio
// 4. stampa in pagina


// 1.
let numeroKilometri = prompt('Quanti kilometri devi effettuare?');
let anniPasseggero = prompt('Quanti anni hai?');

console.log(numeroKilometri);
console.log(anniPasseggero);

// 2
// prezzodel biglietto per singolo chilometro
const prezzoBiglietto = 0.21;

// creo variabile per avere tot biglietto standard senza sconti
let costo = (prezzoBiglietto * numeroKilometri);
console.log(costo);

// 3
// creo condizionali per sconto su età
if (anniPasseggero <= 18) {
  costo = (costo - (costo * 20 / 100));
} else if (anniPasseggero >= 65) {
  costo = (costo - (costo * 40 / 100));
}

// messaggio che verrà visualizzato
const messaggio = `Il prezzo del tuo biglietto è di: &euro; ${costo.toFixed(2)}`;
console.log(messaggio);
  

// 4 
// Stampo in pagina mettendo il mio 'messaggio' in html all'interno dell'id 'output'
document.getElementById('output').innerHTML = messaggio

