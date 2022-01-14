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
            const arrayEl = sumArray[i];
            // Faccio la somma
            sum += arrayEl
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

// ! Esercizio 3
/*Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati. */
// Recupero elemento in pagina
const fakeListField = document.getElementById('fake-list'); 
//Creo Delle Liste 
const lastName = ['Einsten', 'Tesla', 'Newton'];
const firstName = ['Albert', 'Nikola', 'Isaac']; 
const fakeList = [];
// Impongo il ciclo while
while (fakeList.length < 3){
    // Randomizzo gli index delle liste
    const k = Math.floor(Math.random() * lastName.length);
    const z = Math.floor(Math.random() * firstName. length);
    // Ricavo nome e cognome
    const surname = lastName[k]; 
    const name = firstName[z];
    // Monto l'elemento completo che andrà in array
    const fakeListElement = `${surname} ${name} !`;
    // Validazione
    if(!fakeList.includes(fakeListElement)) {
        fakeList.push(fakeListElement)
    }
}

// Stampo in pagina
fakeListField.innerHTML = `<strong>${fakeList}</strong>`;

// ! Esercizio 4
/*Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
Javascript - JS
JSnack 4*/
 
// Dichiaro l'array 
const generalNumber = [];

// Recupero Elementi in pagina
const labelNumber4 = document.getElementById('label-number-4');
const numberField4 = document.getElementById('number-4');
const numberButton4 =document.getElementById('number-button-4');
const listShotsElement =document.getElementById('list-shots-element');

// Dichiaro index
let c = 0;
numberButton4.addEventListener('click', function(){
    // Recupero valore e inseriscilo nell'array
    numberValue4 = parseInt(numberField4.value);
    generalNumber.push(numberValue4);
    if(generalNumber.length === 5){
        console.table(generalNumber);
        // Tolgo l'input
        numberField4.classList.add('d-none');
        numberButton4.classList.add('d-none');
        labelNumber4.classList.add('d-none');
        // Dichiaro variabile di concatenazione
        let shotsindexElement = 0;
        // Scorro nell'array tramite while
        while (c < 5) {
            let generalElement = generalNumber [c];
            // Verifico se l'index è dispari
            if (c % 2){
                shotsindexElement += generalElement;
            }
            console.log(shotsindexElement);
            // Condizione di uscita
            c++
        }
        // Stampo in pagina
        listShotsElement.innerText = shotsindexElement;
    }
});

// ! Esercizio 5
/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
Javascript - JS
JSnack 5*/

// Dichiaro due array
const firstArray = [];
const secondArray = [];
// Randomizzo la dimensione degli array
const m = Math.floor(Math.random()*8 + 2);
const n = Math.floor(Math.random()*8 + 2);
// Randomizzo un numero casuale
let randomNumber = Math.floor(Math.random()*500 + 1);
// Costruisco un ciclo for che inserisce elementi nell'array
for(let o = 0; o < m; o++){
    let randomNumber = Math.floor(Math.random()*500 + 1);
    firstArray.push(randomNumber);
}

for(let o = 0; o < n; o++){
    let randomNumber2 = Math.floor(Math.random()*500 + 1);
    secondArray.push(randomNumber2);
}
// Recupero elemento in pagina
const startArray = document.getElementById('start-array');
startArray.innerHTML = `<span> I due Array iniziali sono: </span> <br />
<ul>
    <li>${firstArray}</li>
    <li>${secondArray}</li>
</ul>`;
  
// while(m !== n){
//     let randomNumber3 = Math.floor(Math.random() * 3) + 1;
//     if(firstArray.length > secondArray.length) {
//             secondArray.push(randomNumber3);   
//         }else{ 
//             firstArray.push(randomNumber3);
//         }   
//       }

 const finalArray = document.getElementById('final-array');
 finalArray.innerHTML = `<span> I due Array Finali sono: </span> <br />
<ul>
    <li>${firstArray}</li>
    <li>${secondArray}</li>
</ul>`;