// ! Esercizio 1 
/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
Javascript - JS
JSnack 1 */

// Richiamo Elementi in pagina
const numberField = document.getElementById('number');
const numberButton =document.getElementById('number-button');
const sumField = document.getElementById('sum');
const sumContainer = document.getElementById('sum-container');
const labelNumber = document.getElementById('label-number');
// Dichiaro variabile somma, l'array di memorizzazione, e la index
let sum = 0;
const sumArray =[];
let i = 0;

// Al click del button acquisisco il valore
numberButton.addEventListener('click', function(){
    let numberValue = parseInt(numberField.value);
    
    // Inserisco i valori nell'array
    sumArray.push(numberValue);
    console.log(sumArray);
    
    // verifica della condizione di lunghezza
    if(sumArray.length === 5){
        // Imposto il ciclo while per sommare
        while(i < 5){
            const array = sumArray[i];
            // Faccio la somma
            sum += array
            // Condizione di uscita
            i++
        }
        // Stampo in pagina
        sumField.innerText = sum;
        sumContainer.classList.remove('d-none');
        // Tolgo l'input
        numberField.classList.add('d-none');
        numberButton.classList.add('d-none');
        labelNumber.classList.add('d-none');
    }
}); 

// ! Esercizio 2
/*Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
Javascript - JS
JSnack 2 */

// Recupero Elementi in pagina
const labelNumber2 = document.getElementById('label-number-2');
const numberField2 = document.getElementById('number-2');
const numberButton2 =document.getElementById('number-button-2');
const positiveField = document.getElementById('positive');
const allNumber =document.getElementById('all-number');
// Dichiaro l'array e l'index
const positiveArray = [];
let j = 0;
// Al click acquisisco i valori e li metto nell'array
numberButton2.addEventListener('click', function(){
    numberValue2 = numberField2.value;
    console.log(numberValue2);
    positiveArray.push(numberValue2);
    // Ipotizzo che il mio array contenga massimo 5 numeri
    if(positiveArray.length === 5){
        let allNumberElement = '';
        let listPositiveNumber = ' ';
        // Compongo il ciclo while
        while(j < 5){
        allNumberElement +=  positiveArray[j];
        allNumber.innerText = allNumberElement;
        // Dichiarazione Elemento dell'array
        let positiveArrayElement = positiveArray[j];
        if(positiveArrayElement % 2 === 0){
            // Stampo elemento pari
            listPositiveNumber += positiveArrayElement;
            positiveField.innerHTML =listPositiveNumber + ' ';
            console.log(positiveArrayElement);
        }
        // Condizione d'uscita
        j++
        }
        // Tolgo l'input
        numberField2.classList.add('d-none');
        numberButton2.classList.add('d-none');
        labelNumber2.classList.add('d-none');
    }
});