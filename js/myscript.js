// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.2762 € al km)
// va applicato uno sconto del 17.5% per i minorenni
// va applicato uno sconto del 33.3% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
// realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati 
// e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina, sempre rispettando le due cifre decimali.

const kmToDo = document.getElementById('km-to-do');
const age = document.getElementById('age');

const button = document.querySelector('div.buttons a.btn');

let outputFinalPrice = document.getElementById('final-price');



button.addEventListener('click', function(){
    let pricePerKm = 0.2762;
    let teenDiscount = pricePerKm - (pricePerKm * 0.175);
    let overDiscount = pricePerKm - (pricePerKm * 0.333);
    let finalPrice = pricePerKm * parseInt(kmToDo.value);

    if ( parseInt(age.value) < 18 ){
        outputFinalPrice.innerHTML = 'Prezzo di un biglietto: ' + (finalPrice = (parseInt(kmToDo.value) * teenDiscount).toFixed(2)) + '&euro;';
    } if ( parseInt(age.value) >= 65){
        outputFinalPrice.innerHTML = 'Prezzo di un biglietto: ' + (finalPrice = (parseInt(kmToDo.value) * overDiscount).toFixed(2)) + '&euro;';
    } if (parseInt(age.value) <0){
        alert("Inserire valori reali");
    } else {
        outputFinalPrice.innerHTML = 'Prezzo di un biglietto: ' + finalPrice + '&euro;';
    }

})