// Oggi si gioca a campo minato! :bomb: (o più fancy, prato fiorito :blossom: )
// Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.
// BONUS (facoltativo): all'inizio del gioco, il programma chiede all'utente il livello di difficoltà:
// 0 = l'intervallo di numeri possibili è tra 1 e 100
// 1 = l'intervallo di numeri possibili è tra 1 e 80
// 2 = l'intervallo di numeri possibili è tra 1 e 50
// In ogni caso, le mine sono sempre 16.

var maxNumber = 100;
var numberOfBombs = 16;
var bombContainer =  [];
var bomb;
var myPositions = [];
var userChoice;
var maxGames = maxNumber - numberOfBombs;
var isBombFind = false;

//creo ciclo per numeri random da 1 a 100
while (bombContainer.length < numberOfBombs) {
    bomb = Math.floor((Math.random() * maxNumber) + 1);
    if (!bombContainer.includes(bomb)) {
        bombContainer.push(bomb);
    }
}
 console.log(bombContainer);  //stampa dell'array dei numeri generati random

 //creo ciclo per scelta numero utente
 do {
    userChoice = parseInt(prompt("inserisci un numero"));
    //controllo se l'utente ha inserito un numero valido, numero maggiore di 0 e minore uguale a 100
    if (!isNaN(userChoice) && userChoice > 0 && userChoice <= maxNumber) {
        if (bombContainer.includes(userChoice)) {     // condizione se la scelta dell'utente è una mina ==>> la bomba è trovata
            isBombFind = true;
            alert("the bomb is find and you have gained " + myPositions.length + " points");
            // altrimenti controlla  se la scelta non è nell'array gia scelto se non è presente pusha nello stesso array
        } else if (!myPositions.includes(userChoice)) {
            myPositions.push(userChoice);
        } else { // se è gia nell'array comunica che la sua scelta è già presente quindi di mettere un altro numero
            alert("You have already inserted this number, pls insert another one");
        }
    } else {
        alert("insert a valid number")
    }

} while (isBombFind == false && myPositions.length < maxGames);
console.log(myPositions);
// controllo per vedere se l'utente ha vinto
if (myPositions.length == maxGames) {
    alert("You Won and gained " + myPositions.length + " points")
}
