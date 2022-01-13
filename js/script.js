// ** Esercizio 1 
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
    
      