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
// for (var i = 0; i < numberOfBombs; i++) {
//     var bomb = Math.floor((Math.random() * 100) + 1);
//     if (!bombContainer.includes(bomb)) {
//         bombContainer.push(bomb);
//         console.log(bomb);
//     }
// }
// console.log(bombContainer);

//creo ciclo per numeri random da 1 a 100
while (bombContainer.length < numberOfBombs) {
    bomb = Math.floor((Math.random() * 100) + 1);
    if (!bombContainer.includes(bomb)) {
        bombContainer.push(bomb);
    }
}
 console.log(bombContainer);  //stampa dell'array dei numeri generati random

 //creo ciclo per scelta numero utente
 do {
    userChoice = parseInt(prompt("inserisci un numero"));
    if (bombContainer.includes(userChoice)) {
        isBombFind = true;
        alert("the bomb is find");
    } else if (!myPositions.includes(userChoice)) {
        myPositions.push(userChoice);
    } else {
        alert("You have already inserted this number, pls insert another one");
    }

} while (isBombFind == false);
console.log(myPositions);
